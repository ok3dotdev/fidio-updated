import React from 'react'

const Module = props => {
    const [ fetchBusy, setFetchBusy ] = React.useState(false)
    const [ pageError, setPageError ] = React.useState(null)
    const [ validCc, setValidCc ] = React.useState(true)
    const [ cartMessages, setCartMessages ] = React.useState([])

    return (
        <React.Fragment>
            <div>My Custom Module</div>
        </React.Fragment>
    )
}

export default Module
