/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import HomeLayout from '/customModules/features/HomeLayout';
import { homePageData } from '/customModules/features/seo-data';
import LandingPageHero from '@/components/common/LandingPageHero';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import ImageText from '@/components/ImageText';
import BulletCard from '@/components/cards/BulletCard';
import { featuresList } from '@/lib/constants';

const pageName = 'Index';

export const page = (props) => {
  return (
    <React.Fragment>
      <HomeLayout
        useProps={props}
        pageName={pageName}
        pageData={homePageData}
        props={props}
        className='bg-dashBg text-center'
      >
        <LandingPageHero />
        <ImageText
          img={'https://d2ib7gxb0luc1i.cloudfront.net/img/desktop-bg.png'}
          heading={'The Future of African Music is Here'}
          description={
            'Fidio goes beyond traditional streaming platforms. We offer cutting-edge features designed to elevate the virtual concert experience for artists, promoters, and fans alike.'
          }
          direction='reverse'
        />
        <div className='space-y-8 mt-12 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto'>
          {featuresList.map((item, idx) => (
            <BulletCard {...item} key={idx} />
          ))}
        </div>
        <ImageText
          img={'https://d2ib7gxb0luc1i.cloudfront.net/img/Image1.png'}
          heading={"Fidio is more than just a platform – it's a movement"}
          description={
            'Fidio goes beyond traditional streaming platforms. We offer cutting-edge features designed to elevate the virtual concert experience for artists, promoters, and fans alike.'
          }
        />
        {/* <div className='max-w-7xl mx-auto py-24 font-Archivo'>
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
        </div> */}
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
