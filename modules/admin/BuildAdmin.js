"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _fetch = require("../utility/fetch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var allowedTypes = ['application/gzip'];
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    msg1 = _React$useState6[0],
    setMsg1 = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    msg2 = _React$useState8[0],
    setMsg2 = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    msg3 = _React$useState10[0],
    setMsg3 = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    msg4 = _React$useState12[0],
    setMsg4 = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    msg5 = _React$useState14[0],
    setMsg5 = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    msg6 = _React$useState16[0],
    setMsg6 = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    msg7 = _React$useState18[0],
    setMsg7 = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(null),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    packages = _React$useState20[0],
    setPackages = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(-1),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    lastFetchPackages = _React$useState22[0],
    setLastFetchPackages = _React$useState22[1];
  var buildInput = _react["default"].useRef();
  var buildInput2 = _react["default"].useRef();
  var installPackageRef = _react["default"].useRef();
  var uninstallPackageRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  _react["default"].useEffect(function () {
    if (lastFetchPackages === -1 && !packages && props.apiUrl && props.domainKey && props._loggedIn) {
      setLastFetchPackages(new Date().getTime());
      getPackages(props.apiUrl, props.domainKey, props._loggedIn);
    }
  }, [componentId, props.apiUrl, props.domainKey, props._loggedIn]);
  var getPackages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(uri, domainKey, user) {
      var body, res, stringified;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context.next = 27;
              break;
            }
            body = {
              identifier: user.identifier,
              hash: user.hash,
              domainKey: domainKey
            };
            _context.next = 4;
            return (0, _fetch.fetchPost)(uri + '/a/getpackages', null, null, body);
          case 4:
            res = _context.sent;
            if (res) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", false);
          case 9:
            if (!res.hasOwnProperty('status')) {
              _context.next = 24;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 15;
              break;
            }
            logout();
            return _context.abrupt("return", "disauthenticated");
          case 15:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success" && res.data)) {
              _context.next = 24;
              break;
            }
            console.log(res.data);
            stringified = res.data.toString();
            if (stringified && JSON.parse(stringified)) {
              setPackages(JSON.parse(stringified));
            }
            return _context.abrupt("return", res);
          case 24:
            return _context.abrupt("return", false);
          case 27:
            return _context.abrupt("return", false);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getPackages(_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  var installPackage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uri, domainKey, user, pkg) {
      var options,
        r,
        body,
        res,
        _res$report,
        _res$report2,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : {};
            if (!(user.identifier && user.hash && domainKey)) {
              _context2.next = 31;
              break;
            }
            if (props.setFetchBusy) {
              props.setFetchBusy(true);
              r = setTimeout(function () {
                props.setFetchBusy(false);
              }, 10000);
            }
            if (options !== null && options !== void 0 && options.uninstall) {
              setMsg4(null);
            } else {
              setMsg3(null);
            }
            body = {
              identifier: user.identifier,
              hash: user.hash,
              username: user.username,
              domainKey: domainKey,
              "package": pkg,
              options: options
            };
            _context2.next = 7;
            return (0, _fetch.fetchPost)(uri + '/a/installpackage', null, null, body);
          case 7:
            res = _context2.sent;
            clearTimeout(r);
            props.setFetchBusy(false);
            if (res) {
              _context2.next = 14;
              break;
            }
            return _context2.abrupt("return", false);
          case 14:
            if (!res.hasOwnProperty('status')) {
              _context2.next = 28;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context2.next = 20;
              break;
            }
            logout();
            return _context2.abrupt("return", "disauthenticated");
          case 20:
            if (!(res.status == "failed")) {
              _context2.next = 25;
              break;
            }
            if (res.data) {
              if (options !== null && options !== void 0 && options.uninstall) {
                setMsg4(res.data);
              } else {
                setMsg3(res.data);
              }
            }
            return _context2.abrupt("return", false);
          case 25:
            if (!(res.status == "success" && res.data)) {
              _context2.next = 28;
              break;
            }
            if (options !== null && options !== void 0 && options.uninstall) {
              setMsg4((_res$report = res.report) !== null && _res$report !== void 0 ? _res$report : 'done');
            } else {
              setMsg3((_res$report2 = res.report) !== null && _res$report2 !== void 0 ? _res$report2 : 'done');
            }
            return _context2.abrupt("return", res);
          case 28:
            return _context2.abrupt("return", false);
          case 31:
            return _context2.abrupt("return", false);
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function installPackage(_x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewBuild = _react["default"].useCallback(function (e) {
    try {
      console.log(e.target);
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
            return m.type && allowedTypes.indexOf(m.type) > -1;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            return new File([blob], "".concat((0, _uuid.v4)(), ".tar.gz"), {
              type: m.type
            });
          });
          var f = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _e$target, formData, modif, data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn)) {
                      _context3.next = 20;
                      break;
                    }
                    formData = new FormData();
                    if (filesRenamed) {
                      filesRenamed.forEach(function (file) {
                        formData.append("file", file);
                      });
                    }
                    formData.append('domainKey', props.domainKey);
                    formData.append('hash', props._loggedIn.hash);
                    formData.append('identifier', props._loggedIn.identifier);
                    if (props.setFetchBusy) {
                      props.setFetchBusy(true);
                      setTimeout(function () {
                        props.setFetchBusy(false);
                      }, 10000);
                    }
                    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.getAttribute('modif')) {
                      modif = e.target.getAttribute('modif');
                    }
                    if (!(modif && modif === 'public')) {
                      _context3.next = 14;
                      break;
                    }
                    _context3.next = 11;
                    return doUploadBuildPublic(props.apiUrl, props.domainKey, props._loggedIn, formData);
                  case 11:
                    _context3.t0 = _context3.sent;
                    _context3.next = 17;
                    break;
                  case 14:
                    _context3.next = 16;
                    return doUploadBuild(props.apiUrl, props.domainKey, props._loggedIn, formData);
                  case 16:
                    _context3.t0 = _context3.sent;
                  case 17:
                    data = _context3.t0;
                    if (data) {
                      if (props.setFetchBusy) {
                        props.setFetchBusy(false);
                      }
                      if (data.status === 'success') {
                        if (modif && modif === 'public') {
                          setMsg2("Build Uploaded at ".concat(new Date().toDateString(), " ").concat(new Date().toTimeString()));
                        } else {
                          setMsg1("Build Uploaded at ".concat(new Date().toDateString(), " ").concat(new Date().toTimeString()));
                        }
                      }
                    }
                    if (buildInput.current) {
                      buildInput.current.value = '';
                    }
                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function f() {
              return _ref3.apply(this, arguments);
            };
          }();
          f();
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  var doUploadBuild = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(uri, domainKey, user, body) {
      var res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context4.next = 23;
              break;
            }
            _context4.next = 3;
            return (0, _fetch.fetchPost)(uri + '/a/uploadbuild', null, null, body, {
              formData: true
            });
          case 3:
            res = _context4.sent;
            if (res) {
              _context4.next = 8;
              break;
            }
            return _context4.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context4.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context4.next = 14;
              break;
            }
            logout();
            return _context4.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context4.next = 18;
              break;
            }
            return _context4.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context4.next = 20;
              break;
            }
            return _context4.abrupt("return", res);
          case 20:
            return _context4.abrupt("return", false);
          case 23:
            return _context4.abrupt("return", false);
          case 24:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function doUploadBuild(_x9, _x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
  var doUploadBuildPublic = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(uri, domainKey, user, body) {
      var res;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context5.next = 23;
              break;
            }
            _context5.next = 3;
            return (0, _fetch.fetchPost)(uri + '/a/uploadbuildpublic', null, null, body, {
              formData: true
            });
          case 3:
            res = _context5.sent;
            if (res) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context5.next = 20;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context5.next = 14;
              break;
            }
            logout();
            return _context5.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context5.next = 18;
              break;
            }
            return _context5.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context5.next = 20;
              break;
            }
            return _context5.abrupt("return", res);
          case 20:
            return _context5.abrupt("return", false);
          case 23:
            return _context5.abrupt("return", false);
          case 24:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function doUploadBuildPublic(_x13, _x14, _x15, _x16) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleUploadNewBuild = _react["default"].useCallback(function (e) {
    var _e$target2;
    console.log(e.target);
    if (e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        if (modif === 'public' && buildInput2.current) {
          buildInput2.current.click();
        }
      }
    } else if (buildInput.current) {
      buildInput.current.click(); // Prompt file upload
    }
  });

  var handleInstall = _react["default"].useCallback(function (e) {
    var _e$target3, _installPackageRef$cu;
    console.log(e);
    if (e !== null && e !== void 0 && (_e$target3 = e.target) !== null && _e$target3 !== void 0 && _e$target3.getAttribute('modif')) {
      var modif = e.target.getAttribute('modif');
      if (modif) {
        var _uninstallPackageRef$;
        if (modif === 'uninstall' && uninstallPackageRef !== null && uninstallPackageRef !== void 0 && (_uninstallPackageRef$ = uninstallPackageRef.current) !== null && _uninstallPackageRef$ !== void 0 && _uninstallPackageRef$.value) {
          installPackage(props.apiUrl, props.domainKey, props._loggedIn, uninstallPackageRef.current.value, {
            uninstall: true
          });
        }
      }
    } else if (installPackageRef !== null && installPackageRef !== void 0 && (_installPackageRef$cu = installPackageRef.current) !== null && _installPackageRef$cu !== void 0 && _installPackageRef$cu.value) {
      installPackage(props.apiUrl, props.domainKey, props._loggedIn, installPackageRef.current.value);
    }
  });
  var daemonBuild = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(uri, domainKey, user) {
      var r, body, res;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(user.identifier && user.hash && domainKey)) {
              _context6.next = 30;
              break;
            }
            if (props.setFetchBusy) {
              props.setFetchBusy(true);
              r = setTimeout(function () {
                props.setFetchBusy(false);
              }, 10000);
            }
            setMsg7(null);
            body = {
              identifier: user.identifier,
              hash: user.hash,
              username: user.username,
              domainKey: domainKey
            };
            _context6.next = 6;
            return (0, _fetch.fetchPost)(uri + '/a/daemonbuild', null, null, body);
          case 6:
            res = _context6.sent;
            clearTimeout(r);
            props.setFetchBusy(false);
            if (res) {
              _context6.next = 13;
              break;
            }
            return _context6.abrupt("return", false);
          case 13:
            if (!res.hasOwnProperty('status')) {
              _context6.next = 27;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context6.next = 19;
              break;
            }
            logout();
            return _context6.abrupt("return", "disauthenticated");
          case 19:
            if (!(res.status == "failed")) {
              _context6.next = 24;
              break;
            }
            setMsg7('Daemon Failed');
            return _context6.abrupt("return", false);
          case 24:
            if (!(res.status == "success" && res.data)) {
              _context6.next = 27;
              break;
            }
            setMsg7('Attempted to Daemon Build. Refresh on another tab to check');
            return _context6.abrupt("return", res);
          case 27:
            return _context6.abrupt("return", false);
          case 30:
            return _context6.abrupt("return", false);
          case 31:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function daemonBuild(_x17, _x18, _x19) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleDaemonBuild = _react["default"].useCallback(function (e) {
    daemonBuild(props.apiUrl, props.domainKey, props._loggedIn);
  });
  var handleSetCurrentBuildAsSafe = _react["default"].useCallback(function (e) {
    console.log(e);
  });
  var handleRecover = _react["default"].useCallback(function (e) {
    console.log(e);
  });
  var strippedUrl = props !== null && props !== void 0 && props.domainUrl ? props.domainUrl.replace(/(?:www\.)?/, '') : '';
  console.log(packages);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " Admin_Build_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Build"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Admin_Build_InternalContainer"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput,
    onChange: handleNewBuild
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload your new build in .next.tar.gz format. Use makebuild script to create new build",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Push New Build")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleUploadNewBuild
  }, "Upload Build"), msg1 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg1) : null)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: buildInput2,
    onChange: handleNewBuild,
    modif: "public"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Upload your new public folder in public.tar.gz format. Use makebuild script to create public folder tar",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Push New Public Folder")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleUploadNewBuild,
    modif: "public"
  }, "Upload Public Folder"), msg2 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg2) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Daemons current build uploaded to client server directory",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Build")))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "admin_prompt"
  }, "Caution: Running a bad build will bring down the platform immediately. Running new builds without having installed packages will cause the platform to be taken offline as well. This is temporary until platform at sys.", strippedUrl, " can be run to serve builds when ", props.domainUrl, " is offline."), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDaemonBuild,
    modif: "public"
  }, "Deploy Build"), msg7 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg7) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Currently installed Packages",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Installed Client Packages")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_container",
    style: {
      maxHeight: '300px',
      overflow: 'auto'
    }
  }, packages !== null && packages !== void 0 && packages.dependencies && Object.entries(packages.dependencies) ? Object.entries(packages.dependencies).map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p5",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", null, m[0]), /*#__PURE__*/_react["default"].createElement("div", null, m[1]));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Install NPM Package here. Use Package@Version syntax for specific Version if required. Request must be approved by repo if package not already whitelisted",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Install")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_pair"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: installPackageRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleInstall
  }, "Install")), msg3 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg3) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Will uninstall package referenced here. Ensure to upload new build before uninstalling packages that current build relies on. Otherwise platform will go down",
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Run Uninstall")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_pair"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "NPM Package",
    ref: uninstallPackageRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleInstall,
    modif: "uninstall"
  }, "Uninstall")), msg4 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "admin_update"
  }, msg4) : null)));
};
var _default = Module;
exports["default"] = _default;