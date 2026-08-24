export const OFFICIAL_GAME_URL = 'https://garula.itch.io/the-freak-circus';
export const OFFICIAL_DEVLOG_URL = `${OFFICIAL_GAME_URL}/devlog`;
export const OFFICIAL_TUMBLR_URL = 'https://freakcircusofhorrors.tumblr.com/';
export const DAY_3_UPDATE_URL = 'https://www.tumblr.com/freakcircusofhorrors/825607753064169472/weekly-update-day-3';

export type SupportedEditorialLocale = 'en' | 'zh';

export function editorialLocale(locale: string): SupportedEditorialLocale {
  return locale === 'zh' ? 'zh' : 'en';
}

export const characterSlugs = ['pierrot', 'harlequin', 'jester', 'the-doctor', 'ticket-taker'] as const;
export type CharacterSlug = (typeof characterSlugs)[number];

type CharacterCopy = {
  name: string;
  label: string;
  summary: string;
  confirmed: string[];
  scope: string;
  image: string;
};

export const characterCopy: Record<SupportedEditorialLocale, Record<CharacterSlug, CharacterCopy>> = {
  en: {
    pierrot: {
      name: 'Pierrot',
      label: 'The silent obsession',
      summary: 'A quiet clown whose devotion to the café worker slowly hardens into possessive obsession.',
      confirmed: [
        'Named by the developer as one of the two central rivals in the current story.',
        'His obsession begins after crossing paths with the protagonist on the way to work.',
        'A Pierrot ending is planned, but the official page says the script and endings are still in development.',
      ],
      scope: 'Current prototype: introduction and story scenes are available; no finished Pierrot ending is claimed here.',
      image: '/images/characters/pierrot-1.webp',
    },
    harlequin: {
      name: 'Harlequin',
      label: 'The charming rival',
      summary: 'Pierrot’s unpredictable counterpart, using charm and performance to turn affection into a dangerous contest.',
      confirmed: [
        'The official synopsis identifies Harlequin as Pierrot’s stage rival.',
        'He is one of the two characters named in the developer’s planned endings.',
        'Official bug notes confirm that his bedroom appearances can vary by story branch.',
      ],
      scope: 'Current prototype: story branches are present; no finished Harlequin ending is claimed here.',
      image: '/images/characters/harlequin-1.webp',
    },
    jester: {
      name: 'Jester',
      label: 'The unreadable wildcard',
      summary: 'A theatrical presence who widens the circus beyond its central rivalry while keeping a larger purpose hidden.',
      confirmed: [
        'Jester appears among the five introduced characters in the current build.',
        'The developer does not currently list a completed standalone Jester ending.',
        'Route and ending claims should be treated as unverified unless a future official update confirms them.',
      ],
      scope: 'Character introduction only; this guide does not invent a romance route or ending.',
      image: '/images/characters/jester-1.webp',
    },
    'the-doctor': {
      name: 'Doctor',
      label: 'The clinical presence',
      summary: 'A colder figure whose introduction brings unease, authority, and unanswered motives into the spectacle.',
      confirmed: [
        'Doctor appears in the current build as an introduced character.',
        'The official game page does not announce a completed Doctor ending.',
        'No official source reviewed for this page supports the previous “Clean Hands” ending claim.',
      ],
      scope: 'Character introduction only; future updates may expand the role.',
      image: '/images/characters/doctor-1.webp',
    },
    'ticket-taker': {
      name: 'Ticket Taker',
      label: 'The keeper of the threshold',
      summary: 'A figure at the circus entrance who makes crossing into the spectacle feel like a choice with consequences.',
      confirmed: [
        'Ticket Taker appears in the current build.',
        'Official December 2025 notes mention a browser-animation freeze involving this character.',
        'The official page does not list a completed Ticket Taker ending.',
      ],
      scope: 'Character introduction only; no standalone route is presented as fact.',
      image: '/images/characters/ticket-taker-1.webp',
    },
  },
  zh: {
    pierrot: {
      name: 'Pierrot',
      label: '沉默的执念',
      summary: '这位安静的小丑把爱意投向咖啡店员工，而那份守候也逐渐变成难以挣脱的占有欲。',
      confirmed: [
        '开发者将他列为现阶段故事中的两位核心竞争者之一。',
        '官方简介说明，他在主角上班途中与主角相遇后开始产生执念。',
        'Pierrot 结局在计划中，但官方同时说明剧本与结局仍在开发。',
      ],
      scope: '当前原型版已有角色介绍与剧情场景；本站不声称 Pierrot 已有完成版结局。',
      image: '/images/characters/pierrot-1.webp',
    },
    harlequin: {
      name: 'Harlequin',
      label: '迷人的舞台对手',
      summary: 'Pierrot 难以预测的对照面，用魅力与表演把围绕主角的爱意变成危险竞争。',
      confirmed: [
        '官方简介明确称 Harlequin 是 Pierrot 的舞台对手。',
        '他是开发者计划结局中明确点名的两位角色之一。',
        '官方修复日志确认，他是否出现在卧室会随剧情分支变化。',
      ],
      scope: '当前原型版存在剧情分支；本站不声称 Harlequin 已有完成版结局。',
      image: '/images/characters/harlequin-1.webp',
    },
    jester: {
      name: 'Jester',
      label: '难以看透的变数',
      summary: '这位充满戏剧感的表演者把故事带出两位核心对手的竞争，同时把更大的目的藏在幕后。',
      confirmed: [
        'Jester 已在当前版本的五位角色介绍中登场。',
        '开发者目前没有公布完成版的 Jester 独立结局。',
        '在官方未来确认前，具体路线与结局说法都应视为未核实。',
      ],
      scope: '当前仅按已登场角色介绍；本站不会编造可攻略路线或结局。',
      image: '/images/characters/jester-1.webp',
    },
    'the-doctor': {
      name: 'Doctor',
      label: '冰冷的临床气息',
      summary: 'Doctor 的出现为舞台带来权威与不安，但其动机和更完整的作用仍未揭晓。',
      confirmed: [
        'Doctor 已在当前版本登场。',
        '官方游戏页没有公布完成版 Doctor 结局。',
        '本站核查的官方来源不支持此前“Clean Hands”结局说法。',
      ],
      scope: '当前仅按已登场角色介绍；未来更新可能扩展其戏份。',
      image: '/images/characters/doctor-1.webp',
    },
    'ticket-taker': {
      name: 'Ticket Taker',
      label: '马戏团门槛的守望者',
      summary: '站在马戏团入口的角色，让踏入这场演出看起来像一个必须承担后果的选择。',
      confirmed: [
        'Ticket Taker 已在当前版本登场。',
        '2025 年 12 月的官方日志提到并修复了与他有关的浏览器动画卡死。',
        '官方游戏页没有列出完成版 Ticket Taker 结局。',
      ],
      scope: '当前仅按已登场角色介绍；本站不把独立路线当作事实。',
      image: '/images/characters/ticket-taker-1.webp',
    },
  },
};

export const officialUpdates = [
  {
    date: '2026-07-14',
    title: 'Official merchandise and partnership',
    href: 'https://garula.itch.io/the-freak-circus/devlog/1585532/official-merch-plush-and-partnership',
  },
  {
    date: '2026-02-22',
    title: 'Chinese translation revised for version 0.2',
    href: 'https://garula.itch.io/the-freak-circus/devlog/1406964/chinese-language-update',
  },
  {
    date: '2025-12-09',
    title: 'Browser animation and scene fixes',
    href: 'https://garula.itch.io/the-freak-circus/devlog/1138952/bugs-fixed',
  },
] as const;
