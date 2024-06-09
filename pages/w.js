/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { WatchPage } from '/modules/streaming/watch';
import WatchLayout from '../components/Layouts/watch/WatchLayout';

const pageName = 'w';

export const page = (props) => {
  return (
    <React.Fragment>
      <WatchLayout>
        <PageContainer {...props} pageName={pageName}>
          <WatchPage {...props} />
        </PageContainer>
      </WatchLayout>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
