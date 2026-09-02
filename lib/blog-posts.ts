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
    slug: 'day-2-walkthrough-save-strategy',
    title: 'The Freak Circus Day 2 Walkthrough: Tents, Saves, and the Bad Ending',
    description: 'A spoiler-marked version 0.2 guide to the captive opening, circus tents, character introductions, save points, and the safest way to explore Day 2 without mistaking scene variations for finished routes.',
    date: '2026-09-02',
    tags: ['Day 2', 'Walkthrough', 'Version 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus cast gathered around the protagonist',
    readingTime: '10 min read',
    content: `
      <p class="article-lede">Day 2 is where <em>The Freak Circus</em> stops feeling like an uneasy introduction and begins closing its hand around the protagonist. The useful question is not “Which completed route should I lock in?”—there is no completed Pierrot or Harlequin ending in version 0.2—but “Where should I save so I can see the available variations without replaying the whole prototype?”</p>
      <div class="walkthrough-note"><strong>Guide boundary</strong><p>This article covers the public version 0.2 prototype and contains story spoilers. The official listing confirms five character introductions and one bad ending. It does not confirm multiple finished routes, a collectible system, or a menu of unlockable hidden scenes.</p></div>

      <h2>Make these saves before the pressure starts</h2>
      <p>Day 2 is short enough to replay, but the opening is long enough that repeating it just to test one response becomes tedious. Keep separate slots instead of overwriting the latest save:</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 2 — START:</strong> the first moment the new day gives you control.</li>
        <li><strong>CAPTIVE ROOM:</strong> before committing to a tense response around Pierrot or Harlequin.</li>
        <li><strong>RETURN TO CIRCUS:</strong> before entering an attraction tent.</li>
        <li><strong>TENT BRANCH:</strong> a fresh slot for each tent or character introduction.</li>
        <li><strong>LATE SCENE:</strong> before any choice that sounds final, defiant, or deliberately dangerous.</li>
      </ol>
      <p>This is more reliable than a single rolling save. If a scene ends sooner than expected—or reaches the bad ending—you still have a clean point only a few minutes back.</p>

      <h2>The captive-room opening: read the contrast, not an affection meter</h2>
      <p>The day opens with the protagonist restrained in an unfamiliar room. Pierrot frames his actions as protection; Harlequin's arrival turns that claim into a confrontation. The scene matters because it establishes how differently the two rivals exert control, not because it asks you to select a permanent romance route.</p>
      <p>For a first playthrough, answer in the way that feels natural and keep moving. On a replay, return to the <strong>CAPTIVE ROOM</strong> save and change one response at a time. That makes it obvious whether you found a genuine scene variation or merely a different line.</p>
      <div class="walkthrough-tip"><strong>Do not over-read the props.</strong><p>The mask and red ticket are meaningful story objects, but version 0.2 does not establish a conventional inventory where collecting them unlocks future endings. Treat them as part of the scene unless the game itself presents a later interaction.</p></div>

      <h2>Returning to the circus: how to explore the tents</h2>
      <p>The circus section broadens the cast through themed spaces. The best strategy is simple: save before entering, finish the scene without skipping, and then use that save for the next variation. Do not assume that a character introduction is a complete route.</p>

      <h3>Blue tent — Ticket Taker and the mirrors</h3>
      <p>The mirror sequence is built to make visual information feel unreliable. Look closely at which reflection is speaking and how Ticket Taker frames what you see. There is no need to solve every image as a puzzle on the first visit; the practical goal is to finish the introduction and preserve a save for a slower second reading.</p>

      <h3>Cyan tent — the Doctor</h3>
      <p>The Doctor's introduction leans hardest into restraint, examination, and medical-horror imagery. If those themes are uncomfortable, this is the moment to use the skip controls cautiously or step away. From a route perspective, obedience or resistance can change the texture of the exchange, but neither should be advertised as a completed Doctor route or ending.</p>

      <h3>Purple or black performance space — Jester</h3>
      <p>Jester's performance carries some of Day 2's densest lore. Let the dialogue advance normally rather than fast-skipping it. More importantly, treat the performance as a story told <em>inside</em> the game: it reveals how the circus talks about its past, but it is not automatically a neutral, complete account of every character's motives.</p>

      <h2>How to protect your run from the bad ending</h2>
      <p>The official version description lists one bad ending. A cautious guide should not invent a universal “correct answer” without a reproducible choice test, so use the game itself as the signal:</p>
      <ul>
        <li>Save before overtly dangerous or final-sounding responses.</li>
        <li>If the story cuts to an ending or returns to the menu, reload the most recent branch save.</li>
        <li>Change only the last meaningful response first; do not restart Day 2 immediately.</li>
        <li>Keep the bad-ending save if you want a complete record of the current prototype.</li>
      </ul>
      <p>Most importantly, reaching the bad ending does not mean the save is ruined. It means you found one of the few outcomes the current build explicitly says is available.</p>

      <h2>A clean two-pass route</h2>
      <div class="walkthrough-route"><div><strong>Pass 1 — story</strong><p>Play continuously, choose naturally, and save only at the five checkpoints above. Avoid guides during the actual scenes.</p></div><div><strong>Pass 2 — coverage</strong><p>Return to the tent and late-scene saves. Reverse one important response at a time and note what truly changes.</p></div></div>
      <p>This method is less glamorous than a giant “all endings” chart, but it fits the build that actually exists. Version 0.2 is an introduction-heavy prototype; it is not a finished route collection.</p>

      <h2>What counts as finishing Day 2?</h2>
      <p>You are caught up when you reach the end of the current public story, not when you have unlocked a nonexistent final romance ending. A thorough run should leave you with:</p>
      <ul class="walkthrough-checklist">
        <li>the captive-room conflict viewed without skipping;</li>
        <li>the circus return save preserved;</li>
        <li>the Ticket Taker, Doctor, and Jester introductions seen;</li>
        <li>the bad ending either recorded or safely avoided;</li>
        <li>a clean final save ready for a future official update.</li>
      </ul>
      <p>Day 3 remains in development. Keep this final save, but check future release notes before assuming version 0.2 choices will map unchanged onto the next public build.</p>

      <h2>Claims this guide deliberately does not make</h2>
      <p>Some walkthroughs describe multiple finished endings, a hidden-scene gallery, collectible pins with future mechanical effects, or fully available routes for every introduced character. The official page currently confirms none of those as finished features. For verified status, use the site's <a href="/day-3">Day 3 tracker</a> and <a href="/wiki">version 0.2 Wiki</a>.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'The Freak Circus Day 1 Walkthrough: A Careful First Playthrough',
    description: 'A practical version 0.2 guide to meeting Pierrot, reading the early rivalry, placing useful saves, and reaching Day 2 without chasing routes that are not finished yet.',
    date: '2026-09-02',
    tags: ['Day 1', 'Walkthrough', 'New players'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'A scene from The Freak Circus current prototype',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Day 1 works best when you let it be uncomfortable. It introduces Pierrot on an ordinary walk to work, then gradually turns a small encounter into the beginning of a dangerous rivalry. You do not need a perfect answer sheet to reach Day 2; you need a few sensible saves and a clear idea of what the current prototype can—and cannot—resolve.</p>
      <div class="walkthrough-note"><strong>Guide boundary</strong><p>This is a spoiler-marked guide for public version 0.2. It explains progression and replay strategy without pretending that Pierrot, Harlequin, or the wider cast already have completed endings.</p></div>

      <h2>Before starting: set up a run you can actually revisit</h2>
      <p>The official content warnings include blood, death, abuse, kidnapping, non-consensual drug use, physical domination, and unwanted contact. Day 1 does not show every warning at maximum intensity, but it establishes the tone. Decide whether those themes are right for you before chasing completion.</p>
      <p>Use three named slots from the beginning:</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 1 — CLEAN:</strong> before the first substantial choice.</li>
        <li><strong>PIERROT — STREET:</strong> before choosing how to respond during the encounter on the way to work.</li>
        <li><strong>DAY 1 — LATE:</strong> before the final cluster of scenes that carries the story toward Day 2.</li>
      </ol>
      <p>Do not keep saving over the first slot. A clean checkpoint is more useful than a screenshot of somebody else's choices because you can test the current build yourself.</p>

      <h2>The street encounter with Pierrot</h2>
      <p>Pierrot's introduction is the emotional hinge of Day 1. The scene asks how the protagonist reacts to a silent stranger who is already being treated as an outsider. The writing does more work when you choose a response you can stand behind instead of trying to reverse-engineer an invisible “love score.”</p>
      <p>For the first run, stay consistent: if you approach him with concern, keep that tone through the scene; if you are suspicious, let the discomfort remain. On the second run, load <strong>PIERROT — STREET</strong> and change only the first major response. Compare the dialogue and body language rather than assuming the branch has unlocked a finished route.</p>
      <div class="walkthrough-tip"><strong>Completion tip</strong><p>Do not restart because a response feels awkward. Day 1 is designed to continue through unease. Save-scumming every line breaks the pacing and usually tells you less than one uninterrupted playthrough.</p></div>

      <h2>When the rivalry begins to widen</h2>
      <p>Harlequin is not simply a brighter alternative to Pierrot. His presence changes the meaning of the first encounter by turning attention into competition. Watch how each performer handles distance, consent, and the protagonist's uncertainty. Those contrasts are more important in Day 1 than trying to declare a winner.</p>
      <p>The wider circus cast belongs to the prototype's introduction arc. Seeing Jester, Doctor, or Ticket Taker does not mean you have entered a complete romance route. The official page only says that five character introductions are available; planned endings remain unfinished.</p>

      <h2>How to reach Day 2</h2>
      <p>Day 2 is already part of version 0.2. It is not a separate download and it does not require a secret route code. Continue the story after Day 1's late scenes and allow the transition to play. If the game returns to an earlier point unexpectedly:</p>
      <ul>
        <li>confirm that the title screen shows the current 0.2 build;</li>
        <li>load <strong>DAY 1 — LATE</strong> rather than restarting;</li>
        <li>avoid skipping rapidly through transitions or animated scenes;</li>
        <li>in the browser build, keep the tab open until the save indicator has finished.</li>
      </ul>

      <h2>The best first-run strategy is deliberately simple</h2>
      <div class="walkthrough-route"><div><strong>First pass</strong><p>Choose naturally, do not skip dialogue, and let the tension build. Your goal is to understand the cast, not optimize a route.</p></div><div><strong>Second pass</strong><p>Return to the street save and change one response. Use the late save for any final Day 1 variation instead of replaying from the title screen.</p></div></div>

      <h2>Common Day 1 mistakes</h2>
      <h3>Looking for a “Pierrot good ending”</h3>
      <p>Version 0.2 does not contain a finished Pierrot ending. A warm response can change the feeling of a scene without turning the prototype into a completed route.</p>
      <h3>Assuming every line changes Day 2</h3>
      <p>Some dialogue is there to establish voice and mood. Unless two runs produce a reproducible change, do not promote a line as a route lock.</p>
      <h3>Using only one save slot</h3>
      <p>This is the easiest way to turn a short replay into a full restart. Preserve the street and late-Day-1 checkpoints.</p>
      <h3>Skipping the uncomfortable parts</h3>
      <p>The story's warning signs are part of the characterization. If the content is tolerable for you, reading those moments carefully makes Day 2 much easier to understand. If it is not, stopping is a valid choice.</p>

      <h2>Day 1 completion checklist</h2>
      <ul class="walkthrough-checklist">
        <li>you met Pierrot on the way to work;</li>
        <li>you preserved a save before the first major response;</li>
        <li>you saw the central rivalry begin to take shape;</li>
        <li>you reached the transition into Day 2;</li>
        <li>you did not mistake an introduction for a finished ending.</li>
      </ul>
      <p>Once those boxes are checked, continue with the <a href="/blog/day-2-walkthrough-save-strategy">Day 2 walkthrough</a>. For character context without route speculation, read the verified <a href="/characters/pierrot">Pierrot</a> and <a href="/characters/harlequin">Harlequin</a> profiles.</p>
    `,
  },
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
    slug: 'day-2-walkthrough-save-strategy',
    title: '《The Freak Circus》Day 2 通关攻略：帐篷探索、存档与坏结局',
    description: '一篇标注剧透的 0.2 版攻略，涵盖被困开场、马戏帐篷、角色介绍、关键存档点，以及如何在不把场景变化误写成完整路线的前提下补齐 Day 2 内容。',
    date: '2026-09-02',
    tags: ['Day 2', '通关攻略', '0.2 版本'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus 角色群像',
    readingTime: '阅读约 10 分钟',
    content: `
      <p class="article-lede">Day 2 从《The Freak Circus》带着不安的介绍，正式转向收紧的控制感。玩家真正需要解决的不是“该锁定哪条完整路线”——0.2 版还没有完成的 Pierrot 或 Harlequin 结局——而是“应该在哪里存档，才能不重玩整个原型版就看到已有变化”。</p>
      <div class="walkthrough-note"><strong>攻略边界</strong><p>本文对应公开 0.2 原型版，包含剧情剧透。官方页面确认的是 5 位角色介绍和 1 个坏结局，并未确认多条完成路线、收集品系统或可解锁隐藏场景菜单。</p></div>

      <h2>高压剧情开始前，先建好这些存档</h2>
      <p>Day 2 并不长，但开场足以让“只为改一个回答就全部重来”变得很烦。不要覆盖最新存档，而是分开保留：</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 2—开始：</strong>新的一天第一次可操作时。</li>
        <li><strong>被困房间：</strong>回应 Pierrot 或 Harlequin 的高压问题前。</li>
        <li><strong>返回马戏团：</strong>进入任何景点帐篷前。</li>
        <li><strong>帐篷分支：</strong>每个帐篷或角色介绍单独留档。</li>
        <li><strong>后段场景：</strong>听起来很决绝、公然反抗或明显危险的选项前。</li>
      </ol>
      <p>如果场景突然结束，或者进入坏结局，这套存档会让你只退回几分钟，而不是从头开始。</p>

      <h2>被困房间：看懂两种控制，不要猜好感度条</h2>
      <p>主角在陌生房间中醒来时受到了束缚。Pierrot 把自己的行为说成“保护”，Harlequin 的到来则把这种说法变成两位对手的直接对峙。这一段重要的是两人以不同方式施加控制，而不是让玩家当场锁定恋爱路线。</p>
      <p>第一遍按自然反应继续；重玩时再回到“被困房间”存档，每次只改一个回答。这样才能分辨你遇到的是真正场景变化，还是只换了一句台词。</p>
      <div class="walkthrough-tip"><strong>不要过度解读道具</strong><p>面具和红票在剧情中有明显意义，但 0.2 版并没有确立一套“收集后解锁未来结局”的传统背包系统。除非游戏后面实际提供互动，否则它们应被当作剧情物件。</p></div>

      <h2>返回马戏团：帐篷怎么探索</h2>
      <p>马戏团部分通过不同主题空间扩大角色群。最稳妥的方法很简单：进入前存档，不快进地看完，再用该存档补其他变化。不要把角色介绍当成已完成路线。</p>

      <h3>蓝色帐篷——Ticket Taker 与镜子</h3>
      <p>镜子场景故意让视觉信息变得不可靠。留意说话的是哪个倒影，以及 Ticket Taker 如何引导你理解所见之物。第一遍无需把每幅画面都解成谜题；先完成介绍，再留存档慢慢复盘。</p>

      <h3>青色帐篷——Doctor</h3>
      <p>Doctor 的介绍对束缚、检查和医疗恐怖的描写最强。如果这些主题令你不适，可以谨慎使用跳过功能或暂停游戏。顺从或抵抗可能改变交流的质感，但都不应被宣传成完成版 Doctor 路线或结局。</p>

      <h3>紫色或黑色演出空间——Jester</h3>
      <p>Jester 的演出承载了 Day 2 中密度很高的背景信息，最好正常推进台词，不要快进。同时要记住：这是游戏世界内部被讲述的故事，它展示了马戏团如何谈论过去，却不必然是不带立场的完整真相。</p>

      <h2>怎样保住进度，避免被坏结局卡住</h2>
      <p>官方版本说明列出了 1 个坏结局。没有可重复验证的选项测试时，负责任的攻略不应凭空编出“唯一正确答案”，因此请把游戏本身当作信号：</p>
      <ul>
        <li>公然危险、听起来会结束对话的选项前先存档。</li>
        <li>剧情如果切到结局或返回菜单，读取最近的分支存档。</li>
        <li>先只改最后一个有意义的回答，不要立即重开 Day 2。</li>
        <li>如果想留下完整记录，可以单独保存坏结局进度。</li>
      </ul>
      <p>到达坏结局并不代表存档毁了，而是你找到了当前版本明确存在的少数结果之一。</p>

      <h2>最干净的两遍流程</h2>
      <div class="walkthrough-route"><div><strong>第一遍——剧情</strong><p>连续游玩，按自然反应选择，只在前述五个节点存档，正式场景中不看攻略。</p></div><div><strong>第二遍——补内容</strong><p>回到帐篷与后段存档，每次只反转一个重要回答，记录真正发生的变化。</p></div></div>
      <p>这种方法没有“全结局大表”那么夸张，却更符合实际版本。0.2 是以角色介绍为主的原型版，不是已完成的路线合集。</p>

      <h2>什么才算通关 Day 2？</h2>
      <ul class="walkthrough-checklist">
        <li>不快进地看完被困房间的冲突；</li>
        <li>保留返回马戏团前的存档；</li>
        <li>看到 Ticket Taker、Doctor 和 Jester 的介绍；</li>
        <li>记录坏结局，或用分支存档安全绕开；</li>
        <li>保留一个等待未来官方更新的干净终点存档。</li>
      </ul>
      <p>Day 3 仍在开发中。保留这个存档，但新公开版上线后先查看变更说明，不要默认 0.2 的选择会原样映射到下一版。</p>

      <h2>本攻略不会宣称的内容</h2>
      <p>有些文章会写多个已完成结局、隐藏场景图鉴、会影响未来机制的徽章收集，或每位登场角色都有完整路线。官方页面目前并没有把这些列为已完成功能。想查看经过核验的状态，请使用站内 <a href="/zh/day-3">Day 3 追踪页</a> 和 <a href="/zh/wiki">0.2 版 Wiki</a>。</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: '《The Freak Circus》Day 1 通关攻略：第一次游玩怎么选',
    description: '一篇对应 0.2 版的实用指南：怎样理解与 Pierrot 的初遇、在哪些位置存档、怎样阅读早期竞争，以及如何不追逐未完成路线就顺利进入 Day 2。',
    date: '2026-09-02',
    tags: ['Day 1', '通关攻略', '新玩家'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'The Freak Circus 当前原型版游戏场景',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">Day 1 最好的玩法，是允许它让人感到不安。故事让主角在上班路上遇到 Pierrot，再把一次微小遭遇逐渐变成危险竞争的起点。进入 Day 2 并不需要一张“满分答案表”；你需要的只是几个合理存档，以及对当前原型版能够、不能够解决什么的清醒认识。</p>
      <div class="walkthrough-note"><strong>攻略边界</strong><p>这是公开 0.2 版的剧透指南，会讲清推进与重玩方法，但不会假装 Pierrot、Harlequin 或更多马戏团角色已经有完成结局。</p></div>

      <h2>开始前：先建立可以真正回溯的进度</h2>
      <p>官方内容警告包括血腥、死亡、虐待、绑架、非自愿药物使用、身体控制与非自愿接触。Day 1 不会把所有警告都推到最强，但会建立基调。决定追求全内容前，先判断这些主题是否适合自己。</p>
      <p>开局就使用三个命名存档：</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 1—干净：</strong>第一个有实质意义的选择前。</li>
        <li><strong>PIERROT—街道：</strong>上班路上的遇见进入重要回应前。</li>
        <li><strong>DAY 1—后段：</strong>推向 Day 2 的最后一组场景前。</li>
      </ol>
      <p>不要一直覆盖第一个存档。干净节点比别人的选项截图更有用，因为你能在当前版本中自己复现变化。</p>

      <h2>街道上与 Pierrot 的初遇</h2>
      <p>Pierrot 的介绍是 Day 1 的情感支点。这一段让主角面对一位正在被当作异类的沉默陌生人，并决定如何反应。与其反向推理一条看不见的“好感度”，不如选一个你真的愿意承担的回答。</p>
      <p>第一遍保持语气一致：如果你是带着关切靠近，就沿着这种态度看完；如果你很警惕，也让这份不安留在场景中。第二遍再读取“PIERROT—街道”，只改第一个重要回应。对比台词和身体表现，不要自动认定该分支已经解锁完成路线。</p>
      <div class="walkthrough-tip"><strong>通关建议</strong><p>不要因为一个回答显得尴尬就立即重开。Day 1 本来就会带着不舒服的感觉继续。每句话都读档会破坏节奏，得到的信息往往还不如一次完整游玩。</p></div>

      <h2>当竞争开始扩大</h2>
      <p>Harlequin 不只是 Pierrot 的“明亮替代品”。他的出现把关注变成了竞争，也因此改写了玩家对初遇的理解。留意两位表演者如何处理距离、同意与主角的迟疑。这些对照在 Day 1 比“谁赢了”更重要。</p>
      <p>更多马戏团成员属于原型版的角色介绍。看见 Jester、Doctor 或 Ticket Taker，并不代表已经进入完整恋爱路线。官方页面只说当前可以看到 5 位角色的介绍，计划中的结局仍未完成。</p>

      <h2>怎样进入 Day 2</h2>
      <p>Day 2 已经包含在 0.2 版中，它不是单独下载包，也不需要秘密路线代码。看完 Day 1 后段场景后继续推进，让过渡正常播放。如果游戏意外返回了早期位置：</p>
      <ul>
        <li>确认标题界面显示的是当前 0.2 版；</li>
        <li>读取“DAY 1—后段”，不要重新开局；</li>
        <li>不要极快跳过过渡或动画场景；</li>
        <li>玩浏览器版时，存档完成前不要关闭标签页。</li>
      </ul>

      <h2>最好的第一遍策略其实很简单</h2>
      <div class="walkthrough-route"><div><strong>第一遍</strong><p>按自然反应选择，不快进，让紧张感自然累积。目标是理解角色，而不是优化一条路线。</p></div><div><strong>第二遍</strong><p>回到街道存档，只改一个回答；想看 Day 1 后段变化时用后段存档，不要从标题画面重玩。</p></div></div>

      <h2>Day 1 常见误区</h2>
      <h3>寻找“Pierrot 好结局”</h3>
      <p>0.2 版并不包含完成版 Pierrot 结局。温和回应可以改变场景气氛，但不会把原型版直接变成完整路线。</p>
      <h3>默认每句话都会改变 Day 2</h3>
      <p>有些对话的作用是建立角色语气与氛围。如果两次游玩无法复现变化，就不要把某句回答写成路线锁。</p>
      <h3>只用一个存档槽</h3>
      <p>这是把几分钟回溯变成整章重玩的最快方法。请保留街道和 Day 1 后段节点。</p>
      <h3>直接跳过所有不适场景</h3>
      <p>剧情中的危险信号也是角色塑造的一部分。如果你能承受这些内容，认真阅读会让 Day 2 更好理解；如果不能，停止游玩也是完全合理的选择。</p>

      <h2>Day 1 通关检查表</h2>
      <ul class="walkthrough-checklist">
        <li>在上班路上遇到 Pierrot；</li>
        <li>在第一个重要回应前保留存档；</li>
        <li>看到核心竞争开始成形；</li>
        <li>进入 Day 2 的过渡；</li>
        <li>没有把角色介绍误当成完成结局。</li>
      </ul>
      <p>完成这些后，可以继续阅读 <a href="/zh/blog/day-2-walkthrough-save-strategy">Day 2 通关攻略</a>。如果想了解角色又不想看路线猜测，请查看经过核验的 <a href="/zh/characters/pierrot">Pierrot</a> 与 <a href="/zh/characters/harlequin">Harlequin</a> 资料页。</p>
    `,
  },
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
