import { getLocalizedContent } from './localized-content';

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  sourceUrl: string;
  sourceName: string;
  content: string[];
};

export const NEWS_POSTS = getLocalizedContent('en').news as NewsPost[];

export function getNewsPosts(locale = 'en'): NewsPost[] {
  return getLocalizedContent(locale).news as NewsPost[];
}

export function getNewsPost(slug: string, locale = 'en'): NewsPost | undefined {
  return getNewsPosts(locale).find((post) => post.slug === slug);
}
