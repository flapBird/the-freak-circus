// Verified facts about The Freak Circus, sourced from first-party developer
// publications. Every entry here is traceable to a named official source so
// guide pages can cite evidence instead of repeating fan-site consensus.
//
// Rules for this file:
//   - Only record what an official source states. Fandom-only details are not
//     promoted into this layer; they live on their own pages and are labelled
//     as fan-derived there.
//   - Keep the source URL next to the claim. Pages render it so readers can
//     check the original.
//   - When a commonly repeated claim has no official source, record it in
//     UNVERIFIED_CLAIMS so guides can address it instead of silently ignoring
//     it. Silently omitting a popular claim reads as an oversight; naming it
//     as unverified reads as care.

export const OFFICIAL_GAME_URL = 'https://garula.itch.io/the-freak-circus';
export const OFFICIAL_DEVLOG_URL = `${OFFICIAL_GAME_URL}/devlog`;
export const OFFICIAL_TUMBLR_URL = 'https://freakcircusofhorrors.tumblr.com/';
export const OFFICIAL_FAQ_URL = `${OFFICIAL_TUMBLR_URL}faq`;
export const OFFICIAL_SUPPORT_EMAIL = 'support@garulastudio.com';

export const SOURCES = {
  itchPage: { label: 'Official itch.io game page', url: OFFICIAL_GAME_URL },
  devlog: { label: 'Official itch.io devlog', url: OFFICIAL_DEVLOG_URL },
  faq: { label: 'Official Tumblr FAQ', url: OFFICIAL_FAQ_URL },
  askboxFaq: { label: 'Official Tumblr Askbox FAQ', url: `${OFFICIAL_TUMBLR_URL}813554501729615872/askbox-faq` },
  amaPopular: { label: 'Official Tumblr AMA — most popular questions', url: `${OFFICIAL_TUMBLR_URL}794053030233456640/most-popular-questions` },
  amaAgeOrder: { label: 'Official Tumblr AMA — answers part 5', url: `${OFFICIAL_TUMBLR_URL}798712470439067648/ama-answers-part-5` },
  day3Update: { label: 'Official Tumblr weekly update — Day 3', url: `${OFFICIAL_TUMBLR_URL}830680707017867264/weekly-update-day3` },
  columbinaAma: { label: 'Official Tumblr AMA — Columbina', url: `${OFFICIAL_TUMBLR_URL}821167172808294400/ama-columbina` },
} as const;

export type SourceKey = keyof typeof SOURCES;

/** Height chart published by the developer alongside the sprite reference. */
export type HeightEntry = {
  slug: string;
  name: string;
  cm: number;
  feet: number;
  inches: number;
  /** Position in the official age order, oldest first. */
  ageOrder: number;
  /** Position in the developer's raw strength ranking, strongest first. */
  strengthRank: number;
};

export const HEIGHT_CHART: HeightEntry[] = [
  { slug: 'the-doctor', name: 'Doctor', cm: 207, feet: 6, inches: 9.5, ageOrder: 2, strengthRank: 3 },
  { slug: 'pierrot', name: 'Pierrot', cm: 198, feet: 6, inches: 5.95, ageOrder: 3, strengthRank: 1 },
  { slug: 'jester', name: 'Jester', cm: 192, feet: 6, inches: 3.59, ageOrder: 4, strengthRank: 2 },
  { slug: 'harlequin', name: 'Harlequin', cm: 187, feet: 6, inches: 1.62, ageOrder: 5, strengthRank: 2 },
  { slug: 'ticket-taker', name: 'Ticket Taker', cm: 183, feet: 6, inches: 0.05, ageOrder: 1, strengthRank: 4 },
];

export const AGE_ORDER_OLDEST_FIRST = [...HEIGHT_CHART].sort((a, b) => a.ageOrder - b.ageOrder);
export const STRENGTH_RANKING = [...HEIGHT_CHART].sort((a, b) => a.strengthRank - b.strengthRank);
export const TALLEST_FIRST = [...HEIGHT_CHART].sort((a, b) => b.cm - a.cm);

