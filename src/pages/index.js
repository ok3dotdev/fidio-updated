/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
// import Hero from '../../customModules/features/Hero';
import HomeLayout from '../../customModules/features/HomeLayout';
import { homePageData } from '../../customModules/features/seo-data';
import Hero from '../../customModules/features/Hero.new';
import ShowGrid from '../components/ShowGrid';
import Link from 'next/link';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import { Menu } from '/modules/menu/';

const pageName = 'Index';

export const page = (props) => {
  return (
    <React.Fragment>
      {/* <PageContainer { ...props } pageName={pageName} /> */}
      <HomeLayout
        useProps={props}
        pageName={pageName}
        pageData={homePageData}
        props={props}
      >
        <Hero {...props} />
        <div className='max-w-7xl mx-auto py-24 font-Archivo'>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex items-start flex-col px-4 lg:px-6 justify-center w-full'>
              <h2 className='text-[24px] lg:text-[48px] font-Archivo'>
                Concert-to-go
              </h2>
              <p className='leading-8 font-sans text-[16px] lg:text-[20px] pt-6'>
                Never miss a live performance. <br /> Buy tickets and watch your
                show, wherever you are, however you like.
              </p>
            </div>
            <img
              className='lg:max-w-[50%]'
              src='/img/internal/concert-to-go.png'
              alt='concert to go image'
            />
          </div>
          <div className='flex flex-col-reverse lg:flex-row mt-6 lg:mt-0'>
            <img
              className='lg:max-w-[50%] max-w-[90%] mx-auto'
              src='/img/internal/engage.png'
              alt='concert to go image'
            />
            <div className='flex items-start flex-col px-4 lg:px-6 justify-center w-full'>
              <h2 className='text-[24px] lg:text-[48px]'>
                Engage with fellow fans
              </h2>
              <p className='leading-8 font-sans text-[16px] lg:text-[20px] pt-6'>
                Chat with other concert-goers with our live chat feature.
                <br /> You can finally say, “Where my people at?”
              </p>
            </div>
          </div>
        </div>
        <ShowGrid />
        <div className='max-w-7xl mx-auto py-24'>
          <div className='flex gap-1 px-4 lg:px-6 items-center'>
            <h3 className='text-sm font-sans'>Ready to stream?</h3>
            <div className='relative'>
              <img
                className='absolute -top-[32px] z-0 w-[90%] h-[100px]'
                src='/img/internal/swirls.png'
                alt='swirls'
              />
              <Link
                href='/signin'
                className='relative py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans text-black z-10 text-sm'
              >
                Sign up for free with Google
              </Link>
            </div>
          </div>
        </div>
      </HomeLayout>
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
