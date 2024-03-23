import React from 'react';
const Module = props => {
  return <React.Fragment>
            <div>
                <div><div className='ProfilePage_ProfileName'>{props.profileData.user.username}</div></div>
            </div>
        </React.Fragment>;
};
export default Module;