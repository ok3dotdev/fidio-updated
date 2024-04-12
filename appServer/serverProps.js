/** /appServer/serverProps.js */
import resolveConfig, { resolveVariables } from '/app.config';
import { getPropDefaults, resolvePage } from '/modules/utility';

const getServerSidePropsFunc = async (data, context) => {
  const variables = resolveVariables();
  const config = resolveConfig(variables);
  const resolvedPage = resolvePage(config, context.req.url);

  if (resolvedPage && resolvedPage.url === '/blog') {
    // Resolve your page by url routing
    // The following will assign API server defaults data to props. You do not need to manually assign, just run this function
    await getPropDefaults(
      data,
      context,
      ['profile', 'event', 'watch', 'product', 'shopProfile', 'article']
      // { u: 'username' }
    ); // This runs without any access to state so you must use query params either as an argument as shown here or in the url e.g http://localhost:3000/privacy?u=theusername

    // If you want you can set data from other requests in here on server
    data.props['myprop'] = 'hello world';
    // You can also always assign to data.props if you want to merge manually
    const defaults = await getPropDefaults(
      data,
      context,
      ['profile', 'event', 'watch', 'product', 'shopProfile'],
      { u: 'username' }
    );
    data.props = Object.assign(data.props, defaults?.data ?? {});
  }

  // Now your data will appear in props on any component!
  return data;
};

export { getServerSidePropsFunc };
