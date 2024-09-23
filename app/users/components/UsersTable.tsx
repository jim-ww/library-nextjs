'use client';

import type { ReactNode } from 'react';
import type { User } from '@/app/lib/definitions';

export default function UsersTable({
  users,
  renderUserRow,
}: Readonly<{
  users: User[];
  renderUserRow: (user: User) => ReactNode;
}>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full h-2/6 border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-start">Name</th>
            <th className="border p-2 text-start">Email</th>
            <th className="border p-2 text-start">Role</th>
            <th className="border p-2 text-start">Actions</th>
          </tr>
        </thead>
        <tbody>{users?.map((user) => renderUserRow(user))}</tbody>
      </table>
    </div>
  );
}
