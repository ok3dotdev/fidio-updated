/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';

import StudioLayout from '@/components/Layouts/studio/StudioLayout';
import StudioDash from '@/components/Layouts/studio/StudioDash';

const pageName = 'studio';

const Page = (props) => {
  return (
    <StudioLayout {...props} showNav showButtons={true}>
      <StudioDash {...props} />
    </StudioLayout>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Page;
