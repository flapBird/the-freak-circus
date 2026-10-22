import Link from 'next/link';
import FanArtGrid from '@/components/FanArtGrid';
import { tMsg } from '@/lib/messages';
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
        <p className="section-kicker">{tMsg(locale, 'fanArt.kicker')}</p>
        <h2>{character ? tMsg(locale, 'fanArt.titleFor').replace('{name}', name) : tMsg(locale, 'fanArt.title')}</h2>
      </div><Link className="text-link" href={`${prefix}/fan-art${character ? `?character=${character}` : ''}`}>{tMsg(locale, 'fanArt.viewMore')} →</Link></div>
      {!character && <p className="fan-art-intro">{tMsg(locale, 'fanArt.intro')}</p>}
      {items.length ? <FanArtGrid items={items} locale={locale} /> : <p className="fan-art-empty">{tMsg(locale, 'fanArt.empty')}</p>}
    </div>
  </section>;
}
