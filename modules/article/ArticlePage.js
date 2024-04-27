function _extends() {
  return (_extends = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a,
            c = arguments[t];
          for (a in c)
            Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        }
        return e;
      }).apply(this, arguments);
}
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArticleStyles from './Article.module.scss';
import templates from './templates';
import { Article } from '/layout';
import { createMarkup } from './utility';
const Module = (t) => {
  var [, ,] = React.useState(!1);
  const [a, c] = React.useState(!1),
    [e, r] = React.useState(null),
    [l, s] = React.useState(null),
    [i, u] = React.useState(null),
    [m, n] = React.useState('basic');
  var o = React.useRef(),
    p =
      (t._LocalEventEmitter.unsubscribe(e),
      t._LocalEventEmitter.subscribe(e, (e) => {
        e && 'loadDefault' !== e.dispatch && e.dispatch;
      }),
      React.useEffect(() => {
        var e;
        a || ((e = uuidv4()), r(e), c(!0));
      }, [a]),
      React.useEffect(() => {
        l?.meta?.template
          ? n(l.meta.template)
          : t?.selectTemplate && n(t.selectTemplate);
      }, [t?.selectTemplate, l]),
      React.useEffect(() => {
        var e;
        t?.articleData &&
          (!l || (l?.id && t?.articleData?.id && l.id !== t.articleData.id)) &&
          (s(t.articleData), t.articleData.contents) &&
          (e = JSON.parse(t.articleData.contents)) &&
          u(e);
      }, [t?.articleData, l]),
      Object.assign(templates, t?.articleTemplates ?? {})),
    f = m && p && p[m];
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Article,
      _extends({}, t, {
        useTemplates: p,
        template: f,
        articleHtml: i,
        articleData: l,
        createMarkup: createMarkup,
        htmlRef: o,
        ArticleStyles: ArticleStyles,
      })
    )
  );
};
export default Module;
