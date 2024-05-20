/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import resolveConfig, { resolveVariables, pageDefaults } from '/app.config';
import {
  basicError,
  generateComponent,
  handlePropsPriority,
  resolvePage,
  getServerSidePropsDefault,
  resolveDefaults,
} from '/modules/utility.js';
import { isObjectEmpty } from '/modules/util';
import { Menu } from '/modules/menu/';
import Layout from '/customModules/features/Layout';
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
