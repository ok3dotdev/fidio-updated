import React from 'react'
import { Player, Prompt } from '/modules/streaming/watch'
import { Chat } from '/modules/streaming/chat'
import DonateButton from '/modules/ecommerce/donate/DonateButton'

const Module = props => {
    return (
        <div className={`${props?.WatchPageStyles?.videoQuadrant} WatchPage_VideoQuadrant`} style={{ height: `calc(100vh - ${props?.menuHeight})` }}>
            <Prompt { ...props } />
            <div className={`${props?.WatchPageStyles?.videoExternalContainer}`}>
                <div className={`${props?.WatchPageStyles?.videoInternalContainer}`}>
                    <Player { ...props } />
                    <div className={`${props?.WatchPageStyles?.commandPanelContainer} ${props?.chatState ? `${props?.WatchPageStyles?.commandPanelContainerOpen}` : ``}`}>
                        <div>
                            <div></div>
                            <div className={`${props?.WatchPageStyles?.metaContainer}`}>
                                <h3 className={`${props?.WatchPageStyles?.title}`}>{props?.watchMeta?.title ?? ''}</h3>
                                <div className={`${props?.WatchPageStyles?.socialContainer}`}>
                                    <DonateButton { ...props } donateTo={`${props?.watchMeta?.donateTo ?? ''}`}></DonateButton>
                                </div>
                                <p>{props?.watchMeta?.description ?? ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Chat  { ...props } />
            </div>
        </div>
    )
}

export default Module
