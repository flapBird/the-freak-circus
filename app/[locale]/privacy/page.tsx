import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { editorialLocale } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: tMsg(locale, 'privacy.p0'), description: tMsg(locale, 'privacy.p1'), canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/privacy` ,
    availableLocales: CORE_LOCALES.privacy,
    locale,
  });
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{tMsg(locale, 'privacy.p2')}</h1><p className="page-hero-lead">{tMsg(locale, 'privacy.p3')}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <p className="policy-date">{tMsg(locale, 'privacy.p4')}</p>
      <h2>{tMsg(locale, 'privacy.p5')}</h2>
      <p>{tMsg(locale, 'privacy.p6')}</p>
      <h2>{tMsg(locale, 'privacy.p7')}</h2>
      <p>{tMsg(locale, 'privacy.p8')}</p>
      <h2>{tMsg(locale, 'privacy.p9')}</h2>
      <p>{tMsg(locale, 'privacy.p10')}</p>
      <h2>{tMsg(locale, 'privacy.p11')}</h2>
      <p>{tMsg(locale, 'privacy.p12')}</p>
      <h2>{tMsg(locale, 'privacy.p13')}</h2>
      <p>{tMsg(locale, 'privacy.p14')}</p>
      <p>{zh ? <>你可以在 <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google 广告设置</a> 中关闭个性化广告，也可以通过 <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">AboutAds</a> 退出部分第三方广告商基于 Cookie 的个性化广告。有关 Google 在合作伙伴网站上如何使用数据，请查看 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google 合作伙伴网站数据使用说明</a>。</> : <>You can opt out of personalized advertising in <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. You can also use <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">AboutAds</a> to opt out of some third-party vendors&rsquo; use of cookies for personalized advertising. To learn how Google uses data on partner sites, read <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses information from sites or apps that use its services</a>.</>}</p>
      <h2>{tMsg(locale, 'privacy.p15')}</h2>
      <p>{tMsg(locale, 'privacy.p16')}</p>
      <h2>{tMsg(locale, 'privacy.p17')}</h2>
      <p>{tMsg(locale, 'privacy.p18')}</p>
      <h2>{tMsg(locale, 'privacy.p19')}</h2>
      <p>{tMsg(locale, 'privacy.p20')}</p>
      <h2>{tMsg(locale, 'privacy.p21')}</h2>
      <p>{tMsg(locale, 'privacy.p22')}</p>
    </article></section>
  </main>;
}
