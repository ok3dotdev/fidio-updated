var _h, _h2, _h3, _h4;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${moduleName}_Container`
  }, void 0, _h || (_h = /*#__PURE__*/_jsx("h3", {}, void 0, "Stream")), /*#__PURE__*/_jsx("div", {
    className: `${moduleName}_InternalContainer`
  }, void 0, /*#__PURE__*/_jsx("section", {}, void 0, /*#__PURE__*/_jsx(Tooltip, {
    title: `The Users below have asked to Stream on ${props.siteTitle ?? 'your Platform'}`,
    placement: "bottom"
  }, void 0, _h2 || (_h2 = /*#__PURE__*/_jsx("h4", {}, void 0, "Asking"))), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.listContainer}`,
    style: {
      maxHeight: '65vh'
    }
  }, void 0, askStream?.map ? askStream.map((m, i) => /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.itemContainer}`
  }, i, /*#__PURE__*/_jsx(Link, {
    href: `/p?u=${m.username ?? m.id}`,
    className: `menuLinkSelector`,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, m.username ?? m.id)), /*#__PURE__*/_jsx("button", {
    modif: "authorize_streamer",
    userid: `${m.id}`,
    onClick: handleChangeStreamAuth
  }, void 0, "Allow"))) : null), /*#__PURE__*/_jsx("ul", {
    className: `PaginationContainer`
  }, void 0, askStreamOffsetPages.map((m, i) => {
    return m > -1 ? /*#__PURE__*/_jsx("li", {
      className: `${m == askStreamOffset ? 'ActivePage' : ''}`,
      scope: "askStreamOffset",
      i: m,
      onClick: handleSetPagination
    }, i, m + 1) : null;
  }))), /*#__PURE__*/_jsx("section", {}, void 0, /*#__PURE__*/_jsx(Tooltip, {
    title: `The Users below currently have access to Stream on ${props.siteTitle ?? 'your Platform'}`,
    placement: "bottom"
  }, void 0, _h3 || (_h3 = /*#__PURE__*/_jsx("h4", {}, void 0, "Streamers"))), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.listContainer}`,
    style: {
      maxHeight: '65vh'
    }
  }, void 0, canStream?.map ? canStream.map((m, i) => /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.itemContainer}`
  }, i, /*#__PURE__*/_jsx(Link, {
    href: `/p?u=${m.username ?? m.id}`,
    className: `menuLinkSelector`,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, m.username ?? m.id)), /*#__PURE__*/_jsx("button", {
    modif: "disable_streamer",
    userid: `${m.id}`,
    onClick: handleChangeStreamAuth
  }, void 0, "Disable"))) : null), /*#__PURE__*/_jsx("ul", {
    className: `PaginationContainer`
  }, void 0, canStreamOffsetPages.map((m, i) => {
    return m > -1 ? /*#__PURE__*/_jsx("li", {
      className: `${m == canStreamOffset ? 'ActivePage' : ''}`,
      scope: "canStreamOffset",
      i: m,
      onClick: handleSetPagination
    }, i, m + 1) : null;
  }))), /*#__PURE__*/_jsx("section", {}, void 0, _h4 || (_h4 = /*#__PURE__*/_jsx("h4", {}, void 0, "Platform Stream Status")), /*#__PURE__*/_jsx("div", {
    className: "gradient_style_bg_3",
    style: {
      fontSize: '.9rem',
      fontWeight: 700,
      width: 'fit-content',
      padding: '0.125rem 5rem'
    }
  }, void 0, "LIVE"), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.75rem',
      marginTop: '.25rem'
    }
  }, void 0, "Contact admin@tycoon.systems for any current Livestreaming Issues"))));
};
export default Module;