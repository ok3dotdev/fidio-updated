/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react'
import { Documentation } from '/modules/development'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'

const pageName = 'documentation'

export const page = props => {
	return (
        <React.Fragment>
            <div className={`${pageName}_Body`}>
                <Documentation { ...props } />
            </div>
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
	return await getServerSidePropsDefault(context, pageDefaults[pageName])
}

export default page