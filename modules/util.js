"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareObjects = compareObjects;
exports.isObjectEmpty = exports.handleRouteChange = exports.handleInteractMedia = exports.getFormattedTime = exports.getFormattedDate = exports.detectAllowEditingFlag = exports.debounce = void 0;
exports.registerCheckLocalStorageSize = registerCheckLocalStorageSize;
exports.registerCheckMobile = registerCheckMobile;
exports.registerProxyConsoleLog = registerProxyConsoleLog;
exports.throttleFunctionCallQueue = exports.throttleFunctionCall = void 0;
var _analytics = require("./analytics");
var _app = require("/app.config");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var isObjectEmpty = exports.isObjectEmpty = function isObjectEmpty(obj) {
  return obj // 👈 null and undefined check
  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};
var debounce = exports.debounce = function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null, c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e;
  };
};
var detectAllowEditingFlag = exports.detectAllowEditingFlag = function detectAllowEditingFlag(data, loggedIn) {
  if (data && data.author && loggedIn && loggedIn.identifier && data.author === loggedIn.identifier) {
    return true;
  }
  return false;
};
var getFormattedTime = exports.getFormattedTime = function getFormattedTime(time) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  try {
    // Format the time (-HH:MMAM/PM)
    if (options.simple) {
      var _time$split$map = time.split(':').map(Number),
        _time$split$map2 = _slicedToArray(_time$split$map, 2),
        hours = _time$split$map2[0],
        minutes = _time$split$map2[1];
      var period = hours < 12 ? 'AM' : 'PM';
      var hours12 = hours % 12 || 12;
      var _formattedTime = "".concat(hours12, ":").concat(minutes.toString().padStart(2, '0')).concat(period);
      return _formattedTime;
    }
    var timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    var timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    var formattedTime = timeFormatter.format(time);
    return formattedTime;
  } catch (err) {
    console.log(err);
    return time;
  }
};
var getFormattedDate = exports.getFormattedDate = function getFormattedDate(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.pretty) {
    try {
      var dateOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      };
      console.log('Format Date', date, _typeof(date));
      var dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
      var formattedDate = dateFormatter.format(new Date(date));
      console.log('Time for Date', date);
      var formattedTime = getFormattedTime(new Date(date));
      console.log('Formatted Time Date', formattedDate, formattedTime);
      // Combine date and time
      if (!options.date && !options.time || options.date && options.time) {
        return formattedDate + '-' + formattedTime;
      }
      var d = '';
      if (options.date) {
        d += formattedDate;
      }
      if (options.time) {
        if (d.length !== 0) {
          d += '-';
        }
        d += formattedTime;
      }
      return d;
    } catch (err) {
      console.log(err);
      return date;
    }
  }
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
};
function compareObjects(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (_typeof(obj1) !== 'object' || _typeof(obj2) !== 'object' || obj1 == null || obj2 == null) {
    return false;
  }
  var keysA = Object.keys(obj1);
  var keysB = Object.keys(obj2);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var result = true;
  keysA.forEach(function (key) {
    if (!keysB.includes(key)) {
      result = false;
    }
    if (typeof obj1[key] === 'function' || typeof obj2[key] === 'function') {
      if (obj1[key].toString() !== obj2[key].toString()) {
        result = false;
      }
    }
    if (!compareObjects(obj1[key], obj2[key])) {
      result = false;
    }
  });
  return result;
}
function registerCheckLocalStorageSize(window) {
  if (window !== null && window !== void 0 && window.Storage) {
    if (window.Storage.prototype && !window.Storage.prototype.size) {
      window.Storage.prototype.size = function (units) {
        'use strict';

        units = units ? units.toUpperCase() : 'MB';
        var size = unescape(encodeURIComponent(JSON.stringify(this))).length;
        switch (units) {
          case 'B':
            return [size, 'B'].join(' ');
          case 'KB':
            return [+(size / 1024).toFixed(3), 'KB'].join(' ');
          default:
            return [+(size / 1024 / 1024).toFixed(3), 'MB'].join(' ');
        }
      };
      return true;
    }
  }
  return false;
}

/**
 * Cleans logs to ensure that sensitive config variables are not exposed on prod
 * @param {*} window 
 */
