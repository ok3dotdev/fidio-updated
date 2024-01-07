"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var allowedTypes = ['image/jpeg', 'image/png'];
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
                          _context.next = 13;
                          break;
                        }
                        formData = new FormData();
                        imgNames = [];
                        if (filesRenamed) {
                          filesRenamed.forEach(function (img) {
                            formData.append("image", img);
                            imgNames.push(img.name);
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
                        _context.next = 11;
                        return (0, _ecommerce.doUploadImageForProduct)(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                      case 11:
                        data = _context.sent;
                        if (data && data.product && data.product.products) {
                          if (props.setShopProducts && props.setCombinedFeed) {
                            props.setShopProducts(data.product.products);
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
                      case 13:
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
  console.log(imageThumbnailFeed, currentIsBgImage, currentIsLeadImage, props.product);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ProductImageManager_container"),
    style: {
      position: 'relative'
    }
  }, props.editing && !(0, _util.isObjectEmpty)(props.editing) ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleNewFile
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Click here to upload an image for your product",
    placement: "bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].changeImageButton, " image material-icons"),
    onClick: handleUploadImage
  }, "image")), warning && warning.message ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warning)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItemContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].warningItem)
  }, warning.message))) : null) : null, props !== null && props !== void 0 && props.editing && !(0, _util.isObjectEmpty)(props.editing) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].buttonSetAsBackground)
  }, currentIsLeadImage ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "gradient_style_bg_1 gradient_style_bg_drop",
    style: {
      fontWeight: 600,
      border: '1px solid #b8ff00',
      borderRadius: '1rem',
      fontSize: '.7rem',
      textAlign: 'center',
      padding: '0.125rem 1.5rem',
      color: 'white'
    }
  }, "Current Lead Image") : /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentImageAsLead
  }, "Tag As Lead Image"), currentIsBgImage ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "gradient_style_bg_2 gradient_style_bg_2_drop",
    style: {
      fontWeight: 600,
      border: '1px solid #fe4c4c',
      borderRadius: '1rem',
      fontSize: '.7rem',
      textAlign: 'center',
      padding: '0.125rem 1.5rem',
      color: 'white'
    }
  }, "Current Feature Image") : /*#__PURE__*/_react["default"].createElement("button", {
    onClick: setCurrentImageAsBackground
  }, "Tag As Feature Image")) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImageListContainer)
  }, imageThumbnailFeed && imageThumbnailFeed.map && props.cdn && props.cdn["static"] ? imageThumbnailFeed.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_ProductImageManagerModule["default"].productImageListThumbnailContainer),
      style: {
        backgroundImage: "url(".concat(props.cdn["static"], "/").concat(m.name, ")")
      },
      onClick: setUseImageThumbnail,
      selector: m.name
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    }));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ProductImageManagerModule["default"].productImageContainer),
    ref: productImageRef,
    style: {
      backgroundImage: useImage ? "url(".concat(useImage, ")") : ''
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
    style: {
      opacity: useImage ? 0 : 1
    },
    className: "Product_img"
  })));
};
var _default = Module;
exports["default"] = _default;