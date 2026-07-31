import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_DESC, SITE_NAME, SITE_URL } from '@/lib/seo';

// Google Analytics 4 measurement ID, configured via environment variable.
// Set NEXT_PUBLIC_GA_ID in the hosting environment (e.g. Vercel project settings).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '';
const HAS_GA = /^G-[A-Z0-9]{6,}$/i.test(GA_ID);

export const metadata: Metadata = {
  metadataBase: new URL('https://thefreakcircus.help'),
  description: 'Play The Freak Circus online, a psychological horror visual novel. Explore walkthroughs, character guides, and endings.',
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
  const htmlLang = headers().get('x-locale') ?? 'en';
  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {HAS_GA && (
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
