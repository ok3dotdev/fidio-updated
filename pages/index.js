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
import SubscribeForm from '../components/forms/SubscribeToNewsLetter';

const pageName = 'Index';

export const page = (props) => {
  return (
    <React.Fragment>
      <HomeLayout
        useProps={props}
        pageName={pageName}
        pageData={homePageData}
        props={props}
        className='bg-dashBg text-center font-lexend'
      >
        <LandingPageHero />
        <ImageText
          img={
            'https://fidiohero.s3.ca-central-1.amazonaws.com/OBJECT+MOCKUP+3+(3).png'
          }
          heading={
            'The Future of <span class="text-accentY">African Music</span> is Here'
          }
          description={
            'Fidio goes beyond traditional streaming platforms. We offer cutting-edge features designed to elevate the virtual concert experience for artists, promoters, and fans alike.'
          }
        />
        <div className='gap-y-12 mt-12 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-2'>
          {featuresList.map((item, idx) => (
            <BulletCard
              {...item}
              key={idx}
              isLast={idx === featuresList.length - 1}
            />
          ))}
        </div>
        <ImageText
          img={
            'https://fidiohero.s3.ca-central-1.amazonaws.com/Image_1__1_-removebg.png'
          }
          heading={
            "Fidio is more than just a platform – <span class='text-accentY'> it's a movement</span>"
          }
          direction='reverse'
          glow='true'
        />
        <div className='max-w-4xl mx-auto px-2'>
          <p className='text-dashtext leading-6'>
            {`We're passionate about empowering African artists, connecting fans
            to their favorite music, and propelling the African music industry
            to new heights. Join us on this journey and become a part of the
            future of African entertainment.`}
          </p>
        </div>
        <div className='px-2'>
          <SubscribeForm />
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
