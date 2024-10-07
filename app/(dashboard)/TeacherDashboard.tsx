import type { Book, User } from '../lib/definitions';

export default function TeacherDashboard({
  students,
  books,
}: Readonly<{ students: User[]; books: Book[] }>) {
  // TODO implement
  // - see all students
  // - assign/remove books to students (optionally set returnDate)
  return <div>Teacher dashboard</div>;
}
