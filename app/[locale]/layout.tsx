import PageShell from '@/components/PageShell';

type Props = { children: React.ReactNode; params: { locale: string } };

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  return <PageShell locale={locale}>{children}</PageShell>;
}
