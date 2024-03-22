import React from 'react';

const SalesCard = (props) => {
  const { amount, title } = props;
  return (
    <div className='bg-dashSides p-4 rounded shadow mb-1'>
      <h2 className='text-lg mb-1 font-sans'>{title}</h2>
      <p>{amount}</p>
    </div>
  );
};

export default SalesCard;
