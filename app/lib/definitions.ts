export enum UserRole {
  Student = 'student',
  Teacher = 'teacher',
  Admin = 'admin',
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  departmentIDs: number[];
};

export enum BookStatus {
  Assigned = 'assigned',
  Borrowed = 'borrowed',
  Available = 'available',
}

export type BookStateAvailable = {
  status: BookStatus.Available;
};

export type BookStateAssigned = {
  status: BookStatus.Assigned;
  userId: number;
  expectedReturnDate?: string;
};

export type BookStateBorrowed = {
  status: BookStatus.Borrowed;
  userId: number;
  borrowDate: string;
  returnDate: string;
};

export type BookState =
  | BookStateAvailable
  | BookStateAssigned
  | BookStateBorrowed;

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
