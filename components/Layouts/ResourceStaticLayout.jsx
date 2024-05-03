import React from 'react';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from '@mui/icons-material';

// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Wave } from '../icons';

const ResourceStaticLayout = ({ children }) => {
  const router = useRouter();
  const sidebarItems = [
    {
      path: '/faq',
      label: 'FAQs',
      icon: <Wave className='w-[20px] h-[20px]' />,
    },
    {
      path: '/policies',
      label: 'Policies',
      icon: <VideocamOutlinedIcon className='w-[20px] h-[20px] bg-inherit' />,
    },
    {
      path: '/question',
      label: 'Guides',
      icon: (
        <ConfirmationNumberOutlinedIcon className='w-[20px] h-[20px] bg-inherit' />
      ),
    },
  ];
  const rightSideDisplay = [
    {
      buttonChat: (
        <div className='p-8 space-y-5 items-center justify-center flex flex-col'>
          <p className='text-3xl font-semibold md:text-left text-center w-[162px]'>
            Still got question?
          </p>
          <button className='md:px-7 px-14 py-2 bg-[#404040] text-[16px] font-medium rounded-sm border'>
            Hey, Fidio
          </button>
        </div>
      ),
    },
    {
      contentMenu: (
        <div className=' font-medium text-[10px] md:text-[14px]'>
          <h3 className=' uppercase  pb-4 text-[#A3A3A3]'>Contents</h3>
          <ul className='flex flex-col gap-y-2 text-[#A3A3A3] cursor-pointer'>
            {[
              { label: 'Privacy policy', href: '/policies/privacy' },
              { label: 'Terms of use', href: '/policies/terms' },
              { label: 'Compliance and legal', href: '/policies/compliance' },
            ].map(({ label, href }) => (
              <li
                key={href}
                className={cn(
                  'text-[#A3A3A3] cursor-pointer',
                  router.pathname === href && 'text-white'
                )}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className='flex w-full bg-dashBg font-lexend min-h-full flex-col md:flex-row'>
      <div className='w-[200px] h-[200px] hidden md:block '>
        <div className=''>
          <ul className='space-y-2'>
            {sidebarItems.map(({ path, label, icon }) => {
              let isActive =
                router.pathname === path ||
                (router.pathname.startsWith(`${path}/`) && path !== '/faq');
              return (
                <li
                  key={path}
                  className={cn(
                    'py-3 px-4 text-white cursor-pointer',
                    isActive
                      ? 'bg-gradient-to-r from-whiteGradient border-l-4 border-accentY gradient'
                      : 'text-dashtext '
                  )}
                >
                  <Link
                    href={path}
                    className='font-lexend  flex items-center gap-x-2 cursor-pointer'
                  >
                    {icon ? <div>{icon}</div> : ''}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='flex-1 pb-8'>{children}</div>
      {router.pathname === '/faq' ? (
        <div className='rounded-md w-[330px] py-4 md:w-[220px] mx-auto h-[204px] bg-whiteGradient'>
          {rightSideDisplay.find(({ buttonChat }) => buttonChat)?.buttonChat}
        </div>
      ) : (
        <div className='hidden md:block rounded-md w-[330px] py-2 md:w-[220px] mx-auto h-[204px] '>
          {rightSideDisplay.find(({ contentMenu }) => contentMenu)?.contentMenu}
        </div>
      )}
    </div>
  );
};

export default ResourceStaticLayout;
