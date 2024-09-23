'use client';

import { login } from '../lib/auth/auth';
import type { User } from '../lib/definitions';
import { users } from '../lib/mock_data';
import UsersTable from '../users/components/UsersTable';

export default function Page() {
  return (
    <section className="w-full p-10">
      <h1 className="text-2xl font-extrabold">Login as user</h1>
      <br />
      <h2 className="font-bold">{users.length} Users</h2>
      <br />
      <UsersTableLogin users={users} />
    </section>
  );
}

function UsersTableLogin({
  users,
}: Readonly<{
  users: User[];
}>) {
  return (
    <UsersTable
      users={users}
      renderUserRow={(user) => {
        return (
          <tr
            key={user.id}
            className="odd:bg-white even:bg-slate-300 border-2 border-gray-300"
          >
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.role}</td>
            <td className="p-2">
              <button
                onClick={() => login(user.id, user.role)}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded"
              >
                Login
              </button>
            </td>
          </tr>
        );
      }}
    />
  );
}
