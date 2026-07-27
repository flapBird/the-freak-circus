export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  sourceUrl: string;
  sourceName: string;
  content: string[];
};

// Every item below is an editorial summary of a first-party devlog.  Keep the
// source URL with the item so readers can verify the original announcement.
export const NEWS_POSTS: NewsPost[] = [
  {
    slug: 'official-merch-partnership-july-2026',
    title: 'Official merchandise announcement: what the July 2026 devlog says',
    excerpt: 'Garula’s July 14 devlog announced an official merchandise partnership and a limited Pierrot plush release.',
    publishedAt: '2026-07-14',
    sourceUrl: 'https://garula.itch.io/the-freak-circus/devlog',
    sourceName: 'Garula on itch.io',
    content: [
      'Garula’s July 14, 2026 devlog announced official merchandise and a partnership connected to The Freak Circus. The post specifically mentions a limited Pierrot plush release.',
      'This is a summary, not a store listing. Availability, regions, prices, and stock can change, so use the original devlog before making a purchase decision.',
    ],
  },
  {
    slug: 'chinese-translation-revised-february-2026',
    title: 'Chinese translation revised in February 2026',
    excerpt: 'The developer published a revised Chinese translation update and credited the translator in the official devlog.',
    publishedAt: '2026-02-22',
    sourceUrl: 'https://garula.itch.io/the-freak-circus/devlog',
    sourceName: 'Garula on itch.io',
    content: [
      'On February 22, 2026, Garula published a devlog about a revised Chinese translation for The Freak Circus and credited copiklaGrogu for the work.',
      'For players, the practical takeaway is to update from the official itch.io page before comparing dialogue or reporting translation issues. This fan site does not distribute game builds or translations.',
    ],
  },
  {
    slug: 'browser-animation-bug-fixes-december-2025',
    title: 'Browser animation fixes noted in the December 2025 update',
    excerpt: 'The official bug-fix post reported browser animation improvements and a fix for a Ticket Taker animation freeze.',
    publishedAt: '2025-12-09',
    sourceUrl: 'https://garula.itch.io/the-freak-circus/devlog',
    sourceName: 'Garula on itch.io',
    content: [
      'The December 9, 2025 bug-fix devlog says browser animations were optimized and notes a Ticket Taker animation freeze fix tested in Chrome and Edge.',
      'If a browser-specific issue persists, first check the official page for the newest build and the developer’s latest notes. Do not treat older community reports as confirmation that a current build is broken.',
    ],
  },
];

export function getNewsPost(slug: string) {
  return NEWS_POSTS.find((post) => post.slug === slug);
}
