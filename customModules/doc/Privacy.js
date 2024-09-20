import React from 'react'
import privacy from '../../public/doc/internal/privacy'

const Module = props => {
    const [ fetchBusy, setFetchBusy ] = React.useState(false)
    const [ pageError, setPageError ] = React.useState(null)
    const [ validCc, setValidCc ] = React.useState(true)
    const [ cartMessages, setCartMessages ] = React.useState([])

    return (
        <React.Fragment>
            <div style={{ padding: '4rem' }}>
                <div style={{ fontWeight: 600 }}>Privacy</div>
                <br></br>
                <div>{privacy}</div>
            </div>
        </React.Fragment>
    )
}

export default Module
