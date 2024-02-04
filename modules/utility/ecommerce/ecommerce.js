"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.westernMoneyFormat = exports.updateCart = exports.resolveStyles = exports.resolveRegionBasedPrice = exports.resolveOption = exports.resolveMoneyFormat = exports.resolveImg = exports.resolveDefaultStyle = exports.resolveCurrentStyle = exports.resolveCurrentPrice = exports.resolveCurrentOption = exports.performPurchase = exports.doUploadImageForProduct = exports.doUploadImageForLineupParticipant = exports.doPublishProduct = exports.createShop = exports.calculateTotal = exports.addToCartGlobal = exports.addToCart = void 0;
var _fetch = require("../fetch/fetch");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _util = require("../../util");
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _LocalEventEmitter2 = require("/modules/events/LocalEventEmitter");
var _app = require("../../../app.config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cookies = new _universalCookie["default"]();
var createShop = exports.createShop = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(uri, domainKey, user, shopData) {
    var fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(user.identifier && user.hash && shopData && shopData.shopName)) {
            _context.next = 24;
            break;
          }
          fetchBody = {
            domainKey: domainKey,
            shopData: shopData,
            hash: user.hash,
            identifier: user.identifier
          };
          _context.next = 4;
          return (0, _fetch.fetchPost)(uri + '/m/createshop', null, null, fetchBody);
        case 4:
          res = _context.sent;
          if (res) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", false);
        case 9:
          if (!res.hasOwnProperty('status')) {
            _context.next = 21;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context.next = 15;
            break;
          }
          (0, _SignIn.logout)();
          return _context.abrupt("return", "disauthenticated");
        case 15:
          if (!(res.status == "failed")) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("return", false);
        case 19:
          if (!(res.status == "success")) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", res);
        case 21:
          return _context.abrupt("return", false);
        case 24:
          return _context.abrupt("return", false);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createShop(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var doPublishProduct = exports.doPublishProduct = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uri, domainKey, shop, user, product, body) {
    var res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(user.identifier && user.hash && product && shop && domainKey)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 3;
          return (0, _fetch.fetchPost)(uri + '/m/publishproduct', null, null, body, {
            formData: true
          });
        case 3:
          res = _context2.sent;
          if (res) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", false);
        case 8:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 20;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 14;
            break;
          }
          (0, _SignIn.logout)();
          return _context2.abrupt("return", "disauthenticated");
        case 14:
          if (!(res.status == "failed")) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", false);
        case 18:
          if (!(res.status == "success")) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", res);
        case 20:
          return _context2.abrupt("return", false);
        case 23:
          return _context2.abrupt("return", false);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function doPublishProduct(_x5, _x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();
var resolveImg = exports.resolveImg = function resolveImg(product, cdn, override) {
  if (override) {
    return override;
  }
  return 'img/default/greythumb_product.jpg';
};
var resolveStyles = exports.resolveStyles = function resolveStyles(product) {
  if (product && product.styles) {
    return product.styles;
  }
  return [];
};
var resolveCurrentPrice = exports.resolveCurrentPrice = function resolveCurrentPrice(product, selectedStyle, currency) {
  console.log(product, selectedStyle, currency);
  if (product && product.styles) {
    var p = product.styles.find(function (m) {
      return m.sid === selectedStyle;
    });
    if (p && Object.prototype.hasOwnProperty.call(p, 'price')) {
      return "".concat(currency).concat(p.price);
    }
    if (product.styles[0] && Object.prototype.hasOwnProperty.call(product.styles[0], 'price')) {
      return "".concat(currency).concat(product.styles[0].price);
    }
  }
  return '';
};
var resolveCurrentStyle = exports.resolveCurrentStyle = function resolveCurrentStyle(product, selectedStyle) {
  if (product && product.styles) {
    var p = product.styles.find(function (m) {
      return m.sid === selectedStyle;
    });
    return p;
  }
  return '';
};
var resolveCurrentOption = exports.resolveCurrentOption = function resolveCurrentOption(style, selectedOption) {
  if (style && style.option) {
    var o = style.option.find(function (m) {
      return m.sid === selectedOption;
    });
    return o;
  }
  return '';
};
var resolveDefaultStyle = exports.resolveDefaultStyle = function resolveDefaultStyle(product, selectedStyle, f, currentOption, f2) {
  if ((0, _util.isObjectEmpty)(selectedStyle)) {
    if (product && product.styles && product.styles[0] && product.styles[0].sid) {
      f(product.styles[0].sid);
      if (!currentOption && product.styles[0].option && product.styles[0].option[0] && product.styles[0].option[0].sid) {
        f2(product.styles[0].option[0].sid);
      }
    }
  }
};
var updateCart = exports.updateCart = function updateCart(user, cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  _LocalEventEmitter2._LocalEventEmitter.dispatch('forceUpdateProps', {
    dispatch: '_cart'
  });
  return cart;
};
var calculateTotal = exports.calculateTotal = function calculateTotal(cart, prefix, options, props) {
  var prices = [];
  var total = 0;
  if (cart && cart.items) {
    cart.items.map(function (item) {
      var style = resolveCurrentStyle(item.product, item.style);
      if (style && Object.prototype.hasOwnProperty.call(style, 'price')) {
        var _options$region, _options$region2, _resolveRegionBasedPr;
        var usePrice = (options === null || options === void 0 || (_options$region = options.region) === null || _options$region === void 0 ? void 0 : _options$region.currency) === 'USD' ? style.price : options !== null && options !== void 0 && (_options$region2 = options.region) !== null && _options$region2 !== void 0 && _options$region2.currency && style !== null && style !== void 0 && style.priceTable && Object.prototype.hasOwnProperty.call(style.priceTable, options.region.currency) ? style.priceTable[options.region.currency] : props ? (_resolveRegionBasedPr = resolveRegionBasedPrice(props, style)) === null || _resolveRegionBasedPr === void 0 ? void 0 : _resolveRegionBasedPr.price : style.price;
        prices.push(Object.assign(item, {
          price: usePrice
        }));
        total += usePrice * item.quantity;
      }
    });
  }
  if (options) {
    if (options.object) {
      return {
        prices: prices,
        total: total
      };
    }
  }
  if (prefix) {
    return prefix + total;
  }
  return total;
};
var doUploadImageForProduct = exports.doUploadImageForProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(uri, domainKey, product, user, body) {
    var res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(user.identifier && user.hash && product && domainKey)) {
            _context3.next = 23;
            break;
          }
          _context3.next = 3;
          return (0, _fetch.fetchPost)(uri + '/m/uploadimageforproduct', null, null, body, {
            formData: true
          });
        case 3:
          res = _context3.sent;
          if (res) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", false);
        case 8:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 20;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context3.next = 14;
            break;
          }
          (0, _SignIn.logout)();
          return _context3.abrupt("return", "disauthenticated");
        case 14:
          if (!(res.status == "failed")) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", false);
        case 18:
          if (!(res.status == "success")) {
            _context3.next = 20;
            break;
          }
          return _context3.abrupt("return", res);
        case 20:
          return _context3.abrupt("return", false);
        case 23:
          return _context3.abrupt("return", false);
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function doUploadImageForProduct(_x11, _x12, _x13, _x14, _x15) {
    return _ref3.apply(this, arguments);
  };
}();
var doUploadImageForLineupParticipant = exports.doUploadImageForLineupParticipant = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(uri, domainKey, product, user, body) {
    var res;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(user.identifier && user.hash && product && domainKey)) {
            _context4.next = 23;
            break;
          }
          _context4.next = 3;
          return (0, _fetch.fetchPost)(uri + '/m/uploadimageforlineupparticipant', null, null, body, {
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
          (0, _SignIn.logout)();
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
  return function doUploadImageForLineupParticipant(_x16, _x17, _x18, _x19, _x20) {
    return _ref4.apply(this, arguments);
  };
}();
var addToCartGlobal = exports.addToCartGlobal = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(uri, domainKey, user, cart, product, spec, setFetchBusy, options) {
    var fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log(uri, domainKey, user, cart, product, spec, setFetchBusy, options);
          if (!(user && user.identifier && user.hash && product && domainKey && uri)) {
            _context5.next = 25;
            break;
          }
          setFetchBusy(true);
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            cart: cart,
            product: product,
            spec: spec,
            options: options
          };
          _context5.next = 7;
          return (0, _fetch.fetchPost)(uri + '/m/addtocart', null, null, fetchBody);
        case 7:
          res = _context5.sent;
          setFetchBusy(false);
          if (res) {
            _context5.next = 13;
            break;
          }
          return _context5.abrupt("return", false);
        case 13:
          if (!res.hasOwnProperty('status')) {
            _context5.next = 25;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context5.next = 19;
            break;
          }
          (0, _SignIn.logout)();
          return _context5.abrupt("return", "disauthenticated");
        case 19:
          if (!(res.status == "failed")) {
            _context5.next = 23;
            break;
          }
          return _context5.abrupt("return", false);
        case 23:
          if (!(res.status == "success")) {
            _context5.next = 25;
            break;
          }
          return _context5.abrupt("return", res);
        case 25:
          _context5.next = 32;
          break;
        case 27:
          _context5.prev = 27;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          if (setFetchBusy) {
            setFetchBusy(false);
          }
          return _context5.abrupt("return", {
            // fail silently
            status: 'failed',
            message: 'Could not add Product to cart'
          });
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 27]]);
  }));
  return function addToCartGlobal(_x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28) {
    return _ref5.apply(this, arguments);
  };
}();
var addToCart = exports.addToCart = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(uri, domainKey, user, cart, product, spec, setFetchBusy, options) {
    var style, option, fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          console.log(uri, domainKey, user, product, spec, cart);
          if (!(user && user.identifier && user.hash && product && domainKey && uri)) {
            _context6.next = 34;
            break;
          }
          if (!(product && product.styles)) {
            _context6.next = 34;
            break;
          }
          if (!(spec.style && spec.option)) {
            _context6.next = 34;
            break;
          }
          style = product.styles.find(function (p) {
            return p.sid === spec.style;
          });
          if (!(style && style.option)) {
            _context6.next = 34;
            break;
          }
          option = style.option.find(function (o) {
            return o.sid === spec.option;
          });
          if (!option) {
            _context6.next = 34;
            break;
          }
          if (!(option.quantity && (option.quantity > 0 || option.quantity === -100))) {
            _context6.next = 34;
            break;
          }
          // Valid quantity = > 0 or -100 (infinite)
          console.log(cart, product, spec, options);
          if (!setFetchBusy) {
            _context6.next = 34;
            break;
          }
          setFetchBusy(true);
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            cart: cart,
            product: product,
            spec: spec,
            options: options
          };
          _context6.next = 16;
          return (0, _fetch.fetchPost)(uri + '/m/addtocart', null, null, fetchBody);
        case 16:
          res = _context6.sent;
          setFetchBusy(false);
          if (res) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", false);
        case 22:
          if (!res.hasOwnProperty('status')) {
            _context6.next = 34;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context6.next = 28;
            break;
          }
          (0, _SignIn.logout)();
          return _context6.abrupt("return", "disauthenticated");
        case 28:
          if (!(res.status == "failed")) {
            _context6.next = 32;
            break;
          }
          return _context6.abrupt("return", false);
        case 32:
          if (!(res.status == "success")) {
            _context6.next = 34;
            break;
          }
          return _context6.abrupt("return", res);
        case 34:
          throw new Error();
        case 37:
          _context6.prev = 37;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          if (setFetchBusy) {
            setFetchBusy(false);
          }
          return _context6.abrupt("return", {
            // fail silently
            status: 'failed',
            message: 'Could not add Product to cart'
          });
        case 42:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 37]]);
  }));
  return function addToCart(_x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36) {
    return _ref6.apply(this, arguments);
  };
}();
var performPurchase = exports.performPurchase = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(uri, domainKey, user, cart, setFetchBusy, options) {
    var variables, _variables$paymentCon, _variables$paymentCon2, stripeIsLive, paystackisLive, fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          variables = (0, _app.resolveVariables)();
          if (!(variables.paymentConfig && variables.dev)) {
            _context7.next = 8;
            break;
          }
          stripeIsLive = (_variables$paymentCon = variables.paymentConfig) === null || _variables$paymentCon === void 0 || (_variables$paymentCon = _variables$paymentCon.keys) === null || _variables$paymentCon === void 0 ? void 0 : _variables$paymentCon.stripe.match('live');
          paystackisLive = (_variables$paymentCon2 = variables.paymentConfig) === null || _variables$paymentCon2 === void 0 || (_variables$paymentCon2 = _variables$paymentCon2.keys) === null || _variables$paymentCon2 === void 0 ? void 0 : _variables$paymentCon2.paystack.match('live');
          if (!(stripeIsLive || paystackisLive)) {
            _context7.next = 8;
            break;
          }
          // We dont want to allow purchases when in development mode and any keys are live
          console.log('Payment Cancelled: Some Payment Processing Keys are live but you are in development mode.');
          return _context7.abrupt("return", false);
        case 8:
          if (!(user && user.identifier && user.hash && cart && domainKey && uri)) {
            _context7.next = 34;
            break;
          }
          if (!setFetchBusy) {
            _context7.next = 34;
            break;
          }
          setFetchBusy(true);
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            cart: cart,
            options: options
          };
          _context7.next = 14;
          return (0, _fetch.fetchPost)(uri + '/m/performpurchase', null, null, fetchBody);
        case 14:
          res = _context7.sent;
          setFetchBusy(false);
          if (res) {
            _context7.next = 20;
            break;
          }
          return _context7.abrupt("return", false);
        case 20:
          if (!res.hasOwnProperty('status')) {
            _context7.next = 34;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context7.next = 26;
            break;
          }
          (0, _SignIn.logout)();
          return _context7.abrupt("return", "disauthenticated");
        case 26:
          if (!(res.status == "failed")) {
            _context7.next = 32;
            break;
          }
          if (!res.message) {
            _context7.next = 29;
            break;
          }
          return _context7.abrupt("return", res);
        case 29:
          return _context7.abrupt("return", false);
        case 32:
          if (!(res.status == "success")) {
            _context7.next = 34;
            break;
          }
          return _context7.abrupt("return", res);
        case 34:
          throw new Error();
        case 37:
          _context7.prev = 37;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          if (setFetchBusy) {
            setFetchBusy(false);
          }
          return _context7.abrupt("return", {
            // fail silently
            status: 'failed',
            message: 'Could not perform purchase'
          });
        case 42:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 37]]);
  }));
  return function performPurchase(_x37, _x38, _x39, _x40, _x41, _x42) {
    return _ref7.apply(this, arguments);
  };
}();
var westernMoneyFormat = exports.westernMoneyFormat = new Intl.NumberFormat('en-US', {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
var resolveMoneyFormat = exports.resolveMoneyFormat = function resolveMoneyFormat(v) {
  try {
    if (!isNaN(Number(v)) && v !== null) {
      return westernMoneyFormat.format(v);
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
var resolveRegionBasedPrice = exports.resolveRegionBasedPrice = function resolveRegionBasedPrice(props, style) {
  var _props$_loggedIn;
  if (props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.locationMeta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.country && props !== null && props !== void 0 && props.regionsData) {
    var location = props._loggedIn.meta.locationMeta.country;
    if (props.regionsData[location] && style !== null && style !== void 0 && style.priceTable) {
      if (Object.prototype.hasOwnProperty.call(style.priceTable, props.regionsData[location].currency)) {
        // Has currency of type defined on product
        return {
          currency: props.regionsData[location].currency,
          symbol: props.regionsData[location].symbol,
          price: style.priceTable[props.regionsData[location].currency]
        };
      } else {
        var useRegion = props.regionsData[location].region;
        var firstMatchingRegionValidCurrency = Object.entries(props.regionsData).find(function (m) {
          if (m[1].region === useRegion && Object.prototype.hasOwnProperty.call(style.priceTable, m[1].currency)) {
            return true;
          }
          return false;
        });
        if (firstMatchingRegionValidCurrency && firstMatchingRegionValidCurrency[1]) {
          return {
            currency: firstMatchingRegionValidCurrency[1].currency,
            symbol: firstMatchingRegionValidCurrency[1].symbol,
            price: style.priceTable[firstMatchingRegionValidCurrency[1].currency]
          };
        }
      }
    }
  }
  return {
    currency: 'USD',
    symbol: '$',
    price: style && Object.prototype.hasOwnProperty.call(style, 'price') ? style.price : null
  };
};
var resolveOption = exports.resolveOption = function resolveOption(p, s, o) {
  var returnObject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  console.log(p, s, o);
  if (p && p.styles && s) {
    var f = p.styles.find(function (m) {
      return m.sid === s;
    });
    if (f.option) {
      var f2 = f.option.find(function (m) {
        return m.sid === o;
      });
      if (returnObject && f2) {
        return f2;
      }
      if (f2 && f2.option) {
        return f2.option;
      }
    }
  }
  return '';
};