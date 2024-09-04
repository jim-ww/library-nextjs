import { createSession } from "../session";
import type { UserRole } from "../definitions";

export async function loginAs(userId: number, role: UserRole) {
  "use server";
  await createSession(userId, role);
}
