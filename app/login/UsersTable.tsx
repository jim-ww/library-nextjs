'use client'; // TODO

import type { ReactNode } from 'react';
import type { User, UserRole } from '../lib/definitions';

export default function UsersTable({
  users,
  handleLogin,
}: Readonly<{
  users: User[];
  handleLogin: (userId: number, role: UserRole) => void;
}>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full h-2/6 border-collapse">
        <thead>
          <tr>
            <TableHead text="Name" />
            <TableHead text="Email" />
            <TableHead text="Role" />
            <TableHead text="Action" />
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr
              key={user.id}
              className="odd:bg-white even:bg-slate-300 border-2 border-gray-300"
            >
              <TableData>{user.name}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.role}</TableData>
              <TableData>
                <button
                  onClick={() => handleLogin(user.id, user.role)}
                  className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded"
                >
                  Login
                </button>
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHead({ text }: Readonly<{ text: string }>) {
  return <th className="border p-2 text-start">{text}</th>;
}

function TableData({ children }: Readonly<{ children: ReactNode }>) {
  return <td className="p-2">{children}</td>;
}
