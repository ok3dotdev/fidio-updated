var _h, _h2, _h3, _h4;
import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Tooltip from '@mui/material/Tooltip';
import AdminStyles from './Admin.module.scss';
import { logout } from '../utility/onboarding/SignIn';
import { fetchPost } from '../utility/fetch';
const moduleName = 'StreamAdmin';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [canStream, setCanStream] = React.useState(null);
  const [askStream, setAskStream] = React.useState(null);
  const [canStreamOffset, setCanStreamOffset] = React.useState(0);
  const [askStreamOffset, setAskStreamOffset] = React.useState(0);
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, e => {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        loadDefault();
      }
    }
  });
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const loadDefault = async () => {
    const body = {
      domainKey: props.domainKey,
      hash: props._loggedIn.hash,
      identifier: props._loggedIn.identifier,
      askStreamOffset: askStreamOffset * 50,
      canStreamOffset: canStreamOffset * 50
    };
    let res = await fetchPost(props.apiUrl + '/a/streampage', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        if (res.askStream) {
          setAskStream(res.askStream);
        }
        if (res.canStream) {
          setCanStream(res.canStream);
        }
        return res;
      }
    }
  };
  const handleChangeStreamAuth = React.useCallback(e => {
    const modif = e.currentTarget.getAttribute('modif');
    const id = e.currentTarget.getAttribute('userid');
    if (modif && id) {
      changeAuth(id, modif);
    }
  });
  const changeAuth = async (useId, modif) => {
    const body = {
      domainKey: props.domainKey,
      hash: props._loggedIn.hash,
      identifier: props._loggedIn.identifier,
      useId: useId,
      modif: modif,
      askStreamOffset: askStreamOffset * 50,
      canStreamOffset: canStreamOffset * 50
    };
    let res = await fetchPost(props.apiUrl + '/a/changestreamauth', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        if (res.askStream) {
          setAskStream(res.askStream);
        }
        if (res.canStream) {
          setCanStream(res.canStream);
        }
        return res;
      }
    }
  };
  const handleSetPagination = React.useCallback(e => {
    const scope = e.currentTarget.getAttribute('scope');
    if (scope) {
      const nextValue = e.currentTarget.getAttribute('i');
      console.log(nextValue);
      if (scope === 'askStreamOffset') {
        setAskStreamOffset(Number(nextValue));
      } else if (scope === 'canStreamOffset') {
        setCanStreamOffset(Number(nextValue));
      }
      setTimeout(() => {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'loadDefault'
        });
      }, 250);
    }
  });
  const askStreamOffsetPages = [askStreamOffset - 2, askStreamOffset - 1, askStreamOffset, askStreamOffset + 1, askStreamOffset + 2];
  const canStreamOffsetPages = [canStreamOffset - 2, canStreamOffset - 1, canStreamOffset, canStreamOffset + 1, canStreamOffset + 2];
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className} ${moduleName}_Container`
  }, _h || (_h = /*#__PURE__*/React.createElement("h3", null, "Stream")), /*#__PURE__*/React.createElement("div", {
    className: `${moduleName}_InternalContainer`
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Tooltip, {
    title: `The Users below have asked to Stream on ${props.siteTitle ?? 'your Platform'}`,
    placement: "bottom"
  }, _h2 || (_h2 = /*#__PURE__*/React.createElement("h4", null, "Asking"))), /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.listContainer}`,
    style: {
      maxHeight: '65vh'
    }
  }, askStream?.map ? askStream.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.itemContainer}`,
    key: i
  }, /*#__PURE__*/React.createElement(Link, {
    href: `/p?u=${m.username ?? m.id}`,
    className: `menuLinkSelector`,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, m.username ?? m.id)), /*#__PURE__*/React.createElement("button", {
    modif: "authorize_streamer",
    userid: `${m.id}`,
    onClick: handleChangeStreamAuth
  }, "Allow"))) : null), /*#__PURE__*/React.createElement("ul", {
    className: `PaginationContainer`
  }, askStreamOffsetPages.map((m, i) => {
    return m > -1 ? /*#__PURE__*/React.createElement("li", {
      className: `${m == askStreamOffset ? 'ActivePage' : ''}`,
      scope: "askStreamOffset",
      key: i,
      i: m,
      onClick: handleSetPagination
    }, m + 1) : null;
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Tooltip, {
    title: `The Users below currently have access to Stream on ${props.siteTitle ?? 'your Platform'}`,
    placement: "bottom"
  }, _h3 || (_h3 = /*#__PURE__*/React.createElement("h4", null, "Streamers"))), /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.listContainer}`,
    style: {
      maxHeight: '65vh'
    }
  }, canStream?.map ? canStream.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.itemContainer}`,
    key: i
  }, /*#__PURE__*/React.createElement(Link, {
    href: `/p?u=${m.username ?? m.id}`,
    className: `menuLinkSelector`,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, m.username ?? m.id)), /*#__PURE__*/React.createElement("button", {
    modif: "disable_streamer",
    userid: `${m.id}`,
    onClick: handleChangeStreamAuth
  }, "Disable"))) : null), /*#__PURE__*/React.createElement("ul", {
    className: `PaginationContainer`
  }, canStreamOffsetPages.map((m, i) => {
    return m > -1 ? /*#__PURE__*/React.createElement("li", {
      className: `${m == canStreamOffset ? 'ActivePage' : ''}`,
      scope: "canStreamOffset",
      key: i,
      i: m,
      onClick: handleSetPagination
    }, m + 1) : null;
  }))), /*#__PURE__*/React.createElement("section", null, _h4 || (_h4 = /*#__PURE__*/React.createElement("h4", null, "Platform Stream Status")), /*#__PURE__*/React.createElement("div", {
    className: "gradient_style_bg_3",
    style: {
      fontSize: '.9rem',
      fontWeight: 700,
      width: 'fit-content',
      padding: '0.125rem 5rem'
    }
  }, "LIVE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem',
      marginTop: '.25rem'
    }
  }, "Contact admin@tycoon.systems for any current Livestreaming Issues"))));
};
export default Module;