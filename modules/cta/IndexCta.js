"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _utility = require("../utility/utility");
var _wideFeature = require("../search/wideFeature");
var Module = function Module(props) {
  var AfterSignIn = _react["default"].useRef();
  var Lead2 = _react["default"].useRef();
  var ButtonAction = _react["default"].useRef();
  _react["default"].useEffect(function () {
    try {
      setTimeout(function () {
        if (Lead2.current && !Lead2.current.classList.contains('IndexCta_Lead2Trans')) {
          Lead2.current.classList.add('IndexCta_Lead2Trans');
        }
        setTimeout(function () {
          if (AfterSignIn.current && !AfterSignIn.current.classList.contains('IndexCta_AfterSignInTrans')) {
            AfterSignIn.current.classList.add('IndexCta_AfterSignInTrans');
          }
          if (ButtonAction.current && !ButtonAction.current.classList.contains('IndexCta_ButtonStyleTrans')) {
            ButtonAction.current.classList.add('IndexCta_ButtonStyleTrans');
          }
        }, 750);
      }, 1000);
    } catch (err) {
      // fail silently
    }
  }, [props._loggedIn]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_ExternalContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_Container"
  }, props.definition ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_LeadContainer ".concat(props.className)
  }, props.ctaTopVideos ? /*#__PURE__*/_react["default"].createElement(_wideFeature.WideFeature, (0, _extends2["default"])({
    image1: props.ctaTopVideos.image1
  }, props)) : '', /*#__PURE__*/_react["default"].createElement("img", {
    src: props.definition.logo,
    className: "IndexCta_MyLogo"
  }), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "IndexCta_Lead1_5 pointer IndexCta_Lead_First"
  }, (0, _utility.normalizeText)(props.definition.lead)), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "IndexCta_Lead2 pointer IndexCta_Lead_Second",
    ref: Lead2
  }, (0, _utility.normalizeText)(props.definition.lead2), " ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "IndexCta_RecordingCircle"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_Description"
  }, props.definition.description), props.children, !props._loggedIn ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_AfterSignIn",
    ref: AfterSignIn
  }, props.definition.afterSignIn) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "IndexCta_ButtonStyle ButtonGlowing",
    ref: ButtonAction
  }, props.definition.buttonAfterSignIn))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_DetailContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "IndexCta_Detail"
  }, props.definition.detail))) : null));
};
var _default = exports["default"] = Module;