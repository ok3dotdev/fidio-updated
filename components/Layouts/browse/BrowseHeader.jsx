import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BrowseHeader = () => {
  return (
    <div className='w-full flex justify-between p-4 py-8 max-w-screen-xl mx-auto z-30 absolute top-0 left-0 right-0'>
      <Link href='/'>
        <img
          src='/img/internal/frame2.png'
          alt=''
          className='lg:w-[120px] w-[90px] h-auto'
        />
      </Link>
      <div className='space-x-4'>
        <Button
          variant={'outline'}
          className='text-white dark:border-white dark:bg-transparent font-semibold'
        >
          Login
        </Button>
        <Button className='dark:bg-accentY bg-opacity-60 font-semibold dark:text-white dark:hover:bg-accentY dark:hover:bg-opacity-100'>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default BrowseHeader;
