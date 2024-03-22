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
var _utility = require("../../social/utility");
var Module = function Module(props) {
  var _props$_loggedIn;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    inputField = _React$useState2[0],
    setInputField = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    submitted = _React$useState4[0],
    setSubmitted = _React$useState4[1];
  var inputFieldRef = _react["default"].useRef();
  var resetRef = _react["default"].useRef();
  var handleInviteFriend = _react["default"].useCallback(function (e) {
    if (!inputField) {
      setInputField(true);
    }
  });
  var handleSubmitFriendRequest = _react["default"].useCallback(function (e) {
    var _inputFieldRef$curren;
    var f = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!email) {
                _context.next = 7;
                break;
              }
              _context.next = 3;
              return (0, _utility.inviteFriend)(props.apiUrl, props.domainKey, props._loggedIn, {
                email: email
              });
            case 3:
              setSubmitted(email);
              setInputField(false);
              if (inputFieldRef !== null && inputFieldRef !== void 0 && inputFieldRef.current) {
                inputFieldRef.current.value = '';
              }
              resetRef.current = setTimeout(function () {
                setSubmitted(null);
              }, 10000);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function f(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var value = inputFieldRef !== null && inputFieldRef !== void 0 && (_inputFieldRef$curren = inputFieldRef.current) !== null && _inputFieldRef$curren !== void 0 && _inputFieldRef$curren.value && inputFieldRef.current.value !== '' ? inputFieldRef.current.value : '';
    if (value) {
      f(value);
    }
  });
  var handleSendAnother = _react["default"].useCallback(function (e) {
    setSubmitted(null);
    setInputField(true);
    if (resetRef.current) {
      clearTimeout(resetRef.current);
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props._loggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (_props$_loggedIn = props._loggedIn) !== null && _props$_loggedIn !== void 0 && _props$_loggedIn.username ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "menuLinkSelector",
    onClick: handleInviteFriend,
    style: {
      position: 'relative',
      alignSelf: 'center'
    }
  }, submitted ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "send"), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleSendAnother,
    className: "max-width-dropdown"
  }, "Sent request to ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 600
    }
  }, submitted))) : !inputField ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-icons"
  }, "send"), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleInviteFriend
  }, "Invite Friend")) : /*#__PURE__*/_react["default"].createElement("li", {
    style: {
      padding: '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p05",
    style: {
      flex: 'auto',
      height: '29px'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    style: {
      borderRadius: '.5rem',
      borderWidth: '0',
      marginLeft: '.5rem'
    },
    placeholder: "Friend's Email",
    ref: inputFieldRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSubmitFriendRequest,
    style: {
      width: '-webkit-fill-available',
      maxWidth: '85px',
      marginRight: '.5rem'
    }
  }, "Invite")))) : null) : null);
};
var _default = exports["default"] = Module;