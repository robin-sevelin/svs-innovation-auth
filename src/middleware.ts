import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { pageUrls } from './lib/constants';

export default auth((req) => {
  const { auth: isLoggedIn } = req;
  const currentPath = req.nextUrl.pathname;

  const isProtectedRoute = pageUrls.some((route) =>
    currentPath.startsWith(route.url)
  );

  if (currentPath === '/' && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
