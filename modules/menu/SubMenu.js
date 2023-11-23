"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _image = _interopRequireDefault(require("next/image"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var _excluded = ["loggedIn"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SubMenu = function SubMenu(props) {
  var loggedIn = props.loggedIn,
    rest = _objectWithoutProperties(props, _excluded);
  console.log(props.menuConfig.left);
  var myLoader = function myLoader(_ref) {
    var src = _ref.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props._loggedIn ? "".concat(_MenuModule["default"].subMenu) : "".concat(_MenuModule["default"].subMenu, " ").concat(_MenuModule["default"].subMenuBottomPadding, " subMenuContainer"), " ").concat(props.className)
  }, props.menuConfig && props.menuConfig.left ? props.menuConfig.left.map(function (c) {
    var _c$width, _c$height, _c$width2, _c$height2;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, c.type ? c.type === 'home' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/",
      style: {
        alignSelf: 'center'
      },
      className: "menuLinkSelector ".concat(c.className)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      href: "/",
      className: "".concat(_MenuModule["default"].subMenuItemContainer, " darkModeHoverEnforce"),
      alt: "Home",
      title: "Home"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].itemName, " home.itemName")
    }, "Home"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].subMenuItem, " home material-icons")
    }, "home"))) : c.type === 'watch' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/w",
      className: "".concat(_MenuModule["default"].menuLink, " menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      href: "/w",
      className: "".concat(_MenuModule["default"].subMenuItemContainer, " darkModeHoverEnforce"),
      alt: "Watch",
      title: "Watch"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].itemName, " home.itemName")
    }, "Watch"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].subMenuItem, " tv material-icons")
    }, "tv"))) : c.type === 'img'
    //     ? <img src={props.cdn.static ? `${props.cdn.static}/${c.src}` : ''} alt={c.name} style={{ width: c.width, height: c.height }} />
    ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "img_control menuLinkSelector ".concat(c.className),
      style: {
        width: c.width ? c.width + 'px' : '40px',
        height: c.height ? c.height + 'px' : '20px',
        alignSelf: 'center'
      }
    }, c.href ? /*#__PURE__*/_react["default"].createElement("a", {
      href: c.href
    }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
      loader: function loader() {
        if (c.src.match(/greythumb/) || c.local) {
          return "".concat(c.src);
        } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
          return "".concat(props.cdn["static"], "/").concat(c.src);
        }
      },
      src: c.src && props.cdn && props.cdn["static"] ? c.src : 'img/default/greythumb.jpg',
      alt: c.name ? c.name : "",
      width: (_c$width = c.width) !== null && _c$width !== void 0 ? _c$width : '80',
      height: (_c$height = c.height) !== null && _c$height !== void 0 ? _c$height : '40',
      layout: "responsive"
    })) : /*#__PURE__*/_react["default"].createElement(_image["default"], {
      loader: function loader() {
        if (c.src.match(/greythumb/) || c.local) {
          return "".concat(c.src);
        } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
          return "".concat(props.cdn["static"], "/").concat(c.src);
        }
      },
      src: c.src && props.cdn && props.cdn["static"] ? c.src : 'img/default/greythumb.jpg',
      alt: c.name ? c.name : "",
      width: (_c$width2 = c.width) !== null && _c$width2 !== void 0 ? _c$width2 : '80',
      height: (_c$height2 = c.height) !== null && _c$height2 !== void 0 ? _c$height2 : '40',
      layout: "responsive"
    })) : c.type === 'link' ? /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: c.href,
      className: "".concat(_MenuModule["default"].menuLink, " menuLinkSelector ").concat(c.className),
      style: {
        alignSelf: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      href: c.href,
      className: "".concat(_MenuModule["default"].subMenuItemContainer, " darkModeHoverEnforce"),
      alt: c.name,
      title: c.name
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].itemName, " home.itemName")
    }, c.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_MenuModule["default"].subMenuItem, " material-icons")
    }, c.muiIcon))) : null : null);
  }) : null);
};
var _default = SubMenu;
exports["default"] = _default;