import HomeContent from '@/components/HomeContent';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return buildMetadata({
    title: tMsg(locale, 'meta.homeTitle'),
    description: tMsg(locale, 'meta.homeDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? '' : '/' + locale}`,
  });
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return <HomeContent locale={locale} />;
}
