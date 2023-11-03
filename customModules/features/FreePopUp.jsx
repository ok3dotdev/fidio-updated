import React from 'react';

const FreePopUp = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg  text-center'>
        <div className='z-20'>
          <h2 className='text-2xl mb-4'>You're all set!</h2>
          <div className='flex gap-4'>
            <img
              className='w-[180px] h-[200px] rounded-lg max-w-[200px]'
              src='/img/internal/tinycafe.jpeg'
              alt='sewa'
            />
            <div className='flex flex-col gap-2 justify-center text-left font-light'>
              <p>Tiny's Cafe Session</p>
              <p className='font-sans'>NOV 5th</p>
              <p className='font-sans'>06:30PM EST</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className='bg-orange-400 text-white px-4 py-2 rounded mt-2'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreePopUp;
