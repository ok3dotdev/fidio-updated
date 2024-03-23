var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
import ArticleStyles from './Article.module.scss';
import templates from './templates';
import { Article } from '/layout';

/**
 * 
 * @param {*} props
 * @param {Object} props.children JSX to render before component internals
 * @param {Object} props.childrenAfter JSX to render after component internals
 * @returns 
 */
const Module = props => {
  const [fetchBusy, setFetchBusy] = React.useState(false);
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [articleData, setArticleData] = React.useState(null);
  const [articleHtml, setArticleHtml] = React.useState(null);
  const [template, setTemplate] = React.useState('basic');
  const htmlRef = React.useRef();
  props._LocalEventEmitter.unsubscribe(componentId);
  props._LocalEventEmitter.subscribe(componentId, e => {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault()
      } else if (e.dispatch === 'loadHtml') {}
    }
  });
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  React.useEffect(() => {
    if (articleData?.meta?.template) {
      setTemplate(articleData.meta.template);
    } else if (props?.selectTemplate) {
      setTemplate(props.selectTemplate);
    }
  }, [props?.selectTemplate, articleData]);
  React.useEffect(() => {
    if (props?.articleData) {
      if (!articleData || articleData?.id && props?.articleData?.id && articleData.id !== props.articleData.id) {
        setArticleData(props.articleData);
        if (props.articleData.contents) {
          const parsedHtml = JSON.parse(props.articleData.contents);
          if (parsedHtml) {
            setArticleHtml(parsedHtml);
          }
        }
      }
    }
  }, [props?.articleData, articleData]);
  function createMarkup() {
    return {
      __html: DOMPurify.sanitize(articleHtml ?? '')
    };
  }
  const useTemplates = Object.assign(templates, props?.articleTemplates ?? {}); // Merge Database Server Article Templates with Local Defaults
  const passTemplate = template && useTemplates && useTemplates[template];
  return /*#__PURE__*/_jsx(React.Fragment, {}, void 0, <Article {...props} useTemplates={useTemplates} template={passTemplate} articleHtml={articleHtml} articleData={articleData} createMarkup={createMarkup} htmlRef={htmlRef} ArticleStyles={ArticleStyles} />);
};
export default Module;