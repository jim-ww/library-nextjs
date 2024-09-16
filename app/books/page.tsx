import { type Book } from '../lib/definitions';
import { getBooks } from '../lib/actions/books';
import BooksTable from './components/BooksTable';

export default async function Page() {
  const books: Book[] = await getBooks();

  return (
    <div className="w-full p-10">
      {/* TODO change to Books in hand if url parameter inHand=true */}
      <h1 className="font-extrabold text-2xl">All books</h1>
      <br />
      <h2>{books.length > 1 ? `${books.length} books` : '1 book'}</h2>
      <BooksTable books={books} />
    </div>
  );
}
