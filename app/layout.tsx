import type { Metadata } from 'next';
import './globals.css';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_DESC, SITE_NAME, SITE_URL } from '@/lib/seo';
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
