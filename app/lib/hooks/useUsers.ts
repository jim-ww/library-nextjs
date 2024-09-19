import { useEffect, useState } from 'react';
import { getUsers } from '../data-access/users';
import type { User } from '../definitions';

export function useUsers() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch user profiles: ' + String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { users, loading, error };
}
