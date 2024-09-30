import { logout } from '@/app/lib/auth/auth';
import {
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ReactNode } from 'react';

export default function UserProfileOptions({
  router,
  userProfileClosed,
}: Readonly<{
  router: AppRouterInstance;
  userProfileClosed: boolean;
}>) {
  const handleLogout = () => logout();
  const handleViewProfile = () => router.push('/profile');

  const animation = userProfileClosed
    ? 'opacity-0 lg:opacity-100 lg:animate-slide-to-bottom'
    : 'opacity-100 lg:animate-slide-from-bottom';

  return (
    <ul
      className={`bg-yellow-500 font-medium shadow-lg py-3 px-2 lg:p-4 lg:w-full rounded-lg lg:rounded-none lg:static absolute top-20 z-10 right-4  transition-opacity duration-500 ease-in-out ${animation}`}
    >
      <ListItem text={'My profile'} onClick={handleViewProfile}>
        <UserIcon className="size-5" />
      </ListItem>
      <ListItem text={'Logout'} onClick={handleLogout}>
        <ArrowLeftStartOnRectangleIcon className="size-5" />
      </ListItem>
    </ul>
  );
}

function ListItem({
  text,
  onClick,
  children,
}: Readonly<{
  text: string;
  onClick: () => void;
  children?: ReactNode;
}>) {
  return (
    <li className="w-full p-3  hover:underline rounded">
      <button onClick={onClick} className="flex items-center gap-2">
        {children}
        <span>{text}</span>
      </button>
    </li>
  );
}
