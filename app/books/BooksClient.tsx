'use client';

import { useEffect, useMemo, useState } from 'react';
import { BookStatus, type Book } from '../lib/definitions';
import BooksTable from './components/BooksTable';
import { useSearchParams } from 'next/navigation';

export default function BooksClient({
  booksProp,
}: Readonly<{ booksProp: Book[] }>) {
  const [books, setBooks] = useState<Book[]>(booksProp);
  const params = useSearchParams();
  const inHand = params.get('inHand');

  const filteredBooks = useMemo(() => {
    return inHand
      ? books.filter((book: Book) => book.state.status === BookStatus.Borrowed)
      : books;
  }, [books, inHand]);

  return (
    <div className="w-full p-10">
      {/* TODO change to Books in hand if url parameter inHand=true */}
      <h1 className="font-extrabold text-2xl">
        {inHand ? 'Books in hand' : 'All books'}
      </h1>
      <br />
      <h2>{filteredBooks.length > 1 ? `${books.length} books` : '1 book'}</h2>
      <BooksTable books={filteredBooks} />
    </div>
  );
}
