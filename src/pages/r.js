/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { Menu } from '/modules/menu/';

const pageName = 'r'

export const page = props => {
	return (
        <React.Fragment>
            <Menu {...useProps}></Menu>
            <PageContainer { ...props } pageName={pageName} />
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
