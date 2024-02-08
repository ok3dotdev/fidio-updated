"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLocalLoginSession = exports.requestSettingsUpdate = exports.logout = exports.grabUsername = exports.checkUserData = exports.checkSignedInAndPrompt = exports.checkSignedIn = exports.attemptThirdPartySignIn = void 0;
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _fetch = require("/modules/utility/fetch/fetch.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _LocalEventEmitter2 = require("/modules/events/LocalEventEmitter");
var _utility = require("../utility");
var _jwtDecode = _interopRequireDefault(require("jwt-decode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cookies = new _universalCookie["default"]();
var updateLocalLoginSession = exports.updateLocalLoginSession = function updateLocalLoginSession(data) {
  cookies.set('login', data);
};
var doThirdPartySignIn = function doThirdPartySignIn() {};

/**
 * Attempt to sign in user or ask for more information (username) for register completion
 * @param {*} data 
 * @returns {*}
 */
var attemptThirdPartySignIn = exports.attemptThirdPartySignIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, apiUrl, domainKey, LocalEventEmitter, setAdminAuth) {
    var decodedToken, fetchBody, res, _res$vendor, cookieObj, cart, event;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Running', data, apiUrl, domainKey);
          // Decode google third party sign in data and make fetch to server for info

          if (data && data.detail && data.detail.credential) {
            decodedToken = (0, _jwtDecode["default"])(data.detail.credential);
          }
          fetchBody = {
            domainKey: domainKey,
            googleData: data,
            token: decodedToken,
            encodedToken: data.detail.credential
          };
          if (data.requestedUsername) {
            fetchBody.requestedUsername = data.requestedUsername;
          }
          // Call to server to look for user
          _context.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/authenticate', null, null, fetchBody);
        case 7:
          res = _context.sent;
          if (res && res.hash) {
            // Update cookie signifying login
            if (LocalEventEmitter) {
              LocalEventEmitter.dispatch('completeSignIn', {
                data: res
              });
            }
            cookieObj = _defineProperty(_defineProperty({
              identifier: res.identifier,
              username: res.username,
              email: res.email,
              icon: res.icon,
              hash: res.hash,
              vendor: (_res$vendor = res.vendor) !== null && _res$vendor !== void 0 ? _res$vendor : null
            }, "icon", res.icon), "meta", res.meta); // Optionally set official minipost plan
            if (res.plan) {
              cookieObj.plan = res.plan;
            }
            if (res.cart) {
              cart = JSON.parse(localStorage.getItem('cart'));
              (0, _ecommerce.updateCart)(cart, res.cart);
            }
            if (res !== null && res !== void 0 && res.admin) {
              setAdminAuth(res.admin);
              cookieObj.admin = res.admin;
            }
            updateLocalLoginSession(cookieObj);
            event = new CustomEvent("mute-login-error", {
              "detail": true
            }); // Mutes login errors across application
            document.dispatchEvent(event);
          }
          return _context.abrupt("return", res);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", null);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function attemptThirdPartySignIn(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var checkSignedIn = exports.checkSignedIn = function checkSignedIn() {
  if (!cookies.get('login')) {
    return false;
  }
  return cookies.get('login');
};
var checkSignedInAndPrompt = exports.checkSignedInAndPrompt = function checkSignedInAndPrompt(setPageError, desc) {
  try {
    var user = checkSignedIn();
    if (!user) {
      if (setPageError) {
        setPageError(desc ? desc : "Please sign in with google to register");
      }
      google.accounts.id.prompt(function (notification) {
        console.log('on prompt notification', notification);
      });
      return false;
    }
    return user;
  } catch (err) {
    return err; // fail silently
  }
};
var logout = exports.logout = function logout() {
  try {
    cookies.remove('login');
    (0, _utility.fireGlobalEvent)({
      event: 'logout'
    }, _LocalEventEmitter2._LocalEventEmitter);
    (0, _ecommerce.updateCart)('', {
      items: [],
      user: null
    });
    var onOneTapSignedInGoogle = function onOneTapSignedInGoogle(data) {
      var event = new CustomEvent("thirdparty-signin", {
        "detail": data
      });
      document.dispatchEvent(event);
    };
    var doGoogleInit = function doGoogleInit() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
      try {
        google.accounts.id.initialize({
          client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
          callback: onOneTapSignedInGoogle
        });
        console.log('Google Loaded');
        return true;
      } catch (err) {
        console.log(err);
        // fail silently
      }
    };
    setTimeout(function () {
      doGoogleInit();
    }, 2000);
    return true;
  } catch (err) {
    console.log(err);
    return false; // fail silently
  }
};

/**
 * Register username and assign it to currently signed in user *Protected route*
 * @param {String} desiredUsername 
 * @returns 
 */
var grabUsername = exports.grabUsername = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(apiUrl, domainKey, data, checkSignedIn, setLoggedIn) {
    var user, fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!checkSignedIn) {
            _context2.next = 31;
            break;
          }
          user = checkSignedIn();
          if (!(user && user.identifier && user.hash)) {
            _context2.next = 28;
            break;
          }
          fetchBody = {
            domainKey: domainKey,
            identifier: user.identifier,
            hash: user.hash,
            proposedUsername: data.proposedUsername
          };
          _context2.next = 7;
          return (0, _fetch.fetchPost)(apiUrl + '/m/grabusername', null, null, fetchBody);
        case 7:
          res = _context2.sent;
          if (res) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", false);
        case 12:
          if (!(res.hasOwnProperty('status') && res.status !== 'success')) {
            _context2.next = 19;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 18;
            break;
          }
          logout();
          return _context2.abrupt("return", "disauthenticated");
        case 18:
          return _context2.abrupt("return", res.status);
        case 19:
          if (!(res.identifier && res.username && res.hash)) {
            _context2.next = 26;
            break;
          }
          user.username = res.username;
          user.hash = res.hash;
          user.identifier = res.identifier;
          updateLocalLoginSession(user);
          setLoggedIn(user);
          return _context2.abrupt("return", true);
        case 26:
          _context2.next = 29;
          break;
        case 28:
          return _context2.abrupt("return", false);
        case 29:
          _context2.next = 32;
          break;
        case 31:
          return _context2.abrupt("return", false);
        case 32:
          _context2.next = 37;
          break;
        case 34:
          _context2.prev = 34;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);
        case 37:
          return _context2.abrupt("return", false);
        case 38:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 34]]);
  }));
  return function grabUsername(_x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();
var checkUserData = exports.checkUserData = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(pageProps, checkItems) {
    var _pageProps$_loggedIn, _pageProps$_loggedIn2, fetchPending, fetchBody, res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          console.log('Check user data', pageProps, checkItems);
          if (!checkItems) {
            _context3.next = 30;
            break;
          }
          fetchPending = Object.entries(checkItems).find(function (m) {
            return m[1] === true;
          });
          if (!(pageProps !== null && pageProps !== void 0 && (_pageProps$_loggedIn = pageProps._loggedIn) !== null && _pageProps$_loggedIn !== void 0 && _pageProps$_loggedIn.identifier && pageProps !== null && pageProps !== void 0 && (_pageProps$_loggedIn2 = pageProps._loggedIn) !== null && _pageProps$_loggedIn2 !== void 0 && _pageProps$_loggedIn2.hash && pageProps.domainKey && pageProps.apiUrl && fetchPending)) {
            _context3.next = 29;
            break;
          }
          fetchBody = {
            domainKey: pageProps.domainKey,
            identifier: pageProps._loggedIn.identifier,
            hash: pageProps._loggedIn.hash,
            ip: pageProps._loggedIn.ip,
            checkItems: checkItems
          };
          console.log(fetchBody);
          _context3.next = 8;
          return (0, _fetch.fetchPost)(pageProps.apiUrl + '/m/checkuserdata', null, null, fetchBody);
        case 8:
          res = _context3.sent;
          if (res) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", false);
        case 13:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 27;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context3.next = 19;
            break;
          }
          logout();
          return _context3.abrupt("return", "disauthenticated");
        case 19:
          if (!(res.status == "failed")) {
            _context3.next = 23;
            break;
          }
          return _context3.abrupt("return", false);
        case 23:
          if (!(res.status == "success")) {
            _context3.next = 27;
            break;
          }
          console.log('Check user data', res);
          console.log('must return res');
          return _context3.abrupt("return", res);
        case 27:
          _context3.next = 30;
          break;
        case 29:
          return _context3.abrupt("return", false);
        case 30:
          return _context3.abrupt("return", null);
        case 31:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function checkUserData(_x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Request settings chage *Protected route*
 * @param {String} apiUrl
 * @param {String} domainKey
 * @param {Object} change
 * @returns 
 */
var requestSettingsUpdate = exports.requestSettingsUpdate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(apiUrl, domainKey, change) {
    var props,
      setFetchBusy,
      fetchBusy,
      user,
      r,
      fetchBody,
      res,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          props = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};
          setFetchBusy = _args4.length > 4 ? _args4[4] : undefined;
          fetchBusy = _args4.length > 5 ? _args4[5] : undefined;
          _context4.prev = 3;
          if (!checkSignedIn) {
            _context4.next = 47;
            break;
          }
          user = checkSignedIn();
          console.log(user);
          if (!(user && user.identifier && user.hash && !fetchBusy)) {
            _context4.next = 44;
            break;
          }
          setFetchBusy(true);
          r = setTimeout(function () {
            setFetchBusy(false);
          }, 5000);
          fetchBody = {
            domainKey: domainKey,
            identifier: user.identifier,
            hash: user.hash,
            change: change
          };
          console.log('Shoot req', fetchBody);
          _context4.next = 14;
          return (0, _fetch.fetchPost)(apiUrl + '/m/settingsupdate', null, null, fetchBody);
        case 14:
          res = _context4.sent;
          console.log(res);
          if (res) {
            _context4.next = 22;
            break;
          }
          setFetchBusy(false);
          clearTimeout(r);
          return _context4.abrupt("return", false);
        case 22:
          if (!(res.hasOwnProperty('status') && res.status !== 'success')) {
            _context4.next = 33;
            break;
          }
          setFetchBusy(false);
          clearTimeout(r);
          if (!(res.status == "disauthenticated")) {
            _context4.next = 30;
            break;
          }
          logout();
          return _context4.abrupt("return", "disauthenticated");
        case 30:
          return _context4.abrupt("return", res);
        case 31:
          _context4.next = 42;
          break;
        case 33:
          if (!(res.status === 'success')) {
            _context4.next = 42;
            break;
          }
          setFetchBusy(false);
          clearTimeout(r);
          console.log(res);
          if (!res.user) {
            _context4.next = 42;
            break;
          }
          updateLocalLoginSession(res.user);
          props._setLoggedIn(res.user);
          if (props._LocalEventEmitter) {
            props._LocalEventEmitter.dispatch('refetchDefaults', {
              dispatch: 'simple'
            });
          }
          return _context4.abrupt("return", true);
        case 42:
          _context4.next = 45;
          break;
        case 44:
          return _context4.abrupt("return", false);
        case 45:
          _context4.next = 48;
          break;
        case 47:
          return _context4.abrupt("return", false);
        case 48:
          _context4.next = 54;
          break;
        case 50:
          _context4.prev = 50;
          _context4.t0 = _context4["catch"](3);
          console.log(_context4.t0);
          return _context4.abrupt("return", false);
        case 54:
          return _context4.abrupt("return", false);
        case 55:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 50]]);
  }));
  return function requestSettingsUpdate(_x13, _x14, _x15) {
    return _ref4.apply(this, arguments);
  };
}();