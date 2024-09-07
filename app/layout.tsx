import type { Metadata } from "next";
import "@/app/ui/global.css";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import type { User } from "./lib/definitions";
import { getSession } from "./lib/session";
import { getUser } from "./lib/actions/users";

export const metadata: Metadata = {
  title: "First Next App",
  description: "Library management app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (!session) return;
  const user = await getUser(session.userId);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex h-screen`}>
        <div>
          <nav className="flex flex-col gap-2 p-5 bg-[#05244D] text-white h-full">
            <Link href="/">Dashboard</Link>
            <Link href="/departments">Departments</Link>
            <Link href="/books">All books</Link>
            <Link href="/books?inHand">Books in hand</Link>
            <Link href="/users?type=administrator">All administrators</Link>
          </nav>
          <UserProfile user={user} />
        </div>
        {children}
      </body>
    </html>
  );
}

const UserProfile = ({ user }: { user: User }) => {
  return (
    <div>
      <h1>{user.role} role</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};
