"server-only";

import { cache } from "react";
import type { Book } from "../definitions";

const collectionUrl = "http://localhost:3000/api/books"; //"http://localhost:8090/api/collections/books/records?page=0&perPage=10",
const singleEntityUrl = (id: number) => `http://localhost:3000/api/books/${id}`; //http://localhost:8090/api/collections/books/records?id=${id}

export const getBooks: () => Promise<Book[]> = async () => {
  const res = await fetch(collectionUrl, {
    cache: "no-store",
  });
  const data = await res.json();
  return data as Book[];
};

export const getBook: (id: number) => Promise<Book> = async (id: number) => {
  const res = await fetch(singleEntityUrl(id), {
    cache: "no-store",
  });
  const data = await res.json();
  return data as Book;
};
