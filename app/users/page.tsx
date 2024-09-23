import { getUsers } from '../lib/data-access/users';
import UsersTable from './components/UsersTable';

export default async function Page() {
  const users = await getUsers();

  if (!users) {
    return;
  }

  return (
    <div>
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
              <td className="p-2">TODO ADD ACTIONS HERE</td>
            </tr>
          );
        }}
      />
    </div>
  );
}
