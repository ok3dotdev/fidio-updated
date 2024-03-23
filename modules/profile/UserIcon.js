import React from 'react';
const Module = props => {
  return <React.Fragment>
            <img className='ProfilePage_Icon' src={props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''} />
        </React.Fragment>;
};
export default Module;