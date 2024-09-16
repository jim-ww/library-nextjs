import type { User } from '@/app/lib/definitions';
import { NavBar } from './NavBar';

export function Panel() {
  // const user = await getCurrentUser();

  return (
    <div className="flex flex-col h-screen bg-blue-950 whitespace-nowrap">
      <h1 className="text-white text-2xl font-bold p-6">Next Library</h1>
      <NavBar />
      {/* {user && <UserProfile user={user} />} */}
    </div>
  );
}

function UserProfile({ user }: Readonly<{ user: User }>) {
  return (
    <section>
      <h1>{user.role} role</h1>
      <span>Name: {user.name}</span>
    </section>
  );
}
