'server-only';
import type { Department } from '@/app/lib/definitions';
import { NextResponse, type NextRequest } from 'next/server';
import { departments } from '../../../lib/mock_data';

// do NOT remove 'request' prop, otherwise things will break
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const department: Department | undefined = departments.find(
    (dep: Department) => dep.id === Number(id)
  );

  if (!department) {
    return NextResponse.json(
      { message: `Department with selected ID ${id} was not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json(department);
}
