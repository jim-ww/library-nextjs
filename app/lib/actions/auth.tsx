"use server";

import { createSession, deleteSession } from "../session";
import type { UserRole } from "../definitions";
import { redirect } from "next/navigation";

export async function login(userId: number, role: UserRole) {
  await createSession(userId, role);
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
