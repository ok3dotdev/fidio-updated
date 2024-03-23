import { fetchPost } from '../fetch/fetch';
import { logout } from '/modules/utility/onboarding/SignIn.js';

// Will fetch stripe secret using id or username
export const fetchStripeSecret = async (uri, domainKey, user, options = {}) => {
  if (user && user.identifier && user.hash && domainKey) {
    const fetchBody = Object.assign({
      domainKey,
      domainKey,
      hash: user.hash,
      identifier: user.identifier
    }, options);
    let res = await fetchPost(uri + '/m/getclientsecret', null, null, fetchBody);
    return res;
  }
  return false;
};
export const getStripeSecretData = async (uri, domainKey, data, options) => {
  let secret = await fetchStripeSecret(uri, domainKey, data, options);
  if (secret) {
    return secret;
  }
  return false;
};
export const setStripeSecretData = async (uri, domainKey, data, f) => {
  let secret = await getStripeSecretData(uri, domainKey, data);
  if (secret) {
    f(secret);
  }
};

/**
* Save single Credit card information to backend
* @param {*} data 
* @returns 
*/
export const saveCreditCardInfo = async (uri, domainKey, data, checkSignedIn, options = {}) => {
  let user = checkSignedIn();
  if (user) {
    if (user.identifier && user.hash) {
      let fetchBody = Object.assign({
        cus_id: data.stripeSecret.user,
        domainKey: domainKey,
        hash: user.hash,
        identifier: user.identifier
      }, options);
      if (data.result && data.result.setupIntent && data.result.setupIntent.payment_method) {
        fetchBody.payment_id = data.result.setupIntent.payment_method;
      }
      let res = await fetchPost(uri + '/m/saveccinfo', null, null, fetchBody);
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
  } else {
    return false;
  }
};