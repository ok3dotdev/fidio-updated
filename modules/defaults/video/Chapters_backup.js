import React from 'react'
import { secondsToHMSString } from '/modules/utility/utility/date'
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss'


/**
 * Overlay ontop of video
 * @param {*} props 
 * @returns 
 */
const Module = props => {
    return (
        <div className={`${props.className} Chapters_Container`}>
            <h4 style={{ marginBottom: '.25rem' }}>Chapters</h4>
            {
                props?.hydratedTimeline?.map
                    ? <div className={`${WatchPageStyles.thumbnailsContainer} Thumbnails_Container tinyBar ${WatchPageStyles.ChaptersListContainer} Chapters_ChaptersListContainer`} ref={props?.chaptersContainerRef}>
                        {
                            props.hydratedTimeline.map((m, i) => (
                                <div key={i} className={`${WatchPageStyles.thumbnailContainer} Thumbnail_Container ${WatchPageStyles.ChapterContainer} Chapter_ChapterContainer`} onClick={props?.seekChapter} modif={i}>
                                    <div className={`${WatchPageStyles.thumbnail} Thumbnail_Thumbnail`} style={{ background: `url(${props?.cdn?.static && m?.media[0] ? `${props.cdn.static}/thumbtrack/${m.media}` : 'img/default/greythumb.jpg'}) no-repeat center/cover` }}>
                                    </div>
                                    <div className={`${WatchPageStyles.ChapterTimeContainer} Chapter_ChapterTimeContainer`}>
                                        {
                                            !isNaN(m?.startOffset)
                                                ? <div className={`${WatchPageStyles.ChapterTime} Chapter_ChapterTime`} style={{ marginTop: '.25rem' }}>{secondsToHMSString(m?.startOffset)}</div>
                                                : ''
                                        }
                                        <div className={`${WatchPageStyles.ChapterLineThrough} Chapter_ChapterLineThrough ${i === props.hydratedTimeline.length -1 ? `${WatchPageStyles.ChapterLineThroughLast} Chapter_ChapterLineThroughLast` : ''}`}></div>
                                    </div>
                                    <h4 className={`${WatchPageStyles.thumbnailTitle}`}>{m?.name ?? ''}</h4>
                                </div>
                            ))
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default Module