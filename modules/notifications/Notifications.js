var _div;
import React from 'react';
import Link from 'next/link';
import Styles from './Notifications.module.scss';
import PresentationStyles from '../presentation/Presentation.module.scss';
import { fireGlobalEvent } from '../utility/utility';
import { resolveMainLink } from '../presentation/utility';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [pageError, setPageError] = React.useState(null);
  const [notificationsFeed, setNotificationsFeed] = React.useState(null);
  const [cartMessages, setCartMessages] = React.useState([]);
  const [tempOveride, setTempOveride] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const container = React.useRef();
  const closeTimeoutRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      container.current.addEventListener('mouseover', mouseOverContainer);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const mouseOverContainer = () => {
    props._LocalEventEmitter.dispatch('notification', {
      dispatch: 'mouseOver'
    });
  };
  props._LocalEventEmitter.unsubscribe('notification');
  props._LocalEventEmitter.subscribe('notification', e => {
    let temp = [...cartMessages];
    if (e) {
      console.log('Notification Update', e);
      if (e.dispatch === 'notification') {
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride('notifications');
        }
        setTimeout(() => {
          // Only keep override open for very short period of time. Sub 2 seconds
          setTempOveride(false);
        }, 1500);
      } else if (e.dispatch === 'mouseOver') {
        console.log('Did mouse over', props, closing);
        if (props?._openMenu?.currentMenu === 'notifications') {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, 'notifications', true);
          }
        }
      }
    }
  });
  React.useEffect(() => {
    if ((props?._openMenu?.currentMenu === 'notifications' || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef?.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if (props?._openMenu?.currentMenu !== 'notifications' && !tempOveride && menuOpen) {
      // We track open state internally because we want to animate the cart closing as opposed to destroying it immediately
      setClosing(true);
      const r = setTimeout(() => {
        setClosing(false);
        setMenuOpen(false);
        closeTimeoutRef.current = null;
      }, 500);
      closeTimeoutRef.current = r;
    }
  }, [props?._openMenu?.currentMenu, closing, menuOpen, closeTimeoutRef?.current]);
  React.useEffect(() => {
    if (props?.notificationsData) {
      setNotificationsFeed(props.notificationsData);
    }
  }, [props?.notificationsData]);
  const handleClose = React.useCallback(e => {
    setClosing(true);
    props._toggleSingleOpenMenu(null, 'notifications', false);
  });
  const handleFireGlobalEvent = React.useCallback(async e => {
    if (e?.currentTarget?.getAttribute('ctaAfter')) {
      e.currentTarget.innerHTML = e.currentTarget.getAttribute('ctaAfter');
    }
    fireGlobalEvent(e, props._LocalEventEmitter);
  });
  const resolveOrderImg = m => {
    if (m && props?.cdn?.static) {
      if (m?.product?.images?.length > 0) {
        const useImg = m.product.images.find(n => n.leadImg ?? false);
        if (useImg) {
          return `${props.cdn.static}/${useImg.name}`;
        }
        return `${props.cdn.static}/${m.product.images[0].name}`;
      }
    }
    return '';
  };

  // TODO, store locally all notifications user has viewed
  // Show Notifications that user has not viewed by default should be unviewed
  // Show red notif icon to show user has new notifications after having checked for all seen notifications
  // Chat in notifications
  // link in notifications

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `Misc_Container Misc_Container_Bigger ${props.className} ${props.open || menuOpen && !closing ? 'Misc_Container_Visible' : ''}`,
    ref: container,
    style: {
      top: props?.menuConfig?.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : ''
    }
  }, props.open || menuOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "Misc_Internal_Container",
    style: {
      paddingTop: '.5rem',
      paddingBottom: '.5rem'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    className: `Misc_Label`,
    style: {
      marginTop: 0
    }
  }, "Notifications"), /*#__PURE__*/React.createElement("div", null, notificationsFeed?.notifications?.map ? notificationsFeed.notifications.map(m => /*#__PURE__*/React.createElement("div", {
    className: `${Styles.notifContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.notifInternalContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.detailContainer}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.author} Misc_P`
  }, m?.meta?.fromAdmin && props?.siteTitle ? props.siteTitle : null), m?.meta?.verb ? /*#__PURE__*/React.createElement("span", {
    className: "Misc_P"
  }, m.meta.verb) : null, /*#__PURE__*/React.createElement("div", {
    className: "Misc_P"
  }, m?.meta?.quotes ? '"' : '', m?.meta?.message ?? null, m?.meta?.quotes ? '"' : '')), /*#__PURE__*/React.createElement("div", null, m?.meta?.image && props?.cdn?.static ? /*#__PURE__*/React.createElement("div", {
    className: `${Styles.icon}`,
    style: {
      background: `url(${props.cdn.static}/${m.meta.image})`,
      backgroundSize: 'contain'
    }
  }) : m?.meta?.icon ? /*#__PURE__*/React.createElement("div", {
    className: `${Styles.icon}`,
    style: {
      background: `url(${props.cdn.static}/${m.meta.icon})`,
      backgroundSize: 'contain'
    }
  }) : null)), m?.product ? /*#__PURE__*/React.createElement("div", {
    className: `${Styles.notifBox} ${Styles.notifProduct} flex gap-p5`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.notifImageContainer}`,
    style: {
      backgroundImage: resolveOrderImg(m) ? `url(${resolveOrderImg(m)})` : null
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: 'img/default/greythumb_product.jpg',
    className: "Product_img",
    style: {
      width: '75px',
      maxHeight: '60px',
      opacity: resolveOrderImg(m) ? 0 : 1
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    href: resolveMainLink(m?.product),
    onClick: handleClose
  }, /*#__PURE__*/React.createElement("div", {
    className: `${Styles.productName} ${props?.classes?.productName ?? ''}`,
    style: {
      fontSize: '.9rem',
      fontWeight: '600'
    }
  }, m?.product?.name)), /*#__PURE__*/React.createElement("button", {
    className: `${PresentationStyles.CtaButton} ${props.ctaClassName}`,
    onClick: handleFireGlobalEvent,
    action: 'add_to_cart',
    item: m?.product?.id,
    selectedstyle: m?.meta?.productStyle,
    currentoption: m?.meta?.productOption,
    ctaAfter: 'Added To Cart'
  }, "Add To Cart"))) : null)) : _div || (_div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "Misc_P"
  }, "All Caught Up")))))) : null));
};
export default Module;