import type { Book, User } from '../../lib/definitions';
import React from 'react';
import { getBook } from '@/app/lib/actions/books';
import { getCurrentUser } from '@/app/lib/actions/users';

export default async function BookPage({ params }: { params: { id: string } }) {
  const session = getCurrentUser();
  const book: Book = await getBook(parseInt(params.id));

  // const status = getBookStatus(user, book);

  return (
    <div className="flex flex-col gap-2 p-2">
      <h1>{book.title}</h1>
      <div>
        <h5>{book.author}</h5>
        {/* <p>{status}</p> */}
        <button>{}</button>
      </div>
    </div>
  );
}

const getBookStatus = (user: User, book: Book): string => {
  if (!book.state.userId) {
    return 'Available';
  }
  if (user.id === book.state.userId) {
    return 'You have borrowed this book';
  }
  return 'Book is currently borrowed';
};
