import { useState } from "react";

function usePagination(totalItems: number, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = totalItems / itemsPerPage;

  function nextPage() {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return { currentPage, nextPage, prevPage, maxPage };
}

export default usePagination;