function registerProxyConsoleLog(window) {
  if (window !== null && window !== void 0 && window.console && !window.console.override) {
    window.console.override = true;
    var variables = (0, _app.resolveVariables)();
    if (!variables.dev && !variables.doShowLogs) {
      // If user ser do show logs then they must want to show logs
      var log = window.console.log;
      // window.console.bind(window.console)
      window.console.log = function () {
        for (var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++) {
          message[_key] = arguments[_key];
        }
        var handleMessage = message;
        if ((handleMessage === null || handleMessage === void 0 ? void 0 : handleMessage.length) > 0) {
          var _loop = function _loop(i) {
            Object.entries(variables).map(function (m) {
              if (handleMessage[i] && handleMessage[i][m[0]]) {
                handleMessage[i] = '--- REDACTED_SYS_INFO ---';
              }
            });
          };
          for (var i = 0; i < handleMessage.length; i++) {
            _loop(i);
          }
        }
        var fileAndLine = '';
        try {
          var err = new Error(); // Extract stack trace
          var stack = err.stack.split('\n')[2].trim();

          // Extract file name and line number from the stack trace
          var match = stack.match(/(?:\()(.+?)(?::(\d+))?(?:\))/);
          var fileName = match ? match[1] : '';
          var lineNumber = match ? match[2] : '';
          fileAndLine = "[".concat(fileName, ":").concat(lineNumber, "]");
        } catch (err) {
          // fail silently
        }
        return log.apply(void 0, handleMessage.concat([fileAndLine]));
      };
    }
  }
}
function registerCheckMobile(window) {
  if (window) {
    window.mobileCheck = function () {
      var check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
  }
  return false;
}
var defaultLedger = function defaultLedger(owner) {
  return {
    owner: owner,
    action: 'user_ledger',
    ledgertype: 'user_ledger',
    meta: {},
    ledger: []
  };
};
var handleRouteChange = exports.handleRouteChange = function handleRouteChange(props, route, context) {
  try {
    var _props$_loggedIn$iden, _props$_loggedIn;
    console.log('Route Change', props);
    var owner = (_props$_loggedIn$iden = props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.identifier) !== null && _props$_loggedIn$iden !== void 0 ? _props$_loggedIn$iden : null;
    if (owner) {
      var event = {
        action: 'navigate',
        to: route,
        time: new Date(),
        meta: {
          context: context
        }
      };
      if (localStorage) {
        var ledger = localStorage.getItem('user_ledger') ? JSON.parse(localStorage.getItem('user_ledger')) : defaultLedger(owner);
        if (ledger.ledger.length > 0) {
          event.timeSinceAction = new Date().getTime() - new Date(ledger.ledger[0].time).getTime();
          event.timeSinceActionSec = event.timeSinceAction / 1000;
          event.from = ledger.ledger[0].to, event.i = Object.prototype.hasOwnProperty.call(ledger.ledger[0], 'i') && !isNaN(Number(ledger.ledger[0].i)) ? Number(ledger.ledger[0].i) + 1 : 0;
        } else {
          event.i = 0;
        }
        if (ledger.owner !== owner) {
          ledger = defaultLedger(owner);
        }
        if (ledger.ledger.length > 500) {
          // shorten
          ledger.ledger.slice(0, 500);
        }
        var lsSize = localStorage.size();
        if (lsSize && lsSize.match('MB') && Number(lsSize.split(' ')[0]) > 2.50) {
          ledger.ledger.slice(0, 100);
        }
        ledger.ledger.unshift(event);
        localStorage.setItem('user_ledger', JSON.stringify(ledger));
        console.log(ledger);
        if (props.apiUrl && props.domainKey && props._LocalEventEmitter) {
          throttleFunctionCallQueue(props._LocalEventEmitter, '_senduseranalyticsrequest', 1500, _analytics.sendUserAnalytics, [props.apiUrl, props.domainKey, props._loggedIn, ledger]);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
var handleInteractMedia = exports.handleInteractMedia = function handleInteractMedia(props, media, action) {
  var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  try {
    var _props$_loggedIn$iden2, _props$_loggedIn2;
    console.log('Route Change', props);
    var owner = (_props$_loggedIn$iden2 = props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.identifier) !== null && _props$_loggedIn$iden2 !== void 0 ? _props$_loggedIn$iden2 : null;
    if (owner) {
      var event = {
        action: action,
        media: media.id,
        time: new Date(),
        meta: meta
      };
      if (localStorage) {
        var ledger = localStorage.getItem('user_ledger') ? JSON.parse(localStorage.getItem('user_ledger')) : defaultLedger(owner);
        if (ledger.ledger.length > 0) {
          event.timeSinceAction = new Date().getTime() - new Date(ledger.ledger[0].time).getTime();
          event.timeSinceActionSec = event.timeSinceAction / 1000;
          event.i = Object.prototype.hasOwnProperty.call(ledger.ledger[0], 'i') && !isNaN(Number(ledger.ledger[0].i)) ? Number(ledger.ledger[0].i) + 1 : 0;
        } else {
          event.i = 0;
        }
        if (ledger.owner !== owner) {
          ledger = defaultLedger(owner);
        }
        if (ledger.ledger.length > 500) {
          // shorten
          ledger.ledger.slice(0, 500);
        }
        var lsSize = localStorage.size();
        if (lsSize && lsSize.match('MB') && Number(lsSize.split(' ')[0]) > 2.50) {
          ledger.ledger.slice(0, 100);
        }
        ledger.ledger.unshift(event);
        localStorage.setItem('user_ledger', JSON.stringify(ledger));
        console.log(ledger);
        if (props.apiUrl && props.domainKey && props._LocalEventEmitter) {
          throttleFunctionCallQueue(props._LocalEventEmitter, '_senduseranalyticsrequest', 1500, _analytics.sendUserAnalytics, [props.apiUrl, props.domainKey, props._loggedIn, ledger]);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
var throttleFunctionCall = exports.throttleFunctionCall = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(o, store, delay, f, payload) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!o[store] || o[store] && o[store] < new Date().getTime() - delay)) {
            _context.next = 3;
            break;
          }
          o[store] = new Date().getTime();
          return _context.abrupt("return", f.apply(void 0, _toConsumableArray(payload)));
        case 3:
          return _context.abrupt("return", null);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function throttleFunctionCall(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var throttleFunctionCallQueue = exports.throttleFunctionCallQueue = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(o, store, delay, f, payload) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          o[store + '_payload'] = JSON.stringify(payload);
          if (!(!o[store] || o[store] && o[store] < new Date().getTime() - delay)) {
            _context2.next = 6;
            break;
          }
          o[store] = new Date().getTime();
          return _context2.abrupt("return", f.apply(void 0, _toConsumableArray(JSON.parse(o[store + '_payload']))));
        case 6:
          if (!o[store + '_running']) {
            o[store + '_running'] = setTimeout(function () {
              o[store] = new Date().getTime();
              f.apply(void 0, _toConsumableArray(JSON.parse(o[store + '_payload'])));
              o[store + '_running'] = null;
            }, delay);
          }
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function throttleFunctionCallQueue(_x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();