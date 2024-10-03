'use client';

import BooksTable from './BooksTable';
import type { Book } from '../../lib/definitions';
import { useBooks } from '@/hooks/useBooks';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import usePagination from '@/hooks/usePagination';
import PageSelector from '@/components/PageSelector';

export default function BooksPage({
  booksProp,
}: Readonly<{ booksProp: Book[] }>) {
  const { books, inHand } = useBooks(booksProp);
  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    nextPage,
    prevPage,
    maxPage,
  } = usePagination(books.length);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, books.length);

  return (
    <div className="bg-orange-100 w-full min-h-screen p-10 flex flex-col">
      <div className="flex-grow">
        <h1 className="font-extrabold text-2xl">
          {inHand ? 'Books in hand' : 'All books'}
        </h1>
        <br />
        <div className="flex justify-between items-center">
          <h2>{books.length > 1 ? `${books.length} books` : '1 book'}</h2>
          <div className="flex gap-4 justify-center">
            <DatePickerStart />
            <DatePickerStart />
          </div>
          <div className="flex justify-end">
            <button className="text-blue-950 font-medium border-2 flex gap-2 p-2 h-11 items-center">
              <ArrowDownTrayIcon className="size-5" />
              <span>EXPORT TO CSV</span>
            </button>
          </div>
        </div>
        <BooksTable books={books} startIndex={startIndex} endIndex={endIndex} />
        <br />
        <div className="flex justify-center items-center gap-2">
          <RowsPerPageSelector
            maxRowsPerPage={itemsPerPage}
            setMaxRowsPerPage={setItemsPerPage}
          />
          <span>{`${startIndex + 1} - ${endIndex} of ${books.length}`}</span>
          <PageSelector
            currentPage={currentPage}
            maxPage={maxPage}
            prevPage={prevPage}
            nextPage={nextPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <CopyrightClaim />
    </div>
  );
}

const RowsPerPageSelector = ({
  maxRowsPerPage,
  setMaxRowsPerPage,
}: {
  maxRowsPerPage: number;
  setMaxRowsPerPage: (maxRowsPerPage: number) => void;
}) => {
  return (
    <div className="flex items-center">
      <span>Rows per page:</span>
      <select
        className="border-2 shadow-sm p-1"
        value={maxRowsPerPage}
        onChange={(option) => setMaxRowsPerPage(+option.target.value)}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
    </div>
  );
};

const DatePickerStart = () => {
  return (
    <div className="flex flex-col justify-center">
      <span>Start Date</span>
      <input
        className="border-zinc-500 border-1 shadow-sm p-1 rounded"
        type="date"
      />
    </div>
  );
};

const CopyrightClaim = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <span>Copyright © {new Date().getFullYear()} Next Library.</span>
      <div className="flex gap-1">
        <span>Contact support:</span>
        <a href="support@nextlibrary.com" className="underline text-blue-600">
          support@nextlibrary.com
        </a>
      </div>
    </div>
  );
};
