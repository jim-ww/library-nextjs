'server-only';

export const revalidate = 3600; // invalidate every hour

import { UserRole, type User } from '../definitions';
import { getSession } from '../session';

// TODO configure caching

const collectionUrl = `http://localhost:3000/api/users`;
const singleEntityUrl = (id: number) => `http://localhost:3000/api/users/${id}`; //http://localhost:8090/api/collections/users/records?id=${id}

export const getCurrentUser: () => Promise<User | null> = async () => {
  const session = await getSession();
  if (!session) return null;
  return await getUser(session.userId);
};

export const getUser: (id: number) => Promise<User | null> = async (
  id: number
) => {
  const session = await getSession();
  if (!session) return null;

  if (session.userId != id && session.role !== UserRole.Admin) return null;

  const res = await fetch(singleEntityUrl(id));
  const data = await res.json();
  return data as User;
};

export const getUsers = async () => {
  const session = await getSession();
  if (!session) return Promise.reject(new Error('User is not authenticated'));

  // TODO test
  if (session.role !== UserRole.Admin || UserRole.Teacher) return null;

  const res = await fetch(collectionUrl);
  const data = await res.json();
  return data as User[];
};