function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import SubMenu from './SubMenu.js';
// import brand from '../../styles/Brand.module.scss';
import menuStyle from './Menu.module.scss';
import Link from 'next/link';
import { checkSignedInAndPrompt, logout } from '/modules/utility/onboarding/SignIn.js';
import { addToCart, calculateTotal, performPurchase, updateCart } from '/modules/utility/ecommerce/ecommerce.js';
import { CartInternal } from '../ecommerce/cart/';
import { Notifications } from '../notifications';
import { Help } from '../help/index.js';
import Tooltip from '@mui/material/Tooltip';
import { SurveyContainer } from '../survey/index.js';
import { DropMenu } from '/layout/index.js';
const Module = props => {
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [pageError, setPageError] = React.useState(null);
  const [validCc, setValidCc] = React.useState(true);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const handleClearError = React.useCallback(e => {
    setPageError(null);
  });
  const handleToggleSettings = React.useCallback(e => {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'main_settings');
    }
  }, [props._openMenu]);
  const handleLogout = React.useCallback(e => {
    logout();
    props._toggleSingleOpenMenu(e, 'main_settings');
    setTimeout(() => {
      props._LocalEventEmitter.dispatch('showSignIn', {});
    }, 4000); // Give time to logout before firing event
  });
  const fireShowSignIn = React.useCallback(e => {
    props._toggleSingleOpenMenu(e, 'main_settings');
    checkSignedInAndPrompt();
  });
  const handleToggleCart = React.useCallback(e => {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'cart');
    }
  });
  const handleToggleNotifications = React.useCallback(e => {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'notifications');
    }
  });

  /**
   * Ensures cart is open after interaction if menuConfig.menuOpenAfterCartInteraction is set to true
   */
  const passOveride = item => {
    if (props.menuConfig.menuOpenAfterCartInteraction) {
      props._toggleSingleOpenMenu(null, item ?? 'cart', true);
    }
  };
  const handleUpdateQuantity = React.useCallback(async e => {
    try {
      console.log(e.currentTarget.getAttribute, fetchBusy);
      if (!fetchBusy && e && e.currentTarget && e.currentTarget.getAttribute) {
        setFetchBusy(true);
        const style = e.currentTarget.getAttribute('styleId');
        const option = e.currentTarget.getAttribute('optionId');
        const quantity = e.currentTarget.getAttribute('quantity');
        const productId = e.currentTarget.getAttribute('productId');
        const options = {};
        if (Number(e.currentTarget.value) < Number(quantity)) {
          options.decrement = true;
        }
        let product;
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (productId && cart && cart.items) {
          product = cart.items.find(item => item.product.id === productId);
        }
        if (product) {
          const res = await addToCart(props.apiUrl, props.domainKey, props._loggedIn, cart, product.product, {
            style: style,
            option: option
          }, setFetchBusy, options);
          if (res) {
            if (res.status === 'success') {
              updateCart(cart, res.cart);
              if (res.cart && res.cart.items) {
                const returnProduct = res.cart.items.find(item => item.product.id === productId);
                if (returnProduct) {
                  e.target.value = returnProduct.quantity;
                }
              }
            }
          }
        }
        setFetchBusy(false);
      }
    } catch (err) {
      console.log(err);
      setFetchBusy(false);
    }
  });
  const cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) : null;
  const handlePerformPurchase = React.useCallback(async e => {
    try {
      if (!fetchBusy) {
        setFetchBusy(true);
        setPageError(null);
        console.log(cart);
        const snapshot = calculateTotal(cart, null, {
          object: true
        });
        console.log('snapshot', snapshot);
        const res = await performPurchase(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
          snapshot: snapshot
        });
        if (res) {
          console.log(res);
          if (res.status === 'success') {
            // if (res.data && res.data.cart) {
            //     updateCart(props._cart, res.data.cart)
            // }
            console.log('Purchase Success', res);
          }
        } else {
          setPageError({
            message: 'Purchase failed',
            placement: 'purchase'
          });
        }
        setFetchBusy(false);
      }
    } catch (err) {
      setFetchBusy(false);
    }
  });
  const fireShareFeedback = React.useCallback(e => {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'feedback');
    }
  });
  const fireShareBug = React.useCallback(e => {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'bugReport');
    }
  });
  const fireHelp = React.useCallback(e => {
    if (helpOpen) {
      setHelpOpen(false);
      return;
    }
    setHelpOpen(true);
    return;
  });
  const handleToggleMenuOff = React.useCallback(e => {
    props._toggleSingleOpenMenu(null, {}, true);
    setHelpOpen(false);
  });
  const resolvedCountry = props?.regionsData && props?._loggedIn?.meta?.locationMeta?.country && props.regionsData[props._loggedIn.meta.locationMeta.country] && props.regionsData[props._loggedIn.meta.locationMeta.country].name ? props.regionsData[props._loggedIn.meta.locationMeta.country].name : props?._loggedIn?.meta?.locationMeta?.country ?? null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, props?.useMenu ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100 + "%",
      height: props?.menuConfig?.height ? props.menuConfig.height + 'px' : '',
      padding: props?.menuConfig?.padding ? props.menuConfig.padding : ''
    },
    className: `leadMenuContainer ${menuStyle.container} darkModeEnforce Menu_LeadContainer ${props.className}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 0,
      paddingTop: 0,
      maxHeight: '100%'
    },
    className: `margin1600 menuContainer`
  }, /*#__PURE__*/React.createElement(SubMenu, _extends({}, props, {
    handleToggleMenuOff: handleToggleMenuOff
  })), /*#__PURE__*/React.createElement("ul", {
    className: !props._loggedIn ? `${menuStyle.menu} ${menuStyle.menuClosed}` : menuStyle.menu
  }, props?.menuConfig?.right ? props.menuConfig.right.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, c.type ? c.type === 'user' ? /*#__PURE__*/React.createElement(DropMenu, _extends({}, props, {
    resolvedCountry: resolvedCountry,
    handleToggleSettings: handleToggleSettings,
    handleLogout: handleLogout,
    fireHelp: fireHelp,
    fireShareFeedback: fireShareFeedback,
    fireShareBug: fireShareBug,
    fireShowSignIn: fireShowSignIn
  })) : c.type === 'cart' ? /*#__PURE__*/React.createElement("div", {
    className: `${c.className} ${c.smallUntilHover ? `${menuStyle.smallUntilHover}` : null}`
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Cart",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("li", {
    className: `${menuStyle.menuLink} darkMenuLink menuLinkSelector`,
    onClick: handleToggleCart,
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `${menuStyle.menuLinkText}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuText}`
  }, "Cart"), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} cart material-icons`
  }, "shopping_cart")), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} cart material-icons`
  }, "shopping_cart")))) : c.type === 'stream' ? /*#__PURE__*/React.createElement(Link, {
    href: c.href,
    className: `menuLinkSelector ${c.className} ${c.smallUntilHover ? `${menuStyle.smallUntilHover}` : null}`,
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Livestream Now",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("li", {
    className: `${menuStyle.menuLink} darkMenuLink menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    },
    onClick: handleToggleMenuOff
  }, /*#__PURE__*/React.createElement("span", {
    className: `${menuStyle.menuLinkText}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuText}`
  }, "Stream"), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} live_tv material-icons`
  }, "live_tv")), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} live_tv material-icons`
  }, "live_tv")))) : c.type === 'notifications' ? /*#__PURE__*/React.createElement("div", {
    className: `menuLinkSelector ${c.className} ${c.smallUntilHover ? `${menuStyle.smallUntilHover}` : null}`,
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Notifications",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("li", {
    className: `${menuStyle.menuLink} darkMenuLink menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    },
    onClick: handleToggleNotifications
  }, /*#__PURE__*/React.createElement("span", {
    className: `${menuStyle.menuLinkText}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuText}`
  }, "Notifications"), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} live_tv material-icons`
  }, "notifications")), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} live_tv material-icons`
  }, "notifications")))) : c.type === 'link' ? /*#__PURE__*/React.createElement(Link, {
    href: c.href,
    className: `menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("li", {
    className: `${menuStyle.menuLink} darkMenuLink menuLinkSelector ${c.className}`,
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `${menuStyle.menuLinkText}`
  }, /*#__PURE__*/React.createElement("div", null, c.name)), /*#__PURE__*/React.createElement("div", {
    className: `${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} material-icons`
  }, c.name))) : null : null)) : null)), /*#__PURE__*/React.createElement(Help, _extends({}, props, {
    open: helpOpen,
    setHelpOpen: setHelpOpen
  })), /*#__PURE__*/React.createElement(CartInternal, _extends({}, props, {
    passOveride: passOveride,
    forceShowCc: props?.paymentConfig?.forceShowCc
  })), /*#__PURE__*/React.createElement(Notifications, _extends({}, props, {
    passOveride: passOveride,
    forceShowCc: props?.paymentConfig?.forceShowCc
  })), /*#__PURE__*/React.createElement(SurveyContainer, _extends({}, props, {
    handleName: "feedback",
    survey: props?.feedbackConfig?.surveyData
  })), /*#__PURE__*/React.createElement(SurveyContainer, _extends({}, props, {
    handleName: "bugReport",
    survey: props?.feedbackConfig?.bugReportData
  }))) : null);
};
export default Module;