'server-only';
import type { User } from '@/app/lib/definitions';
import { NextResponse, type NextRequest } from 'next/server';
import { users } from '../../../lib/mock_data';

// do NOT remove 'request' prop, otherwise things will break
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const user: User | undefined = users.find((u: User) => u.id === Number(id));

  if (!user) {
    return NextResponse.json(
      { message: `User with selected ID ${id} was not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}
