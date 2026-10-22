import Link from 'next/link';
import FanArtGrid from '@/components/FanArtGrid';
import { getFanArt } from '@/data/fan-art';
import { CharacterSlug, characterCopy, characterSlugs, editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { CORE_LOCALES } from '@/lib/content-availability';

type Props = { params: { locale: string }; searchParams: { character?: string | string[] } };

export function generateMetadata({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: zh ? 'The Freak Circus 同人画廊' : 'The Freak Circus Fan Art Gallery',
    description: zh ? '探索 Pierrot、Harlequin、Jester、Doctor 与 Ticket Taker 的社区同人作品，按角色浏览图片并发现原作者。' : 'Explore community fan art of Pierrot, Harlequin, Jester, Doctor and Ticket Taker. Browse artwork by character and discover the original artists.',
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/fan-art`,
    availableLocales: CORE_LOCALES["fan-art"],
    locale,
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
        <Link href={`${prefix}/fan-art`} scroll={false} aria-current={!selected ? 'page' : undefined}>{zh ? '全部作品' : 'All artwork'}</Link>
        {characterSlugs.map(slug => <Link key={slug} href={`${prefix}/fan-art?character=${slug}`} scroll={false} aria-current={selected === slug ? 'page' : undefined}>{characterCopy[lang][slug].name}</Link>)}
      </nav>
      <p className="fan-art-count" role="status">{selected ? characterCopy[lang][selected].name : zh ? '全部作品' : 'All artwork'} <span>· {items.length} {zh ? '张作品' : 'artworks'}</span></p>
      {items.length ? <FanArtGrid key={selected ?? 'all'} items={items} locale={locale} /> : <div className="fan-art-empty"><h2>{zh ? '作品整理中' : 'More artwork to come'}</h2><p>{zh ? '这个角色的作品还在整理，先看看其他角色吧。' : 'We’re curating this character’s artwork. Discover the other characters in the meantime.'}</p><Link className="text-link" href={`${prefix}/fan-art`}>{zh ? '浏览全部作品' : 'Browse all artwork'} →</Link></div>}
    </section>

    <section className="page-section page-container text-page">
      <article className="longform-copy">
        <h2>{zh ? '这个画廊如何策展' : 'How this gallery is curated'}</h2>
        <p>
          {zh
            ? '本站的同人作品全部由人工挑选，每一张都保留原作者与原始发布帖的记录。我们不会把网络上找到的作品未经许可搬运成自己的画廊：如果来源、授权或署名不清楚，就暂时不展示。'
            : 'Every piece here was selected by hand, and each one keeps a record of its artist and original post. We do not turn fan work found online into an unlicensed house gallery: when the source, permission, or attribution is unclear, the piece is withheld rather than shown.'}
        </p>
        <p>
          {zh
            ? '这意味着画廊规模会比自动抓取的镜像站小得多，也不会收录那些注明"请勿转载"或来自聚合站的作品。如果你希望自己的作品出现在这里，可以发来链接并说明是否允许本站展示——需要时会先取得你的同意。'
            : 'That means this gallery is smaller than an automatically scraped mirror would be, and it excludes anything marked "do not repost" or that comes from an aggregator site. If you would like your work included, send the link and say whether this site may display it — permission is requested first where it is needed.'}
        </p>

        <h2>{zh ? '按角色浏览' : 'Browse by character'}</h2>
        <p>
          {zh
            ? '当前版本登场了五位角色，他们的性格定位差别很大，同人创作的方向也因此各不相同。'
            : 'Five characters are introduced in the current build, and their very different personalities pull fan art in different directions.'}
        </p>
        <ul>
          {characterSlugs.map((slug) => {
            const ch = characterCopy[lang][slug];
            const count = getFanArt(slug).length;
            return (
              <li key={slug}>
                <Link href={`${prefix}/fan-art?character=${slug}`}>{ch.name}</Link>
                {zh ? `（${ch.label}）` : ` — ${ch.label}`}
                {zh ? `：${count} 张作品` : `: ${count} ${count === 1 ? 'artwork' : 'artworks'}`}
              </li>
            );
          })}
        </ul>
        <p>
          {zh
            ? '想了解某位角色的完整资料，包括官方身高、年龄顺序与路线状态，可以前往角色档案页。'
            : 'For a full profile of any of them — official height, age order, and route status — the character pages have the detail.'}
        </p>

        <h2>{zh ? '创作与展示约定' : 'Creation and display notes'}</h2>
        <p>
          {zh
            ? '同人创作是这款游戏粉丝文化中很正常的一部分，本站也欢迎。请注意几点：作品版权归原作者所有，本站只做展示；本站不托管游戏文件，也不重新打包或镜像任何下载包；涉及 18+ 题材的作品会做标注。'
            : 'Fan art is a normal part of this game\'s fandom and is welcome here. A few notes: the work stays with its creator and this site only displays it; the site hosts no game files and repackages or mirrors no download; pieces covering 18+ subject matter are labelled as such.'}
        </p>
        <p>
          {zh
            ? '点击任意一张图片可以放大查看。放大后的窗口只显示作品本身和标题，不额外添加创作者标签或外部链接——署名信息保留在本站的记录里。'
            : 'Selecting an image opens it larger. The enlarged view shows the artwork and its title only — no added creator labels or outbound links — while the attribution stays in this site\'s own record.'}
        </p>

        <h2>{zh ? '相关页面' : 'Related pages'}</h2>
        <p>
          {zh
            ? '画廊之外，本站还有角色档案、结局与路线说明，以及官方下载渠道的指引。'
            : 'Beyond the gallery, the site also carries character profiles, an endings and routes breakdown, and a guide to the official download channels.'}
        </p>
        <ul>
          <li><Link href={`${prefix}/characters`}>{zh ? '全部角色档案' : 'All character profiles'}</Link></li>
          <li><Link href={`${prefix}/endings`}>{zh ? '结局与路线' : 'Endings and routes'}</Link></li>
          <li><Link href={`${prefix}/community`}>{zh ? '社区与官方动态' : 'Community and official updates'}</Link></li>
          <li><Link href={`${prefix}/download`}>{zh ? '下载与游玩' : 'Download and play'}</Link></li>
        </ul>
      </article>
    </section>
  </main>;
}
