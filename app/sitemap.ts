import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const LOCALES = ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'];
const NOW = new Date().toISOString();
const MONTHLY = 'monthly' as const;
const WEEKLY = 'weekly' as const;
const YEARLY = 'yearly' as const;

function u(path: string, freq: string = MONTHLY, prio: number = 0.5): MetadataRoute.Sitemap[number] {
  return { url: `${SITE_URL}${path}`, lastModified: NOW, changeFrequency: freq as any, priority: prio };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  const pages: [string, string, number][] = [
    ['/about', MONTHLY, 0.5],
    ['/characters', WEEKLY, 0.8],
    ['/walkthrough', WEEKLY, 0.85],
    ['/wiki', MONTHLY, 0.7],
    ['/community', MONTHLY, 0.4],
    ['/news', WEEKLY, 0.6],
    ['/contact', MONTHLY, 0.3],
    ['/privacy', YEARLY, 0.2],
    ['/terms', YEARLY, 0.2],
  ];

  const charSlugs = ['pierrot', 'harlequin', 'jester', 'the-doctor', 'columbina', 'ticket-taker'];
  const walkthroughDays = ['day-1', 'day-2', 'day-3'];

  // English pages at root (no /en prefix)
  urls.push(u('/', WEEKLY, 1.0));
  for (const [path, freq, prio] of pages) {
    urls.push(u(path, freq, prio));
  }
  for (const slug of charSlugs) {
    urls.push(u(`/characters/${slug}`, MONTHLY, 0.75));
  }
  for (const day of walkthroughDays) {
    urls.push(u(`/walkthrough/${day}`, MONTHLY, 0.7));
  }

  // Other locales with prefix
  for (const locale of LOCALES) {
    if (locale === 'en') continue;
    const p = `/${locale}`;

    urls.push(u(p, WEEKLY, 0.9));

    for (const [path, freq, prio] of pages) {
      urls.push(u(`${p}${path}`, freq, prio));
    }
    for (const slug of charSlugs) {
      urls.push(u(`${p}/characters/${slug}`, MONTHLY, 0.75));
    }
    for (const day of walkthroughDays) {
      urls.push(u(`${p}/walkthrough/${day}`, MONTHLY, 0.7));
    }
  }

  return urls;
}
