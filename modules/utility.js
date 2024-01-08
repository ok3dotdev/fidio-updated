"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicError = void 0;
exports.generateComponent = generateComponent;
exports.resolvePage = exports.resolveDefaults = exports.resolveComponent = exports.handlePropsPriority = exports.getServerSidePropsDefault = void 0;
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
var _customModules = _interopRequireDefault(require("../customModules"));
var _presentation = _interopRequireDefault(require("./presentation"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var resolveComponent = function resolveComponent(json) {
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
exports.resolveComponent = resolveComponent;
var resolvePage = function resolvePage(def, path) {
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
exports.resolvePage = resolvePage;
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
var resolveDefaults = /*#__PURE__*/function () {
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
            params: queryParams
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
            body.domainKey = variables.domainKey;
            user = (0, _onboarding.checkSignedIn)();
            if (user && user.identifier && user.hash) {
              body.identifier = user.identifier;
              body.hash = user.hash;
            }
          }
          if (!props.regionsData) {
            doPreReq = true;
            body.regionsReq = true;
          }
          if (!(doPreReq === true)) {
            _context.next = 14;
            break;
          }
          _context.next = 12;
          return (0, _fetch.fetchPost)(variables.apiUrl + '/m/pagedefaults', null, null, body);
        case 12:
          defaults = _context.sent;
          if (defaults && defaults.data) {
            newProps = Object.keys(defaults.data).reduce(function (acc, key) {
              acc[key] = defaults.data[key];
              return acc;
            }, newProps);
          }
        case 14:
          newProps._loggedIn = (0, _onboarding.checkSignedIn)();
          return _context.abrupt("return", newProps);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function resolveDefaults(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();
exports.resolveDefaults = resolveDefaults;
var handlePropsPriority = function handlePropsPriority(mergeProps, props) {
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
exports.handlePropsPriority = handlePropsPriority;
var basicError = {
  error: "failed",
  code: 404
};
exports.basicError = basicError;
var getServerSidePropsDefault = /*#__PURE__*/function () {
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
            domainKey: variables.domainKey
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
            _context2.next = 19;
            break;
          }
          _context2.next = 17;
          return (0, _fetch.fetchPost)(variables.apiUrl + '/m/pagedefaults', null, null, body);
        case 17:
          defaults = _context2.sent;
          if (defaults && defaults.data) {
            data.props = Object.keys(defaults.data).reduce(function (acc, key) {
              acc[key] = defaults.data[key];
              return acc;
            }, data.props);
          }
        case 19:
          if (context && context.query) {
            data.props.params = context.query;
          }
          if (doPreReq) {
            if (!defaults || defaults && defaults.status === 'failed') {
              data.props.error = basicError;
            }
          }
          return _context2.abrupt("return", data);
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getServerSidePropsDefault(_x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getServerSidePropsDefault = getServerSidePropsDefault;