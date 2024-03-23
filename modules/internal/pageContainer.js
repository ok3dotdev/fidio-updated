import React from 'react';
import { useRouter } from 'next/router';
import resolveConfig, { pageDefaults } from '/app.config';
import { basicError, generateComponent, handlePropsPriority, resolvePage, resolvePageName, getServerSidePropsDefault, resolveDefaults } from '/modules/utility.js';
import { isObjectEmpty } from '/modules/util';
import { Menu } from '/modules/menu/';
const PageContainer = props => {
  const router = useRouter();
  const {
    query,
    asPath
  } = router;
  const [fetching, setFetching] = React.useState(false);
  const [mergeProps, setMergeProps] = React.useState({});
  let resolvedDefinition = props.resolvedDefinition;
  let resolvedPage = resolvePage(resolveConfig(props._configVariables, props), props.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property

  const getDefaults = async force => {
    const defaults = await resolveDefaults(resolvedPage.url, props, props._configVariables, query, asPath, setFetching, force);
    if (!isObjectEmpty(defaults)) {
      const newProps = Object.assign({
        ...props
      }, defaults);
      setMergeProps(newProps);
    }
  };
  props._LocalEventEmitter.unsubscribe('refetchDefaults');
  props._LocalEventEmitter.subscribe('refetchDefaults', e => {
    getDefaults(true);
  });
  React.useEffect(() => {
    if (resolvedPage && resolvedPage.url && !fetching && isObjectEmpty(mergeProps)) {
      getDefaults();
    }
  }, [fetching, mergeProps, resolvedPage]);
  const useProps = handlePropsPriority(mergeProps, props);
  resolvedPage = resolvePage(resolveConfig(props._configVariables, useProps), useProps.path);
  resolvedDefinition = resolvedPage && resolvedPage.data; // Access the `data` property
  const components = generateComponent(resolvedDefinition);
  const useMenu = !resolvedDefinition || resolvedDefinition?.props && !Object.prototype.hasOwnProperty.call(resolvedDefinition.props, 'useMenu') || resolvedDefinition.props?.useMenu;
  const useAppConfigLayout = !resolvedDefinition || resolvedDefinition?.props && !Object.prototype.hasOwnProperty.call(resolvedDefinition.props, 'useAppConfigLayout') || resolvedDefinition.props?.useAppConfigLayout;
  const cpProps = Object.assign({}, useProps);
  cpProps.useMenu = useMenu; // Determines if we useMenu based on definition app.config.js
  cpProps.useAppConfigLayout = useAppConfigLayout; // Determines if we use appConfigLayout based on definition app.config.js
  const componentsContainer = /*#__PURE__*/React.createElement("div", {
    className: `${useProps.pageName}_Body ${props.pageClass ?? ''}`,
    style: {
      top: useProps.menuConfig.height ? useProps.menuConfig.height + 'px' : '',
      position: 'relative'
    }
  }, components);
  if (cpProps.useAppConfigLayout) {
    cpProps.appConfigLayout = componentsContainer;
  }
  const propChildren = React.Children.map(props.children, function (child) {
    if (child !== null) {
      if (typeof child.type === 'function') {
        return /*#__PURE__*/React.cloneElement(child, cpProps);
      }
      return child;
    }
    return /*#__PURE__*/React.createElement('div');
  });
  const articlePage = resolvedPage?.url === '/ar';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${articlePage ? `Article_SafeStyles` : ''}`
  }, propChildren));
};
export default PageContainer;