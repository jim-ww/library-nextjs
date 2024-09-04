"use client";

import type { User, UserRole } from "../lib/definitions";

export default function UsersTable({
  users,
  handleLogin,
}: {
  users: User[];
  handleLogin: (userId: number, role: UserRole) => void;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
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
