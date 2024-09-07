"use client";

import { useSearchParams } from "next/navigation";
import { BookStatus, type Book } from "../../lib/definitions";

export default function BooksTable({ books }: { books: Book[] }) {
  const thClassname = "py-2 px-4 border-b";
  const tdClassname = "py-2 px-4 border-b";

  const searchParams = useSearchParams();
  const inHand = searchParams.get("inHand");

  const filteredBooks =
    inHand === "true"
      ? books.filter((book: Book) => book.state.status == BookStatus.Borrowed)
      : books;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className={thClassname}>Title</th>
            <th className={thClassname}>Author</th>
            <th className={thClassname}>Status</th>
            <th className={thClassname}>Borrow date</th>
            <th className={thClassname}>Return date</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td className={tdClassname}>{book.title}</td>
              <td className={tdClassname}>{book.author}</td>
              <td className={tdClassname}>{book.state.status}</td>
              <td className={tdClassname}>{book.state.borrowDate}</td>
              <td className={tdClassname}>{book.state.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
