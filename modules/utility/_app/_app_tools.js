"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSingleOpenMenu = exports.registerSocket = exports.registerGoogleSignIn = exports.handleSetLoggedIn = exports.handleSetCart = exports.handleGlobalEvent = exports.handleCheckUserData = exports.forceUpdateProps = void 0;
var _ecommerce = require("../../utility/ecommerce");
var _util = require("/modules/util");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var handleSetLoggedIn = exports.handleSetLoggedIn = function handleSetLoggedIn(pageProps, checkSignedIn, _setLoggedIn) {
  if (pageProps._loggedIn) {
    _setLoggedIn(pageProps._loggedIn);
  } else {
    var signedIn = checkSignedIn();
    if (signedIn) {
      _setLoggedIn(signedIn);
    }
  }
};
var toggleSingleOpenMenu = exports.toggleSingleOpenMenu = function toggleSingleOpenMenu(e, menu, _openMenu, _setOpenMenu, force) {
  if (force) {
    _setOpenMenu({
      currentMenu: menu
    });
  } else if (_openMenu && _openMenu.currentMenu) {
    if (_openMenu.currentMenu == menu) {
      _setOpenMenu({});
    } else {
      _setOpenMenu({
        currentMenu: menu
      });
    }
  } else {
    _setOpenMenu({
      currentMenu: menu
    });
  }
};
var handleCheckUserData = exports.handleCheckUserData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageProps, _loggedIn) {
    var mustCheck, runRequest, i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(pageProps && _loggedIn)) {
            _context.next = 14;
            break;
          }
          mustCheck = {
            ip: !_loggedIn.meta || (0, _util.isObjectEmpty)(_loggedIn.meta) || (_loggedIn.meta.ip && _loggedIn.meta.ip) != '::ffff:127.0.0.1' ? false : true,
            location: !_loggedIn.meta || (0, _util.isObjectEmpty)(_loggedIn.meta) || _loggedIn.meta.location ? false : true
          };
          console.log('Must Check', mustCheck);
          runRequest = false;
          i = 0;
        case 5:
          if (!(i < Object.entries(mustCheck).length)) {
            _context.next = 12;
            break;
          }
          if (!Object.entries(mustCheck)[i][1]) {
            _context.next = 9;
            break;
          }
          runRequest = true;
          return _context.abrupt("break", 12);
        case 9:
          i++;
          _context.next = 5;
          break;
        case 12:
          if (!runRequest) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", mustCheck);
        case 14:
          return _context.abrupt("return", false);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleCheckUserData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleSetCart = exports.handleSetCart = function handleSetCart(_loggedIn, _setCart) {
  var cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    if (!cart.user) {
      var temp = cart;
      temp.user = _loggedIn;
      localStorage.setItem('cart', JSON.stringify(temp));
      _setCart(temp);
    }
  } else {
    if (_loggedIn) {
      var def = {
        user: _loggedIn,
        cart: []
      };
      localStorage.setItem('cart', JSON.stringify(def));
      _setCart(def);
    }
  }
};
var forceUpdateProps = exports.forceUpdateProps = function forceUpdateProps(e, _setCart) {
  if (e) {
    if (e.dispatch === '_cart') {
      _setCart(JSON.parse(window.localStorage.getItem('cart'))); // Should force reload of cart props
    }
  }
};
var registerSocket = exports.registerSocket = function registerSocket(io, _socket, setSocket, socketTimeout, pageProps, setSocketTimeout) {
  if (!_socket && !socketTimeout) {
    var socketIoConfig = {
      reconnectAttempts: 1
    };
    if (pageProps.socketpath) {
      socketIoConfig.path = pageProps.socketpath;
      socketIoConfig.port = pageProps.socketPort;
    }
    setSocket(io(pageProps.socketUrl, socketIoConfig));
    var r = setTimeout(function () {
      setSocketTimeout(null);
    }, 20000);
    setSocketTimeout(r);
  }
};
var handleGlobalEvent = exports.handleGlobalEvent = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, pageProps, fetchBusy, setFetchBusy) {
    var cart, res, snapshot, res2, _res2$data, _cart, _res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!e) {
            _context2.next = 34;
            break;
          }
          if (!(e.action === 'buy')) {
            _context2.next = 22;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context2.next = 20;
            break;
          }
          cart = JSON.parse(localStorage.getItem('cart'));
          _context2.next = 7;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy);
        case 7:
          res = _context2.sent;
          pageProps._LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart'
          });
          if (!res) {
            _context2.next = 20;
            break;
          }
          if (!(res.status === 'success')) {
            _context2.next = 20;
            break;
          }
          (0, _ecommerce.updateCart)(cart, res.cart);
          // Successfully added to cart, must perform purchase
          cart = JSON.parse(localStorage.getItem('cart'));
          snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
            object: true
          });
          console.log('snapshot', snapshot);
          _context2.next = 17;
          return (0, _ecommerce.performPurchase)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, setFetchBusy, {
            snapshot: snapshot
          });
        case 17:
          res2 = _context2.sent;
          if (res2) {
            if (res2.status === 'success') {
              if (res2.data && res2.data.cart) {
                (0, _ecommerce.updateCart)(cart, res2.data.cart);
              }
              if (res2 !== null && res2 !== void 0 && (_res2$data = res2.data) !== null && _res2$data !== void 0 && (_res2$data = _res2$data.order) !== null && _res2$data !== void 0 && _res2$data.id) {
                pageProps._LocalEventEmitter.dispatch('cart_update', {
                  dispatch: 'purchase',
                  id: res2.data.order.id
                });
                console.log('Purchase Success', res2);
              }
            } else {
              pageProps._setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
          } else {
            console.log(res2);
            pageProps._setPageError({
              message: 'Purchase failed',
              placement: 'purchase'
            });
          }
          setFetchBusy(false);
        case 20:
          _context2.next = 34;
          break;
        case 22:
          if (!(e.action === 'add_to_cart')) {
            _context2.next = 33;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context2.next = 31;
            break;
          }
          _cart = JSON.parse(localStorage.getItem('cart'));
          _context2.next = 28;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, _cart, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy);
        case 28:
          _res = _context2.sent;
          pageProps._LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart'
          });
          if (_res) {
            if (_res.status === 'success') {
              (0, _ecommerce.updateCart)(_cart, _res.cart);
            }
          } else {
            pageProps._setPageError({
              message: 'Add to cart failed',
              placement: 'add_to_cart'
            });
          }
        case 31:
          _context2.next = 34;
          break;
        case 33:
          if (e.action === 'logout') {
            // Enforces logout globally
            if (pageProps._setLoggedIn) {
              pageProps._setLoggedIn(false);
            }
          }
        case 34:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function handleGlobalEvent(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var registerGoogleSignIn = exports.registerGoogleSignIn = "// Register google one tap sign in event to pass data to registration/login function\n    const onOneTapSignedInGoogle = data => {\n        let event = new CustomEvent(\"thirdparty-signin\", { \"detail\": data });\n        document.dispatchEvent(event);\n    }\n    const doGoogleInit = (delay = 250) => {\n        try {\n            google.accounts.id.initialize({\n                client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',\n                callback: onOneTapSignedInGoogle\n            })\n            console.log('Google Loaded')\n            return true\n        } catch (err) {\n            // fail silently\n            setTimeout(() => {\n                doGoogleInit(delay * 2)\n            }, delay)\n        }\n    }\n    try {\n        let createdScripts = document.getElementsByClassName(\"lazyOnload\");\n        if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts\n            for (let i = 1; i < createdScripts.length; i++) {\n                createdScripts[i].remove();\n            }\n        }\n        doGoogleInit()\n    } catch (err) {\n        // fail silently\n        setTimeout(() => {\n            doGoogleInit(500)\n        }, 250)\n    }";