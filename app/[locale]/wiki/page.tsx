import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { characterCopy, characterSlugs, editorialLocale, officialUpdates } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';
import { wikiCopy } from '@/lib/page-copy';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? 'The Freak Circus Wiki：剧情、角色与游戏资料' : 'The Freak Circus Wiki: Story, Characters & Game Info', description: zh ? '探索 The Freak Circus 的故事设定、角色阵容、0.2 版本内容、支持平台、语言、内容警告、制作信息与更新历史。' : 'Explore The Freak Circus story, characters, version 0.2 content, platforms, languages, content warnings, credits, and development history.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/wiki` ,
    availableLocales: CORE_LOCALES.wiki,
    locale,
  });
}

export default function WikiPage({ params: { locale } }: { params: { locale: string } }) {
  const lang = editorialLocale(locale); const zh = lang === 'zh'; const p = locale === 'en' ? '' : `/${locale}`; const c = wikiCopy[lang] ?? wikiCopy.en;
  return <main><header className="page-hero"><div className="page-container"><p className="section-kicker">SOURCE-LED REFERENCE · VERSION 0.2</p><h1>The Freak Circus Wiki</h1><p className="page-hero-lead">{c.lead}</p><div className="page-hero-actions"><Link className="button-primary" href={`${p}/characters/pierrot`}>Pierrot</Link><Link className="button-secondary" href={`${p}/characters/harlequin`}>Harlequin</Link><Link className="button-secondary" href={`${p}/day-3`}>Day 3</Link></div></div></header>
  <section className="page-section page-container content-split"><div className="content-stack"><article className="reference-card"><h2>{c.overviewTitle}</h2><p>{c.overview1}</p><p>{c.overview2}</p></article><article className="reference-card"><h2>{c.castTitle}</h2><p>{c.castText}</p><div className="link-grid">{characterSlugs.map(slug => <Link key={slug} href={`${p}/characters/${slug}`}>{characterCopy[lang][slug].name}<br/><small>{characterCopy[lang][slug].label}</small></Link>)}</div></article><article className="reference-card" id="columbina"><h2>Columbina</h2><p>{c.columbina}</p></article><article className="reference-card"><h2>{c.warningTitle}</h2><p>{c.warning}</p><ul>{c.warnings.map(x => <li key={x}>{x}</li>)}</ul></article><article className="reference-card"><h2>{c.creditsTitle}</h2><table className="fact-table"><tbody><tr><th>{c.creator}</th><td>Neko Bueno</td></tr><tr><th>{c.publisher}</th><td>Garula</td></tr><tr><th>{c.status}</th><td>Prototype</td></tr><tr><th>{c.version}</th><td>0.2</td></tr></tbody></table></article></div><aside className="content-stack"><div className="reference-card"><p className="section-kicker">QUICK FACTS</p><table className="fact-table"><tbody><tr><th>GENRE</th><td>Visual novel · Psychological horror · Romance</td></tr><tr><th>RATING</th><td>18+</td></tr><tr><th>PLATFORMS</th><td>HTML5 · Windows · macOS · Linux · Android</td></tr><tr><th>LANGUAGES</th><td>English · Português (Brasil) · 中文</td></tr><tr><th>ENDINGS</th><td>{c.ending}</td></tr></tbody></table></div><div className="reference-card"><h2>{c.updates}</h2><div className="wiki-update-list">{officialUpdates.map(u => <a key={u.href} href={u.href} target="_blank" rel="noopener noreferrer"><time>{u.date}</time><span>{u.title}</span><small>↗</small></a>)}</div></div><div className="reference-card"><h2>{c.next}</h2><nav className="wiki-continue-links"><Link href={`${p}/endings`}>{c.endingsLink}</Link><Link href={`${p}/characters/heights`}>{c.heightsLink}</Link><Link href={`${p}/save`}>{c.saveLink}</Link><Link href={`${p}/faq`}>{c.faqLink}</Link><Link href={`${p}/community`}>{c.community}</Link><Link href={`${p}/blog`}>{c.guides}</Link><Link href={`${p}/download`}>{c.download}</Link></nav></div></aside></section></main>;
}



