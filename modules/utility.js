import React from 'react';
import resolveConfig, { resolveVariables } from '/app.config';
import { WatchPage } from './streaming/watch';
import { SignIn, SignInPage, Username } from './onboarding/signin/index';
import { ProfilePage } from './profile/index';
import { ReceiptPage } from './ecommerce/receipt';
import { CreditCard } from './payment/index';
import { Manager } from './streaming/manager';
import { Feature } from './search/feature';
import { WideFeature } from './search/wideFeature';
import { SliderBasic } from './indexing';
import { useRouter } from 'next/router';
import { fetchPost, FetchHandler } from './utility/fetch';
import { checkSignedIn } from './utility/onboarding';
import { isObjectEmpty } from './util';
import { Settings } from './settings';
import { Survey } from './survey';
import CustomModules from '/customModules';
import PresentationModules from './presentation';
import { EventPage } from './presentation/events.js/eventPage';
import { ArticlePage } from './article';
import { ProductPage } from './ecommerce/product';
const resolveComponent = json => {
  let useModules;
  if (json.type) {
    switch (json.type) {
      case 'WatchPage':
        return /*#__PURE__*/React.createElement(WatchPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SignIn':
        return /*#__PURE__*/React.createElement(SignIn, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SignInPage':
        return /*#__PURE__*/React.createElement(SignInPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ProfilePage':
        return /*#__PURE__*/React.createElement(ProfilePage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ProductPage':
        return /*#__PURE__*/React.createElement(ProductPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'EventPage':
        return /*#__PURE__*/React.createElement(EventPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ReceiptPage':
        return /*#__PURE__*/React.createElement(ReceiptPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ArticlePage':
        return /*#__PURE__*/React.createElement(ArticlePage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'CreditCard':
        return /*#__PURE__*/React.createElement(CreditCard, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Streaming_Manager':
        return /*#__PURE__*/React.createElement(Manager, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Onboarding_SignIn_Username':
        return /*#__PURE__*/React.createElement(Username, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Feature':
        return /*#__PURE__*/React.createElement(Feature, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'WideFeature':
        return /*#__PURE__*/React.createElement(WideFeature, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SliderBasic':
        return /*#__PURE__*/React.createElement(SliderBasic, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'FetchHandler':
        return /*#__PURE__*/React.createElement(FetchHandler, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Survey':
        return /*#__PURE__*/React.createElement(Survey, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Settings':
        return /*#__PURE__*/React.createElement(Settings, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'CustomModule':
        useModules = 'customModule';
        if (json?.props && json.props[useModules] && CustomModules && Object.prototype.hasOwnProperty.call(CustomModules, json.props[useModules])) {
          const UseModule = CustomModules[json.props[useModules]];
          if (UseModule) {
            return /*#__PURE__*/React.createElement(UseModule, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
          }
        }
      case 'Presentation':
        useModules = 'module';
        if (json?.props && json.props[useModules] && PresentationModules && Object.prototype.hasOwnProperty.call(PresentationModules, json.props[useModules])) {
          const UseModule = PresentationModules[json.props[useModules]];
          if (UseModule) {
            return /*#__PURE__*/React.createElement(UseModule, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
          }
        }
      default:
        return null;
    }
  }
  return null;
};
const resolvePage = (def, path) => {
  if (def && def.temporaryComponents && def.temporaryComponents.pages) {
    const match = def.temporaryComponents.pages.find(pg => {
      const route = pg.url;
      const matchWithParam = new RegExp(`^\\${route}(?:\\?.*)?$`);
      if (path && path == pg.url || matchWithParam.test(path)) {
        return true;
      } else if (global && global.location && global.location.pathname && pg.url === global.location.pathname || global && global.location && global.location.pathname && matchWithParam.test(global.location.pathname)) {
        return true;
      }
      return false;
    });
    if (!match) {
      // If no match in app.config atleast return url
      return {
        url: path
      };
    }
    return match;
  }
  return null;
};
const resolvePageName = path => {
  switch (path) {
    case '/':
      return 'index';
    default:
      return path?.replace ? path.replace('/', '') : '';
  }
};
function generateComponent(json) {
  if (json) {
    const {
      type,
      props,
      children
    } = json;
    if (props?.childrenBefore) {
      const childElements = props.childrenBefore && props.childrenBefore.map(generateComponent);
      json.props.childrenBefore = [/*#__PURE__*/React.createElement(type, props, ...childElements)];
    }
    if (props?.childrenAfter) {
      const childElements = props.childrenAfter && props.childrenAfter.map(generateComponent);
      json.props.childrenAfter = [/*#__PURE__*/React.createElement(type, props, ...childElements)];
    }
    // If the type is a string, create a React element
    if (typeof type === 'string') {
      // Check if the type is the custom component
      const matchComponent = resolveComponent(json);
      if (matchComponent) {
        return matchComponent;
      }
      if (children && children.map) {
        const childElements = children && children.map(generateComponent);
        return /*#__PURE__*/React.createElement(type, props, ...childElements);
      }
    }
    if (type) {
      return type;
    }
  }
  // If the type is a function/component, directly return it
  return json;
}
const resolveDefaults = async (url, props, variables, query, asPath, setFetching, force) => {
  setFetching(true);
  let doPreReq = false;
  let newProps = {};
  let queryParams = {};
  if (query && !isObjectEmpty(query)) {
    queryParams = query;
  }
  if (!queryParams.u) {
    // Only add user username if u not present
    queryParams.u = checkSignedIn() && checkSignedIn().username ? checkSignedIn().username : null;
  }
  const body = {
    url: asPath,
    params: queryParams,
    domainKey: variables.domainKey
  };
  if (url === '/p' && (!props.profileData || force)) {
    doPreReq = true;
    body.profileReq = true;
    body.shopProfileReq = true;
  } else if (url == '/w' && (!props.watchData || force)) {
    doPreReq = true;
    body.watchReq = true;
    body.shopProfileReq = true;
  } else if (url == '/r') {
    doPreReq = true;
    body.profileReq = true;
    body.receiptReq = true;
    const user = checkSignedIn();
    if (user && user.identifier && user.hash) {
      body.identifier = user.identifier;
      body.hash = user.hash;
    }
  } else if (url === '/e') {
    doPreReq = true;
    body.profileReq = true;
    body.eventReq = true;
  } else if (url === '/ar') {
    // Resolve article page
    doPreReq = true;
    body.profileReq = true;
    body.articleReq = true;
  } else if (url === '/pr') {
    doPreReq = true;
    body.productReq = true;
  } else if (url === '/admin') {
    doPreReq = true;
  }
  if (!props.regionsData) {
    doPreReq = true;
    body.regionsReq = true;
  }
  if (doPreReq === true) {
    if (variables.domainKey) {
      body.domainKey = variables.domainKey;
    }
    const defaults = await fetchPost(variables.apiUrl + '/m/pagedefaults', null, null, body);
    if (defaults && defaults.data) {
      newProps = Object.keys(defaults.data).reduce((acc, key) => {
        acc[key] = defaults.data[key];
        return acc;
      }, newProps);
    }
  }
  newProps._loggedIn = checkSignedIn();
  return newProps;
};
const handlePropsPriority = (mergeProps, props) => {
  let temp = isObjectEmpty(mergeProps) ? props : mergeProps;
  for (const key in temp) {
    if (key.startsWith('_')) {
      const desc = Object.getOwnPropertyDescriptor(temp, key);
      if (desc && desc.writable) {
        temp[key] = props[key];
      }
    }
  }
  return temp;
};
const basicError = {
  error: "failed",
  code: 404
};
const getServerSidePropsDefault = async (context, pageDefaults, paramOveride = {}, force) => {
  let data = {
    props: {
      data: {},
      profileData: null,
      params: {},
      resolvedDefinition: null,
      path: null,
      log: '',
      error: ''
    }
  };
  const variables = resolveVariables();
  const config = resolveConfig(variables);
  const resolvedPage = resolvePage(config, context.req.url);
  data.props.path = context.req.url;
  const body = {
    url: context.req.url,
    params: context.query,
    domainKey: variables.domainKey,
    serverReq: true
  };
  let doPreReq = false;
  if (resolvedPage && resolvedPage.url === '/p') {
    // Resolve profile page
    doPreReq = true;
    body.profileReq = true;
    body.shopProfileReq = true;
  } else if (resolvedPage && resolvedPage.url === '/w') {
    // Resolve watch page
    doPreReq = true;
    body.watchReq = true;
    body.shopProfileReq = true;
  } else if (resolvedPage && resolvedPage.url === '/e') {
    // resolve event page
    doPreReq = true;
    body.profileReq = true;
    body.eventReq = true;
  } else if (resolvedPage && resolvedPage.url === '/ar') {
    // Resolve article page
    doPreReq = true;
    body.profileReq = true;
    body.articleReq = true;
  } else if (resolvedPage && resolvedPage.url === '/pr') {
    doPreReq = true;
    body.productReq = true;
  } else if (resolvedPage && resolvedPage.url === '/admin') {
    doPreReq = true;
  } else if (resolvedPage && resolvedPage.url.match('/documentation')) {
    doPreReq = true;
    body.documentationReq = true;
  }
  if (resolvedPage && resolvedPage.data) {
    data.props.resolvedDefinition = resolvedPage.data; // Access the `data` property
  }
  if (pageDefaults) {
    for (let i = 0; i < pageDefaults.length; i++) {
      doPreReq = true;
      body[pageDefaults[i] + 'Req'] = true;
    }
  }
  if (force) {
    doPreReq = true;
  }
  let defaults;
  Object.entries(paramOveride).map(p => {
    body.params[p[0]] = p[1];
  });
  if (doPreReq) {
    if (variables.domainKey) {
      body.domainKey = variables.domainKey;
    }
    defaults = await fetchPost(variables.apiUrl + '/m/pagedefaults', null, null, body);
    if (defaults && defaults.data) {
      data.props = Object.keys(defaults.data).reduce((acc, key) => {
        acc[key] = defaults.data[key];
        return acc;
      }, data.props);
    }
  }
  if (context && context.query) {
    data.props.params = context.query;
  }
  if (doPreReq) {
    if (!defaults || defaults && defaults.status === 'failed') {
      data.props.error = basicError;
    }
  }
  return data;
};
const getPropDefaults = async (data, context, pageDefaults, params = {}) => {
  const variables = resolveVariables();
  const config = resolveConfig(variables);
  if (Array.isArray(pageDefaults) && pageDefaults.length > 0) {
    const body = {
      url: context.req.url,
      params: Object.assign(context.query, params),
      domainKey: variables.domainKey,
      serverReq: true
    };
    for (let i = 0; i < pageDefaults.length; i++) {
      body[pageDefaults[i] + 'Req'] = true;
    }
    const defaults = await fetchPost(variables.apiUrl + '/m/pagedefaults', null, null, body);
    if (defaults && defaults.data) {
      data.props = Object.keys(defaults.data).reduce((acc, key) => {
        acc[key] = defaults.data[key];
        return acc;
      }, data.props);
    }
    return data;
  } else {
    return {};
  }
};
export { basicError, generateComponent, getServerSidePropsDefault, getPropDefaults, handlePropsPriority, resolveComponent, resolveDefaults, resolvePage, resolvePageName };