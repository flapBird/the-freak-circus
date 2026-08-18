import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_DESC, SITE_NAME, SITE_URL } from '@/lib/seo';

// Google Analytics 4 measurement ID, configured via environment variable.
// Set NEXT_PUBLIC_GA_ID in the production hosting environment.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '';
const HAS_VALID_GA_ID = /^G-[A-Z0-9]{6,}$/i.test(GA_ID);
const PRODUCTION_HOSTNAME = new URL(SITE_URL).hostname;

export const metadata: Metadata = {
  metadataBase: new URL('https://thefreakcircus.help'),
  description: SITE_DESC,
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
  const requestHeaders = headers();
  const htmlLang = requestHeaders.get('x-locale') ?? 'en';
  const forwardedHost = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '';
  const hostname = forwardedHost.split(',')[0].trim().toLowerCase().replace(/:\d+$/, '');
  // Host-based gating is deployment-platform agnostic and keeps localhost,
  // IP-based testing, and preview domains out of Analytics.
  const shouldLoadGA = HAS_VALID_GA_ID
    && (hostname === PRODUCTION_HOSTNAME || hostname === `www.${PRODUCTION_HOSTNAME}`);
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
        {shouldLoadGA && (
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
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
