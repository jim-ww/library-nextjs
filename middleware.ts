import { NextResponse, type NextRequest } from 'next/server';
import { getSession, updateSession } from './app/lib/auth/session';
import { UserRole } from './app/lib/definitions';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/users') && session.role !== UserRole.Admin) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  await updateSession(request);
}

export const config = {
  matcher: '/((?!_next/|static/|api/|login).*)',
};
