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

export const COMMUNITY_LAST_CHECKED = '2026-10-15';

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
  id: 'ama-2-answers-part-29-2026-10-12',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-12',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/830248258818408448/ama-2-answers-part-29',
  // Original post image: https://64.media.tumblr.com/f6906a3719e428ed44a35277e134e3f5/daceb5c935930b9e-71/s500x750/8f628600e88960ee343323eb73ac4c163318586a.png
  image: '/images/community/ama2-part29-20261012.png',
  imageAlt: {
    en: 'Pierrot recalls the troupe’s earlier days in AMA 2, Part 29.',
    zh: 'Pierrot 在 AMA 2 第 29 部分中回忆团员早期的相处。',
  },
  title: { en: 'AMA 2 – Answers Part 29', zh: 'AMA 2 – 问答第 29 部分' },
  summary: {
    en: 'Neko writes the script in Portuguese before translating it into English, adjusting scenes where language changes affect the dialogue. This AMA also revisits the troupe’s earlier days, explains that Pierrot’s feelings for MC are new to him, and leaves a shared universe with Pet Boy undecided. The Tumblr post arrived later than planned because of a team delay.',
    zh: 'Neko 先用葡萄牙语写剧本，再翻译成英语，并调整因语言差异而受影响的对白。本期还回顾了团员早期的相处，解释 Pierrot 尚不熟悉自己对 MC 的感情；Pet Boy 是否与本作共享世界观仍未决定。因团队事务，本期 Tumblr 问答比原计划晚发布。',
  },
  tags: ['AMA2', 'Lore', 'Writing', 'Pierrot'],
},
{
  id: 'weekly-quick-update-day-3-2026-10-09',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-09',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/830046885449515008/weekly-quick-update-day3',
  // Original post image: https://64.media.tumblr.com/63cc093302c716ae908a99fbfd82bab5/d8080ca6d3bc42b6-c7/s500x750/ec0b502bbcdab582332f8ef9c647a46b60f70c68.jpg
  image: '/images/community/weekly-update-day3-20261009.jpg',
  imageAlt: {
    en: 'Update image with a small Pierrot plush peeking into the café.',
    zh: '开发周报配图：小小的 Pierrot 玩偶从墙边探头看向咖啡店。',
  },
  title: { en: 'Weekly Quick Update – Day 3', zh: 'Day 3 开发简报：代码与 Columbina 场景' },
  summary: {
    en: 'Neko focused on coding and the shop, with placeholder assets still standing in for unfinished scenes. Transitions, choices, and images will be polished once those scenes are settled. A new, very short scene briefly mentions Columbina, whose design is planned soon so flashback silhouettes can remain consistent. No new game artwork or public Day 3 release date was shared.',
    zh: 'Neko 本周主要推进代码与商店工作，未完成场景仍使用占位素材，待场景确定后再打磨转场、选项和画面。新增了一个简短提及 Columbina 的场景；她的设计也计划近期制作，以保持回忆场景中的剪影一致。本次没有展示新的游戏美术，也未公布 Day 3 的公开发布日期。',
  },
  tags: ['Day3', 'DevelopmentUpdate', 'Programming', 'Columbina'],
  featured: true,
  day3: {
    kind: 'development',
    headline: { en: 'Coding continues with a brief Columbina scene', zh: '代码继续推进，新增简短 Columbina 场景' },
    points: {
      en: [
        'Newly coded scenes still use placeholders and work only partially.',
        'Transitions, choices, and images will be polished after scene decisions are settled.',
        'A short new scene briefly mentions Columbina; her character design is planned soon.',
        'No public Day 3 build or release date was announced.',
      ],
      zh: [
        '新实装的场景仍使用占位素材，目前仅部分可运行。',
        '场景确定后，再进一步打磨转场、选项与画面。',
        '新增场景简短提及 Columbina，她的角色设计计划近期制作。',
        '尚未公布 Day 3 的公开版本或发布日期。',
      ],
    },
  },
},
{
  id: 'neko-canon-community-clarification-2026-10-05',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-05',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829687295604129793/neko-here',
  title: { en: 'Neko’s Canon and Community Clarification', zh: 'Neko 关于正史与社区沟通的说明' },
  summary: {
    en: 'Neko confirms being TFC’s sole creator and developer. The circus members regard one another as family, share no blood relationship, and are not romantically paired with each other; relationships involving MC develop through player choices. Only official blogs and Neko’s official social accounts confirm canon. Moderators’ personal posts are their own views. Neko also addresses Chinese fans, apologizes for misunderstandings, and asks the community to reject cyberbullying.',
    zh: 'Neko 确认自己仍是 TFC 的唯一创作者与开发者。团员彼此视为家人，没有血缘关系，彼此之间也没有恋爱配对；涉及 MC 的关系由玩家选择发展。正史确认以官方博客及 Neko 的官方社交账号为准，管理员私人博客代表个人观点。Neko 也向中文社区表达感谢、为误会致歉，并呼吁抵制网络霸凌。',
  },
  tags: ['CommunityNotice', 'Canon', 'Neko'],
},
{
  id: 'just-a-hi-2026-10-03',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-03',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829422781829677056/just-a-hi',
  title: { en: 'Just a Hi! – Weekly Update Paused', zh: '近况问候：本周详细周报暂停' },
  summary: {
    en: 'Neko skipped the detailed weekly update because of a heavy workload, while reporting continued coding progress and more artwork needed for new scenes. The post also welcomes the new Japan/Korea partnership and mentions possible arrangements for Brazilian fans, with nothing confirmed yet.',
    zh: '因工作繁忙，Neko 暂停本周的详细开发周报，但代码仍在推进，新场景也需要准备更多美术。本篇同时提及新的日本／韩国合作，以及为巴西粉丝筹备安排的可能性；后者尚未确定。',
  },
  tags: ['Day3', 'CommunityNotice', 'WeeklyUpdate'],
  day3: {
    kind: 'notice',
    headline: { en: 'Detailed weekly report skipped; coding continues', zh: '详细周报暂停，代码工作继续' },
  },
},
{
  id: 'ama-2-answers-part-28-2026-10-02',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-02',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829417297037950976/ama-2-answers-part-28',
  // Original post image: https://64.media.tumblr.com/301220e7e1f7140abdf73f771d844f56/28bb5480cbc5b2c6-c1/s500x750/f8e6bf97426ef823e9d2e42a75ced75b9d502528.png
  image: '/images/community/ama2-part28-20261002.png',
  imageAlt: {
    en: 'Jester and Ticket Taker respond to a fan invitation in AMA 2, Part 28.',
    zh: 'Jester 与 Ticket Taker 在 AMA 2 第 28 部分中回应粉丝邀约。',
  },
  title: { en: 'AMA 2 – Answers Part 28', zh: 'AMA 2 – 问答第 28 部分' },
  summary: {
    en: 'Neko highlights easily missed character traits: Doctor’s curiosity, Jester’s affection, Harlequin’s protectiveness, Ticket Taker’s sociability, and Pierrot’s fears. The cast’s childhoods will be revealed gradually, and their faces are intended to appear eventually, though not necessarily all in the main game. An official Discord remains difficult to manage; sprite packs and an art book are still undecided.',
    zh: 'Neko 谈到了容易被忽略的角色特点：Doctor 的好奇心、Jester 的温情、Harlequin 的保护欲、Ticket Taker 的善于交际，以及 Pierrot 的恐惧。角色童年会逐步揭示，面容也计划在未来展示，但未必都在主游戏中出现。官方 Discord 的管理仍有困难，立绘包与画集也尚未确定。',
  },
  tags: ['AMA2', 'Lore', 'Characters'],
},
{
  id: 'harlequins-pet-comic-2026-10-02',
  creator: 'destinysquared',
  platform: 'Tumblr',
  publishedAt: '2026-10-02',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829371603825655808',
  // Original post image: https://64.media.tumblr.com/fd1d2b4149826490473c542408883347/cf8d27835681db92-f0/s540x810/e6adaa39489c6ecd5c23bb3e71a5af2d096577b1.png
  image: '/images/community/harlequins-pet-cover-20261002.png',
  imageAlt: {
    en: 'Cover of Harlequin’s Pet, written by Neko and illustrated by Destiny, showing Harlequin holding an iguana.',
    zh: '由 Neko 编剧、Destiny 绘制的《Harlequin 的宠物》漫画封面，Harlequin 怀抱一只鬣蜥。',
  },
  title: { en: 'Official Comic – Harlequin’s Pet', zh: '官方漫画：Harlequin 的宠物' },
  summary: {
    en: 'The official blog shared Harlequin’s Pet, written by Neko with art and lettering by Destiny and cover inspiration credited to Naomi Itami. It explores Harlequin’s past and outlook. The iguana’s nickname “Aioli” comes from fans and is not canon. Content warning: animal death and death; the comic contains story spoilers.',
    zh: '官方博客转发漫画《Harlequin 的宠物》，由 Neko 编剧、Destiny 绘画与排字，封面创意署名 Naomi Itami。故事补充 Harlequin 的过去与观念。鬣蜥的昵称“Aioli”来自粉丝，并非正史名字。内容提示：涉及动物死亡与死亡，并含剧情剧透。',
  },
  tags: ['OfficialComic', 'Harlequin', 'Lore', 'Spoilers'],
  // The selected cover is non-graphic; the summary retains the comic’s content warnings.
},
{
  id: 'official-japan-korea-x-account-2026-10-02',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-02',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829337443751919616/official-twitterx-account-for-korea-japan',
  // Original post image: https://64.media.tumblr.com/bda277e2382b9cbb70f260c5762225e7/6f123e8821993dff-3e/s500x750/4cb0bb62bf9f41df939171f568124b1cdaa27818.png
  image: '/images/community/official-jpkr-account-20261002.png',
  imageAlt: {
    en: 'Screenshot of the official Japan and Korea X account’s launch post with Japanese and Korean text and Pierrot artwork.',
    zh: '日本与韩国官方 X 账号的首发博文截图，包含日文、韩文公告与 Pierrot 插画。',
  },
  title: { en: 'Official X Account for Japan and Korea', zh: '日本与韩国官方 X 账号公告' },
  summary: {
    en: 'The team announced @FreakCircusJPKR on X, operated by partner diVers LLC for fans in Japan and Korea. Planned posts include development news, merchandise and event information, and press releases. At the time of this announcement, the team said there were no other official TFC X accounts, including an English account.',
    zh: '团队公布面向日本与韩国粉丝的官方 X 账号 @FreakCircusJPKR，由合作方 diVers LLC 运营，计划分享开发动态、周边与活动信息及新闻公告。该公告发布时，团队表示没有其他 TFC 官方 X 账号，也没有英文官方 X 账号。',
  },
  tags: ['CommunityNotice', 'OfficialAccount', 'Japan', 'Korea'],
},
{
  id: 'pierrot-plush-availability-2026-10-01',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-10-01',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829300150476357632/about-the-pierrot-plush-availability',
  // Original post image: https://64.media.tumblr.com/caf631716f0aeeb06473d524f9febf1c/05c48a4f5973d0c5-da/s500x750/bc1a557aaec1d45f9b46d799120829941506687f.png
  image: '/images/community/pierrot-plush-20261001.png',
  imageAlt: {
    en: 'Official Pierrot plush with heart-shaped eyes, a red-and-black hat, and a gold ruff.',
    zh: '官方 Pierrot 毛绒玩偶，带有爱心眼睛、红黑帽子与金色领饰。',
  },
  title: { en: 'Pierrot Plush – Availability Clarification', zh: 'Pierrot 毛绒玩偶销售安排说明' },
  summary: {
    en: 'The team clarified that Gimme Swag’s 30-day period referred to the public launch, while orders could remain open during production or while stock lasted. Gimme Swag assured the team that delivery dates for orders placed in the original preorder window would not be affected. The post also warns about unauthorized copies of the plush.',
    zh: '团队澄清，Gimme Swag 所说的 30 天指公开首发期，生产期间或仍有库存时可能继续接受订单。Gimme Swag 向团队保证，原预售期内订单的交付日期不会因此改变。公告同时提醒粉丝留意未经授权的仿制玩偶。',
  },
  tags: ['CommunityNotice', 'Pierrot', 'OfficialMerch'],
},
{
  id: 'happy-birthday-jester-2026-09-29',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-29',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/829110621879582720/happy-birthday-jester',
  // Original post image: https://64.media.tumblr.com/5684236158600ba15023d3fae8b390e1/f1df32bbbe3a72f9-7c/s500x750/be9de18b699a87cf31d0fa3be8df30fe1fa9d6ff.png
  image: '/images/community/jester-birthday-20260929.png',
  imageAlt: {
    en: 'Jester with miniature circus members on his gloved hand in Neko’s birthday illustration.',
    zh: 'Neko 的生日贺图：Jester 的手套上聚集着迷你马戏团成员。',
  },
  title: { en: 'Happy Birthday, Jester!', zh: 'Jester 生日快乐！' },
  summary: {
    en: 'The official blog celebrated Jester’s birthday with an illustration made with 春醴记工作室 and an additional personal tribute from Neko. The post celebrates the troupe’s purple leader on September 29.',
    zh: '官方博客于 9 月 29 日庆祝紫色团长 Jester 的生日，发布了与春醴记工作室合作的生日插画，以及 Neko 自己的庆生作品。',
  },
  tags: ['Jester', 'Birthday', 'OfficialArt'],
},
{
  id: 'ama-2-answers-part-27-2026-09-25',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-25',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/828781377298284544/ama-2-answers-part-27',
  // Original post image: https://64.media.tumblr.com/50e38cd42d58140151720a0b4f05d16f/5251b01042537a30-45/s500x750/0ffb60aab1d77394b3384330963249e6cb18a156.png
  image: '/images/community/ama2-part27-20260925.png',
  imageAlt: {
    en: 'Doctor recalls a warm meal shared by the troupe in AMA 2, Part 27.',
    zh: 'Doctor 在 AMA 2 第 27 部分中回忆团员共同用餐的温暖时刻。',
  },
  title: { en: 'AMA 2 – Answers Part 27', zh: 'AMA 2 – 问答第 27 部分' },
  summary: {
    en: 'Doctor recalls a warm meal shared after the troupe acquired its trailer, Jester discusses learning Arabic and favorite scents, and Neko explains that Ticket Taker’s design draws on magicians and traditional ringmasters. Future Tumblr AMAs will transcribe fan questions to avoid splitting installments around the image limit.',
    zh: 'Doctor 回忆团员刚有拖车时一起用餐的温暖时刻，Jester 谈到学习阿拉伯语与喜欢的气味，Neko 则说明 Ticket Taker 的设计主要参考魔术师与传统马戏团长服装。为避免受图片上限影响而拆篇，后续 Tumblr AMA 将用文字转录粉丝问题。',
  },
  tags: ['AMA2', 'Lore', 'Doctor', 'Jester', 'TicketTaker'],
},
{
  id: 'weekly-update-day-3-2026-09-25',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-25',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/828778230530097152/weekly-update-day3',
  // Original post image: https://64.media.tumblr.com/9d3ebc955eec0b13962f9ec769847d26/ee27abf5982eb54b-31/s500x750/c47228c3007c552621f988720009243cf6d7e937.png
  image: '/images/community/weekly-update-day3-20260925.png',
  imageAlt: {
    en: 'Day 3 development screenshot showing Jester and another character as silhouettes in a dark café scene.',
    zh: 'Day 3 开发截图：Jester 与另一名角色以剪影形式出现在昏暗的咖啡店场景中。',
  },
  title: { en: 'Weekly Update – Day 3: Café Scene Polish', zh: 'Day 3 每周开发进展：咖啡店场景打磨' },
  summary: {
    en: 'Some café choices and situations need more polish, while programming has advanced to the next scene. More sketches and possibly new backgrounds are needed. Neko described being almost halfway through the content planned for the beta test, rather than all of Day 3. Unauthorized Google Play uploads also took time to address; an official store release would receive its own announcement.',
    zh: '咖啡店部分选项与情境仍需打磨，下一场景的编程也已推进；后续还需要草图，并可能补充新背景。Neko 表示已接近计划用于 Beta 测试内容的一半，并非指整个 Day 3 的完成比例。处理 Google Play 上的盗版上传也占用了时间，正式商店版本会另行公告。',
  },
  tags: ['Day3', 'DevelopmentUpdate', 'Programming', 'BetaTesting'],
  day3: {
    kind: 'development',
    headline: { en: 'Café revisions and progress toward the planned beta scope', zh: '调整咖啡店场景，推进计划中的 Beta 测试内容' },
    points: {
      en: [
        'Café choices and situations need further revisions.',
        'Programming has moved ahead to the next scene; more sketches and backgrounds may be needed.',
        'The “almost halfway” estimate applies to the planned beta-test content, not the full Day 3 release.',
      ],
      zh: [
        '咖啡店的部分选项与情境仍需调整。',
        '下一场景的程序工作已推进，可能还需更多草图与背景。',
        '“接近一半”指计划中的 Beta 测试内容，不代表整个 Day 3 的完成比例。',
      ],
    },
  },
},
{
  id: 'weekly-update-day-3-2026-09-18',
  creator: 'freakcircusofhorrors',
  platform: 'Tumblr',
  publishedAt: '2026-09-18',
  sourceUrl: 'https://freakcircusofhorrors.tumblr.com/post/828144006942818304/weekly-update-day3',
  // Original post image: https://64.media.tumblr.com/1717a4fd013061ca2f1b3b222b590a3b/8546ae089cd24538-24/s1280x1920/6c0cc1535db2ff81c4c3a819c7001024056e0854.jpg
  image: '/images/community/weekly-update-day3-20260918.jpg',
  imageAlt: {
    en: 'Day 3 development screenshot showing the café boss speaking with the player.',
    zh: 'Day 3 开发截图：咖啡店老板与玩家对话。',
  },
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
  // Original post image: https://64.media.tumblr.com/ed933d7b74be3075c372df66e9ee1c44/5bd37be02ab5feec-0a/s1280x1920/a6323b23af2921a6bd254df7c8dc5c49dbc9780f.png
  image: '/images/community/ama2-part26-20260918.png',
  imageAlt: {
    en: 'AMA 2 Part 26: Pierrot talks about admiring Jester’s adaptability and Doctor’s knowledge.',
    zh: 'AMA 2 第 26 部分：Pierrot 谈到自己欣赏 Jester 的应变能力与 Doctor 的知识。',
  },
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
  // Original post image: https://64.media.tumblr.com/859fd79c646c589e340d2886ea280d35/2b38b8683faea987-c4/s1280x1920/35a8b13fd89a712f3e0bfc01a754f1f4ded06239.png
  image: '/images/community/ama2-part25-2-20260911.png',
  imageAlt: {
    en: 'AMA 2 Part 25, second half: Pierrot answers a question in front of the illuminated circus tents.',
    zh: 'AMA 2 第 25 部分下篇：Pierrot 在灯光明亮的马戏帐篷前回答问题。',
  },
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
  // Original post image: https://64.media.tumblr.com/aed005b1cd8de3cb2e218728382854b9/378dac40524d8d9d-86/s1280x1920/51f3294473eee9f007926da320ea4a938afd10d0.png
  image: '/images/community/ama2-part25-1-20260911.png',
  imageAlt: {
    en: 'AMA 2 Part 25, first half: Pierrot explains that he turns to Jester for guidance.',
    zh: 'AMA 2 第 25 部分上篇：Pierrot 表示自己会向 Jester 寻求指引。',
  },
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
  // Original post image: https://64.media.tumblr.com/8070a34c403b82515429deee18c0081c/dddcef019ec28fa7-31/s1280x1920/d06ba45e1824a4f37c77bf2434332af673deae6f.jpg
  image: '/images/community/weekly-update-day3-20260911.jpg',
  imageAlt: {
    en: 'Day 3 development screenshot showing Pierrot leaning closer to whisper to the player.',
    zh: 'Day 3 开发截图：Pierrot 靠近玩家并低声耳语。',
  },
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
