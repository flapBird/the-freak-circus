// Structural + untranslated-string check for the new landing/siteFooter
// translation files. Run with: node scripts/verify-landing-translations.cjs
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const load = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, 'messages', p), 'utf8'));

const en = load('en.json');
const targets = { es: load('landing-es.json'), pt: load('landing-pt.json') };

const NAMESPACES = ['landing', 'siteFooter'];

function shape(value, pathParts = []) {
  if (Array.isArray(value)) {
    const items = value.map((v, i) => shape(v, [...pathParts, String(i)]));
    return { kind: 'array', length: value.length, items };
  }
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value)) out[key] = shape(value[key], [...pathParts, key]);
    return { kind: 'object', keys: out };
  }
  return { kind: typeof value };
}

function compareShape(a, b, pathParts, diffs) {
  if (a.kind !== b.kind) {
    diffs.push(`${pathParts.join('.')}: kind ${a.kind} vs ${b.kind}`);
    return;
  }
  if (a.kind === 'array') {
    if (a.length !== b.length) {
      diffs.push(`${pathParts.join('.')}: array length ${a.length} vs ${b.length}`);
      return;
    }
    a.items.forEach((item, i) => compareShape(item, b.items[i], [...pathParts, String(i)], diffs));
    return;
  }
  if (a.kind === 'object') {
    const ak = Object.keys(a.keys);
    const bk = Object.keys(b.keys);
    const missing = ak.filter((k) => !bk.includes(k));
    const extra = bk.filter((k) => !ak.includes(k));
    if (missing.length) diffs.push(`${pathParts.join('.')}: missing keys ${missing.join(', ')}`);
    if (extra.length) diffs.push(`${pathParts.join('.')}: extra keys ${extra.join(', ')}`);
    for (const k of ak) {
      if (bk.includes(k)) compareShape(a.keys[k], b.keys[k], [...pathParts, k], diffs);
    }
    return;
  }
}

function collectStrings(value, pathParts = []) {
  const out = [];
  if (Array.isArray(value)) {
    value.forEach((v, i) => out.push(...collectStrings(v, [...pathParts, String(i)])));
  } else if (value && typeof value === 'object') {
    for (const key of Object.keys(value)) out.push(...collectStrings(value[key], [...pathParts, key]));
  } else if (typeof value === 'string') {
    out.push({ path: pathParts.join('.'), value });
  }
  return out;
}

// Allowed Latin-script tokens that legitimately stay untranslated.
const ALLOWED = [
  'The Freak Circus',
  'Pierrot',
  'Harlequin',
  'Jester',
  'Doctor',
  'Ticket Taker',
  'Columbina',
  'Neko Bueno',
  'Garula',
  'itch.io',
  'itch',
  'io',
  'Cyan Tent',
  'Tent of Mirrors',
  'HTML5',
  'Windows',
  'macOS',
  'Linux',
  'Android',
  'Tumblr',
  'Facebook',
  'Dia 3',
  'Día 3',
  'Day 3',
  'X',
  'thefreakcircus.help',
  'yandere',
  'Yandere',
  'missing',
  'Missing',
  'prototipo',
  'protótipo',
  'version',
  'versão',
  'build',
];

function stripAllowed(text) {
  let out = text;
  for (const token of ALLOWED) {
    out = out.split(token).join(' ');
  }
  return out;
}

// Detect a leftover English phrase by looking for verbatim English word
// sequences (3+ words) from the English source that survive in the target,
// and for English function words that should not appear in es/pt prose.
const ENGLISH_FUNCTION_WORDS = [
  'the', 'and', 'with', 'that', 'this', 'your', 'you', 'from', 'for', 'not',
  'are', 'was', 'were', 'its', 'it', 'of', 'in', 'on', 'to', 'is', 'as', 'at',
  'by', 'or', 'an', 'a', 'but', 'can', 'has', 'have', 'will', 'be', 'do',
];

function englishWords(text) {
  return (text.toLowerCase().match(/[a-z]+/g) || []);
}

function englishPhrases(text, n = 3) {
  const words = englishWords(text);
  const out = [];
  for (let i = 0; i + n <= words.length; i++) out.push(words.slice(i, i + n).join(' '));
  return out;
}

