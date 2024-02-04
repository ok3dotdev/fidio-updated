/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import AltMenu from '../../customModules/features/AltMenu';

const pageName = 'p';

export const page = props => {
	return (
        <React.Fragment>
            <AltMenu {...props}></AltMenu>
            <PageContainer { ...props } pageName={pageName} />
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
