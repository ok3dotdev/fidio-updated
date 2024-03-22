"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _index = require("../../payment/index.js");
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _index2 = require("/layout/index.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _uuid = require("uuid");
var Module = function Module(props) {
  var _props$_openMenu4, _useCartOfCurrency$cu3, _cart$items;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    fetchBusy = _React$useState4[0],
    setFetchBusy = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(true),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    validCc = _React$useState8[0],
    setValidCc = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    cartMessages = _React$useState10[0],
    setCartMessages = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    tempOveride = _React$useState12[0],
    setTempOveride = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(true),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    showContent = _React$useState14[0],
    setShowContent = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    solution = _React$useState16[0],
    setSolution = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(false),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    menuOpen = _React$useState18[0],
    setMenuOpen = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    closing = _React$useState20[0],
    setClosing = _React$useState20[1];
  var container = _react["default"].useRef();
  var closeTimeoutRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var mouseOverContainer = function mouseOverContainer() {
    props._LocalEventEmitter.dispatch('cart_update', {
      dispatch: 'mouseOver'
    });
  };
  var handleToggleSettings = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'main_settings');
    }
  }, [props._openMenu]);
  props._LocalEventEmitter.unsubscribe('cart_update');
  props._LocalEventEmitter.subscribe('cart_update', function (e) {
    var temp = (0, _toConsumableArray2["default"])(cartMessages);
    if (e) {
      console.log('Cart Update', e);
      if (e.dispatch === 'purchase') {
        temp = temp.filter(function (m) {
          return m && m.type !== 'purchase';
        });
        var domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
        temp.push({
          message: 'Purchase success',
          href: "".concat(domain, "/r?o=").concat(e.id),
          hrefCta: 'View your Receipt Here',
          type: 'purchase'
        });
        setCartMessages(temp);
      } else if (e.dispatch === 'flashCart') {
        // Attempts to flash cart showing cart based on recent interaction
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride('cart');
        }
        setTimeout(function () {
          // Only keep override open for very short period of time. Sub 2 seconds
          setTempOveride(false);
        }, 1500);
      } else if (e.dispatch === 'purchaseComplete') {
        if (e.type === 'paystack') {
          console.log('paystack purchase', e);
          var r = setTimeout(function () {
            setFetchBusy(false);
          }, 20000);
          completePurchase(e.data.snapshot, e.data.cart, r, e.data);
        }
      } else if (e.dispatch === 'mouseOver') {
        var _props$_openMenu;
        console.log('Did mouse over', props, closing);
        if ((props === null || props === void 0 || (_props$_openMenu = props._openMenu) === null || _props$_openMenu === void 0 ? void 0 : _props$_openMenu.currentMenu) === 'cart') {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, 'cart', true);
          }
        }
      }
    }
  });
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var handleUpdateQuantity = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var style, option, quantity, productId, options, product, _cart, res, returnProduct;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(e.currentTarget.getAttribute, fetchBusy);
            if (!(!fetchBusy && e && e.currentTarget && e.currentTarget.getAttribute)) {
              _context.next = 18;
              break;
            }
            setFetchBusy(true);
            style = e.currentTarget.getAttribute('styleId');
            option = e.currentTarget.getAttribute('optionId');
            quantity = e.currentTarget.getAttribute('quantity');
            productId = e.currentTarget.getAttribute('productId');
            options = {};
            if (Number(e.currentTarget.value) < Number(quantity)) {
              options.decrement = true;
            }
            _cart = JSON.parse(localStorage.getItem('cart'));
            if (productId && _cart && _cart.items) {
              product = _cart.items.find(function (item) {
                return item.product.id === productId;
              });
            }
            if (!product) {
              _context.next = 17;
              break;
            }
            _context.next = 15;
            return (0, _ecommerce.addToCart)(props.apiUrl, props.domainKey, props._loggedIn, _cart, product.product, {
              style: style,
              option: option
            }, setFetchBusy, options);
          case 15:
            res = _context.sent;
            if (res) {
              if (res.status === 'success') {
                (0, _ecommerce.updateCart)(_cart, res.cart);
                if (res.cart && res.cart.items) {
                  returnProduct = res.cart.items.find(function (item) {
                    return item.product.id === productId;
                  });
                  if (returnProduct) {
                    e.target.value = returnProduct.quantity;
                  }
                }
              }
            }
          case 17:
            setFetchBusy(false);
          case 18:
            _context.next = 24;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            setFetchBusy(false);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) : null;
  var completePurchase = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(snapshot, cart, r) {
      var extra,
        res,
        temp,
        domain,
        _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            extra = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            _context2.next = 3;
            return (0, _ecommerce.performPurchase)(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot,
              extra: extra
            });
          case 3:
            res = _context2.sent;
            console.log(res);
            if (res) {
              if (r) {
                clearTimeout(r);
              }
              setFetchBusy(false);
              console.log(res);
              if (res.status === 'success') {
                if (res.data && res.data.cart) {
                  (0, _ecommerce.updateCart)(props._cart, res.data.cart);
                }
                temp = (0, _toConsumableArray2["default"])(cartMessages);
                temp = temp.filter(function (m) {
                  return m && m.type !== 'purchase';
                });
                domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
                temp.push({
                  message: 'Purchase success',
                  href: "".concat(domain, "/r?o=").concat(res.data.order.id),
                  hrefCta: 'View your Receipt Here',
                  type: 'purchase'
                });
                setCartMessages(temp);
                console.log('Purchase Success', res);
              } else {
                setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            } else {
              if (r) {
                clearTimeout(r);
              }
              setFetchBusy(false);
              setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function completePurchase(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var useCartOfCurrency = _react["default"].useMemo(function () {
    var _useFirstItem$product;
    var useFirstItem = (cart === null || cart === void 0 ? void 0 : cart.items) && cart.items[0];
    if (useFirstItem !== null && useFirstItem !== void 0 && (_useFirstItem$product = useFirstItem.product) !== null && _useFirstItem$product !== void 0 && _useFirstItem$product.styles) {
      var resolveStyleObject = useFirstItem.product.styles.find(function (m) {
        return m.sid === useFirstItem.style;
      });
      if (resolveStyleObject) {
        var regionBasedPrice = (0, _ecommerce.resolveRegionBasedPrice)(props, resolveStyleObject);
        if (regionBasedPrice) {
          var remaining = [];
          var o = {
            items: cart.items.filter(function (m) {
              var useItemStyleObject = m.product.styles.find(function (n) {
                return n.sid === m.style;
              });
              if (useItemStyleObject) {
                var data = (0, _ecommerce.resolveRegionBasedPrice)(props, useItemStyleObject);
                if (data && data.currency === regionBasedPrice.currency) {
                  return true;
                }
              }
              remaining.push(m);
              return false;
            }),
            currency: regionBasedPrice,
            user: cart.user
          };
          o.remaining = remaining;
          return o;
        }
      }
    }
  }, [props, cart]);
  var handlePerformPurchase = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(e) {
      var _useCartOfCurrency$cu, r, snapshot, _props$paymentConfig, _props$_loggedIn, _useCartOfCurrency$cu2, transactionRef, handler;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (fetchBusy) {
              _context3.next = 25;
              break;
            }
            setFetchBusy(true);
            r = setTimeout(function () {
              setFetchBusy(false);
            }, 20000);
            setPageError(null);
            console.log(useCartOfCurrency);
            snapshot = (0, _ecommerce.calculateTotal)(useCartOfCurrency, null, {
              region: (_useCartOfCurrency$cu = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu !== void 0 ? _useCartOfCurrency$cu : null,
              object: true
            }, props);
            console.log('snapshot', snapshot, solution);
            if (!solution) {
              _context3.next = 23;
              break;
            }
            if (!(solution.payment === 'stripe')) {
              _context3.next = 13;
              break;
            }
            completePurchase(snapshot, useCartOfCurrency, r, {
              type: 'stripe'
            });
            _context3.next = 21;
            break;
          case 13:
            if (!(solution.payment === 'paystack' && PaystackPop && props !== null && props !== void 0 && (_props$paymentConfig = props.paymentConfig) !== null && _props$paymentConfig !== void 0 && (_props$paymentConfig = _props$paymentConfig.keys) !== null && _props$paymentConfig !== void 0 && _props$paymentConfig.paystack && props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.email)) {
              _context3.next = 21;
              break;
            }
            transactionRef = (0, _uuid.v4)();
            clearTimeout(r);
            if (!(useCartOfCurrency !== null && useCartOfCurrency !== void 0 && (_useCartOfCurrency$cu2 = useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu2 !== void 0 && _useCartOfCurrency$cu2.currency)) {
              _context3.next = 21;
              break;
            }
            _context3.next = 19;
            return PaystackPop.setup({
              key: props.paymentConfig.keys.paystack,
              // Replace with your public key
              email: props._loggedIn.email,
              amount: snapshot.total * 100,
              // the amount value is multiplied by 100 to convert to the lowest currency unit
              currency: useCartOfCurrency.currency.currency,
              // Use GHS for Ghana Cedis or USD for US Dollars
              ref: transactionRef,
              // Replace with a reference you generated
              callback: function callback(response) {
                // Success payment
                props._LocalEventEmitter.dispatch('cart_update', {
                  // Update Server with Purchase transaction. Assume payment received by Paystack approval
                  dispatch: 'purchaseComplete',
                  type: 'paystack',
                  data: {
                    cart: useCartOfCurrency,
                    paystackResponse: response,
                    snapshot: snapshot,
                    status: 'payment_complete',
                    transactionRef: transactionRef,
                    type: 'paystack'
                  }
                });
              },
              onClose: function onClose() {
                // Failed payment
                setFetchBusy(false);
                setPageError({
                  message: 'Purchase failed',
                  placement: 'purchase'
                });
              }
            });
          case 19:
            handler = _context3.sent;
            handler.openIframe();
          case 21:
            _context3.next = 25;
            break;
          case 23:
            setFetchBusy(false);
            setPageError({
              message: 'Purchase currently not supported in your Country',
              placement: 'purchase'
            });
          case 25:
            _context3.next = 30;
            break;
          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](0);
            setFetchBusy(false);
          case 30:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 27]]);
    }));
    return function (_x5) {
      return _ref3.apply(this, arguments);
    };
  }());
  _react["default"].useEffect(function () {
    var _props$_openMenu2, _props$_openMenu3;
    if (((props === null || props === void 0 || (_props$_openMenu2 = props._openMenu) === null || _props$_openMenu2 === void 0 ? void 0 : _props$_openMenu2.currentMenu) === 'cart' || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef !== null && closeTimeoutRef !== void 0 && closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if ((props === null || props === void 0 || (_props$_openMenu3 = props._openMenu) === null || _props$_openMenu3 === void 0 ? void 0 : _props$_openMenu3.currentMenu) !== 'cart' && !tempOveride && menuOpen) {
      // We track open state internally because we want to animate the cart closing as opposed to destroying it immediately
      setClosing(true);
      var r = setTimeout(function () {
        setClosing(false);
        setMenuOpen(false);
        closeTimeoutRef.current = null;
      }, 500);
      closeTimeoutRef.current = r;
    }
  }, [props === null || props === void 0 || (_props$_openMenu4 = props._openMenu) === null || _props$_openMenu4 === void 0 ? void 0 : _props$_openMenu4.currentMenu, closing, menuOpen, closeTimeoutRef === null || closeTimeoutRef === void 0 ? void 0 : closeTimeoutRef.current]);
  var total = (0, _ecommerce.calculateTotal)(useCartOfCurrency, null, {
    region: (_useCartOfCurrency$cu3 = useCartOfCurrency === null || useCartOfCurrency === void 0 ? void 0 : useCartOfCurrency.currency) !== null && _useCartOfCurrency$cu3 !== void 0 ? _useCartOfCurrency$cu3 : null,
    object: true
  }, props);
  var free = total && Object.prototype.hasOwnProperty.call(total, 'total') && total.total === 0 && (cart === null || cart === void 0 || (_cart$items = cart.items) === null || _cart$items === void 0 ? void 0 : _cart$items.length) > 0;

  // console.log('Cart', cart, total, validCc, useCartOfCurrency)

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index2.Cart, (0, _extends2["default"])({}, props, {
    fetchBusy: fetchBusy,
    menuOpen: menuOpen,
    closing: closing,
    cart: cart,
    useCartOfCurrency: useCartOfCurrency,
    handleUpdateQuantity: handleUpdateQuantity,
    handlePerformPurchase: handlePerformPurchase,
    handleClearError: handleClearError,
    pageError: pageError,
    free: free,
    validCc: validCc,
    setValidCc: setValidCc,
    cartMessages: cartMessages,
    handleToggleSettings: handleToggleSettings,
    showContent: showContent,
    setShowContent: setShowContent,
    setSolution: setSolution,
    ccChildren: props === null || props === void 0 ? void 0 : props.ccChildren,
    container: container
  })));
};
var _default = exports["default"] = Module;