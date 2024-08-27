import { NextResponse } from "next/server";
import { books } from "../../../lib/mock_data";
import type { Book } from "@/app/lib/definitions";

export async function GET(bookId: string) {
  const book: Book | undefined = books.find((book: Book) => book.id === bookId);

  if (!book) {
    return NextResponse.json("Book with selected ID was not found.");
  }

  return NextResponse.json(book);
}
