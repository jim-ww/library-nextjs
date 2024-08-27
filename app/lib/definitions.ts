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

export type Book = {
  id: number;
  title: string;
  author: string;
  borrowedBy?: {
    userId: number;
    borrowDate: string;
    returnDate: string | null;
  };
  departmentIDs: number[];
};

export type Department = {
  id: number;
  description: string;
};
