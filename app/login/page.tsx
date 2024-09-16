import { login } from '../lib/actions/auth';
import { users } from '../lib/mock_data';
import UsersTable from './UsersTable';

export default function Page() {
  return (
    <section className="p-10 w-fit overflow-hidden">
      <h1 className="text-xl">Login as user</h1>
      <br />
      <h2 className="font-bold">{users.length} Users</h2>
      <br />
      <UsersTable users={users} handleLogin={login} />
    </section>
  );
}
