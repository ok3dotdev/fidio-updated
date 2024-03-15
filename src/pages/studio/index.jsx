/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

import StudioLayout from '@/components/Layouts/StudioLayout';
import StudioDash from '@/components/Layouts/StudioDash';

const pageName = 'studio';

export const page = (props) => {
  return (
    <StudioLayout {...props}>
      <StudioDash {...props} />
    </StudioLayout>
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
