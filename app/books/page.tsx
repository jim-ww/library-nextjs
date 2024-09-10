'use client';
import { type Book } from '../lib/definitions';
import Link from 'next/link';
import BooksTable from './components/BooksTable';
import { getBooks } from '../lib/actions/books';

export default async function Page() {
  const books: Book[] = await getBooks();

  return (
    <div className="size-max">
      <h1>All books</h1>
      <div className="flex flex-col size-max">
        <div>{books.length == 1 ? '1 book' : `${books.length} books`}</div>
        <BooksTable books={books} />
      </div>
    </div>
  );
}
