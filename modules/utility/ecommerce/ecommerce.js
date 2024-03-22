"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.westernMoneyFormat = exports.updateCart = exports.resolveStyles = exports.resolveRegionBasedPrice = exports.resolveOption = exports.resolveMoneyFormat = exports.resolveImg = exports.resolveDefaultStyle = exports.resolveCurrentStyle = exports.resolveCurrentPrice = exports.resolveCurrentOption = exports.performPurchase = exports.doUploadImageForProduct = exports.doUploadImageForLineupParticipant = exports.doPublishProduct = exports.createShop = exports.calculateTotal = exports.addToCartGlobal = exports.addToCart = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("../fetch/fetch");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _util = require("../../util");
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _LocalEventEmitter2 = require("/modules/events/LocalEventEmitter");
var _app = require("../../../app.config");
var cookies = new _universalCookie["default"]();
var createShop = exports.createShop = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uri, domainKey, user, shopData) {
    var fetchBody, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(user.identifier && user.hash && shopData && shopData.shopName)) {
            _context.next = 24;
            break;
          }
          fetchBody = {
            domainKey: domainKey,
            shopData: shopData,
            hash: user.hash,
            identifier: user.identifier
          };
          _context.next = 4;
          return (0, _fetch.fetchPost)(uri + '/m/createshop', null, null, fetchBody);
        case 4:
          res = _context.sent;
          if (res) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", false);
        case 9:
          if (!res.hasOwnProperty('status')) {
            _context.next = 21;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context.next = 15;
            break;
          }
          (0, _SignIn.logout)();
          return _context.abrupt("return", "disauthenticated");
        case 15:
          if (!(res.status == "failed")) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("return", false);
        case 19:
          if (!(res.status == "success")) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", res);
        case 21:
          return _context.abrupt("return", false);
        case 24:
          return _context.abrupt("return", false);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createShop(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var doPublishProduct = exports.doPublishProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(uri, domainKey, shop, user, product, body) {
    var res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(user.identifier && user.hash && product && domainKey)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 3;
          return (0, _fetch.fetchPost)(uri + '/m/publishproduct', null, null, body, {
            formData: true
          });
        case 3:
          res = _context2.sent;
          if (res) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", false);
        case 8:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 20;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 14;
            break;
          }
          (0, _SignIn.logout)();
          return _context2.abrupt("return", "disauthenticated");
        case 14:
          if (!(res.status == "failed")) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", false);
        case 18:
          if (!(res.status == "success")) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", res);
        case 20:
          return _context2.abrupt("return", false);
        case 23:
          return _context2.abrupt("return", false);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function doPublishProduct(_x5, _x6, _x7, _x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();
var resolveImg = exports.resolveImg = function resolveImg(product, cdn, override) {
  if (override) {
    return override;
  }
  return 'img/default/greythumb_product.jpg';
};
var resolveStyles = exports.resolveStyles = function resolveStyles(product) {
  if (product && product.styles) {
    return product.styles;
  }
  return [];
};
var resolveCurrentPrice = exports.resolveCurrentPrice = function resolveCurrentPrice(product, selectedStyle, currency) {
  console.log(product, selectedStyle, currency);
  if (product && product.styles) {
    var p = product.styles.find(function (m) {
      return m.sid === selectedStyle;
    });
    if (p && Object.prototype.hasOwnProperty.call(p, 'price')) {
      return "".concat(currency).concat(p.price);
    }
    if (product.styles[0] && Object.prototype.hasOwnProperty.call(product.styles[0], 'price')) {
      return "".concat(currency).concat(product.styles[0].price);
    }
  }
  return '';
};
var resolveCurrentStyle = exports.resolveCurrentStyle = function resolveCurrentStyle(product, selectedStyle) {
  if (product && product.styles) {
    var p = product.styles.find(function (m) {
      return m.sid === selectedStyle;
    });
    return p;
  }
  return '';
};
var resolveCurrentOption = exports.resolveCurrentOption = function resolveCurrentOption(style, selectedOption) {
  if (style && style.option) {
    var o = style.option.find(function (m) {
      return m.sid === selectedOption;
    });
    return o;
  }
  return '';
};
var resolveDefaultStyle = exports.resolveDefaultStyle = function resolveDefaultStyle(product, selectedStyle, f, currentOption, f2) {
  if ((0, _util.isObjectEmpty)(selectedStyle)) {
    if (product && product.styles && product.styles[0] && product.styles[0].sid) {
      f(product.styles[0].sid);
      if (!currentOption && product.styles[0].option && product.styles[0].option[0] && product.styles[0].option[0].sid) {
        f2(product.styles[0].option[0].sid);
      }
    }
  }
};
var updateCart = exports.updateCart = function updateCart(user, cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  _LocalEventEmitter2._LocalEventEmitter.dispatch('forceUpdateProps', {
    dispatch: '_cart'
  });
  return cart;
};
var calculateTotal = exports.calculateTotal = function calculateTotal(cart, prefix, options, props) {
  var prices = [];
  var total = 0;
  if (cart && cart.items) {
    cart.items.map(function (item) {
      var style = resolveCurrentStyle(item.product, item.style);
      if (style && Object.prototype.hasOwnProperty.call(style, 'price')) {
        var _options$region, _options$region2, _resolveRegionBasedPr;
        var usePrice = (options === null || options === void 0 || (_options$region = options.region) === null || _options$region === void 0 ? void 0 : _options$region.currency) === 'USD' ? style.price : options !== null && options !== void 0 && (_options$region2 = options.region) !== null && _options$region2 !== void 0 && _options$region2.currency && style !== null && style !== void 0 && style.priceTable && Object.prototype.hasOwnProperty.call(style.priceTable, options.region.currency) ? style.priceTable[options.region.currency] : props ? (_resolveRegionBasedPr = resolveRegionBasedPrice(props, style)) === null || _resolveRegionBasedPr === void 0 ? void 0 : _resolveRegionBasedPr.price : style.price;
        prices.push(Object.assign(item, {
          price: usePrice
        }));
        total += usePrice * item.quantity;
      }
    });
  }
  if (options) {
    if (options.object) {
      return {
        prices: prices,
        total: total
      };
    }
  }
  if (prefix) {
    return prefix + total;
  }
  return total;
};
var doUploadImageForProduct = exports.doUploadImageForProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(uri, domainKey, product, user, body) {
    var res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(user.identifier && user.hash && product && domainKey)) {
            _context3.next = 23;
            break;
          }
          _context3.next = 3;
          return (0, _fetch.fetchPost)(uri + '/m/uploadimageforproduct', null, null, body, {
            formData: true
          });
        case 3:
          res = _context3.sent;
          if (res) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", false);
        case 8:
          if (!res.hasOwnProperty('status')) {
            _context3.next = 20;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context3.next = 14;
            break;
          }
          (0, _SignIn.logout)();
          return _context3.abrupt("return", "disauthenticated");
        case 14:
          if (!(res.status == "failed")) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", false);
        case 18:
          if (!(res.status == "success")) {
            _context3.next = 20;
            break;
          }
          return _context3.abrupt("return", res);
        case 20:
          return _context3.abrupt("return", false);
        case 23:
          return _context3.abrupt("return", false);
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function doUploadImageForProduct(_x11, _x12, _x13, _x14, _x15) {
    return _ref3.apply(this, arguments);
  };
}();
var doUploadImageForLineupParticipant = exports.doUploadImageForLineupParticipant = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(uri, domainKey, product, user, body) {
    var res;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(user.identifier && user.hash && product && domainKey)) {
            _context4.next = 23;
            break;
          }
          _context4.next = 3;
          return (0, _fetch.fetchPost)(uri + '/m/uploadimageforlineupparticipant', null, null, body, {
            formData: true
          });
        case 3:
          res = _context4.sent;
          if (res) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", false);
        case 8:
          if (!res.hasOwnProperty('status')) {
            _context4.next = 20;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context4.next = 14;
            break;
          }
          (0, _SignIn.logout)();
          return _context4.abrupt("return", "disauthenticated");
        case 14:
          if (!(res.status == "failed")) {
            _context4.next = 18;
            break;
          }
          return _context4.abrupt("return", false);
        case 18:
          if (!(res.status == "success")) {
            _context4.next = 20;
            break;
          }
          return _context4.abrupt("return", res);
        case 20:
          return _context4.abrupt("return", false);
        case 23:
          return _context4.abrupt("return", false);
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function doUploadImageForLineupParticipant(_x16, _x17, _x18, _x19, _x20) {
    return _ref4.apply(this, arguments);
  };
}();
var addToCartGlobal = exports.addToCartGlobal = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(uri, domainKey, user, cart, product, spec, setFetchBusy, options) {
    var fetchBody, res;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log(uri, domainKey, user, cart, product, spec, setFetchBusy, options);
          if (!(user && user.identifier && user.hash && product && domainKey && uri)) {
            _context5.next = 25;
            break;
          }
          setFetchBusy(true);
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            cart: cart,
            product: product,
            spec: spec,
            options: options
          };
          _context5.next = 7;
          return (0, _fetch.fetchPost)(uri + '/m/addtocart', null, null, fetchBody);
        case 7:
          res = _context5.sent;
          setFetchBusy(false);
          if (res) {
            _context5.next = 13;
            break;
          }
          return _context5.abrupt("return", false);
        case 13:
          if (!res.hasOwnProperty('status')) {
            _context5.next = 25;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context5.next = 19;
            break;
          }
          (0, _SignIn.logout)();
          return _context5.abrupt("return", "disauthenticated");
        case 19:
          if (!(res.status == "failed")) {
            _context5.next = 23;
            break;
          }
          return _context5.abrupt("return", false);
        case 23:
          if (!(res.status == "success")) {
            _context5.next = 25;
            break;
          }
          return _context5.abrupt("return", res);
        case 25:
          _context5.next = 32;
          break;
        case 27:
          _context5.prev = 27;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          if (setFetchBusy) {
            setFetchBusy(false);
          }
          return _context5.abrupt("return", {
            // fail silently
            status: 'failed',
            message: 'Could not add Product to cart'
          });
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 27]]);
  }));
  return function addToCartGlobal(_x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28) {
    return _ref5.apply(this, arguments);
  };
}();
var addToCart = exports.addToCart = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(uri, domainKey, user, cart, product, spec, setFetchBusy, options) {
    var style, option, fetchBody, res;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          console.log(uri, domainKey, user, product, spec, cart);
          if (!(user && user.identifier && user.hash && product && domainKey && uri)) {
            _context6.next = 34;
            break;
          }
          if (!(product && product.styles)) {
            _context6.next = 34;
            break;
          }
          if (!(spec.style && spec.option)) {
            _context6.next = 34;
            break;
          }
          style = product.styles.find(function (p) {
            return p.sid === spec.style;
          });
          if (!(style && style.option)) {
            _context6.next = 34;
            break;
          }
          option = style.option.find(function (o) {
            return o.sid === spec.option;
          });
          if (!option) {
            _context6.next = 34;
            break;
          }
          if (!(option.quantity && (option.quantity > 0 || option.quantity === -100))) {
            _context6.next = 34;
            break;
          }
          // Valid quantity = > 0 or -100 (infinite)
          console.log(cart, product, spec, options);
          if (!setFetchBusy) {
            _context6.next = 34;
            break;
          }
          setFetchBusy(true);
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            cart: cart,
            product: product,
            spec: spec,
            options: options
          };
          _context6.next = 16;
          return (0, _fetch.fetchPost)(uri + '/m/addtocart', null, null, fetchBody);
        case 16:
          res = _context6.sent;
          setFetchBusy(false);
          if (res) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", false);
        case 22:
          if (!res.hasOwnProperty('status')) {
            _context6.next = 34;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context6.next = 28;
            break;
          }
          (0, _SignIn.logout)();
          return _context6.abrupt("return", "disauthenticated");
        case 28:
          if (!(res.status == "failed")) {
            _context6.next = 32;
            break;
          }
          return _context6.abrupt("return", false);
        case 32:
          if (!(res.status == "success")) {
            _context6.next = 34;
            break;
          }
          return _context6.abrupt("return", res);
        case 34:
          throw new Error();
        case 37:
          _context6.prev = 37;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          if (setFetchBusy) {
            setFetchBusy(false);
          }
          return _context6.abrupt("return", {
            // fail silently
            status: 'failed',
            message: 'Could not add Product to cart'
          });
        case 42:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 37]]);
  }));
  return function addToCart(_x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36) {
    return _ref6.apply(this, arguments);
  };
}();
var performPurchase = exports.performPurchase = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(uri, domainKey, user, cart, setFetchBusy, options) {
    var variables, _variables$paymentCon, _variables$paymentCon2, stripeIsLive, paystackisLive, fetchBody, res;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          variables = (0, _app.resolveVariables)();
          if (!(variables.paymentConfig && variables.dev)) {
            _context7.next = 8;
            break;
          }
          stripeIsLive = (_variables$paymentCon = variables.paymentConfig) === null || _variables$paymentCon === void 0 || (_variables$paymentCon = _variables$paymentCon.keys) === null || _variables$paymentCon === void 0 ? void 0 : _variables$paymentCon.stripe.match('live');
          paystackisLive = (_variables$paymentCon2 = variables.paymentConfig) === null || _variables$paymentCon2 === void 0 || (_variables$paymentCon2 = _variables$paymentCon2.keys) === null || _variables$paymentCon2 === void 0 ? void 0 : _variables$paymentCon2.paystack.match('live');
          if (!(stripeIsLive || paystackisLive)) {
            _context7.next = 8;
            break;
          }
          // We dont want to allow purchases when in development mode and any keys are live
          console.log('Payment Cancelled: Some Payment Processing Keys are live but you are in development mode.');
          return _context7.abrupt("return", false);
        case 8:
          if (!(user && user.identifier && user.hash && cart && domainKey && uri)) {
            _context7.next = 34;
            break;
          }
          if (!setFetchBusy) {
            _context7.next = 34;
            break;
          }
          setFetchBusy(true);
          fetchBody = {
            domainKey: domainKey,
            hash: user.hash,
            identifier: user.identifier,
            cart: cart,
            options: options
          };
          _context7.next = 14;
          return (0, _fetch.fetchPost)(uri + '/m/performpurchase', null, null, fetchBody);
        case 14:
          res = _context7.sent;
          setFetchBusy(false);
          if (res) {
            _context7.next = 20;
            break;
          }
          return _context7.abrupt("return", false);
        case 20:
          if (!res.hasOwnProperty('status')) {
            _context7.next = 34;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context7.next = 26;
            break;
          }
          (0, _SignIn.logout)();
          return _context7.abrupt("return", "disauthenticated");
        case 26:
          if (!(res.status == "failed")) {
            _context7.next = 32;
            break;
          }
          if (!res.message) {
            _context7.next = 29;
            break;
          }
          return _context7.abrupt("return", res);
        case 29:
          return _context7.abrupt("return", false);
        case 32:
          if (!(res.status == "success")) {
            _context7.next = 34;
            break;
          }
          return _context7.abrupt("return", res);
        case 34:
          throw new Error();
        case 37:
          _context7.prev = 37;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          if (setFetchBusy) {
            setFetchBusy(false);
          }
          return _context7.abrupt("return", {
            // fail silently
            status: 'failed',
            message: 'Could not perform purchase'
          });
        case 42:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 37]]);
  }));
  return function performPurchase(_x37, _x38, _x39, _x40, _x41, _x42) {
    return _ref7.apply(this, arguments);
  };
}();
var westernMoneyFormat = exports.westernMoneyFormat = new Intl.NumberFormat('en-US', {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
var resolveMoneyFormat = exports.resolveMoneyFormat = function resolveMoneyFormat(v) {
  try {
    if (!isNaN(Number(v)) && v !== null) {
      return westernMoneyFormat.format(v);
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
var resolveRegionBasedPrice = exports.resolveRegionBasedPrice = function resolveRegionBasedPrice(props, style, useCustom) {
  var _props$_loggedIn;
  if (useCustom) {
    var _useCustom$currency, _useCustom$symbol, _useCustom$price;
    return {
      currency: (_useCustom$currency = useCustom.currency) !== null && _useCustom$currency !== void 0 ? _useCustom$currency : null,
      symbol: (_useCustom$symbol = useCustom.symbol) !== null && _useCustom$symbol !== void 0 ? _useCustom$symbol : null,
      price: (_useCustom$price = useCustom.price) !== null && _useCustom$price !== void 0 ? _useCustom$price : null
    };
  }
  if (props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.locationMeta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.country && props !== null && props !== void 0 && props.regionsData) {
    var location = props._loggedIn.meta.locationMeta.country;
    if (props.regionsData[location] && style !== null && style !== void 0 && style.priceTable) {
      if (Object.prototype.hasOwnProperty.call(style.priceTable, props.regionsData[location].currency)) {
        // Has currency of type defined on product
        return {
          currency: props.regionsData[location].currency,
          symbol: props.regionsData[location].symbol,
          price: style.priceTable[props.regionsData[location].currency]
        };
      } else {
        var useRegion = props.regionsData[location].region;
        var firstMatchingRegionValidCurrency = Object.entries(props.regionsData).find(function (m) {
          if (m[1].region === useRegion && Object.prototype.hasOwnProperty.call(style.priceTable, m[1].currency)) {
            return true;
          }
          return false;
        });
        if (firstMatchingRegionValidCurrency && firstMatchingRegionValidCurrency[1]) {
          return {
            currency: firstMatchingRegionValidCurrency[1].currency,
            symbol: firstMatchingRegionValidCurrency[1].symbol,
            price: style.priceTable[firstMatchingRegionValidCurrency[1].currency]
          };
        }
      }
    }
  }
  return {
    currency: 'USD',
    symbol: '$',
    price: style && Object.prototype.hasOwnProperty.call(style, 'price') ? style.price : null
  };
};
var resolveOption = exports.resolveOption = function resolveOption(p, s, o) {
  var returnObject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (p && p.styles && s) {
    var f = p.styles.find(function (m) {
      return m.sid === s;
    });
    if (f.option) {
      var f2 = f.option.find(function (m) {
        return m.sid === o;
      });
      if (returnObject && f2) {
        return f2;
      }
      if (f2 && f2.option) {
        return f2.option;
      }
    }
  }
  return '';
};