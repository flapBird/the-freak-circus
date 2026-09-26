import Link from 'next/link';
import FanArtGrid from '@/components/FanArtGrid';
import { getFanArt, getFeaturedFanArt } from '@/data/fan-art';
import { CharacterSlug, characterCopy, editorialLocale } from '@/lib/site-content';

export default function FanArtSection({ locale, character }: { locale: string; character?: CharacterSlug }) {
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const items = character ? getFanArt(character).slice(0, 4) : getFeaturedFanArt(4);
  const name = character ? characterCopy[lang][character].name : '';
  return <section className="page-section page-section-tinted fan-art-section" id="fan-art">
    <div className="page-container">
      <div className="section-heading section-heading-row"><div>
        <p className="section-kicker">{zh ? '来自社区的创作' : 'CREATED BY THE COMMUNITY'}</p>
        <h2>{character ? (zh ? `${name} 同人作品` : `${name} Fan Art`) : (zh ? '同人画廊' : 'FAN ART GALLERY')}</h2>
      </div><Link className="text-link" href={`${prefix}/fan-art${character ? `?character=${character}` : ''}`}>{zh ? '查看更多作品' : 'View more artwork'} →</Link></div>
      {!character && <p className="fan-art-intro">{zh ? '用粉丝的视角重新认识马戏团。浏览插画与同人漫画，发现你喜欢的创作者。' : 'The circus, through the eyes of its fans. Explore illustrations and fan comics, and discover the artists behind them.'}</p>}
      {items.length ? <FanArtGrid items={items} locale={locale} /> : <p className="fan-art-empty">{zh ? '这个角色的作品正在整理中。先去画廊发现更多创作。' : 'Artwork for this character is being curated. Explore more creations in the gallery.'}</p>}
    </div>
  </section>;
}
