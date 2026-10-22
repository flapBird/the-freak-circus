// Resolves editorial content for a locale, and reports whether that locale
// actually has a translation.
//
// The rule the site follows: a page may only be indexed in a locale when its
// body text exists in that language. This module is the single place that
// knows which locale owns which content, so a page never has to guess.
//
// Adding a new language means three things:
//   1. Write the translated content module.
//   2. Register it in the CONTENT_SOURCES table below.
//   3. Add the locale to the availability list for that content in
//      lib/content-availability.ts.

import type { GuidePage } from './topic-content';
import { guideContent } from './topic-content';
import { guideContentEs } from './topic-content-es';
import { guideContentPt } from './topic-content-pt';
import { guideContentVi } from './topic-content-vi';
import { guideContentId } from './topic-content-id';

import type { CharacterEditorial, CharacterProfile } from './character-content';
import { characterProfiles, profile } from './character-content';
import { characterProfilesEs } from './character-content-es';
import { characterProfilesPt } from './character-content-pt';
import { characterProfilesVi } from './character-content-vi';
import { characterProfilesId } from './character-content-id';
import { characterProfilesFil } from './character-content-fil';

export type ResolvedLocale = 'en' | 'zh' | 'es' | 'pt' | 'vi' | 'id' | 'fil';

const GUIDE_SOURCES: Partial<Record<ResolvedLocale, Record<string, GuidePage>>> = {
  en: guideContent.en,
  zh: guideContent.zh,
  es: guideContentEs,
  pt: guideContentPt,
  vi: guideContentVi,
  id: guideContentId,
  // Filipino is added once its translation module lands.
};

// The English and Chinese records carry the numeric fields as well, so they
// are already complete profiles. The other locales carry only the editorial
// fields, and their numbers are derived from the official height chart.
// Every locale ends up as a complete profile: the English and Chinese
// records already carry the chart numbers, and the other locales have their
// numbers merged in from the official height chart so a translation can never
// drift away from the published measurements.
const CHARACTER_SOURCES: Record<ResolvedLocale, Record<string, CharacterProfile> | undefined> = {
  en: characterProfiles.en,
  zh: characterProfiles.zh,
  es: mergeCharacterLocales(characterProfilesEs),
  pt: mergeCharacterLocales(characterProfilesPt),
  vi: mergeCharacterLocales(characterProfilesVi),
  id: mergeCharacterLocales(characterProfilesId),
  fil: mergeCharacterLocales(characterProfilesFil),
};

function mergeCharacterLocales(
  source: Record<string, CharacterEditorial>,
): Record<string, CharacterProfile> {
  return Object.fromEntries(
    Object.entries(source).map(([slug, editorial]) => [
      slug,
      profile(slug as Parameters<typeof profile>[0], editorial),
    ]),
  );
}

export function resolveLocale(locale: string): ResolvedLocale | undefined {
  if (locale in GUIDE_SOURCES) return locale as ResolvedLocale;
  return undefined;
}

/**
 * The guide page for a locale, or undefined when that locale has no
 * translation of the page yet.
 */
export function getLocalizedGuide(locale: string, slug: string): GuidePage | undefined {
  const resolved = resolveLocale(locale);
  if (!resolved) return undefined;
  return GUIDE_SOURCES[resolved]?.[slug];
}

/**
 * The character profile for a locale, or undefined when that locale has no
 * translation of the profile yet.
 */
export function getLocalizedCharacter(
  locale: string,
  slug: string,
): CharacterProfile | undefined {
  const resolved = resolveLocale(locale);
  if (!resolved) return undefined;
  return CHARACTER_SOURCES[resolved]?.[slug];
}

/** The locales that have a translation of a given guide page. */
export function guideLocales(slug: string): ResolvedLocale[] {
  return (Object.keys(GUIDE_SOURCES) as ResolvedLocale[]).filter(
    (locale) => GUIDE_SOURCES[locale]?.[slug] !== undefined,
  );
}

/** The locales that have a translation of a given character profile. */
export function characterLocales(slug: string): ResolvedLocale[] {
  return (Object.keys(CHARACTER_SOURCES) as ResolvedLocale[]).filter(
    (locale) => CHARACTER_SOURCES[locale]?.[slug] !== undefined,
  );
}
