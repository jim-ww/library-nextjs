'use server';

import { log } from 'console';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { UserRole } from '../definitions';
import { createSession, deleteSession } from '../session';

export async function login(userId: number, role: UserRole) {
  await createSession(userId, role);
  log('redirection to /');
  return NextResponse.redirect('/login'); // TODO
  //redirect('/');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
