import React from 'react';
const Module = props => {
  const handleOpenBeginStream = React.useCallback(e => {
    props._LocalEventEmitter.dispatch('profilePage', {
      dispatch: 'openAdminPanel',
      menu: 'stream'
    });
  });
  return <React.Fragment>
            {props._adminAuth && props?.profileData?.user?.id === props?._loggedIn?.identifier && !props._currentlyStreaming ? <div className={`${props?.className ?? ''}`}>
                        <button className={`${props?.ManagerStyles?.streamingButton} ${props?.ManagerStyles?.streamingButtonMini} ${props._managerOpen ? `${props?.ManagerStyles?.streamingButtonOff}` : ''}`} onClick={handleOpenBeginStream}>Begin Stream</button>
                    </div> : null}
        </React.Fragment>;
};
export default Module;