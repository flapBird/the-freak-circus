import Link from 'next/link';
import Image from 'next/image';
import { editorialLocale } from '@/lib/site-content';
import { tMsg } from '@/lib/messages';

export default function Footer({ locale }: { locale: string }) {
  const lang = editorialLocale(locale);
  const loc = (path: string) => locale === 'en' ? path : `/${locale}${path}`;

  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <div className="footer-intro">
          <div className="footer-brand">
            <span><Image src="/icon-512.png" alt="" width={54} height={54} /></span>
            <p>The Freak Circus</p>
          </div>
          <p className="footer-note">{tMsg(locale, 'siteFooter.note')}</p>
          <div className="footer-socials">
            <a href="https://x.com/intent/post?url=https%3A%2F%2Fthefreakcircus.help" target="_blank" rel="noopener noreferrer" aria-label={tMsg(locale, 'siteFooter.shareX')}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.4l7.3-8.4L3 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.4 4.1H6.6l11.2 15.7Z" /></svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthefreakcircus.help" target="_blank" rel="noopener noreferrer" aria-label={tMsg(locale, 'siteFooter.shareFacebook')}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H6.8V13h3.1v9h3.8Z" /></svg>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>{tMsg(locale, 'siteFooter.features')}</h2>
          <Link href={loc('/')}>{tMsg(locale, 'siteFooter.play')}</Link>
          <Link href={loc('/characters')}>{tMsg(locale, 'siteFooter.characters')}</Link>
          <Link href={loc('/wiki')}>Wiki</Link>
          <Link href={loc('/day-3')}>Day 3</Link>
          <Link href={loc('/fan-art')}>{tMsg(locale, 'siteFooter.fanArt')}</Link>
          <Link href={loc('/updates')}>{tMsg(locale, 'siteFooter.updates')}</Link>
          <Link href={loc('/download')}>{tMsg(locale, 'siteFooter.download')}</Link>
        </div>
        <div className="footer-column">
          <h2>{tMsg(locale, 'siteFooter.siteInfo')}</h2>
          <Link href={loc('/about')}>{tMsg(locale, 'siteFooter.about')}</Link>
          <Link href={loc('/contact')}>{tMsg(locale, 'siteFooter.contact')}</Link>
          <Link href={loc('/privacy')}>{tMsg(locale, 'siteFooter.privacy')}</Link>
          <Link href={loc('/terms')}>{tMsg(locale, 'siteFooter.terms')}</Link>
          <Link href={loc('/community')}>{tMsg(locale, 'siteFooter.community')}</Link>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <p>© {new Date().getFullYear()} thefreakcircus.help. All rights reserved.</p>
        <p>{tMsg(locale, 'siteFooter.bottom')}</p>
      </div>
    </footer>
  );
}


