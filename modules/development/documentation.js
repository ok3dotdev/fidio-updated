"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var _router = require("next/router");
var _admin = require("../admin");
var _elasticlunr = _interopRequireDefault(require("../utility/utility/elasticlunr"));
var _documentationModule = _interopRequireDefault(require("./documentation.module.scss"));
var _fetch = require("../utility/fetch");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _util = require("../util");
var _ = require(".");
var _div;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _queryRef$current, _detectFlags3, _detectFlags4;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    fetchBusy = _React$useState6[0],
    setFetchBusy = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentIndex = _React$useState8[0],
    setCurrentIndex = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    currentResults = _React$useState10[0],
    setCurrentResults = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    devIndex = _React$useState12[0],
    setDevIndex = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(-1),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    firstInput = _React$useState14[0],
    setFirstInput = _React$useState14[1];
  var _React$useState15 = _react["default"].useState({}),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    currentDoc = _React$useState16[0],
    setCurrentDoc = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(0),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    currentMenu = _React$useState18[0],
    setCurrentMenu = _React$useState18[1];
  var _React$useState19 = _react["default"].useState([]),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    menu = _React$useState20[0],
    setMenu = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    currentMenuDocsList = _React$useState22[0],
    setCurrentMenuDocsList = _React$useState22[1];
  var _React$useState23 = _react["default"].useState([]),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    currentMenuResults = _React$useState24[0],
    setCurrentMenuResults = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    usingQuery = _React$useState26[0],
    setUsingQuery = _React$useState26[1];
  var queryRef = _react["default"].useRef();
  var searchWillClose = _react["default"].useRef();
  var resolveDefault = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(useData) {
      var allJustMenu, menuItems, res, _allJustMenu, _menuItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(props !== null && props !== void 0 && props.apiUrl)) {
              _context.next = 12;
              break;
            }
            if (!useData) {
              _context.next = 7;
              break;
            }
            setDevIndex(useData);
            allJustMenu = useData.map(function (m) {
              return m.menu;
            });
            menuItems = allJustMenu.filter(function (m, i) {
              return allJustMenu.indexOf(m) === i;
            });
            setMenu(menuItems);
            return _context.abrupt("return", 1);
          case 7:
            _context.next = 9;
            return (0, _fetch.fetchPost)(props.apiUrl + '/m/getdocumentation', null, null, {
              spec: 'all'
            });
          case 9:
            res = _context.sent;
            if (res.hasOwnProperty('status')) {
              if (res.status == "success" && res.data) {
                setDevIndex(res.data);
                _allJustMenu = res.data.map(function (m) {
                  return m.menu;
                });
                _menuItems = _allJustMenu.filter(function (m, i) {
                  return _allJustMenu.indexOf(m) === i;
                });
                setMenu(_menuItems);
              }
            }
            return _context.abrupt("return", false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resolveDefault(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      resolveDefault(props === null || props === void 0 ? void 0 : props.documentationData);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var runSearch = function runSearch(query, passedIndex) {
    if (currentIndex || passedIndex) {
      var results = passedIndex ? passedIndex.search(query, {
        expand: true
      }) : currentIndex.search(query, {
        expand: true
      });
      var useIndex = devIndex.map(function (doc, i) {
        doc.id = i;
        return doc;
      });
      var resultRecords = results.map(function (result) {
        return useIndex.find(function (doc) {
          return doc.id == result.ref;
        });
      }); // Id may or may not be number depending on user definition. Soft comparison
      setCurrentResults(resultRecords);
      if (resultRecords && resultRecords[0]) {
        if (resultRecords[0].menu) {
          setCurrentMenu(menu.indexOf(resultRecords[0].menu));
        }
        setCurrentDoc(resultRecords[0]);
      }
    }
  };
  _react["default"].useEffect(function () {
    if (componentDidMount && (devIndex === null || devIndex === void 0 ? void 0 : devIndex.length) > 0) {
      if (_elasticlunr["default"] && devIndex && !currentIndex) {
        var _router$query;
        var fullTextSearchIndex = (0, _elasticlunr["default"])(function () {
          var _this = this;
          this.ref('id');
          this.field('lead');
          this.field('html');
          this.field('code');
          this.field('response');
          this.field('meta');
          if (Array.isArray(devIndex)) {
            devIndex.forEach(function (doc, i) {
              doc.id = i;
              _this.add(doc);
            });
          }
        });
        setCurrentIndex(fullTextSearchIndex);
        if (router !== null && router !== void 0 && (_router$query = router.query) !== null && _router$query !== void 0 && _router$query.q) {
          queryRef.current.value = router.query.q;
          runSearch(router.query.q, fullTextSearchIndex);
        }
      }
    }
  }, [devIndex, componentDidMount]);
  _react["default"].useEffect(function () {
    if (componentDidMount && (devIndex === null || devIndex === void 0 ? void 0 : devIndex.length) > 0) {
      if (_elasticlunr["default"] && devIndex) {
        var useIndex = devIndex.filter(function (m) {
          return m.menu === menu[currentMenu];
        });
        console.log(useIndex);
        setCurrentMenuDocsList(useIndex);
      }
    }
  }, [currentMenu, menu, devIndex, componentDidMount]);
  var handleUpdateSearch = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    setFirstInput(new Date().getTime());
    var query = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.value;
    if (query !== null && query !== '' && currentIndex && devIndex) {
      runSearch(query);
    } else {
      setPinned();
    }
  });
  _react["default"].useEffect(function () {
    setPinned();
  }, [currentIndex]);
  var setPinned = function setPinned() {
    if (queryRef !== null && queryRef !== void 0 && queryRef.current && devIndex !== null && devIndex !== void 0 && devIndex.filter) {
      var value = queryRef.current.value;
      if (!value || value === '') {
        var pinned = devIndex === null || devIndex === void 0 ? void 0 : devIndex.filter(function (m) {
          return m.pinned;
        });
        if (pinned.length > 0) {
          setCurrentResults(pinned);
        }
      }
    }
  };
  var resolvePaint = function resolvePaint(m, field) {
    try {
      if (m && m[field]) {
        var _m$field;
        return {
          __html: _dompurify["default"].sanitize((_m$field = m[field]) !== null && _m$field !== void 0 ? _m$field : '')
        };
      }
      return '';
    } catch (err) {
      return '';
    }
  };
  var handleSetCurrentMenu = _react["default"].useCallback(function (e) {
    var _e$currentTarget2;
    if (e !== null && e !== void 0 && (_e$currentTarget2 = e.currentTarget) !== null && _e$currentTarget2 !== void 0 && _e$currentTarget2.getAttribute('modif')) {
      var modif = e.currentTarget.getAttribute('modif');
      if (modif) {
        var i = menu.indexOf(modif);
        if (i > -1) {
          setCurrentDoc({});
          setCurrentMenu(i);
        }
      }
    }
  });
  var handleSetCurrentRecord = _react["default"].useCallback(function (e) {
    var _e$currentTarget3;
    if (e !== null && e !== void 0 && (_e$currentTarget3 = e.currentTarget) !== null && _e$currentTarget3 !== void 0 && _e$currentTarget3.getAttribute) {
      // Is number cannot resolve true 
      var modif = e.currentTarget.getAttribute('modif');
      if (modif > -1) {
        var _e$currentTarget4;
        console.log(currentMenuDocsList, modif);
        if (e !== null && e !== void 0 && (_e$currentTarget4 = e.currentTarget) !== null && _e$currentTarget4 !== void 0 && _e$currentTarget4.getAttribute('currentresults')) {
          setCurrentDoc(currentResults[modif]);
        } else {
          setCurrentDoc(currentMenuDocsList[modif]);
        }
      }
    }
  });
  var handleSetSearchFocus = _react["default"].useCallback(function (e) {
    if (searchWillClose !== null && searchWillClose !== void 0 && searchWillClose.current) {
      clearTimeout(searchWillClose.current);
    }
    setUsingQuery(true);
  });
  var handleSetSearchFocusOff = _react["default"].useCallback(function (e) {
    try {
      searchWillClose.current = setTimeout(function () {
        setUsingQuery(false);
      }, 500);
    } catch (err) {
      // fail silently
    }
  });
  var detectFlags = function detectFlags(doc) {
    var o = {};
    var flags = ['manual', 'simple'];
    console.log(devIndex, doc, _typeof(doc));
    if (typeof doc === 'string') {
      doc = devIndex.find(function (m) {
        return m.lead === doc;
      });
    }
    flags.map(function (m) {
      var _doc;
      o[m] = ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.meta.indexOf(m)) > -1;
    });
    return o;
  };
  console.log('Menu Items', menu, currentDoc);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " Documentation_Container")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      alignContent: 'center',
      margin: '.5rem 1.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "Misc_Label",
    style: {
      fontSize: '1.5rem'
    }
  }, "Tycoon Documentation"), /*#__PURE__*/_react["default"].createElement(_.CompanyLink, props)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      margin: '.5rem 0',
      marginTop: '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    onChange: handleUpdateSearch,
    onFocus: handleSetSearchFocus,
    onBlur: handleSetSearchFocusOff,
    className: "".concat(_documentationModule["default"].activeSearch),
    ref: queryRef,
    style: {
      border: '0px',
      borderRadius: '.5rem',
      width: 'calc(100% - 1rem)',
      fontSize: '1.25rem',
      padding: '0 .5rem',
      margin: '0 .5rem'
    },
    placeholder: "How do I?"
  }), usingQuery ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].activeSearchResults)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '.25rem 0rem',
      paddingTop: '.5rem',
      display: 'grid',
      gap: '.5rem'
    }
  }, Array.isArray(currentResults) && currentResults.length > 0 ? currentResults.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p5",
      style: {
        marginLeft: '.5rem',
        cursor: 'pointer'
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_Item_Container Misc_Item_DarkContainerHover",
      style: {
        padding: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].lead),
      onClick: handleSetCurrentRecord,
      modif: i,
      currentresults: 'true'
    }, m.lead)));
  }) : (queryRef === null || queryRef === void 0 || (_queryRef$current = queryRef.current) === null || _queryRef$current === void 0 ? void 0 : _queryRef$current.value) !== '' ? _div || (_div = /*#__PURE__*/_react["default"].createElement("div", null)) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '.95rem'
    }
  }, "Try Searching for something"))) : null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex gap-p5 ".concat(_documentationModule["default"].menuContainer)
  }, Array.isArray(menu) && menu.length > 0 ? menu.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i,
      style: {
        listStyle: 'none'
      },
      onClick: handleSetCurrentMenu,
      modif: m
    }, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && m.charAt ? "".concat(m.charAt(0).toUpperCase()).concat(m.slice(1, m.length)) : m));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].mainContainer)
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "".concat(_documentationModule["default"].menuList)
  }, Array.isArray(currentMenuDocsList) && currentMenuDocsList.length > 0 ? currentMenuDocsList.map(function (m, i) {
    var _detectFlags, _detectFlags2;
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "flex gap-p2",
      onClick: handleSetCurrentRecord,
      modif: i
    }, /*#__PURE__*/_react["default"].createElement("div", null, m === null || m === void 0 ? void 0 : m.lead), (_detectFlags = detectFlags(m)) !== null && _detectFlags !== void 0 && _detectFlags.manual ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].tagUnmanaged, " ").concat(_documentationModule["default"].tagSmall)
    }, "m") : null, (_detectFlags2 = detectFlags(m)) !== null && _detectFlags2 !== void 0 && _detectFlags2.simple ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_documentationModule["default"].tagSimple, " ").concat(_documentationModule["default"].tagSmall)
    }, "s") : null);
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].contentContainer)
  }, currentDoc && !(0, _util.isObjectEmpty)(currentDoc) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex ".concat(_documentationModule["default"].quadrant)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Item_Container Misc_Item_DarkContainerHover",
    style: {
      padding: '.5rem',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].lead)
  }, currentDoc.lead), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5"
  }, (_detectFlags3 = detectFlags(currentDoc)) !== null && _detectFlags3 !== void 0 && _detectFlags3.manual ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].tagUnmanaged, " ").concat(_documentationModule["default"].tag)
  }, "manual") : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p5"
  }, (_detectFlags4 = detectFlags(currentDoc)) !== null && _detectFlags4 !== void 0 && _detectFlags4.simple ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].tagSimple, " ").concat(_documentationModule["default"].tag)
  }, "simple") : null), /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].htmlParseContainer),
    dangerouslySetInnerHTML: resolvePaint(currentDoc, 'html'),
    style: {
      fontSize: '.85rem',
      lineHeight: 'normal',
      lineBreak: 'auto',
      whiteSpace: 'pre-wrap'
    }
  }))))) : null), /*#__PURE__*/_react["default"].createElement("div", null, currentDoc && !(0, _util.isObjectEmpty)(currentDoc) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex ".concat(_documentationModule["default"].container)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].quadrant2)
  }, /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_documentationModule["default"].codePre)
  }, currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.code))), /*#__PURE__*/_react["default"].createElement("div", null, currentDoc.response))) : null)));
};
var _default = exports["default"] = Module;