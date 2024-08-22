import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MobileMenu from '@/components/menu/mobileMenu';
import useMediaQuery from '../../../hooks/use-media-query';
import UserAvatar from '@/components/Avatar';

const WatchHeader = (props) => {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });
  return (
    <div className='w-full flex justify-between p-4 py-2 max-w-screen-7xl mx-auto z-30 top-0 left-0 right-0 md:px-8 items-center'>
      <Link href='/'>
        <img
          src='/img/internal/frame2.png'
          alt=''
          className='lg:w-[120px] w-[90px] h-auto'
        />
      </Link>
      <div className='flex items-center space-x-4'>
        {props._loggedIn ? (
          <div className='flex items-center space-x-4'>
            <UserAvatar {...props} />
            <MobileMenu {...props} />
          </div>
        ) : (
          <div className='flex items-center space-x-4'>
            <Link
              href='/signin'
              className='text-white dark:border-white dark:bg-transparent font-semibold border-[0.5px] rounded-md flex p-2 hover:opacity-[90%]'
            >
              Login
            </Link>
            <Link
              href='/signup'
              className='dark:bg-accentY bg-opacity-60 font-semibold dark:text-white dark:hover:bg-accentY dark:hover:bg-opacity-100 flex p-2 rounded-sm items-center hover:opacity-[90%]'
            >
              Sign Up
            </Link>
            <MobileMenu {...props} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchHeader;
