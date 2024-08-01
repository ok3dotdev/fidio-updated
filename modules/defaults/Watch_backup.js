import React from 'react'
import Link from 'next/link'
import { Player, Prompt } from '/modules/streaming/watch'
import { Chat } from '/modules/streaming/chat'
import DonateButton from '/modules/ecommerce/donate/DonateButton'

const Module = props => {
    console.log(props?.watchMeta)
    return (
        <div className={`${props?.WatchPageStyles?.videoQuadrant} WatchPage_VideoQuadrant`} style={{ height: `calc(100vh - ${props?.menuHeight})` }}>
            <Prompt { ...props } />
            <div className={`${props?.WatchPageStyles?.videoExternalContainer}`}>
                <div className={`${props?.WatchPageStyles?.videoInternalContainer}`}>
                    <Player { ...props } />
                    <div className={`${props?.WatchPageStyles?.commandPanelContainer} ${props?.chatState ? `${props?.WatchPageStyles?.commandPanelContainerOpen}` : ``}`}>
                        <div>
                            {
                                props?.watchMeta?.id
                                    ? <div className={`${props?.WatchPageStyles?.metaContainer}`}>
                                        <h3 className={`${props?.WatchPageStyles?.title}`}>{props?.watchMeta?.title ?? ''}</h3>
                                        <div className={`${props?.WatchPageStyles?.metaContainerInner} gap-p10`}>
                                            <div className={`${props?.WatchPageStyles?.metaAuthorMetaContainer} gap-p10`}>
                                                <img className={`${props?.WatchPageStyles?.watchIcon}`} src={`${props?.watchMeta?.authorData?.icon ?? 'img/default/greyIcon.png'}`} />
                                                <div>
                                                    <Link href={`/p`}>
                                                        <h4 className={`${props?.WatchPageStyles?.username}`}>{`${props?.watchMeta?.authorData?.username ?? ''}`}</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={`${props?.WatchPageStyles?.metaSimpleContainer}`}>
                                                <div className={`${props?.WatchPageStyles?.socialContainer}`}>
                                                    <DonateButton { ...props } donateTo={`${props?.watchMeta?.donateTo ?? ''}`}></DonateButton>
                                                </div>
                                            </div>
                                        </div>
                                        <p>{props?.watchMeta?.description ?? ''}</p>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <Chat  { ...props } />
            </div>
        </div>
    )
}

export default Module
