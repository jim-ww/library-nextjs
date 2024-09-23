import 'server-only';

import { SessionPayload, type UserRole } from '@/app/lib/definitions';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) {
  throw new Error('Environment variable SESSION_SECRET is not defined');
}
const encodedKey = new TextEncoder().encode(secretKey);
const calculateExpirationDate = () =>
  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7d

async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(calculateExpirationDate())
    .sign(encodedKey);
}

async function decrypt(
  session: string | undefined = ''
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Failed to decrypt user session:', error);
    return null;
  }
}

export async function createSession(userId: number, role: UserRole) {
  const expiresAt = calculateExpirationDate();
  const session = await encrypt({ userId, role, expiresAt });

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    // path: "/",
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) return null;

  const expiresAt = calculateExpirationDate();
  const newSession = await encrypt({
    ...payload,
    expiresAt,
  });

  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: newSession,
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    // path: "/",
  });
}

export function deleteSession() {
  cookies().delete('session');
}
