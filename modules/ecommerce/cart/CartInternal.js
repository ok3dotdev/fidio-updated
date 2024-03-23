function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { CreditCard } from '../../payment/index.js';
import { logout } from '/modules/utility/onboarding/SignIn.js';
import { Cart } from '/layout/index.js';
import { addToCart, calculateTotal, performPurchase, resolveCurrentStyle, resolveCurrentOption, resolveMoneyFormat, resolveRegionBasedPrice, updateCart, resolveImg } from '/modules/utility/ecommerce/ecommerce.js';
import Inventory from '@mui/icons-material/Inventory';
import { v4 as uuidv4 } from 'uuid';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [pageError, setPageError] = React.useState(null);
  const [validCc, setValidCc] = React.useState(true);
  const [cartMessages, setCartMessages] = React.useState([]);
  const [tempOveride, setTempOveride] = React.useState(false);
  const [showContent, setShowContent] = React.useState(true);
  const [solution, setSolution] = React.useState(null);
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
    props._LocalEventEmitter.dispatch('cart_update', {
      dispatch: 'mouseOver'
    });
  };
  const handleToggleSettings = React.useCallback(e => {
    if (e && props && props._toggleSingleOpenMenu) {
      props._toggleSingleOpenMenu(e, 'main_settings');
    }
  }, [props._openMenu]);
  props._LocalEventEmitter.unsubscribe('cart_update');
  props._LocalEventEmitter.subscribe('cart_update', e => {
    let temp = [...cartMessages];
    if (e) {
      console.log('Cart Update', e);
      if (e.dispatch === 'purchase') {
        temp = temp.filter(m => m && m.type !== 'purchase');
        const domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
        temp.push({
          message: 'Purchase success',
          href: `${domain}/r?o=${e.id}`,
          hrefCta: 'View your Receipt Here',
          type: 'purchase'
        });
        setCartMessages(temp);
      } else if (e.dispatch === 'flashCart') {
        // Attempts to flash cart showing cart based on recent interaction
        setTempOveride(true);
        if (props.passOveride) {
          props.passOveride('cart');
        }
        setTimeout(() => {
          // Only keep override open for very short period of time. Sub 2 seconds
          setTempOveride(false);
        }, 1500);
      } else if (e.dispatch === 'purchaseComplete') {
        if (e.type === 'paystack') {
          console.log('paystack purchase', e);
          const r = setTimeout(() => {
            setFetchBusy(false);
          }, 20000);
          completePurchase(e.data.snapshot, e.data.cart, r, e.data);
        }
      } else if (e.dispatch === 'mouseOver') {
        console.log('Did mouse over', props, closing);
        if (props?._openMenu?.currentMenu === 'cart') {
          if (!closing && props._toggleSingleOpenMenu) {
            props._toggleSingleOpenMenu(null, 'cart', true);
          }
        }
      }
    }
  });
  const handleClearError = React.useCallback(e => {
    setPageError(null);
  });
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
  const completePurchase = async (snapshot, cart, r, extra = {}) => {
    const res = await performPurchase(props.apiUrl, props.domainKey, props._loggedIn, cart, setFetchBusy, {
      snapshot: snapshot,
      extra: extra
    });
    console.log(res);
    if (res) {
      if (r) {
        clearTimeout(r);
      }
      setFetchBusy(false);
      console.log(res);
      if (res.status === 'success') {
        if (res.data && res.data.cart) {
          updateCart(props._cart, res.data.cart);
        }
        let temp = [...cartMessages];
        temp = temp.filter(m => m && m.type !== 'purchase');
        const domain = props.devLocal ? props.devAddress : 'https://' + props.domainUrl;
        temp.push({
          message: 'Purchase success',
          href: `${domain}/r?o=${res.data.order.id}`,
          hrefCta: 'View your Receipt Here',
          type: 'purchase'
        });
        setCartMessages(temp);
        console.log('Purchase Success', res);
      } else {
        setPageError({
          message: 'Purchase failed',
          placement: 'purchase'
        });
      }
    } else {
      if (r) {
        clearTimeout(r);
      }
      setFetchBusy(false);
      setPageError({
        message: 'Purchase failed',
        placement: 'purchase'
      });
    }
  };
  const useCartOfCurrency = React.useMemo(() => {
    const useFirstItem = cart?.items && cart.items[0];
    if (useFirstItem?.product?.styles) {
      const resolveStyleObject = useFirstItem.product.styles.find(m => m.sid === useFirstItem.style);
      if (resolveStyleObject) {
        const regionBasedPrice = resolveRegionBasedPrice(props, resolveStyleObject);
        if (regionBasedPrice) {
          const remaining = [];
          const o = {
            items: cart.items.filter(m => {
              const useItemStyleObject = m.product.styles.find(n => n.sid === m.style);
              if (useItemStyleObject) {
                const data = resolveRegionBasedPrice(props, useItemStyleObject);
                if (data && data.currency === regionBasedPrice.currency) {
                  return true;
                }
              }
              remaining.push(m);
              return false;
            }),
            currency: regionBasedPrice,
            user: cart.user
          };
          o.remaining = remaining;
          return o;
        }
      }
    }
  }, [props, cart]);
  const handlePerformPurchase = React.useCallback(async e => {
    try {
      if (!fetchBusy) {
        setFetchBusy(true);
        const r = setTimeout(() => {
          setFetchBusy(false);
        }, 20000);
        setPageError(null);
        console.log(useCartOfCurrency);
        const snapshot = calculateTotal(useCartOfCurrency, null, {
          region: useCartOfCurrency?.currency ?? null,
          object: true
        }, props);
        console.log('snapshot', snapshot, solution);
        if (solution) {
          if (solution.payment === 'stripe') {
            completePurchase(snapshot, useCartOfCurrency, r, {
              type: 'stripe'
            });
          } else if (solution.payment === 'paystack' && PaystackPop && props?.paymentConfig?.keys?.paystack && props?._loggedIn?.email) {
            const transactionRef = uuidv4();
            clearTimeout(r);
            if (useCartOfCurrency?.currency?.currency) {
              const handler = await PaystackPop.setup({
                key: props.paymentConfig.keys.paystack,
                // Replace with your public key
                email: props._loggedIn.email,
                amount: snapshot.total * 100,
                // the amount value is multiplied by 100 to convert to the lowest currency unit
                currency: useCartOfCurrency.currency.currency,
                // Use GHS for Ghana Cedis or USD for US Dollars
                ref: transactionRef,
                // Replace with a reference you generated
                callback: function (response) {
                  // Success payment
                  props._LocalEventEmitter.dispatch('cart_update', {
                    // Update Server with Purchase transaction. Assume payment received by Paystack approval
                    dispatch: 'purchaseComplete',
                    type: 'paystack',
                    data: {
                      cart: useCartOfCurrency,
                      paystackResponse: response,
                      snapshot: snapshot,
                      status: 'payment_complete',
                      transactionRef: transactionRef,
                      type: 'paystack'
                    }
                  });
                },
                onClose: function () {
                  // Failed payment
                  setFetchBusy(false);
                  setPageError({
                    message: 'Purchase failed',
                    placement: 'purchase'
                  });
                }
              });
              handler.openIframe();
            }
          }
        } else {
          setFetchBusy(false);
          setPageError({
            message: 'Purchase currently not supported in your Country',
            placement: 'purchase'
          });
        }
      }
    } catch (err) {
      setFetchBusy(false);
    }
  });
  React.useEffect(() => {
    if ((props?._openMenu?.currentMenu === 'cart' || tempOveride) && !menuOpen) {
      setMenuOpen(true);
      setClosing(false);
      if (closeTimeoutRef?.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    } else if (props?._openMenu?.currentMenu !== 'cart' && !tempOveride && menuOpen) {
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
  const total = calculateTotal(useCartOfCurrency, null, {
    region: useCartOfCurrency?.currency ?? null,
    object: true
  }, props);
  const free = total && Object.prototype.hasOwnProperty.call(total, 'total') && total.total === 0 && cart?.items?.length > 0;

  // console.log('Cart', cart, total, validCc, useCartOfCurrency)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cart, _extends({}, props, {
    fetchBusy: fetchBusy,
    menuOpen: menuOpen,
    closing: closing,
    cart: cart,
    useCartOfCurrency: useCartOfCurrency,
    handleUpdateQuantity: handleUpdateQuantity,
    handlePerformPurchase: handlePerformPurchase,
    handleClearError: handleClearError,
    pageError: pageError,
    free: free,
    validCc: validCc,
    setValidCc: setValidCc,
    cartMessages: cartMessages,
    handleToggleSettings: handleToggleSettings,
    showContent: showContent,
    setShowContent: setShowContent,
    setSolution: setSolution,
    ccChildren: props?.ccChildren,
    container: container
  })));
};
export default Module;