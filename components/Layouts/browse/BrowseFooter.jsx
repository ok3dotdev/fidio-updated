import Link from 'next/link';
const BrowseFooter = () => {
  return (
    <div>
      <div className='flex w-full'>
        <div className='p-4 py-24 max-w-screen-xl mx-auto flex justify-between w-full flex-col md:flex-row gap-y-8'>
          <Link href='/'>
            <img
              src='/img/internal/frame2.png'
              alt=''
              className='lg:w-[120px] w-[90px] h-auto'
            />
          </Link>
          <div className='flex flex-col md:flex-row md:w-[50%] justify-between items-start gap-y-8'>
            <div>
              <h3 className='font-semibold text-lg'>Contact</h3>
              <ul className='flex flex-col mt-8 space-y-4 text-dashtext'>
                <li>
                  <Link href='#' className='hover:text-white'>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Spotify Playlist
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-lg'>Resources</h3>
              <ul className='flex flex-col mt-8 space-y-4 text-dashtext'>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    target='_blank'
                    href='/policies/terms'
                    className='hover:text-white'
                  >
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link
                    target='_blank'
                    href='/policies/privacy'
                    className='hover:text-white'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    target='_blank'
                    href='/faq'
                    className='hover:text-white'
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link
                    target='_blank'
                    href='/blog'
                    className='hover:text-white'
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <h3 className='font-semibold text-lg'>Connect</h3>
              <ul className='flex flex-col mt-8 space-y-4 text-dashtext'>
                <li>
                  <Link href='#' className='hover:text-white'>
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    X
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
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
