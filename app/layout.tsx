import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SchemaMarkup from '@/components/SchemaMarkup';
import { buildMetadata, SITE_DESC, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESC,
  canonical: SITE_URL,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      </head>
      <body className="antialiased">
        <Header />
        <div className="min-h-screen py-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
