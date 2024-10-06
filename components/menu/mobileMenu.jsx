import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { logout } from 'modules/utility/onboarding/SignIn.js';

const MobileMenu = (props) => {
  // const router = useRouter();
  const handleLogout = (e) => {
    // logout(props._setLoggedIn);
    // router.push('/');
  };
  return (
    <Sheet className='p-2 bg-dashBg'>
      <SheetTrigger asChild>
        <Button variant='outline' className=' dark:border-none '>
          <svg
            width='30'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.7761 13.7761 8 13.5 8H1.5C1.22386 8 1 7.7761 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col h-full px-4 bg-dashBg'>
        <SheetHeader>
          <SheetTitle>
            <Link href='/browse'>
              <img src='/img/internal/frame2.png' className='w-24' alt='logo' />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className='mt-8 w-full'>
          <Link
            className='hover:bg-slate-700 mb-4 px-2 py-2 rounded-md flex items-center'
            href='/browse'
          >
            Browse
          </Link>
          <Link
            className='hover:bg-slate-700 mb-4 px-2 py-2 rounded-md flex items-center'
            href='/blog'
          >
            Blog
          </Link>
          {/* <Link
            className='hover:bg-slate-700 mb-4 px-2 py-2 rounded-md flex items-center'
            href='/studio'
          >
            Studio
          </Link> */}
        </div>

        <div className='flex-grow'></div>

        <SheetFooter className='w-full gap-2 flex-col'>
          {props?._loggedIn ? (
            <div>
              <Button
                onClick={handleLogout}
                className='dark:bg-slate-700 dark:text-white dark:hover:text-black font-medium p-2 text-center rounded-md w-full'
                type='submit'
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link
                href='/signin'
                className='dark:bg-slate-700 dark:text-white dark:hover:text-black font-medium p-2 text-center rounded-md'
                type='submit'
              >
                Sign In
              </Link>
              <Link
                href='/signup'
                className=' dark:bg-white dark:text-black font-medium p-2 text-center rounded-md'
                type='submit'
              >
                Sign Up
              </Link>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
