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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var isObjectEmpty = function isObjectEmpty(obj) {
  return obj // 👈 null and undefined check
  && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};
exports.isObjectEmpty = isObjectEmpty;
var debounce = function debounce(a, b, c) {
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
exports.debounce = debounce;
var detectAllowEditingFlag = function detectAllowEditingFlag(data, loggedIn) {
  if (data && data.author && loggedIn && loggedIn.identifier && data.author === loggedIn.identifier) {
    return true;
  }
  return false;
};
exports.detectAllowEditingFlag = detectAllowEditingFlag;
var getFormattedTime = function getFormattedTime(time) {
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
exports.getFormattedTime = getFormattedTime;
var getFormattedDate = function getFormattedDate(date) {
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
exports.getFormattedDate = getFormattedDate;
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
    if (!variables.dev) {
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
var handleRouteChange = function handleRouteChange(props, route, context) {
  try {
    var _props$_loggedIn$iden, _props$_loggedIn;
    console.log('Route Change', props);
    var owner = (_props$_loggedIn$iden = props === null || props === void 0 ? void 0 : (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.identifier) !== null && _props$_loggedIn$iden !== void 0 ? _props$_loggedIn$iden : null;
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
exports.handleRouteChange = handleRouteChange;
var handleInteractMedia = function handleInteractMedia(props, media, action) {
  var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  try {
    var _props$_loggedIn$iden2, _props$_loggedIn2;
    console.log('Route Change', props);
    var owner = (_props$_loggedIn$iden2 = props === null || props === void 0 ? void 0 : (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.identifier) !== null && _props$_loggedIn$iden2 !== void 0 ? _props$_loggedIn$iden2 : null;
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
exports.handleInteractMedia = handleInteractMedia;
var throttleFunctionCall = /*#__PURE__*/function () {
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
  return function throttleFunctionCall(_x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
exports.throttleFunctionCall = throttleFunctionCall;
var throttleFunctionCallQueue = /*#__PURE__*/function () {
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
  return function throttleFunctionCallQueue(_x7, _x8, _x9, _x10, _x11) {
    return _ref2.apply(this, arguments);
  };
}();
exports.throttleFunctionCallQueue = throttleFunctionCallQueue;