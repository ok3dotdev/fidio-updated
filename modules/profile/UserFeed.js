import React from 'react';
import GridList from '../video/player/gridList';
const Module = props => {
  return <div className='ProfilePage_Feed'>
            <GridList loggedIn={props._loggedIn} _gridItems={props?.combinedFeed ?? []} _gridListType={'video'} {...props}></GridList>
        </div>;
};
export default Module;