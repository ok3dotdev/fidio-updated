"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _NotificationsModule = _interopRequireDefault(require("./Notifications.module.scss"));
var _PresentationModule = _interopRequireDefault(require("../presentation/Presentation.module.scss"));
var _utility = require("../utility/utility");
var _utility2 = require("../presentation/utility");
var Module = function Module(props) {
  var _props$_openMenu4, _props$menuConfig, _notificationsFeed$no;
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
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    notificationsFeed = _React$useState8[0],
    setNotificationsFeed = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    cartMessages = _React$useState10[0],
    setCartMessages = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    tempOveride = _React$useState12[0],
    setTempOveride = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    menuOpen = _React$useState14[0],
    setMenuOpen = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    closing = _React$useState16[0],
    setClosing = _React$useState16[1];
  var container = _react["default"].useRef();
  var closeTimeoutRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var mouseOverContainer = function mouseOverContainer() {
    props._LocalEventEmitter.dispatch('notification', {
      dispatch: 'mouseOver'
    });
  };
  props._LocalEventEmitter.unsubscribe('notification');
  props._LocalEventEmitter.subscribe('notification', function (e) {
    var temp = (0, _toConsumableArray2["default"])(cartMessages);
    if (e) {
      console.log('Notification Update', e);
      if (e.dispatch === 'notification') {
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride('notifications');
        }
        setTimeout(function () {
          // Only keep override open for very short period of time. Sub 2 seconds
          setTempOveride(false);
        }, 1500);
      } else if (e.dispatch === 'mouseOver') {
        var _props$_openMenu;
        console.log('Did mouse over', props, closing);
        if ((props === null || props === void 0 || (_props$_openMenu = props._openMenu) === null || _props$_openMenu === void 0 ? void 0 : _props$_openMenu.currentMenu) === 'notifications') {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, 'notifications', true);
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    var _props$_openMenu2, _props$_openMenu3;
    if (((props === null || props === void 0 || (_props$_openMenu2 = props._openMenu) === null || _props$_openMenu2 === void 0 ? void 0 : _props$_openMenu2.currentMenu) === 'notifications' || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef !== null && closeTimeoutRef !== void 0 && closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if ((props === null || props === void 0 || (_props$_openMenu3 = props._openMenu) === null || _props$_openMenu3 === void 0 ? void 0 : _props$_openMenu3.currentMenu) !== 'notifications' && !tempOveride && menuOpen) {
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
  _react["default"].useEffect(function () {
    if (props !== null && props !== void 0 && props.notificationsData) {
      setNotificationsFeed(props.notificationsData);
    }
  }, [props === null || props === void 0 ? void 0 : props.notificationsData]);
  var handleClose = _react["default"].useCallback(function (e) {
    setClosing(true);
    props._toggleSingleOpenMenu(null, 'notifications', false);
  });
  var handleFireGlobalEvent = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var _e$currentTarget;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute('ctaAfter')) {
              e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
            }
            (0, _utility.fireGlobalEvent)(e, props._LocalEventEmitter);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var resolveOrderImg = function resolveOrderImg(m) {
    var _props$cdn;
    if (m && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"]) {
      var _m$product;
      if ((m === null || m === void 0 || (_m$product = m.product) === null || _m$product === void 0 || (_m$product = _m$product.images) === null || _m$product === void 0 ? void 0 : _m$product.length) > 0) {
        var useImg = m.product.images.find(function (n) {
          var _n$leadImg;
          return (_n$leadImg = n.leadImg) !== null && _n$leadImg !== void 0 ? _n$leadImg : false;
        });
        if (useImg) {
          return "".concat(props.cdn["static"], "/").concat(useImg.name);
        }
        return "".concat(props.cdn["static"], "/").concat(m.product.images[0].name);
      }
    }
    return '';
  };

  // TODO, store locally all notifications user has viewed
  // Show Notifications that user has not viewed by default should be unviewed
  // Show red notif icon to show user has new notifications after having checked for all seen notifications
  // Chat in notifications
  // link in notifications

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Container Misc_Container_Bigger ".concat(props.className, " ").concat(props.open || menuOpen && !closing ? 'Misc_Container_Visible' : ''),
    ref: container,
    style: {
      top: props !== null && props !== void 0 && (_props$menuConfig = props.menuConfig) !== null && _props$menuConfig !== void 0 && _props$menuConfig.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }
  }, props.open || menuOpen ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Internal_Container",
    style: {
      paddingTop: '.5rem',
      paddingBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "Misc_Label",
    style: {
      marginTop: 0
    }
  }, "Notifications"), /*#__PURE__*/_react["default"].createElement("div", null, notificationsFeed !== null && notificationsFeed !== void 0 && (_notificationsFeed$no = notificationsFeed.notifications) !== null && _notificationsFeed$no !== void 0 && _notificationsFeed$no.map ? notificationsFeed.notifications.map(function (m) {
    var _m$meta, _m$meta2, _m$meta3, _m$meta$message, _m$meta4, _m$meta5, _m$meta6, _props$cdn2, _m$meta7, _props$classes$produc, _props$classes, _m$product2, _m$product3, _m$meta8, _m$meta9;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifInternalContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].detailContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].author, " Misc_P")
    }, m !== null && m !== void 0 && (_m$meta = m.meta) !== null && _m$meta !== void 0 && _m$meta.fromAdmin && props !== null && props !== void 0 && props.siteTitle ? props.siteTitle : null), m !== null && m !== void 0 && (_m$meta2 = m.meta) !== null && _m$meta2 !== void 0 && _m$meta2.verb ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "Misc_P"
    }, m.meta.verb) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_P"
    }, m !== null && m !== void 0 && (_m$meta3 = m.meta) !== null && _m$meta3 !== void 0 && _m$meta3.quotes ? '"' : '', (_m$meta$message = m === null || m === void 0 || (_m$meta4 = m.meta) === null || _m$meta4 === void 0 ? void 0 : _m$meta4.message) !== null && _m$meta$message !== void 0 ? _m$meta$message : null, m !== null && m !== void 0 && (_m$meta5 = m.meta) !== null && _m$meta5 !== void 0 && _m$meta5.quotes ? '"' : '')), /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && (_m$meta6 = m.meta) !== null && _m$meta6 !== void 0 && _m$meta6.image && props !== null && props !== void 0 && (_props$cdn2 = props.cdn) !== null && _props$cdn2 !== void 0 && _props$cdn2["static"] ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].icon),
      style: {
        background: "url(".concat(props.cdn["static"], "/").concat(m.meta.image, ")"),
        backgroundSize: 'contain'
      }
    }) : m !== null && m !== void 0 && (_m$meta7 = m.meta) !== null && _m$meta7 !== void 0 && _m$meta7.icon ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].icon),
      style: {
        background: "url(".concat(props.cdn["static"], "/").concat(m.meta.icon, ")"),
        backgroundSize: 'contain'
      }
    }) : null)), m !== null && m !== void 0 && m.product ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifBox, " ").concat(_NotificationsModule["default"].notifProduct, " flex gap-p5")
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifImageContainer),
      style: {
        backgroundImage: resolveOrderImg(m) ? "url(".concat(resolveOrderImg(m), ")") : null
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: 'img/default/greythumb_product.jpg',
      className: "Product_img",
      style: {
        width: '75px',
        maxHeight: '60px',
        opacity: resolveOrderImg(m) ? 0 : 1
      }
    }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: (0, _utility2.resolveMainLink)(m === null || m === void 0 ? void 0 : m.product),
      onClick: handleClose
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].productName, " ").concat((_props$classes$produc = props === null || props === void 0 || (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.productName) !== null && _props$classes$produc !== void 0 ? _props$classes$produc : ''),
      style: {
        fontSize: '.9rem',
        fontWeight: '600'
      }
    }, m === null || m === void 0 || (_m$product2 = m.product) === null || _m$product2 === void 0 ? void 0 : _m$product2.name)), /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_PresentationModule["default"].CtaButton, " ").concat(props.ctaClassName),
      onClick: handleFireGlobalEvent,
      action: 'add_to_cart',
      item: m === null || m === void 0 || (_m$product3 = m.product) === null || _m$product3 === void 0 ? void 0 : _m$product3.id,
      selectedstyle: m === null || m === void 0 || (_m$meta8 = m.meta) === null || _m$meta8 === void 0 ? void 0 : _m$meta8.productStyle,
      currentoption: m === null || m === void 0 || (_m$meta9 = m.meta) === null || _m$meta9 === void 0 ? void 0 : _m$meta9.productOption,
      ctaAfter: 'Added To Cart'
    }, "Add To Cart"))) : null);
  }) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_P"
  }, "All Caught Up"))))) : null));
};
var _default = exports["default"] = Module;