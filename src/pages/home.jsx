/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchPost } from '/modules/utility/fetch';
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
import { Menu } from '/modules/menu/';
import Layout from '../../customModules/features/Layout';
import HomeLayout from '../../customModules/features/HomeLayout';

const pageName = 'home';

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

  const getUserProfileData = async (props) => {
    try {
      setFetchingProfile(true);
      setTimeout(() => {
        setFetchingProfile(false);
      }, 1000);

      let fetchBody = {
        domainKey: props.domainKey,
        params: {
          u: props._loggedIn.username,
        },
        hash: props._loggedIn.hash,
        identifier: props._loggedIn.identifier,
        profileReq: true,
      };
      console.log('Running req', fetchBody, props.apiUrl + '/m/pagedefaults');
      let res = await fetchPost(
        props.apiUrl + '/m/pagedefaults',
        null,
        null,
        fetchBody
      );
      if (!res) {
        setFetchingProfile(false);
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == 'disauthenticated') {
          setFetchingProfile(false);
          logout();
          return 'disauthenticated';
        } else if (res.status == 'failed') {
          setFetchingProfile(false);
          return false;
        } else if (res.status == 'success') {
          setFetchingProfile(false);
          setProfileLoaded(res);
          console.log('res11', res);
          return res;
        }
      }
      setFetchingProfile(false);
    } catch (err) {
      setFetchingProfile(false); // fail silently
    }
  };

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
      {components}
    </HomeLayout>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
