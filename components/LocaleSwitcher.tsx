'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { tMsg } from '@/lib/messages';

const LOCALES = [
  { code: 'en', name: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'pt', name: 'Portugu\u00eas', flag: '\u{1F1F5}\u{1F1F9}' },
  { code: 'fil', name: 'Filipino', flag: '\u{1F1F5}\u{1F1ED}' },
  { code: 'vi', name: 'Ti\u1EBFng Vi\u1EC7t', flag: '\u{1F1FB}\u{1F1F3}' },
  { code: 'es', name: 'Espa\u00F1ol', flag: '\u{1F1EA}\u{1F1F8}' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '\u{1F1EE}\u{1F1E9}' },
  { code: 'zh', name: '\u4E2D\u6587', flag: '\u{1F1E8}\u{1F1F3}' },
];

const LOCALE_PATTERN = /^\/(en|pt|fil|vi|es|id|zh)(\/|$)/;

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentMatch = pathname.match(LOCALE_PATTERN);
  const currentCode = currentMatch?.[1] ?? 'en';
  const current = LOCALES.find((l) => l.code === currentCode) ?? LOCALES[0];

  const switchLocale = useCallback(
    (code: string) => {
      if (code === currentCode) return;
      let newPath: string;
      if (currentMatch) {
        newPath = pathname.replace(LOCALE_PATTERN, `/${code}/`);
      } else if (code !== 'en') {
        newPath = `/${code}${pathname === '/' ? '' : pathname}`;
      } else {
        newPath = pathname;
      }
      // English is the default, unprefixed locale: strip the /en prefix so the
      // URL matches the site's canonical form (/ and /news, not /en, /en/news).
      if (code === 'en') {
        newPath = newPath.replace(/^\/en(?=\/|$)/, '') || '/';
      }
      newPath = newPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
      document.cookie = 'NEXT_LOCALE=' + code + ';path=/;max-age=' + (30*24*60*60);
      router.push(newPath);
      setOpen(false);
    },
    [pathname, currentMatch, currentCode, router],
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="flex items-center gap-1.5 px-2 py-1 text-sm text-circus-muted hover:text-circus-gold
                   border border-transparent hover:border-circus-border transition-all rounded-sm"
        onClick={() => setOpen(!open)}
        aria-label={tMsg(currentCode, 'ui.switchLanguage')}
        type="button"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1 bg-circus-card border border-circus-border
                     rounded-sm shadow-lg z-50 min-w-[170px] py-1"
        >
          {LOCALES.map((locale) => (
            <button
              key={locale.code}
              onClick={() => switchLocale(locale.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors
                ${locale.code === currentCode
                  ? 'text-circus-gold bg-circus-gold/5'
                  : 'text-circus-muted hover:text-circus-text hover:bg-circus-card/60'
                }`}
              type="button"
            >
              <span className="text-base leading-none">{locale.flag}</span>
              <span>{locale.name}</span>
              {locale.code === currentCode && (
                <span className="ml-auto text-circus-gold text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
