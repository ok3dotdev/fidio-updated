import React from 'react'
import ChatStyles from '/modules/streaming/chat/Chat.module.scss'

const Module = props => {
    const donationsLedger = props.donationsLedger
    const calculateAnimationStyles = props.calculateAnimationStyles

    return (
        <div className={`${ChatStyles.donationsLedgerContainer} Chat_donationsLedgerContainer`}>
            {
                donationsLedger?.length > 0
                    ? <div className={`${ChatStyles.chatDonationsContainer} Chat_chatDonationContainer tinyBar`}>
                        {
                            donationsLedger.map((m, i) => (
                                <div className={`${ChatStyles.chatDonationLedger} Chat_chatDonationLedger`} key={m.id ?? i} index={i} recordid={m.id ?? ''}>
                                    {
                                        m?.donateTo
                                            ? <div className={`${ChatStyles.chatDonationItemContainer} Chat_chatDonationItemContainer`}>
                                                <div className={`${ChatStyles.chatDonationItem} Chat_chatDonationItem`} style={calculateAnimationStyles(m)} key={i} index={i}>
                                                    <div className={`${ChatStyles.chatDonationItemText} Chat_chatDonationItemText`}>{m.priceSymbol}{m.priceTotal} {m.priceCurrency}</div>
                                                </div>
                                            </div>
                                            : null
                                    }
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