/** Convert centimetres into the compact metric/imperial pairs guides quote. */
export function formatHeight(entry: { cm: number; feet: number; inches: number }) {
  return {
    metric: `${entry.cm} cm`,
    imperial: `${entry.feet}' ${entry.inches.toFixed(2).replace(/0$/, '')}"`,
  };
}

export const GAME_OVERVIEW = {
  title: 'The Freak Circus',
  developer: 'Garula (Neko Bueno)',
  engine: "Ren'Py",
  genre: 'Psychological horror visual novel',
  rating: '18+',
  currentVersion: '0.2',
  currentVersionLabel: 'Version 0.2 prototype',
  originalRelease: 'June 2025',
  synopsis:
    'A travelling circus arrives in town. You work at a café, and on the way to work you cross paths with Pierrot — the silent, obsessive clown. His stage rival Harlequin has other intentions, and both of them are competing for your attention.',
  features: [
    'Original artwork and backgrounds',
    'Five introduced characters',
    'One bad ending implemented',
    'Character introductions complete; the rest of the story is still in development',
  ],
  averageSession: 'About a half-hour',
} as const;

export const PLATFORMS = [
  { name: 'Web browser (HTML5)', detail: 'Runs in the browser through the official itch.io page', key: 'html5' },
  { name: 'Windows', detail: 'PC build, version 0.2', key: 'windows' },
  { name: 'macOS', detail: 'Mac build, version 0.2', key: 'macos' },
  { name: 'Linux', detail: 'Linux build, version 0.2', key: 'linux' },
  { name: 'Android', detail: 'APK build, version 0.2', key: 'android' },
] as const;

export const SHIPPED_LANGUAGES = [
  { name: 'English', key: 'en' },
  { name: 'Portuguese (Brazil)', key: 'pt' },
  { name: 'Simplified Chinese', key: 'zh' },
] as const;

export const VOICE_ACTING = 'English only, performed by Darthsuki.';

export const CONTENT_WARNINGS = [
  'Screen shaking',
  'Blood, death, murder and gore',
  'Allusions to cannibalism',
  'Abuse',
  'Strong language',
  'Kidnapping',
  'Non-consensual use of drugs',
  'Physical domination',
  'Mild physical harassment and non-consensual physical contact',
] as const;

export type EndingStatus = 'implemented' | 'planned' | 'not-a-route';

export type EndingEntry = {
  id: string;
  name: string;
  status: EndingStatus;
  summary: string;
  source: SourceKey;
};

export const ENDINGS: EndingEntry[] = [
  {
    id: 'missing',
    name: 'Missing',
    status: 'implemented',
    summary:
      'The one ending that currently exists in the public build. It is reached on Day 1 by refusing to react while Pierrot is being mocked; the protagonist is handed a pink ticket, taken to the pink tent, and turned away by every member of the circus.',
    source: 'itchPage',
  },
  {
    id: 'pierrot',
    name: "Pierrot's ending (romance)",
    status: 'planned',
    summary:
      'A romance conclusion in which the protagonist ends with Pierrot. Listed by the developer as planned work, and repeatedly described as still in development.',
    source: 'itchPage',
  },
  {
    id: 'harlequin',
    name: "Harlequin's ending (romance)",
    status: 'planned',
    summary:
      'A romance conclusion in which the protagonist ends with Harlequin. Listed by the developer as planned work; the script for it is not finished.',
    source: 'itchPage',
  },
  {
    id: 'protagonist',
    name: "Protagonist's ending (no romance)",
    status: 'planned',
    summary:
      'A conclusion in which the protagonist ends the story without a romance. The developer has confirmed this route exists as a concept and that friendships can still be chosen alongside it.',
    source: 'faq',
  },
  {
    id: 'all-together',
    name: '"All together" (poly ending)',
    status: 'planned',
    summary:
      'A conclusion in which the protagonist falls in love with Pierrot and Harlequin at the same time. Announced as planned, not as implemented content.',
    source: 'faq',
  },
];

