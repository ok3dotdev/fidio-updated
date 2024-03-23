import Link from 'next/link';
import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  return <React.Fragment>
            <span className={`${ArticleStyles.author}`}><Link href={`/p?u=${props?.articleData?.authorData?.id}`}>{props?.articleData?.authorData?.username ?? ''}</Link></span>
        </React.Fragment>;
};
export default Module;