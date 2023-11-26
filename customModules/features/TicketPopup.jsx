// TicketClaimedPopup.js
import React from 'react';

const TicketClaimedPopup = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg  text-center'>
        <div className='z-20'>
          <h2 className='text-2xl mb-4'>You're all set!</h2>
          <p>Please check your cart to complete purchase</p>
          <div>
            <button className='bg-black px-4 py-2 rounded-[20px]'>
              Remin me
              <AlarmIcon />{' '}
            </button>
            <button
              onClick={onClose}
              className='bg-orange-400 text-white px-4 py-2 rounded-[20px] mt-2'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketClaimedPopup;
