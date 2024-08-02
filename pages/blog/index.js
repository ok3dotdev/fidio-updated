import React, { useRef } from 'react';
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
import SubscribeForm from '@/components/forms/SubscribeToNewsLetter';

const pageName = 'blog';

const Page = (props) => {
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
        console.log('res', res.data.fetchedData[0]);
      }
    } catch (error) {
      // //console.log('error', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
                  <a key={index} href={`/a?p=${articleReq?.id}`} className=''>
                    <div
                      key={index}
                      className='p-4 bg-dashSides rounded-[8px] max-h-[398px] min-h-[398px]'
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
                          by {articleReq?.authorData?.username}
                        </h2>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <SubscribeForm />
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

export default Page;
