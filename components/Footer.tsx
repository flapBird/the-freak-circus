import Link from 'next/link';
import { tMsg } from '@/lib/messages';

type Props = { locale: string };

export default function Footer({ locale }: Props) {
  const loc = (p: string) => locale === 'en' ? p : `/${locale}${p}`;
  const sep = <span className="text-circus-border mx-2 text-xs">|</span>;

  return (
    <footer className="border-t border-circus-border mt-16 py-10">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-y-2 text-sm">
          <Link href={loc('/about')} className="text-circus-muted hover:text-circus-gold transition-colors">{tMsg(locale, 'footer.links.about')}</Link>{sep}
          <Link href={loc('/contact')} className="text-circus-muted hover:text-circus-gold transition-colors">{tMsg(locale, 'footer.links.contact')}</Link>{sep}
          <Link href={loc('/privacy')} className="text-circus-muted hover:text-circus-gold transition-colors">{tMsg(locale, 'footer.links.privacy')}</Link>{sep}
          <Link href={loc('/terms')} className="text-circus-muted hover:text-circus-gold transition-colors">{tMsg(locale, 'footer.links.terms')}</Link>
        </div>
        <p className="mt-4 text-xs opacity-40 tracking-wider">{tMsg(locale, 'footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
