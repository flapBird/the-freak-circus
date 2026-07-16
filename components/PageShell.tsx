import Header from './Header';
import Footer from './Footer';

export default function PageShell({ locale, children }: { locale: string; children: React.ReactNode }) {
  return (
    <>
      <Header locale={locale} />
      <div className="h-6" />
      <div className="min-h-screen pb-8">{children}</div>
      <Footer locale={locale} />
    </>
  );
}
