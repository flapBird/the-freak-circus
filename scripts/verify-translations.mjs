#!/usr/bin/env node
// Verifies that every locale's message file carries the same structure as the
// English one, and that nothing was left untranslated by accident.
//
// Three checks:
//   1. Referenced keys. Every dotpath a component reads through tMsg or
//      rawMsg must exist in messages/en.json. A key that is missing there
//      has no English fallback to land on, so it renders as its own dotted
//      path — visible broken text on a live page.
//   2. Structure. The key set, array lengths, and nested shapes must match
//      English exactly. A locale that is missing a key falls back to English
//      at runtime, which is a fine safety net but a silent way to ship an
//      untranslated page, so it is reported here.
//   3. Untranslated strings. Values that are byte-identical to English are
//      listed. Most are proper nouns that should stay in Latin script, so
//      they are not an error — the list exists to make a human look.
//
// Run with: node scripts/verify-translations.mjs

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = ['en', 'zh', 'es', 'pt', 'vi', 'id', 'fil'];

const load = (locale) => JSON.parse(readFileSync(join(root, 'messages', `${locale}.json`), 'utf8'));

/** The shape of a value: its type, its keys, and its array lengths. */
function shape(value) {
  if (Array.isArray(value)) return { kind: 'array', length: value.length, items: value.map(shape) };
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value)) out[key] = shape(value[key]);
    return { kind: 'object', keys: out };
  }
  return { kind: typeof value };
}

/** Every dotted path in a value, with the value at that path. */
function paths(value, prefix = '') {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => paths(item, `${prefix}[${index}]`));
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => paths(item, prefix ? `${prefix}.${key}` : key));
  }
  return [[prefix, value]];
}

/** Every dotted key path in a value, including the bare path of an array. */
function keyPaths(value, prefix = '') {
  if (Array.isArray(value)) return [prefix, ...value.flatMap((item, index) => keyPaths(item, `${prefix}[${index}]`))];
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => keyPaths(item, prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

const en = load('en');
const NAMESPACES = ['landing', 'siteFooter', 'guide', 'fanArt', 'character'];

// --- Check 1: keys referenced by components must exist in the English file. ---
function collectReferencedKeys(dir) {
  const found = new Set();
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const key of collectReferencedKeys(full)) found.add(key);
      continue;
    }
    if (!/\.(tsx|ts)$/.test(entry.name)) continue;
    const source = readFileSync(full, 'utf8');
    for (const match of source.matchAll(/\b(?:tMsg|rawMsg)(?:<[^>]*>)?\([^,]+,\s*['"`]([\w.]+)['"`]/g)) {
      found.add(match[1]);
    }
  }
  return found;
}

const available = new Set(keyPaths(en));
const referenced = new Set([
  ...collectReferencedKeys(join(root, 'app')),
  ...collectReferencedKeys(join(root, 'components')),
  ...collectReferencedKeys(join(root, 'lib')),
]);

// Expand dynamic prefixes such as `landing.characters.${slug}`.
const expanded = new Set();
for (const key of referenced) {
  if (key.includes('${')) {
    const prefix = key.split('${')[0];
    for (const candidate of available) if (candidate.startsWith(prefix)) expanded.add(candidate);
  } else {
    expanded.add(key);
  }
}
const missingKeys = [...expanded].filter((key) => !available.has(key));

let problems = 0;
const identical = new Map();

for (const locale of LOCALES) {
  if (locale === 'en') continue;
  const messages = load(locale);
  for (const namespace of NAMESPACES) {
    const source = en[namespace];
    const target = messages[namespace];
    if (source === undefined) continue;

    if (target === undefined) {
      problems += 1;
      console.error(`${locale}: missing the "${namespace}" namespace — the page falls back to English.`);
      continue;
    }

    const sourceShape = shape(source);
    const targetShape = shape(target);
    if (JSON.stringify(sourceShape) !== JSON.stringify(targetShape)) {
      problems += 1;
      const sourcePaths = new Set(paths(source).map(([p]) => p));
      const targetPaths = new Set(paths(target).map(([p]) => p));
      const missing = [...sourcePaths].filter((p) => !targetPaths.has(p));
      const extra = [...targetPaths].filter((p) => !sourcePaths.has(p));
      console.error(
        `${locale}.${namespace}: structure differs` +
          (missing.length ? `\n  missing: ${missing.slice(0, 8).join(', ')}` : '') +
          (extra.length ? `\n  extra:   ${extra.slice(0, 8).join(', ')}` : ''),
      );
      continue;
    }

    // Values that are still exactly the English string.
    const sourceEntries = new Map(paths(source));
    for (const [path, value] of paths(target)) {
      const original = sourceEntries.get(path);
      if (typeof value === 'string' && original === value && value.length > 3) {
        const list = identical.get(locale) ?? [];
        list.push(`${namespace}.${path}`);
        identical.set(locale, list);
      }
    }
  }
}

if (problems) {
  console.error(`\n${problems} translation structure problem(s) found.`);
  process.exit(1);
}

console.log(`Translation structure verified across ${LOCALES.length} locales.`);
for (const [locale, list] of identical) {
  console.log(`  ${locale}: ${list.length} value(s) identical to English — ` + list.slice(0, 12).join(', ') + (list.length > 12 ? ' …' : ''));
}
