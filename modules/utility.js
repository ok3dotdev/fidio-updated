"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicError = void 0;
exports.generateComponent = generateComponent;
exports.resolvePageName = exports.resolvePage = exports.resolveDefaults = exports.resolveComponent = exports.handlePropsPriority = exports.getServerSidePropsDefault = exports.getPropDefaults = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _app = _interopRequireWildcard(require("/app.config"));
var _watch = require("./streaming/watch");
var _index = require("./onboarding/signin/index");
var _index2 = require("./profile/index");
var _receipt = require("./ecommerce/receipt");
var _index3 = require("./payment/index");
var _manager = require("./streaming/manager");
var _feature = require("./search/feature");
var _wideFeature = require("./search/wideFeature");
var _indexing = require("./indexing");
var _router = require("next/router");
var _fetch = require("./utility/fetch");
var _onboarding = require("./utility/onboarding");
var _util = require("./util");
var _settings = require("./settings");
var _survey = require("./survey");
var _customModules = _interopRequireDefault(require("/customModules"));
var _presentation = _interopRequireDefault(require("./presentation"));
var _eventPage = require("./presentation/events.js/eventPage");
var _article = require("./article");
var _product = require("./ecommerce/product");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var resolveComponent = exports.resolveComponent = function resolveComponent(json) {
  var useModules;
  if (json.type) {
    switch (json.type) {
      case 'WatchPage':
        return /*#__PURE__*/_react["default"].createElement(_watch.WatchPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SignIn':
        return /*#__PURE__*/_react["default"].createElement(_index.SignIn, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SignInPage':
        return /*#__PURE__*/_react["default"].createElement(_index.SignInPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ProfilePage':
        return /*#__PURE__*/_react["default"].createElement(_index2.ProfilePage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ProductPage':
        return /*#__PURE__*/_react["default"].createElement(_product.ProductPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'EventPage':
        return /*#__PURE__*/_react["default"].createElement(_eventPage.EventPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ReceiptPage':
        return /*#__PURE__*/_react["default"].createElement(_receipt.ReceiptPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ArticlePage':
        return /*#__PURE__*/_react["default"].createElement(_article.ArticlePage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'CreditCard':
        return /*#__PURE__*/_react["default"].createElement(_index3.CreditCard, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Streaming_Manager':
        return /*#__PURE__*/_react["default"].createElement(_manager.Manager, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Onboarding_SignIn_Username':
        return /*#__PURE__*/_react["default"].createElement(_index.Username, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Feature':
        return /*#__PURE__*/_react["default"].createElement(_feature.Feature, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'WideFeature':
        return /*#__PURE__*/_react["default"].createElement(_wideFeature.WideFeature, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SliderBasic':
        return /*#__PURE__*/_react["default"].createElement(_indexing.SliderBasic, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'FetchHandler':
        return /*#__PURE__*/_react["default"].createElement(_fetch.FetchHandler, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Survey':
        return /*#__PURE__*/_react["default"].createElement(_survey.Survey, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Settings':
        return /*#__PURE__*/_react["default"].createElement(_settings.Settings, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'CustomModule':
        useModules = 'customModule';
        if (json !== null && json !== void 0 && json.props && json.props[useModules] && _customModules["default"] && Object.prototype.hasOwnProperty.call(_customModules["default"], json.props[useModules])) {
          var UseModule = _customModules["default"][json.props[useModules]];
          if (UseModule) {
            return /*#__PURE__*/_react["default"].createElement(UseModule, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
          }
        }
      case 'Presentation':
        useModules = 'module';
        if (json !== null && json !== void 0 && json.props && json.props[useModules] && _presentation["default"] && Object.prototype.hasOwnProperty.call(_presentation["default"], json.props[useModules])) {
          var _UseModule = _presentation["default"][json.props[useModules]];
          if (_UseModule) {
            return /*#__PURE__*/_react["default"].createElement(_UseModule, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
          }
        }
      default:
        return null;
    }
  }
  return null;
};
var resolvePage = exports.resolvePage = function resolvePage(def, path) {
  if (def && def.temporaryComponents && def.temporaryComponents.pages) {
    var match = def.temporaryComponents.pages.find(function (pg) {
      var route = pg.url;
      var matchWithParam = new RegExp("^\\".concat(route, "(?:\\?.*)?$"));
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
var resolvePageName = exports.resolvePageName = function resolvePageName(path) {
  switch (path) {
    case '/':
      return 'index';
    default:
      return path !== null && path !== void 0 && path.replace ? path.replace('/', '') : '';
  }
};
function generateComponent(json) {
  if (json) {
    var type = json.type,
      props = json.props,
      children = json.children;
    if (props !== null && props !== void 0 && props.childrenBefore) {
      var childElements = props.childrenBefore && props.childrenBefore.map(generateComponent);
      json.props.childrenBefore = [/*#__PURE__*/_react["default"].createElement.apply(_react["default"], [type, props].concat((0, _toConsumableArray2["default"])(childElements)))];
    }
    if (props !== null && props !== void 0 && props.childrenAfter) {
      var _childElements = props.childrenAfter && props.childrenAfter.map(generateComponent);
      json.props.childrenAfter = [/*#__PURE__*/_react["default"].createElement.apply(_react["default"], [type, props].concat((0, _toConsumableArray2["default"])(_childElements)))];
    }
    // If the type is a string, create a React element
    if (typeof type === 'string') {
      // Check if the type is the custom component
      var matchComponent = resolveComponent(json);
      if (matchComponent) {
        return matchComponent;
      }
      if (children && children.map) {
        var _childElements2 = children && children.map(generateComponent);
        return /*#__PURE__*/_react["default"].createElement.apply(_react["default"], [type, props].concat((0, _toConsumableArray2["default"])(_childElements2)));
      }
    }
    if (type) {
      return type;
    }
  }
  // If the type is a function/component, directly return it
  return json;
}
var resolveDefaults = exports.resolveDefaults = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, props, variables, query, asPath, setFetching, force) {
    var doPreReq, newProps, queryParams, body, user, defaults;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setFetching(true);
          doPreReq = false;
          newProps = {};
          queryParams = {};
          if (query && !(0, _util.isObjectEmpty)(query)) {
            queryParams = query;
          }
          if (!queryParams.u) {
            // Only add user username if u not present
            queryParams.u = (0, _onboarding.checkSignedIn)() && (0, _onboarding.checkSignedIn)().username ? (0, _onboarding.checkSignedIn)().username : null;
          }
          body = {
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
            user = (0, _onboarding.checkSignedIn)();
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
          if (!(doPreReq === true)) {
            _context.next = 15;
            break;
          }
          if (variables.domainKey) {
            body.domainKey = variables.domainKey;
          }
          _context.next = 13;
          return (0, _fetch.fetchPost)(variables.apiUrl + '/m/pagedefaults', null, null, body);
        case 13:
          defaults = _context.sent;
          if (defaults && defaults.data) {
            newProps = Object.keys(defaults.data).reduce(function (acc, key) {
              acc[key] = defaults.data[key];
              return acc;
            }, newProps);
          }
        case 15:
          newProps._loggedIn = (0, _onboarding.checkSignedIn)();
          return _context.abrupt("return", newProps);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function resolveDefaults(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();
var handlePropsPriority = exports.handlePropsPriority = function handlePropsPriority(mergeProps, props) {
  var temp = (0, _util.isObjectEmpty)(mergeProps) ? props : mergeProps;
  for (var key in temp) {
    if (key.startsWith('_')) {
      var desc = Object.getOwnPropertyDescriptor(temp, key);
      if (desc && desc.writable) {
        temp[key] = props[key];
      }
    }
  }
  return temp;
};
var basicError = exports.basicError = {
  error: "failed",
  code: 404
};
var getServerSidePropsDefault = exports.getServerSidePropsDefault = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(context, pageDefaults) {
    var paramOveride,
      force,
      data,
      variables,
      config,
      resolvedPage,
      body,
      doPreReq,
      i,
      defaults,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          paramOveride = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
          force = _args2.length > 3 ? _args2[3] : undefined;
          data = {
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
          variables = (0, _app.resolveVariables)();
          config = (0, _app["default"])(variables);
          resolvedPage = resolvePage(config, context.req.url);
          data.props.path = context.req.url;
          body = {
            url: context.req.url,
            params: context.query,
            domainKey: variables.domainKey,
            serverReq: true
          };
          doPreReq = false;
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
            for (i = 0; i < pageDefaults.length; i++) {
              doPreReq = true;
              body[pageDefaults[i] + 'Req'] = true;
            }
          }
          if (force) {
            doPreReq = true;
          }
          Object.entries(paramOveride).map(function (p) {
            body.params[p[0]] = p[1];
          });
          if (!doPreReq) {
            _context2.next = 20;
            break;
          }
          if (variables.domainKey) {
            body.domainKey = variables.domainKey;
          }
          _context2.next = 18;
          return (0, _fetch.fetchPost)(variables.apiUrl + '/m/pagedefaults', null, null, body);
        case 18:
          defaults = _context2.sent;
          if (defaults && defaults.data) {
            data.props = Object.keys(defaults.data).reduce(function (acc, key) {
              acc[key] = defaults.data[key];
              return acc;
            }, data.props);
          }
        case 20:
          if (context && context.query) {
            data.props.params = context.query;
          }
          if (doPreReq) {
            if (!defaults || defaults && defaults.status === 'failed') {
              data.props.error = basicError;
            }
          }
          return _context2.abrupt("return", data);
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getServerSidePropsDefault(_x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();
var getPropDefaults = exports.getPropDefaults = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data, context, pageDefaults) {
    var params,
      variables,
      config,
      body,
      i,
      defaults,
      _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          params = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : {};
          variables = (0, _app.resolveVariables)();
          config = (0, _app["default"])(variables);
          if (!(Array.isArray(pageDefaults) && pageDefaults.length > 0)) {
            _context3.next = 13;
            break;
          }
          body = {
            url: context.req.url,
            params: Object.assign(context.query, params),
            domainKey: variables.domainKey,
            serverReq: true
          };
          for (i = 0; i < pageDefaults.length; i++) {
            body[pageDefaults[i] + 'Req'] = true;
          }
          _context3.next = 8;
          return (0, _fetch.fetchPost)(variables.apiUrl + '/m/pagedefaults', null, null, body);
        case 8:
          defaults = _context3.sent;
          if (defaults && defaults.data) {
            data.props = Object.keys(defaults.data).reduce(function (acc, key) {
              acc[key] = defaults.data[key];
              return acc;
            }, data.props);
          }
          return _context3.abrupt("return", data);
        case 13:
          return _context3.abrupt("return", {});
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getPropDefaults(_x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();