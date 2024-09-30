import { UserRole, type User } from '@/app/lib/definitions';
import {
  BuildingLibraryIcon,
  DocumentTextIcon,
  InboxStackIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function NavBar({
  classname,
  user,
}: Readonly<{ classname?: string; user?: User }>) {
  const iconClass = 'size-6';

  return (
    <nav className={classname ?? ''}>
      <ul className="text-white flex flex-col md:flex-row lg:flex-col  ">
        <ListItem link="/" text="Dashboard">
          <Squares2X2Icon className={iconClass} />
        </ListItem>

        <ListItem link="/departments" text="Departments">
          <BuildingLibraryIcon className={iconClass} />
        </ListItem>

        <ListItem link="/books" text="All books">
          <DocumentTextIcon className={iconClass} />
        </ListItem>

        <ListItem link="/books?inHand=1" text="Books in hand">
          <InboxStackIcon className={iconClass} />
        </ListItem>

        {user?.role === UserRole.Admin && (
          <ListItem link="/users?role=admin" text="All administrators">
            <UsersIcon className={iconClass} />
          </ListItem>
        )}
      </ul>
    </nav>
  );
}

function ListItem({
  link,
  text,
  children,
}: Readonly<{ link: string; text: string; children?: ReactNode }>) {
  return (
    <li>
      <Link
        href={link}
        className=" hover:bg-cyan-800 flex md:flex-col md:items-center lg:items-start lg:flex-row gap-1 md:gap-2 p-2 lg:pl-5 lg:pr-14 "
      >
        {children}
        <span>{text}</span>
      </Link>
    </li>
  );
}
