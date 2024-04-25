import React from 'react'
import { ArticleAuthor, ArticleDate, ArticleTitle, SingleArticle } from '../modules/article'

const Module = props => {
    return (
        <div className={`${props?.ArticleStyles?.container} Article_Container ${props.className}`} style={props?.template?.container ?? null}>
            <div className={`${props?.ArticleStyles?.containerInternal}`} style={props?.template?.internalContainer ?? null}>
                <ArticleTitle { ...props } />
                <div><span>{props?.articleData?.authorData ? 'By' : ''}</span>&nbsp;<ArticleAuthor { ...props } /></div>
                <ArticleDate { ...props } />
                <SingleArticle { ...props } />
            </div>
        </div>
    )
}

export default Module
