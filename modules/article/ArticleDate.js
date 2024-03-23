import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  const useDate = props?.articleData?.publish && !isNaN(Number(props.articleData.publish)) && !isNaN(new Date(Number(props.articleData.publish))) ? new Date(Number(props.articleData.publish)) : null;
  const dateFormatted = useDate ? useDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : null;
  return <React.Fragment>
            {dateFormatted ? <div>{dateFormatted} at {useDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      })}</div> : null}
        </React.Fragment>;
};
export default Module;