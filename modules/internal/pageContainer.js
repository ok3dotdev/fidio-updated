import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import resolveConfig from '/app.config';
import {
  generateComponent,
  handlePropsPriority,
  resolvePage,
  resolveDefaults,
} from '/modules/utility.js';
import { isObjectEmpty } from '/modules/util';
import { constructGeneral, paintMeta } from './meta/general';
import middlewareFunctions from '/customModules/middleware/MiddlewareFunctions';
import {
  SliderStyles,
  SliderTheme,
  GoogleFontsLink,
  PaystackScript,
} from '/modules/internal/localImports';
import { UploadPage } from '/modules/video/upload';
import { ArticlePage } from '/modules/article';
import { submitNewPassword } from '/modules/utility/onboarding/Password';
import { Admin } from '/modules/admin';
const PageContainer = (t) => {
  const a = useRouter();
  var e = a['query'];
  const [l, r] = React.useState(!1),
    [n, o] = React.useState({}),
    [s, i] = React.useState(-1),
    [c, m] = React.useState(null),
    [u, p] = React.useState(1);
  console.log('Render', t?.renderSchema, t.simulatedPage, t);
  var d =
    t?.simulating && t?.simulatedPage && t?.renderSchema
      ? t.renderSchema?.content?.config?.platform?.pages?.find(
          (e) => e.url === t.simulatedPage
        )
      : null;
  const g = t?.simulating && t.simulatedPage ? t.simulatedPage : t.path;
  var f = new URL(t.simulatedUrl, 'https://' + t.domainUrl),
    y = new URLSearchParams(f.search);
  const h = t?.simulating ? y : e,
    R = (t?.simulating ? f : a)?.pathname;
  y = resolveConfig(t._configVariables, t);
  let v = resolvePage(y, g);
  (e = (t?.simulating && d ? d : v)?.data), (f = '/a' === v?.url || '/a' === R);
  const E = React.useRef(),
    C = async (e) => {
      var e = await resolveDefaults(
        v.url,
        t,
        t._configVariables,
        h,
        g,
        r,
        e,
        R
      );
      isObjectEmpty(e) ||
        ((e = Object.assign({ ...t }, e)),
        o(e),
        t?.simulating &&
          (p(u + 1),
          setTimeout(() => {
            p(u + 2);
          }, 250)));
    };
  t._LocalEventEmitter.unsubscribe('refetchDefaults'),
    t._LocalEventEmitter.subscribe('refetchDefaults', (e) => {
      C(!0);
    }),
    React.useEffect(() => {
      v && v.url && !l && isObjectEmpty(n) && C();
    }, [l, n, v]);
  var P = handlePropsPriority(n, t),
    y = resolveConfig(t._configVariables, P),
    e =
      ((v = resolvePage(y, t?.simulating ? g : P.path)),
      (t?.simulating && d ? d : v)?.data),
    y = generateComponent(e),
    d =
      !e ||
      (e?.props && !Object.prototype.hasOwnProperty.call(e.props, 'useMenu')) ||
      e.props?.useMenu,
    w =
      !e ||
      (e?.props &&
        !Object.prototype.hasOwnProperty.call(e.props, 'useAppConfigLayout')) ||
      e.props?.useAppConfigLayout;
  const b = Object.assign({}, P);
  (b.useMenu = d), (b.useAppConfigLayout = w);
  d = React.createElement(
    'div',
    {
      className: P.pageName + '_Body ' + (t.pageClass ?? ''),
      style: {
        top: P.menuConfig.height ? P.menuConfig.height + 'px' : '',
        position: 'relative',
      },
    },
    y
  );
  b.useAppConfigLayout && (b.appConfigLayout = d);
  const S = (e, r = 0, n, o) => {
    let s = 0;
    return React.Children.map(e, function (a) {
      if (null === a || 'function' != typeof a.type)
        return s++, React.createElement('div');
      {
        let e = o && o[s] ? o[s] : [],
          t = (0 === r ? (e = b.children) : 0 < r && delete b.children, b);
        0 < r && (t.children = e);
        var l = n && n[s] ? n[s] : null;
        return (
          (t = l?.props ? Object.assign(l.props, t) : t)?.children &&
            (t.children = S(
              t.children,
              r + 1,
              l?.children ?? null,
              e?.props?.children
            )),
          s++,
          React.cloneElement(a, t)
        );
      }
    });
  };
  var y = S(t.children, 0, e?.children ?? null),
    d = '/upload' === v?.url || '/upload' === R,
    e = '/reset' === v?.url || '/reset' === R,
    _ = '/admin' === v?.url || '/admin' === R;
  let N = constructGeneral(a, b);
  middlewareFunctions?.transformMeta &&
    (N = middlewareFunctions.transformMeta(a, N, b));
  var L = React.useCallback(async (e) => {
      var t;
      a?.query &&
        'password' === a.query.reset &&
        a.query.token &&
        a.query.email &&
        (-1 === s || s < new Date().getTime() - 600) &&
        0 < E?.current?.value?.length &&
        (t = await submitNewPassword(
          E.current.value,
          a.query.token,
          a.query.email,
          a.query.goto
        ))?.data &&
        m({ data: t.data, status: t.message, goto: a.query.goto ?? '' }),
        i(new Date().getTime());
    }),
    j = paintMeta(N);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Head,
      null,
      React.createElement('title', null, b.siteTitle),
      b?.googleClientId
        ? React.createElement('meta', {
            name: 'google-signin-client_id',
            content: '' + b.googleClientId,
          })
        : null,
      j,
      SliderStyles,
      SliderTheme,
      GoogleFontsLink,
      PaystackScript,
      React.createElement('link', { rel: 'icon', href: '/favicon.ico' })
    ),
    React.createElement(
      'div',
      { className: f ? 'Article_SafeStyles' : '' },
      y,
      !v?.data && d && w
        ? React.createElement(
            'div',
            {
              className: P.pageName + '_Body ' + (t.pageClass ?? ''),
              style: {
                top: P.menuConfig.height ? P.menuConfig.height + 'px' : '',
                position: 'relative',
              },
            },
            React.createElement(UploadPage, b)
          )
        : null,
      !v?.data && f && w
        ? React.createElement(
            'div',
            {
              className: P.pageName + '_Body ' + (t.pageClass ?? ''),
              style: {
                top: P.menuConfig.height ? P.menuConfig.height + 'px' : '',
                position: 'relative',
              },
            },
            React.createElement(ArticlePage, b)
          )
        : null,
      !v?.data && _ && w
        ? React.createElement(
            'div',
            { className: P.pageName + '_Body ' + (t.pageClass ?? '') },
            React.createElement(Admin, b)
          )
        : null,
      !v?.data && e && w
        ? React.createElement(
            'div',
            {
              className: P.pageName + '_Body ' + (t.pageClass ?? ''),
              style: {
                top: P.menuConfig.height ? P.menuConfig.height + 'px' : '',
                position: 'relative',
              },
            },
            React.createElement(
              'div',
              { style: { margin: '0 auto', textAlign: 'center' } },
              React.createElement('h3', null, 'Reset Password'),
              React.createElement('h4', null, a?.query?.email),
              c?.goto
                ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'p',
                      null,
                      React.createElement(
                        'a',
                        {
                          href: `https://${t?.domainUrl}/` + c.goto,
                          className: 'reset_password_link',
                          style: { color: '#ff6deb' },
                        },
                        c?.message ??
                          'Successfully reset password. Please sign in'
                      )
                    )
                  )
                : React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'div',
                      {
                        style: {
                          display: 'flex',
                          gap: '.5rem',
                          justifyContent: 'center',
                        },
                      },
                      React.createElement('label', null, 'Password'),
                      React.createElement('input', {
                        type: 'password',
                        id: 'reset_password_secure',
                        ref: E,
                      })
                    ),
                    React.createElement(
                      'button',
                      { style: { marginTop: '1rem' }, onClick: L },
                      'Submit'
                    )
                  )
            )
          )
        : null
    )
  );
};
export default PageContainer;
