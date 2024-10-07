'use client';

import { useRouter } from 'next/navigation';
import { BookStatus, type Book } from '../../lib/definitions';
import { ReactNode, useState } from 'react';
import {
  compareBooksByAuthor,
  compareBooksByBorrowDate,
  compareBooksByReturnDate,
  compareBooksByState,
  compareBooksByTitle,
} from '@/app/lib/util/bookSort';

export default function BooksTable({
  books,
  startIndex,
  endIndex,
}: Readonly<{ books: Book[]; startIndex: number; endIndex: number }>) {
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
        comparison = compareBooksByTitle(a, b);
        break;
      case 'author':
        comparison = compareBooksByAuthor(a, b);
        break;
      case 'state':
        comparison = compareBooksByState(a, b);
        break;
      case 'borrowDate':
        comparison = compareBooksByBorrowDate(a, b);
        break;
      case 'returnDate':
        comparison = compareBooksByReturnDate(a, b);
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <table className="min-w-full h-2/6 border-collapse table-auto overflow-x-auto">
      <thead>
        <tr className="cursor-pointer">
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
        {sortedBooks.slice(startIndex, endIndex).map((book) => (
          <tr
            key={book.id}
            onClick={() => handleRowClick(book.id)}
            className="odd:bg-white even:bg-slate-300 hover:bg-slate-400 border-2 border-gray-300 cursor-pointer"
          >
            <TableData className="max-w-96 min-w-96">{book.title}</TableData>
            <TableData className="max-w-36 min-w-36">{book.author}</TableData>
            <TableData>{book.state.status}</TableData>
            <BookStatusTD book={book} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const BookStatusTD = ({ book }: Readonly<{ book: Book }>) => {
  switch (book.state.status) {
    case BookStatus.Borrowed:
      return (
        <>
          <TableData>{book.state.borrowDate}</TableData>
          <TableData>{book.state.returnDate}</TableData>
        </>
      );
    case BookStatus.Assigned:
      return (
        <>
          <TableData className="pl-12">-</TableData>
          {book.state.returnDate ? (
            <TableData>{book.state.returnDate}</TableData>
          ) : (
            <TableData className="pl-12">-</TableData>
          )}
        </>
      );
    case BookStatus.Available:
      return (
        <>
          <TableData className="pl-12">-</TableData>
          <TableData className="pl-12">-</TableData>
        </>
      );
  }
};

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
  return <td className={`p-2 ${className} truncate p-4`}>{children}</td>;
}
