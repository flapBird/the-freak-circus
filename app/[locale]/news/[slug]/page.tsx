import { notFound, permanentRedirect } from 'next/navigation';
import { getNewsPost, getNewsPosts } from '@/lib/news';

type Props = { params: { locale: string; slug: string } };

export const dynamicParams = false;

export function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  return getNewsPosts(locale).map((post) => ({ slug: post.slug }));
}

export default function LegacyNewsArticlePage({ params: { locale, slug } }: Props) {
  if (!getNewsPost(slug, locale)) notFound();
  permanentRedirect(`${locale === 'en' ? '' : `/${locale}`}/updates#${slug}`);
}
