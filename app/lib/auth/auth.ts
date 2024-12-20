'use server';

import { redirect } from 'next/navigation';
import type { UserRole } from '../definitions';
import { createSession, deleteSession } from './session';

export async function login(userId: number, role: UserRole) {
  await createSession(userId, role);
  redirect('/');
}

export async function logout() {
  deleteSession();
  redirect('/login');
}
