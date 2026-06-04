import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SchemaMarkup from '@/components/SchemaMarkup';
import { buildMetadata, SITE_DESC, SITE_NAME, SITE_URL } from '@/lib/seo';

const baseMetadata = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESC,
  canonical: SITE_URL,
});

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-855DQF48TP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-855DQF48TP');
`,
          }}
        />
        <SchemaMarkup
          type="WebSite"
          data={{
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESC,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/blog?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }}
        />
        <script src="https://pl29635459.effectivecpmnetwork.com/69/44/09/694409ef7619b3b326462116521c54ea.js" />
      </head>
      <body className="antialiased">
        <Header />
        <div className="min-h-screen py-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
