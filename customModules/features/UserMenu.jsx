import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { logout } from 'modules/utility/onboarding/SignIn.js';
import { fetchPost } from '/modules/utility/fetch';
import Link from 'next/link';
import useUserStore from '../../hooks/userStore';

const UserMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [userIcon, setUserIcon] = useState('');
  const router = useRouter();
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [props]);

  const handleDocumentClick = (event) => {
    // event.preventDefault();
    const isClickWithinImage = event.target.classList.contains('avatar');
    if (
      !isClickWithinImage &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = React.useCallback(() => {
    console.log('Toggling menu...');
    setIsMenuOpen(!isMenuOpen);
    console.log('isMenuOpen after toggle:', isMenuOpen);
  });

  const handleCart = () => {
    // Handle cart logic
  };

  const handleLogout = (e) => {
    logout(props._setLoggedIn);
    router.push('/');
  };

  return (
    <div className='relative group'>
      <div className='w-8 h-8 rounded-full cursor-pointer' onClick={toggleMenu}>
        {!props._loggedIn?.icon ? (
          <UserIconSkeleton
            toggleMenu={toggleMenu}
            handleLogout={handleLogout}
            menuRef={menuRef}
            isMenuOpen={isMenuOpen}
          />
        ) : (
          <img
            className='rounded-full w-8 h-8 avatar'
            src={props._loggedIn.icon} // Use a placeholder image if userIcon is empty
          />
        )}
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10 top-[54px]'
        >
          <ul className='divide-y divide-gray-100'>
            <li>
              <Link
                href={'/p'}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

const UserIconSkeleton = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = React.useCallback(() => {
    console.log('Toggling menu...');
    setIsMenuOpen(!isMenuOpen);
    console.log('isMenuOpen after toggle:', isMenuOpen);
  });

  const handleLogout = (e) => {
    logout(props._setLoggedIn);
    router.push('/');
  };

  return (
    <div className='relative'>
      <div
        onClick={toggleMenu}
        className='w-10 h-10 rounded-full bg-gray-200 animate-pulse'
      ></div>
      {isMenuOpen && (
        <div
          ref={props.menuRef}
          className='absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10 top-11'
        >
          <ul className='divide-y divide-gray-100'>
            <li>
              <Link
                href={'/p'}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
