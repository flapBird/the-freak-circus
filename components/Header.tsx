import Link from 'next/link';
import Image from 'next/image';
import LocaleSwitcher from './LocaleSwitcher';
import { characterCopy, characterSlugs, editorialLocale } from '@/lib/site-content';

type Props = { locale: string };

export default function Header({ locale }: Props) {
  const lang = editorialLocale(locale);
  const loc = (path: string) => locale === 'en' ? path : `/${locale}${path}`;
  const labels = lang === 'zh'
    ? { home: '首页', characters: '角色', wiki: 'Wiki', day3: 'Day 3', blog: 'Blog', download: '下载', games: '叙事游戏', community: '社区', menu: '菜单', all: '全部角色' }
    : { home: 'Home', characters: 'Characters', wiki: 'Wiki', day3: 'Day 3', blog: 'Blog', download: 'Download', games: 'Narrative Games', community: 'Community', menu: 'Menu', all: 'All characters' };

  const simpleLinks = [
    { href: loc('/'), label: labels.home },
    { href: loc('/wiki'), label: labels.wiki },
    { href: loc('/day-3'), label: labels.day3 },
    { href: loc('/games'), label: labels.games },
    { href: loc('/community'), label: labels.community },
    { href: loc('/blog'), label: labels.blog },
    { href: loc('/download'), label: labels.download },
  ];

  const characterMenu = (
    <div className="nav-popover">
      {characterSlugs.map((slug) => (
        <Link key={slug} href={loc(`/characters/${slug}`)}>
          <span>{characterCopy[lang][slug].name}</span>
        </Link>
      ))}
      <Link href={loc('/characters')} className="nav-popover-all">{labels.all} →</Link>
    </div>
  );

  return (
    <header className="site-header">
      <div className="site-header-glow" />
      <div className="site-header-inner">
        <Link href={loc('/')} className="site-brand" aria-label="The Freak Circus home">
          <span className="site-brand-mark"><Image src="/icon-512.png" alt="" width={44} height={44} priority /></span>
          <strong>The Freak Circus</strong>
        </Link>

        <nav className="site-header-nav hidden xl:block" aria-label="Main navigation">
          <ul className="desktop-nav">
            <li><Link href={loc('/')}>{labels.home}</Link></li>
            <li>
              <div className="nav-details">
                <Link href={loc('/characters')} className="nav-trigger">{labels.characters}</Link>
                {characterMenu}
              </div>
            </li>
            {simpleLinks.slice(1).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block"><LocaleSwitcher /></div>

        <details className="mobile-nav xl:hidden">
          <summary>{labels.menu}<span aria-hidden="true">☰</span></summary>
          <div className="mobile-nav-panel">
            <Link href={simpleLinks[0].href}>{simpleLinks[0].label}</Link>
            <details className="mobile-character-menu">
              <summary>{labels.characters}<span aria-hidden="true">⌄</span></summary>
              <div>
                {characterSlugs.map((slug) => (
                  <Link key={slug} href={loc(`/characters/${slug}`)}>{characterCopy[lang][slug].name}</Link>
                ))}
                <Link href={loc('/characters')} className="mobile-character-all">{labels.all}</Link>
              </div>
            </details>
            {simpleLinks.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <div className="mobile-language"><LocaleSwitcher /></div>
          </div>
        </details>
      </div>
    </header>
  );
}
