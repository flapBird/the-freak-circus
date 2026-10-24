import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { editorialLocale } from '@/lib/site-content';
import { CORE_LOCALES } from '@/lib/content-availability';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: tMsg(locale, 'terms.p0'), description: tMsg(locale, 'terms.p1'), canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/terms` ,
    availableLocales: CORE_LOCALES.terms,
    locale,
  });
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return <main>
    <header className="page-hero"><div className="page-container"><h1>{tMsg(locale, 'terms.p2')}</h1><p className="page-hero-lead">{tMsg(locale, 'terms.p3')}</p></div></header>
    <section className="page-section page-container text-page"><article className="longform-copy">
      <p className="policy-date">{tMsg(locale, 'terms.p4')}</p>
      <h2>{tMsg(locale, 'terms.p5')}</h2>
      <p>{tMsg(locale, 'terms.p6')}</p>
      <h2>{tMsg(locale, 'terms.p7')}</h2>
      <p>{tMsg(locale, 'terms.p8')}</p>
      <h2>{tMsg(locale, 'terms.p9')}</h2>
      <p>{tMsg(locale, 'terms.p10')}</p>
      <h2>{tMsg(locale, 'terms.p11')}</h2>
      <p>{tMsg(locale, 'terms.p12')}</p>
      <h2>{tMsg(locale, 'terms.p13')}</h2>
      <p>{tMsg(locale, 'terms.p14')}</p>
      <h2>{tMsg(locale, 'terms.p15')}</h2>
      <p>{tMsg(locale, 'terms.p16')}</p>
      <h2>{tMsg(locale, 'terms.p17')}</h2>
      <p>{tMsg(locale, 'terms.p18')}</p>
    </article></section>
  </main>;
}
