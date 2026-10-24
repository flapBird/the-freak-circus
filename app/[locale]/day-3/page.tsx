import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale, OFFICIAL_GAME_URL } from '@/lib/site-content';
import { COMMUNITY_LAST_CHECKED } from '@/data/community-posts';
import { DAY_3_POSTS, LATEST_DAY_3_UPDATE, formatUpdateDate } from '@/lib/day3-updates';
import { rawMsg, tMsg } from '@/lib/messages';
import { CORE_LOCALES } from '@/lib/content-availability';

type Props = { params: { locale: string } };

const LAST_CHECKED = COMMUNITY_LAST_CHECKED;

const day3Updates = [
  ...DAY_3_POSTS.map((post) => ({
    dateTime: post.publishedAt,
    period: { en: formatUpdateDate(post.publishedAt, 'en'), zh: formatUpdateDate(post.publishedAt, 'zh') },
    title: post.day3.headline,
    text: post.summary,
  })),
  {
    dateTime: '2026-08',
    period: { en: 'August 2026', zh: '2026年8月' },
    title: { en: 'Dialogue programming continues', zh: '对白编程仍在继续' },
    text: {
      en: 'The next story continuation remains in active development.',
      zh: '下一段故事内容仍在积极开发中。',
    },
  },
  {
    dateTime: '2026-08',
    period: { en: 'August 2026', zh: '2026年8月' },
    title: { en: 'New artwork is being prepared', zh: '新美术素材正在准备中' },
    text: {
      en: 'At least two new pieces of artwork are expected as part of the ongoing work.',
      zh: '当前开发预计至少还需要两张新的美术作品。',
    },
  },
  {
    dateTime: '2026-08',
    period: { en: 'August 2026', zh: '2026年8月' },
    title: { en: 'Background revisions are planned', zh: '部分背景计划修改' },
    text: {
      en: 'Some existing backgrounds need additional work or adjustment.',
      zh: '部分现有背景仍需进一步制作或调整。',
    },
  },
  {
    dateTime: '2026-08',
    period: { en: 'August 2026', zh: '2026年8月' },
    title: { en: 'Additional character sprites may be needed', zh: '后续场景可能需要更多角色立绘' },
    text: {
      en: 'Later scenes may require more character sprite work.',
      zh: '后续场景可能还需要补充角色立绘。',
    },
  },
  {
    dateTime: null,
    period: { en: 'Current status', zh: '当前状态' },
    title: { en: 'Public Day 3 build — Not released', zh: 'Day 3 公开版本——尚未发布' },
    text: {
      en: 'No new public build containing Day 3 has been announced.',
      zh: '目前尚未公布包含 Day 3 的新公开版本。',
    },
  },
] as const;

