"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _SubMenu = _interopRequireDefault(require("./SubMenu.js"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var _link = _interopRequireDefault(require("next/link"));
var _SignIn = require("/modules/utility/onboarding/SignIn.js");
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _cart2 = require("../ecommerce/cart/");
var _notifications = require("../notifications");
var _index = require("../help/index.js");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _index2 = require("../survey/index.js");
var _index3 = require("/layout/index.js");
// import brand from '../../styles/Brand.module.scss';

var Module = function Module(props) {
  var _props$_loggedIn, _props$_loggedIn$meta, _props$_loggedIn2, _props$menuConfig, _props$menuConfig2, _props$menuConfig3, _props$paymentConfig, _props$paymentConfig2, _props$feedbackConfig, _props$feedbackConfig2;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    pageError = _React$useState4[0],
    setPageError = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(true),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    validCc = _React$useState6[0],
    setValidCc = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    helpOpen = _React$useState8[0],
    setHelpOpen = _React$useState8[1];
  var handleClearError = _react["default"].useCallback(function (e) {
    setPageError(null);
  });
  var handleToggleSettings = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'main_settings');
    }
  }, [props._openMenu]);
  var handleLogout = _react["default"].useCallback(function (e) {
    (0, _SignIn.logout)();
    props._toggleSingleOpenMenu(e, 'main_settings');
    setTimeout(function () {
      props._LocalEventEmitter.dispatch('showSignIn', {});
    }, 4000); // Give time to logout before firing event
  });
  var fireShowSignIn = _react["default"].useCallback(function (e) {
    props._toggleSingleOpenMenu(e, 'main_settings');
    (0, _SignIn.checkSignedInAndPrompt)();
  });
  var handleToggleCart = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'cart');
    }
  });
  var handleToggleNotifications = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'notifications');
    }
  });

  /**
   * Ensures cart is open after interaction if menuConfig.menuOpenAfterCartInteraction is set to true
   */
  var passOveride = function passOveride(item) {
    if (props.menuConfig.menuOpenAfterCartInteraction) {
      props._toggleSingleOpenMenu(null, item !== null && item !== void 0 ? item : 'cart', true);
    }
  };
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
  var handlePerformPurchase = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      var snapshot, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (fetchBusy) {
              _context2.next = 12;
              break;
            }
            setFetchBusy(true);
            setPageError(null);
            console.log(cart);
            snapshot = (0, _ecommerce.calculateTotal)(cart, null, {
              object: true
            });
            console.log('snapshot', snapshot);
            _context2.next = 9;
            return (0, _ecommerce.performPurchase)(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
              snapshot: snapshot
            });
          case 9:
            res = _context2.sent;
            if (res) {
              console.log(res);
              if (res.status === 'success') {
                // if (res.data && res.data.cart) {
                //     updateCart(props._cart, res.data.cart)
                // }
                console.log('Purchase Success', res);
              }
            } else {
              setPageError({
                message: 'Purchase failed',
                placement: 'purchase'
              });
            }
            setFetchBusy(false);
          case 12:
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setFetchBusy(false);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  var fireShareFeedback = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'feedback');
    }
  });
  var fireShareBug = _react["default"].useCallback(function (e) {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'bugReport');
    }
  });
  var fireHelp = _react["default"].useCallback(function (e) {
    if (helpOpen) {
      setHelpOpen(false);
      return;
    }
    setHelpOpen(true);
    return;
  });
  var handleToggleMenuOff = _react["default"].useCallback(function (e) {
    props._toggleSingleOpenMenu(null, {}, true);
    setHelpOpen(false);
  });
  var resolvedCountry = props !== null && props !== void 0 && props.regionsData && props !== null && props !== void 0 && (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.meta) !== null && _props$_loggedIn !== void 0 && (_props$_loggedIn = _props$_loggedIn.locationMeta) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.country && props.regionsData[props._loggedIn.meta.locationMeta.country] && props.regionsData[props._loggedIn.meta.locationMeta.country].name ? props.regionsData[props._loggedIn.meta.locationMeta.country].name : (_props$_loggedIn$meta = props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 || (_props$_loggedIn2 = _props$_loggedIn2.meta) === null || _props$_loggedIn2 === void 0 || (_props$_loggedIn2 = _props$_loggedIn2.locationMeta) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.country) !== null && _props$_loggedIn$meta !== void 0 ? _props$_loggedIn$meta : null;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props !== null && props !== void 0 && props.useMenu ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 100 + "%",
      height: props !== null && props !== void 0 && (_props$menuConfig = props.menuConfig) !== null && _props$menuConfig !== void 0 && _props$menuConfig.height ? props.menuConfig.height + 'px' : '',
      padding: props !== null && props !== void 0 && (_props$menuConfig2 = props.menuConfig) !== null && _props$menuConfig2 !== void 0 && _props$menuConfig2.padding ? props.menuConfig.padding : ''
    },
    className: "leadMenuContainer ".concat(_MenuModule["default"].container, " darkModeEnforce Menu_LeadContainer ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: 0,
      paddingTop: 0,
      maxHeight: '100%'
    },
    className: "margin1600 menuContainer"
  }, /*#__PURE__*/_react["default"].createElement(_SubMenu["default"], (0, _extends2["default"])({}, props, {
    handleToggleMenuOff: handleToggleMenuOff
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: !props._loggedIn ? "".concat(_MenuModule["default"].menu, " ").concat(_MenuModule["default"].menuClosed) : _MenuModule["default"].menu
  }, props !== null && props !== void 0 && (_props$menuConfig3 = props.menuConfig) !== null && _props$menuConfig3 !== void 0 && _props$menuConfig3.right ? props.menuConfig.right.map(function (c, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, c.type ? c.type === 'user' ? /*#__PURE__*/_react["default"].createElement(_index3.DropMenu, (0, _extends2["default"])({}, props, {
      resolvedCountry: resolvedCountry,
      handleToggleSettings: handleToggleSettings,
      handleLogout: handleLogout,
      fireHelp: fireHelp,
      fireShareFeedback: fireShareFeedback,
      fireShareBug: fireShareBug,
      fireShowSignIn: fireShowSignIn
    })) : c.type === 'cart' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(c.className, " ").concat(c.smallUntilHover ? "".concat(_MenuModule["default"].smallUntilHover) : null)
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Cart",
      placement: "bottom"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector"),
      onClick: handleToggleCart,
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuText)
    }, "Cart"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " cart material-icons")
    }, "shopping_cart")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " cart material-icons")
    }, "shopping_cart")))) : c.type === 'stream' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: c.href,
      className: "menuLinkSelector ".concat(c.className, " ").concat(c.smallUntilHover ? "".concat(_MenuModule["default"].smallUntilHover) : null),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Livestream Now",
      placement: "bottom"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      },
      onClick: handleToggleMenuOff
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuText)
    }, "Stream"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " live_tv material-icons")
    }, "live_tv")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " live_tv material-icons")
    }, "live_tv")))) : c.type === 'notifications' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "menuLinkSelector ".concat(c.className, " ").concat(c.smallUntilHover ? "".concat(_MenuModule["default"].smallUntilHover) : null),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Notifications",
      placement: "bottom"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      },
      onClick: handleToggleNotifications
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuText)
    }, "Notifications"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIconPair, " ").concat(_MenuModule["default"].maxIconWidth, " live_tv material-icons")
    }, "notifications")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " live_tv material-icons")
    }, "notifications")))) : c.type === 'link' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: c.href,
      className: "menuLinkSelector ".concat(c.className),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(_MenuModule["default"].menuLink, " darkMenuLink menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(_MenuModule["default"].menuLinkText)
    }, /*#__PURE__*/_react["default"].createElement("div", null, c.name)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].menuLinkIcon, " ").concat(_MenuModule["default"].maxIconWidth, " material-icons")
    }, c.name))) : null : null);
  }) : null)), /*#__PURE__*/_react["default"].createElement(_index.Help, (0, _extends2["default"])({}, props, {
    open: helpOpen,
    setHelpOpen: setHelpOpen
  })), /*#__PURE__*/_react["default"].createElement(_cart2.Cart, (0, _extends2["default"])({}, props, {
    passOveride: passOveride,
    forceShowCc: props === null || props === void 0 || (_props$paymentConfig = props.paymentConfig) === null || _props$paymentConfig === void 0 ? void 0 : _props$paymentConfig.forceShowCc
  })), /*#__PURE__*/_react["default"].createElement(_notifications.Notifications, (0, _extends2["default"])({}, props, {
    passOveride: passOveride,
    forceShowCc: props === null || props === void 0 || (_props$paymentConfig2 = props.paymentConfig) === null || _props$paymentConfig2 === void 0 ? void 0 : _props$paymentConfig2.forceShowCc
  })), /*#__PURE__*/_react["default"].createElement(_index2.SurveyContainer, (0, _extends2["default"])({}, props, {
    handleName: "feedback",
    survey: props === null || props === void 0 || (_props$feedbackConfig = props.feedbackConfig) === null || _props$feedbackConfig === void 0 ? void 0 : _props$feedbackConfig.surveyData
  })), /*#__PURE__*/_react["default"].createElement(_index2.SurveyContainer, (0, _extends2["default"])({}, props, {
    handleName: "bugReport",
    survey: props === null || props === void 0 || (_props$feedbackConfig2 = props.feedbackConfig) === null || _props$feedbackConfig2 === void 0 ? void 0 : _props$feedbackConfig2.bugReportData
  }))) : null);
};
var _default = exports["default"] = Module;