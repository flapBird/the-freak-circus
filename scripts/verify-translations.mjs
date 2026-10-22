#!/usr/bin/env node
// Verifies that every locale's message file carries the same structure as the
// English one, and that nothing was left untranslated by accident.
//
// Two checks:
//   1. Structure. The key set, array lengths, and nested shapes must match
//      English exactly. A locale that is missing a key falls back to English
//      at runtime, which is a fine safety net but a silent way to ship an
//      untranslated page, so it is reported here.
//   2. Untranslated strings. Values that are byte-identical to English are
//      listed. Most are proper nouns that should stay in Latin script, so
//      they are not an error — the list exists to make a human look.
//
// Run with: node scripts/verify-translations.mjs

import { readFileSync } from 'node:fs';
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

const en = load('en');
const NAMESPACES = ['landing', 'siteFooter', 'guide', 'fanArt', 'character'];

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
