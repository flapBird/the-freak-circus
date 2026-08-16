import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale, OFFICIAL_GAME_URL } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return buildMetadata({ title: 'The Freak Circus Walkthrough', description: 'Explore The Freak Circus story progression, character encounters, choices, and chapter information for the current game build.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/walkthrough`, noIndex: true });
}
export default function WalkthroughPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh'; const p = locale === 'en' ? '' : `/${locale}`;
  return <main><header className="page-hero"><div className="page-container"><p className="section-kicker">EDITORIAL REVIEW</p><h1>{zh ? '攻略内容正在重新核验' : 'Walkthrough under source review'}</h1><p className="page-hero-lead">{zh ? '旧页面包含无法从当前官方版本核实的好结局、路线与选项说法，现已撤下并停止索引。' : 'The previous page contained good-ending, route, and choice claims that we could not verify against the current official build. Those claims have been withdrawn and this URL is no longer indexable.'}</p></div></header><section className="page-section page-container"><article className="reference-card"><h2>{zh ? '现在去哪里？' : 'Where to go now'}</h2><p>{zh ? '如需版本状态请查看 Day 3；如需已核实角色资料请进入角色页。未来攻略只会标明适用版本、实测条件和剧透范围。' : 'Use the Day 3 page for release status and the character section for verified profiles. Any future walkthrough must name its tested build, reproducible conditions, and spoiler scope.'}</p><div className="link-grid"><Link href={`${p}/day-3`}>Day 3 →</Link><Link href={`${p}/characters`}>{zh ? '角色' : 'Characters'} →</Link><a href={OFFICIAL_GAME_URL} target="_blank" rel="noopener noreferrer">Official game ↗</a></div></article></section></main>;
}
