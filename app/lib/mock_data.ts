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
  { id: 4, name: 'Data Science' },
  { id: 5, name: 'Cybersecurity' },
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
  {
    id: 6,
    name: 'Clara Evans',
    email: 'clara.evans@example.com',
    role: UserRole.Student,
    departmentIDs: [departments[3].id],
  },
  {
    id: 7,
    name: 'David Green',
    email: 'david.green@example.com',
    role: UserRole.Teacher,
    departmentIDs: [departments[2].id, departments[4].id],
  },
  {
    id: 8,
    name: 'Eve White',
    email: 'eve.white@example.com',
    role: UserRole.Student,
    departmentIDs: [departments[4].id],
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
      expectedReturnDate: '2024-09-01',
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 3,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    state: {
      status: BookStatus.Available,
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
      expectedReturnDate: '2024-09-05',
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 7,
    title: 'Head First Design Patterns',
    author: 'Eric Freeman',
    state: {
      status: BookStatus.Available,
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
    title: 'The Clean Code',
    author: 'Robert C. Martin',
    state: {
      status: BookStatus.Assigned,
      userId: users[2].id,
      expectedReturnDate: '2024-09-15',
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 15,
    title: 'Test-Driven Development: By Example',
    author: 'Kent Beck',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 16,
    title: 'Deep Learning',
    author: 'Ian Goodfellow',
    state: {
      status: BookStatus.Borrowed,
      userId: users[5].id,
      borrowDate: '2024-08-12',
      returnDate: '2024-08-30',
    },
    departmentIDs: [departments[3].id],
  },
  {
    id: 17,
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell',
    state: {
      status: BookStatus.Assigned,
      userId: users[6].id,
      expectedReturnDate: '2024-09-01',
    },
    departmentIDs: [departments[4].id],
  },
  {
    id: 18,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 19,
    title: 'Deep Learning',
    author: 'Ian Goodfellow',
    state: {
      status: BookStatus.Borrowed,
      userId: users[1].id,
      borrowDate: '2024-08-10',
      returnDate: '2024-08-20',
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 20,
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell',
    state: {
      status: BookStatus.Assigned,
      userId: users[3].id,
      expectedReturnDate: '2024-09-05',
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 21,
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 22,
    title: 'Learning React',
    author: 'Alex Banks',
    state: {
      status: BookStatus.Borrowed,
      userId: users[2].id,
      borrowDate: '2024-08-05',
      returnDate: '2024-08-18',
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 23,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id, departments[2].id],
  },
  {
    id: 24,
    title: 'The Go Programming Language',
    author: 'Alan Donovan',
    state: {
      status: BookStatus.Borrowed,
      userId: users[3].id,
      borrowDate: '2024-08-01',
      returnDate: '2024-08-15',
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 25,
    title: 'Grokking Algorithms',
    author: 'Aditya Y. Bhargava',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 26,
    title: 'Fluent Python',
    author: 'Luciano Ramalho',
    state: {
      status: BookStatus.Borrowed,
      userId: users[2].id,
      borrowDate: '2024-07-29',
      returnDate: '2024-08-12',
    },
    departmentIDs: [departments[1].id],
  },
  {
    id: 27,
    title: 'Pro Git',
    author: 'Scott Chacon',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 28,
    title: 'The Rust Programming Language',
    author: 'Steve Klabnik',
    state: {
      status: BookStatus.Borrowed,
      userId: users[3].id,
      borrowDate: '2024-07-30',
      returnDate: '2024-08-10',
    },
    departmentIDs: [departments[2].id],
  },
  {
    id: 29,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    state: {
      status: BookStatus.Assigned,
      userId: users[4].id,
      expectedReturnDate: '2024-08-25',
    },
    departmentIDs: [departments[0].id],
  },
  {
    id: 30,
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson',
    state: {
      status: BookStatus.Available,
    },
    departmentIDs: [departments[0].id],
  },
];

export { books, departments, users };
