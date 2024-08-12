function _extends() {
  return (_extends = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            o = arguments[t];
          for (n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
        return e;
      }).apply(this, arguments);
}
import React from 'react';
import io from 'socket.io-client';
import { SocketContainer } from '/modules/socket';
import { resolveVariables } from '/app.config';
import {
  checkSignedIn,
  checkUserData,
  updateLocalLoginSession,
} from '/modules/utility/onboarding/SignIn';
import { _LocalEventEmitter } from '/modules/events/LocalEventEmitter';
import {
  handleRouteChange,
  registerCheckLocalStorageSize,
  registerCheckMobile,
  registerProxyConsoleLog,
} from '/modules/util';
import { useRouter } from 'next/router';
import {
  forceUpdateProps,
  handleCheckUserData,
  handleGlobalEvent,
  handleSetCart,
  handleSetLoggedIn,
  registerSocket,
  toggleSingleOpenMenu,
} from '/modules/utility/_app';
import { UseMiddleware } from '../../customModules/middleware';
import { DeveloperHelp } from '.';
import {
  GoogleGsiClient,
  GoogleSignInRegister,
} from '/modules/internal/localImports';
import Heartbeat from '/modules/internal/heartbeat/Heartbeat';
import { handleEventMail } from '../utility/mail';
const DEFAULT_SOLUTION = { payment: 'stripe' },
  CHECK_HANDLE_USER_DATA_THRESHOLD = 18e5,
  Internal = (e) => {
    const [t, n] = React.useState(!1),
      [o, a] = React.useState(!1);
    var [i, r] = React.useState(!1);
    const [l, c] = React.useState(!1);
    var [s, d] = React.useState(null);
    const [g, u] = React.useState({}),
      [m, _] = React.useState({}),
      [p, E] = React.useState(!1);
    var [h, f] = React.useState({});
    const [v, S] = React.useState(!1),
      [b, R] = React.useState(!1),
      [I, L] = React.useState(null);
    var [C, y] = React.useState(!1),
      [w, k] = React.useState(!1);
    const [O, T] = React.useState(-1);
    var [G, N] = React.useState(DEFAULT_SOLUTION),
      [P, j] = React.useState(!1);
    const D = React.useRef();
    let M = Object.assign({}, e);
    const U = useRouter();
    try {
      registerCheckLocalStorageSize(window),
        registerCheckMobile(window),
        registerProxyConsoleLog(window);
    } catch (e) {}
    React.useEffect(() => {
      var e;
      t
        ? ((e = window.mobileCheck()), S(e))
        : (n(!0),
          (e = new Heartbeat(1e3)),
          (D.current = e),
          D.current.createEvent(
            'checkDeviceState',
            () => {
              _LocalEventEmitter.dispatch('checkDeviceState', {});
            },
            2e3
          ));
    }, [t]),
      React.useEffect(() => {
        document.addEventListener(
          'mute-login-error',
          () => {
            c(null);
          },
          { once: !0 }
        );
      }, []);
    const z = async () => {
      handleSetLoggedIn(M, checkSignedIn, a);
      var e = await handleCheckUserData(M, o);
      M &&
        o &&
        O < new Date().getTime() - CHECK_HANDLE_USER_DATA_THRESHOLD &&
        e &&
        (T(new Date().getTime()),
        (async (e, t) => {
          e = await checkUserData(e, t);
          if (e) {
            t = Object.assign({}, o);
            if (
              (console.log('Check User Data', e, t),
              e.identifier && e.username && e.hash)
            )
              return (
                (t.username = e.username),
                (t.hash = e.hash),
                (t.identifier = e.identifier),
                (t.ip = e.ip),
                t.meta || (t.meta = {}),
                e.ip && (t.meta.ip = e.ip),
                e.location && (t.meta.location = e.location),
                e.locationMeta && (t.meta.locationMeta = e.locationMeta),
                console.log(t),
                updateLocalLoginSession(t),
                !a(t)
              );
          }
        })(M, e));
    };
    React.useEffect(() => {
      z();
    }, [o, M._loggedIn]);
    React.useEffect(() => {
      handleSetCart(o, _);
    }, [o]),
      _LocalEventEmitter.unsubscribe('checkDeviceState'),
      _LocalEventEmitter.subscribe('checkDeviceState', async (e) => {
        var t = document?.activeElement,
          n = t?.tagName?.toLocaleLowerCase();
        t?.type && -1 < ['textarea', 'input'].indexOf(n)
          ? 'textarea' === t.type ||
            ('input' === n &&
              -1 <
                [
                  'text',
                  'password',
                  'email',
                  'number',
                  'tel',
                  'url',
                  'search',
                ].indexOf(t.type))
            ? b || R(!0)
            : b && R(!1)
          : R(!1);
      }),
      (M._LocalEventEmitter = _LocalEventEmitter),
      (M._loggedIn = o),
      (M._setLoggedIn = a),
      (M._stripeSecret = i),
      (M._setStripeSecret = r),
      (M._loginError = l),
      (M._setLoginError = c),
      (M._pageError = s),
      (M._setPageError = d),
      (M._toggleSingleOpenMenu = (e, t, n) => {
        toggleSingleOpenMenu(e, t, g, u, n);
      }),
      (M._openMenu = g),
      (M._setOpenMenu = u),
      (M._cart = m),
      (M._rooms = h),
      (M._isMobile = v),
      (M._hasInputFocus = b),
      (M._adminAuth = I),
      (M._setAdminAuth = L),
      (M._managerOpen = C),
      (M._setManagerOpen = y),
      (M._currentlyStreaming = w),
      (M._setCurrentlyStreaming = k),
      (M._solution = G),
      (M._setSolution = N),
      (M._validCc = P),
      (M._setValidCc = j),
      (M.fetchBusy = p),
      (M.setFetchBusy = E);
    e = resolveVariables();
    (M._configVariables = e),
      (M = Object.assign(resolveVariables(), M)),
      _LocalEventEmitter.unsubscribe('scheduleMail'),
      _LocalEventEmitter.subscribe('scheduleMail', async (e) => {
        handleEventMail(e, M);
      }),
      _LocalEventEmitter.unsubscribe('forceUpdateProps'),
      _LocalEventEmitter.subscribe('forceUpdateProps', (e) => {
        forceUpdateProps(e, _);
      }),
      _LocalEventEmitter.unsubscribe('global_event'),
      _LocalEventEmitter.subscribe('global_event', async (e) => {
        handleGlobalEvent(e, M, p, E);
        try {
          window &&
            window.dispatchEvent(
              new CustomEvent('global_event', { detail: Object.assign({}, e) })
            );
        } catch (e) {}
      }),
      _LocalEventEmitter.unsubscribe('attemptInitializeGoogle'),
      _LocalEventEmitter.subscribe('attemptInitializeGoogle', async (e) => {
        A();
      });
    const B = (e) => {
        e = new CustomEvent('thirdparty-signin', { detail: e });
        document.dispatchEvent(e);
      },
      A = (t = 250) => {
        try {
          return (
            (!window || (window && !window.googleInitialized)) &&
              M.googleClientId &&
              (google.accounts.id.initialize({
                client_id: M.googleClientId,
                callback: B,
                use_fedcm_for_prompt: !0,
              }),
              (window.googleInitialized = !0),
              console.log('Google Loaded')),
            !0
          );
        } catch (e) {
          setTimeout(() => {
            A(2 * t);
          }, t);
        }
      },
      [x, V] =
        (React.useEffect(() => {
          M?._loggedIn?.admin &&
          !I &&
          M?.dborigin &&
          M?._loggedIn?.admin.origin &&
          M.dborigin === M._loggedIn.admin.origin &&
          M._loggedIn.admin?.userid &&
          M?._loggedIn?.identifier &&
          M._loggedIn.admin.userid === M._loggedIn.identifier
            ? L(M._loggedIn.admin)
            : (!I?.userid ||
                !M?._loggedIn ||
                (M?._loggedIn && !M._loggedIn.identifier) ||
                (I?.userid &&
                  M?._loggedIn?.identifier &&
                  I.userid !== M._loggedIn.identifier) ||
                !M?._adminAuth?.origin ||
                !M?.dborigin ||
                (M?._adminAuth?.origin &&
                  M.dborigin &&
                  M._adminAuth.origin !== M.dborigin)) &&
              L(null);
        }, [M._loggedIn, I]),
        React.useState(null)),
      [H, F] = React.useState(null);
    return (
      React.useEffect(() => {
        registerSocket(io, x, V, H, M, F);
      }, [x, H]),
      React.useEffect(() => {
        const e = (e, t) => {
          handleRouteChange(M, e, t);
        };
        return (
          U.events.on('routeChangeComplete', e),
          () => {
            U.events.off('routeChangeComplete', e);
          }
        );
      }, [U.events, M._loggedIn, M.apiUrl, M.domainKey]),
      (M._socket = x),
      // console.log('Socket', x, M),
      React.createElement(
        'div',
        null,
        React.createElement('div', {
          version: '0.6.87',
          system: 'Tycoon Systems Corp.',
          style: { display: 'none' },
        }),
        M?.googleClientId
          ? React.createElement(
              'div',
              null,
              GoogleGsiClient,
              GoogleSignInRegister(M.googleClientId)
            )
          : null,
        React.createElement(
          SocketContainer,
          _extends({ _socket: x, setRooms: f }, M)
        ),
        React.createElement('div', {
          className: p ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy',
        }),
        React.createElement(UseMiddleware, _extends({}, M, { _socket: x })),
        M?.dev ? React.createElement(DeveloperHelp, M) : null
      )
    );
  };
export default Internal;
