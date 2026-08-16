import Header from './Header';
import Footer from './Footer';
import { LANG_CODES } from '@/lib/seo';

export default function PageShell({ locale, children }: { locale: string; children: React.ReactNode }) {
  return (
    <div lang={LANG_CODES[locale as keyof typeof LANG_CODES] ?? locale}>
      <Header locale={locale} />
      <div className="min-h-screen">{children}</div>
      <Footer locale={locale} />
    </div>
  );
}
