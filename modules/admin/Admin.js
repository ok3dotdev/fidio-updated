var _div, _Script, _link, _li;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import AdminStyles from './Admin.module.scss';
import BuildAdmin from './BuildAdmin';
import StreamAdmin from './StreamAdmin';
import PostAdmin from './PostAdmin';
import BillingAdmin from './BillingAdmin';
import StorageAdmin from './StorageAdmin';
import { SignIn, Username } from '/modules/onboarding/signin/index.js';
import { isObjectEmpty } from '/modules/util';
import { Banner } from '.';
import customAdmin from '/customModules/admin';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [page, setPage] = React.useState(null);
  const Auth_Table = {
    BuildAdmin: ['full'],
    StreamAdmin: ['full', 'administrative'],
    PostAdmin: ['full', 'administrative', 'marketing', 'writer'],
    BillingAdmin: ['full', 'administrative'],
    StorageAdmin: ['full', 'administrative', 'marketing', 'writer']
  };
  const resolveAuth = (page, auth) => {
    if (auth?.adminc?.access && Auth_Table[page].indexOf(auth.adminc.access) > -1) {
      return true;
    }
    return false;
  };
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const handleSetPage = React.useCallback(async e => {
    let page = e?.target?.getAttribute('modif');
    if (!page && e?.children && e?.children[0]) {
      page = e?.children[0]?.getAttribute('modif');
    }
    if (page) {
      setPage(page);
    }
  });
  console.log(page, props);
  const doShowSignIn = !props || !props._loggedIn || isObjectEmpty(props?._loggedIn) || !props?._loggedIn.identifier;
  const isAdmin = props?._adminAuth?.adminc?.admin && props?._loggedIn;
  console.log(isAdmin);
  const paintCustomAdmin = useComponent => {
    if (useComponent && useComponent[1] && typeof useComponent[1] === 'function') {
      const UseComponentDom = useComponent[1];
      return <UseComponentDom {...props} />;
    }
    return _div || (_div = /*#__PURE__*/_jsx("div", {}));
  };
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${AdminStyles.container} Admin_Container`
  }, void 0, _Script || (_Script = /*#__PURE__*/_jsx(Script, {
    src: "https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.min.js"
  })), _link || (_link = /*#__PURE__*/_jsx("link", {
    href: "https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.snow.css",
    rel: "stylesheet"
  })), props?._LocalEventEmitter ? /*#__PURE__*/_jsx("div", {
    className: `${doShowSignIn && !isAdmin ? 'simpleCenter' : ''}`
  }, void 0, <SignIn {...props}></SignIn>, <Username {...props}></Username>) : null, isAdmin ? /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.internalContainer} Admin_InternalContainer`
  }, void 0, <Banner {...props} />, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.bodyContainer} Admin_BodyContainer`
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("ul", {
    className: `${AdminStyles.adminMenuContainer} Admin_MenuContainer`
  }, void 0, resolveAuth('StreamAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSetPage,
    modif: "stream"
  }, void 0, "Stream")) : null, resolveAuth('PostAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSetPage,
    modif: "post"
  }, void 0, "Post")) : null, resolveAuth('StorageAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSetPage,
    modif: "storage"
  }, void 0, "Storage")) : null, resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSetPage,
    modif: "build"
  }, void 0, "Build")) : null, resolveAuth('BillingAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSetPage,
    modif: "billing"
  }, void 0, "Billing")) : null, _li || (_li = /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {}, void 0, /*#__PURE__*/_jsx(Link, {
    href: "/documentation"
  }, void 0, "Documentation"))))), Object.entries(customAdmin).length > 0 ? /*#__PURE__*/_jsx("ul", {
    className: `${AdminStyles.adminMenuContainer} ${AdminStyles.adminMenuContainerCustom} Admin_MenuContainerCustom`
  }, void 0, Object.entries(customAdmin).map((m, i) => /*#__PURE__*/_jsx("li", {}, void 0, /*#__PURE__*/_jsx("button", {
    onClick: handleSetPage,
    modif: m[0]
  }, void 0, m[0]?.slice(1, m[0].length) && m[0]?.length > 1 ? m[0].charAt(0).toUpperCase() + m[0].slice(1, m[0].length) : m[0])))) : null), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.contentBodyContainer} Admin_ContentBodyContainer`
  }, void 0, page ? page === 'build' && resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("div", {}, void 0, <BuildAdmin {...props} />) : page === 'stream' && resolveAuth('StreamAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("div", {}, void 0, <StreamAdmin {...props} />) : page === 'post' && resolveAuth('PostAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("div", {}, void 0, <PostAdmin {...props} />) : page === 'billing' && resolveAuth('BillingAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("div", {}, void 0, <BillingAdmin {...props} />) : page === 'storage' && resolveAuth('StorageAdmin', props._adminAuth) ? /*#__PURE__*/_jsx("div", {}, void 0, <StorageAdmin {...props} />) : Object.entries(customAdmin).findIndex(m => m[0] === page) > -1 // Leverage Custom Admin Pages
  ? paintCustomAdmin(Object.entries(customAdmin).find(m => m[0] === page)) : null : null))) : null);
};
export default Module;