import Link from 'next/link';
import Image from 'next/image';
import { editorialLocale } from '@/lib/site-content';

export default function Footer({ locale }: { locale: string }) {
  const lang = editorialLocale(locale);
  const loc = (path: string) => locale === 'en' ? path : `/${locale}${path}`;
  const copy = lang === 'zh' ? zh : en;

  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <div className="footer-intro">
          <div className="footer-brand">
            <span><Image src="/icon-512.png" alt="" width={54} height={54} /></span>
            <p>The Freak Circus</p>
          </div>
          <p className="footer-note">{copy.note}</p>
          <div className="footer-socials">
            <a href="https://x.com/intent/post?url=https%3A%2F%2Fthefreakcircus.help" target="_blank" rel="noopener noreferrer" aria-label={copy.shareX}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.4l7.3-8.4L3 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.4 4.1H6.6l11.2 15.7Z" /></svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthefreakcircus.help" target="_blank" rel="noopener noreferrer" aria-label={copy.shareFacebook}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H6.8V13h3.1v9h3.8Z" /></svg>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>{copy.features}</h2>
          <Link href={loc('/')}>{copy.play}</Link>
          <Link href={loc('/characters')}>{copy.characters}</Link>
          <Link href={loc('/wiki')}>Wiki</Link>
          <Link href={loc('/day-3')}>Day 3</Link>
          <Link href={loc('/games')}>{copy.games}</Link>
          <Link href={loc('/updates')}>{copy.updates}</Link>
          <Link href={loc('/download')}>{copy.download}</Link>
        </div>
        <div className="footer-column">
          <h2>{copy.siteInfo}</h2>
          <Link href={loc('/about')}>{copy.about}</Link>
          <Link href={loc('/contact')}>{copy.contact}</Link>
          <Link href={loc('/privacy')}>{copy.privacy}</Link>
          <Link href={loc('/terms')}>{copy.terms}</Link>
          <Link href={loc('/community')}>{copy.community}</Link>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <p>© {new Date().getFullYear()} thefreakcircus.help. All rights reserved.</p>
        <p>{copy.bottom}</p>
      </div>
    </footer>
  );
}

const en = {
  note: 'Discover a disturbing circus world shaped by obsession, manipulation, and rivalry, where Pierrot and Harlequin draw you into a haunting visual novel experience.',
  features: 'Explore the Site', siteInfo: 'Site Information', play: 'Home', characters: 'Characters', download: 'Download',
  updates: 'Updates', games: 'Narrative Games', community: 'Community',
  about: 'About', contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Use',
  shareX: 'Share thefreakcircus.help on X', shareFacebook: 'Share thefreakcircus.help on Facebook',
  bottom: 'This is an unofficial fan-made website created for informational purposes. It has no official connection with the original creators or publishers. No game files are hosted here. All trademarks and copyrighted content belong to their respective owners.',
};

const zh: typeof en = {
  note: '探索一个由执念、操纵与竞争塑造的诡异马戏世界，让 Pierrot 与 Harlequin 带你进入令人不安的视觉小说体验。',
  features: '站点功能', siteInfo: '网站信息', play: '首页', characters: '角色', download: '下载',
  updates: '更新', games: '叙事游戏', community: '社区',
  about: '关于', contact: '联系我们', privacy: '隐私政策', terms: '使用条款',
  shareX: '在 X 分享 thefreakcircus.help', shareFacebook: '在 Facebook 分享 thefreakcircus.help',
  bottom: '本站是出于信息整理目的创建的非官方粉丝网站，与原作者或发行方没有官方关联。本站不托管游戏文件，所有商标及受版权保护的内容均归各自权利人所有。',
};
