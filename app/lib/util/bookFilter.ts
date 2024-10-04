import { BookStatus, type Book } from '../definitions';

export function filterBooksByDates(
  books: Book[],
  startDate: string,
  endDate: string
): Book[] {
  return books.filter((book: Book) => {
    switch (book.state.status) {
      case BookStatus.Available:
        return true;
      case BookStatus.Assigned:
        if (!book.state.returnDate) return true;
        if (
          new Date(book.state.returnDate) < new Date(startDate) ||
          new Date(book.state.returnDate) > new Date(endDate)
        )
          return false;
        break;
      case BookStatus.Borrowed:
        if (
          new Date(book.state.returnDate) < new Date(startDate) ||
          new Date(book.state.returnDate) > new Date(endDate)
        )
          return false;
        break;
    }
  });
}
