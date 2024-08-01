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
    <div className='w-full flex justify-between p-4 py-2 max-w-screen-7xl mx-auto z-30 top-0 left-0 right-0 md:px-8'>
      <Link href='/'>
        <img
          src='/img/internal/frame2.png'
          alt=''
          className='lg:w-[120px] w-[90px] h-auto'
        />
      </Link>
      {isDesktop ? (
        <div className='space-x-4 flex'>
          <div className='flex items-center'>
            {/* <UserAvatar {...props} /> */}
          </div>
          <Link
            href='/browse'
            className='text-white dark:border-none dark:bg-transparent font-semibold border-[0.5px] rounded-md flex p-2 hover:opacity-[90%] underline'
            type='submit'
          >
            Browse
          </Link>
          <Link
            href='/blog'
            className='text-white dark:border-none dark:bg-transparent font-semibold border-[0.5px] rounded-md flex p-2 hover:opacity-[90%] underline'
            type='submit'
          >
            Blog
          </Link>
          <>
            {!props._loggedIn && (
              <>
                <Link
                  href='/signin'
                  className='text-white dark:border-white dark:bg-transparent font-semibold border-[0.5px] rounded-md flex p-2 hover:opacity-[90%]'
                  type='submit'
                >
                  Login
                </Link>
                <Link
                  href='/signup'
                  className='dark:bg-accentY bg-opacity-60 font-semibold dark:text-white dark:hover:bg-accentY dark:hover:bg-opacity-100 flex p-2 rounded-sm items-center hover:opacity-[90%]'
                  type='submit'
                >
                  Sign Up
                </Link>
              </>
            )}
          </>
        </div>
      ) : (
        <MobileMenu {...props} />
      )}
    </div>
  );
};

export default WatchHeader;
