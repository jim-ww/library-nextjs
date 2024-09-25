'use client';

import { type User } from '@/app/lib/definitions';

import { useRouter } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import UserProfileOptions from './UserProfileOptions';
import { Bars3Icon } from '@heroicons/react/20/solid';
import NavBar from './NavBar';
import UserProfileBlock from './UserProfileBlock';

export function Panel({ user }: Readonly<{ user: User | null }>) {
  const [mobileMenuClosed, setMobileMenuClosed] = useState(true);
  const [userProfileClosed, setUserProfileClosed] = useState(true);
  const router = useRouter();

  if (!user) {
    return;
  }

  const handleSetMobileMenuClosed = () =>
    setMobileMenuClosed(!mobileMenuClosed);

  return (
    <>
      <div className="bg-blue-950 whitespace-nowrap md:w-screen lg:w-auto lg:h-screen sticky top-0 left-0">
        <div className="flex lg:flex-col items-center lg:items-start lg:h-full ">
          <MobileMenuButton setMobileMenuClosed={handleSetMobileMenuClosed} />

          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold p-2 lg:p-5 lg:pb-4">
            Next Library
          </h1>

          {user && (
            <>
              {/* NavBar for desktop && tablets */}
              <NavBar classname="hidden md:inline" user={user} />

              {/* fill remaining space */}
              <div className="flex-grow" />

              {/* UserProfileOptions for desktop */}
              <UserProfileOptions
                router={router}
                userProfileClosed={userProfileClosed}
              />

              <UserProfileBlock
                user={user}
                userProfileClosed={userProfileClosed}
                toggleUserProfileMenu={
                  () => setUserProfileClosed(!userProfileClosed) // ? handle animation for user options separately based on user input
                }
              />
            </>
          )}
        </div>
      </div>

      <MobileMenu user={user} mobileMenuClosed={mobileMenuClosed} />
    </>
  );
}

const MobileMenu = ({
  user,
  mobileMenuClosed,
}: {
  user: User;
  mobileMenuClosed: boolean;
}) => {
  return (
    <div
      className={`bg-blue-950 absolute left-0 top-16 bottom-0 p-2 z-50 w-full md:hidden ${
        mobileMenuClosed ? 'animate-slide-from-left' : 'animate-slide-to-left'
      }`}
    >
      <NavBar user={user} />
    </div>
  );
};

const MobileMenuButton = ({
  setMobileMenuClosed: handleSetMobileMenuClosed,
}: {
  setMobileMenuClosed: () => void;
}) => (
  <button
    type="button"
    className="md:hidden p-4"
    onClick={handleSetMobileMenuClosed}
  >
    <Bars3Icon className="size-6 text-white" />
  </button>
);
