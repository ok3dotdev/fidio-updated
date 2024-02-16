/* eslint-disable react-hooks/rules-of-hooks */

<<<<<<< HEAD
import React from 'react';
import { PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
=======
import React from 'react'
import { AppConfigLayout, PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { Menu } from '/modules/menu/'
>>>>>>> fidio-app-router

const pageName = 'w'

<<<<<<< HEAD
export const page = (props) => {
  return (
    <React.Fragment>
      <PageContainer {...props} pageName={pageName} />
    </React.Fragment>
  );
};
=======
export const page = props => {
	return (
    <React.Fragment>
        <PageContainer { ...props } pageName={pageName}>
            <Menu></Menu>
            <AppConfigLayout></AppConfigLayout>
        </PageContainer>
    </React.Fragment>
	)
}
>>>>>>> fidio-app-router

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default page;
