import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';
import { UNVERIFIED_CLAIMS, sourceLabel, sourceUrl } from '@/lib/game-facts';
import { tMsg } from '@/lib/messages';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: tMsg(locale, 'about.s0'),
    description: tMsg(locale, 'about.s1'),
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/about`,
    availableLocales: CORE_LOCALES.about,
    locale,
  });
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;

  return (
    <main>
      <header className="page-hero">
        <div className="page-container">
          <h1>{tMsg(locale, 'about.s2')}</h1>
          <p className="page-hero-lead">
            {zh
              ? '一个由粉丝维护、重视来源与内容边界的 The Freak Circus 独立资料站。'
              : 'An independent, fan-maintained guide to The Freak Circus with a focus on useful context, clear sourcing, and honest limits.'}
          </p>
        </div>
      </header>

      <section className="page-section page-container text-page">
        <article className="longform-copy">
          <h2>{tMsg(locale, 'about.s3')}</h2>
          <p>
            {zh
              ? 'The Freak Circus 的剧情、角色与开发更新散落在游戏版本、开发记录和社区讨论之间。本站希望把玩家真正会查找的内容整理到一个易读的位置：角色是谁、当前版本包含什么、Day 3 处于什么状态，以及怎样在合适的平台游玩。'
              : 'Information about The Freak Circus is spread across playable builds, development notes, and community conversation. This site brings the questions players actually ask into one readable place: who the characters are, what the current build contains, where Day 3 stands, and how to play on a suitable platform.'}
          </p>
          <p>
            {zh
              ? '但整理资料本身不难，真正难的是在资料还不完整时保持克制。这个游戏目前处在开发中途：五位已登场角色中只有两位有计划中的路线、四个已公布结局只有一个已经实装、Day 3 仍在制作而且没有公布日期。这种状态下，网上很容易出现一种看起来很完整、实际上大量内容是推断甚至杜撰的攻略。'
              : 'Organising that information is not the hard part. The hard part is staying restrained while the information is still incomplete. The game is mid-development: of five introduced characters, only two have planned routes; of four announced endings, one is implemented; Day 3 is still being made and has no date. Under those conditions it is easy to find guides that look complete while being substantially guesswork.'}
          </p>
          <p>
            {zh
              ? '所以本站更看重"能确认到哪里"，而不是"能写多少"。一个诚实的答案和一个听起来很确定的猜测，对读者的价值完全不同——前者可以直接使用，后者可能让人白跑一趟。'
              : 'That is why this site treats "how far can we confirm" as the more important question than "how much can we write". An honest answer and a confident-sounding guess are worth very different amounts to a reader, and only one of them can be acted on.'}
          </p>

          <h2>{tMsg(locale, 'about.s4')}</h2>
          <p>
            {zh
              ? '已经能在公开版本中游玩的内容，会明确写成"当前版本内容"；开发者表达过意向但尚未发布的内容，会标记为计划或开发中；社区猜测、未经验证的路线名称和无法重实现机证据的说法，不会被改写成事实。'
              : 'Material reproducible in a public build is described as current content. Developer intentions that have not shipped are labelled as planned or in development. Community theories, unsupported route names, and claims that cannot be reproduced in play are not rewritten as facts.'}
          </p>
          <p>
            {zh
              ? '这条规则在具体页面上的体现包括：角色页会明确写出官方公布的身高与年龄顺序，也会单独说明哪些外形与人物关系描述来自同人文库而非开发者；结局页会写明当前版本只有一个可玩结局，并把四个计划结局单列，而不会为了显得完整而宣称存在多个结局。'
              : 'In practice that shows up as follows. Character pages state the official height and age order, and separately flag which appearance and relationship details come from the fandom wiki rather than from the developer. The endings page states that exactly one ending is playable and lists the four planned ones separately, rather than implying that multiple endings can be reached today.'}
          </p>
          <p>
            {zh
              ? '同样重要的是我们不重复什么。以下几条在多个粉丝站点上被当作确定事实陈述，但都没有第一方来源，本站因此不会把它们写成结论：'
              : 'What we decline to repeat matters just as much. The following circulate across fan sites as settled fact, but none of them have a first-party source, so this site does not present them as conclusions:'}
          </p>
          <ul>
            {UNVERIFIED_CLAIMS.map((item) => (
              <li key={item.claim}>
                <strong>{item.claim}</strong>
                {' — '}
                {item.reality}
              </li>
            ))}
          </ul>

          <h2>{tMsg(locale, 'about.s5')}</h2>
          <p>
            {zh
              ? '这是本站最容易被误解的一点，所以单独说明。目前游戏只有一个已实装结局，而两个恋爱路线的剧本都还在写。没有可触发的选择，就不存在可以诚实写出的选择表。'
              : 'This is the point most often misread about this site, so it is worth stating plainly. Right now the game has one implemented ending, and the scripts for both romance routes are still being written. Where there is no trigger, there is no honest trigger chart.'}
          </p>
          <p>
            {zh
              ? '网上那些标注"选红色气球""Day 2 不要反抗"之类的攻略，实际上描述的是一个并不存在的公开版本。照做的读者会发现路线根本不存在，这比一开始就没有攻略更让人困惑。本站选择等路线真正发布后，再补上实际的选择、场景与存档点。'
              : 'Guides that specify picking a red balloon or avoiding defiance on Day 2 are describing a public build that does not exist. A reader who follows them finds no route at all, which is more confusing than having no guide in the first place. This site will add the real choices, scenes, and save points once the routes actually ship.'}
          </p>

          <h2>{tMsg(locale, 'about.s6')}</h2>
          <p>
            {zh
              ? '主要来源是开发者的 itch.io 游戏页与开发日志、官方 Tumblr 上的 FAQ 与 AMA 问答。角色页引用的身高表与年龄顺序都出自开发者本人发布的图片与回答，而不是从立绘估算或粉丝整理。'
              : 'Primary sources are the developer\'s itch.io page and devlog, and the official Tumblr FAQ and AMA posts. The height chart and age order quoted on the character pages come from images and answers published by the developer directly, not from sprite estimates or fan compilations.'}
          </p>
          <ul>
            {(['itchPage', 'devlog', 'faq', 'askboxFaq', 'amaPopular', 'amaAgeOrder'] as const).map((key) => (
              <li key={key}>
                <a href={sourceUrl(key)} target="_blank" rel="noopener noreferrer">
                  {sourceLabel(key)} ↗
                </a>
              </li>
            ))}
          </ul>
          <p>
            {zh
              ? '每个引用了具体事实的页面都会标出对应的来源链接，方便你自行核对。'
              : 'Every page that cites a specific fact links the source it came from, so you can check it independently rather than taking our word for it.'}
          </p>

          <h2>{tMsg(locale, 'about.s7')}</h2>
          <p>
            {zh
              ? '本站不是游戏开发者、发行方或官方支持渠道，也不会把自己包装成官方站点。页面中的解释与整理属于独立编辑内容；游戏、人物、美术与相关品牌仍归各自权利人所有。'
              : 'This is not the developer, publisher, or an official support channel, and it does not present itself as one. Explanations and organization are independent editorial work; the game, characters, artwork, and related marks remain the property of their respective rights holders.'}
          </p>
          <p>
            {zh
              ? '开发者已经说明 itch.io 页面是游戏唯一的官方页面，并要求不要重新上传或转载；同时确认不存在官方 Discord 服务器，因此任何没有从官方页面链接出去的服务器或账号，都应视为粉丝自建或未授权。'
              : 'The developer has stated that the itch.io page is the only official page for the game and has asked that it not be re-uploaded or reposted, and has confirmed that no official Discord server exists — so any server or account not linked from the official pages should be treated as fan-run or unauthorized.'}
          </p>
          <p>
            {zh
              ? '本站不托管游戏文件，也不镜像下载包。页面上出现的可玩播放器由第三方托管，这一点在隐私政策中有说明。'
              : 'This site does not host game files and does not mirror the download packages. The optional player on the site is served by a third-party host, which the privacy policy covers.'}
          </p>

          <h2>{tMsg(locale, 'about.s8')}</h2>
          <p>
            {zh
              ? '本站不会重新打包或托管游戏文件，也不会把网络上找到的粉丝作品未经许可搬运成自己的画廊。社区展示由人工筛选和维护，作品归原作者所有；如果来源、授权或署名不清楚，宁可暂时不展示。'
              : 'The site does not repackage or host game files, and it does not turn fan work found online into an unlicensed house gallery. Community selections are curated by hand, remain the work of their creators, and are withheld when source, permission, or attribution is unclear.'}
          </p>
          <p>
            {zh
              ? '角色档案中的部分外形与关系描述来自同人文库。这类内容我们在页面上明确标注为粉丝整理，与开发者确认的事实分开呈现——读者可以自行判断该采信到哪一层。'
              : 'Some appearance and relationship detail on the character profiles comes from the fandom wiki. That material is labelled as fan-derived on the page and kept visually separate from developer-confirmed facts, so a reader can decide how much weight to give it.'}
          </p>

          <h2>{tMsg(locale, 'about.s9')}</h2>
          <p>
            {zh
              ? '版本敏感信息会结合站内 Updates 与 Day 3 页面持续维护。人物页也会说明自己能确认到哪里，而不是为了显得丰富去提前编写不存在的结局。'
              : 'Version-sensitive information is maintained through the on-site Updates and Day 3 pages. Character profiles state where the evidence ends instead of inventing endings simply to make a page look complete.'}
          </p>
          <p>
            {zh
              ? '游戏处于原型阶段，脚本、标签与存档行为都可能在构建之间变化。发现页面与当前版本不一致时，欢迎指出来。'
              : 'The game is still a prototype, and its script, labels, and save behaviour can change between builds. If a page here conflicts with the current build, please say so.'}
          </p>

          <h2>{tMsg(locale, 'about.s10')}</h2>
          <p>
            {zh
              ? '如果你发现页面与当前游戏版本不一致、人物资料缺少上下文，或署名需要修正，请通过 Contact 页面说明受影响页面和具体问题。我们会优先核对能够复现或定位的反馈。'
              : 'If a page conflicts with the current build, lacks important context, or needs an attribution correction, use the Contact page and identify the affected page and specific issue. Reproducible, well-located reports are reviewed first.'}
          </p>
          <p>
            {zh
              ? '同样欢迎补充：如果某个问题你希望本站有答案，而目前还没有对应页面，请告诉我们。'
              : 'Additions are welcome too. If there is a question you want answered here and no page covers it yet, tell us.'}
          </p>
        </article>
      </section>

      <section className="page-section page-container">
        <div className="reference-card">
          <h2>{tMsg(locale, 'about.s11')}</h2>
          <div className="blog-related-list">
            <Link href={`${p}/endings`}>
              <span>{tMsg(locale, 'about.s12')}</span>
              <small>{tMsg(locale, 'about.s13')} →</small>
            </Link>
            <Link href={`${p}/characters/heights`}>
              <span>{tMsg(locale, 'about.s14')}</span>
              <small>{tMsg(locale, 'about.s15')} →</small>
            </Link>
            <Link href={`${p}/characters`}>
              <span>{tMsg(locale, 'about.s16')}</span>
              <small>{tMsg(locale, 'about.s17')} →</small>
            </Link>
            <Link href={`${p}/download`}>
              <span>{tMsg(locale, 'about.s18')}</span>
              <small>{tMsg(locale, 'about.s19')} →</small>
            </Link>
            <Link href={`${p}/save`}>
              <span>{tMsg(locale, 'about.s20')}</span>
              <small>{tMsg(locale, 'about.s21')} →</small>
            </Link>
            <Link href={`${p}/faq`}>
              <span>{tMsg(locale, 'about.s22')}</span>
              <small>{tMsg(locale, 'about.s23')} →</small>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
