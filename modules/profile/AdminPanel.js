var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { Manager } from '../streaming/manager';
const Module = props => {
  return /*#__PURE__*/_jsx("div", {
    className: `${props?.className ?? ''}`
  }, void 0, props?.adminAuth ? /*#__PURE__*/_jsx("div", {}, void 0, <div className={`AdminPanel_Container ${props?.adminPanelState ? 'AdminPanel_ContainerOpen' : ''}`} ref={props?.adminPanelContainerRef}>
                            <Manager {...props} adminPanelState={props?.adminPanelState}></Manager>
                        </div>, /*#__PURE__*/_jsx("div", {
    style: {
      position: 'absolute',
      right: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("button", {
    onClick: props?.toggleAdminPanel
  }, void 0, props?.adminPanelState ? 'Close' : 'Open', " ", props?.managerName ?? 'Manager'))) : null);
};
export default Module;