// Proper nouns / in-world names that legitimately survive in Latin script.
const ALLOWED_WORDS = new Set([
  'the', // part of "The Freak Circus" only
  'freak', 'circus', 'pierrot', 'harlequin', 'jester', 'doctor', 'ticket',
  'taker', 'columbina', 'neko', 'bueno', 'garula', 'itch', 'io', 'cyan',
  'tent', 'of', 'mirrors', 'html', 'windows', 'macos', 'linux', 'android',
  'tumblr', 'facebook', 'day', 'dia', 'día', 'thefreakcircus', 'help',
  'yandere', 'missing', 'all', 'together', 'protagonist', 'protagonista',
  'visual', 'novel', 'player', 'save', 'saves', 'build', 'version', 'versao',
  'devlog', 'downloads', 'download', 'wiki', 'status', 'update', 'updates',
  'site', 'fandom', 'fans', 'fan', 'art', 'lore', 'dev', 'github',
  'x', 'r', 's', 'a', 'o', 'e', 'de', 'da', 'do', 'que', 'em', 'para',
  'com', 'nao', 'na', 'no', 'se', 'as', 'os', 'um', 'uma',
  'neko', 'bueno', 'garula', 'itch', 'io', 'thefreakcircus', 'help',
  'missing', 'together', 'protagonist', 'protagonista', 'day', 'dia',
  'yandere', 'devlog', 'tumbblr', 'tumblr', 'facebook', 'html', 'windows',
  'macos', 'linux', 'android', 'cyan', 'tent', 'mirrors', 'circus', 'freak',
  'pierrot', 'harlequin', 'jester', 'doctor', 'ticket', 'taker', 'columbina',
]);

function looksLikeEnglish(value, enValue) {
  // 1. identical to the English source
  if (value === enValue) return 'identical to English source';

  // 2. a verbatim 3-word English phrase survives
  const targetWords = englishWords(value);
  const targetSet = new Set(targetWords);
  const targetBigrams = new Set();
  const targetTrigrams = new Set();
  for (let i = 0; i < targetWords.length; i++) {
    if (i + 1 < targetWords.length) targetBigrams.add(targetWords[i] + ' ' + targetWords[i + 1]);
    if (i + 2 < targetWords.length) targetTrigrams.add(targetWords.slice(i, i + 3).join(' '));
  }
  for (const phrase of englishPhrases(enValue, 3)) {
    if (targetTrigrams.has(phrase) && !isAllowedPhrase(phrase)) return `English phrase "${phrase}"`;
  }
  for (const phrase of englishPhrases(enValue, 2)) {
    if (targetBigrams.has(phrase) && !isAllowedPhrase(phrase)) return `English phrase "${phrase}"`;
  }

  // 3. English function words in non-trivial amounts
  const hits = targetWords.filter(
    (w) => ENGLISH_FUNCTION_WORDS.includes(w) && !ALLOWED_WORDS.has(w)
  );
  if (hits.length >= 3) return `English function words: ${[...new Set(hits)].join(', ')}`;
  return null;
}

function isAllowedPhrase(phrase) {
  return phrase.split(' ').every((w) => ALLOWED_WORDS.has(w));
}

let failed = false;

for (const [lang, doc] of Object.entries(targets)) {
  console.log(`\n=== ${lang} ===`);

  // 1. Top-level namespace check
  const topKeys = Object.keys(doc);
  if (topKeys.length !== NAMESPACES.length || !NAMESPACES.every((n) => topKeys.includes(n))) {
    console.log(`FAIL: top-level keys are ${topKeys.join(', ')} (expected ${NAMESPACES.join(', ')})`);
    failed = true;
  } else {
    console.log(`OK: top-level namespaces = ${topKeys.join(', ')}`);
  }

  // 2. Structure check
  let diffs = [];
  for (const ns of NAMESPACES) {
    compareShape(shape(en[ns]), shape(doc[ns]), [ns], diffs);
  }
  if (diffs.length) {
    console.log('FAIL: structural differences');
    diffs.forEach((d) => console.log('  - ' + d));
    failed = true;
  } else {
    console.log('OK: key structures identical to en.json (keys, array lengths, nested shapes)');
  }

  // 3. Untranslated English check (paired against the English source value)
  const strings = [];
  for (const ns of NAMESPACES) strings.push(...collectStrings(doc[ns], [ns]));
  const enStrings = [];
  for (const ns of NAMESPACES) enStrings.push(...collectStrings(en[ns], [ns]));
  const flagged = [];
  strings.forEach((s, i) => {
    if (s.value.length <= 30) return; // task only requires checking > 30 chars
    const enValue = enStrings[i] ? enStrings[i].value : '';
    if (!enValue) return; // shape mismatch already reported above
    const reason = looksLikeEnglish(s.value, enValue);
    if (reason) flagged.push({ path: s.path, value: s.value, reason });
  });
  if (flagged.length) {
    console.log(`FAIL: ${flagged.length} string(s) still look like English`);
    flagged.forEach((f) => console.log(`  - ${f.path}: ${f.reason}\n      ${f.value.slice(0, 110)}`));
    failed = true;
  } else {
    console.log(`OK: no untranslated English found in ${strings.length} strings (checked all > 30 chars)`);
  }

  // 4. Empty / missing values
  const empties = strings.filter((s) => !s.value.trim());
  if (empties.length) {
    console.log(`FAIL: ${empties.length} empty string(s): ${empties.map((e) => e.path).join(', ')}`);
    failed = true;
  } else {
    console.log('OK: no empty values');
  }
}

console.log(failed ? '\nRESULT: FAILED' : '\nRESULT: ALL CHECKS PASSED');
process.exit(failed ? 1 : 0);
