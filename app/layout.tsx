import type { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Panel } from './ui/components/Panel';

export const metadata: Metadata = {
  title: 'Next Library',
  description: 'Library management app written in NextJS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased lg:flex`}>
        <Panel />
        {children}
      </body>
    </html>
  );
}
