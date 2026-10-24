import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { editorialLocale } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: tMsg(locale, 'contact.p0'), description: tMsg(locale, 'contact.p1'), canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/contact` ,
    availableLocales: CORE_LOCALES.contact,
    locale,
  });
}

function EmailAddress() { return <span className="contact-address"><span>contact@thefreakcircus</span><span>.help</span></span>; }

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{tMsg(locale, 'contact.p2')}</h1><p className="page-hero-lead">{tMsg(locale, 'contact.p3')}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <h2>{tMsg(locale, 'contact.p4')}</h2>
      <p>{tMsg(locale, 'contact.p5')}</p>
      <h2>{tMsg(locale, 'contact.p6')}</h2>
      <p>{tMsg(locale, 'contact.p7')}</p>
      <h2>{tMsg(locale, 'contact.p8')}</h2>
      <p>{zh ? <>请发送邮件至 <EmailAddress />。我们会阅读与本站内容或运行直接相关的来信，但不保证逐封回复，也不会代替游戏创作者发表声明。</> : <>Email <EmailAddress />. Messages directly related to this site’s content or operation are reviewed, though a response to every message cannot be guaranteed and this site cannot speak on behalf of the game’s creator.</>}</p>
      <h2>{tMsg(locale, 'contact.p9')}</h2>
      <p>{tMsg(locale, 'contact.p10')}</p>
    </article></section>
  </main>;
}
