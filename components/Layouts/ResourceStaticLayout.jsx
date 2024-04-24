import React from 'react';

const ResourceStaticLayout = ({ children }) => {
  return (
    <div className='flex w-full'>
      <div className='w-[200px] bg-red-50'> left</div>
      <div className='flex-1'>{children}</div>
      <div className='w-[200px] bg-blue-50'>right</div>
    </div>
  );
};

export default ResourceStaticLayout;
