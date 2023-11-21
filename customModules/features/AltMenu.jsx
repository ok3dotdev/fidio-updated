import Link from 'next/link';

import React, { useState, useEffect, useRef } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserMenu from './UserMenu';
import { Cart } from 'modules/ecommerce/cart';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const AltMenu = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

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
      <div className='max-w-8xl mx-auto flex justify-between pt-4 pb-4 items-center px-3 lg:px-5 h-full'>
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
            <div className='cursor-pointer'>
              <Sheet>
                <SheetTrigger>
                  <ShoppingCartIcon />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Your Cart is Empty</SheetTitle>
                    <SheetDescription className='font-mono'>
                      Please add something to cart to view items
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div ref={cartRef} className='absolute top-0 cursor-pointer'>
              <Cart
                {...props}
                className='text-white'
                open={isCartOpen}
                passOveride={passOveride}
              />
            </div>
            <UserMenu {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltMenu;
