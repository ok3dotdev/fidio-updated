"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _videoItemModule = _interopRequireDefault(require("./videoItem.module.scss"));
var _excluded = ["item", "index", "setActive", "unsetActiveItem", "activeItem", "previousActiveItemData", "allowEditingFlag"];
var VideoItem = function VideoItem(props) {
  var item = props.item,
    index = props.index,
    setActive = props.setActive,
    unsetActiveItem = props.unsetActiveItem,
    activeItem = props.activeItem,
    previousActiveItemData = props.previousActiveItemData,
    allowEditingFlag = props.allowEditingFlag,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var videoItemImageRef = _react["default"].useRef();
  var myLoader = function myLoader(_ref) {
    var src = _ref.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  _react["default"].useEffect(function () {
    var setActiveCall = function setActiveCall(e) {
      setActive(e, index, item, previousActiveItemData);
    };
    var unsetActiveItemCall = function unsetActiveItemCall() {
      unsetActiveItem(index);
    };
    if (typeof index == "number" && videoItemImageRef && videoItemImageRef.current && item) {
      videoItemImageRef.current.addEventListener('mouseenter', setActiveCall);
      videoItemImageRef.current.addEventListener('mouseleave', unsetActiveItemCall);
    }
    return function () {
      if (videoItemImageRef && videoItemImageRef.current && item) {
        videoItemImageRef.current.removeEventListener('mouseenter', setActiveCall);
        videoItemImageRef.current.removeEventListener('mouseleave', unsetActiveItemCall);
      }
    };
  }, [index, videoItemImageRef, item, activeItem, previousActiveItemData]);
  console.log(item, props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_videoItemModule["default"].leadContainer, " Item_GhostMetaItemContainer"),
    key: index
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: activeItem == index ? "".concat(_videoItemModule["default"].container, " activeVideoItemContainer") : "".concat(_videoItemModule["default"].container),
    ref: videoItemImageRef
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "w?v=".concat(item.id),
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: activeItem == index ? "".concat(_videoItemModule["default"].ghostVideoContainer, " ").concat(_videoItemModule["default"].ghostVideoContainerActive, " ghostVideoContainerItem ghostVideoContainerItemActive") : "".concat(_videoItemModule["default"].ghostVideoContainer, " ghostVideoContainerItem")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ghostVideoItem"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ghostVideoMeta"
  }, /*#__PURE__*/_react["default"].createElement("div", null, item.title)))), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "w?v=".concat(item.id),
    style: {
      display: 'grid'
    }
  }, item && item.__typename == 'Live' && item.status == 'live' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "LiveTag",
    style: {
      borderRadius: '.25rem'
    }
  }, "LIVE", /*#__PURE__*/_react["default"].createElement("div", {
    className: "RecordingCircle RecordingCircle_Small"
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Item_GhostMetaContainer"
  }, item && item.__typename == 'Live' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Item_GhostMeta"
  }, item.creation && !isNaN(item.creation) && !isNaN(new Date(Number(item.creation))) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Item_TinyMetaText",
    style: {
      marginBottom: '.25rem',
      textShadow: '1px 2px 6px rgb(0 0 0 / 75%)'
    }
  }, "Stream started ", new Date(Number(item.creation)).toTimeString()) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Item_GhostMetaContainerInternal"
  }, /*#__PURE__*/_react["default"].createElement("div", null, item.description ? item.description : "Watch Livestream Now"))) : null), /*#__PURE__*/_react["default"].createElement(_image["default"], {
    loader: myLoader,
    src: item.gif && props.cdn && props.cdn["static"] ? item.gif : item.thumbnail && props.cdn && props.cdn["static"] ? item.thumbnail : 'img/default/greythumb.jpg',
    alt: item.title ? item.title : "",
    width: 320,
    height: 180,
    layout: "responsive"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_videoItemModule["default"].metaContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", null, item && item.title ? item.title : null)));
};
var _default = exports["default"] = VideoItem;