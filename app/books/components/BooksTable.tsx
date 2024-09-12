'use client';

import { useSearchParams } from 'next/navigation';
import { BookStatus, type Book } from '../../lib/definitions';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function BooksTable({ books }: Readonly<{ books: Book[] }>) {
  const searchParams = useSearchParams();
  const inHand = searchParams.get('inHand');

  const filteredBooks =
    inHand === 'true'
      ? books.filter((book: Book) => book.state.status == BookStatus.Borrowed)
      : books;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <BookTH>Title</BookTH>
            <BookTH>Author</BookTH>
            <BookTH>Status</BookTH>
            <BookTH>Borrow date</BookTH>
            <BookTH>Return date</BookTH>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`}>
              <tr key={book.id}>
                <BookTD key={book.id}>{book.title}</BookTD>
                <BookTD key={book.id}>{book.author}</BookTD>
                <BookTD key={book.id}>{book.state.status}</BookTD>
                <BookTD key={book.id}>{book.state.borrowDate}</BookTD>
                <BookTD key={book.id}>{book.state.returnDate}</BookTD>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const BookTH = ({ children }: { children: ReactNode }) => {
  return <th className="py-2 px-4 border-b">{children}</th>;
};

const BookTD = ({ children }: { children: ReactNode }) => {
  return <td className="py-2 px-4 border-b text-center">{children}</td>;
};
