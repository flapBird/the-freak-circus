import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? '关于 The Freak Circus：剧情、角色与游戏内容' : 'About The Freak Circus: Story, Characters & Game', description: zh ? '了解 The Freak Circus 的心理恐怖故事、Pierrot 与 Harlequin 的核心竞争、马戏团角色，以及当前游戏内容。' : 'Learn about The Freak Circus, its psychological horror story, the rivalry between Pierrot and Harlequin, its circus cast, and current game content.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/about` });
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{zh ? '关于本站' : 'About this site'}</h1><p className="page-hero-lead">{zh ? '一个由粉丝维护、重视来源与内容边界的 The Freak Circus 独立资料站。' : 'An independent, fan-maintained guide to The Freak Circus with a focus on useful context, clear sourcing, and honest limits.'}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <h2>{zh ? '我们为什么建立这个站点' : 'Why this site exists'}</h2>
      <p>{zh ? 'The Freak Circus 的剧情、角色与开发更新散落在游戏版本、开发记录和社区讨论之间。本站希望把玩家真正会查找的内容整理到一个易读的位置：角色是谁、当前版本包含什么、Day 3 处于什么状态，以及怎样在合适的平台游玩。' : 'Information about The Freak Circus is spread across playable builds, development notes, and community conversation. This site brings the questions players actually ask into one readable place: who the characters are, what the current build contains, where Day 3 stands, and how to play on a suitable platform.'}</p>
      <p>{zh ? '本站不是游戏开发者、发行方或官方支持渠道，也不会把自己包装成官方站点。页面中的解释与整理属于独立编辑内容；游戏、人物、美术与相关品牌仍归各自权利人所有。' : 'This is not the developer, publisher, or an official support channel, and it does not present itself as one. Explanations and organization are independent editorial work; the game, characters, artwork, and related marks remain the property of their respective rights holders.'}</p>
      <h2>{zh ? '我们怎样处理事实、计划与推测' : 'How facts, plans, and speculation are handled'}</h2>
      <p>{zh ? '已经能在公开版本中游玩的内容，会明确写成“当前版本内容”；开发者表达过意向但尚未发布的内容，会标记为计划或开发中；社区猜测、未经验证的路线名称和无法重现实机证据的说法，不会被改写成事实。' : 'Material reproducible in a public build is described as current content. Developer intentions that have not shipped are labeled as planned or in development. Community theories, unsupported route names, and claims that cannot be reproduced in play are not rewritten as facts.'}</p>
      <p>{zh ? <>版本敏感信息会结合站内 <Link href={`${p}/updates`}>Updates</Link> 与 <Link href={`${p}/day-3`}>Day 3</Link> 页面持续维护。人物页也会说明自己能确认到哪里，而不是为了显得丰富去提前编写不存在的结局。</> : <>Version-sensitive information is maintained through the on-site <Link href={`${p}/updates`}>Updates</Link> and <Link href={`${p}/day-3`}>Day 3</Link> pages. Character profiles state where the evidence ends instead of inventing endings simply to make a page look complete.</>}</p>
      <h2>{zh ? '素材、社区作品与版权' : 'Media, community work, and rights'}</h2>
      <p>{zh ? '本站不会重新打包或托管游戏文件，也不会把网络上找到的粉丝作品未经许可搬运成自己的画廊。社区展示由人工筛选和维护，作品归原作者所有；如果来源、授权或署名不清楚，宁可暂时不展示。' : 'The site does not repackage or host game files, and it does not turn fan work found online into an unlicensed house gallery. Community selections are curated by hand, remain the work of their creators, and are withheld when source, permission, or attribution is unclear.'}</p>
      <h2>{zh ? '纠错与更新' : 'Corrections and updates'}</h2>
      <p>{zh ? <>如果你发现页面与当前游戏版本不一致、人物资料缺少上下文，或署名需要修正，请通过 <Link href={`${p}/contact`}>Contact 页面</Link>说明受影响页面和具体问题。我们会优先核对能够复现或定位的反馈。</> : <>If a page conflicts with the current build, lacks important context, or needs an attribution correction, use the <Link href={`${p}/contact`}>Contact page</Link> and identify the affected page and specific issue. Reproducible, well-located reports are reviewed first.</>}</p>
    </article></section>
  </main>;
}
