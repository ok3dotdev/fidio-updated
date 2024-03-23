var _div, _div2;
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, props._loggedIn?.username ? /*#__PURE__*/React.createElement("div", {
    className: `menuLinkSelector`,
    onClick: handleInviteFriend,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, submitted ? /*#__PURE__*/React.createElement("li", null, _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "send")), /*#__PURE__*/React.createElement("div", {
    onClick: handleSendAnother,
    className: "max-width-dropdown"
  }, "Sent request to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, submitted))) : !inputField ? /*#__PURE__*/React.createElement("li", null, _div2 || (_div2 = /*#__PURE__*/React.createElement("div", {
    className: `material-icons`
  }, "send")), /*#__PURE__*/React.createElement("div", {
    onClick: handleInviteFriend
  }, "Invite Friend")) : /*#__PURE__*/React.createElement("li", {
    style: {
      padding: '0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p05",
    style: {
      flex: 'auto',
      height: '29px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    style: {
      borderRadius: '.5rem',
      borderWidth: '0',
      marginLeft: '.5rem'
    },
    placeholder: `Friend's Email`,
    ref: inputFieldRef
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmitFriendRequest,
    style: {
      width: '-webkit-fill-available',
      maxWidth: '85px',
      marginRight: '.5rem'
    }
  }, "Invite")))) : null) : null);
};
export default Module;