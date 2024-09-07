import { NextResponse, type NextRequest } from "next/server";
import type { SessionPayload } from "./app/lib/definitions";
import { getSession, updateSession } from "./app/lib/session";

export async function middleware(request: NextRequest) {
  const session: SessionPayload | null = await getSession();
  if (!session) NextResponse.redirect(new URL("/login", request.url)); // TODO redirect("/login");
  await updateSession(request);
}

export const config = {
  matcher: "/((?!login).*)",
};
