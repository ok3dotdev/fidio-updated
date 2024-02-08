/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'

const pageName = 'test'

export const page = props => {
	return (
        <React.Fragment>
            {
                props.dev
                    ? <PageContainer { ...props } pageName={pageName} />
                    : null
            }
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
	let currentProps = await getServerSidePropsDefault(context, pageDefaults[pageName])
    return await getServerSidePropsFunc(currentProps, context)
}

export default page
