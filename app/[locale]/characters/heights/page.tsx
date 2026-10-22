import type { Metadata } from 'next';
import GuidePageLayout from '@/components/GuidePageLayout';
import { editorialLocale } from '@/lib/site-content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { getGuidePage } from '@/lib/topic-content';
import type { SourceKey } from '@/lib/game-facts';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const lang = editorialLocale(locale);
  const page = getGuidePage(lang, 'heights')!;
  const canonical = `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/characters/heights`;
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    canonical,
  });
}

export default function HeightsPage({ params: { locale } }: Props) {
  const lang = editorialLocale(locale);
  const page = getGuidePage(lang, 'heights')!;
  const sources: SourceKey[] = ['amaPopular', 'amaAgeOrder', 'itchPage'];
  return (
    <GuidePageLayout
      page={page}
      locale={locale}
      lang={lang}
      pathSlug="characters/heights"
      image={{
        src: '/images/characters/pierrot-1.webp',
        alt: 'Pierrot in The Freak Circus',
      }}
      sources={sources}
    />
  );
}
