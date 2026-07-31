import { NextRequest, NextResponse } from 'next/server';

const LOCALE_PATTERN = /^\/(pt|fil|vi|es|id|zh)(?=\/|$)/;

export function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(LOCALE_PATTERN);
  const locale = match ? match[1] : 'en';
  const response = NextResponse.next();
  // Lets the root layout render <html lang="..."> matching the requested locale.
  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|apple-touch-icon\\.png|icon-512\\.png|og-image\\.jpg|the-freak-circus-cover\\.jpg|images/|.*\\.[a-z0-9]+$).*)',
  ],
};
