import React from 'react'
import ChatStyles from '/modules/streaming/chat/Chat.module.scss'
import { Reaction } from '/modules/streaming/chat'

const Module = props => {
    const promptDonate = props.promptDonate
    const customDonate = props.customDonate

    const quickDonateConfig = [
        {
            value: 1,
            type: 'number'
        },
        {
            value: 5,
            type: 'number'
        },
        {
            type: 'custom'
        },
        {
            type: 'reaction'
        }
    ]

    return (
        <div className={`${ChatStyles.commandBarContainer} Chat_commandBarContainer`}>
            <div className={`${ChatStyles.quickDonateContainer} Chat_quickDonateContainer`}>
                {
                    quickDonateConfig?.map
                        ? quickDonateConfig.map((m, i) => (
                            <div key={i} className={`${ChatStyles.chatQuickActionContainer} Chat_chatQuickActionContainer`}>
                                {
                                    m?.type === 'number'
                                        ? <button className={`${ChatStyles.fixedDonation} Chat_fixedDonation flex gap-p2`} style={{ alignContent: 'center', background: 'black', fontSize: '1rem' }} onClick={promptDonate} value={m.value}>
                                            <span className={`material-icons`} style={{ fontSize: '1.25rem', color: '#fece30' }}>paid</span>
                                            <span className={`${ChatStyles.donationValue} Chat_donationValue`}>{m.value}</span>
                                        </button>
                                    : m?.type === 'custom'
                                        ? <div className={`${ChatStyles.customDonationContainer} Chat_customDonationContainer flex gap-p2`} style={{ background: 'black', borderRadius: '.5rem' }}>
                                            <div className={`${ChatStyles.customDonation} Chat_customDonation flex gap-p2`} style={{ alignItems: 'center', paddingLeft: '.5rem' }}>
                                                <span className={`material-icons`} style={{ fontSize: '1.25rem', color: '#fece30' }}>paid</span>
                                                <input type='number' placeholder={'00..'} defaultValue={20} className={`${ChatStyles.squeezedInput} ${ChatStyles.customDonationInput} Chat_customDonationInput`} style={{ borderRadius: '.5rem', borderWidth: 0, fontSize: '1.125rem', fontWeight: '600' }} ref={customDonate} />
                                            </div>
                                            <button className={`material-icons`} style={{ fontSize: '1.25rem'}} onClick={promptDonate} modif='customDonate'>payment</button>
                                        </div>
                                    : m?.type === 'reaction'
                                        ? <Reaction { ...props } m={m} i={i} />
                                        : null
                                }
                            </div>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Module
