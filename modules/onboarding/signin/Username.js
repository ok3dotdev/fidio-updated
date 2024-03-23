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
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className}`
  }, props._loggedIn && !props._loggedIn.username && registerUsernameOn ? /*#__PURE__*/React.createElement("div", {
    className: "Username_Container Username_ContainerBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Username_ItemsContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Username_PromptContainer"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, props.prompt ?? 'What username do you want?'), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: 0 + " auto"
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: proposed,
    type: "text",
    placeholder: "Username",
    className: "simpleTextInput"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      handleSaveUsername(e);
    },
    style: {
      borderRadius: '0'
    }
  }, props.confirm ?? 'Give me that one!'))), pageError ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '.5rem'
    }
  }, pageError) : null)) : null);
};
export default registerUsername;