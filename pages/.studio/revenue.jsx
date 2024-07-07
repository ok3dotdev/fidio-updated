import React from 'react';
import StudioLayout from '@/components/Layouts/studio/StudioLayout';

import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';

const pageName = 'revenue';

const Revenue = (props) => {
  return (
    <StudioLayout {...props}>
      <div className='xl:mx-[20rem] md:mx-[3rem]'>
        <h1>revenue</h1>
      </div>
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

export default Revenue;
