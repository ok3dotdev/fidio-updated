import React, { useState } from 'react';
import StudioNav from '@/components/Layouts/StudioNav';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from '@/components/Layouts/Sidebar';
import Link from 'next/link';
import UserMenu from '../../../customModules/features/UserMenu';

import { Wave } from '../icons';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const StudioLayout = (props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username } = props?._loggedIn;
  const capitalizedUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : '';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <div className='flex h-screen w-full font-lexend relative'>
      <Sidebar {...props} />
      <div className='flex flex-1 flex-col'>
        <StudioNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className='flex-1 bg-dashBg overflow-y-scroll h-full scroll-smooth'>
          <div style={{ margin: '2rem 1rem' }}>
            {props.children}
            <Toaster />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='absolute top-0 flex flex-col items-end bg-dashBg h-screen w-full'>
          <div className='flex justify-between w-full p-4 items-center border-b-[1px] border-dashBorder'>
            <img
              src='/img/internal/frame2.png'
              alt='Logo'
              className='h-7 w-auto'
            />
            <div
              className='w-8 h-8 flex flex-col justify-center'
              onClick={toggleMenu}
            >
              <div
                className={`w-full h-[2px] bg-white transition-all transform ${
                  isMenuOpen ? 'rotate-45' : ''
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-white transition-all my-1 opacity-${
                  isMenuOpen ? '0' : '100'
                }`}
              ></div>
              <div
                className={`w-full h-[2px] bg-white transition-all transform ${
                  isMenuOpen ? '-rotate-45 -mt-[1rem]' : ''
                }`}
              ></div>
            </div>
          </div>
          <div className='px-2 w-full'>
            <ul className='mt-12 space-y-2 w-full'>
              {sidebarItems.map(({ path, label, icon }) => {
                let isActive =
                  router.pathname === path ||
                  (router.pathname.startsWith(`${path}/`) &&
                    path !== '/studio');
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
          </div>
          <div className='px-2 gap-4 w-full space-y-2 mt-8'>
            <button className='border-[1px] border-dashBorder p-3 font-lexend font-medium rounded-[6px] flex justify-center items-center w-full'>
              Start instant stream
            </button>
            <Link
              href='/studio/events/create'
              className='bg-accentY hover:bg-accentY p-3 font-lexend font-medium rounded-[6px] flex justify-center items-center'
            >
              Create new event
            </Link>
          </div>

          <div className='absolute bottom-0 left-0 w-full mb-8 '>
            <div className='px-'>
              <div className='mt-8 flex gap-2 items-center border-t border-divide pt-4 px-4'>
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
      )}
    </div>
  );
};

export default StudioLayout;
