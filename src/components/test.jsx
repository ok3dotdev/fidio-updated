import React from 'react';

const Test = ({ name, children }) => {
  // console.log('props test', props);
  return (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  );
};

export default Test;
