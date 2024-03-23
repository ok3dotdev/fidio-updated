"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ecommerce = require("../../utility/ecommerce");
var _util = require("../../util");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ProductImageManagerModule = _interopRequireDefault(require("./ProductImageManager.module.scss"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
var Module = function Module(props) {
  var _props$product3, _props$product4;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    warning = _React$useState4[0],
    setWarning = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    useImage = _React$useState6[0],
    setUseImage = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    itemId = _React$useState8[0],
    setItemId = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(0),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    currentlySelectedImage = _React$useState10[0],
    setCurrentlySelectedImage = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    imageThumbnailFeed = _React$useState12[0],
    setImageThumbnailFeed = _React$useState12[1];
  var fileInput = _react["default"].useRef();
  var productImageRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  _react["default"].useEffect(function () {
    if (props.product && props.product.id !== itemId) {
      setItemId(props.product.id);
      setUseImage(null);
      setCurrentlySelectedImage(0);
    }
  }, [props.product]);
  var handleUploadImage = _react["default"].useCallback(function (e) {
    setWarning(null);
    if (fileInput.current) {
      fileInput.current.click(); // Prompt file upload
    }
  });
  var handleNewFile = _react["default"].useCallback(function (e) {
    try {
      if (e && e.target && e.target.files) {
        var files = e.target.files;
        if (files && files.length > 0) {
          var filesRenamed = Array.from(files).slice(0, files.length > 4 ? 4 : files.length).filter(function (m) {
            return m.type && allowedTypes.indexOf(m.type) > -1;
          }).map(function (m) {
            var blob = m.slice(0, m.size, m.type);
            var ext = allowedTypes[allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
            return new File([blob], "".concat((0, _uuid.v4)(), ".").concat(ext), {
              type: m.type
            });
          });
          var n = props.editing && props.editing["new"];
          if (n && props.passTempImages) {
            // Product not created yet, do not upload image. We can load image as temp image to show user
            props.passTempImages(filesRenamed);
            var reader = new FileReader();
            reader.onload = function (event) {
              setUseImage(event.target.result);
            };
            reader.readAsDataURL(filesRenamed[0]);
          } else {
            // Product created already, immediately upload
            try {
              var f = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var formData, imgNames, data, _f;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!(!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn && props.editing)) {
                          _context.next = 14;
                          break;
                        }
                        formData = new FormData();
                        imgNames = [];
                        if (filesRenamed) {
                          filesRenamed.forEach(function (img) {
                            formData.append("image", img);
                            imgNames.push({
                              name: img.name,
                              modif: 'productImage'
                            });
                          });
                          formData.append('imgNames', JSON.stringify(imgNames));
                        }
                        formData.append('domainKey', props.domainKey);
                        formData.append('hash', props._loggedIn.hash);
                        formData.append('identifier', props._loggedIn.identifier);
                        formData.append('product', props.editing.id);
                        if (props.setFetchBusy) {
                          props.setFetchBusy(true);
                          setTimeout(function () {
                            props.setFetchBusy(false);
                          }, 10000);
                        }
                        console.log(formData.get('image'), filesRenamed);
                        _context.next = 12;
                        return (0, _ecommerce.doUploadImageForProduct)(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                      case 12:
                        data = _context.sent;
                        if (data && data.product && data.product.products) {
                          if (props.setCombinedFeed) {
                            props.setCombinedFeed(data.product.products);
                            if (props.setEditing) {
                              _f = data.product.products.find(function (m) {
                                return m.id === props.editing.id;
                              });
                              if (_f) {
                                props.setEditing(_f);
                              }
                            }
                          }
                          if (props.setFetchBusy) {
                            props.setFetchBusy(false);
                          }
                        }
                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function f() {
                  return _ref.apply(this, arguments);
                };
              }();
              f();
            } catch (err) {
              // fail silently
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
      setWarning({
        message: 'There was an issue uploading images'
      });
    }
  });
  _react["default"].useEffect(function () {
    if (props.editing && !props.editing["new"]) {
      if (!useImage) {
        if (props.editing.images && props.editing.images[0] && props.editing.images[0].name && props.cdn && props.cdn["static"]) {
          setUseImage(props.cdn["static"] + '/' + props.editing.images[0].name);
        }
      }
    }
    if (props.product) {
      if (!useImage) {
        if (props.product.images && props.product.images[0] && props.product.images[0].name && props.cdn && props.cdn["static"]) {
          setUseImage(props.cdn["static"] + '/' + props.product.images[0].name);
        }
      }
    }
  }, [props.editing, useImage, props.product]);
  _react["default"].useEffect(function () {
    console.log(props.editing, props.product);
    if (props.editing) {
      setImageThumbnailFeed(props.editing.images);
    } else if (props.product) {
      setImageThumbnailFeed([]);
    }
  }, [props.editing, props.product]);

  // select container
  // .on("mouseover", function() {
  //     $(this)
  //       .children(".img_producto")
  //       .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  //   })
  //   .on("mouseout", function() {
  //     $(this)
  //       .children(".img_producto")
  //       .css({ transform: "scale(1)" });
  //   })
  //   .on("mousemove", function(e) {
  //     $(this)
  //       .children(".img_producto")
  //       .css({
  //         "transform-origin":
  //           ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
  //           "% " +
  //           ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
  //           "%"
  //       });

  var setUseImageThumbnail = _react["default"].useCallback(function (e) {
    if (e !== null && e !== void 0 && e.target) {
      var _e$target$getAttribut, _props$product, _props$cdn;
      var selector = (_e$target$getAttribut = e.target.getAttribute('selector')) !== null && _e$target$getAttribut !== void 0 ? _e$target$getAttribut : e.target.parentElement.getAttribute('selector');
      if (selector && props !== null && props !== void 0 && (_props$product = props.product) !== null && _props$product !== void 0 && _props$product.images && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"]) {
        var image = props.product.images.find(function (m) {
          return m.name === selector;
        });
        if (image) {
          setUseImage(props.cdn["static"] + '/' + image.name);
        }
      }
    }
  });

  /**
   * Sets a property on an image of a product to true. 
   * @param {*} property // Name of property
   * @param {*} value // Value to set property to
   * @param {*} single // Ensure that set image is only with property value
   */
  var setImgProp = function setImgProp(property, value, single) {
    if (useImage) {
      var _props$product2;
      console.log(useImage);
      var imgName = useImage.match(/\.[^\/]+\/(.+)$/) && useImage.match(/\.[^\/]+\/(.+)$/)[1] ? useImage.match(/\.[^\/]+\/(.+)$/)[1] : null;
      if (imgName && props !== null && props !== void 0 && (_props$product2 = props.product) !== null && _props$product2 !== void 0 && _props$product2.images && Array.isArray(props.product.images) && props !== null && props !== void 0 && props.setEditing) {
        var images = _toConsumableArray(props.product.images);
        var index = images.findIndex(function (m) {
          return m.name === imgName;
        });
        if (single) {
          images.map(function (m) {
            delete m[property];
          });
        }
        if (index > -1) {
          images[index][property] = value;
          var product = Object.assign(props.product, {
            images: images
          });
          props.setEditing(product);
        }
      }
    }
  };
  var setCurrentImageAsBackground = _react["default"].useCallback(function (e) {
    setImgProp('bgImg', true, true);
  });
  var setCurrentImageAsLead = _react["default"].useCallback(function (e) {
    setImgProp('leadImg', true, true);
  });
  var bgImg = props !== null && props !== void 0 && (_props$product3 = props.product) !== null && _props$product3 !== void 0 && _props$product3.images ? props.product.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.bgImg;
  }) : null;
  var leadImg = props !== null && props !== void 0 && (_props$product4 = props.product) !== null && _props$product4 !== void 0 && _props$product4.images ? props.product.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.leadImg;
  }) : null;
  var currentIsBgImage = (useImage === null || useImage === void 0 ? void 0 : useImage.match) && useImage.match(/\.[^\/]+\/(.+)$/) && (bgImg === null || bgImg === void 0 ? void 0 : bgImg.name) && useImage.match(/\.[^\/]+\/(.+)$/)[1] === bgImg.name;
  var currentIsLeadImage = (useImage === null || useImage === void 0 ? void 0 : useImage.match) && useImage.match(/\.[^\/]+\/(.+)$/) && (leadImg === null || leadImg === void 0 ? void 0 : leadImg.name) && useImage.match(/\.[^\/]+\/(.+)$/)[1] === leadImg.name;
  return <div className={"".concat(props.className, " ").concat(_ProductImageManagerModule["default"].productImageManagerContainer, " ProductImageManager_container")} style={{
    position: 'relative'
  }}>
            {props.editing && !(0, _util.isObjectEmpty)(props.editing) ? <_react.default.Fragment>
                        <input type='file' style={{
        display: 'none'
      }} ref={fileInput} onChange={handleNewFile} />
                        <_Tooltip.default title="Click here to upload an image for your product" placement='bottom'>
                            <div className={"".concat(_ProductImageManagerModule["default"].changeImageButton, " image material-icons")} onClick={handleUploadImage}>image</div>
                        </_Tooltip.default>
                        {warning && warning.message ? <div className={"".concat(_ProductImageManagerModule["default"].warning)}>
                                    <div className={"".concat(_ProductImageManagerModule["default"].warningItemContainer)}>
                                        <div className={"".concat(_ProductImageManagerModule["default"].warningItem)}>{warning.message}</div>
                                    </div>
                                </div> : null}
                    </_react.default.Fragment> : null}
            {props !== null && props !== void 0 && props.editing && !(0, _util.isObjectEmpty)(props.editing) ? <div className={"".concat(_ProductImageManagerModule["default"].buttonSetAsBackground)}>
                        {currentIsLeadImage ? <button className='gradient_style_bg_1 gradient_style_bg_drop' style={{
        fontWeight: 600,
        border: '1px solid #b8ff00',
        borderRadius: '1rem',
        fontSize: '.7rem',
        textAlign: 'center',
        padding: '0.125rem 1.5rem',
        color: 'white'
      }}>Current Lead Image</button> : <button onClick={setCurrentImageAsLead}>Tag As Lead Image</button>}
                        {currentIsBgImage ? <button className='gradient_style_bg_2 gradient_style_bg_2_drop' style={{
        fontWeight: 600,
        border: '1px solid #fe4c4c',
        borderRadius: '1rem',
        fontSize: '.7rem',
        textAlign: 'center',
        padding: '0.125rem 1.5rem',
        color: 'white'
      }}>Current Feature Image</button> : <button onClick={setCurrentImageAsBackground}>Tag As Feature Image</button>}
                    </div> : null}
            <div className={"".concat(_ProductImageManagerModule["default"].productImageListContainer)}>
                    {imageThumbnailFeed && imageThumbnailFeed.map && props.cdn && props.cdn["static"] ? imageThumbnailFeed.map(function (m) {
        return <div className={"".concat(_ProductImageManagerModule["default"].productImageListThumbnailContainer)} style={{
          backgroundImage: "url(".concat(props.cdn["static"], "/").concat(m.name, ")")
        }} onClick={setUseImageThumbnail} selector={m.name}>
                                    <img src={(0, _ecommerce.resolveImg)(props.editing, props.cdn)} className='Product_img' style={{
            width: '45px',
            opacity: useImage ? 0 : 1
          }} />
                                </div>;
      }) : null}
            </div>
            <div className={"".concat(_ProductImageManagerModule["default"].productImageContainer)} ref={productImageRef} style={{
      backgroundImage: useImage ? "url(".concat(useImage, ")") : ''
    }}>
                <img src={(0, _ecommerce.resolveImg)(props.editing, props.cdn)} style={{
        opacity: useImage ? 0 : 1
      }} className='Product_img'></img>
            </div>
        </div>;
};
var _default = exports["default"] = Module;