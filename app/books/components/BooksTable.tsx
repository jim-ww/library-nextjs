'use client';

import { useRouter } from 'next/navigation';
import type { Book } from '../../lib/definitions';

export default function BooksTable({ books }: Readonly<{ books: Book[] }>) {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/books/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Borrow Date</th>
            <th className="py-2 px-4 border-b">Return Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              onClick={() => handleRowClick(book.id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="py-2 px-4 border-b">{book.title}</td>
              <td className="py-2 px-4 border-b">{book.author}</td>
              <td className="py-2 px-4 border-b">{book.state.status}</td>
              <td className="py-2 px-4 border-b">{book.state.borrowDate}</td>
              <td className="py-2 px-4 border-b">{book.state.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
