"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _InternalModule = _interopRequireDefault(require("./Internal.module.scss"));
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    currentSelected = _React$useState4[0],
    setCurrentSelected = _React$useState4[1];
  var _React$useState5 = _react["default"].useState([]),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    paymentIssues = _React$useState6[0],
    setPaymentIssues = _React$useState6[1];
  var _React$useState7 = _react["default"].useState([]),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    helpIssues = _React$useState8[0],
    setHelpIssues = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    settingsIssues = _React$useState10[0],
    setSettingsIssues = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    allIssues = _React$useState12[0],
    setAllIssues = _React$useState12[1];
  _react["default"].useEffect(function () {
    if (props.paymentConfig) {
      var issues = [];
      if (props.paymentConfig.keys) {
        if (!props.paymentConfig.keys.stripe) {
          issues.push({
            m: 'Stripe key is not defined. You will not be able to process purchases in regions supported by Stripe https://stripe.com/en-ca/global',
            s: 'Add your Stripe key to the config under paymentConfig.keys.stripe'
          });
        }
        if (!props.paymentConfig.keys.stripe) {
          issues.push({
            m: 'Paystack key is not defined. You will not be able to process purchases in regions supported by Paystack https://paystack.com/countries',
            s: 'Add your Paystack key to the config under paymentConfig.keys.paystack'
          });
        }
      }
      setPaymentIssues(issues);
    } else {
      setPaymentIssues([{
        m: 'Payment Config is not defined. Please set in config file',
        s: 'In order for the payment processor to function properly you must add Payment Configurations to resolveVariables as paymentConfig {Object}'
      }]);
    }
  }, [props === null || props === void 0 ? void 0 : props.paymentConfig]);
  _react["default"].useEffect(function () {
    if (props.helpIndex) {
      var issues = [];
      if (!Array.isArray(props.helpIndex)) {
        issues.push({
          m: 'The Help Index is not of an Array type. Please ensure that it is of an array type.',
          s: 'Array Item Model: question {String}, answer {String}, a {String}, pinned {Boolean} (optional) Default False. In order for leverage quick FAQ capabilities for your business you must add Help Index to resolveVariables as helpIndex [ ...{Object} ]'
        });
      }
      setHelpIssues(issues);
    } else {
      setHelpIssues([{
        m: 'Help Index is not defined. Please set in config file',
        s: 'In order for leverage quick FAQ capabilities for your business you must add Help Index to resolveVariables as helpIndex [ ...{Object} ]'
      }]);
    }
  }, [props === null || props === void 0 ? void 0 : props.helpIndex]);
  _react["default"].useEffect(function () {
    if (props.settingsConfig) {
      var issues = [];
      if (!props.settingsConfig.tabs) {
        issues.push({
          m: 'The Settings Config does not have a tabs property. Please ensure that it has a tabs property under settingsConfig.tabs of type Array[ ...{Object} ]. Each tab must have an items Array[ ...{Object} ]. It may have an label {String} and avatar {Boolean}',
          s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object}'
        });
      } else if (!Array.isArray(props.settingsConfig.tabs)) {
        issues.push({
          m: 'The settingsConfig.tabs property is not of an Array type. Please ensure that it is of an array type.',
          s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object} and then create an array at settingsConfig.tabs Array[ ...{Object} ]'
        });
      } else {
        var badItem = props.settingsConfig.tabs.findIndex(function (m) {
          var _m$items;
          return (_m$items = !m.items) !== null && _m$items !== void 0 ? _m$items : false;
        });
        if (badItem > -1) {
          issues.push({
            m: "A tab in the settingsConfig.tabs array does not have an appropriate config. Please ensure that the tab ".concat(badItem, " has a property of type Array[ ...{Object} ]."),
            s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object} and then create an array at settingsConfig.tabs Array[ ...{Object} ]'
          });
        }
      }
      setSettingsIssues(issues);
    } else {
      setSettingsIssues([{
        m: 'Settings Config is not defined. Please set in config file',
        s: 'In order for users to access the settings page for your business you must add Settings Config to resolveVariables as settingsConfig {Object}'
      }]);
    }
  }, [props === null || props === void 0 ? void 0 : props.settingsConfig]);
  _react["default"].useEffect(function () {
    if (props.menuConfig) {
      var issues = [];
      if (!Object.prototype.hasOwnProperty.call(props.menuConfig, 'height')) {
        issues.push({
          m: 'The Menu Config does not have a height property. Setting a height property on your Menu Config will ensure that all floating and static elements load at the correct height such that they do not block the users interaction height {Number}',
          s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
        });
      }
      if (!props.menuConfig.left || props.menuConfig.left && !Array.isArray(props.menuConfig.left)) {
        issues.push({
          m: 'The Menu Config does not have a correctly defined left property. This determines what items are loaded on the left. It must be of type array under props.menuConfig.left Array[ ...{Object} ]',
          s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
        });
      }
      if (!props.menuConfig.right || props.menuConfig.right && !Array.isArray(props.menuConfig.right)) {
        issues.push({
          m: 'The Menu Config does not have a correctly defined right property. This determines what items are loaded on the right. It must be of type array under props.menuConfig.right Array[ ...{Object} ]',
          s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
        });
      }
      setSettingsIssues(issues);
    } else {
      setSettingsIssues([{
        m: 'Menu Config is not defined. Please set in config file',
        s: 'The internal menu allows for the users to easily navigate the platform using proprietary modules. You must add the Menu Config to resolveVariables as menuConfig {Object}'
      }]);
    }
  }, [props === null || props === void 0 ? void 0 : props.menuConfig]);
  _react["default"].useEffect(function () {
    setAllIssues([].concat(paymentIssues, settingsIssues, helpIssues));
  }, [paymentIssues, settingsIssues, helpIssues]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props !== null && props !== void 0 && props.dev && allIssues.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_InternalModule["default"].devContainer, " ").concat(props.className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_InternalModule["default"].devInternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem',
      fontSize: '.85rem'
    }
  }, "Developer"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_InternalModule["default"].devLogContainer)
  }, allIssues.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: m.s,
      placement: "right"
    }, /*#__PURE__*/_react["default"].createElement("div", null, "* ", m.m)));
  })))) : null);
};
var _default = exports["default"] = Module;