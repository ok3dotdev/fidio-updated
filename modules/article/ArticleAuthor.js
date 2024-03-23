import Link from 'next/link';
import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: `${ArticleStyles.author}`
  }, /*#__PURE__*/React.createElement(Link, {
    href: `/p?u=${props?.articleData?.authorData?.id}`
  }, props?.articleData?.authorData?.username ?? '')));
};
export default Module;