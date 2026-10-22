import type { Metadata } from 'next';
import GuidePageLayout from '@/components/GuidePageLayout';
import { editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { getLocalizedGuide, guideLocales } from '@/lib/editorial-content';
import type { SourceKey } from '@/lib/game-facts';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const lang = editorialLocale(locale);
  const page = getLocalizedGuide(locale, 'save') ?? getLocalizedGuide('en', 'save')!;
  const canonical = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/save`;
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    canonical,availableLocales: guideLocales('save'),
    locale,
  });
}

export default function SavePage({ params: { locale } }: Props) {
  const lang = editorialLocale(locale);
  const page = getLocalizedGuide(locale, 'save') ?? getLocalizedGuide('en', 'save')!;
  const sources: SourceKey[] = ['itchPage', 'amaPopular'];
  return (
    <GuidePageLayout
      page={page}
      locale={locale}
      lang={lang}
      pathSlug="save"
      sources={sources}
    />
  );
}