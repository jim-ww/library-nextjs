import { BookStatus, type Book, type User } from '../../lib/definitions';
import React from 'react';
import { getBook } from '@/app/lib/data-access/books';

export default async function BookPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  // const session = getSession(); // TODO
  const book: Book = await getBook(parseInt(params.id));

  const status = getBookStatus(0, book); // TODO

  return (
    <div className="flex flex-col gap-2 p-2">
      <h1>{book.title}</h1>
      <div>
        <h5>{book.author}</h5>
        <p>{status}</p>
        <button>{}</button>
      </div>
    </div>
  );
}

const getBookStatus = (userId: User['id'], book: Book): string => {
  switch (book.state.status) {
    case BookStatus.Available:
      return 'Available';
    case BookStatus.Assigned:
      if (userId === book.state.userId) {
        return 'You have been assigned to this book';
      } else {
        return 'Book is already assigned to another person';
      }
    case BookStatus.Borrowed:
      if (userId === book.state.userId) {
        return 'You have borrowed this book';
      }
      return 'Book is currently borrowed';
  }
};
