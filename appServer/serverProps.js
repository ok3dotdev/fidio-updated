import resolveConfig, { resolveVariables } from '/app.config';
import { getPropDefaults, resolvePage } from '/modules/utility';

/**
 * Empowers you to get server side props before page load. Use conditionals to determine which pages to run specific requests
 * @param {*} data - Add your items to data.props. Props from previously ran internal get server side props will be passed here
 * @param {*} context - Request context, return this under data.props to examine it
 * @returns
 */
const getServerSidePropsFunc = async (data, context) => {
  const variables = resolveVariables();
  const config = resolveConfig(variables);
  const resolvedPage = resolvePage(config, context.req.url);
  // You can see the path path in the url at resolvedPage.url. For example if you want to fetch meta data or default page load props for /p you can run a conditional below
  // if (resolvedPage && resolvedPage.url === '/p') { // Resolve profile page
  // ... Fetch meta data for p page
  // ... When you're done, add the data to props
  await getPropDefaults(data, context, [ 'default' ], { u: 'username' }) // This runs without any access to state so you must use query params either as an argument as shown here or in the url e.g http://localhost:3000/privacy?u=theusername

  // data['my_data'] = res.data
  // }
  // Now your data will appear in props on any component!
  return data;
};

export { getServerSidePropsFunc };
