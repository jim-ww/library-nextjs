"use client";

import { UserRole, type User } from "@/app/lib/definitions";
import { users } from "@/app/lib/mock_data";
import { useParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  // const { id } = useParams<{ id: string }>();

  // const user: User | undefined = users.find((u) => u.id === id); //parseInt(id));

  // if (!user)    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({
    name: "Bob",
    role: UserRole.Student,
    departmentIDs: [1, 2],
    email: "asd@Asd",
    id: 1,
  } as User);
}
