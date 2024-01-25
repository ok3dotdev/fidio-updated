/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import HomeLayout from '../../customModules/features/HomeLayout';
import { privacyPolicyPageData } from '../../customModules/features/seo-data';

const pageName = 'privacy'

export const page = props => {
	return (
            <HomeLayout
              useProps={props}
              pageName={pageName}
              pageData={privacyPolicyPageData}
            >
              <PageContainer { ...props } pageName={pageName} />
            </HomeLayout>
	)
}

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
