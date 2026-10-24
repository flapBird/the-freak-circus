// Long-form page copy for the wiki and Day 3 pages, in English and Chinese.
// These pages predate the per-locale content modules; when a page gains a
// full translation in another language, that copy should move to a
// per-locale module and the page should resolve it the way the guide pages
// do (see lib/editorial-content.ts).
import { LATEST_DAY_3_UPDATE, formatUpdateDate } from './day3-updates';
import { DAY_3_POSTS } from './day3-updates';
import { COMMUNITY_LAST_CHECKED } from '@/data/community-posts';

export const wikiCopy = {
  en: { lead: 'A living reference for the current public build—written around primary sources and explicit content boundaries, not invented lore.', overviewTitle: 'Premise and current scope', overview1: 'The protagonist works at a café. On the way to work, they meet Pierrot, a silent yandere whose fixation starts the central conflict. Harlequin, Pierrot’s seductive stage rival, enters the competition around the protagonist.', overview2: 'The official listing currently says all five character introductions are complete, one bad ending is available, and the rest of the script and endings are still being developed. The planned endings named there are Pierrot, Harlequin, and protagonist endings.', castTitle: 'Introduced cast', castText: 'These five characters have introductions in the current prototype. “Introduced” does not automatically mean a completed route or ending.', columbina: 'Columbina appears in official maintenance notes: the February 2026 Chinese-language update mentions a previously incomplete line when her name was entered. This confirms dialogue context, but it does not support the extensive backstory previously published on this site.', warningTitle: 'Age rating and content warnings', warning: 'The developer labels the game 18+. The official page warns about themes and scenes that may not be suitable for every player.', warnings: ['Blood and death', 'Kidnapping', 'Cannibalism', 'Non-consensual use of drugs, physical domination, and mild physical harassment / non-consensual physical contact'], creditsTitle: 'Credits and publication', creator: 'CREATOR', publisher: 'PUBLISHER', status: 'STATUS', version: 'BUILD', ending: '1 bad ending currently listed', updates: 'Verified update timeline', next: 'Continue', download: 'Download Guide', guides: 'Blog', community: 'Community', endingsLink: 'Endings and routes', heightsLink: 'Heights and age order', saveLink: 'Saving and resuming', faqLink: 'Frequently asked questions' },
  zh: { lead: '围绕当前公开版本持续更新的资料库：以一手来源和明确内容边界为基础，不编造设定。', overviewTitle: '故事前提与当前范围', overview1: '主角在咖啡店工作。上班途中，主角遇见沉默的病娇 Pierrot，他的执念由此引发核心冲突；Pierrot 富有诱惑力的舞台对手 Harlequin 随后加入围绕主角展开的竞争。', overview2: '官方页面目前说明：五位角色介绍已经完成、存在一个坏结局，其余剧本与结局仍在开发。页面点名的计划结局为 Pierrot、Harlequin 和主角结局。', castTitle: '已登场角色', castText: '以下五位角色已在当前原型版完成介绍；“已登场”并不等于已经有完整路线或结局。', columbina: 'Columbina 出现在官方维护记录中：2026 年 2 月中文更新提到，输入她的名字时曾有一句台词不完整。这能确认相关对白，却不足以支持本站此前发布的大量背景故事。', warningTitle: '年龄限制与内容警告', warning: '开发者将游戏标为 18+，并在官方页面列出可能不适合所有玩家的主题与场景。', warnings: ['血腥与死亡', '绑架', '食人内容', '非自愿用药、肢体控制，以及轻度肢体骚扰／非自愿肢体接触'], creditsTitle: '制作与发布信息', creator: '创作者', publisher: '发布者', status: '状态', version: '版本', ending: '当前列出 1 个坏结局', updates: '已核实更新时间线', next: '继续浏览', download: '下载指南', guides: 'Blog', community: 'Community', endingsLink: '结局与路线', heightsLink: '身高与年龄顺序', saveLink: '存档与继续', faqLink: '常见问题' },
} as const;

