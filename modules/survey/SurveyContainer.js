"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _ = require(".");
var Module = function Module(props) {
  var _props$_openMenu4, _props$menuConfig;
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
  var _React$useState7 = _react["default"].useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    tempOveride = _React$useState8[0],
    setTempOveride = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(false),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    menuOpen = _React$useState10[0],
    setMenuOpen = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    closing = _React$useState12[0],
    setClosing = _React$useState12[1];
  var container = _react["default"].useRef();
  var closeTimeoutRef = _react["default"].useRef();
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  var mouseOverContainer = function mouseOverContainer() {
    props._LocalEventEmitter.dispatch(props === null || props === void 0 ? void 0 : props.handleName, {
      dispatch: 'mouseOver'
    });
  };
  props._LocalEventEmitter.unsubscribe(props === null || props === void 0 ? void 0 : props.handleName);
  props._LocalEventEmitter.subscribe(props === null || props === void 0 ? void 0 : props.handleName, function (e) {
    if (e) {
      console.log('Notification Update', e);
      if (e.dispatch === 'mouseOver') {
        var _props$_openMenu;
        console.log('Did mouse over', props, closing);
        if ((props === null || props === void 0 || (_props$_openMenu = props._openMenu) === null || _props$_openMenu === void 0 ? void 0 : _props$_openMenu.currentMenu) === (props === null || props === void 0 ? void 0 : props.handleName)) {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, props === null || props === void 0 ? void 0 : props.handleName, true);
          }
        }
      }
    }
  });
  _react["default"].useEffect(function () {
    var _props$_openMenu2, _props$_openMenu3;
    if (((props === null || props === void 0 || (_props$_openMenu2 = props._openMenu) === null || _props$_openMenu2 === void 0 ? void 0 : _props$_openMenu2.currentMenu) === (props === null || props === void 0 ? void 0 : props.handleName) || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef !== null && closeTimeoutRef !== void 0 && closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if ((props === null || props === void 0 || (_props$_openMenu3 = props._openMenu) === null || _props$_openMenu3 === void 0 ? void 0 : _props$_openMenu3.currentMenu) !== (props === null || props === void 0 ? void 0 : props.handleName) && !tempOveride && menuOpen) {
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
  var handleClose = _react["default"].useCallback(function (e) {
    setClosing(true);
    props._toggleSingleOpenMenu(null, props === null || props === void 0 ? void 0 : props.handleName, false);
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Misc_Container Misc_Container_Bigger ".concat(props.className, " ").concat(props.open || menuOpen && !closing ? 'Misc_Container_Visible' : ''),
    ref: container,
    style: {
      top: props !== null && props !== void 0 && (_props$menuConfig = props.menuConfig) !== null && _props$menuConfig !== void 0 && _props$menuConfig.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }
  }, props.open || menuOpen ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'sticky',
      top: '.5rem',
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    className: 'Misc_Icon_Button',
    style: {
      margin: '0rem 0',
      position: 'absolute',
      right: '.5rem'
    },
    onClick: handleClose
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Survey, (0, _extends2["default"])({
    survey: props === null || props === void 0 ? void 0 : props.survey,
    height: 250,
    close: handleClose
  }, props)))) : null));
};
var _default = exports["default"] = Module;