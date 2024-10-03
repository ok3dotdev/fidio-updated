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
  debounce,
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
    const [n, o] = React.useState(!1),
      [i, a] = React.useState(!1);
    var [t, r] = React.useState(!1);
    const [s, l] = React.useState(!1);
    var [c, d] = React.useState(null);
    const [g, u] = React.useState({}),
      [m, _] = React.useState({}),
      [p, h] = React.useState(!1);
    var [E, v] = React.useState({});
    const [w, b] = React.useState(!1),
      [f, S] = React.useState(!1),
      [R, C] = React.useState(null);
    var [L, I] = React.useState(!1),
      [y, k] = React.useState(!1);
    const [T, G] = React.useState(-1);
    var [j, z] = React.useState(DEFAULT_SOLUTION),
      [N, P] = React.useState(!1);
    const [B, O] = React.useState({}),
      D = React.useRef();
    let M = Object.assign({}, e);
    const U = useRouter();
    try {
      registerCheckLocalStorageSize(window),
        registerCheckMobile(window),
        registerProxyConsoleLog(window);
    } catch (e) {
      console.log(e);
    }
    const V = React.useCallback(
        debounce((e) => {
          var t, n;
          window &&
            ((t = window?.innerWidth),
            (n = window?.innerHeight),
            O({ width: t, height: n }),
            window.dispatchEvent(
              new CustomEvent('resize_window', {
                detail: Object.assign({}, e),
                width: t,
                height: n,
              })
            ));
        }, 2500),
        []
      ),
      F = React.useCallback(
        debounce((e) => {
          var t = window?.scrollY,
            n = window.scrollX;
          window.dispatchEvent(
            new CustomEvent('scroll_window', {
              detail: Object.assign({}, e),
              scrollY: t,
              scrollX: n,
            })
          );
        }, 500),
        []
      ),
      K =
        (React.useEffect(() => {
          var e, t;
          n
            ? ((e = window.mobileCheck()),
              b(e),
              window?.addEventListener('resize', (e) => {
                V();
              }),
              window.addEventListener('scroll', (e) => {
                F();
              }))
            : (o(!0),
              (e = new Heartbeat(1e3)),
              (D.current = e),
              D.current.createEvent(
                'checkDeviceState',
                () => {
                  _LocalEventEmitter.dispatch('checkDeviceState', {});
                },
                2e3
              ),
              (e = window?.innerWidth),
              (t = window?.innerHeight),
              O({ width: e, height: t }));
        }, [n]),
        React.useEffect(() => {
          document.addEventListener(
            'mute-login-error',
            () => {
              l(null);
            },
            { once: !0 }
          );
        }, []),
        async () => {
          handleSetLoggedIn(M, checkSignedIn, a);
          var e = await handleCheckUserData(M, i);
          M &&
            i &&
            T < new Date().getTime() - CHECK_HANDLE_USER_DATA_THRESHOLD &&
            e &&
            (G(new Date().getTime()),
            (async (e, t) => {
              e = await checkUserData(e, t);
              if (e) {
                t = Object.assign({}, i);
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
        });
    React.useEffect(() => {
      K();
    }, [i, M._loggedIn]);
    React.useEffect(() => {
      handleSetCart(i, _);
    }, [i]),
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
            ? f || S(!0)
            : f && S(!1)
          : S(!1);
      }),
      (M._LocalEventEmitter = _LocalEventEmitter),
      (M._loggedIn = i),
      (M._setLoggedIn = a),
      (M._stripeSecret = t),
      (M._setStripeSecret = r),
      (M._loginError = s),
      (M._setLoginError = l),
      (M._pageError = c),
      (M._setPageError = d),
      (M._toggleSingleOpenMenu = (e, t, n) => {
        toggleSingleOpenMenu(e, t, g, u, n);
      }),
      (M._openMenu = g),
      (M._setOpenMenu = u),
      (M._cart = m),
      (M._rooms = E),
      (M._isMobile = w),
      (M._hasInputFocus = f),
      (M._adminAuth = R),
      (M._setAdminAuth = C),
      (M._managerOpen = L),
      (M._setManagerOpen = I),
      (M._currentlyStreaming = y),
      (M._setCurrentlyStreaming = k),
      (M._solution = j),
      (M._setSolution = z),
      (M._pageDimensions = B),
      (M._validCc = N),
      (M._setValidCc = P),
      (M.fetchBusy = p),
      (M.setFetchBusy = h);
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
        handleGlobalEvent(e, M, p, h);
        try {
          window &&
            window.dispatchEvent(
              new CustomEvent('global_event', { detail: Object.assign({}, e) })
            );
        } catch (e) {}
      }),
      _LocalEventEmitter.unsubscribe('attemptInitializeGoogle'),
      _LocalEventEmitter.subscribe('attemptInitializeGoogle', async (e) => {
        H();
      });
    const W = (e) => {
        e = new CustomEvent('thirdparty-signin', { detail: e });
        document.dispatchEvent(e);
      },
      H = (t = 250) => {
        try {
          return (
            (!window || (window && !window.googleInitialized)) &&
              M.googleClientId &&
              (google.accounts.id.initialize({
                client_id: M.googleClientId,
                callback: W,
                use_fedcm_for_prompt: !0,
              }),
              (window.googleInitialized = !0),
              console.log('Google Loaded')),
            !0
          );
        } catch (e) {
          setTimeout(() => {
            H(2 * t);
          }, t);
        }
      },
      [A, X] =
        (React.useEffect(() => {
          M?._loggedIn?.admin &&
          !R &&
          M?.dborigin &&
          M?._loggedIn?.admin.origin &&
          M.dborigin === M._loggedIn.admin.origin &&
          M._loggedIn.admin?.userid &&
          M?._loggedIn?.identifier &&
          M._loggedIn.admin.userid === M._loggedIn.identifier
            ? C(M._loggedIn.admin)
            : (!R?.userid ||
                !M?._loggedIn ||
                (M?._loggedIn && !M._loggedIn.identifier) ||
                (R?.userid &&
                  M?._loggedIn?.identifier &&
                  R.userid !== M._loggedIn.identifier) ||
                !M?._adminAuth?.origin ||
                !M?.dborigin ||
                (M?._adminAuth?.origin &&
                  M.dborigin &&
                  M._adminAuth.origin !== M.dborigin)) &&
              C(null);
        }, [M._loggedIn, R]),
        React.useState(null)),
      [x, Y] = React.useState(null);
    return (
      React.useEffect(() => {
        registerSocket(io, A, X, x, M, Y);
      }, [A, x]),
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
      (M._socket = A),
      console.log('Socket', A, M),
      React.createElement(
        'div',
        null,
        React.createElement('div', {
          version: '0.7.46',
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
          _extends({ _socket: A, setRooms: v }, M)
        ),
        React.createElement('div', {
          className: p ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy',
        }),
        React.createElement(UseMiddleware, _extends({}, M, { _socket: A })),
        M?.dev ? React.createElement(DeveloperHelp, M) : null
      )
    );
  };
export default Internal;
