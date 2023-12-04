/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react';
import { useRouter } from 'next/router';
import resolveConfig, { resolveVariables, pageDefaults } from '/app.config';
import {
  basicError,
  generateComponent,
  handlePropsPriority,
  resolvePage,
  getServerSidePropsDefault,
  resolveDefaults,
} from '/modules/utility.js';
import { isObjectEmpty } from '/modules/util';
import Hero from '../../customModules/features/Hero';
import HomeLayout from '../../customModules/features/HomeLayout';
import { homePageData } from '../../customModules/features/seo-data';
import ShowGrid from '../components/ShowGrid';

const pageName = 'Index';

export const Page = (props) => {
  const router = useRouter();
  const { query, asPath } = router;
  const [fetching, setFetching] = React.useState(false);
  const [mergeProps, setMergeProps] = React.useState({});
  let resolvedDefinition = props.resolvedDefinition;
  const variables = resolveVariables();
  let config = resolveConfig(variables, props);
  let resolvedPage = resolvePage(config, props.path);
  resolvedDefinition = resolvedPage && resolvedPage.data;

  const getDefaults = async (force) => {
    const defaults = await resolveDefaults(
      resolvedPage.url,
      props,
      variables,
      query,
      asPath,
      setFetching,
      force
    );
    if (!isObjectEmpty(defaults)) {
      const newProps = Object.assign({ ...props }, defaults);
      setMergeProps(newProps);
    }
  };

  props._LocalEventEmitter.unsubscribe('refetchDefaults');
  props._LocalEventEmitter.subscribe('refetchDefaults', (e) => {
    getDefaults(true);
  });

  React.useEffect(() => {
    if (
      resolvedPage &&
      resolvedPage.url &&
      !fetching &&
      isObjectEmpty(mergeProps)
    ) {
      getDefaults();
    }
  }, [fetching, mergeProps, resolvedPage]);

  const useProps = handlePropsPriority(mergeProps, props);
  config = resolveConfig(variables, useProps);
  resolvedPage = resolvePage(config, useProps.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property
  const components = generateComponent(resolvedDefinition);
  return (
    <HomeLayout
      useProps={useProps}
      pageName={pageName}
      pageData={homePageData}
      props={props}
    >
      <Hero {...props} />
      <div className='max-w-7xl mx-auto py-24'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex items-start flex-col px-4 lg:px-6 justify-center w-full'>
            <h2 className='text-[24px] lg:text-[48px]'>Concert-to-go</h2>
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
      <div className='max-w-7xl mx-auto '>
        <div className='flex gap-4 px-4 lg:px-6 items-center'>
          <h3>Ready to stream?</h3>
          <div className='relative'>
            <img
              className='absolute -top-[44px] z-10  w-full'
              src='/img/internal/swirls.png'
              alt='swirls'
            />
            <button className='py-3 px-6 rounded-[20px] bg-[#FDB000] font-sans  text-black z-20'>
              Sign up for free with Google
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default Page;
