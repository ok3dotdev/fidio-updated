var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
const Module = props => {
  const handleOpenBeginStream = React.useCallback(e => {
    props._LocalEventEmitter.dispatch('profilePage', {
      dispatch: 'openAdminPanel',
      menu: 'stream'
    });
  });
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, props._adminAuth && props?.profileData?.user?.id === props?._loggedIn?.identifier && !props._currentlyStreaming ? /*#__PURE__*/_jsx("div", {
    className: `${props?.className ?? ''}`
  }, void 0, /*#__PURE__*/_jsx("button", {
    className: `${props?.ManagerStyles?.streamingButton} ${props?.ManagerStyles?.streamingButtonMini} ${props._managerOpen ? `${props?.ManagerStyles?.streamingButtonOff}` : ''}`,
    onClick: handleOpenBeginStream
  }, void 0, "Begin Stream")) : null);
};
export default Module;