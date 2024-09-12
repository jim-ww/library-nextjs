'use server';

import { log } from 'console';
import { redirect } from 'next/navigation';
import type { UserRole } from '../definitions';
import { createSession, deleteSession } from '../session';

export async function login(userId: number, role: UserRole) {
  await createSession(userId, role);
  log('redirection to /');
  redirect('/');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
