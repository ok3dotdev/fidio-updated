/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
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

  // console.log({ useProps });
  return (
    <Layout props={useProps}>
      {/* <Menu {...useProps}></Menu> */}
      <div
        className={`${pageName}_Body`}
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
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
