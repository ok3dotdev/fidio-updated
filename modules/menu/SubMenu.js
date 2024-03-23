var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuStyle from './Menu.module.scss';
const SubMenu = props => {
  let {
    loggedIn,
    ...rest
  } = props;
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: `${props._loggedIn ? `${menuStyle.subMenu}` : `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${props.className}`
  }, void 0, props.menuConfig && props.menuConfig.left ? props.menuConfig.left.map((c, i) => /*#__PURE__*/_jsx(React.Fragment, {}, i, c.type ? c.type === 'home' ? /*#__PURE__*/_jsx(Link, {
    href: "/",
    style: {
      alignSelf: 'center'
    },
    className: `menuLinkSelector ${c.className}`,
    onClick: props.handleToggleMenuOff ?? null
  }, i, /*#__PURE__*/_jsx("span", {
    href: "/",
    className: `${menuStyle.subMenuItemContainer} darkModeHoverEnforce`,
    alt: "Home",
    title: "Home"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.itemName} home.itemName`
  }, void 0, "Home"), /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} home material-icons`
  }, void 0, "home"))) : c.type === 'watch' ? /*#__PURE__*/_jsx(Link, {
    href: "/w",
    className: `${menuStyle.menuLink} menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    },
    onClick: props.handleToggleMenuOff ?? null
  }, i, /*#__PURE__*/_jsx("span", {
    href: "/w",
    className: `${menuStyle.subMenuItemContainer} darkModeHoverEnforce`,
    alt: "Watch",
    title: "Watch"
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.itemName} home.itemName`
  }, void 0, "Watch"), /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} tv material-icons`
  }, void 0, "tv"))) : c.type === 'img'
  //     ? <img src={props.cdn.static ? `${props.cdn.static}/${c.src}` : ''} alt={c.name} style={{ width: c.width, height: c.height }} />
  ? /*#__PURE__*/_jsx("div", {
    className: `img_control menuLinkSelector ${c.className}`,
    style: {
      width: c.width ? c.width + 'px' : '40px',
      height: c.height ? c.height + 'px' : '20px',
      alignSelf: 'center'
    }
  }, i, c.href ? /*#__PURE__*/_jsx(Link, {
    href: c.href,
    onClick: props.handleToggleMenuOff ?? null
  }, void 0, /*#__PURE__*/_jsx(Image, {
    loader: () => {
      if (c.src.match(/greythumb/) || c.local) {
        return `${c.src}`;
      } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
        return `${props.cdn.static}/${c.src}`;
      }
    },
    src: c.src && props.cdn && props.cdn.static ? c.src : 'img/default/greythumb.jpg',
    alt: c.name ? c.name : "",
    width: c.width ?? '80',
    height: c.height ?? '40',
    layout: "responsive"
  })) : /*#__PURE__*/_jsx(Image, {
    loader: () => {
      if (c.src.match(/greythumb/) || c.local) {
        return `${c.src}`;
      } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
        return `${props.cdn.static}/${c.src}`;
      }
    },
    src: c.src && props.cdn && props.cdn.static ? c.src : 'img/default/greythumb.jpg',
    alt: c.name ? c.name : "",
    width: c.width ?? '80',
    height: c.height ?? '40',
    layout: "responsive"
  })) : c.type === 'link' ? /*#__PURE__*/_jsx(Link, {
    href: c.href,
    className: `${menuStyle.menuLink} menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    },
    onClick: props.handleToggleMenuOff ?? null
  }, i, /*#__PURE__*/_jsx("span", {
    href: c.href,
    className: `${menuStyle.subMenuItemContainer} darkModeHoverEnforce`,
    alt: c.name,
    title: c.name
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.itemName} home.itemName`
  }, void 0, c.name), /*#__PURE__*/_jsx("div", {
    className: `${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} material-icons`
  }, void 0, c.muiIcon))) : null : null)) : null);
};
export default SubMenu;