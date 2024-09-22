'use client';

import BooksTable from './components/BooksTable';
import { useBooks } from '../lib/hooks/useBooks';
import type { Book } from '../lib/definitions';

export default function BooksClient({
  booksProp,
}: Readonly<{ booksProp: Book[] }>) {
  const { books, inHand } = useBooks(booksProp);

  return (
    <div className="w-full p-10">
      <h1 className="font-extrabold text-2xl">
        {inHand ? 'Books in hand' : 'All books'}
      </h1>
      <br />
      <h2>{books.length > 1 ? `${books.length} books` : '1 book'}</h2>
      <BooksTable books={books} />
    </div>
  );
}
