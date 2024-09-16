'use client';

import { useRouter } from 'next/navigation';
import type { Book } from '../../lib/definitions';
import type { ReactNode } from 'react';

export default function BooksTable({ books }: Readonly<{ books: Book[] }>) {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/books/${id}`);
  };

  return (
    <table className="min-w-full h-2/6 border-collapse">
      <thead>
        <tr>
          <TableHead text="Title" />
          <TableHead text="Author" />
          <TableHead text="Status" />
          <TableHead text="Borrow Date" />
          <TableHead text="Return Date" />
        </tr>
      </thead>
      <tbody>
        {books?.map((book) => (
          <tr
            key={book.id}
            onClick={() => handleRowClick(book.id)}
            className="odd:bg-white even:bg-slate-300 hover:bg-slate-400 border-2 border-gray-300 cursor-pointer"
          >
            <TableData>{book.title}</TableData>
            <TableData>{book.author}</TableData>
            <TableData>{book.state.status}</TableData>
            <TableData>{book.state.borrowDate}</TableData>
            <TableData>{book.state.returnDate}</TableData>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TableHead({ text }: Readonly<{ text: string }>) {
  return <th className="border p-2 text-start">{text}</th>;
}

function TableData({ children }: Readonly<{ children: ReactNode }>) {
  return <td className="p-2">{children}</td>;
}
