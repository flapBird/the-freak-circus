import HomeContent from '@/components/HomeContent';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { CORE_LOCALES } from '@/lib/content-availability';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const canonical = `${SITE_URL}${locale === 'en' ? '/' : '/' + locale}`;
  return buildMetadata({
    title: tMsg(locale, 'meta.homeTitle'),
    description: tMsg(locale, 'meta.homeDesc'),
    canonical,
    // Root homepage: canonical must keep the trailing slash (/), which the
    // metadata API would strip, so render the <link> tag directly below.
    omitCanonical: locale === 'en',
    availableLocales: CORE_LOCALES.home,
    locale,
  });
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      {locale === 'en' && <link rel="canonical" href={`${SITE_URL}/`} />}
      <HomeContent locale={locale} />
    </>
  );
}
