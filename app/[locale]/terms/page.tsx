import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? '使用条款' : 'Terms of Use', description: zh ? '阅读使用本站内容、社区展示与网页功能时适用的基本规则。' : 'Read the rules that apply when using this site’s editorial content, community selections, and web features.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/terms` });
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{zh ? '使用条款' : 'Terms of Use'}</h1><p className="page-hero-lead">{zh ? '这些条款说明本站能够提供什么，以及访问者应如何合理使用内容与功能。' : 'These terms explain what this independent guide provides and how visitors should use its content and features.'}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <p className="policy-date">{zh ? '最后更新：2026 年 8 月 16 日' : 'Last updated: August 16, 2026'}</p>
      <h2>{zh ? '接受与使用' : 'Acceptance and use'}</h2>
      <p>{zh ? '访问本站即表示你同意以合法、正常且不会损害他人或站点运行的方式使用页面。若你不同意这些条款，可以停止访问。本站面向能够自行判断相关内容是否适合自己的用户；游戏本身包含成人与黑暗主题，未成年人不应绕过年龄提示。' : 'By accessing this site, you agree to use it lawfully and in a way that does not harm others or interfere with site operation. If you do not accept these terms, stop using the site. Visitors are responsible for deciding whether the material is appropriate for them; the game contains adult and dark themes, and minors should not bypass age notices.'}</p>
      <h2>{zh ? '独立站点说明' : 'Independent-site notice'}</h2>
      <p>{zh ? '本站不是 The Freak Circus 的开发者、发行方、官方客服或官方下载服务。编辑内容可能解释公开版本和开发信息，但不能代表创作者做出承诺，也不能保证未来功能、剧情、发布日期或平台支持。' : 'This site is not the developer, publisher, official support desk, or official download service for The Freak Circus. Editorial pages may explain public builds and development information, but cannot make promises for the creator or guarantee future features, story content, release dates, or platform support.'}</p>
      <h2>{zh ? '内容与知识产权' : 'Content and intellectual property'}</h2>
      <p>{zh ? '游戏名称、角色、美术、音乐、程序与其它游戏素材属于各自权利人。本站原创的文章结构、说明与站点代码受适用权利保护。你可以为个人学习和非商业引用分享页面链接，但不得把整页内容、站点设计或整理数据复制后冒充自己的服务。' : 'The game name, characters, artwork, music, software, and other game assets belong to their respective rights holders. Original editorial structure, explanations, and site code are protected by applicable rights. You may share page references for personal study and reasonable noncommercial quotation, but may not copy entire pages, the site design, or curated data and present them as your own service.'}</p>
      <h2>{zh ? '社区作品与署名' : 'Community work and attribution'}</h2>
      <p>{zh ? '社区页面中的作品仍归原作者所有。展示并不意味着本站取得作品所有权，也不构成对作品内容的官方认可。不得利用本站提供的署名信息骚扰创作者、冒充作者或绕过原作者设定的使用条件。合理的署名修正与删除请求会被审查处理。' : 'Works shown in the Community section remain the property of their creators. Display does not transfer ownership to this site or imply official endorsement. Attribution information must not be used to harass creators, impersonate them, or bypass their stated conditions. Reasonable attribution corrections and removal requests will be reviewed.'}</p>
      <h2>{zh ? '禁止行为' : 'Prohibited conduct'}</h2>
      <p>{zh ? '不得尝试破坏、扫描、绕过或未经授权访问本站系统；不得自动化抓取造成不合理负担；不得通过本站传播恶意代码、欺诈信息或侵犯他人权利的内容；不得把本站包装成官方服务或利用页面误导用户付款。' : 'You must not disrupt, scan, bypass, or access site systems without authorization; impose unreasonable load through automated collection; distribute malicious code, fraud, or rights-infringing material through the site; present this guide as an official service; or use its pages to mislead visitors into payment.'}</p>
      <h2>{zh ? '准确性与可用性' : 'Accuracy and availability'}</h2>
      <p>{zh ? '本站努力区分已发布事实、开发计划与未证实说法，但不能保证所有内容始终完整、无误或即时更新。页面和功能按现状提供，可能因维护、安全、技术限制或内容纠错而修改、暂停或撤下。涉及下载、安全或账号决定时，请自行核对当前环境。' : 'The site works to separate released facts, development plans, and unsupported claims, but cannot guarantee that every page is always complete, error-free, or immediately current. Pages and features are provided as available and may be changed, suspended, or removed for maintenance, security, technical limits, or correction. Verify your current environment before making download, security, or account decisions.'}</p>
      <h2>{zh ? '责任边界与条款更新' : 'Limits and changes'}</h2>
      <p>{zh ? '在适用法律允许的范围内，本站不对因依赖编辑内容、外部服务、浏览器存档丢失或服务中断产生的间接损失负责。条款发生实质变化时会更新本页日期；变化后的条款适用于之后的访问。' : 'To the extent permitted by applicable law, the site is not responsible for indirect loss arising from reliance on editorial content, third-party services, lost browser saves, or interrupted availability. The date on this page will change when these terms materially change, and revised terms apply to later use.'}</p>
    </article></section>
  </main>;
}