export const ROUTE_AVAILABILITY = {
  currentOptions: 'Pierrot, Harlequin, both of them, or neither of them.',
  note:
    'The developer has stated that no route exists for Jester, Ticket Taker or Doctor, and that adding them would likely arrive as an add-on or DLC if it happens at all. Making the remaining characters romance options is described as a possibility rather than a commitment.',
  source: 'askboxFaq' as SourceKey,
} as const;

export const DAY_3_STATUS = {
  state: 'In active development. No release date has been announced.',
  betaProgress:
    'A development update described one part of the Day 3 beta as finished and put the beta at roughly 30–40% of the full update.',
  scriptSize:
    'The Day 3 script has been reported as larger than Day 2, with additional bad ending content and hidden scenes described.',
  guidance:
    'The developer has asked that release-date claims not be repeated unless they come from official posts, so a date quoted anywhere else should be treated as unverified.',
  sources: ['itchPage', 'day3Update'] as SourceKey[],
} as const;

export const SAVING_AND_RESUMING = {
  confirmed:
    'The build is a standard Ren\'Py release, so it uses the engine\'s normal save, load, quick-save and rollback behaviour. The menu also offers a Day 2 entry point so a player can continue without replaying Day 1.',
  notDocumented:
    'The developer has not published a guide to save locations, slot counts, autosave behaviour, or whether browser saves can be moved into a desktop build. Guides on that topic should describe what the engine does and mark the specifics as unverified rather than presenting one site\'s guess as the official answer.',
  browserBuild:
    'Browser playback is served from the official itch.io page. The developer has documented browser-specific freezes and their fixes, which confirms browser play is a supported path.',
  sources: ['itchPage', 'amaPopular'] as SourceKey[],
} as const;

export const FAN_SITE_POSITIONING = {
  note:
    'The developer has stated that the itch.io page is the only official page for the game, has asked that it not be re-uploaded or reposted, and has confirmed there is no official Discord server — every server should be considered fan-run.',
  sources: ['itchPage', 'faq'] as SourceKey[],
} as const;

/**
 * Popular claims that circulate across fan sites without a first-party source.
 * Guides mention these so a reader who has already read them elsewhere can see
 * where they came from.
 */
export const UNVERIFIED_CLAIMS = [
  {
    claim: 'The game supports a specific number of save slots, autosaves at fixed intervals, or stores saves in a named folder.',
    reality: 'No official save documentation exists. Ren\'Py builds use a standard location, but the developer has not published specifics.',
    source: 'itchPage' as SourceKey,
  },
  {
    claim: 'Browser saves can be exported to a zip archive and imported into a desktop build.',
    reality: 'Ren\'Py offers an export and import action in its engine overlay, but the developer has not confirmed a browser-to-desktop workflow for this game.',
    source: 'itchPage' as SourceKey,
  },
  {
    claim: 'The full game takes a specific number of hours to complete.',
    reality: 'Only an average session of about half an hour is published. A total completion time has never been given.',
    source: 'itchPage' as SourceKey,
  },
  {
    claim: 'Day 3 has a confirmed release month.',
    reality: 'No date has been announced. The developer has explicitly asked that outside date claims not be repeated.',
    source: 'askboxFaq' as SourceKey,
  },
  {
    claim: 'The game contains a specific total number of endings.',
    reality: 'The developer has said multiple endings are planned but cannot give a number.',
    source: 'faq' as SourceKey,
  },
  {
    claim: 'Each character has a stated exact age, birthday, or a published age list in numerals.',
    reality: 'Only a relative age order and a height chart were published. Birthdays and numeric ages circulating online are not first-party.',
    source: 'amaAgeOrder' as SourceKey,
  },
];

export function sourceUrl(key: SourceKey) {
  return SOURCES[key].url;
}

export function sourceLabel(key: SourceKey) {
  return SOURCES[key].label;
}
