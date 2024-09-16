'use client'; // TODO

import type { User, UserRole } from '../lib/definitions';

export default function UsersTable({
  users,
  handleLogin,
}: Readonly<{
  users: User[];
  handleLogin: (userId: number, role: UserRole) => void;
}>) {
  const tdClassname = 'p-2';
  return (
    <table className="w-screen">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="border border-gray-400">
        {users?.map((user) => (
          <tr key={user.id} className="odd:bg-white even:bg-blue-300">
            <td className={tdClassname}>{user.name}</td>
            <td className={tdClassname}>{user.email}</td>
            <td className={tdClassname}>{user.role}</td>
            <td className={tdClassname}>
              <button onClick={() => handleLogin(user.id, user.role)}>
                Login
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
