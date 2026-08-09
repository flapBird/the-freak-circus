import { NextRequest, NextResponse } from 'next/server';

const LOCALE_PATTERN = /^\/(pt|fil|vi|es|id|zh)(?=\/|$)/;
// ISO 639-1 language codes for <html lang>. Filipino uses `tl` (see lib/seo.ts).
const LANG_CODES: Record<string, string> = {
  en: 'en',
  pt: 'pt',
  fil: 'tl',
  vi: 'vi',
  es: 'es',
  id: 'id',
  zh: 'zh',
};

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/en' || request.nextUrl.pathname.startsWith('/en/')) {
    const destination = request.nextUrl.clone();
    destination.pathname = request.nextUrl.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    return NextResponse.redirect(destination, 301);
  }

  const match = request.nextUrl.pathname.match(LOCALE_PATTERN);
  const locale = match ? match[1] : 'en';
  const response = NextResponse.next();
  // Lets the root layout render <html lang="..."> matching the requested locale.
  response.headers.set('x-locale', LANG_CODES[locale] ?? 'en');
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|apple-touch-icon\\.png|icon-512\\.png|og-image\\.jpg|the-freak-circus-cover\\.jpg|images/|.*\\.[a-z0-9]+$).*)',
  ],
};
