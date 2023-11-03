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
import FeaturedEventPage from '../../../customModules/features/FeaturedEventPage';
import EventsDetails from '../../../customModules/features/EventsDetails';
import Countdown from '../../../customModules/features/CountDown';
import { FetchHandler } from '../../../modules/utility/fetch';
import LoadingSkeleton from '../../../customModules/features/Skeleton';

const pageName = 'event';

export const page = (props) => {
  const router = useRouter();
  const { query, asPath } = router;
  const [fetching, setFetching] = React.useState(false);
  const [eventsData, setEventsData] = React.useState([]);
  const [mergeProps, setMergeProps] = React.useState({});
  const [loading, setIsLoading] = React.useState(true);
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

  const receiveData = (data) => {
    setEventsData(data.data.fetchedData[0].productReq);
    setIsLoading(false);
    console.log('datas', eventsData);
  };
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

  return (
    <div className='relative'>
      <HomeLayout
        useProps={useProps}
        pageName={pageName}
        pageData={''}
        props={useProps}
      >
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <FeaturedEventPage {...props} showTimer={true} data={eventsData[0]} />
        )}
        <EventsDetails data={eventsData[0]} />
        <FetchHandler
          {...props}
          handlerName='my_handler'
          handlerArgs={[
            {
              productReq: [`${router.query.slug}`],
            },
          ]}
          receiveData={receiveData}
        />
      </HomeLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
