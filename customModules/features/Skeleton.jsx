import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div
      role='status'
      class='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center '
    >
      <div class='flex items-center justify-center w-full bg-gray-300 rounded dark:bg-gray-500 min-h-[70vh]'></div>
      {/* <div class='w-full'>
        <div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
        <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
        <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
        <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
        <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
      </div> */}
    </div>
  );
};

export default LoadingSkeleton;
