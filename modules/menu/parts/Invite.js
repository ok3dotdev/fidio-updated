var _div, _div2;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { inviteFriend } from '../../social/utility';
const Module = props => {
  const [inputField, setInputField] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(null);
  const inputFieldRef = React.useRef();
  const resetRef = React.useRef();
  const handleInviteFriend = React.useCallback(e => {
    if (!inputField) {
      setInputField(true);
    }
  });
  const handleSubmitFriendRequest = React.useCallback(e => {
    const f = async email => {
      if (email) {
        await inviteFriend(props.apiUrl, props.domainKey, props._loggedIn, {
          email: email
        });
        setSubmitted(email);
        setInputField(false);
        if (inputFieldRef?.current) {
          inputFieldRef.current.value = '';
        }
        resetRef.current = setTimeout(() => {
          setSubmitted(null);
        }, 10000);
      }
    };
    const value = inputFieldRef?.current?.value && inputFieldRef.current.value !== '' ? inputFieldRef.current.value : '';
    if (value) {
      f(value);
    }
  });
  const handleSendAnother = React.useCallback(e => {
    setSubmitted(null);
    setInputField(true);
    if (resetRef.current) {
      clearTimeout(resetRef.current);
    }
  });
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, props._loggedIn ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, props._loggedIn?.username ? /*#__PURE__*/_jsx("div", {
    className: `menuLinkSelector`,
    onClick: handleInviteFriend,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, void 0, submitted ? /*#__PURE__*/_jsx("li", {}, void 0, _div || (_div = /*#__PURE__*/_jsx("div", {
    className: `material-icons`
  }, void 0, "send")), /*#__PURE__*/_jsx("div", {
    onClick: handleSendAnother,
    className: "max-width-dropdown"
  }, void 0, "Sent request to ", /*#__PURE__*/_jsx("span", {
    style: {
      fontWeight: 600
    }
  }, void 0, submitted))) : !inputField ? /*#__PURE__*/_jsx("li", {}, void 0, _div2 || (_div2 = /*#__PURE__*/_jsx("div", {
    className: `material-icons`
  }, void 0, "send")), /*#__PURE__*/_jsx("div", {
    onClick: handleInviteFriend
  }, void 0, "Invite Friend")) : /*#__PURE__*/_jsx("li", {
    style: {
      padding: '0'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex gap-p05",
    style: {
      flex: 'auto',
      height: '29px'
    }
  }, void 0, <input type='text' style={{
    borderRadius: '.5rem',
    borderWidth: '0',
    marginLeft: '.5rem'
  }} placeholder={`Friend's Email`} ref={inputFieldRef} />, /*#__PURE__*/_jsx("button", {
    onClick: handleSubmitFriendRequest,
    style: {
      width: '-webkit-fill-available',
      maxWidth: '85px',
      marginRight: '.5rem'
    }
  }, void 0, "Invite")))) : null) : null);
};
export default Module;