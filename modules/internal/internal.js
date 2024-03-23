function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import io from 'socket.io-client';
import { SocketContainer } from '/modules/socket';
import { resolveVariables } from '/app.config';
import { checkSignedIn, checkUserData, updateLocalLoginSession } from '/modules/utility/onboarding/SignIn';
import { _LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import { handleRouteChange, registerCheckLocalStorageSize, registerCheckMobile, registerProxyConsoleLog } from '/modules/util';
import { useRouter } from 'next/router';
import { forceUpdateProps, handleCheckUserData, handleGlobalEvent, handleSetCart, handleSetLoggedIn, registerSocket, toggleSingleOpenMenu } from '/modules/utility/_app';
import { UseMiddleware } from '../../customModules/middleware';
import { DeveloperHelp } from '.';
const CHECK_HANDLE_USER_DATA_THRESHOLD = 1800000;
const Internal = usePageProps => {
  const [appDidMount, setAppDidMount] = React.useState(false);
  const [_loggedIn, _setLoggedIn] = React.useState(false);
  const [_stripeSecret, _setStripeSecret] = React.useState(false);
  const [_loginError, _setLoginError] = React.useState(false);
  const [_pageError, _setPageError] = React.useState(null);
  const [_openMenu, _setOpenMenu] = React.useState({});
  const [_cart, _setCart] = React.useState({});
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [_rooms, _setRooms] = React.useState({});
  const [_isMobile, _setIsMobile] = React.useState(false);
  const [_adminAuth, _setAdminAuth] = React.useState(null);
  const [_managerOpen, _setManagerOpen] = React.useState(false);
  const [_currentlyStreaming, _setCurrentlyStreaming] = React.useState(false);
  const [lastCheckHandleUserData, setLastCheckHandleUserData] = React.useState(-1);

  // Must assign usePageProps as it cannot be used directly
  let pageProps = Object.assign({}, usePageProps);
  const router = useRouter();
  try {
    registerCheckLocalStorageSize(window);
    registerCheckMobile(window);
    registerProxyConsoleLog(window);
  } catch (err) {
    // fail silently
  }
  React.useEffect(() => {
    if (!appDidMount) {
      setAppDidMount(true);
    } else {
      const mobile = window.mobileCheck();
      _setIsMobile(mobile);
    }
  }, [appDidMount]);
  React.useEffect(() => {
    const muteLoginErr = () => {
      _setLoginError(null);
    };
    document.addEventListener("mute-login-error", muteLoginErr, {
      once: true
    });
  }, []);
  const resolveCheckUserData = async (pageProps, runCheckUserDataCheck) => {
    const res = await checkUserData(pageProps, runCheckUserDataCheck);
    if (res) {
      const user = Object.assign({}, _loggedIn);
      console.log(res, user);
      if (res.identifier && res.username && res.hash) {
        user.username = res.username;
        user.hash = res.hash;
        user.identifier = res.identifier;
        user.ip = res.ip;
        if (!user.meta) {
          user.meta = {};
        }
        if (res.ip) {
          user.meta.ip = res.ip;
        }
        if (res.location) {
          user.meta.location = res.location;
        }
        if (res.locationMeta) {
          user.meta.locationMeta = res.locationMeta;
        }
        console.log(user);
        updateLocalLoginSession(user);
        _setLoggedIn(user);
        return true;
      }
    }
    return false;
  };
  const handleUserDependencies = async () => {
    handleSetLoggedIn(pageProps, checkSignedIn, _setLoggedIn);
    const runCheckUserDataCheck = await handleCheckUserData(pageProps, _loggedIn);
    if (pageProps && _loggedIn && lastCheckHandleUserData < new Date().getTime() - CHECK_HANDLE_USER_DATA_THRESHOLD && runCheckUserDataCheck) {
      setLastCheckHandleUserData(new Date().getTime());
      resolveCheckUserData(pageProps, runCheckUserDataCheck);
    }
  };
  React.useEffect(() => {
    handleUserDependencies();
  }, [_loggedIn, pageProps._loggedIn]);
  const handleToggleSingleOpenMenu = (e, menu, force) => {
    toggleSingleOpenMenu(e, menu, _openMenu, _setOpenMenu, force);
  };
  React.useEffect(() => {
    handleSetCart(_loggedIn, _setCart);
  }, [_loggedIn]);
  pageProps._LocalEventEmitter = _LocalEventEmitter;
  pageProps._loggedIn = _loggedIn;
  pageProps._setLoggedIn = _setLoggedIn;
  pageProps._stripeSecret = _stripeSecret;
  pageProps._setStripeSecret = _setStripeSecret;
  pageProps._loginError = _loginError;
  pageProps._setLoginError = _setLoginError;
  pageProps._pageError = _pageError;
  pageProps._setPageError = _setPageError;
  pageProps._toggleSingleOpenMenu = handleToggleSingleOpenMenu;
  pageProps._openMenu = _openMenu;
  pageProps._setOpenMenu = _setOpenMenu;
  pageProps._cart = _cart;
  pageProps._rooms = _rooms;
  pageProps._isMobile = _isMobile;
  pageProps._adminAuth = _adminAuth;
  pageProps._setAdminAuth = _setAdminAuth;
  pageProps._managerOpen = _managerOpen;
  pageProps._setManagerOpen = _setManagerOpen;
  pageProps._currentlyStreaming = _currentlyStreaming;
  pageProps._setCurrentlyStreaming = _setCurrentlyStreaming;
  pageProps.fetchBusy = fetchBusy;
  pageProps.setFetchBusy = setFetchBusy;
  const _configVariables = resolveVariables();
  pageProps._configVariables = _configVariables;
  pageProps = Object.assign(resolveVariables(), pageProps);
  _LocalEventEmitter.unsubscribe('forceUpdateProps');
  _LocalEventEmitter.subscribe('forceUpdateProps', e => {
    forceUpdateProps(e, _setCart);
  });
  _LocalEventEmitter.unsubscribe('global_event');
  _LocalEventEmitter.subscribe('global_event', async e => {
    handleGlobalEvent(e, pageProps, fetchBusy, setFetchBusy);
  });

  /**
   * Handles setting admin auth as required
   */
  React.useEffect(() => {
    console.log;
    if (pageProps?._loggedIn?.admin && !_adminAuth && pageProps?.dborigin && pageProps?._loggedIn?.admin.origin && pageProps.dborigin === pageProps._loggedIn.admin.origin && pageProps._loggedIn.admin?.userid && pageProps?._loggedIn?.identifier && pageProps._loggedIn.admin.userid === pageProps._loggedIn.identifier) {
      _setAdminAuth(pageProps._loggedIn.admin);
    } else if (!_adminAuth?.userid || !pageProps?._loggedIn || pageProps?._loggedIn && !pageProps._loggedIn.identifier || _adminAuth?.userid && pageProps?._loggedIn?.identifier && _adminAuth.userid !== pageProps._loggedIn.identifier || !pageProps?._adminAuth?.origin || !pageProps?.dborigin || pageProps?._adminAuth?.origin && pageProps.dborigin && pageProps._adminAuth.origin !== pageProps.dborigin) {
      _setAdminAuth(null);
    }
  }, [pageProps._loggedIn, _adminAuth]);

  /**
   * Socket Initialized Here
   */
  const [_socket, setSocket] = React.useState(null);
  const [socketTimeout, setSocketTimeout] = React.useState(null);
  React.useEffect(() => {
    registerSocket(io, _socket, setSocket, socketTimeout, pageProps, setSocketTimeout);
  }, [_socket, socketTimeout]);

  /**
   * Tracks user Route change ***Analytics***
   */
  React.useEffect(() => {
    const doHandleRouteChange = (route, context) => {
      handleRouteChange(pageProps, route, context);
    };
    router.events.on('routeChangeComplete', doHandleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', doHandleRouteChange);
    };
  }, [router.events, pageProps._loggedIn, pageProps.apiUrl, pageProps.domainKey]);
  pageProps._socket = _socket;
  console.log('Socket', _socket, pageProps);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SocketContainer, _extends({
    _socket: _socket,
    setRooms: _setRooms
  }, pageProps)), /*#__PURE__*/React.createElement("div", {
    className: `${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`
  }), /*#__PURE__*/React.createElement(UseMiddleware, pageProps), pageProps?.dev ? /*#__PURE__*/React.createElement(DeveloperHelp, pageProps) : null);
};
export default Internal;