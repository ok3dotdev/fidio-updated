"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router.js");
var _SignIn = require("../../utility/onboarding/SignIn.js");
var registerUsername = function registerUsername(props) {
  var _props$prompt, _props$confirm;
  var router = (0, _router.useRouter)();
  var query = router.query,
    asPath = router.asPath;
  var proposed = _react["default"].useRef();
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    pageError = _React$useState2[0],
    setPageError = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(true),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    registerUsernameOn = _React$useState4[0],
    setRegisterUsernameOn = _React$useState4[1];
  var handleSaveUsername = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var data, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(proposed && proposed.current && proposed.current.value)) {
              _context.next = 24;
              break;
            }
            data = {
              proposedUsername: proposed.current.value
            };
            _context.next = 4;
            return (0, _SignIn.grabUsername)(props.apiUrl, props.domainKey, data, _SignIn.checkSignedIn, props._setLoggedIn);
          case 4:
            res = _context.sent;
            if (!res) {
              _context.next = 23;
              break;
            }
            if (!(res == "disauthenticated")) {
              _context.next = 12;
              break;
            }
            setLoggedIn(false);
            setRegisterUsernameOn(false);
            setPageError(null);
            _context.next = 21;
            break;
          case 12:
            if (!(res == "username taken")) {
              _context.next = 17;
              break;
            }
            setPageError("Sorry, that username is already taken. Please try another one or contact admin@minipost.app");
            return _context.abrupt("return");
          case 17:
            setRegisterUsernameOn(false);
            setPageError(null);
            if (props.redirectOnAuth && asPath !== props.redirectOnAuth) {
              router.push(props.redirectOnAuth);
            }
            if (props.setRegistered) {
              props.setRegistered(true);
            }
          case 21:
            _context.next = 24;
            break;
          case 23:
            setPageError("Sorry, that username is already taken. Please try another one or contact admin@minipost.app");
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSaveUsername(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    if (props._loggedIn) {
      if (!props._loggedIn.username && !registerUsernameOn) {
        setRegisterUsernameOn(true);
      } else if (props._loggedIn.username && registerUsernameOn) {
        setRegisterUsernameOn(false);
      }
    } else if (registerUsernameOn) {
      setRegisterUsernameOn(false);
    }
  }, [props._loggedIn, registerUsernameOn]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, props._loggedIn && !props._loggedIn.username && registerUsernameOn ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Username_Container Username_ContainerBg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Username_ItemsContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Username_PromptContainer"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      margin: 0
    }
  }, (_props$prompt = props.prompt) !== null && _props$prompt !== void 0 ? _props$prompt : 'What username do you want?'), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: 0 + " auto"
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: proposed,
    type: "text",
    placeholder: "Username",
    className: "simpleTextInput"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick(e) {
      handleSaveUsername(e);
    },
    style: {
      borderRadius: '0'
    }
  }, (_props$confirm = props.confirm) !== null && _props$confirm !== void 0 ? _props$confirm : 'Give me that one!'))), pageError ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginTop: '.5rem'
    }
  }, pageError) : null)) : null);
};
var _default = exports["default"] = registerUsername;