import type { User } from '@/app/lib/definitions';
import { NavBar } from './NavBar';
import { users } from '@/app/lib/mock_data';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function Panel() {
  const user: User = users[0]; // TODO await getCurrentUser();

  return (
    <div className="flex flex-col h-screen bg-blue-950 whitespace-nowrap">
      <h1 className="text-white text-2xl font-bold p-6">Next Library</h1>
      <NavBar />
      <span className="flex-1" />
      {user && <UserProfile user={user} />}
    </div>
  );
}

function UserProfile({ user }: Readonly<{ user: User }>) {
  return (
    <section className="flex flex-col bg-yellow-500 text-black p-3">
      <p className="font-semibold text-xs">
        {(user.role + ' ROLE').toUpperCase()}
      </p>
      <div className="flex">
        <span className="font-bold">{user.name}</span>
        {/* TODO implement UserProfile options button */}
        <ChevronDownIcon className="w-6 h-6 ml-auto" />
      </div>
    </section>
  );
}
