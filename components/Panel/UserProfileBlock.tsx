import { type User } from '@/app/lib/definitions';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

export default function UserProfileBlock({
  user,
  userProfileClosed,
  toggleUserProfileMenu,
}: Readonly<{
  user: User;
  userProfileClosed: boolean;
  toggleUserProfileMenu: () => void;
}>) {
  return (
    <button
      className="flex lg:flex-col lg:w-full text-start"
      type="button"
      onClick={toggleUserProfileMenu}
    >
      {/* //* User Profile */}
      <div className="flex flex-col bg-yellow-500 text-black p-4 lg:w-full z-20">
        <p className="font-semibold text-xs">
          {(user.role + ' ROLE').toUpperCase()}
        </p>
        <div className="flex items-center">
          <span className="font-bold">{user.name}</span>
          {userProfileClosed ? (
            <ChevronUpIcon className="size-6 ml-auto " />
          ) : (
            <ChevronDownIcon className="size-6 ml-auto " />
          )}
        </div>
      </div>
    </button>
  );
}
