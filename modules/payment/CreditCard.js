"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _stripeJs = require("@stripe/stripe-js");
var _index = require("../utility/payment/index");
var _SignIn = require("../utility/onboarding/SignIn");
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
var Module = function Module(props) {
  var _props$marginBottom;
  var nameOnCard = _react["default"].useRef();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    stagger = _React$useState4[0],
    setStagger = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    validCc = _React$useState6[0],
    setValidCc = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    fetchingCc = _React$useState8[0],
    setFetchingCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    stripePromise = _React$useState10[0],
    setStripePromise = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    registerNewCard = _React$useState12[0],
    setRegisterNewCard = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    fetchBusy = _React$useState14[0],
    setFetchBusy = _React$useState14[1];
  var staggerRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      if (props.stagger) {
        staggerRef.current = setTimeout(function () {
          setStagger(true);
        }, props.stagger);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.stagger]);
  _react["default"].useEffect(function () {
    if (props.stripeKey && !stripePromise) {
      var prom = (0, _stripeJs.loadStripe)(props.stripeKey);
      if (prom) {
        setStripePromise(prom);
      }
    }
  }, [props.stripeKey]);
  _react["default"].useEffect(function () {
    function fn() {
      return _fn.apply(this, arguments);
    }
    function _fn() {
      _fn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!validCc && props._loggedIn && !fetchingCc && !props._stripeSecret)) {
                _context.next = 18;
                break;
              }
              _context.prev = 1;
              setFetchingCc(true);
              _context.next = 5;
              return (0, _index.getStripeSecretData)(props.apiUrl, props.domainKey, props._loggedIn);
            case 5:
              data = _context.sent;
              if (!(data && data.client_secret && data.card)) {
                _context.next = 11;
                break;
              }
              props._setStripeSecret(data);
              setFetchingCc(false);
              _context.next = 12;
              break;
            case 11:
              throw new Error();
            case 12:
              _context.next = 18;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              setFetchingCc(false);
            case 18:
              ;
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 14]]);
      }));
      return _fn.apply(this, arguments);
    }
    fn();
  }, [props._loggedIn, props._stripeSecret]);
  var handleSaveBillingInfo = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, elements, stripe, nameOnCard) {
      var user, data, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            e.preventDefault();
            console.log(e, elements, stripe, nameOnCard);
            if (fetchBusy) {
              _context2.next = 22;
              break;
            }
            setFetchBusy(true);
            setTimeout(function () {
              setFetchBusy(false);
            }, 15000);
            user = (0, _SignIn.checkSignedInAndPrompt)();
            if (!user) {
              _context2.next = 22;
              break;
            }
            if (!(nameOnCard && nameOnCard.current && nameOnCard.current.value)) {
              _context2.next = 20;
              break;
            }
            data = {
              fullName: "",
              result: null,
              stripeSecret: props._stripeSecret
            };
            data.fullName = nameOnCard.current.value;
            _context2.next = 13;
            return stripe.confirmCardSetup(props._stripeSecret.client_secret, {
              // Stores credit card on users account
              payment_method: {
                card: elements.getElement(_reactStripeJs.CardElement),
                billing_details: {
                  name: data.fullName
                }
              }
            });
          case 13:
            data.result = _context2.sent;
            _context2.next = 16;
            return (0, _index.saveCreditCardInfo)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn);
          case 16:
            res = _context2.sent;
            if (!res) {
              props._setPageError("Failed to save Credit Card");
              setFetchBusy(false);
            } else if (res == "disauthenticated") {
              props._setLoggedIn(false);
              props._setStripeSecret(false);
              (0, _SignIn.logout)();
              setFetchBusy(false);
            } else if (res.status == "success" && res.newSecret) {
              setRegisterNewCard(false);
              // On successfull credit card received, purchase phone number and then update locally
              props._setStripeSecret(res.newSecret);
              setFetchBusy(false);
            }
            _context2.next = 22;
            break;
          case 20:
            props._setPageError("Please type in your Full Name as it appears on your Credit Card");
            setFetchBusy(false);
          case 22:
            _context2.next = 28;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0); // fail silently
            setFetchBusy(false);
          case 28:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 24]]);
    }));
    return function handleSaveBillingInfo(_x2, _x3, _x4, _x5) {
      return _ref.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    buildValidCc(props._stripeSecret);
  }, [props._stripeSecret]);
  var buildValidCc = function buildValidCc(secret) {
    if (secret && secret.card && secret.card.data && secret.card.data[0] && secret.card.data[0].card && secret.card.data[0].billing_details) {
      if (secret.card.data[0].card.last4 && secret.card.data[0].card.exp_month && secret.card.data[0].card.exp_year) {
        var convExp = function convExp(exp) {
          try {
            var temp = exp.toString();
            if (temp.length === 4) {
              return temp.substring(2, 4);
            }
            throw new Error();
          } catch (err) {
            return exp;
          }
        };
        setValidCc({
          name: secret.card.data[0].billing_details.name ? secret.card.data[0].billing_details.name : null,
          last4: secret.card.data[0].card.last4,
          exp_month: secret.card.data[0].card.exp_month,
          exp_year: convExp(secret.card.data[0].card.exp_year)
        });
      }
    }
  };
  if (props.setValidCc && props.validCc !== validCc) {
    props.setValidCc(validCc);
  }
  var handleRegisterNewCard = _react["default"].useCallback(function (e) {
    if (registerNewCard) {
      setRegisterNewCard(false);
      return 1;
    }
    setRegisterNewCard(true);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className),
    style: {
      marginBottom: (_props$marginBottom = props.marginBottom) !== null && _props$marginBottom !== void 0 ? _props$marginBottom : '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), !props.stagger || props.stagger && stagger ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, validCc && !registerNewCard ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_CreditCard_Container",
    style: {
      padding: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, props.purchaseDescription), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: .1 + "rem",
      paddingBottom: 0 + "rem",
      margin: 0
    }
  }, "Ending in ", /*#__PURE__*/_react["default"].createElement("span", null, validCc.last4)), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: .1 + "rem",
      paddingBottom: 0 + "rem",
      margin: 0
    }
  }, "Expiry ", /*#__PURE__*/_react["default"].createElement("span", null, validCc.exp_month, " / ", validCc.exp_year))), validCc.name ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginTop: .4 + "rem",
      margin: 0
    }
  }, validCc.name) : null)) : props._stripeSecret && props._stripeSecret.client_secret ? /*#__PURE__*/_react["default"].createElement(_reactStripeJs.Elements, {
    stripe: stripePromise,
    options: {
      clientSecret: props._stripeSecret.client_secret
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactStripeJs.ElementsConsumer, null, function (_ref2) {
    var elements = _ref2.elements,
      stripe = _ref2.stripe;
    return /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: function onSubmit(e) {
        handleSaveBillingInfo(e, elements, stripe, nameOnCard);
      },
      style: {
        display: 'grid',
        gap: '.125rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      placeholder: "Full Name on Card",
      ref: nameOnCard
    }), /*#__PURE__*/_react["default"].createElement(_reactStripeJs.CardElement, {
      options: {
        iconStyle: 'solid',
        style: {
          base: {
            fontSize: '16px',
            color: 'black',
            fontWeight: 500,
            '::placeholder': {
              color: 'grey'
            },
            fontSmoothing: 'antialiased',
            width: 100 + "%",
            backgroundColor: 'white'
          },
          invalid: {
            color: '#9e2146'
          }
        }
      }
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "submit"
    }, "Save Billing Info"));
  })) : null, validCc ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gap: '.125rem',
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleRegisterNewCard
  }, registerNewCard ? 'Use Current Card' : 'Register New Card')) : null) : null, props.children);
};
var _default = Module;
exports["default"] = _default;