import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import GameCard from '@/components/games/GameCard';
import SchemaMarkup from './SchemaMarkup';
import GameEmbed from './GameEmbed';
import AdSlot from './AdSlot';
import { getGames, getGameSlug } from '@/data/games';
import { getNewsPosts } from '@/lib/news';
import {
  CharacterSlug,
  characterCopy,
  characterSlugs,
  editorialLocale,
  OFFICIAL_GAME_URL,
} from '@/lib/site-content';

export default function HomeContent({ locale }: { locale: string }) {
  const lang = editorialLocale(locale);
  const p = locale === 'en' ? '' : `/${locale}`;
  const copy = lang === 'zh' ? zhCopy : enCopy;
  const characterDescriptions = lang === 'zh' ? zhCharacterDescriptions : enCharacterDescriptions;
  const latestNews = getNewsPosts(locale).slice(0, 3);
  const games = getGames();

  return (
    <>
      <SchemaMarkup
        type="VideoGame"
        data={{
          name: 'The Freak Circus',
          description: copy.schemaDescription,
          genre: ['Visual novel', 'Psychological horror', 'Romance'],
          author: { '@type': 'Person', name: 'Neko Bueno' },
          sameAs: OFFICIAL_GAME_URL,
          applicationCategory: 'Game',
          operatingSystem: 'HTML5, Windows, macOS, Linux, Android',
          contentRating: '18+',
        }}
      />

      <main className="home-page">
        <section className="home-hero">
          <div className="home-hero-art" aria-hidden="true" />
          <div className="home-hero-overlay" />
          <div className="page-container home-hero-content">
            <h1>The Freak Circus</h1>
            <HomeHeroLead locale={locale} />
            <div className="hero-actions">
              <a className="button-primary" href="#play">{copy.playHere} <span aria-hidden="true">↓</span></a>
              <Link className="button-secondary" href={`${p}/wiki`}>{copy.learnMore}</Link>
            </div>
          </div>
        </section>

        <section className="page-section play-section" id="play">
          <div className="page-container">
            <div className="section-heading section-heading-centered">
              <h2>{copy.playTitle}</h2>
            </div>
            <div className="play-stage">
              <GameEmbed locale={locale} />
            </div>
          </div>
        </section>

        <section className="page-section page-section-tinted narrative-games-section">
          <div className="page-container">
            <div className="section-heading section-heading-centered narrative-section-heading">
              <h2>{copy.moreTitle}</h2>
            </div>
            <div className="narrative-section-link">
              <Link href={`${p}/games`} className="text-link">{copy.browseGames} →</Link>
            </div>
            <div className="catalog-game-grid catalog-game-grid-home">
              {games.map((game) => <GameCard key={getGameSlug(game)} game={game} locale={locale} compact />)}
            </div>
          </div>
        </section>

        <section className="page-section page-container what-game-section">
          <div className="section-heading section-heading-centered">
            <h2>{copy.whatTitle}</h2>
          </div>
          <div className="what-game-panel">
            <article className="what-game-copy">
              <p>{copy.whatP1}</p>
              <p>{copy.whatP2}</p>
              <div className="what-game-links" aria-label={copy.meetCast}>
                {characterSlugs.map((slug) => (
                  <Link key={slug} href={`${p}/characters/${slug}`}>{characterCopy[lang][slug].name}</Link>
                ))}
              </div>
            </article>
            <div className="what-game-art">
              <SafeImage src="/images/home/gameplay.webp" alt="The Freak Circus visual novel scene" width={780} height={520} />
            </div>
          </div>
          <div className="game-feature-grid">
            {copy.whatFeatures.map((feature) => (
              <article key={feature.title} className="game-feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-tinted how-to-play-section">
          <div className="page-container">
            <div className="section-heading section-heading-centered">
              <h2>{copy.howTitle}</h2>
            </div>
            <div className="how-to-play-grid">
              {copy.howSteps.map((step, index) => (
                <article className="how-to-play-card" key={step.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="how-to-play-action">
              <a className="button-primary" href="#play">{copy.howCta} ↑</a>
            </div>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="page-container">
            <div className="section-heading character-section-heading">
              <h2>{copy.castTitle}</h2>
            </div>
            <div className="character-section-link">
              <Link href={`${p}/characters`} className="text-link">{copy.allCharacters}</Link>
            </div>
            <div className="character-grid-home">
              {characterSlugs.map((slug) => {
                const character = characterCopy[lang][slug];
                return (
                  <Link href={`${p}/characters/${slug}`} className="character-card-home" key={slug}>
                    <div className="character-card-image">
                      <SafeImage src={character.image} alt={`${character.name} — The Freak Circus`} width={520} height={680} />
                    </div>
                    <div className="character-card-copy">
                      <h3>{character.name}</h3>
                      <p>{characterDescriptions[slug]}</p>
                      <span>{lang === 'zh' ? `${character.name} 的故事` : `${character.name}'s Story`} →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="page-section page-section-tinted">
          <div className="page-container">
            <div className="section-heading section-heading-row">
              <h2>{copy.updateTitle}</h2>
              <Link href={`${p}/updates`} className="text-link">{copy.allUpdates} →</Link>
            </div>
            <div className="update-grid">
              {latestNews.map((post) => (
                <Link key={post.slug} href={`${p}/updates#${post.slug}`} className="update-card">
                  <time dateTime={post.publishedAt}>{formatUpdateDate(post.publishedAt, lang)}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span>{copy.readUpdate} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section page-container faq-section">
          <div className="section-heading section-heading-centered">
            <h2>{copy.faqTitle}</h2>
          </div>
          <div className="faq-grid">
            {copy.faq.map((item) => (
              <article className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section-tinted player-reviews-section">
          <div className="page-container">
            <div className="section-heading section-heading-centered">
              <h2>{copy.reviewsTitle}</h2>
            </div>
            <div className="player-review-grid">
              {playerReviews.map((review) => (
                <article className="player-review-card" key={review.author}>
                  <div className="player-review-author">
                    <span aria-hidden="true">{review.author.charAt(0).toUpperCase()}</span>
                    <div>
                      <h3>{review.author}</h3>
                      <time dateTime={review.isoDate}>{review.date}</time>
                    </div>
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AdSlot
          className="home-native-ad"
          label={lang === 'zh' ? '广告' : 'Advertisement'}
          scriptSrc="https://pl29635653.effectivecpmnetwork.com/ad3a879f7acefad94dcedffe0b2a6b57/invoke.js"
          containerId="container-ad3a879f7acefad94dcedffe0b2a6b57"
        />
      </main>
    </>
  );
}

function HomeHeroLead({ locale }: { locale: string }) {
  const p = locale === 'en' ? '' : `/${locale}`;
  const zh = editorialLocale(locale) === 'zh';
  const name = (slug: CharacterSlug, label: string) => (
    <Link className={`home-hero-character-link is-${slug}`} href={`${p}/characters/${slug}`}>
      {label}
    </Link>
  );

  if (zh) {
    return (
      <p className="home-hero-lead">
        The Freak Circus 是一个浪漫与恐怖融为一体的世界。{name('pierrot', 'Pierrot')}沉默的爱意逐渐腐化为执念，{name('harlequin', 'Harlequin')}的魅力背后暗藏危险——而当{name('jester', 'Jester')}、{name('the-doctor', 'Doctor')}与{name('ticket-taker', 'Ticket Taker')}踏入舞台，身为咖啡店员工的主角也被拖入更深的魔咒之中，在这里，爱可能和它表现出来的一样真实，也同样危险。
      </p>
    );
  }

  return (
    <p className="home-hero-lead">
      The Freak Circus is a world where romance and horror collapse into one. {name('pierrot', 'Pierrot')}&apos;s silent devotion curdles into obsession, {name('harlequin', 'Harlequin')}&apos;s charm hides danger — and as the {name('jester', 'Jester')}, {name('the-doctor', 'Doctor')}, and {name('ticket-taker', 'Ticket Taker')} enter the ring, the café-worker protagonist is pulled deeper into a spell where love may be as dangerous as it is real.
    </p>
  );
}

const enCopy = {
  schemaDescription: 'An unofficial, source-led guide to The Freak Circus, an 18+ psychological horror visual novel by Neko Bueno.',
  heroSubtitle: 'The Circus Is Open. Choose Who You Trust.',
  heroLead: 'The Freak Circus is an 18+ psychological horror visual novel starring Pierrot, a silent clown whose affection turns into obsession, and Harlequin, his dangerously charming rival. As Jester, Doctor, and Ticket Taker enter the ring, every encounter draws the café-worker protagonist deeper into the circus.',
  playHere: 'Play here now',
  learnMore: 'Discover the Story & Cast',
  playTitle: 'Play The Freak Circus Now',
  castTitle: 'MEET THE CHARACTERS',
  allCharacters: 'Character overview',
  whatTitle: 'WHAT IS THE FREAK CIRCUS?',
  whatP1: 'The Freak Circus is an 18+ psychological horror visual novel set around a circus that turns affection into danger. A café worker crosses paths with Pierrot, a silent yandere clown, and is pulled into his escalating rivalry with the seductive Harlequin.',
  whatP2: 'The current prototype introduces five distinct performers, blends character-driven choices with unsettling imagery, and leaves its larger routes and endings in development. It is a story about obsession, masks, secrets, and deciding which smile is safe to trust.',
  meetCast: 'Meet the cast',
  whatFeatures: [
    { title: 'Psychological Horror', text: 'Romance and dread share the same stage as affection slips into control, manipulation, and fear.' },
    { title: 'Character-Driven Story', text: 'Pierrot and Harlequin anchor the rivalry while Jester, Doctor, and Ticket Taker deepen the circus mystery.' },
    { title: 'Meaningful Choices', text: 'Dialogue and route decisions change encounters, reveal scenes, and shape the outcomes available in the current build.' },
    { title: 'Dark Circus Atmosphere', text: 'Original character art, theatrical tents, animated scenes, and a sinister fairground mood define the experience.' },
  ],
  howTitle: 'HOW TO PLAY',
  howSteps: [
    { title: 'Launch the player', text: 'Use the browser player near the top of this page and press its start button when you are ready to enter the circus.' },
    { title: 'Set your preferences', text: 'Open the in-game preferences to choose an available language, adjust sound, and set text speed before beginning.' },
    { title: 'Choose and save', text: 'Read each scene, make route choices, and use the in-game Save and Load menus before decisions you may want to revisit.' },
    { title: 'Continue safely', text: 'Keep browser data intact if you rely on browser saves, or use the official download page for the supported desktop and Android builds.' },
  ],
  howCta: 'Start playing',
  updateTitle: 'LATEST UPDATES',
  allUpdates: 'View all updates',
  readUpdate: 'Read full update',
  moreTitle: 'More Narrative Games',
  browseGames: 'View all narrative games',
  faqTitle: 'Frequently Asked Questions',
  reviewsTitle: 'WHAT PLAYERS SAY',
  faq: [
    { q: 'What is The Freak Circus?', a: 'The Freak Circus is an 18+ psychological horror visual novel created by Neko Bueno and published by Garula. Its current story centers on a café worker, Pierrot, and Harlequin.' },
    { q: 'Is The Freak Circus finished?', a: 'No. The official itch.io listing labels it a prototype and says the remaining script and endings are still in development.' },
    { q: 'Where should I play or download it?', a: 'Use Garula’s official itch.io page. This guide does not host or redistribute game files.' },
    { q: 'Is Day 3 available?', a: 'The developer is working on the next chapter, but no release date is published on the official sources tracked here.' },
    { q: 'Which characters appear in the current build?', a: 'The current prototype introduces Pierrot, Harlequin, Jester, Doctor, and Ticket Taker. Columbina is also referenced in official maintenance notes.' },
    { q: 'Does every character have a completed route?', a: 'No. The official listing names planned Pierrot, Harlequin, and protagonist endings, while confirming that the remaining script and endings are still in development.' },
    { q: 'Which languages are official?', a: 'The current official listing names English, Brazilian Portuguese, and Chinese.' },
    { q: 'Which platforms are supported?', a: 'The official listing currently includes HTML5 browser play, Windows, macOS, Linux, and Android.' },
    { q: 'Is The Freak Circus suitable for younger players?', a: 'No. The developer rates the game 18+ and lists dark themes including blood, death, kidnapping, drugging, cannibalism, non-consensual behavior, and explicit sexual content.' },
    { q: 'Where can I follow verified game updates?', a: 'Use the developer’s itch.io devlog and official Tumblr. This site’s Updates section links its summaries back to those original posts.' },
    { q: 'What can I find on this website?', a: 'The site provides an in-page player, character profiles, a source-led Wiki, Day 3 status, an official download guide, update summaries, and related visual novel recommendations.' },
    { q: 'Is this an official website?', a: 'No. This is an independent fan guide that links back to the developer’s official sources.' },
  ],
};

const zhCopy: typeof enCopy = {
  schemaDescription: '《The Freak Circus》非官方资料站，基于一手来源整理这款 18+ 心理恐怖视觉小说的角色、更新与下载信息。',
  heroSubtitle: '马戏团已经开场，你会相信谁？',
  heroLead: '《The Freak Circus》是一部 18+ 心理恐怖视觉小说。沉默的小丑 Pierrot 将爱意变成执念，而危险又迷人的 Harlequin 则是他的舞台对手；当 Jester、Doctor 和 Ticket Taker 陆续入场，身为咖啡店员工的主角也被一步步拖入马戏团深处。',
  playHere: '立即在线游玩',
  learnMore: '探索故事与角色',
  playTitle: '立即游玩 The Freak Circus',
  castTitle: '认识角色',
  allCharacters: '角色总览',
  whatTitle: 'THE FREAK CIRCUS 是什么？',
  whatP1: '《The Freak Circus》是一部以诡异马戏团为舞台的 18+ 心理恐怖视觉小说，把爱意、执念与危险放在同一场演出里。一名咖啡店员工偶遇沉默的病娇小丑 Pierrot，随后被卷入他与魅惑对手 Harlequin 不断升级的竞争。',
  whatP2: '当前原型版已经介绍五位风格鲜明的表演者，以人物选择、压迫感画面和未解秘密推进故事，更完整的路线与结局仍在开发。这是一场关于面具、秘密，以及该相信哪一张笑脸的故事。',
  meetCast: '认识角色',
  whatFeatures: [
    { title: '心理恐怖', text: '浪漫与恐惧同台出现，爱意逐渐滑向控制、操纵与危险。' },
    { title: '人物驱动叙事', text: 'Pierrot 与 Harlequin 构成竞争核心，Jester、Doctor 和 Ticket Taker 则扩展马戏团谜团。' },
    { title: '有意义的选择', text: '对话与路线决定会改变相遇方式、解锁场景，并影响当前版本能够抵达的结果。' },
    { title: '黑暗马戏氛围', text: '原创人物美术、主题帐篷、动画场景与危险游乐场气质共同构成游戏体验。' },
  ],
  howTitle: '如何游玩',
  howSteps: [
    { title: '启动网页播放器', text: '回到本页上方的游戏区域，在准备好进入马戏团后点击播放器的开始按钮。' },
    { title: '调整游戏设置', text: '开始前可在游戏设置中选择现有语言、调整音量，并设置适合自己的文字速度。' },
    { title: '做出选择并存档', text: '阅读剧情、选择路线，并在可能想重新尝试的决定前使用游戏内的保存与读取功能。' },
    { title: '安全地继续进度', text: '依赖浏览器存档时不要清除该站点的浏览器数据；也可以通过官方下载页获取受支持的桌面版和 Android 版。' },
  ],
  howCta: '开始游玩',
  updateTitle: '最新更新',
  allUpdates: '查看全部更新',
  readUpdate: '阅读完整更新',
  moreTitle: '更多叙事游戏',
  browseGames: '查看全部叙事游戏',
  faqTitle: '常见问题',
  reviewsTitle: '玩家怎么说',
  faq: [
    { q: '《The Freak Circus》是什么游戏？', a: '《The Freak Circus》是由 Neko Bueno 创作、Garula 发布的 18+ 心理恐怖视觉小说，当前故事围绕一名咖啡店员工、Pierrot 与 Harlequin 展开。' },
    { q: '《The Freak Circus》已经完结了吗？', a: '没有。官方 itch.io 页面将其标记为原型版，并说明其余剧本与结局仍在开发。' },
    { q: '应该去哪里游玩或下载？', a: '请使用 Garula 的官方 itch.io 页面。本站不托管或重新分发游戏文件。' },
    { q: 'Day 3 已经发布了吗？', a: '开发者正在制作下一章，但本站追踪的官方来源尚未公布发布日期。' },
    { q: '当前版本有哪些角色？', a: '当前原型版介绍了 Pierrot、Harlequin、Jester、Doctor 和 Ticket Taker；官方维护记录中也曾提到 Columbina。' },
    { q: '每个角色都有完整路线吗？', a: '没有。官方页面点名了计划中的 Pierrot、Harlequin 与主角结局，同时说明剩余剧本和结局仍在开发。' },
    { q: '目前有哪些官方语言？', a: '当前官方页面列出英语、巴西葡萄牙语和中文。' },
    { q: '游戏支持哪些平台？', a: '官方页面目前列出 HTML5 浏览器版、Windows、macOS、Linux 和 Android。' },
    { q: '未成年玩家适合游玩吗？', a: '不适合。开发者将游戏标记为 18+，并列出血腥、死亡、绑架、下药、食人、非自愿行为和露骨性内容等黑暗主题。' },
    { q: '去哪里关注可信的游戏更新？', a: '请查看开发者 itch.io 日志和官方 Tumblr；本站更新栏目也会把摘要链接回原始公告。' },
    { q: '这个网站提供哪些内容？', a: '本站提供页面内游戏播放器、角色资料、可信 Wiki、Day 3 状态、官方下载指南、更新摘要及同类视觉小说推荐。' },
    { q: '这是官网吗？', a: '不是。本站是独立粉丝指南，并持续链接回开发者的一手来源。' },
  ],
};

const playerReviews = [
  {
    author: 'Dry land',
    isoDate: '2026-08-15',
    date: 'Aug 15, 2026',
    quote: 'Honestly this is peak of video game. I would pay 10 dollar for it if I had a bank account.',
  },
  {
    author: 'Luucyroach',
    isoDate: '2026-08-15',
    date: 'Aug 15, 2026',
    quote: 'WE. NEED. TO. SEE. JESTER MORE. He\'s so cute.',
  },
  {
    author: 'hellary020',
    isoDate: '2026-08-15',
    date: 'Aug 15, 2026',
    quote: 'I don\'t even know how many times I played this, the characters are soooo damn fine! I can\'t wait for day 3 to release.',
  },
  {
    author: 'Bby.rye',
    isoDate: '2026-08-14',
    date: 'Aug 14, 2026',
    quote: 'I came from Instagram and am absolutely obsessed. This game deserves much more recognition, and I\'m incredibly excited for the next update.',
  },
  {
    author: 'Kitunes19',
    isoDate: '2026-08-14',
    date: 'Aug 14, 2026',
    quote: 'I can\'t wait for the update! Great game, I can tell a lot of love was put into it.',
  },
  {
    author: 'yus337',
    isoDate: '2026-08-14',
    date: 'Aug 14, 2026',
    quote: 'This game is definitely worth trying and pretty interesting.',
  },
];

function formatUpdateDate(date: string, lang: 'en' | 'zh') {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

const enCharacterDescriptions = {
  pierrot: 'A sorrowful clown concealing profound emotions beneath a painted grin. His tale unfolds through love, loss, and the burden of secrets long kept.',
  harlequin: 'A playful trickster whose lighthearted exterior conceals a far more intricate soul. Her bond with Pierrot lies at the very center of the story.',
  jester: "The circus's storyteller and silent witness, unraveling Columbina's tragic legend through puppet shows that expose the show's darkest truths.",
  'the-doctor': 'A plague doctor performing sinister experiments within the Cyan Tent, studying fear itself and probing the darker edges of medical ethics.',
  'ticket-taker': 'A manipulator of reality who presides over the Tent of Mirrors, using warped reflections to unmask the true face of every monster.',
};

const zhCharacterDescriptions: typeof enCharacterDescriptions = {
  pierrot: '一个悲伤的小丑，将深沉的情感藏在画出的笑容之下。他的故事围绕爱、失去，以及那些被隐藏多年的秘密所带来的重负展开。',
  harlequin: '一个爱恶作剧的表演者，轻松顽皮的外表下藏着更为复杂的灵魂。她与 Pierrot 的联系处于整个故事的中心。',
  jester: '马戏团的讲述者与沉默见证人，通过木偶戏揭开 Columbina 的悲剧传说，并暴露演出背后最黑暗的真相。',
  'the-doctor': '一名在 Cyan Tent 中进行危险实验的瘟疫医生，研究恐惧本身，并探索医学伦理更黑暗的边界。',
  'ticket-taker': 'Tent of Mirrors 的现实操纵者，利用扭曲的倒影揭开每一个怪物的真实面目。',
};
