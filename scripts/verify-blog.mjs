#!/usr/bin/env node
// Verifies that every translated blog array matches the English one.
//
// A translated post must carry the same slug, date, and image as the English
// original — those three pair the locales together — and the same HTML
// skeleton (heading count, list-item count), so a translation cannot
// silently drop a section. Values that are byte-identical to English beyond
// proper nouns would mean untranslated prose, so long duplicated strings are
// reported for a human to look at.
//
// Run with: node scripts/verify-blog.mjs

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const LOCALE_MODULES = {
  es: 'blog-posts-es.ts',
  pt: 'blog-posts-pt.ts',
  vi: 'blog-posts-vi.ts',
  id: 'blog-posts-id.ts',
  fil: 'blog-posts-fil.ts',
};

/** Read a per-locale post array straight out of its module. */
function readPosts(file) {
  const source = readFileSync(join(root, 'lib', file), 'utf8');
  const start = source.indexOf('[');
  const end = source.lastIndexOf(']');
  if (start < 0 || end < 0) return null;
  let body = source.slice(start, end + 1).trim();
  if (body === '[]') return [];
  // Neutralise the TS-only type reference so the literal evaluates in node.
  body = body.replace(/as const/g, '');
  return eval(body);
}

function readEnglish() {
  const source = readFileSync(join(root, 'lib', 'blog-posts.ts'), 'utf8');
  const start = source.indexOf('const POSTS_EN');
  const eq = source.indexOf('= [', start);
  const arrayStart = eq + 2;
  let depth = 0, j = arrayStart, inStr = null;
  while (j < source.length) {
    const c = source[j];
    if (inStr) {
      if (c === '\\') { j += 2; continue; }
      if (c === inStr) inStr = null;
    } else {
      if (c === '\'' || c === '"' || c === '`') inStr = c;
      else if (c === '[') depth++;
      else if (c === ']') { depth--; if (depth === 0) break; }
    }
    j++;
  }
  let body = source.slice(arrayStart, j + 1);
  // The array literal carries TS-only casts; strip the common ones.
  body = body.replace(/: BlogPost\[\]/g, '').replace(/ as const/g, '');
  return eval(body);
}

const counts = (html) => ({
  h2: (html.match(/<h2/g) || []).length,
  h3: (html.match(/<h3/g) || []).length,
  li: (html.match(/<li/g) || []).length,
  p: (html.match(/<p/g) || []).length,
});

const en = readEnglish();
if (!Array.isArray(en) || en.length === 0) {
  console.error('Could not read POSTS_EN.');
  process.exit(2);
}

let problems = 0;

for (const [locale, file] of Object.entries(LOCALE_MODULES)) {
  const posts = readPosts(file);
  if (posts === null) {
    console.error(`${locale}: could not read lib/${file}.`);
    problems += 1;
    continue;
  }
  if (posts.length === 0) {
    console.error(`${locale}: lib/${file} is empty — the locale has no posts.`);
    problems += 1;
    continue;
  }

  const byslug = new Map(posts.map((post) => [post.slug, post]));
  for (const enPost of en) {
    const post = byslug.get(enPost.slug);
    if (!post) {
      console.error(`${locale}: missing post "${enPost.slug}".`);
      problems += 1;
      continue;
    }
    for (const field of ['date', 'image']) {
      if (post[field] !== enPost[field]) {
        console.error(`${locale}/${enPost.slug}: ${field} differs from English ("${post[field]}" vs "${enPost[field]}").`);
        problems += 1;
      }
    }
    const a = counts(enPost.content);
    const b = counts(post.content);
    for (const tag of Object.keys(a)) {
      if (a[tag] !== b[tag]) {
        console.error(`${locale}/${enPost.slug}: <${tag}> count ${b[tag]}, English has ${a[tag]}.`);
        problems += 1;
      }
    }
    // Long strings still identical to English usually mean untranslated prose.
    if (typeof post.title === 'string' && post.title === enPost.title && post.title.length > 40) {
      console.error(`${locale}/${enPost.slug}: title identical to English.`);
      problems += 1;
    }
  }
  const extra = [...byslug.keys()].filter((slug) => !en.some((post) => post.slug === slug));
  if (extra.length) {
    console.error(`${locale}: posts with no English counterpart: ${extra.join(', ')}.`);
    problems += 1;
  }
}

if (problems) {
  console.error(`\n${problems} blog translation problem(s) found.`);
  process.exit(1);
}

console.log(`Blog translations verified: ${en.length} posts across ${Object.keys(LOCALE_MODULES).length} locales.`);
