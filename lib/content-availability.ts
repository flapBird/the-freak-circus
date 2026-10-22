// Which locales have a real translation for which piece of content.
//
// This exists because the site's indexability should follow the content, not
// a hand-maintained list. A locale is indexable for a given page only when
// that page's body text is actually written in that language. If a page
// falls back to English, it must not advertise itself to search engines as
// that language — that is exactly the self-inflicted hreflang mismatch that
// competitor sites in this niche run into, where a Spanish URL serves
// English body copy and then declares hreflang="es".
//
// Two rules follow from this file:
//   1. A page whose content is not translated into the active locale sets
//      noindex, so it stays out of the index for that locale.
//   2. The hreflang cluster for a page only lists locales where that page
//      is translated, so the alternates point at real variants.

export const ALL_LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'] as const;
export type Locale = (typeof ALL_LOCALES)[number];

export const EDITORIAL_LOCALES = ['en', 'zh'] as const;
export type EditorialLocale = (typeof EDITORIAL_LOCALES)[number];

// The locale lists below are derived from the translation modules, so they
// always reflect which languages actually have reviewed content.
import { characterLocales, guideLocales } from './editorial-content';
import { BLOG_LOCALES as derivedBlogLocales } from './blog-posts';

/** Locales that always have the shared UI chrome and character copy. */
export const UI_LOCALES: readonly Locale[] = ALL_LOCALES;

/**
 * Guide pages that have a reviewed translation per locale. A locale is only
 * added here once the long-form body text exists in that language.
 *
 * The lists are derived from the translation files themselves rather than
 * maintained by hand, so a locale can never be advertised as translated
 * before its content actually exists.
 */
export const GUIDE_LOCALES: Record<string, readonly Locale[]> = {
  endings: guideLocales('endings'),
  heights: guideLocales('heights'),
  save: guideLocales('save'),
  download: guideLocales('download'),
  faq: guideLocales('faq'),
};

/** Character profiles that have a reviewed translation per locale. */
export const CHARACTER_LOCALES: Record<string, readonly Locale[]> = {
  pierrot: characterLocales('pierrot'),
  harlequin: characterLocales('harlequin'),
  jester: characterLocales('jester'),
  'the-doctor': characterLocales('the-doctor'),
  'ticket-taker': characterLocales('ticket-taker'),
};

/**
 * The core informational pages. These are written in English and Chinese and
 * are translated into other locales as the review passes complete.
 */
export const CORE_LOCALES: Record<string, readonly Locale[]> = {
  // The home page carries a full translation in every locale, so it can be
  // indexed wherever the landing copy exists.
  home: ['en', 'zh', 'es', 'pt', 'vi', 'id', 'fil'],
  about: ['en', 'zh'],
  wiki: ['en', 'zh'],
  'day-3': ['en', 'zh'],
  characters: ['en', 'zh'],
  updates: ['en', 'zh'],
  community: ['en', 'zh'],
  'fan-art': ['en', 'zh'],
  contact: ['en', 'zh'],
  privacy: ['en', 'zh'],
  terms: ['en', 'zh'],
  blog: ['en', 'zh'],
};

/**
 * Blog posts are indexed per slug, because each post is translated
 * independently. Posts without a reviewed translation stay out of the
 * sitemap for that locale. The list is derived from the post arrays, so it
 * can never disagree with what is actually published.
 */
export const BLOG_LOCALES: Record<string, readonly Locale[]> = derivedBlogLocales;

export function isLocale(value: string): value is Locale {
  return (ALL_LOCALES as readonly string[]).includes(value);
}

/**
 * The set of locales a page may be indexed for, given the page's content
 * availability and the site's indexable-locale policy.
 */
export function indexableLocalesFor(
  availability: readonly Locale[],
  policy: readonly Locale[] = ALL_LOCALES,
): Locale[] {
  return availability.filter((locale) => policy.includes(locale));
}

/**
 * Whether a page rendered in this locale should be indexed. A page whose
 * content is not available in the active locale falls back to English and
 * must not be indexed for that locale.
 */
export function shouldIndex(
  locale: string,
  availability: readonly Locale[],
  policy: readonly Locale[] = ALL_LOCALES,
): boolean {
  if (!isLocale(locale)) return false;
  return availability.includes(locale) && policy.includes(locale);
}
