import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MobileMenu from '@/components/menu/mobileMenu';
import useMediaQuery from '../../../hooks/use-media-query';
import UserAvatar from '@/components/Avatar';

const BrowseHeader = (props) => {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });
  return (
    <div className='w-full flex justify-between p-4 py-8 max-w-screen-xl mx-auto z-30 absolute top-0 left-0 right-0'>
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
            {props._islogedIn}
            <UserAvatar {...props} />
          </div>
          <Link
            href='/signin'
            className='text-white dark:border-white dark:bg-transparent font-semibold border-[0.5px] rounded-md flex p-2 hover:opacity-[90%]'
            type='submit'
          >
            Login
          </Link>
          <Link
            href='/signin'
            className='dark:bg-accentY bg-opacity-60 font-semibold dark:text-white dark:hover:bg-accentY dark:hover:bg-opacity-100 flex p-2 rounded-sm items-center hover:opacity-[90%]'
            type='submit'
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <MobileMenu {...props} />
      )}
    </div>
  );
};

export default BrowseHeader;
