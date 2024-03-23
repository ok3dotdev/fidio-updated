var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { useRouter } from 'next/router.js';
import { checkSignedIn, grabUsername } from '../../utility/onboarding/SignIn.js';
const registerUsername = props => {
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  let proposed = React.useRef();
  let [pageError, setPageError] = React.useState(null);
  let [registerUsernameOn, setRegisterUsernameOn] = React.useState(true);
  const handleSaveUsername = async e => {
    if (proposed && proposed.current && proposed.current.value) {
      const data = {
        proposedUsername: proposed.current.value
      };
      let res = await grabUsername(props.apiUrl, props.domainKey, data, checkSignedIn, props._setLoggedIn);
      if (res) {
        if (res == "disauthenticated") {
          setLoggedIn(false);
          setRegisterUsernameOn(false);
          setPageError(null);
        } else if (res == "username taken") {
          setPageError("Sorry, that username is already taken. Please try another one or contact admin@minipost.app");
          return;
        } else {
          setRegisterUsernameOn(false);
          setPageError(null);
          if (props.redirectOnAuth && asPath !== props.redirectOnAuth) {
            router.push(props.redirectOnAuth);
          }
          if (props.setRegistered) {
            props.setRegistered(true);
          }
        }
      } else {
        setPageError("Sorry, that username is already taken. Please try another one or contact admin@minipost.app");
      }
    }
  };
  React.useEffect(() => {
    if (props._loggedIn) {
      if (!props._loggedIn.username && !registerUsernameOn) {
        setRegisterUsernameOn(true);
      } else if (props._loggedIn.username && registerUsernameOn) {
        setRegisterUsernameOn(false);
      }
    } else if (registerUsernameOn) {
      setRegisterUsernameOn(false);
    }
  }, [props._loggedIn, registerUsernameOn]);
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className}`
  }, void 0, props._loggedIn && !props._loggedIn.username && registerUsernameOn ? /*#__PURE__*/_jsx("div", {
    className: "Username_Container Username_ContainerBg"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "Username_ItemsContainer"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "Username_PromptContainer"
  }, void 0, /*#__PURE__*/_jsx("h4", {
    style: {
      margin: 0
    }
  }, void 0, props.prompt ?? 'What username do you want?'), /*#__PURE__*/_jsx("span", {
    style: {
      margin: 0 + " auto"
    }
  }, void 0, <input ref={proposed} type="text" placeholder="Username" className='simpleTextInput' />, /*#__PURE__*/_jsx("button", {
    onClick: e => {
      handleSaveUsername(e);
    },
    style: {
      borderRadius: '0'
    }
  }, void 0, props.confirm ?? 'Give me that one!'))), pageError ? /*#__PURE__*/_jsx("p", {
    style: {
      marginTop: '.5rem'
    }
  }, void 0, pageError) : null)) : null);
};
export default registerUsername;