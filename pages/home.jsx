/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { getServerSidePropsDefault } from '/modules/utility.js';
import HomeLayout from '/customModules/features/HomeLayout';
import HomeDash from '/customModules/features/HomeDash';

const pageName = 'home';

export const page = (props) => {
  return (
    <div className='relative'>
      <HomeLayout pageName={pageName} pageData={''} props={props}>
        <HomeDash {...props} />
      </HomeLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
