"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SubMenu = _interopRequireDefault(require("./SubMenu.js"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var _link = _interopRequireDefault(require("next/link"));
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _cart2 = require("../ecommerce/cart/");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import brand from '../../styles/Brand.module.scss';
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    pageError = _React$useState4[0],
    setPageError = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    validCc = _React$useState6[0],
    setValidCc = _React$useState6[1];
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var handleToggleSettings = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'main_settings');
    }
  }, [props._openMenu]);
  var handleLogout = _react["default"].useCallback(function (e) {
    (0, _SignIn.logout)(props._setLoggedIn);
    setTimeout(function () {
      props._LocalEventEmitter.dispatch('showSignIn', {});
    }, 4000); // Give time to logout before firing event
  });

  var toggleCart = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'cart');
    }
  });

  /**
   * Ensures cart is open after interaction if menuConfig.menuOpenAfterCartInteraction is set to true
   */
  var passOveride = _react["default"].useCallback(function (e) {
    if (props.menuConfig.menuOpenAfterCartInteraction) {
      props._toggleSingleOpenMenu(e, 'cart', true);
    }
  });
  var handleUpdateQuantity = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var style, option, quantity, productId, options, product, _cart, res, returnProduct;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(e.currentTarget.getAttribute, fetchBusy);
            if (!(!fetchBusy && e && e.currentTarget && e.currentTarget.getAttribute)) {
              _context.next = 18;
              break;
            }
            setFetchBusy(true);
            style = e.currentTarget.getAttribute('styleId');
            option = e.currentTarget.getAttribute('optionId');
            quantity = e.currentTarget.getAttribute('quantity');
            productId = e.currentTarget.getAttribute('productId');
            options = {};
            if (Number(e.currentTarget.value) < Number(quantity)) {
              options.decrement = true;
            }
            _cart = JSON.parse(localStorage.getItem('cart'));
            if (productId && _cart && _cart.items) {
              product = _cart.items.find(function (item) {
                return item.product.id === productId;
              });
            }
            if (!product) {
              _context.next = 17;
              break;
            }
            _context.next = 15;
            return (0, _ecommerce.addToCart)(props.apiUrl, props.domainKey, props._loggedIn, _cart, product.product, {
              style: style,
              option: option
            }, setFetchBusy, options);
          case 15:
            res = _context.sent;
            if (res) {
              if (res.status === 'success') {
                (0, _ecommerce.updateCart)(_cart, res.cart);
                if (res.cart && res.cart.items) {
                  returnProduct = res.cart.items.find(function (item) {
                    return item.product.id === productId;
                  });
                  if (returnProduct) {
                    e.target.value = returnProduct.quantity;
                  }
                }
              }
            }
          case 17:
            setFetchBusy(false);
          case 18:
            _context.next = 24;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            setFetchBusy(false);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }());
  var cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) : null;
  var handlePerformPurchase = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var snapshot, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (fetchBusy) {
              _context2.next = 12;
              break;
            }
            setFetchBusy(true);
            setPageError(null);
            console.log(cart);
            snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
              object: true
            });
            console.log('snapshot', snapshot);
            _context2.next = 9;
            return (0, _ecommerce.performPurchase)(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot
            });
          case 9:
            res = _context2.sent;
            if (res) {
              console.log(res);
              if (res.status === 'success') {
                // if (res.data && res.data.cart) {
                //     updateCart(props._cart, res.data.cart)
                // }
                console.log('Purchase Success', res);
              }
            } else {
              setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
            setFetchBusy(false);
          case 12:
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setFetchBusy(false);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());

  // console.log('Cart', cart, props.menuConfig.right)

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 100 + "%",
      height: props.menuConfig.height ? props.menuConfig.height + 'px' : '',
      padding: props.menuConfig.padding ? props.menuConfig.padding : ''
    },
    className: "leadMenuContainer ".concat(_MenuModule["default"].container, " darkModeEnforce Menu_LeadContainer ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: 0,
      paddingTop: 0,
      maxHeight: '100%'
    },
    className: "margin1600 menuContainer"
  }, /*#__PURE__*/_react["default"].createElement(_SubMenu["default"], props), /*#__PURE__*/_react["default"].createElement("ul", {
    className: !props._loggedIn ? "".concat(_MenuModule["default"].menu, " ").concat(_MenuModule["default"].menuClosed) : _MenuModule["default"].menu
  }, props.menuConfig && props.menuConfig.right ? props.menuConfig.right.map(function (c, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, c.type ? c.type === 'user' ? props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p",
      className: "menuLinkSelector ".concat(c.className),
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink")
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, props._loggedIn && props._loggedIn.username ? props._loggedIn.username : 'Dashboard'), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " person material-icons")
    }, "person")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " person material-icons")
    }, "person"))) : null : c.type === 'settings' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "menuLinkSelector ".concat(c.className),
      onClick: handleToggleSettings,
      style: {
        position: 'relative',
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink ").concat(_MenuModule["default"].stillShow)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].menuLinkIconNoText, " settings material-icons ").concat(_MenuModule["default"].stillShow)
    }, "settings")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " settings material-icons")
    }, "settings")), props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "dropMenu"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
      onClick: handleLogout
    }, "Logout")) : null)) : null) : c.type === 'cart' ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      onClick: toggleCart,
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Cart"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " cart material-icons")
    }, "shopping_cart")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " cart material-icons")
    }, "shopping_cart")) : c.type === 'link' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: c.href,
      className: "menuLinkSelector ".concat(c.className),
      style: {
        alignSelf: 'center'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, c.name)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " material-icons")
    }, c.name))) : null : null);
  }) : null)), /*#__PURE__*/_react["default"].createElement(_cart2.Cart, _extends({}, props, {
    passOveride: passOveride,
    forceShowCc: true
  })));
};
var _default = Module;
exports["default"] = _default;