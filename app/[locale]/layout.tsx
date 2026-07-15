import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <>
      <Header locale={locale} />
      <div className="h-6" />
      <div className="min-h-screen pb-8">{children}</div>
      <Footer locale={locale} />
    </>
  );
}
