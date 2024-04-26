import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Layouts/Sidebar';
import { Wave } from '../icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';


const FaqLayout = (props) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Check screen size on component mount and window resize
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768); // Assuming 768px is your breakpoint for mobile
    };
    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize); // Check on window resize
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);
  const router = useRouter();

  const sidebarItems = [
    {
      path: '/studio',
      label: 'Studio',
      icon: <Wave className="w-[20px] h-[20px]" />,
    },
    {
      path: '/studio/events',
      label: 'Events',
      icon: <Wave className="w-[20px] h-[20px] bg-inherit" />,
    },
    {
      path: '/studio/revenue',
      label: 'Revenue',
      icon: <Wave className="w-[20px] h-[20px] bg-inherit" />,
    },
  ];

  return (
    <div className="px-2 w-full">
      <ul className="mt-12 space-y-2 w-full">
        {sidebarItems.map(({ path, label, icon }) => {
          let isActive =
            router.pathname === path ||
            (router.pathname.startsWith(`${path}/`) && path !== '/studio');
          return (
            <li
              key={path}
              className={cn(
                'py-3 px-4 text-white',
                isActive
                  ? 'bg-gradient-to-r from-whiteGradient border-l-4 border-accentY gradient'
                  : 'text-dashtext '
              )}
            >
              <Link
                href={path}
                className="font-lexend flex items-center gap-x-2"
              >
                {icon ? <div>{icon}</div> : ''}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqLayout;
