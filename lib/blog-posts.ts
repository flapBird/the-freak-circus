export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: string;
  content: string;
};

const POSTS_EN: BlogPost[] = [
  {
    slug: 'current-prototype-guide',
    title: 'What the Current The Freak Circus Prototype Actually Includes',
    description: 'A clear, spoiler-light guide to version 0.2: what is playable now, what remains in development, and what new players should expect.',
    date: '2026-08-15',
    tags: ['Version 0.2', 'New players', 'Game guide'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'The Freak Circus cover artwork',
    readingTime: '5 min read',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> is best approached as a polished opening act rather than a finished, route-complete visual novel. The current public build is version 0.2 and is still labelled a prototype.</p>
      <h2>The short answer</h2>
      <p>The available build introduces the central conflict and five members of the cast. It includes one bad ending, while the larger script and the planned Pierrot, Harlequin, protagonist, and shared conclusions remain in development.</p>
      <p>That distinction matters. A character appearing in the prototype does not automatically mean that the character already has a complete romance route or a final ending.</p>
      <h2>What a first session is like</h2>
      <p>The official listing describes an average session as roughly half an hour. That makes the prototype easy to sample, but it also means a first playthrough is designed to establish tone, relationships, and danger—not to resolve every thread.</p>
      <ul><li>Expect original character art and backgrounds.</li><li>Expect meaningful scene variations and an available bad ending.</li><li>Do not expect every planned ending to be playable yet.</li></ul>
      <h2>Know the content boundary before playing</h2>
      <p>This is an adults-only psychological horror story. Its warnings include blood, death, abuse, kidnapping, drugging, physical domination, and non-consensual contact. Read those warnings before deciding whether the game is right for you.</p>
      <h2>A better way to use fan guides</h2>
      <p>Check the build number before following any route advice, keep a clean save before major choices, and treat screenshots or choice charts without a tested version as community interpretation. A useful guide should tell you what was observed, on which build, and where spoilers begin.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: 'Browser or Download? Choosing the Right Way to Play',
    description: 'Compare the browser build with local Windows, macOS, Linux, and Android downloads, then prepare your save files before switching versions.',
    date: '2026-08-14',
    tags: ['Download', 'Browser', 'Setup'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'A scene from The Freak Circus browser build',
    readingTime: '4 min read',
    content: `
      <p class="article-lede">The story is the same, but the best way to play depends on how much setup you want and whether you need a portable local copy.</p>
      <h2>Choose the browser build for the quickest start</h2>
      <p>The HTML5 version is the simplest option for a first look: open the game, allow the page to load, and begin without installing an archive. It is also useful when you are playing on a shared machine and do not want to keep game files.</p>
      <p>Browser storage can be cleared by privacy tools or browser resets, so it is not the best place for a save you cannot afford to lose.</p>
      <h2>Choose a download for a persistent local copy</h2>
      <p>Windows, macOS, Linux, and Android packages are listed for version 0.2. A local build avoids browser-storage limits and is usually the more comfortable option for repeated playthroughs.</p>
      <ul><li>Match the package to your operating system.</li><li>Extract desktop archives before launching the game.</li><li>Back up saves before replacing an older build.</li></ul>
      <h2>Why the source matters</h2>
      <p>Use the developer's itch.io listing rather than a repost or a repackaged installer. The developer identifies that listing as the official distribution page and asks players not to use reuploaded copies.</p>
      <h2>If something goes wrong</h2>
      <p>First confirm the build number and platform. For browser problems, try a current Chrome- or Edge-family browser and disable aggressive page translation for the game tab. For a desktop archive, extract it fully and keep the application with its bundled files.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Waiting for Day 3 Without Falling for Release-Date Rumors',
    description: 'A practical checklist for separating real development progress from countdowns, guesses, and recycled claims about the next chapter.',
    date: '2026-08-13',
    tags: ['Day 3', 'Updates', 'Fact check'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus character artwork',
    readingTime: '5 min read',
    content: `
      <p class="article-lede">Day 3 is in development, but development activity is not the same thing as a confirmed launch date. Keeping those ideas separate is the easiest way to avoid misleading countdown pages and recycled rumors.</p>
      <h2>What is actually established</h2>
      <p>The public game page says that the story continues for one more in-game day and that this part is still being developed. It does not publish a release day. Until a dated release announcement appears, any exact date should be treated as speculation.</p>
      <h2>Progress signals are useful—but limited</h2>
      <p>Dialogue programming, new artwork, background changes, testing, and scene previews all show that work is moving. None of those milestones alone tells us when a stable public build will be ready.</p>
      <h2>Run a quick rumor check</h2>
      <ol><li>Look for an exact publication date and a named author.</li><li>Check whether the wording says “released” or only “in development.”</li><li>Separate screenshots of work in progress from a downloadable build.</li><li>Reject pages that turn a fan estimate into a countdown.</li></ol>
      <h2>Use the waiting time well</h2>
      <p>Keep your current saves, note which build created them, and avoid overwriting the first-playthrough slot. When the next build arrives, read its change notes before assuming old route advice still applies.</p>
    `,
  },
];

const POSTS_ZH: BlogPost[] = [
  {
    slug: 'current-prototype-guide',
    title: '当前《The Freak Circus》原型版究竟包含什么？',
    description: '一篇尽量少剧透的 0.2 版本说明：现在能玩到什么、哪些内容仍在开发，以及新玩家应该期待什么。',
    date: '2026-08-15',
    tags: ['0.2 版本', '新玩家', '游戏指南'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'The Freak Circus 封面美术',
    readingTime: '阅读约 5 分钟',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> 更适合被看作一个完成度较高的开场，而不是所有路线都已完成的完整视觉小说。当前公开版本为 0.2，状态仍是原型版。</p>
      <h2>先说结论</h2>
      <p>现有版本建立了核心冲突，并介绍五位角色；其中包含一个坏结局。更完整的剧本以及计划中的 Pierrot、Harlequin、主角和共同结局仍在开发。</p>
      <p>因此，角色在原型版中登场，并不等于已经拥有完整恋爱路线或最终结局。</p>
      <h2>第一次游玩会是什么体验</h2>
      <p>当前版本的平均单次体验约半小时，适合快速了解作品，但重点是建立氛围、人物关系和危险感，而不是一次解决所有伏笔。</p>
      <ul><li>可以体验原创角色立绘与背景。</li><li>部分场景会随选择变化，并存在一个坏结局。</li><li>目前不能把所有计划结局当作已完成内容。</li></ul>
      <h2>游玩前先确认内容边界</h2>
      <p>这是面向成年人的心理恐怖作品，涉及血腥、死亡、虐待、绑架、下药、身体控制及非自愿接触。开始前请先判断这些主题是否适合自己。</p>
      <h2>更合理地使用粉丝指南</h2>
      <p>跟随路线建议前先确认版本号，在重要选择前保留干净存档，并把没有测试版本的截图或选项表视为玩家解读。一份可靠指南应说明观察到了什么、使用哪个版本，以及剧透从哪里开始。</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: '浏览器版还是下载版？选择适合你的游玩方式',
    description: '比较浏览器版与 Windows、macOS、Linux、Android 下载版，并在切换版本前正确处理存档。',
    date: '2026-08-14',
    tags: ['下载', '浏览器', '安装'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'The Freak Circus 浏览器版游戏场景',
    readingTime: '阅读约 4 分钟',
    content: `
      <p class="article-lede">两种方式体验的是同一个故事，但最佳选择取决于你愿意做多少设置，以及是否希望保留本地游戏副本。</p>
      <h2>想最快开始：选择浏览器版</h2>
      <p>HTML5 版本最适合初次体验：等待页面加载完成即可开始，无需安装压缩包。若使用公用设备、不想保留游戏文件，也很方便。</p>
      <p>但浏览器隐私清理或重置可能移除本地存储，因此不适合保存无法丢失的重要进度。</p>
      <h2>想长期保留：选择下载版</h2>
      <p>0.2 版本列出了 Windows、macOS、Linux 和 Android 包。本地版本不受浏览器存储限制，更适合多次游玩。</p>
      <ul><li>下载与操作系统匹配的包。</li><li>桌面端压缩包应完整解压后再启动。</li><li>替换旧版本前先备份存档。</li></ul>
      <h2>为什么下载来源很重要</h2>
      <p>应使用开发者的 itch.io 页面，而不是转载或重新打包的安装程序。开发者把该页面说明为官方发布入口，并明确要求不要使用转载副本。</p>
      <h2>遇到问题时</h2>
      <p>先确认版本号与平台。浏览器问题可尝试当前版本的 Chrome 或 Edge 系浏览器，并关闭游戏标签页上的强制翻译；桌面版则需要确保压缩包完整解压，并保留程序附带的所有文件。</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: '等待 Day 3 时，怎样避开“发布日期”传言？',
    description: '用一份实用核对清单，把真实开发进度与倒计时、猜测和重复传播的下一章说法分开。',
    date: '2026-08-13',
    tags: ['Day 3', '开发更新', '事实核查'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus 角色美术',
    readingTime: '阅读约 5 分钟',
    content: `
      <p class="article-lede">Day 3 正在开发，但“有开发进展”不等于“已经确认上线日期”。分清这两件事，是避开误导性倒计时与重复传言的最简单方法。</p>
      <h2>目前真正确定的内容</h2>
      <p>公开游戏页说明故事还会继续一个游戏日，并且这部分仍在开发；页面没有公布发布日期。在出现带日期的发布公告前，任何具体日期都应视为推测。</p>
      <h2>进度信号有用，但能力有限</h2>
      <p>对白编程、新美术、背景调整、测试和场景预览都能说明工作在推进，但其中任何一个里程碑都无法单独证明稳定公开版何时完成。</p>
      <h2>快速核对一条传言</h2>
      <ol><li>检查是否有明确发布日期和可识别的发布者。</li><li>确认原文说的是“已发布”还是仅仅“开发中”。</li><li>把开发截图与可下载版本分开。</li><li>拒绝把粉丝估计直接改成倒计时的页面。</li></ol>
      <h2>等待期间可以做什么</h2>
      <p>保留现有存档并记录创建它的版本，不要覆盖第一次游玩的存档槽。新版本上线后，先看变更说明，再判断旧路线建议是否仍然适用。</p>
    `,
  },
];

export const BLOG_POSTS = POSTS_EN;

export function getBlogPosts(locale = 'en'): BlogPost[] {
  return locale === 'zh' ? POSTS_ZH : POSTS_EN;
}

export function getPostBySlug(slug: string, locale = 'en'): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
