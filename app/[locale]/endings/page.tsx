import type { Metadata } from 'next';
import GuidePageLayout from '@/components/GuidePageLayout';
import { editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { getGuidePage } from '@/lib/topic-content';
import type { SourceKey } from '@/lib/game-facts';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const lang = editorialLocale(locale);
  const page = getGuidePage(lang, 'endings')!;
  const canonical = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/endings`;
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    canonical,
  });
}

export default function EndingsPage({ params: { locale } }: Props) {
  const lang = editorialLocale(locale);
  const page = getGuidePage(lang, 'endings')!;
  const sources: SourceKey[] = ['itchPage', 'faq', 'askboxFaq', 'day3Update'];
  return (
    <GuidePageLayout
      page={page}
      locale={locale}
      lang={lang}
      pathSlug="endings"
      sources={sources}
    />
  );
}
