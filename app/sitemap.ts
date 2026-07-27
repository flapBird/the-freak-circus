import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { NEWS_POSTS } from '@/lib/news';
import { INDEXABLE_LOCALES, SITE_URL } from '@/lib/seo';

const staticPaths = [
  '', '/about', '/characters', '/walkthrough', '/walkthrough/day-1', '/walkthrough/day-2',
  '/walkthrough/day-3', '/wiki', '/community', '/news', '/contact', '/privacy', '/terms', '/blog',
];
const characterPaths = ['/characters/pierrot', '/characters/harlequin', '/characters/jester', '/characters/the-doctor', '/characters/columbina', '/characters/ticket-taker'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...characterPaths,
    ...BLOG_POSTS.map(({ slug }) => `/blog/${slug}`),
    ...NEWS_POSTS.map(({ slug }) => `/news/${slug}`),
  ];
  const languages = (path: string) => Object.fromEntries(INDEXABLE_LOCALES.map((locale) => [locale, `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`]));
  return paths.flatMap((path) => INDEXABLE_LOCALES.map((locale) => ({
    url: `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`,
    lastModified: new Date('2026-07-27'),
    changeFrequency: path.startsWith('/news/') ? 'monthly' : 'weekly',
    priority: path === '' ? 1 : path.startsWith('/blog/') || path.startsWith('/news/') ? 0.8 : 0.6,
    alternates: { languages: languages(path) },
  })));
}
