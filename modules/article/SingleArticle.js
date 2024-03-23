import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props?.articleHtml && props?.articleData?.approved ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: props?.createMarkup ? props.createMarkup() : null,
    ref: props?.htmlRef ?? null
  })) : null);
};
export default Module;