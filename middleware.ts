import { NextResponse, type NextRequest } from 'next/server';
import { getSession, updateSession } from './app/lib/session';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (!session && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (session) await updateSession(request);
}

export const config = {
  matcher: '/((?!_next/|static/|api/|login).*)',
};
