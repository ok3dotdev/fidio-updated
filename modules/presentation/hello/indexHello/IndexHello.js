"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _reactSlick = _interopRequireDefault(require("react-slick"));
var _PresentationModule = _interopRequireDefault(require("../../Presentation.module.scss"));
var _uuid = require("uuid");
var _utility = require("../../../utility/utility");
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _fetch = require("../../../utility/fetch");
var _utility2 = require("../../utility");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var moduleName = 'IndexHello';
var RESET_CTA_TIMER = 180000;
var Module = function Module(props) {
  var _props$request;
  var router = (0, _router.useRouter)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    useCountdown = _React$useState6[0],
    setUseCountdown = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentSlide = _React$useState8[0],
    setCurrentSlide = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    ctaClickedOnce = _React$useState10[0],
    setCtaClickedOnce = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    useHandler = _React$useState12[0],
    setUseHandler = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    resolvedUseItems = _React$useState14[0],
    setResolvedUseItems = _React$useState14[1];
  var ctaRef = _react["default"].useRef();
  var currentSlider = _react["default"].useRef();
  var sliderTrackRef = _react["default"].useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, function (d) {
    if (d && d.dispatch) {
      if (d.dispatch === 'updateCountdown') {
        var useCurrentTime = props.items && props.items[currentSlide] ? props.items[currentSlide].date : null;
        if (useCurrentTime !== null) {
          var useTime = typeof useCurrentTime === 'string' ? new Date(Number(useCurrentTime)) : _typeof(useCurrentTime) === 'object' ? new Date(useCurrentTime) : new Date(useCurrentTime);
          if (!isNaN(useTime)) {
            var timeRemaining = (0, _utility.getTimeRemaining)(useTime, new Date());
            if (timeRemaining) {
              setUseCountdown(timeRemaining);
            }
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      if (props.request) {
        setUseHandler(true);
      }
      setInterval(function () {
        props._LocalEventEmitter.dispatch(id, {
          dispatch: 'updateCountdown'
        });
      }, 1000);
      setTimeout(function () {
        var slickTracks = document.getElementsByClassName('slick-track');
        if (slickTracks) {
          if (slickTracks[0]) {
            slickTracks[0].style.transition = '500ms';
            slickTracks[0].style.left = '-20px';
            setTimeout(function () {
              slickTracks[0].style.left = '0';
            }, 2000);
          }
        }
      }, 2000);
      setComponentDidMount(true);
    }
  }, [componentDidMount, props.request]);
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _e$currentTarget;
      var cta, tempRef;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCtaClickedOnce(true);
            if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute('ctaAfter')) {
              e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
              cta = e.currentTarget.getAttribute('cta');
              tempRef = e.currentTarget;
              setTimeout(function () {
                try {
                  tempRef.innerHTML = cta;
                } catch (err) {
                  // fail silently
                }
              }, RESET_CTA_TIMER);
            }
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var resolveImage = function resolveImage(item, img, type) {
    if (item !== null && item !== void 0 && item.rawBg && type === 'bg') {
      return img;
    } else if (item !== null && item !== void 0 && item.raw && type === 'icon') {
      return img;
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0 && img) {
      return "".concat(props.cdn["static"], "/").concat(img);
    }
    return 'img/default/greythumb.jpg';
  };
  var receiveData = function receiveData(res) {
    var _res$data;
    console.log(res);
    if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.fetchedData) {
      var items = [];
      var validGroups = res.data.fetchedData.map(function (m) {
        return Object.entries(m).map(function (n) {
          return n[1].map(function (o) {
            if (Array.isArray(o)) {
              return o.map(function (p) {
                if (p.id) {
                  items.push(p);
                  return p;
                }
                return null;
              });
            } else {
              if (o.id) {
                items.push(o);
                return o;
              }
            }
            return null;
          });
        });
      });
      var flattened = validGroups.flat(3);
      if (flattened) {
        var _useItems = flattened.filter(Boolean);
        setResolvedUseItems(_useItems);
      }
    }
    // Use Received data instead props.items. Can set to useItems. Use useItems as state
    // Must set image based on if feature image present. if no feature image present use 1st image (if tall view, look for tall image first)
    // Use Name for title. Use author username for author
  };
  var useItems = _react["default"].useMemo(function () {
    var _props$items;
    if (resolvedUseItems && useHandler) {
      var useData = (0, _utility2.normalizeData)(resolvedUseItems);
      return useData;
    }
    if (props !== null && props !== void 0 && (_props$items = props.items) !== null && _props$items !== void 0 && _props$items.map) {
      return (0, _utility2.normalizeData)(props.items);
    }
    return [{}, {}, {}, {}, {}, {}];
  }, [resolvedUseItems, useHandler, props === null || props === void 0 ? void 0 : props.items]);
  var useSettings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    // variableWidth: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        slidesToShow: 6,
        touchThreshold: 120
      }
    }, {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        touchThreshold: 100
      }
    }, {
      breakpoint: 1680,
      settings: {
        slidesToShow: 4,
        touchThreshold: 80
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        touchThreshold: 60
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        touchThreshold: 40
      }
    }, {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        touchThreshold: 20
      }
    }]
  };
  var handleSliderLinkClickUpProxy = _react["default"].useCallback(function (e) {
    (0, _utility2.handleSliderLinkClickUp)(e, router);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].IndexHelloContainer, " sliderContainer_").concat(componentId, " ").concat(moduleName, "_IndexHelloContainer ").concat(props.className),
    ref: sliderTrackRef
  }, props.groupLabel ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabelContainer, " ").concat(moduleName, "_groupLabelContainer ").concat(props.groupLabelContainerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_PresentationModule["default"].GroupLabel, " ").concat(moduleName, "_groupLabel ").concat(props.groupLabelClassName)
  }, props.groupLabel)) : null, useHandler && props !== null && props !== void 0 && (_props$request = props.request) !== null && _props$request !== void 0 && _props$request.handlerArgs ? /*#__PURE__*/_react["default"].createElement(_fetch.FetchHandler, _extends({
    handlerArgs: props.request.handlerArgs,
    receiveData: receiveData
  }, props)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "swipe slider_".concat(componentId)
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({}, useSettings, {
    className: "".concat(_PresentationModule["default"].IndexItemsContainer, " swiper-wrapper slider_slides  ").concat(moduleName, "_IndexItemsContainer ").concat(props.IndexItemsContainerClassName)
  }), useItems !== null && useItems !== void 0 && useItems.map ? useItems.map(function (m, i) {
    var _m$leadBg, _m$author, _m$icon2, _m$author2, _m$iconWidth, _m$iconHeight, _m$title, _m$author3, _m$item, _m$item2, _m$item3, _m$item4, _m$item5, _m$item6;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "swiper-slide ".concat(_PresentationModule["default"].IndexItemUpperContainer, " ").concat(props.tall ? "".concat(_PresentationModule["default"].IndexItemsUpperContainerTall) : null, " ").concat(moduleName, "_Container ").concat(componentId, "_IndexItemUpperContainer ").concat(m.important ? "slider_item_important" : ''),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].BgContainer, " ").concat(props.tall ? "".concat(_PresentationModule["default"].BgContainerTall) : null, " ").concat(moduleName, "_BgContainer ").concat(props.bgClassName),
      style: {
        backgroundImage: "url(".concat(resolveImage(m, (_m$leadBg = m === null || m === void 0 ? void 0 : m.leadBg) !== null && _m$leadBg !== void 0 ? _m$leadBg : null, 'bg'), ")")
      }
    }, props.children, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].FillPageContainer, " ").concat(moduleName, "_FillPageContainer")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeContainer, " ").concat(moduleName, "_TimeContainer ").concat(props.timeContainerClassName)
    }, m !== null && m !== void 0 && m.showSimpleDate ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].TimeSimple, " ").concat(moduleName, "_TimeSimple ").concat(props.timeSimpleClassName, " ").concat((0, _utility2.datePassed)(m.date) ? "".concat(_PresentationModule["default"].DatePassed) : '')
    }, /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && m.date ? (0, _utility2.resolveGoodDate)(m.date) : '')) : null)))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].MetaContainer, " ").concat(moduleName, "_MetaContainer ").concat(props.metaContainerClassName)
    }, (m === null || m === void 0 ? void 0 : m.icon) !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].IconContainer, " ").concat(moduleName, "_IconContainer ").concat(props.iconContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat((_m$author = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author !== void 0 ? _m$author : ''),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
      loader: function loader() {
        var _m$icon;
        return resolveImage(m, (_m$icon = m === null || m === void 0 ? void 0 : m.icon) !== null && _m$icon !== void 0 ? _m$icon : null, 'icon');
      },
      src: resolveImage(m, (_m$icon2 = m === null || m === void 0 ? void 0 : m.icon) !== null && _m$icon2 !== void 0 ? _m$icon2 : null, 'icon'),
      style: {
        maxWidth: '60px',
        borderRadius: '4rem',
        minHeight: '50px'
      },
      alt: (_m$author2 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author2 !== void 0 ? _m$author2 : '',
      width: (_m$iconWidth = m === null || m === void 0 ? void 0 : m.iconWidth) !== null && _m$iconWidth !== void 0 ? _m$iconWidth : '50',
      height: (_m$iconHeight = m === null || m === void 0 ? void 0 : m.iconHeight) !== null && _m$iconHeight !== void 0 ? _m$iconHeight : '50',
      layout: "responsive"
    }))) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].DataContainer, " ").concat(moduleName, "_DataContainer ").concat(props.DataContainerClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Lead, " ").concat(moduleName, "_Lead ").concat(props.leadClassName)
    }, (_m$title = m === null || m === void 0 ? void 0 : m.title) !== null && _m$title !== void 0 ? _m$title : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].CtaHolder, " ").concat(moduleName, "_CtaHolder ").concat(props.CtaHolderClassName)
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/p?u=".concat(m === null || m === void 0 ? void 0 : m.author),
      onClick: _utility2.handleSliderLinkClick,
      onMouseDown: _utility2.handleSliderLinkClickDown,
      onMouseUp: handleSliderLinkClickUpProxy,
      draggable: false,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_PresentationModule["default"].Author, " ").concat(moduleName, "_Author ").concat(props.authorClassName)
    }, (_m$author3 = m === null || m === void 0 ? void 0 : m.author) !== null && _m$author3 !== void 0 ? _m$author3 : '')), m !== null && m !== void 0 && (_m$item = m.item) !== null && _m$item !== void 0 && _m$item.id && m !== null && m !== void 0 && (_m$item2 = m.item) !== null && _m$item2 !== void 0 && _m$item2.style && m !== null && m !== void 0 && (_m$item3 = m.item) !== null && _m$item3 !== void 0 && _m$item3.option ? /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(moduleName, "_Cta ").concat(props.ctaClassName),
      onClick: handleFireGlobalEvent,
      action: ['add_to_cart', 'buy'].indexOf(m === null || m === void 0 ? void 0 : m.action) > -1 ? m.action : 'add_to_cart',
      item: m === null || m === void 0 || (_m$item4 = m.item) === null || _m$item4 === void 0 ? void 0 : _m$item4.id,
      selectedstyle: m === null || m === void 0 || (_m$item5 = m.item) === null || _m$item5 === void 0 ? void 0 : _m$item5.style,
      currentoption: m === null || m === void 0 || (_m$item6 = m.item) === null || _m$item6 === void 0 ? void 0 : _m$item6.option,
      ref: ctaRef,
      ctaAfter: m.ctaAfter,
      cta: m.cta
    }, m.cta) : null)))));
  }) : null)));
};
var _default = exports["default"] = Module;