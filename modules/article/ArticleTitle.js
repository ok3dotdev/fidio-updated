import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `${ArticleStyles.title}`
  }, props?.articleData?.title ?? '')));
};
export default Module;