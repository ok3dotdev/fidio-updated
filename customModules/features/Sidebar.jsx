import React, { useCallback } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { logout } from 'modules/utility/onboarding/SignIn.js';
import { useRouter } from 'next/router';

const Sidebar = (props) => {
  const router = useRouter();
  const { query, asPath } = router;

  const handleLogout = (e) => {
    logout();
    router.push('/');
  };

  return (
    <div className='bg-black h-full px-2 md:px-6 text-sm font-medium text-dashtext shadow-lg'>
      <div className=' h-full flex flex-col pb-12 '>
        <div className='mb-8 flex items-center flex-col gap-8 pt-4'>
          <div className='w-12  h-12 rounded-full'>
            <a href='/p'>
              <img
                className='rounded-full'
                src={props?.userData?.profileData?.user?.icon}
                alt=''
              />
            </a>
          </div>
          <div className='flex flex-col items-center gap-y-8 mt-6'>
            <div className='flex w-full justify-start gap-x-8'>
              <HomeOutlinedIcon />
              <p className='hidden md:block'>Home</p>
            </div>
            <div className='flex w-full justify-start gap-x-8'>
              <WatchLaterOutlinedIcon />
              <p className='hidden md:block'>Recents</p>
            </div>
            <div className='flex w-full justify-start gap-x-8'>
              <VideoLibraryOutlinedIcon />
              <p className='hidden md:block'>Playlists</p>
            </div>
            <div className='flex w-full justify-start gap-x-8'>
              <FavoriteBorderOutlinedIcon />
              <p className='hidden md:block'>Favourites</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between flex-col pt-2 h-full basis-1/2'>
          <div className='w-full'>
            <hr className='w-full pb-2 border-dashBorder' />
            <p className='text-center'>Following</p>
          </div>
          <div className='flex flex-col items-center gap-y-8 pb-8'>
            <div className='flex w-full justify-start gap-x-8'>
              <SettingsOutlinedIcon />
              <p className='hidden md:block'>Settings</p>
            </div>
            <div className='flex w-full justify-start gap-x-8'>
              <ExitToAppOutlinedIcon />
              <p
                onClick={handleLogout}
                className='hidden md:block cursor-pointer'
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
