/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'

const pageName = 'test'

export const page = props => {
	return (
        <div pagename={pageName}>
            <div>
                {/* Put Children Here for this page */}
            </div>
        </div>
	)
}

export default page