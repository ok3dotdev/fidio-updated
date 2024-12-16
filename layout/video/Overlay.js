import React from 'react'
import ReactDOM from 'react-dom';
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss'
import { westernMoneyFormat } from '/modules/utility/ecommerce'
import { fireGlobalEvent } from '/modules/utility/utility'


/**
 * Overlay ontop of video
 * @param {*} props 
 * @returns 
 */
const Module = props => {
    const [ useOverlayMatrix, setUseOverlayMatrix ] = React.useState({})
    const [ iteration, setIteration ] = React.useState(0)
    const doSetMuted = React.useCallback(e => {
        if (props?.handleSetMuted) {
            props.handleSetMuted(false)
        }
    })

    // Force updates manual paint into DOM
    props._LocalEventEmitter.unsubscribe(`overlay-${props?.playerName}`)
    props._LocalEventEmitter.subscribe(`overlay-${props?.playerName}`, e => {
        if (e?.dispatch === 'update' && e.data) {
            setIteration(iteration + 1)
            const next = structuredClone(e.data)
            setUseOverlayMatrix(next)
            const c = document.getElementsByClassName(`${props.playerName}-overlay`)?.[0]
            if (c) {
                try {
                    Object.entries(next)?.map(m => m[0]).filter(m => next?.[m]).map((m, i) => {
                        const d = renderOverlay(m, next[m], i)
                        const c2 = document.getElementsByClassName(`MatrixOverlay_Section_${m}`)?.[0]
                        const tempContainer = document.createElement('div')
                        ReactDOM.render(d, tempContainer) // Render DOM elements
                        if (c2) {
                            c2.remove()
                        }
                        c.appendChild(tempContainer.firstChild) // Manually append into DOM
                        const b = document.getElementsByClassName('fireGlobalEvent')
                        for (let j = 0; j < b.length; j++) {
                            b[j].onclick = handleFireGlobalEvent
                        }
                    })
                } catch (err) {
                    console.log('update_overlay_fail', err) // fail silently
                }
            }
        }
    })

    const handleFireGlobalEvent = React.useCallback(async e => {
        fireGlobalEvent(e, props._LocalEventEmitter)
    })

    const renderOverlay = (section, items = [], i) => {
        const item = items[(props?.overlayMatrixState?.offset ?? 0) % items.length]
        if (item) {
            return (
                <div className={`MatrixOverlay_Section MatrixOverlay_Section_${section}`} key={i}>
                    <div className={`MatrixOverlay_Item MatrixOverlay_Item_${item?.domain}`}>
                        {/* Handle the section timeline data as needed */}
                        {
                            item?.sectionType === 'text'
                                ? <div className='MatrixOverlay_textContainer'>
                                    {
                                        item?.lead ?? item?.name
                                            ? <div className='MatrixOverlay_lead'>{item.lead ?? item?.name}</div>
                                            : null
                                    }
                                    {
                                        item?.description
                                            ? <div className='MatrixOverlay_description'>{item.description}</div>
                                            : null
                                    }
                                    {
                                        item?.password
                                            ? <div className='MatrixOverlay_password'>{item.password}</div>
                                            : null
                                    }
                                </div>
                            : item?.sectionType === 'img'
                                ? <div className='MatrixOverlay_clipContainer'>
                                    {
                                        item?.lead ?? item?.name
                                            ? <div className='MatrixOverlay_lead'>{item.lead ?? item?.name}</div>
                                            : null
                                    }
                                    {
                                        item?.media
                                            ? <div className='MatrixOverlay_img'>
                                                <img src={`${item.media}`} />
                                            </div>
                                            : null
                                    }
                                </div>
                            : item?.sectionType === 'product'
                                ? <div className='MatrixOverlay_productContainer'>
                                    {
                                        item?.media
                                            ? <div className='MatrixOverlay_img'>
                                                <img src={`${item.media}`} />
                                            </div>
                                            : null
                                    }
                                    <div className='MatrixOverlay_Content'>
                                        <div className='MatrixOverlay_section'>
                                            {
                                                item?.lead ?? item?.name
                                                    ? <div className='MatrixOverlay_lead'>{item.lead ?? item?.name}</div>
                                                    : null
                                            }
                                            {
                                                item?.description
                                                    ? <div className='MatrixOverlay_description'>{item.description}</div>
                                                    : null
                                            }
                                        </div>
                                        <div className='MatrixOverlay_section'>
                                            {
                                                item?.ticketLead
                                                    ? <div className='MatrixOverlay_ticketLead'>{item.ticketLead}</div>
                                                    : null
                                            }
                                            {
                                                item?.ticketDescription
                                                    ? <div className='MatrixOverlay_ticketDescription'>{item.ticketDescription}</div>
                                                    : null
                                            }
                                            {
                                                item?.price
                                                    ? <div style={{ alignItems: 'center', display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                                                        <div>
                                                            <button className='fireGlobalEvent' item={item?.product?.id} selectedstyle={item?.product?.styles?.[0]?.sid} currentoption={item?.product?.styles?.[0]?.option?.[0]?.sid} action='add_to_cart'>Get Tickets</button>
                                                        </div>
                                                        <div style={{ fontSize: '1rem', fontWeight: 600 }}>
                                                            <span>{item?.price?.symbol ?? null}</span>
                                                            <span>{westernMoneyFormat.format(item?.price?.price) ?? '0'} {item?.price?.currency ?? ''}</span>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            )
        }
        return (<div className={`MatrixOverlay_Section_${section}`}></div>)
    }

    return (
        <div className={`${WatchPageStyles.overlayContainer} ${props.className} Overlay_Container`}>
            {
                props?.muted
                    ? <div style={{ position: 'absolute', left: '2.5%', top: '2.5%', zIndex: '30' }}>
                        <button className='overlay_button' style={{ fontWeight: 700, padding: '.25rem 2rem' }} onClick={doSetMuted}>Tap to unmute</button>
                    </div>
                    : null
            }
            <div className='MatrixOverlay_Container'>
                <div style={{ display: 'none' }}>Matrix Overlay Data</div>
                <div className={`${props.playerName}-overlay`}>
                </div>
            </div>
            <div className={`shadowOverlay`}></div>
        </div>
    )
}

export default Module