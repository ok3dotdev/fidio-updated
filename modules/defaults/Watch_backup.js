import React from 'react'
import Link from 'next/link'
import { Player, Prompt } from '/modules/streaming/watch'
import { Chat } from '/modules/streaming/chat'
import DonateButton from '/modules/ecommerce/donate/DonateButton'
import { CommentInternal } from '/modules/comment'
import { LoadComments } from '/modules/comment/parts'

const Module = props => {
    return (
        <div className={`${props?.WatchPageStyles?.videoQuadrant} WatchPage_VideoQuadrant`} style={{ height: `calc(100vh - ${props?.menuHeight})` }}>
            <Prompt { ...props } />
            <div className={`${props?.WatchPageStyles?.videoExternalContainer}`}>
                <div className={`${props?.WatchPageStyles?.videoInternalContainer}`}>
                    <div className={`${props?.WatchPageStyles?.videoChatContainer}`}>
                        <Player { ...props } />
                        <Chat  { ...props } />
                    </div>
                    <div className={`${props?.WatchPageStyles?.commandPanelContainer} ${props?.chatState ? `${props?.WatchPageStyles?.commandPanelContainerOpen}` : ``}`}>
                        <div>
                            {
                                props?.watchMeta?.id
                                    ? <div className={`${props?.WatchPageStyles?.metaContainer}`}>
                                        <h3 className={`${props?.WatchPageStyles?.title}`}>{props?.watchMeta?.title ?? ''}</h3>
                                        <div className={`${props?.WatchPageStyles?.metaContainerInner} gap-p10`}>
                                            <div className={`${props?.WatchPageStyles?.metaAuthorMetaContainer} gap-p10`}>
                                                <Link href={`/p?u=${props?.watchmeta?.authorData?.id}`} style={{ display: 'block' }}>
                                                    <img className={`${props?.WatchPageStyles?.watchIcon}`} src={`${props?.watchMeta?.authorData?.icon ?? 'img/default/greyIcon.png'}`} />
                                                </Link>
                                                <div>
                                                    <Link href={`/p?u=${props?.watchMeta?.authorData?.id}`} style={{ display: 'block' }}>
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
                                        {
                                            props?.watchMeta?.description !== ''
                                                ? <p style={{ marginTop: '1rem', fontSize: '.9rem' }}>{props.watchMeta.description}</p>
                                                : ''
                                        }
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                    <div>
                        {
                            props?.watchData?.id
                                ? <div className={`${props?.WatchPageStyles?.commentExternalContainer}`}>
                                    <CommentInternal { ...props } addComment={true} commentUseParent={props.watchData.id} commentUseParentType={props?.watchData?.__typename} pipe={'watch_comment'} />
                                    <LoadComments { ...props } pipe={'watch_comment'} commentUseParent={props.watchData.id} commentUseParentType={props?.watchData?.__typename} />
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
