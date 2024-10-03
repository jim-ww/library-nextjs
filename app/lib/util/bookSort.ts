import { BookStatus, type Book } from '../definitions';

const BOOK_STATUS_ORDER = [
  BookStatus.Borrowed,
  BookStatus.Assigned,
  BookStatus.Available,
];

const getStatusIndex = (status: BookStatus): number => {
  return BOOK_STATUS_ORDER.indexOf(status);
};

export function compareBooksByState(bookA: Book, bookB: Book): number {
  return (
    getStatusIndex(bookA.state.status) - getStatusIndex(bookB.state.status)
  );
}

export function compareBooksByTitle(bookA: Book, bookB: Book): number {
  return bookA.title.localeCompare(bookB.title);
}

export function compareBooksByAuthor(bookA: Book, bookB: Book): number {
  return bookA.author.localeCompare(bookB.author);
}

function getReturnDate(book: Book): Date | null {
  if (book.state.status === BookStatus.Assigned && book.state.returnDate) {
    return new Date(book.state.returnDate);
  } else if (book.state.status === BookStatus.Borrowed) {
    return new Date(book.state.returnDate);
  } else {
    return null;
  }
}

function getBorrowDate(book: Book): Date | null {
  if (book.state.status === BookStatus.Borrowed) {
    return new Date(book.state.borrowDate);
  }
  return null;
}

export function compareBooksByReturnDate(bookA: Book, bookB: Book): number {
  let dateA = getReturnDate(bookA);
  let dateB = getReturnDate(bookB);

  if (!dateA && !dateB) return 0;
  if (!dateA) return 1;
  if (!dateB) return -1;

  return dateA.getTime() - dateB.getTime();
}

export function compareBooksByBorrowDate(bookA: Book, bookB: Book): number {
  const dateA = getBorrowDate(bookA);
  const dateB = getBorrowDate(bookB);

  if (!dateA && !dateB) return 0;
  if (!dateA) return 1;
  if (!dateB) return -1;

  return dateA.getTime() - dateB.getTime();
}
