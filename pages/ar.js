/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import { Menu } from '/modules/menu/';

const pageName = 'ar';

export const page = (props) => {
  return (
    <React.Fragment>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <PageContainer {...props} pageName={pageName}>
        <AppConfigLayout></AppConfigLayout>
      </PageContainer>
=======
      {/* <PageContainer {...props} pageName={pageName}> */}
      <AppConfigLayout></AppConfigLayout>
      {/* </PageContainer> */}
>>>>>>> Stashed changes
=======
      {/* <PageContainer {...props} pageName={pageName}> */}
      <AppConfigLayout></AppConfigLayout>
      {/* </PageContainer> */}
>>>>>>> Stashed changes
=======
      {/* <PageContainer {...props} pageName={pageName}> */}
      <AppConfigLayout></AppConfigLayout>
      {/* </PageContainer> */}
>>>>>>> Stashed changes
=======
      {/* <PageContainer {...props} pageName={pageName}> */}
      <AppConfigLayout></AppConfigLayout>
      {/* </PageContainer> */}
>>>>>>> Stashed changes
    </React.Fragment>
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