export function generateMetadata({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: tMsg(locale, 'day3.x0'),
    description: tMsg(locale, 'day3.x1'),
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/day-3`,
    availableLocales: CORE_LOCALES["day-3"],
    locale,
  },
  );
}

export default function DayThreePage({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;
  const c = rawMsg<Record<string, any>>(locale, 'day3');
  const canonical = `${SITE_URL}${p}/day-3`;
  const localeKey = zh ? 'zh' : 'en';

  return (
    <>
      <SchemaMarkup
        type="WebPage"
        data={{
          name: c.pageTitle,
          description: c.metaDescription,
          url: canonical,
          dateModified: LAST_CHECKED,
          isBasedOn: [...DAY_3_POSTS.map((post) => post.sourceUrl), OFFICIAL_GAME_URL],
          about: { '@type': 'VideoGame', name: 'The Freak Circus' },
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: c.faq.map((item: any) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.linkLabel ? `${item.a} ${item.linkLabel}` : item.a,
            },
          })),
        }}
      />

      <main>
        <header className="page-hero day3-hero">
          <div className="page-container">
            <h1>{c.pageTitle}</h1>
            <p className="page-hero-lead">{c.lead}</p>
            <p className="day3-checked">{c.lastChecked}: <time dateTime={LAST_CHECKED}>{c.lastCheckedDisplay}</time></p>
            <div className="page-hero-actions">
              <a className="button-primary" href="#latest-update">{c.latestCta}</a>
              <a className="button-secondary" href="#timeline">{c.timelineCta}</a>
            </div>
          </div>
        </header>

        <section className="page-section page-container content-split">
          <div className="content-stack">
            <article className="reference-card day3-latest-card" id="latest-update">
              <p className="section-kicker">{c.officialUpdate}</p>
              <h2>{c.latestTitle}</h2>
              <h3>{c.weeklyTitle}</h3>
              <p>{c.latestIntro}</p>
              <ul className="day3-update-list">
                {c.latestPoints.map((item: any) => <li key={item}>{item}</li>)}
              </ul>
              <Link className="text-link" href={`${p}/community#${LATEST_DAY_3_UPDATE.id}`}>
                {zh ? '在社区查看本期更新' : 'View this update in Community'} →
              </Link>
            </article>

            <article className="reference-card" id="timeline">
              <h2>{c.timelineTitle}</h2>
              <p>{c.timelineIntro}</p>
              <div className="day3-timeline">
                {day3Updates.map((update, index) => (
                  <div className="day3-timeline-item" key={`${update.title.en}-${index}`}>
                    <div className="day3-timeline-marker" aria-hidden="true" />
                    {update.dateTime
                      ? <time dateTime={update.dateTime}>{update.period[localeKey]}</time>
                      : <span className="day3-timeline-period">{update.period[localeKey]}</span>}
                    <h3>{update.title[localeKey]}</h3>
                    <p>{update.text[localeKey]}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="reference-card" id="current-version">
              <p className="section-kicker">VERSION 0.2 · PROTOTYPE</p>
              <h2>{c.currentVersionTitle}</h2>
              <ul>{c.currentVersionPoints.map((item: any) => <li key={item}>{item}</li>)}</ul>
            </article>

            <article className="reference-card day3-release-note">
              <h2>{c.releaseNoteTitle}</h2>
              <p>{c.releaseNoteText}</p>
            </article>

            <article className="reference-card" id="faq">
              <h2>{c.faqTitle}</h2>
              <div className="faq-grid day3-faq-grid">
                {c.faq.map((item: any) => (
                  <div className="faq-item" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>
                      {item.a}
                      {item.linkLabel && <> <a href="#latest-update">{item.linkLabel}</a></>}
                    </p>
                  </div>
                ))}
              </div>
            </article>

          </div>

          <aside className="content-stack day3-sidebar">
            <div className="reference-card">
              <p className="section-kicker">{c.snapshot}</p>
              <table className="fact-table"><tbody>
                <tr><th>DAY 3</th><td>{c.inDevelopment}</td></tr>
                <tr><th>{c.releaseDateLabel}</th><td>{c.notAnnounced}</td></tr>
                <tr><th>{c.currentBuildLabel}</th><td>Version 0.2 · Prototype</td></tr>
                <tr><th>{c.lastCheckedLabel}</th><td>{LAST_CHECKED}</td></tr>
              </tbody></table>
            </div>
            <div className="reference-card day3-sidebar-update">
              <p className="section-kicker">{c.latestUpdateLabel}</p>
              <h2>{c.sidebarUpdateTitle}</h2>
              <p>{c.sidebarUpdateText}</p>
              <a className="text-link" href="#latest-update">{c.latestCta} →</a>
            </div>
            <div className="reference-card">
              <h2>{c.continueTitle}</h2>
              <div className="blog-related-list">
                <Link href={`${p}/endings`}><span>{c.endingsLink}</span><small>→</small></Link>
                <Link href={`${p}/characters/heights`}><span>{c.heightsLink}</span><small>→</small></Link>
                <Link href={`${p}/save`}><span>{c.saveLink}</span><small>→</small></Link>
                <Link href={`${p}/faq`}><span>{c.faqLink}</span><small>→</small></Link>
                <Link href={`${p}/updates`}><span>{c.updatesLink}</span><small>→</small></Link>
                <Link href={`${p}/wiki`}><span>{c.wikiLink}</span><small>→</small></Link>
                <Link href={`${p}/download`}><span>{c.downloadLink}</span><small>→</small></Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}




