import { login } from '../lib/actions/auth';
import { users } from '../lib/mock_data';
import UsersTable from './UsersTable';

export default function Page() {
  return <UsersTable users={users} handleLogin={login} />;
}
