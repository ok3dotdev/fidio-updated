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
<<<<<<< HEAD
import HomeLayout from '../../customModules/features/HomeLayout';
import HomeDash from '../../customModules/features/HomeDash';
=======
>>>>>>> pull-branch

const pageName = 'home';

export const page = (props) => {
  const router = useRouter();
  const { query, asPath } = router;
  const [fetching, setFetching] = React.useState(false);
  const [mergeProps, setMergeProps] = React.useState({});
<<<<<<< HEAD
=======
  const [profileLoaded, setProfileLoaded] = React.useState(false);
  const [lastCheckedProfile, setLastCheckedProfile] = useState(null);
>>>>>>> pull-branch
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

<<<<<<< HEAD
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [fetchingProfile, setFetchingProfile] = React.useState(false);
  const [profileLoaded, setProfileLoaded] = React.useState(false);
  const r = React.useRef();
  const profileEvent = 'fetchProfileData';

  props._LocalEventEmitter.unsubscribe(profileEvent);
  props._LocalEventEmitter.subscribe(profileEvent, (e) => {
    e, profileLoaded, fetchingProfile, props._loggedIn, e.dispatch == 'fetch';
    if (e.dispatch && e.dispatch == 'fetch') {
      if (
        !profileLoaded &&
        !fetchingProfile &&
        props._loggedIn &&
        props._loggedIn.username
      ) {
        // ('Running!');
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

=======
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

  const getUserProfileData = async (props) => {
    try {
      setFetching(true);
      setLastCheckedProfile(new Date().getTime());
      setTimeout(() => {
        setFetching(false);
      }, 30000);
>>>>>>> pull-branch
      let fetchBody = {
        domainKey: props.domainKey,
        params: {
          u: props._loggedIn.username,
        },
        hash: props._loggedIn.hash,
        identifier: props._loggedIn.identifier,
<<<<<<< HEAD
        profileReq: true,
      };
      // ('Running req', fetchBody, props.apiUrl + '/m/pagedefaults');
=======
      };
>>>>>>> pull-branch
      let res = await fetchPost(
        props.apiUrl + '/m/pagedefaults',
        null,
        null,
        fetchBody
      );
      if (!res) {
<<<<<<< HEAD
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
          // ('res11', res);
          return res;
        }
      }
      setFetchingProfile(false);
    } catch (err) {
      setFetchingProfile(false); // fail silently
    }
  };
=======
        return false;
      } else if (res.hasOwnProperty('status')) {
        if (res.status == 'disauthenticated') {
          setFetching(false);
          logout();
          return 'disauthenticated';
        } else if (res.status == 'failed') {
          setFetching(false);
          return false;
        } else if (res.status == 'success') {
          setFetching(false);
          setProfileLoaded(true);
          console.log('res', res);
          return res;
        }
      }
      setFetching(false);
    } catch (err) {
      setFetching(false); // fail silently
    }
  };
  if (
    !profileLoaded &&
    !fetching &&
    props._loggedIn &&
    props._loggedIn.username
  ) {
    const threshold = 2000;
    getUserProfileData(props);
  }
>>>>>>> pull-branch

  const useProps = handlePropsPriority(mergeProps, props);
  config = resolveConfig(variables, useProps);
  resolvedPage = resolvePage(config, useProps.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property
  const components = generateComponent(resolvedDefinition);

<<<<<<< HEAD
  // // ({ useProps });
  // ('home', props);
  return (
    <div className='relative'>
      <HomeLayout pageName={pageName} pageData={''} props={useProps}>
        <HomeDash {...props} />
      </HomeLayout>
    </div>
=======
  // console.log({ useProps });
  return (
    <Layout props={useProps}>
      {/* <Menu {...useProps}></Menu> */}
      <div
        className={`${pageName}_Body overflow-scroll`}
        style={{
          width: '100%',
          height: '100%',
          top: useProps.menuConfig.height
            ? useProps.menuConfig.height + 'px'
            : '',
        }}
      >
        {components}
      </div>
    </Layout>
>>>>>>> pull-branch
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
