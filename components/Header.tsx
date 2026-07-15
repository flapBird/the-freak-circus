import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';
import { tMsg } from '@/lib/messages';

type Props = { locale: string };

export default function Header({ locale }: Props) {
  const t = (key: string) => tMsg(locale, 'header.' + key);
  const loc = (path: string) => `/${locale}${path}`;

  const NAV_LINKS = [
    { href: loc('/'), label: t('nav.play') },
    { href: loc('/characters'), label: t('nav.characters') },
    { href: loc('/walkthrough'), label: t('nav.walkthrough') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-circus-black/95 backdrop-blur-sm border-b border-circus-border">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-circus-gold to-transparent opacity-60" />
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href={loc('/')} className="flex flex-col leading-none group">
          <span className="font-display text-circus-gold text-lg tracking-wider group-hover:text-circus-gold-light transition-colors animate-flicker">The Freak Circus</span>
          <span className="text-[10px] text-circus-muted tracking-[0.4em] uppercase">thefreakcircus.help</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-1 items-center justify-end">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="px-3 py-1.5 text-sm text-circus-text hover:text-circus-gold border border-transparent hover:border-circus-border transition-all duration-200 rounded-sm font-sans">{label}</Link>
              </li>
            ))}
            <li className="ml-2 pl-2 border-l border-circus-border"><LocaleSwitcher /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
