import React from 'react'
import BrowseHeader from '@/components/Layouts/browse/BrowseHeader.jsx';


const Module = props => {

    return (
        <div>
            <BrowseHeader {...props} className={'absolute'} />
        </div>
    )
}

export default Module
