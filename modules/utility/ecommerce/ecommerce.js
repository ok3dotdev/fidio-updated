import { fetchPost } from '../fetch/fetch';
import { logout } from '/modules/utility/onboarding/SignIn.js';
import { isObjectEmpty } from '../../util';
import Cookies from 'universal-cookie';
import { _LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import { resolveVariables } from '../../../app.config';
const cookies = new Cookies();
export const createShop = async (uri, domainKey, user, shopData) => {
  if (user.identifier && user.hash && shopData && shopData.shopName) {
    let fetchBody = {
      domainKey: domainKey,
      shopData: shopData,
      hash: user.hash,
      identifier: user.identifier
    };
    let res = await fetchPost(uri + '/m/createshop', null, null, fetchBody);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        return res;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const doPublishProduct = async (uri, domainKey, shop, user, product, body) => {
  // Shop is not required. We create a shop on backend if 1. No shop passed 2. User signed in 3. Check for users shop returns null
  if (user.identifier && user.hash && product && domainKey) {
    let res = await fetchPost(uri + '/m/publishproduct', null, null, body, {
      formData: true
    });
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        return res;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const resolveImg = (product, cdn, override) => {
  if (override) {
    return override;
  }
  return 'img/default/greythumb_product.jpg';
};
export const resolveStyles = product => {
  if (product && product.styles) {
    return product.styles;
  }
  return [];
};
export const resolveCurrentPrice = (product, selectedStyle, currency) => {
  console.log(product, selectedStyle, currency);
  if (product && product.styles) {
    const p = product.styles.find(m => m.sid === selectedStyle);
    if (p && Object.prototype.hasOwnProperty.call(p, 'price')) {
      return `${currency}${p.price}`;
    }
    if (product.styles[0] && Object.prototype.hasOwnProperty.call(product.styles[0], 'price')) {
      return `${currency}${product.styles[0].price}`;
    }
  }
  return '';
};
export const resolveCurrentStyle = (product, selectedStyle) => {
  if (product && product.styles) {
    const p = product.styles.find(m => m.sid === selectedStyle);
    return p;
  }
  return '';
};
export const resolveCurrentOption = (style, selectedOption) => {
  if (style && style.option) {
    const o = style.option.find(m => m.sid === selectedOption);
    return o;
  }
  return '';
};
export const resolveDefaultStyle = (product, selectedStyle, f, currentOption, f2) => {
  if (isObjectEmpty(selectedStyle)) {
    if (product && product.styles && product.styles[0] && product.styles[0].sid) {
      f(product.styles[0].sid);
      if (!currentOption && product.styles[0].option && product.styles[0].option[0] && product.styles[0].option[0].sid) {
        f2(product.styles[0].option[0].sid);
      }
    }
  }
};
export const updateCart = (user, cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  _LocalEventEmitter.dispatch('forceUpdateProps', {
    dispatch: '_cart'
  });
  return cart;
};
export const calculateTotal = (cart, prefix, options, props) => {
  const prices = [];
  let total = 0;
  if (cart && cart.items) {
    cart.items.map(item => {
      const style = resolveCurrentStyle(item.product, item.style);
      if (style && Object.prototype.hasOwnProperty.call(style, 'price')) {
        const usePrice = options?.region?.currency === 'USD' ? style.price : options?.region?.currency && style?.priceTable && Object.prototype.hasOwnProperty.call(style.priceTable, options.region.currency) ? style.priceTable[options.region.currency] : props ? resolveRegionBasedPrice(props, style)?.price : style.price;
        prices.push(Object.assign(item, {
          price: usePrice
        }));
        total += usePrice * item.quantity;
      }
    });
  }
  if (options) {
    if (options.object) {
      return {
        prices: prices,
        total: total
      };
    }
  }
  if (prefix) {
    return prefix + total;
  }
  return total;
};
export const doUploadImageForProduct = async (uri, domainKey, product, user, body) => {
  if (user.identifier && user.hash && product && domainKey) {
    let res = await fetchPost(uri + '/m/uploadimageforproduct', null, null, body, {
      formData: true
    });
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        return res;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const doUploadImageForLineupParticipant = async (uri, domainKey, product, user, body) => {
  if (user.identifier && user.hash && product && domainKey) {
    let res = await fetchPost(uri + '/m/uploadimageforlineupparticipant', null, null, body, {
      formData: true
    });
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        return res;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const addToCartGlobal = async (uri, domainKey, user, cart, product, spec, setFetchBusy, options) => {
  try {
    console.log(uri, domainKey, user, cart, product, spec, setFetchBusy, options);
    if (user && user.identifier && user.hash && product && domainKey && uri) {
      setFetchBusy(true);
      let fetchBody = {
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier,
        cart: cart,
        product: product,
        spec: spec,
        options: options
      };
      let res = await fetchPost(uri + '/m/addtocart', null, null, fetchBody);
      setFetchBusy(false);
      if (!res) {
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == "disauthenticated") {
          logout();
          return "disauthenticated";
        } else if (res.status == "failed") {
          return false;
        } else if (res.status == "success") {
          return res;
        }
      }
    }
  } catch (err) {
    console.log(err);
    if (setFetchBusy) {
      setFetchBusy(false);
    }
    return {
      // fail silently
      status: 'failed',
      message: 'Could not add Product to cart'
    };
  }
};
export const addToCart = async (uri, domainKey, user, cart, product, spec, setFetchBusy, options) => {
  try {
    console.log(uri, domainKey, user, product, spec, cart);
    if (user && user.identifier && user.hash && product && domainKey && uri) {
      if (product && product.styles) {
        if (spec.style && spec.option) {
          const style = product.styles.find(p => p.sid === spec.style);
          if (style && style.option) {
            const option = style.option.find(o => o.sid === spec.option);
            if (option) {
              // Valid selection
              if (option.quantity && (option.quantity > 0 || option.quantity === -100)) {
                // Valid quantity = > 0 or -100 (infinite)
                console.log(cart, product, spec, options);
                if (setFetchBusy) {
                  setFetchBusy(true);
                  let fetchBody = {
                    domainKey: domainKey,
                    hash: user.hash,
                    identifier: user.identifier,
                    cart: cart,
                    product: product,
                    spec: spec,
                    options: options
                  };
                  let res = await fetchPost(uri + '/m/addtocart', null, null, fetchBody);
                  setFetchBusy(false);
                  if (!res) {
                    return false;
                  } else if (res.hasOwnProperty('status')) {
                    if (res.status == "disauthenticated") {
                      logout();
                      return "disauthenticated";
                    } else if (res.status == "failed") {
                      return false;
                    } else if (res.status == "success") {
                      return res;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    throw new Error();
  } catch (err) {
    console.log(err);
    if (setFetchBusy) {
      setFetchBusy(false);
    }
    return {
      // fail silently
      status: 'failed',
      message: 'Could not add Product to cart'
    };
  }
};
export const performPurchase = async (uri, domainKey, user, cart, setFetchBusy, options) => {
  try {
    const variables = resolveVariables();
    if (variables.paymentConfig && variables.dev) {
      const stripeIsLive = variables.paymentConfig?.keys?.stripe.match('live');
      const paystackisLive = variables.paymentConfig?.keys?.paystack.match('live');
      if (stripeIsLive || paystackisLive) {
        // We dont want to allow purchases when in development mode and any keys are live
        console.log('Payment Cancelled: Some Payment Processing Keys are live but you are in development mode.');
        return false;
      }
    }
    if (user && user.identifier && user.hash && cart && domainKey && uri) {
      if (setFetchBusy) {
        setFetchBusy(true);
        let fetchBody = {
          domainKey: domainKey,
          hash: user.hash,
          identifier: user.identifier,
          cart: cart,
          options: options
        };
        let res = await fetchPost(uri + '/m/performpurchase', null, null, fetchBody);
        setFetchBusy(false);
        if (!res) {
          return false;
        } else if (res.hasOwnProperty('status')) {
          if (res.status == "disauthenticated") {
            logout();
            return "disauthenticated";
          } else if (res.status == "failed") {
            if (res.message) {
              return res;
            }
            return false;
          } else if (res.status == "success") {
            return res;
          }
        }
      }
    }
    throw new Error();
  } catch (err) {
    console.log(err);
    if (setFetchBusy) {
      setFetchBusy(false);
    }
    return {
      // fail silently
      status: 'failed',
      message: 'Could not perform purchase'
    };
  }
};
export const westernMoneyFormat = new Intl.NumberFormat('en-US', {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
export const resolveMoneyFormat = v => {
  try {
    if (!isNaN(Number(v)) && v !== null) {
      return westernMoneyFormat.format(v);
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const resolveRegionBasedPrice = (props, style, useCustom) => {
  if (useCustom) {
    return {
      currency: useCustom.currency ?? null,
      symbol: useCustom.symbol ?? null,
      price: useCustom.price ?? null
    };
  }
  if (props?._loggedIn?.meta?.locationMeta?.country && props?.regionsData) {
    const location = props._loggedIn.meta.locationMeta.country;
    if (props.regionsData[location] && style?.priceTable) {
      if (Object.prototype.hasOwnProperty.call(style.priceTable, props.regionsData[location].currency)) {
        // Has currency of type defined on product
        return {
          currency: props.regionsData[location].currency,
          symbol: props.regionsData[location].symbol,
          price: style.priceTable[props.regionsData[location].currency]
        };
      } else {
        const useRegion = props.regionsData[location].region;
        const firstMatchingRegionValidCurrency = Object.entries(props.regionsData).find(m => {
          if (m[1].region === useRegion && Object.prototype.hasOwnProperty.call(style.priceTable, m[1].currency)) {
            return true;
          }
          return false;
        });
        if (firstMatchingRegionValidCurrency && firstMatchingRegionValidCurrency[1]) {
          return {
            currency: firstMatchingRegionValidCurrency[1].currency,
            symbol: firstMatchingRegionValidCurrency[1].symbol,
            price: style.priceTable[firstMatchingRegionValidCurrency[1].currency]
          };
        }
      }
    }
  }
  return {
    currency: 'USD',
    symbol: '$',
    price: style && Object.prototype.hasOwnProperty.call(style, 'price') ? style.price : null
  };
};
export const resolveOption = (p, s, o, returnObject = false) => {
  if (p && p.styles && s) {
    const f = p.styles.find(m => m.sid === s);
    if (f.option) {
      const f2 = f.option.find(m => m.sid === o);
      if (returnObject && f2) {
        return f2;
      }
      if (f2 && f2.option) {
        return f2.option;
      }
    }
  }
  return '';
};