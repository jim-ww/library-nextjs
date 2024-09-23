import { getBooks } from '../lib/data-access/books';
import type { Book } from '../lib/definitions';
import BooksPage from './components/BooksPage';

export default async function Page() {
  const books: Book[] = await getBooks();
  return <BooksPage booksProp={books} />;
}
