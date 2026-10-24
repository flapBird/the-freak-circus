import Link from 'next/link';
import FanArtGrid from '@/components/FanArtGrid';
import { getFanArt } from '@/data/fan-art';
import { CharacterSlug, characterCopy, characterSlugs, editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { CORE_LOCALES } from '@/lib/content-availability';
import { tMsg } from '@/lib/messages';

type Props = { params: { locale: string }; searchParams: { character?: string | string[] } };

export function generateMetadata({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: tMsg(locale, 'fanArt.p0'),
    description: tMsg(locale, 'fanArt.p1'),
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
      <p className="section-kicker">{tMsg(locale, 'fanArt.p2')}</p>
      <h1>{tMsg(locale, 'fanArt.p3')}</h1>
      <p className="page-hero-lead">{tMsg(locale, 'fanArt.p4')}</p>
    </div></header>
    <section className="page-section page-container fan-art-gallery" aria-label={tMsg(locale, 'fanArt.p5')}>
      <nav className="fan-art-filters" aria-label={tMsg(locale, 'fanArt.p6')}>
        <Link href={`${prefix}/fan-art`} scroll={false} aria-current={!selected ? 'page' : undefined}>{tMsg(locale, 'fanArt.p7')}</Link>
        {characterSlugs.map(slug => <Link key={slug} href={`${prefix}/fan-art?character=${slug}`} scroll={false} aria-current={selected === slug ? 'page' : undefined}>{characterCopy[lang][slug].name}</Link>)}
      </nav>
      <p className="fan-art-count" role="status">{selected ? characterCopy[lang][selected].name : tMsg(locale, 'fanArt.p8')} <span>· {items.length} {tMsg(locale, 'fanArt.p9')}</span></p>
      {items.length ? <FanArtGrid key={selected ?? 'all'} items={items} locale={locale} /> : <div className="fan-art-empty"><h2>{tMsg(locale, 'fanArt.p10')}</h2><p>{tMsg(locale, 'fanArt.p11')}</p><Link className="text-link" href={`${prefix}/fan-art`}>{tMsg(locale, 'fanArt.p12')} →</Link></div>}
    </section>

    <section className="page-section page-container text-page">
      <article className="longform-copy">
        <h2>{tMsg(locale, 'fanArt.p13')}</h2>
        <p>
          {tMsg(locale, 'fanArt.x0')}
        </p>
        <p>
          {tMsg(locale, 'fanArt.x1')}
        </p>

        <h2>{tMsg(locale, 'fanArt.p14')}</h2>
        <p>
          {tMsg(locale, 'fanArt.x2')}
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
          {tMsg(locale, 'fanArt.x3')}
        </p>

        <h2>{tMsg(locale, 'fanArt.p15')}</h2>
        <p>
          {tMsg(locale, 'fanArt.x4')}
        </p>
        <p>
          {tMsg(locale, 'fanArt.x5')}
        </p>

        <h2>{tMsg(locale, 'fanArt.p16')}</h2>
        <p>
          {tMsg(locale, 'fanArt.x6')}
        </p>
        <ul>
          <li><Link href={`${prefix}/characters`}>{tMsg(locale, 'fanArt.p17')}</Link></li>
          <li><Link href={`${prefix}/endings`}>{tMsg(locale, 'fanArt.p18')}</Link></li>
          <li><Link href={`${prefix}/community`}>{tMsg(locale, 'fanArt.p19')}</Link></li>
          <li><Link href={`${prefix}/download`}>{tMsg(locale, 'fanArt.p20')}</Link></li>
        </ul>
      </article>
    </section>
  </main>;
}
