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
  var myLoader = function myLoader(_ref) {
    var src = _ref.src;
    if (src.match(/greythumb/)) {
      return "".concat(src);
    } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
      return "".concat(props.cdn["static"], "/").concat(src);
    }
  };
  return <div className={"".concat(props._loggedIn ? "".concat(_MenuModule["default"].subMenu) : "".concat(_MenuModule["default"].subMenu, " ").concat(_MenuModule["default"].subMenuBottomPadding, " subMenuContainer"), " ").concat(props.className)}>
            {props.menuConfig && props.menuConfig.left ? props.menuConfig.left.map(function (c, i) {
      var _props$handleToggleMe, _props$handleToggleMe2, _props$handleToggleMe3, _c$width, _c$height, _c$width2, _c$height2, _props$handleToggleMe4;
      return <_react.default.Fragment key={i}>
                            {c.type ? c.type === 'home' ? <_link.default href="/" style={{
          alignSelf: 'center'
        }} className={"menuLinkSelector ".concat(c.className)} key={i} onClick={(_props$handleToggleMe = props.handleToggleMenuOff) !== null && _props$handleToggleMe !== void 0 ? _props$handleToggleMe : null}>
                                            <span href="/" className={"".concat(_MenuModule["default"].subMenuItemContainer, " darkModeHoverEnforce")} alt="Home" title="Home">
                                                <div className={"".concat(_MenuModule["default"].itemName, " home.itemName")}>Home</div>
                                                <div className={"".concat(_MenuModule["default"].subMenuItem, " ").concat(_MenuModule["default"].maxIconWidth, " home material-icons")}>home</div>
                                            </span>
                                        </_link.default> : c.type === 'watch' ? <_link.default href="/w" className={"".concat(_MenuModule["default"].menuLink, " menuLinkSelector ").concat(c.className)} style={{
          alignSelf: 'center'
        }} key={i} onClick={(_props$handleToggleMe2 = props.handleToggleMenuOff) !== null && _props$handleToggleMe2 !== void 0 ? _props$handleToggleMe2 : null}>
                                            <span href="/w" className={"".concat(_MenuModule["default"].subMenuItemContainer, " darkModeHoverEnforce")} alt="Watch" title="Watch">
                                                <div className={"".concat(_MenuModule["default"].itemName, " home.itemName")}>Watch</div>
                                                <div className={"".concat(_MenuModule["default"].subMenuItem, " ").concat(_MenuModule["default"].maxIconWidth, " tv material-icons")}>tv</div>
                                            </span>
                                        </_link.default> : c.type === 'img'
        //     ? <img src={props.cdn.static ? `${props.cdn.static}/${c.src}` : ''} alt={c.name} style={{ width: c.width, height: c.height }} />
        ? <div className={"img_control menuLinkSelector ".concat(c.className)} style={{
          width: c.width ? c.width + 'px' : '40px',
          height: c.height ? c.height + 'px' : '20px',
          alignSelf: 'center'
        }} key={i}>
                                        {c.href ? <_link.default href={c.href} onClick={(_props$handleToggleMe3 = props.handleToggleMenuOff) !== null && _props$handleToggleMe3 !== void 0 ? _props$handleToggleMe3 : null}>
                                                    <_image.default loader={function () {
              if (c.src.match(/greythumb/) || c.local) {
                return "".concat(c.src);
              } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
                return "".concat(props.cdn["static"], "/").concat(c.src);
              }
            }} src={c.src && props.cdn && props.cdn["static"] ? c.src : 'img/default/greythumb.jpg'} alt={c.name ? c.name : ""} width={(_c$width = c.width) !== null && _c$width !== void 0 ? _c$width : '80'} height={(_c$height = c.height) !== null && _c$height !== void 0 ? _c$height : '40'} layout="responsive" />
                                                </_link.default> : <_image.default loader={function () {
            if (c.src.match(/greythumb/) || c.local) {
              return "".concat(c.src);
            } else if (props.cdn && props.cdn["static"] && props.cdn["static"].length > 0) {
              return "".concat(props.cdn["static"], "/").concat(c.src);
            }
          }} src={c.src && props.cdn && props.cdn["static"] ? c.src : 'img/default/greythumb.jpg'} alt={c.name ? c.name : ""} width={(_c$width2 = c.width) !== null && _c$width2 !== void 0 ? _c$width2 : '80'} height={(_c$height2 = c.height) !== null && _c$height2 !== void 0 ? _c$height2 : '40'} layout="responsive" />}
                                    </div> : c.type === 'link' ? <_link.default href={c.href} className={"".concat(_MenuModule["default"].menuLink, " menuLinkSelector ").concat(c.className)} style={{
          alignSelf: 'center'
        }} key={i} onClick={(_props$handleToggleMe4 = props.handleToggleMenuOff) !== null && _props$handleToggleMe4 !== void 0 ? _props$handleToggleMe4 : null}>
                                            <span href={c.href} className={"".concat(_MenuModule["default"].subMenuItemContainer, " darkModeHoverEnforce")} alt={c.name} title={c.name}>
                                                <div className={"".concat(_MenuModule["default"].itemName, " home.itemName")}>{c.name}</div>
                                                <div className={"".concat(_MenuModule["default"].subMenuItem, " ").concat(_MenuModule["default"].maxIconWidth, " material-icons")}>{c.muiIcon}</div>
                                            </span>
                                        </_link.default> : null : null}
                        </_react.default.Fragment>;
    }) : null}
            {/* <Link href="/">
                <a href="/" className={`${menuStyle.subMenuItemContainer} ${home.darkModeHoverEnforce}`} alt="Orders" title="Orders">
                    <div className={`${menuStyle.itemName} ${home.itemName}`}>Orders</div>
                    <div className={`${menuStyle.subMenuItem} inventory material-icons`}>inventory</div>
                </a>
             </Link> */}
            {/* <Link href="/">
                <a href="/" className={`${menuStyle.subMenuItemContainer} ${home.darkModeHoverEnforce}`} alt="Messages" title="Messages">
                    <div className={`${menuStyle.itemName} ${home.itemName}`}>Messages</div>
                    <div className={`${menuStyle.subMenuItem} messages material-icons`}>mail</div>
                </a>
             </Link> */}
            {/* <Link href="/upload">
                <span href="/upload" className={`${menuStyle.subMenuItemContainer} darkModeHoverEnforce`} alt="Upload" title="Upload">
                    <div className={`${menuStyle.itemName} itemName`}>Upload</div>
                    <div className={`${menuStyle.subMenuItem} post material-icons`}>publish</div>
                </span>
             </Link> */}
        </div>;
};
var _default = exports["default"] = SubMenu;