import { BookStatus, type Book } from '../definitions';

export function formatAsCSV(book: Book): string {
  switch (book.state.status) {
    case BookStatus.Available:
      return `${book.id}, ${book.title},${book.author}, ${book.departmentIDs}, ${book.state.status}`;
    case BookStatus.Assigned:
      return `${book.id}, ${book.title},${book.author}, ${book.departmentIDs}, ${book.state.status}, ${book.state.userId}, ${book.state.returnDate}`;
    case BookStatus.Borrowed:
      return `${book.id}, ${book.title},${book.author}, ${book.departmentIDs}, ${book.state.status}, ${book.state.userId} ${book.state.borrowDate},${book.state.returnDate}`;
  }
}
