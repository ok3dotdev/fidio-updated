/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

<<<<<<< HEAD
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
import HomeLayout from '../../customModules/features/HomeLayout';
import { termsOfServicePageData } from '../../customModules/features/seo-data';
=======
import React from 'react'
import { PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
>>>>>>> ce697d27689aed4c509371f2aa1daa4a9306a368

const pageName = 'Terms';

<<<<<<< HEAD
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
  return (
    <HomeLayout
      useProps={useProps}
      pageName={pageName}
      pageData={termsOfServicePageData}
    >
      {components}
    </HomeLayout>
  );
};
=======
export const page = props => {
    const useMenu = true
    const useAppConfigLayout = true
	return (
        <React.Fragment>
            <PageContainer { ...props } pageName={pageName} useMenu={useMenu} useAppConfigLayout={useAppConfigLayout} />
        </React.Fragment>
	)
}
>>>>>>> ce697d27689aed4c509371f2aa1daa4a9306a368

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
