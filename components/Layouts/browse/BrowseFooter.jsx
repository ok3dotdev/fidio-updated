import Link from 'next/link';
const BrowseFooter = () => {
  return (
    <div>
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

export default BrowseFooter;
