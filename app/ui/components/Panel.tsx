import type { User } from '@/app/lib/definitions';
import { users } from '@/app/lib/mock_data';
import {
  BuildingLibraryIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  InboxStackIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function Panel() {
  const user: User | null = users[0]; // TODO await getCurrentUser();

  return (
    <div className="bg-blue-950 whitespace-nowrap sticky top-0 lg:top-auto w-screen lg:w-auto lg:h-screen">
      <div className="flex lg:flex-col items-center lg:items-start  lg:h-full">
        <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold p-2 lg:p-5 ">
          Next Library
        </h1>

        {user && (
          <>
            <NavBar />

            {/* Empty div to take up remaining space between NavBar and UserProfile */}
            <div className="flex-grow" />

            {/* User Profile */}
            <div className="flex flex-col bg-yellow-500 text-black p-4 lg:w-full">
              <p className="font-semibold text-xs">
                {(user.role + ' ROLE').toUpperCase()}
              </p>
              <div className="flex">
                <span className="font-bold">{user.name}</span>
                <ChevronDownIcon className="size-6 ml-auto" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function NavBar() {
  const itemIconClassname = 'size-6';

  return (
    <nav>
      <ul className="flex text-white lg:flex-col">
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

        <ListItem link="/users?role=admin" text="All administrators">
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
        className=" hover:bg-cyan-800 rounded flex md:flex-col md:items-center lg:items-start lg:flex-row gap-1 md:gap-2 p-2 lg:pl-5 lg:pr-14"
      >
        {children}
        <span className="hidden md:inline">{text}</span>
      </Link>
    </li>
  );
}
