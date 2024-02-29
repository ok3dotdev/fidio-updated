import React from 'react'
import { SingleArticle } from '../modules/article'

const Module = props => {
    return (
        <div className={`${props?.ArticleStyles?.container} Article_Container ${props.className}`} style={props?.template?.container ?? null}>
            <div className={`${props?.ArticleStyles?.containerInternal}`} style={props?.template?.internalContainer ?? null}>
                <SingleArticle { ...props } />
            </div>
        </div>
    )
}

export default Module
