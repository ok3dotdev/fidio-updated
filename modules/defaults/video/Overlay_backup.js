import React from 'react'
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss'
import { Prompt } from '/modules/streaming/watch'


/**
 * Overlay ontop of video
 * @param {*} props 
 * @returns 
 */
const Module = props => {
    const doSetMuted = React.useCallback(e => {
        if (props?.handleSetMuted) {
            props.handleSetMuted(false)
        }
    })
    return (
        <div className={`${WatchPageStyles.overlayContainer} ${props.className} Overlay_Container`}>
            {
                props?.muted
                    ? <div style={{ position: 'absolute', left: '2.5%', top: '5%' }}>
                        <button className='overlay_button' style={{ fontWeight: 700, padding: '.25rem 2rem' }} onClick={doSetMuted}>Tap to unmute</button>
                    </div>
                    : null
            }
            <Prompt { ...props } />
            <div className='shadowOverlay'></div>
        </div>
    )
}

export default Module