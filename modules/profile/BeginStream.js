import React from 'react';
const Module = props => {
  const handleOpenBeginStream = React.useCallback(e => {
    props._LocalEventEmitter.dispatch('profilePage', {
      dispatch: 'openAdminPanel',
      menu: 'stream'
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._adminAuth && props?.profileData?.user?.id === props?._loggedIn?.identifier && !props._currentlyStreaming ? /*#__PURE__*/React.createElement("div", {
    className: `${props?.className ?? ''}`
  }, /*#__PURE__*/React.createElement("button", {
    className: `${props?.ManagerStyles?.streamingButton} ${props?.ManagerStyles?.streamingButtonMini} ${props._managerOpen ? `${props?.ManagerStyles?.streamingButtonOff}` : ''}`,
    onClick: handleOpenBeginStream
  }, "Begin Stream")) : null);
};
export default Module;