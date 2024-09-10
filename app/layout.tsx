import type { Metadata } from 'next';
import '@/app/ui/global.css';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
import { getCurrentUser } from './lib/actions/users';
import type { User } from './lib/definitions';

export const metadata: Metadata = {
  title: 'First Next App',
  description: 'Library management app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // let user: User | null = null;
  // try {
  //   user = await getCurrentUser();
  // } catch (error) {
  //   console.error("Failed to fetch current user:", error);
  // }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex h-screen`}>
        <NavBar />
        {/* {user ? <LeftPanel user={user} /> : null} */}
        {children}
      </body>
    </html>
  );
}

async function LeftPanel({ user }: { user: User }) {
  return (
    <div>
      <NavBar />
      <UserProfile user={user} />
    </div>
  );
}

async function NavBar() {
  return (
    <nav className="flex flex-col gap-2 p-5 bg-[#05244D] text-white h-full">
      <Link href="/">Dashboard</Link>
      <Link href="/departments">Departments</Link>
      <Link href="/books">All books</Link>
      <Link href="/books?inHand">Books in hand</Link>
      <Link href="/users?type=administrator">All administrators</Link>
    </nav>
  );
}

async function UserProfile({ user }: { user: User }) {
  return (
    <div>
      <h1>{user.role} role</h1>
      <p>Name: {user.name}</p>
    </div>
  );
}
