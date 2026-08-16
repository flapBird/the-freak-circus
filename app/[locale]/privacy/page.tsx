import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? 'The Freak Circus 隐私政策' : 'The Freak Circus Privacy Policy', description: zh ? '阅读访问 The Freak Circus 角色、剧情、下载、社区与更新页面时适用的隐私政策。' : 'Read the privacy policy for visitors exploring The Freak Circus characters, story, downloads, community, and game updates.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/privacy` });
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{zh ? '隐私政策' : 'Privacy Policy'}</h1><p className="page-hero-lead">{zh ? '说明本站在提供内容、网页游戏与联系渠道时会接触哪些数据。' : 'How this independent guide handles data while providing articles, an in-page game player, and a contact channel.'}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <p className="policy-date">{zh ? '最后更新：2026 年 8 月 16 日' : 'Last updated: August 16, 2026'}</p>
      <h2>{zh ? '适用范围' : 'Scope'}</h2>
      <p>{zh ? '本政策适用于本站页面与站内功能。本站是独立粉丝资料站，不负责游戏创作者、托管服务商、外部平台或用户离开本站后访问服务的数据处理方式。' : 'This policy applies to this website and its on-site features. The site is an independent fan guide and does not control how the game creator, hosting providers, external platforms, or services visited after leaving this site process data.'}</p>
      <h2>{zh ? '访问时可能产生的数据' : 'Data generated during a visit'}</h2>
      <p>{zh ? '与大多数网站一样，服务器与安全系统可能临时记录 IP 地址、浏览器类型、访问时间、请求页面、来源页面和错误信息，以交付页面、发现故障、防止滥用并维护安全。这些技术记录不是为了建立玩家人物画像，也不会由本站出售。' : 'Like most websites, servers and security systems may temporarily record an IP address, browser type, request time, requested page, referring page, and error information to deliver pages, diagnose failures, prevent abuse, and maintain security. These technical records are not used to build player profiles and are not sold by this site.'}</p>
      <h2>{zh ? '浏览器存储与网页游戏' : 'Browser storage and the in-page game'}</h2>
      <p>{zh ? '语言偏好、界面状态和网页游戏存档可能保存在你的浏览器中。清除站点数据、使用隐私模式、更换设备或浏览器设置都可能使这些内容丢失。本站无法读取你的其他设备文件，也无法恢复被浏览器删除的本地存档。' : 'Language preferences, interface state, and browser-game saves may be stored in your browser. Clearing site data, using private browsing, changing devices, or browser settings can remove them. This site cannot read unrelated files on your device and cannot restore local saves removed by the browser.'}</p>
      <h2>{zh ? '邮件联系' : 'Email contact'}</h2>
      <p>{zh ? '当你主动发送邮件时，我们会收到你提供的地址、正文和附件，并仅为理解、回复和记录该请求而使用。请不要发送账号密码、付款信息、身份证件或与问题无关的敏感资料。合理完成处理后，邮件可能被删除或仅保留解决争议所需的最少记录。' : 'When you voluntarily send email, the site receives the address, message, and attachments you provide and uses them only to understand, answer, and document the request. Do not send passwords, payment details, identity documents, or sensitive information unrelated to the issue. Messages may be deleted after reasonable handling or reduced to the minimum record needed to resolve a dispute.'}</p>
      <h2>{zh ? '第三方内容与链接' : 'Third-party content and destinations'}</h2>
      <p>{zh ? '部分页面可能展示嵌入内容或指向其它服务。加载或访问这类内容时，对方可能按照自己的规则接收技术数据。你可以选择不启动嵌入内容，也可以通过浏览器隐私设置限制第三方存储。' : 'Some pages may display embedded content or point to other services. Loading or visiting that material may allow its provider to receive technical data under its own rules. You may choose not to launch embedded content and can use browser privacy controls to limit third-party storage.'}</p>
      <h2>{zh ? '你的选择与请求' : 'Your choices and requests'}</h2>
      <p>{zh ? '你可以清除本站浏览器数据、阻止非必要存储，并要求更正或删除自己通过邮件提交的个人信息。在法律、安全、权利争议或防止滥用确有需要时，本站可能保留有限记录。' : 'You can clear this site’s browser data, restrict nonessential storage, and request correction or deletion of personal information you submitted by email. Limited records may be retained where reasonably necessary for legal obligations, security, rights disputes, or abuse prevention.'}</p>
      <h2>{zh ? '政策变更' : 'Changes to this policy'}</h2>
      <p>{zh ? '当站点功能或数据处理方式发生实质变化时，本页会更新日期并修订说明。继续访问并不会剥夺你对浏览器数据和主动提交信息拥有的选择。' : 'This page will be revised and dated when site features or data practices materially change. Continued access does not remove your choices concerning browser data or information you voluntarily submit.'}</p>
    </article></section>
  </main>;
}
