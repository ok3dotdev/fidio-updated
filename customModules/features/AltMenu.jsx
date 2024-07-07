import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import UserMenu from './UserMenu';
import MobileMenu from '../../components/menu/mobileMenu';
import useMediaQuery from '../../hooks/use-media-query';

const AltMenu = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  function passOveride() {
    setIsCartOpen(true);
  }

  const handleDocumentClick = (event) => {
    const isclickIcon = event.target.classList.contains('MuiSvgIcon-root');
    if (
      !isclickIcon &&
      cartRef.current &&
      !cartRef.current.contains(event.target)
    ) {
      // ('worked');
      setIsCartOpen(false);
    }
  };

  // ('menu', props);

  return (
    <div className='bg-transparent z-40 relative h-[66px] lg:h-[80px]'>
      <div className='max-w-7xl mx-auto flex justify-between pt-4 pb-4 items-center px-3 lg:px-5 h-full'>
        <div>
          <Link className='w-[150px] h-auto' href='/home'>
            <img
              src='/img/internal/frame2.png'
              alt=''
              width=''
              className='w-[90px] lg:w-[90px] cursor-pointer object-contain aspect-auto'
            />
          </Link>
        </div>
        <div className='lg:flex gap-4'>
          <div className='flex justify-center items-center gap-4 cursor-pointer'>
            <UserMenu {...props} />
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltMenu;
