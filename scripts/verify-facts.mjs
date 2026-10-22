#!/usr/bin/env node
// Verifies that height-rank claims in the character content match the
// developer's published height chart.
//
// A superlative like "the second tallest" is the one kind of fact in this
// content that cannot be derived from the chart automatically, because the
// sentence is hand-written prose in seven languages. It is also the kind that
// silently drifts: when the chart is edited, the prose is not, and the page
// ends up claiming two characters are the tallest at once.
//
// This script parses the chart, then reads every character's block in every
// locale and checks each ordinal height claim against the chart. Run it after
// editing lib/game-facts.ts or any character content file.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const CHARACTER_SLUGS = ['pierrot', 'harlequin', 'jester', 'the-doctor', 'ticket-taker'];

/** Read the height chart straight out of the fact module. */
function readChart() {
  const source = readFileSync(join(root, 'lib/game-facts.ts'), 'utf8');
  const chart = new Map();
  const entryPattern = /\{\s*slug:\s*'([^']+)'[^}]*?cm:\s*(\d+)[^}]*?\}/g;
  for (const match of source.matchAll(entryPattern)) {
    chart.set(match[1], Number(match[2]));
  }
  return chart;
}

/**
 * Per-locale vocabulary for "the Nth tallest" and "the Nth shortest".
 * Each entry is [pattern, rank, kind] where kind is 'tall' or 'short'.
 */
const VOCABULARY = {
  en: [
    [/\bthe (first|second|third|fourth|fifth) tallest\b/g, null, 'tall'],
    [/\bthe (first|second|third|fourth|fifth) shortest\b/g, null, 'short'],
  ],
  zh: [
    [/排(最高|第([一二三四五])高)/g, null, 'tall'],
    [/(最矮|第([一二三四五])矮)/g, null, 'short'],
  ],
  es: [
    [/\bel (primer|segundo|tercer|cuarto|quinto) m[áa]s alto\b/g, null, 'tall'],
    [/\bel (primer|segundo|tercer|cuarto|quinto) m[áa]s bajo\b/g, null, 'short'],
  ],
  pt: [
    [/\bo (primeiro|segundo|terceiro|quarto|quinto) mais alto\b/g, null, 'tall'],
    [/\bo (primeiro|segundo|terceiro|quarto|quinto) mais baixo\b/g, null, 'short'],
  ],
  vi: [
    [/\bcao th[ứu] (nhất|hai|ba|tư|năm)\b/g, null, 'tall'],
    [/\bthấp (nhất|thứ hai|thứ ba)\b/g, null, 'short'],
  ],
  id: [
    [/\btertinggi (pertama|kedua|ketiga|keempat|kelima)\b/g, null, 'tall'],
    [/\bterpendek (pertama|kedua|ketiga|keempat|kelima)\b/g, null, 'short'],
  ],
  fil: [
    [/\bika-?apat pinakamataas\b|\bikalawang pinakamataas\b|\bikatlong pinakamataas\b|\bikalimang pinakamataas\b|\bunang pinakamataas\b/g, null, 'tall'],
    [/\bika-?apat pinakamababa\b|\bikalawang pinakamababa\b|\bikatlong pinakamababa\b|\bikalimang pinakamababa\b|\bunang pinakamababa\b/g, null, 'short'],
  ],
};

const RANK_WORDS = {
  first: 1, second: 2, third: 3, fourth: 4, fifth: 5,
  primer: 1, segundo: 2, tercer: 3, cuarto: 4, quinto: 5,
  primeiro: 1, segundo: 2, terceiro: 3, quarto: 4, quinto: 5,
  nhất: 1, hai: 2, ba: 3, tư: 4, năm: 5,
  'thứ hai': 2, 'thứ ba': 3,
  pertama: 1, kedua: 2, ketiga: 3, keempat: 4, kelima: 5,
  unang: 1, ikalawang: 2, ikatlong: 3, 'ika-apat': 4, ikalimang: 5,
  '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
};

