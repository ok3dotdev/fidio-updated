import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  return <React.Fragment>
            <div>
                <div className={`${ArticleStyles.title}`}>{props?.articleData?.title ?? ''}</div>
            </div>
        </React.Fragment>;
};
export default Module;