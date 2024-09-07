import { BookStatus, type Book } from "../lib/definitions";
import Link from "next/link";
import BooksTable from "./components/BooksTable";
import { useParams } from "next/navigation";
import { getBooks } from "../lib/actions/books";

export default async function Page() {
  const books: Book[] = await getBooks();

  return (
    <div className="size-max">
      <h1>All books</h1>
      <div className="flex flex-col size-max">
        <div>{books.length == 1 ? "1 book" : `${books.length} books`}</div>
        <BooksTable books={books} />
      </div>
    </div>
  );
}

const Book = ({ book }: { book: Book }) => {
  const { title, author, state } = book;

  return (
    <Link href={`/books/${book.id}`}>
      <div className={`flex flex-row gap-2 p-2 bg-slate-400`}>
        <h2 className="pr-10">{title}</h2>
        <h2>{author}</h2>
        <h2>{state.status}</h2>
        <h2>{state.borrowDate}</h2>
        <h2>{state.returnDate}</h2>
      </div>
    </Link>
  );
};
