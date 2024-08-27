import { UserRole, User, Book, Department } from "./definitions";

// Mock Users
const users: User[] = [
  {
    id: "0cok9w0p4nb3zav",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: UserRole.Student,
    departmentIDs: ["0cok9w0p4nb3zaa", "0cok9w0p4nb3zab"],
    assignedBookIDs: ["0cok9w0p4nb3zaq"],
    borrowedBooks: [
      {
        bookId: "0cok9w0p4nb3zaq",
        borrowDate: "2024-08-01",
        returnDate: null,
      },
    ],
  },
  {
    id: "0cok9w0p4nb3zbv",
    name: "John Doe",
    email: "john.doe@example.com",
    role: UserRole.Teacher,
    departmentIDs: ["0cok9w0p4nb3zaa"],
    assignedBookIDs: ["0cok9w0p4nb3zaq", "0cok9w0p4nb3zap"],
    borrowedBooks: [],
  },
  {
    id: "0cok9w0p4nb3zcv",
    name: "Mary Smith",
    email: "mary.smith@example.com",
    role: UserRole.Admin,
    departmentIDs: ["0cok9w0p4nb3zac"],
    assignedBookIDs: [],
    borrowedBooks: [],
  },
];

// Mock Books
const books: Book[] = [
  {
    id: "0cok9w0p4nb3zaq",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    borrowedBy: {
      userId: users[0].id, // Alice Johnson
      borrowDate: "2024-08-01",
      returnDate: null,
    },
    departmentIDs: [users[0].departmentIDs[0], users[0].departmentIDs[1]], // Departments of Alice Johnson
  },
  {
    id: "0cok9w0p4nb3zap",
    title: "Clean Code",
    author: "Robert C. Martin",
    borrowedBy: null,
    departmentIDs: [users[1].departmentIDs[0]], // Department of John Doe
  },
  {
    id: "0cok9w0p4nb3zax",
    title: "Design Patterns",
    author: "Erich Gamma",
    borrowedBy: null,
    departmentIDs: [users[0].departmentIDs[1]], // Second department of Alice Johnson
  },
];

// Mock Departments
const departments: Department[] = [
  {
    id: "0cok9w0p4nb3zaa",
    description: "Computer Science",
    userIDs: [
      { userId: users[0].id, role: users[0].role }, // Alice Johnson
      { userId: users[1].id, role: users[1].role }, // John Doe
    ],
    bookIDs: [books[0].id, books[1].id], // Books in Computer Science
  },
  {
    id: "0cok9w0p4nb3zab",
    description: "Software Engineering",
    userIDs: [
      { userId: users[0].id, role: users[0].role }, // Alice Johnson
    ],
    bookIDs: [books[0].id, books[2].id], // Books in Software Engineering
  },
  {
    id: "0cok9w0p4nb3zac",
    description: "Administration",
    userIDs: [
      { userId: users[2].id, role: users[2].role }, // Mary Smith
    ],
    bookIDs: [],
  },
];

export { users, books, departments };
