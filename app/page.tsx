import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { tMsg } from '@/lib/messages';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import HomeContent from '@/components/HomeContent';

export async function generateMetadata() {
  return buildMetadata({
    title: tMsg('en', 'meta.homeTitle'),
    description: tMsg('en', 'meta.homeDesc'),
    canonical: `${SITE_URL}`,
  });
}

const LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'];
const COUNTRY_MAP: Record<string, string> = {
  US: 'en', GB: 'en', AU: 'en', CA: 'en', NZ: 'en', IE: 'en',
  PT: 'pt', BR: 'pt', ES: 'es', MX: 'es', AR: 'es', CO: 'es',
  PH: 'fil', VN: 'vi', ID: 'id',
  CN: 'zh', TW: 'zh', HK: 'zh',
};

export default function RootPage() {
  const h = headers();

  // Cookie
  const cookieMatch = h.get('cookie')?.match(/NEXT_LOCALE=(en|pt|fil|vi|es|id|zh)/);
  if (cookieMatch && cookieMatch[1] !== 'en') {
    redirect(`/${cookieMatch[1]}`);
    return;
  }

  // CDN/IP geo
  for (const header of ['cloudfront-viewer-country', 'cf-ipcountry', 'x-vercel-ip-country', 'x-country-code']) {
    const val = h.get(header);
    if (val && val.length === 2 && COUNTRY_MAP[val.toUpperCase()] && COUNTRY_MAP[val.toUpperCase()] !== 'en') {
      redirect(`/${COUNTRY_MAP[val.toUpperCase()]}`);
      return;
    }
  }

  const ip = (h.get('x-forwarded-for') || h.get('x-real-ip') || '').split(',')[0].trim();
  if (ip && ip !== '::1' && ip !== '127.0.0.1' && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
    try {
      const geoip = require('geoip-lite');
      const geo = geoip.lookup(ip);
      if (geo?.country && COUNTRY_MAP[geo.country] && COUNTRY_MAP[geo.country] !== 'en') {
        redirect(`/${COUNTRY_MAP[geo.country]}`);
        return;
      }
    } catch {}
  }

  // Default: render English at /
  return (
    <PageShell locale="en">
      <HomeContent locale="en" />
    </PageShell>
  );
}
