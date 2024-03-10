import React from 'react'
import { useRouter } from 'next/router';
import {cn} from '../../lib/utils'
import Link from 'next/link';




const Sidebar = () => {

  const router = useRouter();
  console.log(router.pathname)

  const sidebarItems = [
    { path: '/studio', label: 'Studio Home' },
    { path: '/studio/events', label: 'Events' },
    { path: '/studio/revenue', label: 'Revenue' },
    { path: '/studio/settings', label: 'Settings' },
    { path: '/logout', label: 'Logout' }
  ];
  return (
     <div className="bg-dashSides w-[240px] hidden md:block">
      <ul className="">
       {sidebarItems.map(({ path, label }) => {
          let isActive =
            router.pathname === path ||
            (router.pathname.startsWith(`${path}/`) && path !== '/studio');
          return (
            <li
              key={path}
              className={cn(
                'py-4 px-2',
                isActive
                  ? 'text-accentY font-bold font-sans bg-dashBg border-l-4 border-accentY'
                  : 'text-white font-normal'
              )}
            >
              <Link href={path} className='font-sans'>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Sidebar