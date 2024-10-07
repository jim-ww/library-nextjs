import { BookStatus, type Book } from '../lib/definitions';

export default function StudentDashboard({
  assignedBooks,
  borrowedBooks,
}: Readonly<{ assignedBooks: Book[]; borrowedBooks: Book[] }>) {
  return (
    <div className="flex flex-col gap-2 p-10">
      <h1 className="font-extrabold text-2xl">Student dashboard</h1>
      <div className="flex gap-6">
        <BooksBlock title="Assigned books" books={assignedBooks} />
        <BooksBlock title="Borrowed books" books={borrowedBooks} />
      </div>
    </div>
  );
}

const BooksBlock = ({ title, books }: { title: string; books: Book[] }) => {
  return (
    <div className="flex flex-col p-2">
      <h1>{title}</h1>
      <div className="flex flex-col gap-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div
      key={book.id}
      className="border-2 border-blue-950 rounded-md p-4 shadow-xl bg-slate-300"
    >
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      {(book.state.status === BookStatus.Borrowed ||
        book.state.status === BookStatus.Assigned) && (
        <>
          {book.state.returnDate && <p>Return date: {book.state.returnDate}</p>}
          <br />
          <button className="py-2 px-6 bg-blue-950 rounded-xl hover:bg-yellow-300 text-white">
            {book.state.status === BookStatus.Assigned && 'Borrow'}
            {book.state.status === BookStatus.Borrowed && 'Return'}
          </button>
        </>
      )}
    </div>
  );
};
