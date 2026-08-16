import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? '联系本站' : 'Contact', description: zh ? '提交 The Freak Circus 资料纠错、署名和站点问题。' : 'Send corrections, attribution requests, and site issues concerning this independent The Freak Circus guide.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/contact` });
}

function EmailAddress() { return <span className="contact-address"><span>contact@thefreakcircus</span><span>.help</span></span>; }

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{zh ? '联系本站' : 'Contact'}</h1><p className="page-hero-lead">{zh ? '欢迎提交可核对的纠错、署名请求与站点使用问题。' : 'Send a verifiable correction, attribution request, or report about using this site.'}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <h2>{zh ? '适合联系我们的事情' : 'What to contact us about'}</h2>
      <p>{zh ? '你可以报告人物资料与当前版本不一致、页面链接或功能失效、翻译明显错误、社区作品署名不完整，以及隐私或版权相关问题。本站不是游戏官方客服，无法处理购买、付款、官方账号、开发进度承诺或游戏文件支持。' : 'You can report character information that conflicts with the current build, broken site features, clear translation errors, incomplete community attribution, and privacy or rights concerns. This site is not official game support and cannot resolve purchases, payments, official accounts, development promises, or game-file support.'}</p>
      <h2>{zh ? '怎样让问题更容易处理' : 'How to make a report useful'}</h2>
      <p>{zh ? '请写明受影响页面的路径、你看到的问题、期望的修正，以及能够帮助复核的版本号或上下文。涉及署名或删除请求时，请说明作品、发布身份和你希望采取的处理方式。不要在邮件中发送密码、付款信息、身份证件或其他敏感资料。' : 'Include the affected page path, what you observed, the correction you expect, and any build number or context needed to reproduce it. For attribution or removal requests, identify the work, your publishing identity, and the action requested. Do not send passwords, payment details, identity documents, or other sensitive information.'}</p>
      <h2>{zh ? '联系地址' : 'Contact address'}</h2>
      <p>{zh ? <>请发送邮件至 <EmailAddress />。我们会阅读与本站内容或运行直接相关的来信，但不保证逐封回复，也不会代替游戏创作者发表声明。</> : <>Email <EmailAddress />. Messages directly related to this site’s content or operation are reviewed, though a response to every message cannot be guaranteed and this site cannot speak on behalf of the game’s creator.</>}</p>
      <h2>{zh ? '处理原则' : 'How reports are handled'}</h2>
      <p>{zh ? '明确的事实错误、隐私问题和合理的删除请求优先处理。内容意见可能用于后续编辑，但不会自动改变页面；在资料冲突时，我们会保留不确定性说明，而不是选择更吸引人的说法。' : 'Clear factual errors, privacy issues, and reasonable removal requests receive priority. Editorial suggestions may inform later revisions but do not automatically change a page. When evidence conflicts, the site will preserve uncertainty instead of choosing the more dramatic claim.'}</p>
    </article></section>
  </main>;
}
