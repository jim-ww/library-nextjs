import { BookStatus, type Book } from '@/app/lib/definitions';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

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
