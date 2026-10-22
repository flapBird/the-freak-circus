import type { Metadata } from 'next';
import GuidePageLayout from '@/components/GuidePageLayout';
import { editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { getLocalizedGuide, guideLocales } from '@/lib/editorial-content';
import type { SourceKey } from '@/lib/game-facts';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const lang = editorialLocale(locale);
  const page = getLocalizedGuide(locale, 'faq') ?? getLocalizedGuide('en', 'faq')!;
  const canonical = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/faq`;
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    canonical,availableLocales: guideLocales('faq'),
    locale,
  });
}

export default function FaqPage({ params: { locale } }: Props) {
  const lang = editorialLocale(locale);
  const page = getLocalizedGuide(locale, 'faq') ?? getLocalizedGuide('en', 'faq')!;
  const sources: SourceKey[] = ['itchPage', 'faq', 'askboxFaq'];
  return (
    <GuidePageLayout
      page={page}
      locale={locale}
      lang={lang}
      pathSlug="faq"
      sources={sources}
    />
  );
}