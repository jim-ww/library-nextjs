import AdminDashboard from './(dashboard)/AdminDashboard';
import StudentDashboard from './(dashboard)/StudentDashboard';
import TeacherDashboard from './(dashboard)/TeacherDashboard';
import { getCurrentUser } from './lib/data-access/users';
import { UserRole, type User } from './lib/definitions';

export default async function Home() {
  const user: User | null = await getCurrentUser();

  switch (user?.role) {
    case UserRole.Student:
      return <StudentDashboard />;
    case UserRole.Teacher:
      return <TeacherDashboard />;
    case UserRole.Admin:
      return <AdminDashboard />;
    default:
      <main>Hello World!</main>;
  }
}
