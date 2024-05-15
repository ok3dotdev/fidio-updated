import React from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import BrowseLayout from '../components/Layouts/BrowseLayout';

const pageName = 'browse';

const page = (props) => {
  console.log('props', props);
  return (
    <div className='w-full h-scren'>
      <BrowseLayout>
        <h1>browse</h1>
      </BrowseLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
