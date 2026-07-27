import PageShell from '@/components/PageShell';
import { notFound } from 'next/navigation';
import { INDEXABLE_LOCALES, LOCALES } from '@/lib/seo';

type Props = { children: React.ReactNode; params: { locale: string } };

export function generateMetadata({ params: { locale } }: Pick<Props, 'params'>) {
  if (!INDEXABLE_LOCALES.includes(locale as (typeof INDEXABLE_LOCALES)[number])) {
    return { robots: { index: false, follow: true } };
  }
  return {};
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) notFound();
  return <PageShell locale={locale}>{children}</PageShell>;
}