/**
 * A claim is only about the full cast when it says so. "the shorter of the
 * two romance leads" is a true statement about a different set, so the scope
 * has to be read before the rank can be checked.
 */
const SCOPE = {
  en: { five: /of the five|of the five characters/, pair: /of the two/ },
  zh: { five: /五位|五人/, pair: /两位|两个/ },
  es: { five: /de los cinco/, pair: /de los dos/ },
  pt: { five: /dos cinco/, pair: /dos dois/ },
  vi: { five: /trong năm/, pair: /trong hai/ },
  id: { five: /dari lima/, pair: /dari dua/ },
  fil: { five: /sa limang/, pair: /sa dalawang/ },
};

/** Pull the character blocks out of a locale file. */
function readBlocks(file, slice) {
  let source = readFileSync(join(root, file), 'utf8');
  if (slice) source = source.slice(source.indexOf(slice[0]), slice[1] ? source.indexOf(slice[1]) : undefined);
  const blocks = new Map();
  for (const slug of CHARACTER_SLUGS) {
    const start = source.search(new RegExp(`(?:'${slug}'|${slug}):\\s*\\{`));
    if (start < 0) continue;
    const starts = CHARACTER_SLUGS
      .map((other) => source.search(new RegExp(`(?:'${other}'|${other}):\\s*\\{`, 'g')))
      .filter((index) => index > start);
    blocks.set(slug, source.slice(start, starts.length ? Math.min(...starts) : start + 12000));
  }
  return blocks;
}

const chart = readChart();
if (chart.size !== CHARACTER_SLUGS.length) {
  console.error(`Could not read the height chart (found ${chart.size} entries).`);
  process.exit(2);
}

const byHeight = [...chart.entries()].sort((a, b) => b[1] - a[1]);
const tallRank = new Map(byHeight.map(([slug], index) => [slug, index + 1]));
const shortRank = new Map([...byHeight].reverse().map(([slug], index) => [slug, index + 1]));

const LOCALES = {
  en: { file: 'lib/character-content.ts', slice: ['en: {', 'zh: {'] },
  zh: { file: 'lib/character-content.ts', slice: ['zh: {', null] },
  es: { file: 'lib/character-content-es.ts' },
  pt: { file: 'lib/character-content-pt.ts' },
  vi: { file: 'lib/character-content-vi.ts' },
  id: { file: 'lib/character-content-id.ts' },
  fil: { file: 'lib/character-content-fil.ts' },
};

let problems = 0;

for (const [locale, config] of Object.entries(LOCALES)) {
  const blocks = readBlocks(config.file, config.slice);
  for (const [slug, block] of blocks) {
    for (const [pattern, , kind] of VOCABULARY[locale]) {
      for (const match of block.matchAll(new RegExp(pattern.source, 'g'))) {
        const token = (match[1] ?? match[2] ?? '').trim();
        if (!token) continue;
        const claimed = RANK_WORDS[token.toLowerCase()] ?? RANK_WORDS[token];
        if (!claimed) continue;

        // Read the set the claim is about. A claim about the two romance
        // leads is a different statement from a claim about all five.
        const after = block.slice(match.index + match[0].length, match.index + match[0].length + 60);
        const before = block.slice(Math.max(0, match.index - 60), match.index);
        if (SCOPE[locale].pair.test(after) || SCOPE[locale].pair.test(before)) continue;
        if (!SCOPE[locale].five.test(after) && !SCOPE[locale].five.test(before)) continue;

        const expected = kind === 'tall' ? tallRank.get(slug) : shortRank.get(slug);
        if (claimed !== expected) {
          problems += 1;
          const context = block.slice(Math.max(0, match.index - 60), match.index + match[0].length + 40)
            .replace(/\s+/g, ' ');
          console.error(`${locale}/${slug}: claims ${kind} rank ${claimed}, chart says ${expected} — …${context}…`);
        }
      }
    }
  }
}

if (problems) {
  console.error(`\n${problems} height-rank claim(s) contradict the published chart.`);
  process.exit(1);
}

console.log(`Height ranks verified against the published chart across ${Object.keys(LOCALES).length} locales.`);
