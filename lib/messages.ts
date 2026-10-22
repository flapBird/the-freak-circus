import en from '../messages/en.json';
import pt from '../messages/pt.json';
import fil from '../messages/fil.json';
import vi from '../messages/vi.json';
import es from '../messages/es.json';
import id from '../messages/id.json';
import zh from '../messages/zh.json';

const ALL = { en, pt, fil, vi, es, id, zh } as const;

export function getMsg(locale: string) {
  return (ALL as Record<string, unknown>)[locale] || ALL.en;
}

/**
 * Look up a dotted key, falling back to English when the requested locale
 * does not carry that key yet. A missing translation should render the
 * English copy, not an empty string or a crash.
 */
function lookup(locale: string, dotpath: string): unknown {
  const path = dotpath.split('.');
  const local = path.reduce((o: unknown, k: string) => (o as Record<string, unknown>)?.[k], getMsg(locale));
  if (local !== undefined) return local;
  return path.reduce((o: unknown, k: string) => (o as Record<string, unknown>)?.[k], ALL.en);
}

export function tMsg(locale: string, dotpath: string, params?: Record<string, unknown>): string {
  const val = lookup(locale, dotpath);
  let result = typeof val === 'string' ? val : dotpath;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      result = result.replace(`{${k}}`, String(v));
    }
  }
  return result;
}

export function rawMsg<T = unknown>(locale: string, dotpath: string): T {
  return lookup(locale, dotpath) as T;
}
