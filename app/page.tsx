import AdminDashboard from './(dashboard)/AdminDashboard';
import StudentDashboard from './(dashboard)/StudentDashboard';
import TeacherDashboard from './(dashboard)/TeacherDashboard';
import NotLoggedInPage from './(misc)/NotLoggedInPage';
import { getUserBooks } from './lib/data-access/books';
import { getCurrentUser } from './lib/data-access/users';
import { UserRole, type User } from './lib/definitions';

export default async function Home() {
  const user: User | null = await getCurrentUser();

  if (!user) return <NotLoggedInPage />;

  const { assignedBooks, borrowedBooks } = await getUserBooks(user.id);

  switch (user.role) {
    case UserRole.Student:
      return (
        <StudentDashboard
          assignedBooks={assignedBooks}
          borrowedBooks={borrowedBooks}
        />
      );
    case UserRole.Teacher:
      return <TeacherDashboard students={[]} books={[]} />;
    case UserRole.Admin:
      return <AdminDashboard />;
  }
}
