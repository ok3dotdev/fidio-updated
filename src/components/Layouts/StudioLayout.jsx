/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import StudioNav from './StudioNav';
import Sidebar from './Sidebar';

const pageName = 'studio'

const StudioLayout = (props) => {
  const {children} = props;
	return (
    <div className="flex flex-col h-screen">
      <StudioNav {...props}/>
      <div className="flex flex-1">
        <Sidebar/>
        <div className="flex-1 p-4 bg-dashBg">
        {children}
        </div>
      </div>
    </div>
  );
}


export default StudioLayout