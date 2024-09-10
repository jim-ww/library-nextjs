import { users } from "@/app/lib/mock_data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(users);
}
