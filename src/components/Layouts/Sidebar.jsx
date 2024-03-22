import React from 'react';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Wave } from '../icons';
import UserMenu from '../../../customModules/features/UserMenu';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = (props) => {
  const router = useRouter();
  const { username } = props?._loggedIn;
  const capitalizedUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : '';
  const sidebarItems = [
    {
      path: '/studio',
      label: 'Studio',
      icon: <Wave className='w-[20px] h-[20px]' />,
    },
    {
      path: '/studio/events',
      label: 'Events',
      icon: <VideocamOutlinedIcon className='w-[20px] h-[20px] bg-inherit' />,
    },
    {
      path: '/studio/revenue',
      label: 'Revenue',
      icon: (
        <ConfirmationNumberOutlinedIcon className='w-[20px] h-[20px] bg-inherit' />
      ),
    },
    {
      path: '/studio/settings',
      label: 'Settings',
      icon: <SettingsOutlinedIcon className='w-[20px] h-[20px] bg-inherit' />,
    },
  ];
  // return (
  //   <ResizablePanelGroup
  //     direction='horizontal'
  //     className='min-h-[200px] max-w-md rounded-lg border'
  //   >
  //     <ResizablePanel defaultSize={250}>
  //       <div className='flex h-full items-center justify-center p-6'>
  //         <span className='font-semibold'>Sidebar</span>
  //       </div>
  //     </ResizablePanel>
  //     <ResizableHandle withHandle />
  //     <ResizablePanel defaultSize={75}>
  //       <div className='flex h-full items-center justify-center p-6'>
  //         <span className='font-semibold'>Content</span>
  //       </div>
  //     </ResizablePanel>
  //   </ResizablePanelGroup>
  // );
  return (
    <div className='bg-dashSides w-[220px] hidden md:block py-8 relative font-lexend'>
      <div className='px-4'>
        <img src='/img/internal/frame2.png' alt='Logo' className='h-8 w-auto' />
      </div>
      <ul className='mt-12 space-y-2'>
        {sidebarItems.map(({ path, label, icon }) => {
          let isActive =
            router.pathname === path ||
            (router.pathname.startsWith(`${path}/`) && path !== '/studio');
          return (
            <li
              key={path}
              className={cn(
                'py-3 px-4 text-white',
                isActive
                  ? 'bg-gradient-to-r from-whiteGradient border-l-4 border-accentY gradient'
                  : 'text-dashtext '
              )}
            >
              <Link
                href={path}
                className='font-lexend flex items-center gap-x-2'
              >
                {icon ? <div>{icon}</div> : ''}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='absolute bottom-0 left-0 w-full mb-8 px-4'>
        <div className=''>
          <div className='bg-foregroundLight h-[240px] w-full rounded-[8px] flex justify-center items-center mb-4'>
            <h3 className='font-lexend text-white'>Advert</h3>
          </div>
          <div className='mt-8 flex gap-2 items-center border-t border-divide border-dashed pt-4'>
            <UserMenu {...props} />
            <div>
              <p className='font-lexend font-bold text-white'>
                {capitalizedUsername}
              </p>
              <p className='font-lexend text-xs text-dashtext'>
                Artist Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
