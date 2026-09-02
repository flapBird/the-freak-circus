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
  images?: readonly {
    src: string;
    alt: Record<CommunityLocale, string>;
  }[];
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
//   images: [{ src: '/images/community/your-second-image.webp', alt: { en: 'Describe the image', zh: '图片说明' } }],
//   title: { en: 'English title', zh: '中文标题' },
//   summary: { en: 'English summary', zh: '中文简介' },
//   tags: ['Pierrot', 'FanArt'],
//   sensitive: false,
//   featured: false,
// },




export const COMMUNITY_POSTS: readonly CommunityPost[] = [
{
  id: 'ama-2-answers-part-24-2026-08-31',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-08-31',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/',
  images: [
    {
      src: '/images/community/ama2-part24-20260831-pierrot.jpg',
      alt: {
        en: 'AMA 2 Part 24 screenshot showing Pierrot offering reassurance beneath the illuminated circus tents.',
        zh: 'AMA 2 Part 24 截图：Pierrot 在灯火通明的马戏帐篷前给出安慰。',
      },
    },
    {
      src: '/images/community/ama2-part24-20260831-jester.jpg',
      alt: {
        en: 'AMA 2 Part 24 screenshot showing Jester explaining that the character\'s seamless outfit was specially tailored.',
        zh: 'AMA 2 Part 24 截图：Jester 解释自己的无缝服装是专门定制的。',
      },
    },
    {
      src: '/images/community/ama2-part24-20260831-ticket-taker.jpg',
      alt: {
        en: 'AMA 2 Part 24 screenshot showing Ticket Taker answering a question about each circus member\'s red ticket.',
        zh: 'AMA 2 Part 24 截图：Ticket Taker 回答每位马戏团成员所持红票的问题。',
      },
    },
  ],
  title: { en: 'AMA 2 – Answers Part 24', zh: 'AMA 2 – 问答第 24 部分' },
  summary: {
    en: 'Neko is still taking a short break from social media while the moderators help with the official blog. Final store preparations are underway ahead of a Patreon supporter test, and game beta testing is also taking significant time. The developer hopes to release the update sometime in 2026, but stressed that this is not a promise. Part 24 continues the AMA with new answers from the circus cast.',
    zh: 'Neko 目前仍在暂时减少社交媒体活动，官方博客由管理员协助维护。商店正在做最后准备，将先面向 Patreon 支持者测试；游戏 Beta 测试也占用了不少时间。开发者希望在 2026 年内发布更新，但明确表示无法作出保证。第 24 部分同时继续带来马戏团角色的 AMA 回答。',
  },
  tags: ['AMA2', 'BetaTesting', 'Pierrot', 'Jester', 'TicketTaker'],
  sensitive: false,
  featured: true,
},
{
  id: 'weekly-update-day-3-2026-08-31',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-08-31',
  sourceUrl: 'https://www.tumblr.com/freakcircusofhorrors/825607753064169472/weekly-update-day-3',
  images: [
    {
      src: '/images/community/weekly-update-day3-20260831-1.jpg',
      alt: {
        en: 'Day 3 development screenshot showing Harlequin and Jester together in the café scene.',
        zh: 'Day 3 开发截图：Harlequin 与 Jester 同时出现在咖啡店场景中。',
      },
    },
    {
      src: '/images/community/weekly-update-day3-20260831-2.jpg',
      alt: {
        en: 'Day 3 development screenshot showing Jester speaking in the café scene.',
        zh: 'Day 3 开发截图：Jester 在咖啡店场景中说话。',
      },
    },
  ],
  title: { en: 'Weekly Update – Day 3', zh: 'Day 3 每周开发进展' },
  summary: {
    en: 'The developer spent the week focused on the store and the game, making solid progress on the opening section. The large amount of dialogue is taking time to translate and program, and new sprites have now been selected for Harlequin, Pierrot, and Jester.',
    zh: '开发者本周集中处理商店与游戏工作，Day 3 开篇部分已取得不错进展。由于对白量很大，翻译和程序实装仍需要时间；Harlequin、Pierrot 与 Jester 的新立绘也已确定。',
  },
  tags: ['Day3', 'DevelopmentUpdate', 'Harlequin', 'Pierrot', 'Jester'],
  sensitive: false,
  featured: true,
},
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
