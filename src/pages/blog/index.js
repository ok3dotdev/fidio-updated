/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react';
// import { PageContainer } from '/modules/internal';
import { pageDefaults } from '../../../app.config';
import { getServerSidePropsDefault } from '../../../modules/utility';
import HomeLayout from '../../../customModules/features/HomeLayout';
import { homePageData } from '@/customModules/features/seo-data';



const pageName = 'Blog';

export const page = (props) => {
  const useMenu = true;
  const useAppConfigLayout = true;
  console.log("props1112", props)
  return (
    <HomeLayout
    pageName={pageName}
    pageData={homePageData}
    props={props}
    >
        <div className=''>
            <div className='mt-[76px]'>
                <h1>Hello world</h1>
            </div>
        </div>
    </HomeLayout>
  );
};

// export async function getStaticProps() {
//   const res = await fetch('https://my-json-server.typicode.com/ok3dotdev/articles/posts')
//   const blogs = await res.json()
//   return { props: { blogs } }
// }

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
