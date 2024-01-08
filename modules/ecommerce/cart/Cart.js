"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../payment/index.js");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _useCartOfCurrency$cu2, _useCartOfCurrency$it, _useCartOfCurrency$cu3, _useCartOfCurrency$cu4, _useCartOfCurrency$cu5, _useCartOfCurrency$cu6, _useCartOfCurrency$cu7, _useCartOfCurrency$cu8, _useCartOfCurrency$re, _useCartOfCurrency$re2, _useCartOfCurrency$re3;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fetchBusy = _React$useState4[0],
    setFetchBusy = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    validCc = _React$useState8[0],
    setValidCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    cartMessages = _React$useState10[0],
    setCartMessages = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    tempOveride = _React$useState12[0],
    setTempOveride = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(true),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    showContent = _React$useState14[0],
    setShowContent = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    solution = _React$useState16[0],
    setSolution = _React$useState16[1];
  var container = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var mouseOverContainer = function mouseOverContainer() {
    console.log('Did mouse over', props);
    if (props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(null, 'cart', true);
    }
  };
  props._LocalEventEmitter.unsubscribe('cart_update');
  props._LocalEventEmitter.subscribe('cart_update', function (e) {
    var temp = _toConsumableArray(cartMessages);
    if (e) {
      console.log('Cart Update', e);
      if (e.dispatch === 'purchase') {
        temp = temp.filter(function (m) {
          return m && m.type !== 'purchase';
        });
        var domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
        temp.push({
          message: 'Purchase success',
          href: "".concat(domain, "/r?o=").concat(e.id),
          hrefCta: 'View your Receipt Here',
          type: 'purchase'
        });
        setCartMessages(temp);
      } else if (e.dispatch === 'flashCart') {
        // Attempts to flash cart showing cart based on recent interaction
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride();
        }
        setTimeout(function () {
          setTempOveride(false);
        }, 10000);
      } else if (e.dispatch === 'purchaseComplete') {
        if (e.type === 'paystack') {
          console.log('paystack purchase', e);
          var r = setTimeout(function () {
            setFetchBusy(false);
          }, 20000);
          completePurchase(e.data.snapshot, e.data.cart, r, e.data);
        }
      }
    }
  });
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
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
  var completePurchase = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(snapshot, cart, r) {
      var extra,
        res,
        temp,
        domain,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            extra = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            _context2.next = 3;
            return (0, _ecommerce.performPurchase)(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot,
              extra: extra
            });
          case 3:
            res = _context2.sent;
            console.log(res);
            if (res) {
              if (r) {
                clearTimeout(r);
              }
              setFetchBusy(false);
              console.log(res);
              if (res.status === 'success') {
                if (res.data && res.data.cart) {
                  (0, _ecommerce.updateCart)(props._cart, res.data.cart);
                }
                temp = _toConsumableArray(cartMessages);
                temp = temp.filter(function (m) {
                  return m && m.type !== 'purchase';
                });
                domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
                temp.push({
                  message: 'Purchase success',
                  href: "".concat(domain, "/r?o=").concat(res.data.order.id),
                  hrefCta: 'View your Receipt Here',
                  type: 'purchase'
                });
                setCartMessages(temp);
                console.log('Purchase Success', res);
              } else {
                setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            } else {
              if (r) {
                clearTimeout(r);
              }
              setFetchBusy(false);
              setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function completePurchase(_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();
  console.log(props, props._cart);
  var useCartOfCurrency = _react["default"].useMemo(function () {
    var _useFirstItem$product;
    var useFirstItem = (cart === null || cart === void 0 ? void 0 : cart.items) && cart.items[0];
    if (useFirstItem !== null && useFirstItem !== void 0 && (_useFirstItem$product = useFirstItem.product) !== null && _useFirstItem$product !== void 0 && _useFirstItem$product.styles) {
      var resolveStyleObject = useFirstItem.product.styles.find(function (m) {
        return m.sid === useFirstItem.style;
      });
      if (resolveStyleObject) {
        var regionBasedPrice = (0, _ecommerce.resolveRegionBasedPrice)(props, resolveStyleObject);
        if (regionBasedPrice) {
          var remaining = [];
          var o = {
            items: cart.items.filter(function (m) {
              var useItemStyleObject = m.product.styles.find(function (n) {
                return n.sid === m.style;
              });
              if (useItemStyleObject) {
                var data = (0, _ecommerce.resolveRegionBasedPrice)(props, useItemStyleObject);
                if (data && data.currency === regionBasedPrice.currency) {
                  return true;
                }
              }
              remaining.push(m);
              return false;
            }),
            currency: regionBasedPrice,
            user: cart.user
          };
          o.remaining = remaining;
          return o;
        }
      }
    }
  }, [props, cart]);
  var handlePerformPurchase = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var _useCartOfCurrency$cu, r, snapshot, _props$paymentConfig, _props$paymentConfig$, _props$_loggedIn, _props$paymentConfig$2, _props$paymentConfig2, _props$paymentConfig3, transactionRef, handler;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (fetchBusy) {
              _context3.next = 24;
              break;
            }
            setFetchBusy(true);
            r = setTimeout(function () {
              setFetchBusy(false);
            }, 20000);
            setPageError(null);
            console.log(useCartOfCurrency);
            snapshot = (0, _ecommerce.calculateTotal)(useCartOfCurrency, null, {
              region: (_useCartOfCurrency$cu = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu !== void 0 ? _useCartOfCurrency$cu : null,
              object: true
            }, props);
            console.log('snapshot', snapshot, solution);
            if (!solution) {
              _context3.next = 22;
              break;
            }
            if (!(solution.payment === 'stripe')) {
              _context3.next = 13;
              break;
            }
            completePurchase(snapshot, useCartOfCurrency, r, {
              type: 'stripe'
            });
            _context3.next = 20;
            break;
          case 13:
            if (!(solution.payment === 'paystack' && PaystackPop && props !== null && props !== void 0 && (_props$paymentConfig = props.paymentConfig) !== null && _props$paymentConfig !== void 0 && (_props$paymentConfig$ = _props$paymentConfig.keys) !== null && _props$paymentConfig$ !== void 0 && _props$paymentConfig$.paystack && props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.email)) {
              _context3.next = 20;
              break;
            }
            transactionRef = (0, _uuid.v4)();
            clearTimeout(r);
            _context3.next = 18;
            return PaystackPop.setup({
              key: props.paymentConfig.keys.paystack,
              // Replace with your public key
              email: props._loggedIn.email,
              amount: snapshot.total * 100,
              // the amount value is multiplied by 100 to convert to the lowest currency unit
              currency: (_props$paymentConfig$2 = (_props$paymentConfig2 = props.paymentConfig) === null || _props$paymentConfig2 === void 0 ? void 0 : (_props$paymentConfig3 = _props$paymentConfig2.currency) === null || _props$paymentConfig3 === void 0 ? void 0 : _props$paymentConfig3.paystack) !== null && _props$paymentConfig$2 !== void 0 ? _props$paymentConfig$2 : 'USD',
              // Use GHS for Ghana Cedis or USD for US Dollars
              ref: transactionRef,
              // Replace with a reference you generated
              callback: function callback(response) {
                // Success payment
                props._LocalEventEmitter.dispatch('cart_update', {
                  // Update Server with Purchase transaction. Assume payment received by Paystack approval
                  dispatch: 'purchaseComplete',
                  type: 'paystack',
                  data: {
                    cart: useCartOfCurrency,
                    paystackResponse: response,
                    snapshot: snapshot,
                    status: 'payment_complete',
                    transactionRef: transactionRef,
                    type: 'paystack'
                  }
                });
              },
              onClose: function onClose() {
                // Failed payment
                setFetchBusy(false);
                setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            });
          case 18:
            handler = _context3.sent;
            handler.openIframe();
          case 20:
            _context3.next = 24;
            break;
          case 22:
            setFetchBusy(false);
            setPageError({
              message: 'Purchase currently not supported in your Country',
              placement: 'purchase'
            });
          case 24:
            _context3.next = 29;
            break;
          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](0);
            setFetchBusy(false);
          case 29:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 26]]);
    }));
    return function (_x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  var total = (0, _ecommerce.calculateTotal)(useCartOfCurrency, null, {
    region: (_useCartOfCurrency$cu2 = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu2 !== void 0 ? _useCartOfCurrency$cu2 : null,
    object: true
  }, props);
  var free = total && Object.prototype.hasOwnProperty.call(total, 'total') && total.total === 0;
  console.log('Cart', cart, total, validCc, useCartOfCurrency);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Cart_Container ".concat(props.className, " ").concat(props.open || props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'cart' || tempOveride ? 'Ecommerce_Cart_Container_Visible' : ''),
    ref: container
  }, props.open || props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'cart' || tempOveride ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Cart_Internal_Container"
  },
  // this must go into cart module
  !cart || cart && !cart.items || cart && cart.items && cart.items.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Prompt"
  }, "Your cart is empty.") : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      flexDirection: 'column',
      marginTop: '.3rem',
      marginBottom: '.3rem'
    }
  }, useCartOfCurrency !== null && useCartOfCurrency !== void 0 && (_useCartOfCurrency$it = useCartOfCurrency.items) !== null && _useCartOfCurrency$it !== void 0 && _useCartOfCurrency$it.map ? useCartOfCurrency.items.map(function (item, i) {
    var _item$product, _props$cdn;
    var current = (0, _ecommerce.resolveCurrentStyle)(item.product, item.style);
    var currentOption = (0, _ecommerce.resolveCurrentOption)(current, item.option);
    var priceObject = (0, _ecommerce.resolveRegionBasedPrice)(props, current);
    var price = priceObject.price;
    var symbol = priceObject.symbol;
    var useImage = item !== null && item !== void 0 && (_item$product = item.product) !== null && _item$product !== void 0 && _item$product.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
    console.log(item);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "gap-p2 Ecommerce_Item_Container",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Item_Image_Container",
      style: {
        backgroundImage: useImage && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"] ? "url(".concat(props.cdn["static"], "/").concat(useImage, ")") : null
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Title"
    }, item.product.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Price_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, (0, _ecommerce.resolveMoneyFormat)(price)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "flex",
      style: {
        fontSize: '.7rem',
        color: 'grey'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, current && current.style ? current.style : ''), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0~\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, currentOption && currentOption.option ? "".concat(currentOption.option) : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Quantity_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Inventory["default"], {
      sx: {
        width: '.85rem',
        height: '.9rem',
        marginRight: '.25rem'
      }
    })), /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      value: item.quantity,
      style: {
        height: '1.125rem',
        maxWidth: '3rem'
      },
      onChange: handleUpdateQuantity,
      styleId: item.style,
      optionId: item.option,
      productId: item.product.id,
      quantity: item.quantity
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Side_Meta_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        color: 'grey',
        fontSize: '.7rem',
        height: '17px',
        textAlign: 'right'
      }
    }, "Subtotal:"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, (0, _ecommerce.resolveMoneyFormat)(item.quantity * price)))))));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      lineHeight: '1.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex Ecommerce_Price"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Items:\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_useCartOfCurrency$cu3 = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : (_useCartOfCurrency$cu4 = useCartOfCurrency.currency) === null || _useCartOfCurrency$cu4 === void 0 ? void 0 : _useCartOfCurrency$cu4.symbol) !== null && _useCartOfCurrency$cu3 !== void 0 ? _useCartOfCurrency$cu3 : null, (0, _ecommerce.resolveMoneyFormat)((0, _ecommerce.calculateTotal)(useCartOfCurrency, null, {
    region: (_useCartOfCurrency$cu5 = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu5 !== void 0 ? _useCartOfCurrency$cu5 : null
  }, props)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex Ecommerce_Price"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      lineHeight: '1.4rem'
    }
  }, "Cart Total:\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1.25rem'
    }
  }, (_useCartOfCurrency$cu6 = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : (_useCartOfCurrency$cu7 = useCartOfCurrency.currency) === null || _useCartOfCurrency$cu7 === void 0 ? void 0 : _useCartOfCurrency$cu7.symbol) !== null && _useCartOfCurrency$cu6 !== void 0 ? _useCartOfCurrency$cu6 : null, (0, _ecommerce.resolveMoneyFormat)((0, _ecommerce.calculateTotal)(useCartOfCurrency, null, {
    region: (_useCartOfCurrency$cu8 = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu8 !== void 0 ? _useCartOfCurrency$cu8 : null
  }, props)))), (validCc || free) && cart && cart.items && cart.items.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      width: '100%',
      marginBottom: '.25rem'
    },
    onClick: handlePerformPurchase
  }, "Purchase"), pageError && pageError.message && pageError.placement == 'purchase' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "error",
    style: {
      marginBottom: '.125rem'
    },
    onClick: handleClearError
  }, pageError.message) : null) : null, cartMessages && cartMessages.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      paddingBottom: '.25rem'
    }
  }, cartMessages.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: _defineProperty({
        background: '#4c4c4c',
        padding: '.25rem',
        width: '-webkit-fill-available',
        textAlign: 'center'
      }, "width", '100%')
    }, /*#__PURE__*/_react["default"].createElement("div", null, m.message), m.href ? /*#__PURE__*/_react["default"].createElement("span", null, "\xA0", /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        background: '#eaeaea',
        color: '#000000',
        padding: '.125rem',
        borderRadius: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: m.href
    }, /*#__PURE__*/_react["default"].createElement("button", null, m.hrefCta)))) : null);
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Credit_Card_Module_Container ".concat(validCc ? 'slide_hide slide_hide_do_full_show' : 'slide_hide slide_hide_visible', " ").concat(props.forceShowCc || props._isMobile ? 'slide_hide_do_force_show' : ''),
    style: {
      marginBottom: '.25rem'
    }
  }, showContent ? validCc ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "hover_show ".concat(props.forceShowCc || props._isMobile ? 'hover_show_Cc_force' : '', " Ecommerce_Credit_Card_Label"),
    style: {
      textAlign: 'center'
    }
  }, "Credit Card") : cart && cart.items && cart.items.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.65rem'
    }
  }, free ? '' : 'Add a Credit Card to fulfill Purchase') : null : null, /*#__PURE__*/_react["default"].createElement(_index.CreditCard, _extends({}, props, {
    stagger: 500,
    validCc: validCc,
    setValidCc: setValidCc,
    setShowContent: setShowContent,
    setSolution: setSolution,
    sx: {
      marginBottom: '.5rem',
      marginTop: '.25rem'
    },
    children: props.ccChildren
  }))), validCc && cart && cart.items && cart.items.length > 0 || free ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.65rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem'
    }
  }, "Placing your order above will fulfill payment to the shop vendors and confirms your agreement with ", props.siteTitle, " terms and conditions") : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      flexDirection: 'column',
      marginTop: '.3rem',
      marginBottom: '.3rem'
    }
  }, (useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : (_useCartOfCurrency$re = useCartOfCurrency.remaining) === null || _useCartOfCurrency$re === void 0 ? void 0 : _useCartOfCurrency$re.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#222222',
      fontSize: '.75rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem',
      padding: '.25rem .5rem'
    }
  }, "The Items below will not be processed yet. They are in a different currency") : null, useCartOfCurrency !== null && useCartOfCurrency !== void 0 && (_useCartOfCurrency$re2 = useCartOfCurrency.remaining) !== null && _useCartOfCurrency$re2 !== void 0 && _useCartOfCurrency$re2.map ? useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : (_useCartOfCurrency$re3 = useCartOfCurrency.remaining) === null || _useCartOfCurrency$re3 === void 0 ? void 0 : _useCartOfCurrency$re3.map(function (item, i) {
    var _item$product2, _props$cdn2;
    var current = (0, _ecommerce.resolveCurrentStyle)(item.product, item.style);
    var currentOption = (0, _ecommerce.resolveCurrentOption)(current, item.option);
    var priceObject = (0, _ecommerce.resolveRegionBasedPrice)(props, current);
    var price = priceObject.price;
    var symbol = priceObject.symbol;
    var useImage = item !== null && item !== void 0 && (_item$product2 = item.product) !== null && _item$product2 !== void 0 && _item$product2.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
    console.log(item);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "gap-p2 Ecommerce_Item_Container",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Item_Image_Container",
      style: {
        backgroundImage: useImage && props !== null && props !== void 0 && (_props$cdn2 = props.cdn) !== null && _props$cdn2 !== void 0 && _props$cdn2["static"] ? "url(".concat(props.cdn["static"], "/").concat(useImage, ")") : null
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Title"
    }, item.product.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Price_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, (0, _ecommerce.resolveMoneyFormat)(price)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "flex",
      style: {
        fontSize: '.7rem',
        color: 'grey'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, current && current.style ? current.style : ''), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0~\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, currentOption && currentOption.option ? "".concat(currentOption.option) : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Quantity_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Inventory["default"], {
      sx: {
        width: '.85rem',
        height: '.9rem',
        marginRight: '.25rem'
      }
    })), /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      value: item.quantity,
      style: {
        height: '1.125rem',
        maxWidth: '3rem'
      },
      onChange: handleUpdateQuantity,
      styleId: item.style,
      optionId: item.option,
      productId: item.product.id,
      quantity: item.quantity
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Side_Meta_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        color: 'grey',
        fontSize: '.7rem',
        height: '17px',
        textAlign: 'right'
      }
    }, "Subtotal:"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, (0, _ecommerce.resolveMoneyFormat)(item.quantity * price)))))));
  }) : null)))) : null));
};
var _default = Module;
exports["default"] = _default;