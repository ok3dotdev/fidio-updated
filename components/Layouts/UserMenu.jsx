import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/router';
import { UserIconSkeleton } from '/customModules/features/UserMenu';

import { logout } from 'modules/utility/onboarding/SignIn.js';

const UserMenu = (props) => {
  const router = useRouter();
  const handleLogout = (e) => {
    logout(props._setLoggedIn);
    router.push('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {!props._loggedIn?.icon ? (
          <UserIconSkeleton />
        ) : (
          <img
            className='rounded-full w-8 h-8 avatar'
            src={props._loggedIn.icon} // Use a placeholder image if userIcon is empty
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <button
            onClick={handleLogout}
            className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
          >
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
