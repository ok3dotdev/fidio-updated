var _div, _Script, _link, _li;
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
      return /*#__PURE__*/React.createElement(UseComponentDom, props);
    }
    return _div || (_div = /*#__PURE__*/React.createElement("div", null));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className} ${AdminStyles.container} Admin_Container`
  }, _Script || (_Script = /*#__PURE__*/React.createElement(Script, {
    src: "https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.min.js"
  })), _link || (_link = /*#__PURE__*/React.createElement("link", {
    href: "https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.snow.css",
    rel: "stylesheet"
  })), props?._LocalEventEmitter ? /*#__PURE__*/React.createElement("div", {
    className: `${doShowSignIn && !isAdmin ? 'simpleCenter' : ''}`
  }, /*#__PURE__*/React.createElement(SignIn, props), /*#__PURE__*/React.createElement(Username, props)) : null, isAdmin ? /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.internalContainer} Admin_InternalContainer`
  }, /*#__PURE__*/React.createElement(Banner, props), /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.bodyContainer} Admin_BodyContainer`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: `${AdminStyles.adminMenuContainer} Admin_MenuContainer`
  }, resolveAuth('StreamAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSetPage,
    modif: "stream"
  }, "Stream")) : null, resolveAuth('PostAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSetPage,
    modif: "post"
  }, "Post")) : null, resolveAuth('StorageAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSetPage,
    modif: "storage"
  }, "Storage")) : null, resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSetPage,
    modif: "build"
  }, "Build")) : null, resolveAuth('BillingAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSetPage,
    modif: "billing"
  }, "Billing")) : null, _li || (_li = /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement(Link, {
    href: "/documentation"
  }, "Documentation"))))), Object.entries(customAdmin).length > 0 ? /*#__PURE__*/React.createElement("ul", {
    className: `${AdminStyles.adminMenuContainer} ${AdminStyles.adminMenuContainerCustom} Admin_MenuContainerCustom`
  }, Object.entries(customAdmin).map((m, i) => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSetPage,
    modif: m[0]
  }, m[0]?.slice(1, m[0].length) && m[0]?.length > 1 ? m[0].charAt(0).toUpperCase() + m[0].slice(1, m[0].length) : m[0])))) : null), /*#__PURE__*/React.createElement("div", {
    className: `${AdminStyles.contentBodyContainer} Admin_ContentBodyContainer`
  }, page ? page === 'build' && resolveAuth('BuildAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BuildAdmin, props)) : page === 'stream' && resolveAuth('StreamAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StreamAdmin, props)) : page === 'post' && resolveAuth('PostAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PostAdmin, props)) : page === 'billing' && resolveAuth('BillingAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BillingAdmin, props)) : page === 'storage' && resolveAuth('StorageAdmin', props._adminAuth) ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StorageAdmin, props)) : Object.entries(customAdmin).findIndex(m => m[0] === page) > -1 // Leverage Custom Admin Pages
  ? paintCustomAdmin(Object.entries(customAdmin).find(m => m[0] === page)) : null : null))) : null);
};
export default Module;