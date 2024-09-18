import type { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Panel } from './ui/components/Panel';
import { users } from './lib/mock_data';
import type { User } from './lib/definitions';

export const metadata: Metadata = {
  title: 'Next Library',
  description: 'Library management app written in NextJS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User | null = users[0]; // TODO await getCurrentUser();

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
