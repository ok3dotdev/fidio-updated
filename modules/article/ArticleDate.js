import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  const useDate = props?.articleData?.publish && !isNaN(Number(props.articleData.publish)) && !isNaN(new Date(Number(props.articleData.publish))) ? new Date(Number(props.articleData.publish)) : null;
  const dateFormatted = useDate ? useDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, dateFormatted ? /*#__PURE__*/React.createElement("div", null, dateFormatted, " at ", useDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  })) : null);
};
export default Module;