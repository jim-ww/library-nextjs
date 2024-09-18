'use client';

import type { User } from '@/app/lib/definitions';
import {
  Bars3Icon,
  BuildingLibraryIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  DocumentTextIcon,
  InboxStackIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';

export function Panel({ user }: Readonly<{ user: User }>) {
  const [mobileMenuClosed, setMobileMenuClosed] = useState(true);
  const [userProfileClosed, setUserProfileClosed] = useState(true);

  const iconSize = 'size-6';

  return (
    <>
      <div className="bg-blue-950 whitespace-nowrap sticky top-0 lg:top-auto md:w-screen lg:w-auto lg:h-screen">
        <div className="flex lg:flex-col items-center lg:items-start  lg:h-full">
          {/* // * Mobile menu button  */}
          <button
            type="button"
            aria-controls="menu"
            aria-expanded="false"
            className="md:hidden"
            onClick={() => setMobileMenuClosed(!mobileMenuClosed)}
          >
            <Bars3Icon className={`${iconSize} text-white`} />
          </button>

          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold p-2 lg:p-5 lg:pb-4">
            Next Library
          </h1>

          {user && (
            <>
              <NavBar classname="hidden md:inline" />
              <div className="flex-grow" />
              <UserProfileBubble
                user={user}
                toggleUserProfileMenu={() =>
                  setUserProfileClosed(!userProfileClosed)
                }
              />
            </>
          )}
        </div>
      </div>
      {mobileMenuClosed || (
        <div className="bg-blue-950 whitespace-nowrap absolute left-0 top-16 bottom-0 p-2">
          <NavBar />
        </div>
      )}
      {userProfileClosed || <UserProfileOptions />}
    </>
  );
}

function UserProfileBubble({
  user,
  toggleUserProfileMenu,
}: Readonly<{ user: User; toggleUserProfileMenu: () => void }>) {
  return (
    <div id="menu" className="flex lg:flex-col lg:w-full">
      {/* User Profile */}
      <div className="flex flex-col bg-yellow-500 text-black p-4 lg:w-full">
        <p className="font-semibold text-xs">
          {(user.role + ' ROLE').toUpperCase()}
        </p>
        <button
          type="button"
          className="flex items-center"
          onClick={toggleUserProfileMenu}
        >
          <span className="font-bold">{user.name}</span>
          <ChevronDownIcon className={'size-6 ml-auto hidden md:inline'} />
          <ChevronLeftIcon className={'size-6 inline md:hidden ml-1 '} />
        </button>
      </div>
    </div>
  );
}

function UserProfileOptions() {
  // TODO implement
  return <div>User profile options here...</div>;
}

function NavBar({ classname }: Readonly<{ classname?: string }>) {
  const itemIconClassname = 'size-6';

  return (
    <nav className={classname ?? ''}>
      <ul className="text-white flex flex-col md:flex-row lg:flex-col ">
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
        className=" hover:bg-cyan-800 flex md:flex-col md:items-center lg:items-start lg:flex-row gap-1 md:gap-2 p-2 lg:pl-5 lg:pr-14"
      >
        {children}
        <span>{text}</span>
      </Link>
    </li>
  );
}
