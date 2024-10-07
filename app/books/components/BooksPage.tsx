'use client';

import BooksTable from './BooksTable';
import { type Book } from '../../lib/definitions';
import { useBooks } from '@/hooks/useBooks';
import usePagination from '@/hooks/usePagination';
import PageSelector from '@/components/PageSelector';
import CopyrightClaim from './Copyright';
import RowsPerPageSelector from '@/components/RowsPerPageSelector';
import ExportBlock from './ExportBlock';

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
    <div className="bg-zinc-300 w-full min-h-screen p-10 flex flex-col">
      <div className="flex-grow w-full overflow-x-auto">
        <h1 className="font-extrabold text-2xl ml-2">
          {inHand ? 'Books in hand' : 'All books'}
        </h1>
        <br />
        <div className="flex justify-between items-center">
          <h1 className="text-nowrap p-3 text-xl">
            {books.length > 1 ? `${books.length} books` : '1 book'}
          </h1>
          <ExportBlock books={books} />
        </div>
        <BooksTable books={books} startIndex={startIndex} endIndex={endIndex} />
        <br />
        <div className="flex justify-center items-center gap-2">
          <RowsPerPageSelector
            maxRowsPerPage={itemsPerPage}
            setMaxRowsPerPage={setItemsPerPage}
            options={[5, 10, 15, 20, 25]}
          />
          {/* ! TODO OOO  */}
          <span className="min-w-24 max-w-24 text-nowrap">{`${
            startIndex + 1
          } - ${endIndex} of ${books.length}`}</span>
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
