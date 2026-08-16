export type CommunityLocale = 'en' | 'zh';

export type CommunityPost = {
  id: string;
  creator: string;
  platform: 'X' | 'Tumblr' | 'Bluesky' | 'Other';
  publishedAt: string;
  // Kept for editorial verification; it is not rendered as an external link.
  sourceUrl: string;
  image?: string;
  imageAlt?: Record<CommunityLocale, string>;
  title: Record<CommunityLocale, string>;
  summary: Record<CommunityLocale, string>;
  tags: string[];
  sensitive?: boolean;
  featured?: boolean;
};

// Add reviewed community picks here. Copy the example block below for each new
// post. Only use a local image after the creator has allowed reuse; sourceUrl is
// kept for editorial verification and is not shown as a link on the page.
//
// {
//   id: 'unique-short-name',
//   creator: 'creator_handle',
//   platform: 'X',
//   publishedAt: '2026-08-16',
//   sourceUrl: 'https://x.com/...',
//   image: '/images/community/your-image.webp',
//   imageAlt: { en: 'Describe the image', zh: '图片说明' },
//   title: { en: 'English title', zh: '中文标题' },
//   summary: { en: 'English summary', zh: '中文简介' },
//   tags: ['Pierrot', 'FanArt'],
//   sensitive: false,
//   featured: false,
// },




export const COMMUNITY_POSTS: readonly CommunityPost[] = [
{
  id: 'unique-short-name',
  creator: 'Fan account',
  platform: 'X',
  publishedAt: '2026-08-16',
  sourceUrl: 'https://x.com/FreakCircusVRC/status/1996158237855662248',
  image: '/images/community/20260731-2082912649403089176.jpeg',
  imageAlt: { en: '', zh: '' },
  title: { en: 'Weakly update Day 3 - July 24th 2026 -', zh: 'Weakly update Day 3 - July 24th 2026 -' },
  summary: { en: '', zh: '' },
  tags: ['Pierrot', 'Day 3'],
  sensitive: false,
  featured: false,
},
{
  id: 'unique-short-name',
  creator: 'Fan account',
  platform: 'X',
  publishedAt: '2026-08-16',
  sourceUrl: 'https://x.com/FreakCircusVRC/status/1996158068409643137',
  image: '/images/community/20251203-1996158068409643137.jpeg',
  imageAlt: { en: 'Describe the image', zh: '图片说明' },
  title: { en: 'I want to hold on to you a little longer Y/N ~ Pierrot', zh: 'I want to hold on to you a little longer Y/N ~ Pierrot' },
  summary: { en: '', zh: '' },
  tags: ['Pierrot', 'FanArt'],
  sensitive: false,
  featured: false,
},
{
  id: 'unique-short-name',
  creator: 'Fan account',
  platform: 'X',
  publishedAt: '2026-08-16',
  sourceUrl: 'https://x.com/FreakCircusVRC/status/1996158237855662248',
  image: '/images/community/20251203-1996158237855662248.jpeg',
  imageAlt: { en: '', zh: '' },
  title: { en: 'I am so hungry I could eat someone ~ Harlequin', zh: 'I am so hungry I could eat someone ~ Harlequin' },
  summary: { en: '', zh: '' },
  tags: ['Harlequin', 'FanArt'],
  sensitive: false,
  featured: false,
},

];
