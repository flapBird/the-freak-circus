import { getLocalizedContent } from './localized-content';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
};

export const BLOG_POSTS = getLocalizedContent('en').blog as BlogPost[];

export function getBlogPosts(locale = 'en'): BlogPost[] {
  return getLocalizedContent(locale).blog as BlogPost[];
}

export function getPostBySlug(slug: string, locale = 'en'): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
