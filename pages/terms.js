/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import HomeLayout from '/customModules/features/HomeLayout';
import { termsOfServicePageData } from '/customModules/features/seo-data';
import Menu from '/customModules/features/Menu';
import { getServerSidePropsFunc } from '/appServer/serverProps';
// import dir from '/customModules/pages/';
import Terms from '/customModules/doc/Terms';

const pageName = 'terms';
// const CustomPageChildren = dir[pageName];

export const page = (props) => {
  return (
    <HomeLayout pageName={pageName} pageData={''} props={props}>
      <PageContainer {...props} pageName={pageName}>
        <Terms />
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
