import type { Metadata } from "next";
import "@/app/ui/global.css";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import { cookies } from "next/headers";
import type { User } from "./lib/definitions";
import useAuthStore from "./lib/store";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "First Next App",
  description: "Library management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authStore = useAuthStore();
  const router = useRouter();
  const user: User | null = authStore.user;

  if (!user) {
    router.push("/login");
    return;
  }

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
