import { notFound, permanentRedirect } from 'next/navigation';
import { getNewsPost } from '@/lib/news';

type Props = { params: { locale: string; slug: string } };

export default function LegacyNewsArticlePage({ params: { locale, slug } }: Props) {
  if (!getNewsPost(slug, locale)) notFound();
  permanentRedirect(`${locale === 'en' ? '' : `/${locale}`}/updates#${slug}`);
}
