'use client';

import { useRouter } from 'next/navigation';
import { BookStatus, type Book } from '../../lib/definitions';
import { ReactNode, useState } from 'react';

export default function BooksTable({ books }: Readonly<{ books: Book[] }>) {
  const router = useRouter();
  const [sortField, setSortField] = useState<
    'title' | 'author' | 'state' | 'borrowDate' | 'returnDate'
  >('title');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleRowClick = (id: number) => {
    router.push(`/books/${id}`);
  };

  const handleSortBy = (
    field: 'title' | 'author' | 'state' | 'borrowDate' | 'returnDate'
  ) => {
    // toggle sort direction if the same field is clicked
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc'); // reset to ascending when a new field is selected
    }
  };

  const sortedBooks = [...books].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'author':
        comparison = a.author.localeCompare(b.author);
        break;
      case 'state':
        comparison = compareBooksByState(a, b);
        break;
      case 'borrowDate':
        comparison =
          new Date(
            a.state.status === BookStatus.Borrowed ? a.state.borrowDate : ''
          ).getTime() -
          new Date(
            b.state.status === BookStatus.Borrowed ? b.state.borrowDate : ''
          ).getTime();
        break;
      case 'returnDate':
        comparison =
          new Date(
            a.state.status === BookStatus.Borrowed ? a.state.returnDate : ''
          ).getTime() -
          new Date(
            b.state.status === BookStatus.Borrowed ? b.state.returnDate : ''
          ).getTime();
        break;
      default:
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  function compareBooksByState(bookA: Book, bookB: Book): number {
    const stateOrder: Record<BookStatus, number> = {
      [BookStatus.Borrowed]: 0,
      [BookStatus.Assigned]: 1,
      [BookStatus.Available]: 2,
    };

    return (
      (stateOrder[bookA.state.status] || Infinity) -
      (stateOrder[bookB.state.status] || Infinity)
    );
  }

  return (
    <table className="min-w-full h-2/6 border-collapse">
      <thead>
        <tr className="cursor-pointer ">
          <TableHead text="Title" onClick={() => handleSortBy('title')} />
          <TableHead text="Author" onClick={() => handleSortBy('author')} />
          <TableHead text="Status" onClick={() => handleSortBy('state')} />
          <TableHead
            text="Borrow Date"
            onClick={() => handleSortBy('borrowDate')}
          />
          <TableHead
            text="Return Date"
            onClick={() => handleSortBy('returnDate')}
          />
        </tr>
      </thead>
      <tbody>
        {sortedBooks.map((book) => (
          <tr
            key={book.id}
            onClick={() => handleRowClick(book.id)}
            className="odd:bg-white even:bg-slate-300 hover:bg-slate-400 border-2 border-gray-300 cursor-pointer"
          >
            <TableData>{book.title}</TableData>
            <TableData>{book.author}</TableData>
            <TableData>{book.state.status}</TableData>

            {book.state.status === BookStatus.Borrowed ? (
              <>
                <TableData>{book.state.borrowDate}</TableData>
                <TableData>{book.state.returnDate}</TableData>
              </>
            ) : (
              <>
                <TableData className="pl-12">-</TableData>
                <TableData className="pl-12">-</TableData>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TableHead({
  text,
  onClick,
}: Readonly<{ text: string; onClick: () => void }>) {
  return (
    <th className="border p-2 text-start hover:bg-slate-400" onClick={onClick}>
      {text}
    </th>
  );
}

function TableData({
  className,
  children,
}: Readonly<{ className?: string; children: ReactNode }>) {
  return <td className={`p-2 ${className}`}>{children}</td>;
}
