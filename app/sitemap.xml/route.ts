import { BLOG_POSTS } from '@/lib/blog-posts';
import { NEWS_POSTS } from '@/lib/news';
import { INDEXABLE_LOCALES, SITE_URL } from '@/lib/seo';

const SITE_LAST_MODIFIED = '2026-07-28';

const staticPaths = [
  '', '/about', '/characters', '/walkthrough', '/walkthrough/day-1', '/walkthrough/day-2',
  '/walkthrough/day-3', '/wiki', '/community', '/news', '/contact', '/privacy', '/terms', '/blog',
];
const characterPaths = [
  '/characters/pierrot', '/characters/harlequin', '/characters/jester', '/characters/the-doctor',
  '/characters/columbina', '/characters/ticket-taker',
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

export function GET() {
  const baseEntries: SitemapEntry[] = [
    ...staticPaths.map((path) => ({ path, lastModified: SITE_LAST_MODIFIED, changeFrequency: 'weekly' as const, priority: path === '' ? '1.0' : '0.6' })),
    ...characterPaths.map((path) => ({ path, lastModified: SITE_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: '0.7' })),
    ...BLOG_POSTS.map((post) => ({ path: `/blog/${post.slug}`, lastModified: post.date, changeFrequency: 'monthly' as const, priority: '0.8' })),
    ...NEWS_POSTS.map((post) => ({ path: `/news/${post.slug}`, lastModified: post.publishedAt, changeFrequency: 'monthly' as const, priority: '0.8' })),
  ];
  const entries = INDEXABLE_LOCALES.flatMap((locale) => {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    return baseEntries.map((entry) => ({ ...entry, path: `${prefix}${entry.path}` }));
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(entryXml).join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
