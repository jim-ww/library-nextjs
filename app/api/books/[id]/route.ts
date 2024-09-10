'server-only';
import type { Book } from '@/app/lib/definitions';
import { NextResponse, type NextRequest } from 'next/server';
import { books } from '../../../lib/mock_data';

// do NOT remove 'request' prop, otherwise things will break
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const book: Book | undefined = books.find(
    (book: Book) => book.id === Number(id)
  );

  if (!book) {
    return NextResponse.json(
      { message: `Book with selected ID ${id} was not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json(book);
}
