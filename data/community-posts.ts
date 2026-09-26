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
  // Official Day 3 posts also populate the Day 3 page from this single record.
  day3?: {
    kind: 'development' | 'notice';
    headline: Record<CommunityLocale, string>;
    points?: Record<CommunityLocale, readonly string[]>;
  };
};

export const COMMUNITY_LAST_CHECKED = '2026-09-26';

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
  id: 'weekly-update-day-3-2026-09-18',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-18',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/828144006942818304/weekly-update-day3',
  title: { en: 'Weekly Update! – Day 3', zh: 'Day 3 每周开发进展：路线实装与草图' },
  summary: {
    en: 'One route is almost fully functional. Neko has corrected visual glitches and dialogue errors and prepared three or four new placeholder sketches, including scene variations, while programming continues. The update explains why coordinating dialogue, effects, and sprites takes time and shares two development screenshots.',
    zh: '一条路线已接近完全可运行。Neko 修复了画面与对白错误，并在继续编程的同时准备了三至四张占位草图，部分场景还有不同版本。本篇介绍了对白、特效与立绘协同实装所需的调试工作，并分享了两张开发截图。',
  },
  tags: ['Day3', 'DevelopmentUpdate', 'Programming', 'Artwork'],
  featured: true,
  day3: {
    kind: 'development',
    headline: { en: 'One route is almost fully functional', zh: '一条路线已接近完全可运行' },
    points: {
      en: ['Visual glitches and dialogue errors have been corrected.', 'Three or four new placeholder sketches include variations for some scenes.', 'Dialogue, effects, and sprite placement are still being programmed and debugged.', 'This is development progress; no public Day 3 release date was announced.'],
      zh: ['已修复部分画面问题与对白错误。', '新增三至四张占位草图，部分场景含不同版本。', '对白、特效与立绘显示仍在持续实装和调试。', '本次是开发进展，没有公布 Day 3 的公开发布日期。'],
    },
  },
},
{
  id: 'ama-2-answers-part-26-2026-09-18',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-18',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/828134682948517888/ama-2-answers-part-26',
  title: { en: 'AMA 2 – Answers Part 26', zh: 'AMA 2 – 问答第 26 部分' },
  summary: {
    en: 'The latest cast Q&A explores monster species, circus photography rules, dancing, and character relationships. Doctor describes Pierrot as the troupe’s healthiest member, while Pierrot admires Jester’s adaptability and Doctor’s knowledge. Neko also discusses the challenges of scene pacing, choice-dependent dialogue, and interactive mechanics.',
    zh: '新一轮角色问答涉及怪物种族、马戏团拍照规则、舞蹈与角色关系。Doctor 认为 Pierrot 是团内身体最健康的成员；Pierrot 则欣赏 Jester 的应变能力与 Doctor 的知识。Neko 也谈到了场景节奏、选项分支对白和交互机制的制作难点。',
  },
  tags: ['AMA2', 'Lore', 'Pierrot', 'Harlequin', 'Jester', 'Doctor', 'TicketTaker'],
},
{
  id: 'ama-2-answers-part-25-2-2026-09-11',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-11',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/827513414487343104/ama-2-answers-part-25-12',
  title: { en: 'AMA 2 – Answers Part 25 (2/2)', zh: 'AMA 2 – 问答第 25 部分（下篇）' },
  summary: {
    en: 'The second half continues Part 25’s illustrated Q&A. Neko clarifies that “deceased/unknown” labels can reflect characters losing contact after going their separate ways, rather than knowing what happened to one another. The post links back to the first half.',
    zh: '第 25 部分下篇继续以图文形式回答问题。Neko 补充说明，“已故／未知”的标记可能表示角色分道扬镳后失去了联系，并不知道彼此后来的情况。原帖同时提供了上篇入口。',
  },
  tags: ['AMA2', 'Lore'],
},
{
  id: 'ama-2-answers-part-25-1-2026-09-11',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-11',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/827513385132441600/ama-2-answers-part-24-%C2%BD',
  title: { en: 'AMA 2 – Answers Part 25 (1/2)', zh: 'AMA 2 – 问答第 25 部分（上篇）' },
  summary: {
    en: 'AMA 2 returns with the first half of Part 25, presented as illustrated question-and-answer panels. This installment is split across two posts, with a link to the second half at the end of the original post.',
    zh: 'AMA 2 恢复更新，第 25 部分上篇以问答图片发布。本期分成上下两篇，原帖末尾提供了下篇入口，可接续阅读完整一期。',
  },
  tags: ['AMA2', 'Community'],
},
{
  id: 'weekly-update-day-3-2026-09-11',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-11',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/827510465631600640/weekly-update-day3',
  title: { en: 'Weekly Update – Day 3: Branching scenes', zh: 'Day 3 每周开发进展：分支场景制作' },
  summary: {
    en: 'Neko has resumed work after a short break, progressing through code, adjustments, and fixes. A complex section with many choices and branching paths needs extra testing. Backgrounds and sprites have been corrected, and revisions plus new sprites for Doctor are planned when development reaches his scene.',
    zh: '短暂休息后，Neko 已恢复开发，继续推进代码、调整与修复。目前正在处理选项和分支较多的复杂段落，因此测试可能需要更长时间。部分背景与立绘已修正；推进到 Doctor 的场景后，还计划修改他的部分立绘并绘制新立绘。',
  },
  tags: ['Day3', 'DevelopmentUpdate', 'Doctor'],
  day3: {
    kind: 'development',
    headline: { en: 'Work resumes on choices and branching scenes', zh: '恢复开发，推进多选项分支场景' },
  },
},
{
  id: 'no-ama-or-weekly-update-2026-09-04',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-04',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/826849046331375616/no-ama-or-weekly-update',
  title: { en: 'No AMA or Weekly Update This Week', zh: '本周暂停 AMA 与开发周报' },
  summary: {
    en: 'The moderation team announced that the September 4 AMA crosspost and weekly update would be skipped while Neko took time away following a family bereavement. The team thanked the community for its understanding and support.',
    zh: '管理员公告：Neko 因家人离世需要暂时休息，9 月 4 日的 AMA 转载与开发周报暂停。团队感谢社区的理解与支持。',
  },
  tags: ['CommunityNotice', 'WeeklyUpdate'],
  day3: {
    kind: 'notice',
    headline: { en: 'Weekly update paused for September 4', zh: '9 月 4 日开发周报暂停' },
  },
},
{
  id: 'ask-box-update-2026-08-31',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-08-31',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/826478862411153408/ask-box-update',
  title: { en: 'Ask Box Update', zh: '提问箱安排更新' },
  summary: {
    en: 'The ask box will remain closed for the rest of 2026. Existing questions will be kept, and AMA posts and development updates will continue. Reducing blog duties gives Neko more time to focus on Day 3.',
    zh: '提问箱将在 2026 年剩余时间保持关闭，已有问题会保留，AMA 与开发动态仍会继续发布。减少博客事务能让 Neko 将更多时间投入 Day 3 开发。',
  },
  tags: ['CommunityNotice', 'Day3', 'AskBox'],
  day3: {
    kind: 'notice',
    headline: { en: 'Ask box stays closed to make more time for Day 3', zh: '提问箱继续关闭，为 Day 3 开发留出更多时间' },
  },
},
{
  id: 'ama-2-answers-part-24-2026-08-28',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-08-28',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/826245939387891712/ama-2-answers-part-24-12',
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
  featured: false,
},
{
  id: 'weekly-update-day-3-2026-08-28',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-08-28',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/826241523793428480/weekly-update-day-3',
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
  featured: false,
  day3: {
    kind: 'development',
    headline: { en: 'Opening section advances and new sprites are selected', zh: '开篇制作推进，三位角色新立绘已确定' },
  },
},
{
  id: 'pierrot-day3-july-24-2026',
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
  id: 'pierrot-hold-you-longer',
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
  id: 'harlequin-hungry',
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
