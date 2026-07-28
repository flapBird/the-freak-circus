import en from '../messages/content/en.json';
import pt from '../messages/content/pt.json';
import fil from '../messages/content/fil.json';
import vi from '../messages/content/vi.json';
import es from '../messages/content/es.json';
import id from '../messages/content/id.json';
import zh from '../messages/content/zh.json';

const CONTENT = { en, pt, fil, vi, es, id, zh } as const;

export type ContentLocale = keyof typeof CONTENT;

export function getLocalizedContent(locale: string) {
  return CONTENT[locale as ContentLocale] ?? CONTENT.en;
}
