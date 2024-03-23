import React from 'react';
import ArticleStyles from './Article.module.scss';
const Module = props => {
  return <React.Fragment>
            {props?.articleHtml && props?.articleData?.approved ? <div>
                        <div dangerouslySetInnerHTML={props?.createMarkup ? props.createMarkup() : null} ref={props?.htmlRef ?? null}></div>
                    </div> : null}
        </React.Fragment>;
};
export default Module;