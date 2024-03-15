import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Ticket = (props) => {
  const { title, date, showButtons, handleView, id } = props;

  return (
    <div className='flex items-center justify-between bg-dashFg rounded-[12px] py-4 px-4 shadow-Txl'>
      <div>
        <h3 className='text-black'>{title}</h3>
        <p className='text-black font-sans'>{date}</p>
      </div>
      <div className='flex items-center gap-4'>
        {showButtons.includes('view') && (
          <button
            onClick={() => handleView(id)}
            className='border-1 border-gray-300 rounded p-1'
          >
            <VisibilityIcon className='text-gray-600' />
          </button>
        )}
        {showButtons.includes('edit') && (
          <button className='border-1 border-gray-300 rounded p-1'>
            <EditIcon className='text-blue-300' />
          </button>
        )}
        {showButtons.includes('delete') && (
          <button className='border-1 border-gray-300 rounded p-1'>
            <DeleteIcon className='text-red-300' />
          </button>
        )}
      </div>
    </div>
  );
};

export default Ticket;
