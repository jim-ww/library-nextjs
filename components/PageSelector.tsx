import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';

type PageSelectorProps = {
  currentPage: number;
  maxPage: number;
  prevPage: () => void;
  nextPage: () => void;
  setCurrentPage: (num: number) => void;
};

const PageSelector = ({
  currentPage,
  maxPage,
  prevPage,
  nextPage,
  setCurrentPage,
}: PageSelectorProps) => {
  const totalPages = Math.ceil(maxPage);

  const renderPageNumbers = (): (string | number)[] => {
    const pages = [];
    const siblingCount = 1;
    const showDots = totalPages > siblingCount * 2 + 5;

    pages.push(1);

    if (showDots) {
      if (currentPage > siblingCount + 3) pages.push('...');

      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - siblingCount - 2) pages.push('...');
    } else {
      for (let i = 2; i < totalPages; i++) {
        pages.push(i);
      }
    }

    pages.push(totalPages);
    return pages;
  };

  const pages = renderPageNumbers();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50"
      >
        <ChevronDoubleLeftIcon className="size-5" />
      </button>
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50"
      >
        <ChevronLeftIcon className="size-5" />
      </button>

      {pages.map((number, index) =>
        typeof number === 'number' ? (
          <button
            key={index + number}
            onClick={() => setCurrentPage(number)}
            className={`p-2 rounded-2xl ${
              currentPage === number ? 'bg-gray-300 font-bold' : ''
            }`}
          >
            {number}
          </button>
        ) : (
          <span key={index + number} className="p-2">
            {number}
          </span>
        )
      )}

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50"
      >
        <ChevronRightIcon className="size-5" />
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50"
      >
        <ChevronDoubleRightIcon className="size-5" />
      </button>
    </div>
  );
};

export default PageSelector;
