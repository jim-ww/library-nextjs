import { getBooks } from '../lib/data-access/books';
import type { Book } from '../lib/definitions';
import BooksClient from './BooksClient';

export default async function Page() {
  const books: Book[] = await getBooks();
  return <BooksClient booksProp={books} />;
}
