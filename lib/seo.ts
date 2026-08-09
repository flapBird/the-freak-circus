export const SITE_NAME = 'The Freak Circus';
export const SITE_URL = 'https://thefreakcircus.help';
export const SITE_DESC =
  'Play The Freak Circus online, a psychological horror visual novel. Explore walkthroughs, character guides, and endings for Pierrot, Harlequin, Jester, and more.';
export const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;
export const TWITTER_HANDLE = '@freakcircushelp';
export const LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'] as const;
// Keep legacy translations available for existing visitors, but only publish
// the two reviewed editions to search engines for now.
export const INDEXABLE_LOCALES = ['en', 'zh'] as const;
// BCP 47/ISO 639-1 language codes used in <html lang> and hreflang values.
// Filipino (`fil`) has no ISO 639-1 code, so strict validators flag it; the
// closest ISO 639-1 code is `tl` (Tagalog). URLs keep the /fil/ prefix.
export const LANG_CODES: Record<(typeof LOCALES)[number], string> = {
  en: 'en',
  pt: 'pt',
  fil: 'tl',
  vi: 'vi',
  es: 'es',
  id: 'id',
  zh: 'zh',
};

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
  omitCanonical?: boolean;
}) {
  const { title, description = SITE_DESC, canonical, ogImage = DEFAULT_OG, omitCanonical } = opts;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const path = canonicalPath(canonical);
  const languages = Object.fromEntries(
    // Locale homepages resolve to "/<locale>" without a trailing slash
    // (e.g. /es, not /es/), matching the site's canonical URL form.
    INDEXABLE_LOCALES.map((locale) => [
      LANG_CODES[locale],
      `${SITE_URL}${locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`}`,
    ]),
  );
  // x-default tells search engines which version to serve when no
  // language/region target matches the user; the English version is the default.
  languages['x-default'] = `${SITE_URL}${path}`;
  // The homepage canonical is emitted as a raw <link> tag (with a trailing
  // slash) because Next.js metadata normalizes root URLs to origin-only form.
  const alternates = canonical
    ? omitCanonical
      ? { languages }
      : { canonical, languages }
    : undefined;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    ...(alternates ? { alternates } : {}),
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
