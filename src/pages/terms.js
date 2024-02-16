/* eslint-disable react-hooks/rules-of-hooks */

<<<<<<< HEAD
import React from 'react';
import { PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import HomeLayout from '../../customModules/features/HomeLayout';
import { termsOfServicePageData } from '../../customModules/features/seo-data';
import Menu from '../../customModules/features/Menu';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import dir from '/customModules/pages/';

const pageName = 'terms';
const CustomPageChildren = dir[pageName];

export const page = (props) => {
  return (
    <React.Fragment>
      <PageContainer {...props} pageName={pageName}>
        <CustomPageChildren {...props} />
      </PageContainer>
    </React.Fragment>
  );
};
=======
import React from 'react'
import { AppConfigLayout, PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { Menu } from '/modules/menu/'

const pageName = 'terms'

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
>>>>>>> 75280bef7f51a655cd6a110cf4d272154a94eaf3

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default page;
