import {
  BuildingLibraryIcon,
  DocumentTextIcon,
  InboxStackIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function NavBar() {
  const itemIconClassname = 'h-6 w-6';

  return (
    <nav className="flex flex-col gap-2 text-white ">
      <ul className="h-max w-max">
        <ListItem link="/" text="Dashboard">
          <Squares2X2Icon className={itemIconClassname} />
        </ListItem>

        <ListItem link="/departments" text="Departments">
          <BuildingLibraryIcon className={itemIconClassname} />
        </ListItem>

        <ListItem link="/books" text="All books">
          <DocumentTextIcon className={itemIconClassname} />
        </ListItem>

        <ListItem link="/books?inHand=true" text="Books in hand">
          <InboxStackIcon className={itemIconClassname} />
        </ListItem>

        <ListItem link="/users?type=administrator" text="All administrators">
          <UsersIcon className={itemIconClassname} />
        </ListItem>
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
        className="flex gap-4 items-center p-2 pl-5 pr-14 hover:bg-cyan-800"
      >
        {children}
        <span>{text}</span>
      </Link>
    </li>
  );
}
