/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react';

// import { PageContainer } from '/modules/internal';
import { pageDefaults } from '../../../app.config';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getServerSidePropsDefault } from '../../../modules/utility';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import HomeLayout from '../../../customModules/features/HomeLayout';
import { homePageData } from '../../../customModules/features/seo-data';

const pageName = 'blog';

export const page = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // console.log("props", props)
  const url =
    props.dev === true
      ? 'https://dbservices.tycoon.systems/apidev/p/fetchhandler'
      : 'https://dbservices.tycoon.systems/api/p/fetchhandler';
  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        // console.log(error);
      }
    };
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        domainKey: props.domainKey,
        dborigin: props.dborigin,
        handlerArgs: [
          {
            articleReq: [{ tags: 'amapiano' }, { tags: 'Concerts' }],
          },
        ],
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        // console.log('data', data);
        setLoading(false);
      })
      .catch((error) => console.log('hereee', error));
  }, []);

  if (!isLoading) {
    console.log('data222', data.fetchedData[0].articleReq[0]);
    console.log('data2225', data);
  }

  const useMenu = true;
  const useAppConfigLayout = true;
  return (
    <HomeLayout pageName={pageName} pageData={homePageData} props={props}>
      <div className=' max-w-7xl mx-auto font-lexend px-3 lg:px-5'>
        <div className=''>
          <div className='flex justify-between'>
            <h1 className='text-4xl'>Fidio blog</h1>
            <p>
              Explore the stories and insights that will transform the way you
              design and experience the future of live events
            </p>
          </div>
          <div className='flex'>
            <p>All posts</p>
            <input type='text' />
          </div>
          {!isLoading && data && (
            <div className='flex justify-center'>
              <div className='grid grid-cols-1 lg:grid-cols-3'>
                {data.fetchedData[0].articleReq[0].map((articleReq, index) => (
                  <a key={index} href={`/ar?p=${articleReq?.id}`}>
                    <div key={index} className='p-4'>
                      <div className='w-full min-h-[250px]'>
                        <img
                          className='object-cover w-full'
                          src={articleReq.meta.featuredImg}
                          alt=''
                        />
                      </div>
                      <div>
                        <p className='font-sans'>{articleReq.tags}</p>
                        <h2>{articleReq.title}</h2>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
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
