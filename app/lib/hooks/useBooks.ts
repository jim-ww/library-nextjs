import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BookStatus, type Book } from '../../lib/definitions';

export function useBooks(initialBooks: Book[]) {
  const params = useSearchParams();
  const inHand = params.get('inHand');

  const filteredBooks = useMemo(() => {
    return inHand
      ? initialBooks.filter(
          (book: Book) => book.state.status === BookStatus.Borrowed
        )
      : initialBooks;
  }, [initialBooks, inHand]);

  return { books: filteredBooks, inHand: !!inHand };
}
