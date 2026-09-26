import Link from 'next/link';
import FanArtGrid from '@/components/FanArtGrid';
import { getFanArt } from '@/data/fan-art';
import { CharacterSlug, characterCopy, characterSlugs, editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string }; searchParams: { character?: string | string[] } };

export function generateMetadata({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: zh ? 'The Freak Circus 同人画廊' : 'The Freak Circus Fan Art Gallery',
    description: zh ? '探索 Pierrot、Harlequin、Jester、Doctor 与 Ticket Taker 的社区同人作品，按角色浏览图片并发现原作者。' : 'Explore community fan art of Pierrot, Harlequin, Jester, Doctor and Ticket Taker. Browse artwork by character and discover the original artists.',
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/fan-art`,
  });
}

export default function FanArtPage({ params: { locale }, searchParams }: Props) {
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const selected = typeof searchParams.character === 'string' && characterSlugs.includes(searchParams.character as CharacterSlug) ? searchParams.character as CharacterSlug : undefined;
  const items = getFanArt(selected);
  return <main className="fan-art-page">
    <header className="page-hero"><div className="page-container">
      <p className="section-kicker">{zh ? '来自社区的创作' : 'CREATED BY THE COMMUNITY'}</p>
      <h1>{zh ? '同人画廊' : 'Fan Art Gallery'}</h1>
      <p className="page-hero-lead">{zh ? '同一个马戏团，无数种想象。发现粉丝笔下的角色、故事与瞬间。' : 'One circus. Countless imaginations. Discover the characters, stories, and moments brought to life by fans.'}</p>
    </div></header>
    <section className="page-section page-container fan-art-gallery" aria-label={zh ? '社区作品' : 'Community artwork'}>
      <nav className="fan-art-filters" aria-label={zh ? '按角色筛选' : 'Filter by character'}>
        <Link href={`${prefix}/fan-art`} aria-current={!selected ? 'page' : undefined}>{zh ? '全部作品' : 'All artwork'}</Link>
        {characterSlugs.map(slug => <Link key={slug} href={`${prefix}/fan-art?character=${slug}`} aria-current={selected === slug ? 'page' : undefined}>{characterCopy[lang][slug].name}</Link>)}
      </nav>
      <p className="fan-art-count" role="status">{selected ? characterCopy[lang][selected].name : zh ? '全部作品' : 'All artwork'} <span>· {items.length} {zh ? '张作品' : 'artworks'}</span></p>
      {items.length ? <FanArtGrid key={selected ?? 'all'} items={items} locale={locale} /> : <div className="fan-art-empty"><h2>{zh ? '作品整理中' : 'More artwork to come'}</h2><p>{zh ? '这个角色的作品还在整理，先看看其他角色吧。' : 'We’re curating this character’s artwork. Discover the other characters in the meantime.'}</p><Link className="text-link" href={`${prefix}/fan-art`}>{zh ? '浏览全部作品' : 'Browse all artwork'} →</Link></div>}
    </section>
  </main>;
}
