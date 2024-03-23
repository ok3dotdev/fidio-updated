import Cookies from 'universal-cookie';
import { fetchPost } from '/modules/utility/fetch/fetch.js';
import { updateCart } from '/modules/utility/ecommerce/ecommerce.js';
import { _LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import { fireGlobalEvent } from '../utility';
import jwt_decode from 'jwt-decode';
const cookies = new Cookies();
export const updateLocalLoginSession = data => {
  cookies.set('login', data);
};
const doThirdPartySignIn = () => {};

/**
 * Attempt to sign in user or ask for more information (username) for register completion
 * @param {*} data 
 * @returns {*}
 */
export const attemptThirdPartySignIn = async function (data, apiUrl, domainKey, LocalEventEmitter, setAdminAuth) {
  try {
    console.log('Running', data, apiUrl, domainKey);
    // Decode google third party sign in data and make fetch to server for info
    let decodedToken;
    if (data && data.detail && data.detail.credential) {
      decodedToken = jwt_decode(data.detail.credential);
    }
    let fetchBody = {
      domainKey: domainKey,
      googleData: data,
      token: decodedToken,
      encodedToken: data.detail.credential
    };
    if (data.requestedUsername) {
      fetchBody.requestedUsername = data.requestedUsername;
    }
    // Call to server to look for user
    let res = await fetchPost(apiUrl + '/m/authenticate', null, null, fetchBody);
    if (res && res.hash) {
      // Update cookie signifying login
      if (LocalEventEmitter) {
        LocalEventEmitter.dispatch('completeSignIn', {
          data: res
        });
      }
      let cookieObj = {
        identifier: res.identifier,
        username: res.username,
        email: res.email,
        icon: res.icon,
        hash: res.hash,
        vendor: res.vendor ?? null,
        icon: res.icon,
        meta: res.meta
      };
      // Optionally set official minipost plan
      if (res.plan) {
        cookieObj.plan = res.plan;
      }
      if (res.cart) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        updateCart(cart, res.cart);
      }
      if (res?.admin) {
        setAdminAuth(res.admin);
        cookieObj.admin = res.admin;
      }
      updateLocalLoginSession(cookieObj);
      let event = new CustomEvent("mute-login-error", {
        "detail": true
      }); // Mutes login errors across application
      document.dispatchEvent(event);
    }
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const checkSignedIn = () => {
  if (!cookies.get('login')) {
    return false;
  }
  return cookies.get('login');
};
export const checkSignedInAndPrompt = (setPageError, desc) => {
  try {
    const user = checkSignedIn();
    if (!user) {
      if (setPageError) {
        setPageError(desc ? desc : "Please sign in with google to register");
      }
      google.accounts.id.prompt(notification => {
        console.log('on prompt notification', notification);
      });
      return false;
    }
    return user;
  } catch (err) {
    return err; // fail silently
  }
};
export const logout = () => {
  try {
    cookies.remove('login');
    fireGlobalEvent({
      event: 'logout'
    }, _LocalEventEmitter);
    updateCart('', {
      items: [],
      user: null
    });
    const onOneTapSignedInGoogle = data => {
      let event = new CustomEvent("thirdparty-signin", {
        "detail": data
      });
      document.dispatchEvent(event);
    };
    const doGoogleInit = (delay = 250) => {
      try {
        google.accounts.id.initialize({
          client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
          callback: onOneTapSignedInGoogle
        });
        console.log('Google Loaded');
        return true;
      } catch (err) {
        console.log(err);
        // fail silently
      }
    };
    setTimeout(() => {
      doGoogleInit();
    }, 2000);
    return true;
  } catch (err) {
    console.log(err);
    return false; // fail silently
  }
};

/**
 * Register username and assign it to currently signed in user *Protected route*
 * @param {String} desiredUsername 
 * @returns 
 */
export const grabUsername = async function (apiUrl, domainKey, data, checkSignedIn, setLoggedIn) {
  try {
    if (checkSignedIn) {
      let user = checkSignedIn();
      if (user && user.identifier && user.hash) {
        let fetchBody = {
          domainKey: domainKey,
          identifier: user.identifier,
          hash: user.hash,
          proposedUsername: data.proposedUsername
        };
        let res = await fetchPost(apiUrl + '/m/grabusername', null, null, fetchBody);
        if (!res) {
          return false;
        } else if (res.hasOwnProperty('status') && res.status !== 'success') {
          if (res.status == "disauthenticated") {
            logout();
            return "disauthenticated";
          } else {
            return res.status;
          }
        }
        if (res.identifier && res.username && res.hash) {
          user.username = res.username;
          user.hash = res.hash;
          user.identifier = res.identifier;
          updateLocalLoginSession(user);
          setLoggedIn(user);
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
  return false;
};
export const checkUserData = async (pageProps, checkItems) => {
  console.log('Check user data', pageProps, checkItems);
  if (checkItems) {
    const fetchPending = Object.entries(checkItems).find(m => m[1] === true);
    if (pageProps?._loggedIn?.identifier && pageProps?._loggedIn?.hash && pageProps.domainKey && pageProps.apiUrl && fetchPending) {
      let fetchBody = {
        domainKey: pageProps.domainKey,
        identifier: pageProps._loggedIn.identifier,
        hash: pageProps._loggedIn.hash,
        ip: pageProps._loggedIn.ip,
        checkItems: checkItems
      };
      console.log(fetchBody);
      let res = await fetchPost(pageProps.apiUrl + '/m/checkuserdata', null, null, fetchBody);
      if (!res) {
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == "disauthenticated") {
          logout();
          return "disauthenticated";
        } else if (res.status == "failed") {
          return false;
        } else if (res.status == "success") {
          console.log('Check user data', res);
          console.log('must return res');
          return res;
        }
      }
    } else {
      return false;
    }
  }
  return null;
};

/**
 * Request settings chage *Protected route*
 * @param {String} apiUrl
 * @param {String} domainKey
 * @param {Object} change
 * @returns 
 */
export const requestSettingsUpdate = async function (apiUrl, domainKey, change, props = {}, setFetchBusy, fetchBusy) {
  try {
    if (checkSignedIn) {
      let user = checkSignedIn();
      console.log(user);
      if (user && user.identifier && user.hash && !fetchBusy) {
        setFetchBusy(true);
        const r = setTimeout(() => {
          setFetchBusy(false);
        }, 5000);
        let fetchBody = {
          domainKey: domainKey,
          identifier: user.identifier,
          hash: user.hash,
          change: change
        };
        console.log('Shoot req', fetchBody);
        let res = await fetchPost(apiUrl + '/m/settingsupdate', null, null, fetchBody);
        console.log(res);
        if (!res) {
          setFetchBusy(false);
          clearTimeout(r);
          return false;
        } else if (res.hasOwnProperty('status') && res.status !== 'success') {
          setFetchBusy(false);
          clearTimeout(r);
          if (res.status == "disauthenticated") {
            logout();
            return "disauthenticated";
          } else {
            return res;
          }
        } else if (res.status === 'success') {
          setFetchBusy(false);
          clearTimeout(r);
          console.log(res);
          if (res.user) {
            updateLocalLoginSession(res.user);
            props._setLoggedIn(res.user);
            if (props._LocalEventEmitter) {
              props._LocalEventEmitter.dispatch('refetchDefaults', {
                dispatch: 'simple'
              });
            }
            return true;
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
  return false;
};