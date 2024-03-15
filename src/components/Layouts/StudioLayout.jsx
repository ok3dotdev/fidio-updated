import React from 'react';
import StudioNav from '@/components/Layouts/StudioNav';
import Sidebar from '@/components/Layouts/Sidebar';

const StudioLayout = (props) => {
  const { children } = props;
  return (
    <div className='flex flex-col h-screen fixed w-full'>
      <StudioNav {...props} />
      <div className='flex flex-1'>
        <Sidebar {...props} />
        <div className='flex-1 p-4 bg-dashBg overflow-y-scroll h-full'>
          <div style={{ maxHeight: '89vh', overflowY: 'auto' }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default StudioLayout;
