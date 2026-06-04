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

export function tMsg(locale: string, dotpath: string, params?: Record<string, unknown>): string {
  const msg = getMsg(locale);
  const val = dotpath.split('.').reduce((o: unknown, k: string) => (o as Record<string, unknown>)?.[k], msg);
  let result = typeof val === 'string' ? val : dotpath;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      result = result.replace(`{${k}}`, String(v));
    }
  }
  return result;
}

export function rawMsg<T = unknown>(locale: string, dotpath: string): T {
  const msg = getMsg(locale);
  return dotpath.split('.').reduce((o: unknown, k: string) => (o as Record<string, unknown>)?.[k], msg) as T;
}
