import React from 'react';
import { SingleArticle } from '../modules/article';
import HomeLayout from '/customModules/features/HomeLayout';
import { useEffect } from 'react';
import SubscribeForm from '@/components/forms/SubscribeToNewsLetter';

const pageName = 'ar';

const Module = (props) => {
  function calculateReadingTime(articleContent) {
    const averageReadingSpeed = 200;

    const wordCount = articleContent?.split(/\s+/).length;

    const readingTimeMinutes = Math.ceil(wordCount / averageReadingSpeed);

    return readingTimeMinutes;
  }
  return (
    <HomeLayout
      pageName={pageName}
      pageData={props.seoData}
      props={props}
      className='bg-dashBg'
    >
      <div id='Article' className='pb-12'>
        {props?.articleData?.meta?.featuredImg && (
          <div className='w-full max-h-[500px]  relative pb-[40%]'>
            <img
              className='absolute inset-0 w-full h-full object-cover'
              src={`${props?.articleData?.meta?.featuredImg}`}
              // src='https://d2ib7gxb0luc1i.cloudfront.net/img/1700by700.jpg'
              alt=''
            />
          </div>
        )}
        <div className='lg:max-w-7xl mx-auto font-lexend md:px-12 px-4 bg-dashBg'>
          <div className='py-10 '>
            <div className='flex w-full justify-between'>
              <h1 className='text-4xl font-bold leading-12'>
                {props?.articleData?.title}
              </h1>
            </div>
            <div className='flex gap-4 text-sm items-center mt-2'>
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
              <span className='w-1 h-1 bg-dashtext rounded-full hidden md:block'></span>
              <p className='text-dashtext font-medium hidden md:block'>
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
                <div
                  id='article-content'
                  className='flex space-y-2 leading-8 article-container '
                >
                  <SingleArticle {...props} />
                </div>
              </div>
              {/* <div className='hidden md:block w-[30%]'></div> */}
            </div>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </HomeLayout>
  );
};

export default Module;
