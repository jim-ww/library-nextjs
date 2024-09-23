'server-only';

export const revalidate = 3600; // * invalidate every hour

import type { Book } from '../definitions';

const collectionUrl = 'http://localhost:3000/api/books';
const singleEntityUrl = (id: number) => `http://localhost:3000/api/books/${id}`;

export const getBooks: () => Promise<Book[]> = async () => {
  const res = await fetch(collectionUrl);
  const data = await res.json();
  return data as Book[];
};

export const getBook: (id: number) => Promise<Book> = async (id: number) => {
  const res = await fetch(singleEntityUrl(id));
  const data = await res.json();
  return data as Book;
};
