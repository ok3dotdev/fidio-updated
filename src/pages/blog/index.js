/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react';

// import { PageContainer } from '/modules/internal';
import { pageDefaults } from '../../../app.config';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getServerSidePropsDefault } from '../../../modules/utility';
import HomeLayout from '../../../customModules/features/HomeLayout';
import { homePageData } from '@/customModules/features/seo-data';

const pageName = 'Blog';

export const page = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetch('https://dbservices.tycoon.systems/api/p/fetchhandler', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        domainKey: props.domainKey,
        dborigin: props.dborigin,
        handlerArgs: [
          {
            articleReq: [{ tags: 'amapiano' }, { tags: 'drake' }],
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
        console.log('data', data);
        setLoading(false);
      })
      .catch((error) => console.log('hereee', error));
  }, []);

  if (!isLoading) {
    console.log('data222', data.fetchedData[0].articleReq[0][0].title);
  }

  const useMenu = true;
  const useAppConfigLayout = true;
  return (
    <HomeLayout pageName={pageName} pageData={homePageData} props={props}>
      <div className='pt-[74px] max-w-7xl mx-auto'>
        <div className=''>
          <h1 className='text-left text-4xl mt-12 mb-4 px-4'>
            Latest Articles
          </h1>
          {!isLoading && data && (
            <div className='flex justify-center'>
              <div className='basis-1/2'>
                {data.fetchedData.map((articleReq, index) => (
                  <Link href={'/ar?p=9384431e-3a9c-4bbc-82a8-eaa6882e5aa4'}>
                    <div key={index} className='p-4'>
                      <div className='w-full min-h-[600px]'>
                        <img
                          className='object-cover w-full'
                          src='https://images.ctfassets.net/v44fuld738we/2XLuJUv8JhkanTWtTsSJY7/23378a4140cdb824fd5a5b9bc86d70ee/iPhoneExplainer_1900x1900_Magazine_Square__1_.jpg'
                          alt=''
                        />
                      </div>
                      <div>
                        <p className='font-sans'>
                          {articleReq.articleReq[0][0].tags}
                        </p>
                        <h2>{articleReq.articleReq[0][0].title}</h2>
                        <div className='font-sans'>
                          {articleReq.articleReq[0][0].contents
                            .split(/\s+/)
                            .slice(0, 50)
                            .join(' ')
                            .replace('"<p>', '')}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className='flex basis-2/5 pt-[54px]'>
                <div className=' p-4'>
                  <div className='w-[300px]'>
                    <img
                      className='object-cover w-full'
                      src='https://images.ctfassets.net/v44fuld738we/2XLuJUv8JhkanTWtTsSJY7/23378a4140cdb824fd5a5b9bc86d70ee/iPhoneExplainer_1900x1900_Magazine_Square__1_.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='font-sans'>AMAPIANO</p>
                    <h2>
                      How Amapiano is taking over the African music industry.
                    </h2>
                    <p className='font-sans'>
                      The Art of Podcasting with Joe Rogan and His New Multiyear
                      Spotify Partnership
                    </p>
                  </div>
                </div>
                <div className=' p-4'>
                  <div className='w-[300px]'>
                    <img
                      className='object-cover'
                      src='https://images.ctfassets.net/v44fuld738we/2XLuJUv8JhkanTWtTsSJY7/23378a4140cdb824fd5a5b9bc86d70ee/iPhoneExplainer_1900x1900_Magazine_Square__1_.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='font-sans'>AMAPIANO</p>
                    <h2>
                      How Amapiano is taking over the African music industry.
                    </h2>
                    <p className='font-sans'>
                      The Art of Podcasting with Joe Rogan and His New Multiyear
                      Spotify Partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <h2 className='text-left text-4xl mt-12 mb-4 px-4'>
            Trending Articles
          </h2>
          {!isLoading && data && (
            <div className='flex justify-center'>
              <div className='basis-1/2'>
                {data.fetchedData.map((articleReq, index) => (
                  <div key={index} className='p-4'>
                    <div className='w-full min-h-[600px]'>
                      <img
                        className='object-cover w-full'
                        src='https://images.ctfassets.net/v44fuld738we/2XLuJUv8JhkanTWtTsSJY7/23378a4140cdb824fd5a5b9bc86d70ee/iPhoneExplainer_1900x1900_Magazine_Square__1_.jpg'
                        alt=''
                      />
                    </div>
                    <div>
                      <p className='font-sans'>
                        {articleReq.articleReq[0][0].tags}
                      </p>
                      <h2>{articleReq.articleReq[0][0].title}</h2>
                      <div className='font-sans'>
                        {articleReq.articleReq[0][0].contents
                          .split(/\s+/)
                          .slice(0, 50)
                          .join(' ')
                          .replace('"<p>', '')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex basis-2/5 pt-[54px]'>
                <div className=' p-4'>
                  <div className='w-[300px]'>
                    <img
                      className='object-cover w-full'
                      src='https://images.ctfassets.net/v44fuld738we/2XLuJUv8JhkanTWtTsSJY7/23378a4140cdb824fd5a5b9bc86d70ee/iPhoneExplainer_1900x1900_Magazine_Square__1_.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='font-sans'>AMAPIANO</p>
                    <h2>
                      How Amapiano is taking over the African music industry.
                    </h2>
                    <p className='font-sans'>
                      The Art of Podcasting with Joe Rogan and His New Multiyear
                      Spotify Partnership
                    </p>
                  </div>
                </div>
                <div className=' p-4'>
                  <div className='w-[300px]'>
                    <img
                      className='object-cover'
                      src='https://images.ctfassets.net/v44fuld738we/2XLuJUv8JhkanTWtTsSJY7/23378a4140cdb824fd5a5b9bc86d70ee/iPhoneExplainer_1900x1900_Magazine_Square__1_.jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='font-sans'>AMAPIANO</p>
                    <h2>
                      How Amapiano is taking over the African music industry.
                    </h2>
                    <p className='font-sans'>
                      The Art of Podcasting with Joe Rogan and His New Multiyear
                      Spotify Partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://my-json-server.typicode.com/ok3dotdev/articles/posts'
//   );
//   const blogs = await res.json();
//   return { props: { blogs } };
// }

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
