import { type Book } from '../lib/definitions';
import { getBooks } from '../lib/actions/books';
import BooksTable from './components/BooksTable';

export default async function Page() {
  const books: Book[] = await getBooks();

  return (
    <div>
      <h1>{books.length > 1 ? `${books.length} books` : '1 book'}</h1>
      <BooksTable books={books} />
    </div>
  );
}
