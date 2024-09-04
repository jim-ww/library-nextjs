export enum UserRole {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  departmentIDs: number[];
};

export enum BookStatus {
  Assigned = "assigned",
  Borrowed = "borrowed",
  Available = "available",
}

export type BookState = {
  status: BookStatus;
  userId: number | null;
  borrowDate: string | null;
  returnDate: string | null;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  state: BookState;
  departmentIDs: number[];
};

export type Department = {
  id: number;
  name: string;
};

export type SessionPayload = {
  userId: number;
  role: UserRole;
  expiresAt: Date;
};
