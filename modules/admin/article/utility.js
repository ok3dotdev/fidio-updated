"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishArticle = exports.loadArticle = exports.deleteArticle = void 0;
var _fetch = require("../../utility/fetch");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var loadArticle = exports.loadArticle = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(props, id, editorRef, titleRef, groupsRef, tagsRef, setUseGroups, setUseTags, setPublished, setApproved, approvedRef, setMeta, setInHtmlImages) {
    var body, res, data, delta;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (props.fetchBusy) {
            _context.next = 28;
            break;
          }
          props.setFetchBusy(true);
          setTimeout(function () {
            props.setFetchBusy(false);
          }, 10000);
          if (!id) {
            _context.next = 28;
            break;
          }
          body = {
            domainKey: props.domainKey,
            hash: props._loggedIn.hash,
            identifier: props._loggedIn.identifier,
            id: id
          };
          _context.next = 8;
          return (0, _fetch.fetchPost)(props.apiUrl + '/a/getarticle', null, null, body);
        case 8:
          res = _context.sent;
          if (res) {
            _context.next = 14;
            break;
          }
          props.setFetchBusy(false);
          return _context.abrupt("return", false);
        case 14:
          if (!res.hasOwnProperty('status')) {
            _context.next = 28;
            break;
          }
          props.setFetchBusy(false);
          if (!(res.status == "disauthenticated")) {
            _context.next = 21;
            break;
          }
          logout();
          return _context.abrupt("return", "disauthenticated");
        case 21:
          if (!(res.status == "failed")) {
            _context.next = 25;
            break;
          }
          return _context.abrupt("return", false);
        case 25:
          if (!(res.status == "success")) {
            _context.next = 28;
            break;
          }
          if (res !== null && res !== void 0 && res.data) {
            data = res.data;
            if (data.contents && JSON.parse(data.contents)) {
              delta = editorRef.current.clipboard.convert(JSON.parse(data.contents));
              editorRef.current.setContents(delta, 'silent');
            }
            if (data.title) {
              titleRef.current.value = data.title;
            }
            if (data.groups) {
              groupsRef.current.value = data.groups.join(' ');
              setUseGroups(data.groups);
            }
            if (data.tags) {
              tagsRef.current.value = data.tags.join(' ');
              setUseTags(data.tags);
            }
            if (Object.prototype.hasOwnProperty.call(data, 'approved')) {
              setApproved(data.approved);
              if (approvedRef !== null && approvedRef !== void 0 && approvedRef.current) {
                approvedRef.current.checked = data.approved;
              }
            }
            if (data.meta) {
              setMeta(data.meta);
            }
            if (data.images) {
              setInHtmlImages(data.images);
            }
            setPublished(res.data);
          }
          return _context.abrupt("return", res);
        case 28:
          _context.next = 34;
          break;
        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          props.setFetchBusy(false);
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 30]]);
  }));
  return function loadArticle(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13) {
    return _ref.apply(this, arguments);
  };
}();
var publishArticle = exports.publishArticle = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(props, published, titleRef, useGroups, useTags, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, meta, setDidPublishThisSession, setPublished, loadDefault, useDefaultText, approved, setApproved, approvedRef, inHtmlImages) {
    var safeContents, body, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (props.fetchBusy) {
            _context2.next = 30;
            break;
          }
          props.setFetchBusy(true);
          setTimeout(function () {
            props.setFetchBusy(false);
          }, 10000);
          safeContents = editorRef.current.root.innerHTML;
          if (!safeContents) {
            _context2.next = 30;
            break;
          }
          body = {
            domainKey: props.domainKey,
            hash: props._loggedIn.hash,
            identifier: props._loggedIn.identifier,
            published: published,
            title: titleRef.current.value,
            contents: safeContents,
            groups: useGroups,
            tags: useTags,
            images: inHtmlImages,
            meta: meta,
            approved: approved
          };
          _context2.next = 9;
          return (0, _fetch.fetchPost)(props.apiUrl + '/a/publisharticle', null, null, body);
        case 9:
          res = _context2.sent;
          if (res) {
            _context2.next = 15;
            break;
          }
          props.setFetchBusy(false);
          return _context2.abrupt("return", false);
        case 15:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 30;
            break;
          }
          props.setFetchBusy(false);
          if (!(res.status == "disauthenticated")) {
            _context2.next = 22;
            break;
          }
          logout();
          return _context2.abrupt("return", "disauthenticated");
        case 22:
          if (!(res.status == "failed")) {
            _context2.next = 26;
            break;
          }
          return _context2.abrupt("return", false);
        case 26:
          if (!(res.status == "success")) {
            _context2.next = 30;
            break;
          }
          console.log(res);
          if (res !== null && res !== void 0 && res.published) {
            setUseTags(null);
            setUseGroups(null);
            tagsRef !== null && tagsRef !== void 0 && tagsRef.current ? tagsRef.current.value = '' : null;
            groupsRef !== null && groupsRef !== void 0 && groupsRef.current ? groupsRef.current.value = '' : null;
            if (editorRef !== null && editorRef !== void 0 && editorRef.current) {
              editorRef.current.setContents([{
                insert: useDefaultText
              }]);
            }
            titleRef !== null && titleRef !== void 0 && titleRef.current ? titleRef.current.value = '' : null;
            localStorage.setItem('cached_post_admin', null);
            if (approvedRef !== null && approvedRef !== void 0 && approvedRef.current) {
              approvedRef.current.checked = true;
            }
            if (setApproved) {
              setApproved(true);
            }
            setDidPublishThisSession(true);
            setPublished(res.published);
            loadDefault();
          }
          return _context2.abrupt("return", res);
        case 30:
          _context2.next = 36;
          break;
        case 32:
          _context2.prev = 32;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          props.setFetchBusy(false);
        case 36:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 32]]);
  }));
  return function publishArticle(_x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteArticle = exports.deleteArticle = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(props, published, titleRef, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, setPublished, loadDefault, useDefaultText) {
    var body, res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          if (props.fetchBusy) {
            _context3.next = 36;
            break;
          }
          props.setFetchBusy(true);
          setTimeout(function () {
            props.setFetchBusy(false);
          }, 10000);
          if (!(published !== null && published !== void 0 && published.id)) {
            _context3.next = 36;
            break;
          }
          body = {
            domainKey: props.domainKey,
            hash: props._loggedIn.hash,
            identifier: props._loggedIn.identifier,
            id: published.id
          };
          _context3.next = 8;
          return (0, _fetch.fetchPost)(props.apiUrl + '/a/deletearticle', null, null, body);
        case 8:
          res = _context3.sent;
          if (res) {
            _context3.next = 14;
            break;
          }
          props.setFetchBusy(false);
          return _context3.abrupt("return", false);
        case 14:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 36;
            break;
          }
          props.setFetchBusy(false);
          if (!(res.status == "disauthenticated")) {
            _context3.next = 21;
            break;
          }
          logout();
          return _context3.abrupt("return", "disauthenticated");
        case 21:
          if (!(res.status == "failed")) {
            _context3.next = 25;
            break;
          }
          return _context3.abrupt("return", false);
        case 25:
          if (!(res.status == "success")) {
            _context3.next = 36;
            break;
          }
          setUseTags(null);
          setUseGroups(null);
          tagsRef !== null && tagsRef !== void 0 && tagsRef.current ? tagsRef.current.value = '' : null;
          groupsRef !== null && groupsRef !== void 0 && groupsRef.current ? groupsRef.current.value = '' : null;
          if (editorRef !== null && editorRef !== void 0 && editorRef.current) {
            editorRef.current.setContents([{
              insert: useDefaultText
            }]);
          }
          titleRef !== null && titleRef !== void 0 && titleRef.current ? titleRef.current.value = '' : null;
          localStorage.setItem('cached_post_admin', null);
          setPublished(false);
          loadDefault();
          return _context3.abrupt("return", res);
        case 36:
          _context3.next = 41;
          break;
        case 38:
          _context3.prev = 38;
          _context3.t0 = _context3["catch"](0);
          props.setFetchBusy(false);
        case 41:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 38]]);
  }));
  return function deleteArticle(_x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40, _x41, _x42, _x43) {
    return _ref3.apply(this, arguments);
  };
}();