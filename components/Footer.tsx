import Link from 'next/link';
import { tMsg } from '@/lib/messages';

type Props = { locale: string };

export default function Footer({ locale }: Props) {
  const t = (key: string, p?: Record<string, any>) => tMsg(locale, 'footer.' + key, p);
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <footer className="border-t border-circus-border mt-16 py-10 text-circus-muted text-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="divider-ornament mb-8">
          <span className="font-display text-xs tracking-widest text-circus-gold/60">TFC</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-circus-gold/80 text-xs tracking-widest uppercase mb-3">{t('aboutTitle')}</h3>
            <p className="text-xs leading-relaxed opacity-70">{t('aboutText')}</p>
          </div>
          <div>
            <h3 className="font-display text-circus-gold/80 text-xs tracking-widest uppercase mb-3">{t('quickLinks')}</h3>
            <ul className="space-y-1.5 text-xs opacity-70">
              {[
                { href: `${p}/`, label: t('links.play') },
                { href: `${p}/characters`, label: t('links.characters') },
                { href: `${p}/walkthrough`, label: t('links.walkthrough') },
                { href: `${p}/blog`, label: t('links.blog') },
                { href: 'https://garula.itch.io/the-freak-circus', label: t('links.official'), ext: true },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-circus-gold transition-colors"
                    {...(link.ext ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})}>
                    {link.label}{link.ext && ` ${t('extLabel')}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-circus-gold/80 text-xs tracking-widest uppercase mb-3">{t('disclaimerTitle')}</h3>
            <p className="text-xs leading-relaxed opacity-70">{t('disclaimerText')}</p>
          </div>
        </div>
        <p className="text-center text-[11px] opacity-40 tracking-wider">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
