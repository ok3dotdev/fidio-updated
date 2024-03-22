"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _router = require("next/router");
var _SettingsModule = _interopRequireDefault(require("./Settings.module.scss"));
var _payment = require("../payment");
var _uuid = require("uuid");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _onboarding = require("../utility/onboarding");
var _orders = require("../utility/utility/orders");
var _receipt = require("../ecommerce/receipt");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Module = function Module(props) {
  var _props$settingsConfig, _props$_loggedIn3, _props$_loggedIn$meta, _props$_loggedIn4, _props$_loggedIn12, _props$_loggedIn13, _settingsConfig$tabs$2, _props$_loggedIn$icon, _props$_loggedIn14, _props$_loggedIn15, _settingsConfig$tabs$3, _settingsConfig$tabs$4;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    pageError = _React$useState6[0],
    setPageError = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentTab = _React$useState8[0],
    setCurrentTab = _React$useState8[1];
  var _React$useState9 = _react["default"].useState({}),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    editedInputs = _React$useState10[0],
    setEditedInputs = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    editingUsername = _React$useState12[0],
    setEditingUsername = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    resolvedOrders = _React$useState14[0],
    setResolvedOrders = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    fetchBusy = _React$useState16[0],
    setFetchBusy = _React$useState16[1];
  var settingsConfig = (_props$settingsConfig = props === null || props === void 0 ? void 0 : props.settingsConfig) !== null && _props$settingsConfig !== void 0 ? _props$settingsConfig : {};
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      if (query !== null && query !== void 0 && query.t) {
        var f = settingsConfig.tabs.findIndex(function (m) {
          console.log(m.label.toLowerCase(), query.t);
          if ((m === null || m === void 0 ? void 0 : m.label.toLowerCase()) === (query === null || query === void 0 ? void 0 : query.t)) {
            return true;
          }
          return false;
        });
        if (f > -1) {
          setCurrentTab(f);
        }
      }
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount, currentTab]);
  _react["default"].useEffect(function () {
    var _settingsConfig$tabs$;
    if (!resolvedOrders && settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs[currentTab] && (_settingsConfig$tabs$ = settingsConfig.tabs[currentTab]) !== null && _settingsConfig$tabs$ !== void 0 && _settingsConfig$tabs$.items && !fetchBusy && props._loggedIn) {
      var indexOfOrders = settingsConfig.tabs[currentTab].items.findIndex(function (m) {
        return m.type && m.type === 'orders';
      });
      if (indexOfOrders > -1) {
        var f = /*#__PURE__*/function () {
          var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            var user, userOrders;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  user = (0, _onboarding.checkSignedIn)();
                  _context.next = 3;
                  return (0, _orders.getOrders)(props.apiUrl, props.domainKey, user, 'creation', 'desc', 0, 50);
                case 3:
                  userOrders = _context.sent;
                  if (userOrders !== null && userOrders !== void 0 && userOrders.data) {
                    setResolvedOrders({
                      received: new Date().getTime(),
                      orders: userOrders.data
                    });
                  } else {
                    setResolvedOrders({});
                  }
                case 5:
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
      }
    }
  }, [resolvedOrders, settingsConfig === null || settingsConfig === void 0 ? void 0 : settingsConfig.tab, currentTab, fetchBusy]);
  var handleChange = function handleChange(e) {
    var modif = e === null || e === void 0 ? void 0 : e.currentTarget.getAttribute('modif');
    if (modif) {
      setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, (0, _defineProperty2["default"])({}, modif, true)));
    }
  };
  var saveChange = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      var modif, _res, res, _document$getElementB, proposed, _document$getElementB2, _document$getElementB3, _props$_loggedIn, _document$getElementB4, _document$getElementB5, _props$_loggedIn2, _proposed, _document$getElementB6, _proposed2;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            modif = e === null || e === void 0 ? void 0 : e.currentTarget.getAttribute('modif');
            if (!modif) {
              _context2.next = 32;
              break;
            }
            setPageError(null);
            if (!(modif === 'username')) {
              _context2.next = 14;
              break;
            }
            console.log(e);
            proposed = (_document$getElementB = document.getElementById("Settings_".concat(componentId, "_Username_Input"))) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value;
            console.log(proposed);
            if (!proposed) {
              _context2.next = 11;
              break;
            }
            _context2.next = 10;
            return (0, _onboarding.requestSettingsUpdate)(props.apiUrl, props.domainKey, {
              username: proposed
            }, props, setFetchBusy, fetchBusy);
          case 10:
            res = _context2.sent;
          case 11:
            handleChangeUsername();
            _context2.next = 30;
            break;
          case 14:
            if (!(modif === 'firstName' || modif === 'lastName')) {
              _context2.next = 24;
              break;
            }
            _proposed = {
              firstName: (_document$getElementB2 = (_document$getElementB3 = document.getElementById("Settings_".concat(componentId, "_firstName_Input"))) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value) !== null && _document$getElementB2 !== void 0 ? _document$getElementB2 : props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 || (_props$_loggedIn = _props$_loggedIn.meta) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.firstName,
              lastName: (_document$getElementB4 = (_document$getElementB5 = document.getElementById("Settings_".concat(componentId, "_lastName_Input"))) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.value) !== null && _document$getElementB4 !== void 0 ? _document$getElementB4 : props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 || (_props$_loggedIn2 = _props$_loggedIn2.meta) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.lastName
            };
            if (!_proposed) {
              _context2.next = 22;
              break;
            }
            _context2.next = 19;
            return (0, _onboarding.requestSettingsUpdate)(props.apiUrl, props.domainKey, {
              fullName: _proposed
            }, props, setFetchBusy, fetchBusy);
          case 19:
            res = _context2.sent;
            setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, {
              firstName: false
            }));
            setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, {
              lastName: false
            }));
          case 22:
            _context2.next = 30;
            break;
          case 24:
            if (!(modif === 'keepSubscriptionsPrivate')) {
              _context2.next = 30;
              break;
            }
            if (!document.getElementById("Settings_".concat(componentId, "_keepSubscriptionsPrivate_Input"))) {
              _context2.next = 30;
              break;
            }
            _proposed2 = (_document$getElementB6 = document.getElementById("Settings_".concat(componentId, "_keepSubscriptionsPrivate_Input"))) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.checked;
            _context2.next = 29;
            return (0, _onboarding.requestSettingsUpdate)(props.apiUrl, props.domainKey, {
              keepSubscriptionsPrivate: _proposed2
            }, props, setFetchBusy, fetchBusy);
          case 29:
            res = _context2.sent;
          case 30:
            if (((_res = res) === null || _res === void 0 ? void 0 : _res.status) !== 'success' && res.message) {
              setPageError(res.message);
            }
            setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, (0, _defineProperty2["default"])({}, modif, false)));
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function saveChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleChangeUsername = function handleChangeUsername() {
    if (editingUsername) {
      setEditingUsername(false);
      return;
    }
    setEditingUsername(true);
    return;
  };
  var handleCloseError = function handleCloseError() {
    setPageError(null);
  };
  var cancelCloseAccount = function cancelCloseAccount() {
    setEditedInputs(_objectSpread(_objectSpread({}, editedInputs), {}, {
      closeAccount: false
    }));
  };
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
  var resolvedCountry = props !== null && props !== void 0 && props.regionsData && props !== null && props !== void 0 && (_props$_loggedIn3 = props._loggedIn) !== null && _props$_loggedIn3 !== void 0 && (_props$_loggedIn3 = _props$_loggedIn3.meta) !== null && _props$_loggedIn3 !== void 0 && (_props$_loggedIn3 = _props$_loggedIn3.locationMeta) !== null && _props$_loggedIn3 !== void 0 && _props$_loggedIn3.country && props.regionsData[props._loggedIn.meta.locationMeta.country] && props.regionsData[props._loggedIn.meta.locationMeta.country].name ? props.regionsData[props._loggedIn.meta.locationMeta.country].name : (_props$_loggedIn$meta = props === null || props === void 0 || (_props$_loggedIn4 = props._loggedIn) === null || _props$_loggedIn4 === void 0 || (_props$_loggedIn4 = _props$_loggedIn4.meta) === null || _props$_loggedIn4 === void 0 || (_props$_loggedIn4 = _props$_loggedIn4.locationMeta) === null || _props$_loggedIn4 === void 0 ? void 0 : _props$_loggedIn4.country) !== null && _props$_loggedIn$meta !== void 0 ? _props$_loggedIn$meta : null;
  console.log(editedInputs, currentTab, resolvedOrders);
  var resolveCurrentItem = function resolveCurrentItem(itemType) {
    if (itemType === 'firstNameLastName') {
      var _props$_loggedIn5, _props$_loggedIn6, _props$_loggedIn7, _props$_loggedIn8;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].FirstName_LastName_Container)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label)
      }, "First Name"), !editedInputs['firstName'] ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].hoverHighlight),
        modif: "firstName",
        onClick: handleChange
      }, props !== null && props !== void 0 && (_props$_loggedIn5 = props._loggedIn) !== null && _props$_loggedIn5 !== void 0 && (_props$_loggedIn5 = _props$_loggedIn5.meta) !== null && _props$_loggedIn5 !== void 0 && _props$_loggedIn5.firstName && (props === null || props === void 0 || (_props$_loggedIn6 = props._loggedIn) === null || _props$_loggedIn6 === void 0 || (_props$_loggedIn6 = _props$_loggedIn6.meta) === null || _props$_loggedIn6 === void 0 ? void 0 : _props$_loggedIn6.firstName) !== '' ? props._loggedIn.meta.firstName : props !== null && props !== void 0 && props._loggedIn ? 'Add First Name' : '') : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "First Name",
        className: "".concat(_SettingsModule["default"].input),
        id: "Settings_".concat(componentId, "_firstName_Input")
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        modif: 'firstName',
        onClick: saveChange
      }, "Save"))) : null), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          maxWidth: '100%',
          width: '100%'
        }
      }, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label)
      }, "Last Name"), !editedInputs['lastName'] ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].hoverHighlight),
        modif: "lastName",
        onClick: handleChange
      }, props !== null && props !== void 0 && (_props$_loggedIn7 = props._loggedIn) !== null && _props$_loggedIn7 !== void 0 && (_props$_loggedIn7 = _props$_loggedIn7.meta) !== null && _props$_loggedIn7 !== void 0 && _props$_loggedIn7.lastName && (props === null || props === void 0 || (_props$_loggedIn8 = props._loggedIn) === null || _props$_loggedIn8 === void 0 || (_props$_loggedIn8 = _props$_loggedIn8.meta) === null || _props$_loggedIn8 === void 0 ? void 0 : _props$_loggedIn8.lastName) !== '' ? props._loggedIn.meta.lastName : props !== null && props !== void 0 && props._loggedIn ? 'Add Last Name' : '') : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Last Name",
        className: "".concat(_SettingsModule["default"].input),
        id: "Settings_".concat(componentId, "_lastName_Input")
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        modif: 'lastName',
        onClick: saveChange
      }, "Save"))) : null)));
    } else if (itemType === 'username') {
      var _props$_loggedIn$user, _props$_loggedIn9;
      return /*#__PURE__*/_react["default"].createElement("div", null, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label, " ").concat(_SettingsModule["default"].fullWidth)
      }, "Username"), editingUsername ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].ItemsFlex)
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Username",
        className: "".concat(_SettingsModule["default"].input),
        modif: 'username',
        id: "Settings_".concat(componentId, "_Username_Input"),
        onChange: handleChange
      }), /*#__PURE__*/_react["default"].createElement(_Close["default"], {
        className: "".concat(_SettingsModule["default"].Close),
        onClick: handleChangeUsername
      })), editedInputs['username'] ? /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        modif: 'username',
        onClick: saveChange
      }, "Save") : null) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].ItemsFlex)
      }, /*#__PURE__*/_react["default"].createElement("div", null, (_props$_loggedIn$user = props === null || props === void 0 || (_props$_loggedIn9 = props._loggedIn) === null || _props$_loggedIn9 === void 0 ? void 0 : _props$_loggedIn9.username) !== null && _props$_loggedIn$user !== void 0 ? _props$_loggedIn$user : null), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].LowProfileButton),
        onClick: handleChangeUsername
      }, "Get New Username"))) : null);
    } else if (itemType === 'handleCreditCard') {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label, " ").concat(_SettingsModule["default"].fullWidth)
      }, "Payment"), /*#__PURE__*/_react["default"].createElement(_payment.CreditCard, props));
    } else if (itemType === 'location') {
      var _props$_loggedIn$meta2, _props$_loggedIn10;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].Read_Only_Label)
      }, "Location"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].Read_Only_Field)
      }, /*#__PURE__*/_react["default"].createElement("span", null, (_props$_loggedIn$meta2 = props === null || props === void 0 || (_props$_loggedIn10 = props._loggedIn) === null || _props$_loggedIn10 === void 0 || (_props$_loggedIn10 = _props$_loggedIn10.meta) === null || _props$_loggedIn10 === void 0 || (_props$_loggedIn10 = _props$_loggedIn10.locationMeta) === null || _props$_loggedIn10 === void 0 ? void 0 : _props$_loggedIn10.city) !== null && _props$_loggedIn$meta2 !== void 0 ? _props$_loggedIn$meta2 : null), /*#__PURE__*/_react["default"].createElement("span", null, resolvedCountry ? ', ' : null), /*#__PURE__*/_react["default"].createElement("span", null, resolvedCountry)));
    } else if (itemType === 'keepSubscriptionsPrivate') {
      var _props$_loggedIn11;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].Settings_Checkbox_Container)
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        name: "keepSubscriptionsPrivate",
        className: "".concat(_SettingsModule["default"].Settings_Checkbox),
        id: "Settings_".concat(componentId, "_keepSubscriptionsPrivate_Input"),
        modif: 'keepSubscriptionsPrivate',
        onChange: saveChange,
        defaultChecked: props === null || props === void 0 || (_props$_loggedIn11 = props._loggedIn) === null || _props$_loggedIn11 === void 0 || (_props$_loggedIn11 = _props$_loggedIn11.meta) === null || _props$_loggedIn11 === void 0 ? void 0 : _props$_loggedIn11.keepSubscriptionsPrivate
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "keepSubscriptionsPrivate",
        className: "".concat(_SettingsModule["default"].Checkbox_Label)
      }, "Keep Subscriptions Private")));
    } else if (itemType === 'closeAccount') {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_SettingsModule["default"].Close_Account_Button_Container)
      }, !editedInputs['closeAccount'] ? /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Warning_Button),
        modif: 'closeAccount',
        onClick: handleChange
      }, "Close Account") : /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          textAlign: 'center',
          marginTop: '1rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          fontWeight: '600'
        }
      }, "Are you sure you want to close your ", props === null || props === void 0 ? void 0 : props.siteTitle, " account?"), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          fontSize: '.8rem',
          marginTop: '.5rem'
        }
      }, "This action is not reversible. All your data will be deleted and forgotten."), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: '10rem',
          marginTop: '1rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        style: {
          fontWeight: '600'
        }
      }, "Yes"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "".concat(_SettingsModule["default"].Save_Button),
        onClick: cancelCloseAccount,
        style: {
          fontWeight: '600'
        }
      }, "No")))));
    } else if (itemType === 'orders') {
      var _resolvedOrders$order;
      return /*#__PURE__*/_react["default"].createElement("div", null, props !== null && props !== void 0 && props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "".concat(_SettingsModule["default"].label, " ").concat(_SettingsModule["default"].fullWidth)
      }, "Orders"), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }
      }, resolvedOrders !== null && resolvedOrders !== void 0 && (_resolvedOrders$order = resolvedOrders.orders) !== null && _resolvedOrders$order !== void 0 && _resolvedOrders$order.map ? resolvedOrders.orders.map(function (m, i) {
        return /*#__PURE__*/_react["default"].createElement(_receipt.Order, (0, _extends2["default"])({
          order: m
        }, props));
      }) : null)) : null);
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", null, itemType);
    }
  };
  var handleSetTab = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    var modif = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.getAttribute('modif');
    if (modif) {
      setCurrentTab(settingsConfig.tabs.findIndex(function (m) {
        return m.label === modif;
      }));
    }
  });
  var resolveInitials = props !== null && props !== void 0 && (_props$_loggedIn12 = props._loggedIn) !== null && _props$_loggedIn12 !== void 0 && (_props$_loggedIn12 = _props$_loggedIn12.meta) !== null && _props$_loggedIn12 !== void 0 && _props$_loggedIn12.firstName && props !== null && props !== void 0 && (_props$_loggedIn13 = props._loggedIn) !== null && _props$_loggedIn13 !== void 0 && (_props$_loggedIn13 = _props$_loggedIn13.meta) !== null && _props$_loggedIn13 !== void 0 && _props$_loggedIn13.lastName && props._loggedIn.meta.firstName.length > 0 && props._loggedIn.meta.lastName.length > 0 ? props._loggedIn.meta.firstName.charAt(0) + props._loggedIn.meta.lastName.charAt(0) : 'AV';
  console.log('Curr', currentTab, settingsConfig.tabs, props);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy')
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Container),
    style: {
      margin: '0 auto',
      width: '70vw',
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_InternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Menu)
  }, settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs ? settingsConfig.tabs.map(function (tab) {
    var _tab$label;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SettingsModule["default"].tab, " ").concat(settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab].label === (tab === null || tab === void 0 ? void 0 : tab.label) ? _SettingsModule["default"].currentTab : ''),
      onClick: handleSetTab,
      modif: tab === null || tab === void 0 ? void 0 : tab.label
    }, (_tab$label = tab === null || tab === void 0 ? void 0 : tab.label) !== null && _tab$label !== void 0 ? _tab$label : ''));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Data)
  }, settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && settingsConfig !== null && settingsConfig !== void 0 && (_settingsConfig$tabs$2 = settingsConfig.tabs[currentTab]) !== null && _settingsConfig$tabs$2 !== void 0 && _settingsConfig$tabs$2.avatar ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].Settings_Profile_Picture),
    style: {
      background: "url(".concat((_props$_loggedIn$icon = props === null || props === void 0 || (_props$_loggedIn14 = props._loggedIn) === null || _props$_loggedIn14 === void 0 ? void 0 : _props$_loggedIn14.icon) !== null && _props$_loggedIn$icon !== void 0 ? _props$_loggedIn$icon : null, ")"),
      backgroundSize: 'contain'
    }
  }, !(props !== null && props !== void 0 && (_props$_loggedIn15 = props._loggedIn) !== null && _props$_loggedIn15 !== void 0 && _props$_loggedIn15.icon) ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(_SettingsModule["default"].Avatar_Placeholder_Text)
  }, resolveInitials) : null) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_SettingsModule["default"].settingsItemContainer)
  }, pageError ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "error",
    style: {
      marginTop: '.5rem'
    },
    onClick: handleCloseError
  }, pageError) : null, settingsConfig !== null && settingsConfig !== void 0 && settingsConfig.tabs && currentTab !== null && settingsConfig.tabs[currentTab] && (_settingsConfig$tabs$3 = settingsConfig.tabs[currentTab]) !== null && _settingsConfig$tabs$3 !== void 0 && _settingsConfig$tabs$3.items && Array.isArray((_settingsConfig$tabs$4 = settingsConfig.tabs[currentTab]) === null || _settingsConfig$tabs$4 === void 0 ? void 0 : _settingsConfig$tabs$4.items) ? settingsConfig.tabs[currentTab].items.map(function (item) {
    var avatar = settingsConfig.tabs[currentTab].avatar;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.type
    }, resolveCurrentItem(item.type));
  }) : null)))));
};
var _default = exports["default"] = Module;