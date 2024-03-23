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
  return /*#__PURE__*/React.createElement("div", {
    className: `${props._loggedIn ? `${menuStyle.subMenu}` : `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${props.className}`
  }, props.menuConfig && props.menuConfig.left ? props.menuConfig.left.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, c.type ? c.type === 'home' ? /*#__PURE__*/React.createElement(Link, {
    href: "/",
    style: {
      alignSelf: 'center'
    },
    className: `menuLinkSelector ${c.className}`,
    key: i,
    onClick: props.handleToggleMenuOff ?? null
  }, /*#__PURE__*/React.createElement("span", {
    href: "/",
    className: `${menuStyle.subMenuItemContainer} darkModeHoverEnforce`,
    alt: "Home",
    title: "Home"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.itemName} home.itemName`
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} home material-icons`
  }, "home"))) : c.type === 'watch' ? /*#__PURE__*/React.createElement(Link, {
    href: "/w",
    className: `${menuStyle.menuLink} menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    },
    key: i,
    onClick: props.handleToggleMenuOff ?? null
  }, /*#__PURE__*/React.createElement("span", {
    href: "/w",
    className: `${menuStyle.subMenuItemContainer} darkModeHoverEnforce`,
    alt: "Watch",
    title: "Watch"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.itemName} home.itemName`
  }, "Watch"), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} tv material-icons`
  }, "tv"))) : c.type === 'img'
  //     ? <img src={props.cdn.static ? `${props.cdn.static}/${c.src}` : ''} alt={c.name} style={{ width: c.width, height: c.height }} />
  ? /*#__PURE__*/React.createElement("div", {
    className: `img_control menuLinkSelector ${c.className}`,
    style: {
      width: c.width ? c.width + 'px' : '40px',
      height: c.height ? c.height + 'px' : '20px',
      alignSelf: 'center'
    },
    key: i
  }, c.href ? /*#__PURE__*/React.createElement(Link, {
    href: c.href,
    onClick: props.handleToggleMenuOff ?? null
  }, /*#__PURE__*/React.createElement(Image, {
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
  })) : /*#__PURE__*/React.createElement(Image, {
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
  })) : c.type === 'link' ? /*#__PURE__*/React.createElement(Link, {
    href: c.href,
    className: `${menuStyle.menuLink} menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    },
    key: i,
    onClick: props.handleToggleMenuOff ?? null
  }, /*#__PURE__*/React.createElement("span", {
    href: c.href,
    className: `${menuStyle.subMenuItemContainer} darkModeHoverEnforce`,
    alt: c.name,
    title: c.name
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.itemName} home.itemName`
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} material-icons`
  }, c.muiIcon))) : null : null)) : null);
};
export default SubMenu;