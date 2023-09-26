import React from 'react';
import { Feature } from '../../modules/search/feature';

const HomeDash = (props) => {
  return (
    <div className='pt-[45px] px-8 w-full'>
      <Feature {...props} />
      dash
    </div>
  );
};

export default HomeDash;
