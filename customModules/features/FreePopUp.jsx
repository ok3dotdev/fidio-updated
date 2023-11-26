import React from 'react';
import AlarmIcon from '@mui/icons-material/Alarm';

const FreePopUp = ({ onClose, name }) => {
  console.log('name', name);
  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg  text-center'>
        <div className='z-20'>
          <h2 className='text-2xl mb-4'>You're all set!</h2>
          <div className='flex flex-col gap-1'>
            <button
              onClick={onClose}
              className='bg-gray-300 text-black px-4 py-2 rounded-[20px] text-sm font-sans'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePopUp;
