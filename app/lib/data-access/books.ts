'server-only';

export const revalidate = 3600; // * invalidate every hour

import { BookStatus, type Book } from '../definitions';

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

export const getUserBooks: (userId: number) => Promise<{
  assignedBooks: Book[];
  borrowedBooks: Book[];
}> = async (userId: number) => {
  const res = await fetch(collectionUrl);
  const allBooks = await res.json();

  const userBooks = allBooks.filter((book: Book) => {
    switch (book.state.status) {
      case BookStatus.Assigned:
        return book.state.userId === userId;
      case BookStatus.Borrowed:
        return book.state.userId === userId;
      case BookStatus.Available:
        return false;
    }
  });

  const assignedBooks = userBooks.filter(
    (book: Book) => book.state.status === BookStatus.Assigned
  );
  const borrowedBooks = userBooks.filter(
    (book: Book) => book.state.status === BookStatus.Borrowed
  );
  return {
    assignedBooks,
    borrowedBooks,
  };
};
