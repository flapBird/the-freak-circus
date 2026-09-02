import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { DAY_3_UPDATE_URL, editorialLocale, OFFICIAL_GAME_URL } from '@/lib/site-content';

type Props = { params: { locale: string } };

const LAST_CHECKED = '2026-08-31';

const day3Updates = [
  {
    dateTime: '2026-08-31',
    period: { en: 'August 31, 2026', zh: '2026年8月31日' },
    title: { en: 'Opening section advances and new sprites are selected', zh: '开篇制作推进，三位角色新立绘已确定' },
    text: {
      en: 'The developer reported good progress on the opening section while translating and programming its extensive dialogue. New sprites were selected for Harlequin, Pierrot, and Jester.',
      zh: '开发者表示 Day 3 开篇部分进展良好，大量对白正在翻译和程序实装中；Harlequin、Pierrot 与 Jester 的新立绘已经确定。',
    },
  },
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
    title: zh
      ? 'The Freak Circus Day 3：发布日期与最新更新'
      : 'The Freak Circus Day 3: Release Date & Updates',
    description: zh
      ? '查看 The Freak Circus Day 3 的最新开发动态、当前发布状态、Version 0.2 信息，以及官方是否已公布发布日期。'
      : 'Check the latest The Freak Circus Day 3 development updates, current release status, Version 0.2 information, and whether an official release date has been announced.',
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/day-3`,
  });
}

export default function DayThreePage({ params: { locale } }: Props) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;
  const c = zh ? copyZh : copyEn;
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
          isBasedOn: [DAY_3_UPDATE_URL, OFFICIAL_GAME_URL],
          about: { '@type': 'VideoGame', name: 'The Freak Circus' },
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: c.faq.map((item) => ({
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
                {c.latestPoints.map((item) => <li key={item}>{item}</li>)}
              </ul>
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
              <ul>{c.currentVersionPoints.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>

            <article className="reference-card day3-release-note">
              <h2>{c.releaseNoteTitle}</h2>
              <p>{c.releaseNoteText}</p>
            </article>

            <article className="reference-card" id="faq">
              <h2>{c.faqTitle}</h2>
              <div className="faq-grid day3-faq-grid">
                {c.faq.map((item) => (
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

const copyEn = {
  pageTitle: 'The Freak Circus Day 3 – Release Date & Latest Updates',
  metaDescription: 'Check the latest The Freak Circus Day 3 development updates, current release status, Version 0.2 information, and whether an official release date has been announced.',
  lead: 'The Freak Circus Day 3 has not been released yet. The next in-game day is still in active development, Version 0.2 remains the current public prototype, and no official release date has been announced.',
  lastChecked: 'Last checked', lastCheckedDisplay: 'August 31, 2026', latestCta: 'Read latest update', timelineCta: 'View development timeline',
  officialUpdate: 'OFFICIAL DEVELOPMENT UPDATE', latestTitle: 'Latest Day 3 Development Update', weeklyTitle: 'Weekly Update – Day 3 · August 31, 2026',
  latestIntro: 'The developer focused exclusively on the store and the game this week and reported good progress on the opening section of Day 3. Its extensive dialogue is still being translated and programmed.',
  latestPoints: [
    'The opening section made good progress this week.',
    'The large volume of dialogue is taking time to translate and implement.',
    'New sprites have been selected for Harlequin, Pierrot, and Jester.',
    'Two new café-scene screenshots were shared with the update.',
    'No official release date has been announced.',
  ],
  timelineTitle: 'Day 3 Development Timeline', timelineIntro: 'A concise record of confirmed Day 3 work. New official milestones can be added here as development continues.',
  currentVersionTitle: 'Current Version',
  currentVersionPoints: [
    'Version 0.2 remains the current public build.',
    'Five character introductions are available.',
    'One bad ending is currently playable.',
    'The next in-game day remains in development.',
  ],
  releaseNoteTitle: 'Development Update ≠ Release Announcement',
  releaseNoteText: 'Writing, artwork, sprites, or programming updates confirm that development is active, but they do not mean Day 3 has been released. Day 3 should only be treated as released when a new public build becomes available.',
  faqTitle: 'The Freak Circus Day 3 FAQ',
  faq: [
    { q: 'Is The Freak Circus Day 3 out?', a: 'No. Day 3 is still in development and there is currently no public Day 3 build.' },
    { q: 'When will The Freak Circus Day 3 release?', a: 'No official release date has been announced. Development updates confirm ongoing work, but they should not be treated as a release schedule.' },
    { q: 'What is the latest Day 3 update?', a: 'On August 31, the developer reported good progress on the opening section, continued translation and programming of its extensive dialogue, and newly selected sprites for Harlequin, Pierrot, and Jester.', linkLabel: 'Read the latest development update.' },
    { q: 'What is the current version of The Freak Circus?', a: 'Version 0.2 remains the current public prototype.' },
    { q: 'Can I download The Freak Circus Day 3?', a: 'There is currently no separate public Day 3 download. This page will only link to an official public build when one actually exists.' },
    { q: 'Is Day 3 still being developed?', a: 'Yes. Recent official development updates show that work on the next in-game day is continuing.' },
  ],
  updatesLink: 'Updates timeline', wikiLink: 'Version 0.2 Wiki', downloadLink: 'Official download guide',
  snapshot: 'STATUS SNAPSHOT', inDevelopment: 'In Development', releaseDateLabel: 'RELEASE DATE', notAnnounced: 'Not Announced', currentBuildLabel: 'CURRENT BUILD', lastCheckedLabel: 'LAST CHECKED',
  latestUpdateLabel: 'LATEST UPDATE', sidebarUpdateTitle: 'The opening section is taking shape', sidebarUpdateText: 'Dialogue translation and programming continue, with new sprites now selected for Harlequin, Pierrot, and Jester.', continueTitle: 'Continue on this site',
};

const copyZh: typeof copyEn = {
  pageTitle: 'The Freak Circus Day 3——发布日期与最新更新',
  metaDescription: '查看 The Freak Circus Day 3 的最新开发动态、当前发布状态、Version 0.2 信息，以及官方是否已公布发布日期。',
  lead: 'The Freak Circus Day 3 尚未发布。下一个游戏日仍在积极开发中，Version 0.2 仍是当前公开原型版，官方尚未公布发布日期。',
  lastChecked: '最后核验', lastCheckedDisplay: '2026年8月31日', latestCta: '查看最新更新', timelineCta: '查看开发时间线',
  officialUpdate: '官方开发更新', latestTitle: 'Day 3 最新开发进度', weeklyTitle: 'Weekly Update – Day 3 · 2026年8月31日',
  latestIntro: '开发者本周集中处理商店与游戏工作，并表示 Day 3 开篇部分已取得不错进展。其中大量对白仍在翻译和程序实装中。',
  latestPoints: [
    '开篇部分在本周取得了良好进展。',
    '对白量很大，翻译与程序实装仍需要时间。',
    'Harlequin、Pierrot 与 Jester 的新立绘已经确定。',
    '本次更新同时分享了两张咖啡店场景截图。',
    '官方尚未公布发布日期。',
  ],
  timelineTitle: 'Day 3 开发时间线', timelineIntro: '这里简要记录已确认的 Day 3 开发工作，后续有新的官方里程碑时可继续添加。',
  currentVersionTitle: '当前版本',
  currentVersionPoints: [
    'Version 0.2 仍是当前公开版本。',
    '目前可以体验五位角色的介绍。',
    '当前可以游玩一个坏结局。',
    '下一个游戏日仍在开发中。',
  ],
  releaseNoteTitle: '开发更新 ≠ 发布公告',
  releaseNoteText: '剧本、美术、立绘或编程更新能够确认开发仍在继续，但不代表 Day 3 已经发布。只有新的公开版本实际上线后，才应把 Day 3 视为已发布。',
  faqTitle: 'The Freak Circus Day 3 常见问题',
  faq: [
    { q: 'The Freak Circus Day 3 已经发布了吗？', a: '没有。Day 3 仍在开发中，目前没有公开的 Day 3 版本。' },
    { q: 'The Freak Circus Day 3 什么时候发布？', a: '官方尚未公布发布日期。开发更新可以确认工作仍在继续，但不应被当作发布日程。' },
    { q: 'Day 3 最近有什么更新？', a: '8 月 31 日的更新显示，开篇部分进展良好，大量对白仍在翻译和程序实装中，同时 Harlequin、Pierrot 与 Jester 的新立绘已确定。', linkLabel: '查看最新开发更新。' },
    { q: 'The Freak Circus 当前是什么版本？', a: 'Version 0.2 仍是当前公开原型版。' },
    { q: '可以下载 The Freak Circus Day 3 吗？', a: '目前没有单独公开的 Day 3 下载。只有官方公开版本实际存在时，本页才会提供对应链接。' },
    { q: 'Day 3 还在开发吗？', a: '是的。近期官方开发更新显示，下一个游戏日的制作仍在继续。' },
  ],
  updatesLink: '站内更新记录', wikiLink: 'Version 0.2 Wiki', downloadLink: '官方下载指南',
  snapshot: '状态速览', inDevelopment: '正在开发', releaseDateLabel: '发布日期', notAnnounced: '尚未公布', currentBuildLabel: '当前版本', lastCheckedLabel: '最后核验',
  latestUpdateLabel: '最新更新', sidebarUpdateTitle: '开篇部分正在成形', sidebarUpdateText: '对白翻译与程序实装仍在继续，Harlequin、Pierrot 与 Jester 的新立绘已经确定。', continueTitle: '继续浏览站内内容',
};
