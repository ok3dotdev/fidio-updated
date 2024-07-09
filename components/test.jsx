import React from 'react';

const Test = ({ name, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  );
};

export default Test;
