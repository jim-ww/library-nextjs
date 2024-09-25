import { useCurrentUser } from '@/hooks/useCurrentUser';
import { getCurrentUser } from '../lib/data-access/users';
import type { User } from '../lib/definitions';

export default async function Page() {
  const user = await getCurrentUser(); // TODO

  if (!user) {
    return;
  }

  // TODO implement
  return (
    <div>
      <h1>My profile</h1>
      <h3>Username: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Role: {user.role}</h3>
    </div>
  );
}
