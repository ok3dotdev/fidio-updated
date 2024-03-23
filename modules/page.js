import React from 'react';
import { useRouter } from 'next/router';
import resolveConfig, { resolveVariables } from '/app.config';
import { generateComponent, resolvePage, getServerSidePropsDefault, resolveDefaults } from '/modules/utility.js';
import { isObjectEmpty } from '/modules/util';
export const page = props => {
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  const [fetching, setFetching] = React.useState(false);
  const [mergeProps, setMergeProps] = React.useState({});
  let resolvedDefinition = props.resolvedDefinition;
  const variables = resolveVariables();
  let config = resolveConfig(variables, props);
  let resolvedPage = resolvePage(config, props.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property

  React.useEffect(() => {
    const getDefaults = async () => {
      const defaults = await resolveDefaults(resolvedPage.url, props, variables, query, asPath, setFetching);
      if (!isObjectEmpty(defaults)) {
        const newProps = Object.assign({
          ...props
        }, defaults);
        setMergeProps(newProps);
      }
    };
    if (resolvedPage && resolvedPage.url && !fetching && isObjectEmpty(mergeProps)) {
      getDefaults();
    }
  }, [fetching, mergeProps, resolvedPage]);
  const useProps = isObjectEmpty(mergeProps) ? props : mergeProps;
  config = resolveConfig(variables, useProps);
  resolvedPage = resolvePage(config, useProps.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property
  const components = generateComponent(resolvedDefinition);
  return /*#__PURE__*/React.createElement("div", null, components);
};
export const getServerSideProps = async context => {
  return await getServerSidePropsDefault(context);
};
export default page;