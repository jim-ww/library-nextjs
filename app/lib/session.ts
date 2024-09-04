import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload, type UserRole } from "@/app/lib/definitions";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) {
  throw new Error("Environment variable SESSION_SECRET is not defined");
}
const encodedKey = new TextEncoder().encode(secretKey);
const expiresAt = () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7d

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt())
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = ""
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify user session");
    return null;
  }
}

export async function createSession(userId: number, role: UserRole) {
  const expires = expiresAt();
  const session = await encrypt({ userId, role, expiresAt: expires });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    throw new Error("Failed to update session");
  }

  const newSession = await encrypt({ ...payload, expiresAt: expiresAt() });
  cookies().set("session", newSession, {
    httpOnly: true,
    secure: true,
    expires: payload.expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("session");
}
