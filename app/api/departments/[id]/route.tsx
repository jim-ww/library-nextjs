import { NextResponse } from "next/server";
import { books, departments } from "../../../lib/mock_data";
import type { Department } from "@/app/lib/definitions";

export async function GET(depId: number) {
  const dep: Department | undefined = departments.find(
    (dep: Department) => dep.id === depId
  );

  if (!dep) {
    return NextResponse.json("Book with selected ID was not found.");
  }

  return NextResponse.json(departments);
}
