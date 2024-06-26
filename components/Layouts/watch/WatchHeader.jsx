import Link from 'next/link';
// import { Button } from '@/components/ui/button';

const WatchHeader = () => {
  return (
    <div className='px-4 p-6 w-full'>
      <div className='flex w-full justify-between items-center'>
        <Link href='/'>
          <img
            src='/img/internal/frame2.png'
            alt=''
            className='lg:w-[120px] w-[90px] h-auto'
          />
        </Link>
        {/* <div>
          <input />
        </div> */}
        <div className='space-x-4'>
          <Link
            href={'/signin'}
            variant={'outline'}
            className='text-white dark:border-white dark:bg-transparent font-semibold px-4 border-[1px] py-3 rounded-sm'
          >
            Login
          </Link>
          <Link
            href={'/signin'}
            className='dark:bg-accentY bg-opacity-60 font-semibold dark:text-white dark:hover:bg-accentY dark:hover:bg-opacity-100 px-4  py-3 rounded-sm'
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatchHeader;
