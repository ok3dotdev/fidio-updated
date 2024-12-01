import React from 'react'
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss'


const Module = props => {
    const { fetchBusy, useVideos, videosContainerRef, loadVideo } = props

    return (
        <div className={`${WatchPageStyles.externalThumbnailContainer} Thumbnails_ExternalContainer`} style={{ position: 'relative' }}>
            {
                fetchBusy === 'videos'
                    ? <div className='fetchBusy' style={{ position: 'absolute', background: 'transparent' }}></div>
                    : null
            }
            <div className={`spinner spinnerBig ${fetchBusy === 'videos' ? 'opacity1 spinnerRelative' : 'opacity0 spinnerHide'}`} style={{ position: 'absolute', left: '49vw', top: '1rem' }}></div>
            <div className={`${WatchPageStyles.thumbnailsContainer} ${fetchBusy === 'videos' ? WatchPageStyles.thumbnailsContainerBusy : ''} Thumbnails_Container tinyBar`} ref={videosContainerRef}>
                {
                    useVideos.map((m, i) => (
                        <div key={i} className={`${WatchPageStyles.thumbnailContainer} Thumbnail_Container`}>
                            <div className={`${WatchPageStyles.thumbnail} ${[ 'processing', 'queued' ].indexOf(m?.status) > -1 ? WatchPageStyles.thumbnailProcessing : ''} Thumbnail_Thumbnail`} style={{ background: `url(${props?.cdn?.static && m?.thumbtrack[0] ? `${props.cdn.static}/thumbtrack/${m.thumbtrack[0]}` : 'img/default/greythumb.jpg'}) no-repeat center/cover` }} onClick={loadVideo} item={m?.id}>
                            </div>
                            <h4 className={`${WatchPageStyles.thumbnailTitle}`}>{m?.title ?? ''}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Module