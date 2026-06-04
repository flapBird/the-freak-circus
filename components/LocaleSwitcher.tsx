'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

const LOCALES = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'fil', name: 'Filipino' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'es', name: 'Español' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'zh', name: '中文' },
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

      let newPath;
      if (currentMatch) {
        newPath = pathname.replace(LOCALE_PATTERN, `/${code}/`);
      } else if (code !== 'en') {
        newPath = `/${code}${pathname === '/' ? '' : pathname}`;
      } else {
        newPath = pathname;
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
        className="flex items-center gap-1 px-2 py-1 text-xs text-circus-muted hover:text-circus-gold border border-transparent hover:border-circus-border transition-all rounded-sm"
        onClick={() => setOpen(!open)}
        aria-label="Switch language"
        type="button"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{current.name}</span>
        <svg className={"w-3 h-3 transition-transform " + (open ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-circus-card border border-circus-border rounded-sm shadow-lg z-50 min-w-[150px] py-1">
          {LOCALES.map((locale) => (
            <button
              key={locale.code}
              onClick={() => switchLocale(locale.code)}
              className={"w-full text-left px-3 py-1.5 text-xs transition-colors " + (locale.code === currentCode ? 'text-circus-gold bg-circus-gold/5' : 'text-circus-muted hover:text-circus-text hover:bg-circus-card/60')}
              type="button"
            >
              {locale.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
