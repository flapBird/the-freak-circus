import { BLOG_POSTS } from '@/lib/blog-posts';
import { SITE_URL } from '@/lib/seo';
import { COMMUNITY_LAST_CHECKED } from '@/data/community-posts';
import { CORE_LOCALES, GUIDE_LOCALES, CHARACTER_LOCALES, BLOG_LOCALES, type Locale } from '@/lib/content-availability';

const SITE_LAST_MODIFIED = '2026-10-22';

const staticPaths = [
  '', '/about', '/characters', '/day-3', '/download', '/fan-art', '/wiki', '/community',
  '/updates', '/contact', '/privacy', '/terms', '/blog',
  '/endings', '/characters/heights', '/save', '/faq',
];
const characterPaths = [
  '/characters/pierrot', '/characters/harlequin', '/characters/jester', '/characters/the-doctor',
  '/characters/ticket-taker',
];

type SitemapEntry = { path: string; lastModified: string; changeFrequency: 'weekly' | 'monthly'; priority: string };

function entryXml({ path, lastModified, changeFrequency, priority }: SitemapEntry) {
  const loc = path === '' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    `    <changefreq>${changeFrequency}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

/** The availability list that governs a given path. */
function localesForPath(path: string): readonly Locale[] {
  if (path === '') return CORE_LOCALES.home;
  if (path === '/endings') return GUIDE_LOCALES.endings;
  if (path === '/characters/heights') return GUIDE_LOCALES.heights;
  if (path === '/save') return GUIDE_LOCALES.save;
  if (path === '/faq') return GUIDE_LOCALES.faq;
  if (path === '/download') return GUIDE_LOCALES.download;
  const character = characterPaths.find((candidate) => candidate === path);
  if (character) return CHARACTER_LOCALES[character.slice('/characters/'.length)];
  if (path.startsWith('/blog/')) return BLOG_LOCALES[path.slice('/blog/'.length)] ?? [];
  const core = CORE_LOCALES[path.slice(1)];
  if (core) return core;
  return [];
}

export function GET() {
  const baseEntries: SitemapEntry[] = [
    ...staticPaths.map((path) => ({
      path,
      lastModified: path === '/community' || path === '/day-3' ? COMMUNITY_LAST_CHECKED : SITE_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      // The guide pages answer the highest-intent questions the game gets
      // searched for, so they sit closer to the top of the list than the
      // utility pages do.
      priority: path === '' ? '1.0'
        : path === '/endings' ? '0.9'
          : path === '/characters' || path === '/characters/heights' || path === '/download' || path === '/faq' ? '0.8'
            : path === '/updates' ? '0.8'
              : path === '/day-3' || path === '/blog' ? '0.7'
                : '0.6',
    })),
    ...characterPaths.map((path) => ({ path, lastModified: SITE_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: '0.7' })),
    ...BLOG_POSTS.map((post) => ({ path: `/blog/${post.slug}`, lastModified: post.date, changeFrequency: 'monthly' as const, priority: '0.8' })),
  ];

  // Only submit a locale variant of a page when that page's body text
  // actually exists in that language. A sitemap entry for a page that falls
  // back to English tells search engines to index a duplicate under a
  // translated URL.
  const entries = baseEntries.flatMap((entry) => {
    const locales = localesForPath(entry.path);
    return locales.map((locale) => ({
      ...entry,
      path: locale === 'en' ? entry.path : `/${locale}${entry.path}`,
    }));
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(entryXml).join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
