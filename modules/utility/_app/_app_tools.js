"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSingleOpenMenu = exports.registerSocket = exports.registerGoogleSignIn = exports.handleSetLoggedIn = exports.handleSetCart = exports.handleGlobalEvent = exports.forceUpdateProps = void 0;
var _ecommerce = require("../../utility/ecommerce");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var handleSetLoggedIn = function handleSetLoggedIn(pageProps, checkSignedIn, _setLoggedIn) {
  if (pageProps._loggedIn) {
    _setLoggedIn(pageProps._loggedIn);
  } else {
    var signedIn = checkSignedIn();
    if (signedIn) {
      _setLoggedIn(signedIn);
    }
  }
};
exports.handleSetLoggedIn = handleSetLoggedIn;
var toggleSingleOpenMenu = function toggleSingleOpenMenu(e, menu, _openMenu, _setOpenMenu, force) {
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
exports.toggleSingleOpenMenu = toggleSingleOpenMenu;
var handleSetCart = function handleSetCart(_loggedIn, _setCart) {
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
exports.handleSetCart = handleSetCart;
var forceUpdateProps = function forceUpdateProps(e, _setCart) {
  if (e) {
    if (e.dispatch === '_cart') {
      _setCart(JSON.parse(window.localStorage.getItem('cart'))); // Should force reload of cart props
    }
  }
};
exports.forceUpdateProps = forceUpdateProps;
var registerSocket = function registerSocket(io, _socket, setSocket, socketTimeout, pageProps, setSocketTimeout) {
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
exports.registerSocket = registerSocket;
var handleGlobalEvent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, pageProps, fetchBusy, setFetchBusy) {
    var cart, res, snapshot, res2, _res2$data, _res2$data$order, _cart, _res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!e) {
            _context.next = 31;
            break;
          }
          if (!(e.action === 'buy')) {
            _context.next = 22;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context.next = 20;
            break;
          }
          cart = JSON.parse(localStorage.getItem('cart'));
          _context.next = 7;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy);
        case 7:
          res = _context.sent;
          pageProps._LocalEventEmitter.dispatch('cart_update', {
            dispatch: 'flashCart'
          });
          if (!res) {
            _context.next = 20;
            break;
          }
          if (!(res.status === 'success')) {
            _context.next = 20;
            break;
          }
          (0, _ecommerce.updateCart)(cart, res.cart);
          // Successfully added to cart, must perform purchase
          cart = JSON.parse(localStorage.getItem('cart'));
          snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
            object: true
          });
          console.log('snapshot', snapshot);
          _context.next = 17;
          return (0, _ecommerce.performPurchase)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, cart, setFetchBusy, {
            snapshot: snapshot
          });
        case 17:
          res2 = _context.sent;
          if (res2) {
            if (res2.status === 'success') {
              if (res2.data && res2.data.cart) {
                (0, _ecommerce.updateCart)(cart, res2.data.cart);
              }
              if (res2 !== null && res2 !== void 0 && (_res2$data = res2.data) !== null && _res2$data !== void 0 && (_res2$data$order = _res2$data.order) !== null && _res2$data$order !== void 0 && _res2$data$order.id) {
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
          _context.next = 31;
          break;
        case 22:
          if (!(e.action === 'add_to_cart')) {
            _context.next = 31;
            break;
          }
          pageProps._setPageError(null);
          if (!(!fetchBusy && e.item && e.style && e.option)) {
            _context.next = 31;
            break;
          }
          _cart = JSON.parse(localStorage.getItem('cart'));
          _context.next = 28;
          return (0, _ecommerce.addToCartGlobal)(pageProps.apiUrl, pageProps.domainKey, pageProps._loggedIn, _cart, e.item, {
            style: e.style,
            option: e.option
          }, setFetchBusy);
        case 28:
          _res = _context.sent;
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
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleGlobalEvent(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
exports.handleGlobalEvent = handleGlobalEvent;
var registerGoogleSignIn = "// Register google one tap sign in event to pass data to registration/login function\n    const onOneTapSignedInGoogle = data => {\n        let event = new CustomEvent(\"thirdparty-signin\", { \"detail\": data });\n        document.dispatchEvent(event);\n    }\n    const doGoogleInit = (delay = 250) => {\n        try {\n            google.accounts.id.initialize({\n                client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',\n                callback: onOneTapSignedInGoogle\n            })\n            console.log('Google Loaded')\n            return true\n        } catch (err) {\n            // fail silently\n            setTimeout(() => {\n                doGoogleInit(delay * 2)\n            }, delay)\n        }\n    }\n    try {\n        let createdScripts = document.getElementsByClassName(\"lazyOnload\");\n        if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts\n            for (let i = 1; i < createdScripts.length; i++) {\n            createdScripts[i].remove();\n            }\n        }\n        doGoogleInit()\n    } catch (err) {\n        // fail silently\n        setTimeout(() => {\n            doGoogleInit(500)\n        }, 250)\n    }";
exports.registerGoogleSignIn = registerGoogleSignIn;