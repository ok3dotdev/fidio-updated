/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import Menu from '/customModules/features/AltMenu';
import HomeLayout from '/customModules/features/HomeLayout';
import { Input } from '@/components/ui/input';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createMarkup } from '/modules/article/utility';
import { SingleArticle } from '/modules/article';

const pageName = 'ar';

export const page = (props) => {
  const [term, setTerm] = React.useState('');
  function createMarkupAlt() {
    const fixedContent = props?.articleData?.contents?.replace(/"/g, '');

    return { __html: fixedContent };
  }
  function calculateReadingTime(articleContent) {
    const averageReadingSpeed = 200;

    const wordCount = articleContent.split(/\s+/).length;

    const readingTimeMinutes = Math.ceil(wordCount / averageReadingSpeed);

    return readingTimeMinutes;
  }

  function handleSubscribe() {}

  return (
    <HomeLayout
      pageName={pageName}
      pageData={{}}
      props={props}
      className='bg-dashBg'
    >
      <div>
        {props?.articleData?.meta?.featuredImg && (
          <div className='w-full max-h-[400px] h-[400px] relative'>
            <img
              className='absolute inset-0 w-full h-full object-cover'
              src={`${props?.articleData?.meta?.featuredImg}`}
              alt=''
            />
          </div>
        )}
        <div className='lg:max-w-7xl mx-auto font-lexend md:px-12 px-4 bg-dashBg'>
          <div className='pt-10 '>
            <div className='flex w-full justify-between'>
              <h1 className='text-4xl font-bold'>
                {props?.articleData?.title}
              </h1>
              <div className='w-[34px] h-[34px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='inherit'
                  height='inherit'
                  viewBox='0 0 48 48'
                  fill='none'
                >
                  <rect width='48' height='48' rx='24' fill='#404040' />
                  <path
                    d='M16 24V32C16 32.5304 16.2107 33.0391 16.5858 33.4142C16.9609 33.7893 17.4696 34 18 34H30C30.5304 34 31.0391 33.7893 31.4142 33.4142C31.7893 33.0391 32 32.5304 32 32V24'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M28 18L24 14L20 18'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M24 14V27'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div className='flex gap-4 text-sm items-center'>
              {props &&
                props.articleData &&
                props.articleData.publish &&
                !isNaN(Number(props.articleData.publish)) &&
                !isNaN(new Date(Number(props.articleData.publish))) && (
                  <>
                    <p className='text-dashtext font-medium'>
                      {new Date(
                        Number(props.articleData.publish)
                      ).toLocaleString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                      })}
                    </p>
                    <span className='w-1 h-1 bg-dashtext rounded-full'></span>
                    <p className='text-dashtext font-medium'>
                      {new Date(
                        Number(props.articleData.publish)
                      ).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </p>
                  </>
                )}
              <span className='w-1 h-1 bg-dashtext rounded-full'></span>
              <p className='text-dashtext font-medium'>
                {calculateReadingTime(props?.articleData?.contents) +
                  ' minutes'}
              </p>
              <span className='w-1 h-1 bg-dashtext rounded-full'></span>
              <p className='font-white font-bold'>
                {props?.articleData?.authorData?.username}
              </p>
            </div>

            <hr className='my-8' />
            <div className='flex gap-x-8 w-full'>
              <div className='w-full'>
                <div className='flex space-y-2'>
                  <div
                    className=' font-lexend text-dashtext '
                    dangerouslySetInnerHTML={createMarkupAlt()}
                  ></div>
                  {/* <SingleArticle {...props} /> */}
                </div>
              </div>
              <div className='hidden md:block w-[30%]'>
                <h3 className='mb-4'>Popular posts</h3>
                <div>
                  <div className='p-3 rounded-[9px] bg-dashSides'>
                    <img
                      className=' w-[250px] object-cover rounded-[9px] aspect-square'
                      src='https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp'
                      alt=''
                    />
                    <p className='mt-4 font-bold text-lg'>A test title</p>
                    <p className='mb-4 text-dashtext text-sm'>
                      By Social Media
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative lg:max-w-7xl mx-auto md:px-12 px-4 mt-12'>
          <div className='p-12 bg-dashSides rounded-[10px]'>
            <h3 className='font-bold text-3xl flex flex-col'>
              <span>Subscribe to</span>
              <span>Fidio’s newsletter</span>
            </h3>
            <div className='relative block mt-2 w-[300px]'>
              <form
                action=''
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubscribe();
                }}
              >
                <Input
                  placeholder='Subscribe'
                  className='text-muted-foreground font-lexend p-1 border-b bg-transparent border-dashBorder '
                  onChange={(e) => setTerm(e?.target?.value)}
                  value={term}
                  onSubmit={handleSubscribe}
                />
              </form>
              <ArrowForwardIcon
                className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer'
                onClick={handleSubscribe}
              />
            </div>
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
