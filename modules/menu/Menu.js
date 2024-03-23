import React from 'react';
import SubMenu from './SubMenu.js';
// import brand from '../../styles/Brand.module.scss';
import menuStyle from './Menu.module.scss';
import Link from 'next/link';
import { checkSignedInAndPrompt, logout } from '/modules/utility/onboarding/SignIn.js';
import { addToCart, calculateTotal, performPurchase, updateCart } from '/modules/utility/ecommerce/ecommerce.js';
import { Cart } from '../ecommerce/cart/';
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
  return <React.Fragment>
            {props?.useMenu ? <div style={{
      width: 100 + "%",
      height: props?.menuConfig?.height ? props.menuConfig.height + 'px' : '',
      padding: props?.menuConfig?.padding ? props.menuConfig.padding : ''
    }} className={`leadMenuContainer ${menuStyle.container} darkModeEnforce Menu_LeadContainer ${props.className}`}>
                        <div style={{
        paddingBottom: 0,
        paddingTop: 0,
        maxHeight: '100%'
      }} className={`margin1600 menuContainer`}>
                            <SubMenu {...props} handleToggleMenuOff={handleToggleMenuOff}></SubMenu>
                            <ul className={!props._loggedIn ? `${menuStyle.menu} ${menuStyle.menuClosed}` : menuStyle.menu}>
                                {props?.menuConfig?.right ? props.menuConfig.right.map((c, i) => <React.Fragment key={i}>
                                                {c.type ? c.type === 'user' ? <DropMenu {...props} resolvedCountry={resolvedCountry} handleToggleSettings={handleToggleSettings} handleLogout={handleLogout} fireHelp={fireHelp} fireShareFeedback={fireShareFeedback} fireShareBug={fireShareBug} fireShowSignIn={fireShowSignIn} /> : c.type === 'cart' ? <div className={`${c.className} ${c.smallUntilHover ? `${menuStyle.smallUntilHover}` : null}`}>
                                                                <Tooltip title='Cart' placement='bottom'>
                                                                    <li className={`${menuStyle.menuLink} darkMenuLink menuLinkSelector`} onClick={handleToggleCart} style={{
                  alignSelf: 'center'
                }}>
                                                                        <span className={`${menuStyle.menuLinkText}`}>
                                                                            <div className={`${menuStyle.menuText}`}>Cart</div>
                                                                            <div className={`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} cart material-icons`}>shopping_cart</div>
                                                                        </span>
                                                                        <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} cart material-icons`}>shopping_cart</div>
                                                                    </li>
                                                                </Tooltip>
                                                            </div> : c.type === 'stream' ? <Link href={c.href} className={`menuLinkSelector ${c.className} ${c.smallUntilHover ? `${menuStyle.smallUntilHover}` : null}`} style={{
              alignSelf: 'center'
            }}>
                                                                    <Tooltip title='Livestream Now' placement='bottom'>
                                                                        <li className={`${menuStyle.menuLink} darkMenuLink menuLinkSelector ${c.className}`} style={{
                  alignSelf: 'center'
                }} onClick={handleToggleMenuOff}>
                                                                            <span className={`${menuStyle.menuLinkText}`}>
                                                                                <div className={`${menuStyle.menuText}`}>Stream</div>
                                                                                <div className={`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} live_tv material-icons`}>live_tv</div>
                                                                            </span>
                                                                            <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} live_tv material-icons`}>live_tv</div>
                                                                        </li>
                                                                    </Tooltip>
                                                                </Link> : c.type === 'notifications' ? <div className={`menuLinkSelector ${c.className} ${c.smallUntilHover ? `${menuStyle.smallUntilHover}` : null}`} style={{
              alignSelf: 'center'
            }}>
                                                                <Tooltip title='Notifications' placement='bottom'>
                                                                    <li className={`${menuStyle.menuLink} darkMenuLink menuLinkSelector ${c.className}`} style={{
                  alignSelf: 'center'
                }} onClick={handleToggleNotifications}>
                                                                        <span className={`${menuStyle.menuLinkText}`}>
                                                                            <div className={`${menuStyle.menuText}`}>Notifications</div>
                                                                            <div className={`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} live_tv material-icons`}>notifications</div>
                                                                        </span>
                                                                        <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} live_tv material-icons`}>notifications</div>
                                                                    </li>
                                                                </Tooltip>
                                                            </div> : c.type === 'link' ? <Link href={c.href} className={`menuLinkSelector ${c.className}`} style={{
              alignSelf: 'center'
            }}>
                                                                <li className={`${menuStyle.menuLink} darkMenuLink menuLinkSelector ${c.className}`} style={{
                alignSelf: 'center'
              }}>
                                                                    <span className={`${menuStyle.menuLinkText}`}>
                                                                        <div>{c.name}</div>
                                                                    </span>
                                                                    <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} material-icons`}>{c.name}</div>
                                                                </li>
                                                            </Link> : null : null}
                                            </React.Fragment>) : null}
                            </ul>
                        </div>
                        <Help {...props} open={helpOpen} setHelpOpen={setHelpOpen}></Help>
                        <Cart {...props} passOveride={passOveride} forceShowCc={props?.paymentConfig?.forceShowCc} />
                        <Notifications {...props} passOveride={passOveride} forceShowCc={props?.paymentConfig?.forceShowCc} />
                        <SurveyContainer {...props} handleName='feedback' survey={props?.feedbackConfig?.surveyData} />
                        <SurveyContainer {...props} handleName='bugReport' survey={props?.feedbackConfig?.bugReportData} />
                    </div> : null}
        </React.Fragment>;
};
export default Module;