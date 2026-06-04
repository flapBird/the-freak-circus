import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'];
const DEFAULT_LOCALE = 'en';

const COUNTRY_MAP: Record<string, string> = {
  US: 'en', GB: 'en', AU: 'en', CA: 'en', NZ: 'en', IE: 'en',
  ZA: 'en', IN: 'en', SG: 'en', MY: 'en', KE: 'en', NG: 'en',
  GH: 'en', JM: 'en', TT: 'en', BB: 'en',
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', CV: 'pt', GW: 'pt',
  ST: 'pt', TL: 'pt',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es',
  HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es',
  UY: 'es', GQ: 'es', PR: 'es',
  PH: 'fil', VN: 'vi', ID: 'id',
  CN: 'zh', TW: 'zh', HK: 'zh',
};

export default function RootPage() {
  const h = headers();

  // 0. Check NEXT_LOCALE cookie (user explicitly chose a locale)
  const cookie = h.get('cookie') || '';
  const cookieMatch = cookie.match(/NEXT_LOCALE=(en|pt|fil|vi|es|id|zh)/);
  if (cookieMatch && LOCALES.includes(cookieMatch[1])) {
    redirect(`/${cookieMatch[1]}`);
    return;
  }

  // 1. Try CDN headers / IP geolocation
  const cdnHeaders = ['cloudfront-viewer-country', 'cf-ipcountry', 'x-vercel-ip-country', 'x-country-code'];
  for (const header of cdnHeaders) {
    const val = h.get(header);
    if (val && val.length === 2 && COUNTRY_MAP[val.toUpperCase()]) {
      redirect(`/${COUNTRY_MAP[val.toUpperCase()]}`);
      return;
    }
  }

  // 2. Try geoip-lite
  const ip = (h.get('x-forwarded-for') || h.get('x-real-ip') || '').split(',')[0].trim();
  if (ip && ip !== '::1' && ip !== '127.0.0.1' && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
    try {
      const geoip = require('geoip-lite');
      const geo = geoip.lookup(ip);
      if (geo?.country && COUNTRY_MAP[geo.country]) {
        redirect(`/${COUNTRY_MAP[geo.country]}`);
        return;
      }
    } catch {}
  }

  // 3. Fall back to browser Accept-Language
  const acceptLang = h.get('accept-language') || '';
  const lang = acceptLang.split(',').map(l => l.split(';')[0].trim().split('-')[0].toLowerCase()).find(l => LOCALES.includes(l));
  if (lang) {
    redirect(`/${lang}`);
    return;
  }

  // 4. Default to English
  redirect(`/${DEFAULT_LOCALE}`);
}
