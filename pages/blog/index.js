/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React, { useRef } from 'react';

// import { PageContainer } from '/modules/internal';
import { pageDefaults } from '../../app.config';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getServerSidePropsDefault } from '/modules/utility';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import HomeLayout from '/customModules/features/HomeLayout';
import apiReq from '/modules/utility/api/apiReq';
import { homePageData } from '/customModules/features/seo-data';
import { Input } from '@/components/ui/input';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const pageName = 'blog';

export const page = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [term, setTerm] = useState('');
  const [offset, setOffset] = useState(0); // Track the number of articles already fetched
  const [totalArticles, setTotalArticles] = useState(0);
  const [disable, setDisable] = useState({
    left: true,
    right: false,
  });

  function handleSubscribe() {}

  const scrollContainerRef = useRef(null);

  const loadMore = () => {
    setOffset(offset + 12);
  };

  // Function to scroll backward
  const scrollBack = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft -= 432;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      // //console.log('widhth', scrollLeft, scrollWidth, clientWidth);
      if (scrollLeft === 0) {
        setDisable({ ...disable, left: false });
      }
    }
  };

  // Function to scroll forward
  const scrollForward = () => {
    if (scrollContainerRef.current) {
      setDisable({ ...disable, left: false });
      const container = scrollContainerRef.current;
      container.scrollLeft += 432;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      // //console.log('widhth', scrollLeft, scrollWidth, clientWidth);
      if (scrollLeft + clientWidth === scrollWidth) {
        setDisable({ ...disable, right: false });
      }
    }
  };

  const fakeBlogs = [
    {
      id: 'a677506b-1db3-46a5-b2c3-ec6cd6db53a5',
      title: 'Lorem Ipsum Dolor Sit Amet',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      meta: {
        featuredImg:
          'https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp',
      },
      author: 'socialMedia',
    },
    {
      id: 'b3220b18-3e4d-4214-bdd3-6b92607c9c09',
      title: 'Consectetur Adipiscing Elit',
      tags: ['Consectetur', 'Adipiscing', 'Elit'],
      meta: {
        featuredImg:
          'https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp',
      },
      author: 'socialMedia',
    },
    {
      id: 'c785d895-f726-4772-a3b3-1e5e2020023f',
      title: 'Sed Do Eiusmod Tempor Incididunt',
      tags: ['Sed', 'Tempor', 'Incididunt'],
      meta: {
        featuredImg:
          'https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp',
      },
      author: 'socialMedia',
    },
    {
      id: 'd6c318ed-754b-4a8b-8d6c-49987f76d03c',
      title: 'Labore Et Dolore Magna Aliqua',
      tags: ['Labore', 'Dolore', 'Magna'],
      meta: {
        featuredImg:
          'https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp',
      },
      author: 'socialMedia',
    },
    {
      id: 'e0e4f587-6df2-47a5-8620-2d72b8b1ed9c',
      title: 'Ut Enim Ad Minim Veniam',
      tags: ['Ut', 'Enim', 'Minim'],
      meta: {
        featuredImg:
          'https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp',
      },
      author: 'socialMedia',
    },
    {
      id: 'f7c8dfe4-ae3e-4797-8c1a-0b32c55be6cf',
      title: 'Quis Nostrud Exercitation Ullamco',
      tags: ['Quis', 'Nostrud', 'Exercitation'],
      meta: {
        featuredImg:
          'https://d2ib7gxb0luc1i.cloudfront.net/img/burna-boy-bbma-show-2022-billboard-1548.webp',
      },
      author: 'socialMedia',
    },
  ];

  const handleSearch = async () => {
    setLoading(true);
    // //console.log('term', term);
    try {
      const res = await apiReq('/fetch/fetchhandler', {
        handlerArgs: [
          {
            articleReq: [{ title: term }],
          },
        ],
      });
      if (res) {
        setData(res.data.fetchedData[0]);
        setTerm('');
        setLoading(false);
        // //console.log('res', data);
      }
    } catch (error) {
      // //console.log('error', error);
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await apiReq('/fetch/fetchhandler', {
        handlerArgs: [
          {
            articleReq: [
              {
                limit: offset === 0 ? 6 : 12,
                offset,
                sortField: 'created',
                sort: 'asc',
              },
            ],
          },
        ],
      });
      if (res) {
        setData(res.data.fetchedData[0]);
        setLoading(false);
        // //console.log('res', data);
      }
    } catch (error) {
      // //console.log('error', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (!isLoading && data) {
    // //console.log('data222', data.fetchedData[0].articleReq[0]);
    // //console.log('data2225', data.articleReq[0]);
  }
  return (
    <HomeLayout
      pageName={pageName}
      pageData={homePageData}
      props={props}
      className='bg-dashBg'
    >
      <div className=' max-w-7xl mx-auto font-lexend px-5 lg:px-8 pb-12'>
        <div className='mt-8'>
          <div className='flex flex-col md:flex-row justify-between md:items-center'>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-bold'>Fidio blog</h1>
              <p className='mt-4'>All posts</p>
            </div>
            <div className='flex flex-col  mt-4'>
              <p className='md:max-w-[400px] text-sm justify-end'>
                Explore the stories and insights that will transform the way you
                design and experience the future of live events
              </p>
              <div className='relative block md:w-[400px] mt-4'>
                <form
                  action=''
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <Input
                    placeholder='Search blog'
                    className='text-muted-foreground font-lexend w-full bg-dashSides'
                    onChange={(e) => setTerm(e?.target?.value)}
                    value={term}
                    onSubmit={handleSearch}
                  />
                </form>
                <SearchOutlinedIcon
                  className='absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer'
                  onClick={handleSearch}
                />
              </div>
            </div>
          </div>
          <hr className='mt-8 mb-12' />
          {!isLoading && data && (
            <div className=''>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'>
                {data?.articleReq[0].map((articleReq, index) => (
                  <a key={index} href={`/ar?p=${articleReq?.id}`}>
                    <div key={index} className='p-4 bg-dashSides rounded-[8px]'>
                      <div className='w-full h-[250px] rounded-[8px]'>
                        <img
                          className='object-cover w-full rounded-[8px] h-full'
                          src={articleReq.meta.featuredImg}
                          alt='main image'
                        />
                      </div>
                      <div className='py-4'>
                        <p className='font-sans text-lg font-bold'>
                          {articleReq.title}
                        </p>
                        <h2 className='mt-2 text-dashtext text-sm'>
                          by {articleReq?.authorData?.username}
                        </h2>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          {
            <div className='text-center mt-8'>
              <button
                onClick={loadMore}
                className='bg-dashBorder p-2 rounded-[6px]'
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          }
          <div className='mt-8'>
            <div className='flex w-full justify-between items-center mb-12'>
              <p className='text-2xl font-bold'>Popular posts</p>
              <div className='flex w-[150px] justify-between items-center'>
                <ArrowBackIcon
                  className={`${
                    disable.left ? 'text-dashtext opacity-[0.4]' : 'text-white'
                  } h-4 w-4 cursor-pointer `}
                  onClick={scrollBack}
                />
                <ArrowForwardIcon
                  onClick={scrollForward}
                  className={`${
                    disable.right ? 'text-dashtext opacity-[0.4]' : 'text-white'
                  } h-4 w-4 cursor-pointer `}
                />
              </div>
            </div>
            <div
              ref={scrollContainerRef}
              className='w-full overflow-x-scroll overflow-hidden flex gap-x-8 scroll-smooth'
              style={{ scrollbarWidth: 'none !important' }}
            >
              {fakeBlogs.map((articleReq, index) => (
                <a key={index} href={`/ar?p=${articleReq?.id}`}>
                  <div
                    key={index}
                    className='p-4 bg-dashSides rounded-[8px] w-[400px]'
                  >
                    <div className='w-full h-[250px] rounded-[8px]'>
                      <img
                        className='object-cover w-full rounded-[8px] h-full'
                        src={articleReq.meta.featuredImg}
                        alt='main image'
                      />
                    </div>
                    <div className='py-4'>
                      <p className='font-sans text-lg font-bold'>
                        {articleReq.title}
                      </p>
                      <h2 className='mt-2 text-dashtext text-sm'>
                        {articleReq.author}
                      </h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='relative mt-12'>
            <div className='p-12 bg-dashSides rounded-[10px]'>
              <h3 className='font-bold text-3xl flex flex-col'>
                <span>Subscribe to</span>
                <span>Fidio’s newsletter</span>
              </h3>
              <div className='relative block mt-2  w-[300px] md:w-[500px]'>
                <form
                  action=''
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe();
                  }}
                >
                  <Input
                    placeholder='Enter your email'
                    className='text-muted-foreground font-lexend p-1 border-b bg-transparent border-dashBorder '
                    onChange={(e) => setTerm(e?.target?.value)}
                    value={term}
                    onSubmit={handleSubscribe}
                  />
                </form>
                <ArrowForwardIcon
                  className='absolute right-2 top-2.5 h-4 w-4 cursor-pointer text-accentY'
                  onClick={handleSubscribe}
                />
              </div>
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
