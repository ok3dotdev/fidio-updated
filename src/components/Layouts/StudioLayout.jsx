import React from 'react';
import StudioNav from '@/components/Layouts/StudioNav';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from '@/components/Layouts/Sidebar';

const StudioLayout = (props) => {
  const { children } = props;
  return (
    <div className='flex h-screen fixed w-full font-lexend '>
      <Sidebar {...props} />
      <div className='flex flex-1 flex-col'>
        <StudioNav {...props} />
        <div className='flex-1 bg-dashBg overflow-y-scroll h-full scroll-smooth'>
          <div style={{ margin: '2rem 1rem' }}>
            {children}
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioLayout;
