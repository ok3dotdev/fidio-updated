import React from 'react'
import terms from '../../public/doc/internal/terms'

const Module = props => {
    const [ fetchBusy, setFetchBusy ] = React.useState(false)
    const [ pageError, setPageError ] = React.useState(null)
    const [ validCc, setValidCc ] = React.useState(true)
    const [ cartMessages, setCartMessages ] = React.useState([])

    return (
        <React.Fragment>
            <div style={{ padding: '4rem' }}>
                <div style={{ fontWeight: 600 }}>Terms</div>
                <br></br>
                <div>{terms}</div>
            </div>
        </React.Fragment>
    )
}

export default Module
