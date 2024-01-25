"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicError = void 0;
exports.generateComponent = generateComponent;
exports.resolvePageName = exports.resolvePage = exports.resolveDefaults = exports.resolveComponent = exports.handlePropsPriority = exports.getServerSidePropsDefault = void 0;
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
var _index4 = require("./video/player/index");
var _indexing = require("./indexing");
var _router = require("next/router");
var _fetch = require("./utility/fetch");
var _onboarding = require("./utility/onboarding");
var _util = require("./util");
var _settings = require("./settings");
var _customModules = _interopRequireDefault(require("../customModules"));
var _presentation = _interopRequireDefault(require("./presentation"));
var _eventPage = require("./presentation/events.js/eventPage");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var resolveComponent = exports.resolveComponent = function resolveComponent(json) {
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
      case 'EventPage':
        return /*#__PURE__*/_react["default"].createElement(_eventPage.EventPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'ReceiptPage':
        return /*#__PURE__*/_react["default"].createElement(_receipt.ReceiptPage, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'CreditCard':
        return /*#__PURE__*/_react["default"].createElement(_index3.CreditCard, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Streaming_Manager':
        return /*#__PURE__*/_react["default"].createElement(_manager.Manager, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Onboarding_SignIn_Username':
        return /*#__PURE__*/_react["default"].createElement(_index.Username, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Video_Test_Live_Player':
        return /*#__PURE__*/_react["default"].createElement(_index4.LivePlayer, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Feature':
        return /*#__PURE__*/_react["default"].createElement(_feature.Feature, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'WideFeature':
        return /*#__PURE__*/_react["default"].createElement(_wideFeature.WideFeature, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'SliderBasic':
        return /*#__PURE__*/_react["default"].createElement(_indexing.SliderBasic, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'FetchHandler':
        return /*#__PURE__*/_react["default"].createElement(_fetch.FetchHandler, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'Settings':
        return /*#__PURE__*/_react["default"].createElement(_settings.Settings, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
      case 'CustomModule':
        if (json && json.props && json.props.customModule) {
          var UseModule = _customModules["default"][json.props.customModule];
          if (UseModule) {
            return /*#__PURE__*/_react["default"].createElement(UseModule, json.props, json.children && json.children.map ? json.children.map(generateComponent) : null);
          }
        }
        return null;
      case 'Presentation':
        if (json && json.props && json.props.module && _presentation["default"] && Object.prototype.hasOwnProperty.call(_presentation["default"], json.props.module)) {
          var _UseModule = _presentation["default"][json.props.module];
          console.log('Module Found', _UseModule, _presentation["default"]);
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
    return match;
  }
  return null;
};
var resolvePageName = exports.resolvePageName = function resolvePageName(path) {
  switch (path) {
    case '/':
      return 'Index';
    default:
      return path !== null && path !== void 0 && path.replace ? path.replace('/', '') : '';
  }
};
function generateComponent(json) {
  if (json) {
    console.log(json);
    var type = json.type,
      props = json.props,
      children = json.children;

    // If the type is a string, create a React element
    if (typeof type === 'string') {
      // Check if the type is the custom component
      var matchComponent = resolveComponent(json);
      if (matchComponent) {
        return matchComponent;
      }
      if (children && children.map) {
        var childElements = children && children.map(generateComponent);
        return /*#__PURE__*/_react["default"].createElement.apply(_react["default"], [type, props].concat(_toConsumableArray(childElements)));
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
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, props, variables, query, asPath, setFetching, force) {
    var doPreReq, newProps, queryParams, body, user, defaults;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
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
  console.log(props, mergeProps);
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context, pageDefaults) {
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
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
            doPreReq = true;
            body.profileReq = true;
            body.shopProfileReq = true;
          } else if (resolvedPage && resolvedPage.url === '/w') {
            doPreReq = true;
            body.watchReq = true;
            body.shopProfileReq = true;
          } else if (resolvedPage && resolvedPage.url === '/e') {
            doPreReq = true;
            body.profileReq = true;
            body.eventReq = true;
          }
          if (resolvedPage && resolvePage.data) {
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