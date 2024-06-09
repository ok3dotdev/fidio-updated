/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import { Menu } from '/modules/menu/';
import HomeLayout from '../customModules/features/HomeLayout';

const pageName = 'privacy';

export const page = (props) => {
  return (
    <HomeLayout pageName={pageName} pageData={''} props={props}>
      <PageContainer {...props} pageName={pageName}>
        <AppConfigLayout></AppConfigLayout>
      </PageContainer>
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default page;
