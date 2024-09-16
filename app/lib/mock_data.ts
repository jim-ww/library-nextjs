import {
  Book,
  BookStatus,
  User,
  UserRole,
  type Department,
} from './definitions';

const departments: Department[] = [
  { id: 1, name: 'Computer Science' },
  { id: 2, name: 'Software Engineering' },
  { id: 3, name: 'Information Technology' },
];

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: UserRole.Student,
    departmentIDs: [departments[0].id],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: UserRole.Teacher,
    departmentIDs: [departments[0].id, departments[1].id],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: UserRole.Student,
    departmentIDs: [departments[1].id],
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    role: UserRole.Student,
    departmentIDs: [departments[2].id],
  },
  {
    id: 5,
    name: 'Admin User',
    email: 'admin@example.com',
    role: UserRole.Admin,
    departmentIDs: [],
  },
];

const books: Book[] = [
  {
    id: 1,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    state: {
      status: BookStatus.Borrowed,
      userId: users[0].id,
      borrowDate: '2024-08-01',
      returnDate: '2024-08-15',
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 2,
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma',
    state: {
      status: BookStatus.Assigned,
      userId: users[1].id,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 3,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    state: {
      status: BookStatus.Available,
      userId: null,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[0].id, departments[1].id],
  },
  {
    id: 4,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    state: {
      status: BookStatus.Borrowed,
      userId: users[2].id,
      borrowDate: '2024-07-20',
      returnDate: '2024-08-10',
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 5,
    title: 'Code Complete',
    author: 'Steve McConnell',
    state: {
      status: BookStatus.Available,
      userId: null,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 6,
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    state: {
      status: BookStatus.Assigned,
      userId: users[1].id,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 7,
    title: 'Head First Design Patterns',
    author: 'Eric Freeman',
    state: {
      status: BookStatus.Available,
      userId: null,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 8,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    state: {
      status: BookStatus.Borrowed,
      userId: users[3].id,
      borrowDate: '2024-08-05',
      returnDate: '2024-08-25',
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 9,
    title: "You Don't Know JS",
    author: 'Kyle Simpson',
    state: {
      status: BookStatus.Available,
      userId: null,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[0].id, departments[2].id],
  },
  {
    id: 10,
    title: 'The Art of Computer Programming',
    author: 'Donald Knuth',
    state: {
      status: BookStatus.Assigned,
      userId: users[0].id,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 11,
    title: 'Effective Java',
    author: 'Joshua Bloch',
    state: {
      status: BookStatus.Borrowed,
      userId: users[2].id,
      borrowDate: '2024-07-30',
      returnDate: '2024-08-14',
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 12,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    state: {
      status: BookStatus.Available,
      userId: null,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[0].id, departments[1].id],
  },
  {
    id: 13,
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    state: {
      status: BookStatus.Borrowed,
      userId: users[3].id,
      borrowDate: '2024-07-18',
      returnDate: '2024-08-08',
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 14,
    title: 'The Clean Coder',
    author: 'Robert C. Martin',
    state: {
      status: BookStatus.Assigned,
      userId: users[2].id,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 15,
    title: 'Test-Driven Development: By Example',
    author: 'Kent Beck',
    state: {
      status: BookStatus.Available,
      userId: null,
      borrowDate: null,
      returnDate: null,
    },
    departmentIDs: [departments[0].id],
  },
];

export { books, departments, users };
