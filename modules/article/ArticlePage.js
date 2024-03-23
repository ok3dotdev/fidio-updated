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
  return <React.Fragment>
            <Article {...props} useTemplates={useTemplates} template={passTemplate} articleHtml={articleHtml} articleData={articleData} createMarkup={createMarkup} htmlRef={htmlRef} ArticleStyles={ArticleStyles} />
        </React.Fragment>;
};
export default Module;