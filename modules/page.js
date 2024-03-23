var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
  return /*#__PURE__*/_jsx("div", {}, void 0, components);
};
export const getServerSideProps = async context => {
  return await getServerSidePropsDefault(context);
};
export default page;