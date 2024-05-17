import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FeaturedEventSlider from '@/components/FeaturedEventSlider';

const BrowseLayout = (props) => {
  const { children } = props;

  return (
    <div className='relative bg-[#171717] font-lexend'>
      <div className='min-h-[500px] '>
        <div className='w-full flex justify-between p-4 py-8 max-w-screen-2xl mx-auto z-30 absolute top-0 left-0 right-0'>
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
        <div className=' w-full '>
          <FeaturedEventSlider />
        </div>
      </div>
      <div className='min-h-[500px] p-4 py-8 max-w-screen-2xl mx-auto'>
        {children}
      </div>
      <div className='flex w-full'>
        <div className='p-4 py-8 max-w-screen-2xl mx-auto flex justify-between w-full'>
          <Link href='/'>
            <img
              src='/img/internal/frame2.png'
              alt=''
              className='lg:w-[120px] w-[90px] h-auto'
            />
          </Link>
          <div>
            <div>hello</div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='bg-[#262626] h-12 flex justify-center align-items'>
        <div className=' max-w-screen-2xl mx-auto flex justify-between w-full item-center px-4 items-center'>
          <p className='text-[#737373] font-semibold text-sm'>
            c 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowseLayout;
