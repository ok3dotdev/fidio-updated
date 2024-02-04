/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import HomeLayout from '../../customModules/features/HomeLayout';
import { termsOfServicePageData } from '../../customModules/features/seo-data';
import Menu from '../../customModules/features/Menu';

const pageName = 'terms'

export const page = props => {
	return (
        <React.Fragment>
          <HomeLayout
            props={props}
            pageName={pageName}
            pageData={termsOfServicePageData}
          >
            <PageContainer { ...props } pageName={pageName} />
          </HomeLayout>
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
