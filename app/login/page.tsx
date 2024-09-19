import { login } from '../lib/data-access/auth';
import { users } from '../lib/mock_data';
import UsersTable from './UsersTable';

export default function Page() {
  return (
    <section className="w-full p-10">
      <h1 className="text-2xl font-extrabold">Login as user</h1>
      <br />
      <h2 className="font-bold">{users.length} Users</h2>
      <br />
      <UsersTable users={users} handleLogin={login} />
    </section>
  );
}
