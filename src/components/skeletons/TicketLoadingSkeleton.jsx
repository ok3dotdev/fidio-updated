import React from 'react';

const TicketLoadingSkeleton = () => {
  return (
    <div
      role='status'
      class='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mt-'
    >
      <div class='flex flex-col p-4 w-full bg-gray-300 rounded-[12px] dark:bg-gray-500 h-[80px]'>
        <div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[18rem] mb-4 animate-pulse'></div>
        <div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse'></div>
      </div>
    </div>
  );
};

export default TicketLoadingSkeleton;
