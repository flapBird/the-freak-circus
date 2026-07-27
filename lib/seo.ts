export const SITE_NAME = 'The Freak Circus';
export const SITE_URL = 'https://thefreakcircus.help';
export const SITE_DESC =
  'Play The Freak Circus online, a psychological horror visual novel. Explore walkthroughs, character guides, and endings for Pierrot, Harlequin, Jester, and more.';
export const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;
export const TWITTER_HANDLE = '@freakcircushelp';
export const LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'] as const;
// Non-English editions remain available to readers, but they must not enter
// search results until an editor has completed and reviewed every page.
// Add a locale here only after its translation QA is complete.
export const INDEXABLE_LOCALES = ['en'] as const;

function canonicalPath(canonical?: string) {
  if (!canonical) return '/';
  const pathname = new URL(canonical).pathname;
  return pathname.replace(/^\/(pt|fil|vi|es|id|zh)(?=\/|$)/, '') || '/';
}

export function buildMetadata(opts: {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}) {
  const { title, description = SITE_DESC, canonical, ogImage = DEFAULT_OG } = opts;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const path = canonicalPath(canonical);
  const languages = Object.fromEntries(
    INDEXABLE_LOCALES.map((locale) => [locale, `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`]),
  );

  return {
    title: fullTitle,
   description,
   metadataBase: new URL(SITE_URL),
    ...(canonical ? { alternates: { canonical, languages } } : {}),
   openGraph: {
     title: fullTitle,
     description,
      url: canonical ?? SITE_URL,
     siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: TWITTER_HANDLE,
    },

  };
}
