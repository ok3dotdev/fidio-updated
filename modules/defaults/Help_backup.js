import React from 'react'
import { HelpClose, HelpSearch, HelpResult } from '/modules/help'

const Module = props => {
    return (
        <div>
            <HelpClose { ...props }></HelpClose>
            <h5 className={`Misc_Label Help_Label`} style={{ marginTop: 0 }}>Help</h5>
            <HelpSearch { ...props } handleUpdateSearch={props.handleUpdateSearch} queryRef={props.queryRef}></HelpSearch>
            <div className='Help_ResultsContainer' style={{ padding: '.25rem 0rem', display: 'grid', gap: '.5rem' }}>
                {
                    Array.isArray(props.currentResults) && props.currentResults.length > 0
                        ? props.currentResults.map((m, i) => (
                            <HelpResult { ...props } m={m} i={i}></HelpResult>
                        ))
                        : props.queryRef?.current?.value !== ''
                            ? <div></div>
                        : <div style={{ textAlign: 'center', fontSize: '.95rem' }}>Try Searching for something</div>
                }
            </div>
        </div>
    )
}

export default Module
