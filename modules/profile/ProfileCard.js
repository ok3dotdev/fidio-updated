import React from 'react';
const Module = props => {
  return <div className={`${props?.className ?? ''} PagePadding pTop ProfilePage_MetaContainer`}>
            <img className='ProfilePage_Icon' src={props.profileData && props.profileData.user && props.profileData.user.icon ? props.profileData.user.icon : ''} />
            <div>
                <div><div className='ProfilePage_ProfileName'>{props.profileData.user.username}</div></div>
            </div>
        </div>;
};
export default Module;