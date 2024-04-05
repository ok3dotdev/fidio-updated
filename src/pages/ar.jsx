/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import Menu from '../../customModules/features/AltMenu';
import HomeLayout from '../../customModules/features/HomeLayout';

const pageName = 'ar';

export const page = (props) => {
  function createMarkup() {
    return { __html: props?.articleData?.contents.replace(/"/g, '') };
  }
  return (
    <HomeLayout pageName={pageName} pageData={{}} props={props}>
      <div className='bg-dashSides py-14 font-lexend'>
        <div className='max-w-3xl mx-auto px-4 md:px-0 space-y-2'>
          <p className='text-accentY font-semibold text-sm'>CATEGORY NAME</p>
          <h1 className='text-4xl font-bold'>{props?.articleData?.title}</h1>
          <div className='flex gap-4 text-sm'>
            {props &&
              props.articleData &&
              props.articleData.publish &&
              !isNaN(Number(props.articleData.publish)) &&
              !isNaN(new Date(Number(props.articleData.publish))) && (
                <p className='text-dashtext font-medium'>
                  {new Date(Number(props.articleData.publish)).toLocaleString(
                    'en-US',
                    {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    }
                  )}
                </p>
              )}
            <p className='font-white font-bold'>
              {props?.articleData?.authorData?.username}
            </p>
          </div>
        </div>
      </div>
      <div className='relative w-full'>
        <div className='-mt-6 max-w-[92%] md:mx-w-3xl mx-auto flex justify-center'>
          <img
            className='rounded-[12px]'
            src={`${props?.articleData?.meta?.featuredImg}`}
            alt=''
          />
        </div>
      </div>

      <div className='py-12  max-w-4xl mx-auto'>
        <div className='flex gap-8 px-5'>
          <div
            className='min-w-[50%] font-lexend'
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
          <div className='w-full hidden'>
            <p>Contents</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </HomeLayout>
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
