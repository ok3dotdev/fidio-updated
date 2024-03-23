"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _gridList = _interopRequireDefault(require("../video/player/gridList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$combinedFeed;
  return <div className='ProfilePage_Feed'>
            <_gridList.default {...Object.assign({
      loggedIn: props._loggedIn,
      _gridItems: (_props$combinedFeed = props === null || props === void 0 ? void 0 : props.combinedFeed) !== null && _props$combinedFeed !== void 0 ? _props$combinedFeed : [],
      _gridListType: 'video'
    }, props)}></_gridList.default>
        </div>;
};
var _default = exports["default"] = Module;