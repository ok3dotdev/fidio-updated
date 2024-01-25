"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _NotificationsModule = _interopRequireDefault(require("./Notifications.module.scss"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _props$_openMenu4, _props$menuConfig, _notificationsFeed$no;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fetchBusy = _React$useState4[0],
    setFetchBusy = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    notificationsFeed = _React$useState8[0],
    setNotificationsFeed = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    cartMessages = _React$useState10[0],
    setCartMessages = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    tempOveride = _React$useState12[0],
    setTempOveride = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    menuOpen = _React$useState14[0],
    setMenuOpen = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
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
    var temp = _toConsumableArray(cartMessages);
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
    var _m$meta, _m$meta2, _m$meta3, _m$meta$message, _m$meta4, _m$meta5, _m$meta6, _props$cdn, _m$meta7;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].notifContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].detailContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_NotificationsModule["default"].author, " Misc_P")
    }, m !== null && m !== void 0 && (_m$meta = m.meta) !== null && _m$meta !== void 0 && _m$meta.fromAdmin && props !== null && props !== void 0 && props.siteTitle ? props.siteTitle : null), m !== null && m !== void 0 && (_m$meta2 = m.meta) !== null && _m$meta2 !== void 0 && _m$meta2.verb ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "Misc_P"
    }, m.meta.verb) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Misc_P"
    }, m !== null && m !== void 0 && (_m$meta3 = m.meta) !== null && _m$meta3 !== void 0 && _m$meta3.quotes ? '"' : '', (_m$meta$message = m === null || m === void 0 || (_m$meta4 = m.meta) === null || _m$meta4 === void 0 ? void 0 : _m$meta4.message) !== null && _m$meta$message !== void 0 ? _m$meta$message : null, m !== null && m !== void 0 && (_m$meta5 = m.meta) !== null && _m$meta5 !== void 0 && _m$meta5.quotes ? '"' : '')), /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && (_m$meta6 = m.meta) !== null && _m$meta6 !== void 0 && _m$meta6.image && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"] ? /*#__PURE__*/_react["default"].createElement("div", {
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
    }) : null));
  }) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_P"
  }, "All Caught Up"))))) : null));
};
var _default = exports["default"] = Module;