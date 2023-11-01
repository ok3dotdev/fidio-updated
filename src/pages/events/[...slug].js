/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useRef } from 'react';
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
import HomeLayout from '../../../customModules/features/HomeLayout';
import FeaturedEvent from '../../../customModules/features/FeaturedEvent';
import EventsDetails from '../../../customModules/features/EventsDetails';
import Countdown from '../../../customModules/features/CountDown';

const pageName = 'event';

export const page = (props) => {
  const router = useRouter();
  const { query, asPath } = router;
  const [fetching, setFetching] = React.useState(false);
  const [mergeProps, setMergeProps] = React.useState({});
  let resolvedDefinition = props.resolvedDefinition;
  const variables = resolveVariables();
  let config = resolveConfig(variables, props);
  let resolvedPage = resolvePage(config, props.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property

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

  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [fetchingProfile, setFetchingProfile] = React.useState(false);
  const [profileLoaded, setProfileLoaded] = React.useState(false);
  const r = React.useRef();
  const profileEvent = 'fetchProfileData';

  props._LocalEventEmitter.unsubscribe(profileEvent);
  props._LocalEventEmitter.subscribe(profileEvent, (e) => {
    console.log(
      e,
      profileLoaded,
      fetchingProfile,
      props._loggedIn,
      e.dispatch == 'fetch'
    );
    if (e.dispatch && e.dispatch == 'fetch') {
      if (
        !profileLoaded &&
        !fetchingProfile &&
        props._loggedIn &&
        props._loggedIn.username
      ) {
        console.log('Running!');
        // getUserProfileData(props);
      }
    }
  });

  const useProps = handlePropsPriority(mergeProps, props);
  config = resolveConfig(variables, useProps);
  resolvedPage = resolvePage(config, useProps.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property
  const components = generateComponent(resolvedDefinition);

  // console.log({ useProps });
  console.log('home', useProps);
  return (
    <div className='relative'>
      <HomeLayout
        useProps={useProps}
        pageName={pageName}
        pageData={''}
        props={useProps}
      >
        <FeaturedEvent {...props} showTimer={true} />
        <EventsDetails />
      </HomeLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
