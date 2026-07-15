import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pt', 'fil', 'vi', 'es', 'id', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