// The Day 3 copy mixes plain strings, arrays and entries with an optional
// linkLabel, so the shape is kept loose here; the page owns the rendering.
/* eslint-disable @typescript-eslint/no-explicit-any */
export const day3Copy: Record<'en' | 'zh', any> = {
  en: {
  pageTitle: 'The Freak Circus Day 3 – Release Date & Latest Updates',
  metaDescription: 'Check the latest The Freak Circus Day 3 development updates, current release status, Version 0.2 information, and whether an official release date has been announced.',
  lead: 'The Freak Circus Day 3 has not been released yet. The next in-game day is still in active development, Version 0.2 remains the current public prototype, and no official release date has been announced.',
  lastChecked: 'Last checked', lastCheckedDisplay: formatUpdateDate(COMMUNITY_LAST_CHECKED, 'en'), latestCta: 'Read latest update', timelineCta: 'View development timeline',
  officialUpdate: 'OFFICIAL DEVELOPMENT UPDATE', latestTitle: 'Latest Day 3 Development Update', weeklyTitle: `${LATEST_DAY_3_UPDATE.title.en} · ${formatUpdateDate(LATEST_DAY_3_UPDATE.publishedAt, 'en')}`,
  latestIntro: LATEST_DAY_3_UPDATE.summary.en,
  latestPoints: LATEST_DAY_3_UPDATE.day3.points?.en ?? [],
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
    { q: 'What is the latest Day 3 update?', a: LATEST_DAY_3_UPDATE.summary.en, linkLabel: 'Read the latest development update.' },
    { q: 'What is the current version of The Freak Circus?', a: 'Version 0.2 remains the current public prototype.' },
    { q: 'Can I download The Freak Circus Day 3?', a: 'There is currently no separate public Day 3 download. This page will only link to an official public build when one actually exists.' },
    { q: 'Is Day 3 still being developed?', a: 'Yes. Recent official development updates show that work on the next in-game day is continuing.' },
  ],
  updatesLink: 'Updates timeline', wikiLink: 'Version 0.2 Wiki', downloadLink: 'Official download guide', endingsLink: 'Endings and routes', heightsLink: 'Heights and age order', saveLink: 'Saving and resuming', faqLink: 'Frequently asked questions',
  snapshot: 'STATUS SNAPSHOT', inDevelopment: 'In Development', releaseDateLabel: 'RELEASE DATE', notAnnounced: 'Not Announced', currentBuildLabel: 'CURRENT BUILD', lastCheckedLabel: 'LAST CHECKED',
  latestUpdateLabel: 'LATEST UPDATE', sidebarUpdateTitle: LATEST_DAY_3_UPDATE.day3.headline.en, sidebarUpdateText: LATEST_DAY_3_UPDATE.summary.en, continueTitle: 'Continue on this site',
},
  zh: {
  pageTitle: 'The Freak Circus Day 3——发布日期与最新更新',
  metaDescription: '查看 The Freak Circus Day 3 的最新开发动态、当前发布状态、Version 0.2 信息，以及官方是否已公布发布日期。',
  lead: 'The Freak Circus Day 3 尚未发布。下一个游戏日仍在积极开发中，Version 0.2 仍是当前公开原型版，官方尚未公布发布日期。',
  lastChecked: '最后核验', lastCheckedDisplay: formatUpdateDate(COMMUNITY_LAST_CHECKED, 'zh'), latestCta: '查看最新更新', timelineCta: '查看开发时间线',
  officialUpdate: '官方开发更新', latestTitle: 'Day 3 最新开发进度', weeklyTitle: `${LATEST_DAY_3_UPDATE.title.zh} · ${formatUpdateDate(LATEST_DAY_3_UPDATE.publishedAt, 'zh')}`,
  latestIntro: LATEST_DAY_3_UPDATE.summary.zh,
  latestPoints: LATEST_DAY_3_UPDATE.day3.points?.zh ?? [],
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
    { q: 'Day 3 最近有什么更新？', a: LATEST_DAY_3_UPDATE.summary.zh, linkLabel: '查看最新开发更新。' },
    { q: 'The Freak Circus 当前是什么版本？', a: 'Version 0.2 仍是当前公开原型版。' },
    { q: '可以下载 The Freak Circus Day 3 吗？', a: '目前没有单独公开的 Day 3 下载。只有官方公开版本实际存在时，本页才会提供对应链接。' },
    { q: 'Day 3 还在开发吗？', a: '是的。近期官方开发更新显示，下一个游戏日的制作仍在继续。' },
  ],
  updatesLink: '站内更新记录', wikiLink: 'Version 0.2 Wiki', downloadLink: '官方下载指南', endingsLink: '结局与路线', heightsLink: '身高与年龄顺序', saveLink: '存档与继续', faqLink: '常见问题',
  snapshot: '状态速览', inDevelopment: '正在开发', releaseDateLabel: '发布日期', notAnnounced: '尚未公布', currentBuildLabel: '当前版本', lastCheckedLabel: '最后核验',
  latestUpdateLabel: '最新更新', sidebarUpdateTitle: LATEST_DAY_3_UPDATE.day3.headline.zh, sidebarUpdateText: LATEST_DAY_3_UPDATE.summary.zh, continueTitle: '继续浏览站内内容',
},
} as const;
