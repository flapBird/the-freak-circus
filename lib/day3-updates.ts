import { COMMUNITY_POSTS, type CommunityPost } from '@/data/community-posts';

// Publication dates and copy are maintained once, alongside the Community post.
export const DAY_3_POSTS = COMMUNITY_POSTS
  .filter((post): post is CommunityPost & { day3: NonNullable<CommunityPost['day3']> } => Boolean(post.day3))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const LATEST_DAY_3_UPDATE = DAY_3_POSTS.find((post) => post.day3.kind === 'development')!;

export function formatUpdateDate(date: string, locale: 'en' | 'zh') {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
