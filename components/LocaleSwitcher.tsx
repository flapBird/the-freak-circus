'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { tMsg } from '@/lib/messages';

const LOCALES = [
  { code: 'en', name: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'zh', name: '\u4E2D\u6587', flag: '\u{1F1E8}\u{1F1F3}' },
];

const LOCALE_PATTERN = /^\/(en|pt|fil|vi|es|id|zh)(\/|$)/;

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuState, setMenuState] = useState<'closed' | 'open' | 'closing'>('closed');
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentMatch = pathname.match(LOCALE_PATTERN);
  const currentCode = currentMatch?.[1] ?? 'en';
  const current = LOCALES.find((l) => l.code === currentCode) ?? LOCALES[0];
  const open = menuState === 'open';

  const openDropdown = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuState('open');
  }, []);

  const closeDropdown = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuState((state) => state === 'closed' ? state : 'closing');
    const closeDuration = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--dropdown-close-dur'),
    ) || 150;
    closeTimerRef.current = setTimeout(() => setMenuState('closed'), closeDuration);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) closeDropdown();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDropdown();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [closeDropdown]);

  const switchLocale = useCallback(
    (code: string) => {
      if (code === currentCode) {
        closeDropdown();
        return;
      }
      let newPath: string;
      if (currentMatch) {
        newPath = pathname.replace(LOCALE_PATTERN, `/${code}/`);
      } else if (code !== 'en') {
        newPath = `/${code}${pathname === '/' ? '' : pathname}`;
      } else {
        newPath = pathname;
      }
      // English is the default, unprefixed locale: strip the /en prefix so the
      // URL matches the site's canonical form (/ and /updates, not /en, /en/updates).
      if (code === 'en') {
        newPath = newPath.replace(/^\/en(?=\/|$)/, '') || '/';
      }
      newPath = newPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
      document.cookie = 'NEXT_LOCALE=' + code + ';path=/;max-age=' + (30*24*60*60);
      router.push(newPath);
      closeDropdown();
    },
    [pathname, currentMatch, currentCode, router, closeDropdown],
  );

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="flex h-9 min-w-[116px] items-center gap-2 rounded-sm border border-circus-border
                   bg-circus-card px-3 text-sm text-circus-text shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_3px_10px_rgba(0,0,0,0.3)]
                   transition-[color,background-color,border-color,box-shadow,transform] duration-150
                   hover:border-circus-gold/50 hover:bg-[#21161e] hover:text-circus-gold
                   active:translate-y-px active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.45)]"
        onClick={open ? closeDropdown : openDropdown}
        aria-label={tMsg(currentCode, 'ui.switchLanguage')}
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden flex-1 text-left sm:inline">{current.name}</span>
        <svg className={`ml-auto h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`t-dropdown absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-sm
                    border border-circus-gold/25 bg-[#160f14] p-1
                    shadow-[0_14px_32px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,0,0,0.3)]
                    ${menuState === 'open' ? 'is-open' : ''} ${menuState === 'closing' ? 'is-closing' : ''}`}
        data-origin="top-right"
        role="menu"
        aria-hidden={!open}
      >
        {LOCALES.map((locale) => (
          <button
            key={locale.code}
            onClick={() => switchLocale(locale.code)}
            className={`flex w-full items-center gap-2 rounded-[2px] border border-transparent px-3 py-2.5 text-sm
              transition-[color,background-color,border-color] duration-150
              ${locale.code === currentCode
                ? 'border-circus-gold/15 bg-circus-gold/10 text-circus-gold'
                : 'text-circus-muted hover:border-circus-border hover:bg-circus-card hover:text-circus-text'
              }`}
            type="button"
            role="menuitemradio"
            aria-checked={locale.code === currentCode}
            tabIndex={open ? 0 : -1}
          >
            <span className="text-base leading-none">{locale.flag}</span>
            <span>{locale.name}</span>
            {locale.code === currentCode && (
              <span className="ml-auto inline-flex h-4 w-4 items-center justify-center rounded-full border border-circus-gold/50 text-[10px] text-circus-gold">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
