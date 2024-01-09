/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { getServerSidePropsDefault } from '/modules/utility.js'

const pageName = 'test'

export const page = props => {
    const useMenu = true
    const useAppConfigLayout = true
	return (
        <React.Fragment>
            <PageContainer { ...props } pageName={pageName} useMenu={useMenu} useAppConfigLayout={useAppConfigLayout} />
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
	return await getServerSidePropsDefault(context)
}

export default page