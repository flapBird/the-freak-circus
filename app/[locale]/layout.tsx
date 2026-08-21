import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import SchemaMarkup from '@/components/SchemaMarkup';
import { notFound } from 'next/navigation';
import { INDEXABLE_LOCALES, LANG_CODES, LOCALES, SITE_DESC, SITE_NAME, SITE_URL } from '@/lib/seo';
import '../globals.css';

type Props = { children: React.ReactNode; params: { locale: string } };

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '';
const HAS_VALID_GA_ID = /^G-[A-Z0-9]{6,}$/i.test(GA_ID);
const SHOULD_LOAD_GA = HAS_VALID_GA_ID && process.env.VERCEL_ENV === 'production';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params: { locale } }: Pick<Props, 'params'>): Metadata {
  const indexable = INDEXABLE_LOCALES.includes(locale as (typeof INDEXABLE_LOCALES)[number]);
  return {
    metadataBase: new URL(SITE_URL),
    description: SITE_DESC,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      ],
      apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
    },
    ...(!indexable ? { robots: { index: false, follow: true } } : {}),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) notFound();
  const htmlLang = LANG_CODES[locale as keyof typeof LANG_CODES] ?? 'en';

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183802444188513"
          crossOrigin="anonymous"
        />
        {SHOULD_LOAD_GA && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
              }}
            />
          </>
        )}
        <SchemaMarkup
          type="WebSite"
          data={{ name: SITE_NAME, url: SITE_URL, description: SITE_DESC }}
        />
      </head>
      <body className="antialiased">
        <PageShell locale={locale}>{children}</PageShell>
      </body>
    </html>
  );
}
