import type { Metadata } from 'next';
import '@/styles/global.css';
import { Panel } from '../components/Panel/Panel';
import type { User } from './lib/definitions';
import { getCurrentUser } from './lib/data-access/users';
import { inter } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Next Library',
  description: 'Library management app written in NextJS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User | null = await getCurrentUser(); // TODO ? use context or Zustand

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col lg:flex-row`}
      >
        <Panel user={user} />
        {children}
      </body>
    </html>
  );
}
