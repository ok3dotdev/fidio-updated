import React from 'react'
import { Chat, Player, Prompt } from '../modules/streaming/watch'

const Module = props => {
    return (
        <div className={`${props?.WatchPageStyles?.videoQuadrant} WatchPage_VideoQuadrant`} style={{ height: `calc(100vh - ${props?.menuHeight})` }}>
            <Prompt { ...props } />
            <div className={`${props?.WatchPageStyles?.videoExternalContainer}`}>
                <Player { ...props } />
                <Chat  { ...props } />
            </div>
        </div>
    )
}

export default Module
