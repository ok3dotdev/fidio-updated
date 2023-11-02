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
import { Menu } from '/modules/menu/';
import AltMenu from '../../customModules/features/AltMenu';
// import LiveChat from '../../customModules/features/LiveChat';

const pageName = 'w';

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
    <React.Fragment>
      <AltMenu {...useProps}></AltMenu>
      <div
        className={`${pageName}_Body`}
        style={{
          top: useProps.menuConfig.height
            ? useProps.menuConfig.height + 'px'
            : '',
        }}
      >
        <div className='flex'>
          <div className='flex-shrink-0 flex-grow w-[7.5/10]'>
            {components} {/* Assuming this is your "watch" component */}
          </div>
          <div className='flex-shrink-0 w-[2.5/10]'>
            <iframe
              src='https://www3.cbox.ws/box/?boxid=3532954&boxtag=WXIP9K'
              width='100%'
              height='450'
              allowtransparency='yes'
              allow='autoplay'
              frameborder='0'
              marginheight='0'
              marginwidth='0'
              scrolling='auto'
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
