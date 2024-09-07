"server-only";

import { UserRole, type User } from "../definitions";
import { getSession } from "../session";

const collectionUrl = `http://localhost:3000/api/users`;
const singleEntityUrl = (id: number) => `http://localhost:3000/api/users/${id}`; //http://localhost:8090/api/collections/users/records?id=${id}

export const getCurrentUser: () => Promise<User> = async () => {
  const session = await getSession();
  if (!session)
    return Promise.reject(
      "Must be authenticated to access other user profiles"
    );
  const res = await fetch(singleEntityUrl(session.userId), {
    cache: "no-store",
  });
  const data = await res.json();
  return data as User;
};

export const getUser: (id: number) => Promise<User> = async (id: number) => {
  const session = await getSession();
  if (!session)
    return Promise.reject(
      "Must be authenticated to access other user profiles"
    );

  if (session.userId != id && session.role !== UserRole.Admin)
    return Promise.reject(
      "Must be admin or teacher to access other user profiles"
    );

  const res = await fetch(singleEntityUrl(id), {
    cache: "no-store",
  });
  const data = await res.json();
  return data as User;
};

export const getUsers = async () => {
  const session = await getSession();
  if (!session) return Promise.reject("User is not authenticated");

  if (session.role !== UserRole.Admin)
    return Promise.reject(
      "Must be admin or teacher to access other user profiles"
    );

  const res = await fetch(collectionUrl, {
    cache: "no-store",
  });
  const data = await res.json();
  return data as User[];
};
