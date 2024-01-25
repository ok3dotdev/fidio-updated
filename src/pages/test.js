/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { getServerSidePropsDefault } from '/modules/utility.js'

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
	return await getServerSidePropsDefault(context)
}

export default page