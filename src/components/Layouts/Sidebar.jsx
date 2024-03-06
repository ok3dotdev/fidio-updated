import React from 'react'
import { useRouter } from 'next/router';
import {cn} from '../../lib/utils'
import Link from 'next/link';




const Sidebar = () => {

  const router = useRouter();

  const sidebarItems = [
    { path: '/studio', label: 'Studio Home' },
    { path: '/studio/events', label: 'Events' },
    { path: '/revenue', label: 'Revenue' },
    { path: '/settings', label: 'Settings' },
    { path: '/logout', label: 'Logout' }
  ];
  return (
     <div className="bg-dashSides w-[240px] hidden md:block">
      <ul className="">
        {sidebarItems.map(({ path, label }) => (
          <li key={path} className={cn('py-4 px-2', router.pathname === path ? 'text-accentY font-bold font-sans bg-dashBg border-l-4 border-accentY': 'text-white font-normal') }>
            <Link href={path} className='font-sans'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar