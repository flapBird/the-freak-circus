export const SITE_NAME = 'The Freak Circus';
export const SITE_URL = 'https://thefreakcircus.help';
export const SITE_DESC =
  'Enter The Freak Circus, a psychological horror visual novel where Pierrot and Harlequin turn romance, obsession, and rivalry into a dangerous game of choice.';
export const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;
export const TWITTER_HANDLE = '@freakcircushelp';
export const LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'] as const;
// Locales the site is open for indexing as a whole. A page is only indexed
// in one of these when its body text actually exists in that language — the
// per-page check lives in lib/content-availability.ts and is applied by
// buildMetadata. This list is the site-level policy, not a per-page one.
export const INDEXABLE_LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'] as const;
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
  /**
   * Locales for which this page has a real translation. The hreflang cluster
   * only advertises these, so alternates never point at a URL that serves
   * English body copy under a translated URL. When supplied, a page rendered
   * in a locale outside this list is automatically marked noindex, because
   * its content there is a fallback rather than a translation.
   */
  availableLocales?: readonly string[];
  /** The locale this particular render belongs to. */
  locale?: string;
}) {
  const { title, description = SITE_DESC, canonical, ogImage = DEFAULT_OG, omitCanonical, noIndex = false, availableLocales, locale } = opts;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const path = canonicalPath(canonical);
  // The root path is emitted with a trailing slash so that the hreflang
  // targets, the canonical, and the sitemap entry all use the identical URL
  // form. Next.js normalises a root URL to origin-only form inside the
  // metadata API, which previously made the homepage's hreflang cluster
  // point at "https://thefreakcircus.help" while its canonical pointed at
  // "https://thefreakcircus.help/" — two live variants of one page.
  //
  // Only the root is affected: every other path already resolves without a
  // trailing slash, and adding one there would make hreflang point at a URL
  // that redirects.
  const rootForm = (value: string) => (value.endsWith('/') ? value : `${value}/`);
  const hreflangLocales = (availableLocales ?? INDEXABLE_LOCALES).filter(
    (locale): locale is (typeof INDEXABLE_LOCALES)[number] =>
      (INDEXABLE_LOCALES as readonly string[]).includes(locale),
  );
  const languages = Object.fromEntries(
    // Locale homepages resolve to "/<locale>" without a trailing slash
    // (e.g. /es, not /es/), matching the site's canonical URL form.
    hreflangLocales.map((locale) => [
      LANG_CODES[locale],
      rootForm(`${SITE_URL}${locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`}`),
    ]),
  );
  // x-default tells search engines which version to serve when no
  // language/region target matches the user; the English version is the default.
  languages['x-default'] = rootForm(`${SITE_URL}${path}`);
  // The homepage canonical is emitted as a raw <link> tag (with a trailing
  // slash) because Next.js metadata normalizes root URLs to origin-only form.
  const alternates = canonical
    ? omitCanonical
      ? { languages }
      : { canonical, languages }
    : undefined;

  // A page whose body text is not translated into the active locale falls
  // back to English there. Indexing that fallback would put duplicate
  // English content at a translated URL, so it is marked noindex while
  // still being followed.
  const fallsBackToEnglish =
    availableLocales !== undefined &&
    locale !== undefined &&
    !availableLocales.includes(locale);
  const blocked = noIndex || fallsBackToEnglish;

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
    },
    ...(blocked ? { robots: { index: false, follow: true } } : {}),

  };
}
