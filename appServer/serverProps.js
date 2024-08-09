/** /appServer/serverProps.js */
import resolveConfig, { resolveVariables } from '/app.config';
import { getPropDefaults, resolvePage } from '/modules/utility';
import apiReq from '/modules/utility/api/apiReq';
import axios from 'axios';

const getServerSidePropsFunc = async (data, context) => {
  const variables = resolveVariables();
  const config = resolveConfig(variables);
  const resolvedPage = resolvePage(config, context.req.url);
  await getPropDefaults(
    data,
    context,
    ['profile', 'event', 'watch', 'product', 'shopProfile', 'article']
    // { u: 'username' }
  );
  console.log('resolved page', data);

  if (resolvedPage && resolvedPage.url.includes('slug')) {
    const match = resolvedPage.url.match(/\/events\/([^/]+)/);
    const id = match ? match[1] : null;

    // const ticketData = await fetch(
    //   apiReq('/m/getProducts', {
    //     apiUrl: props?.apiUrl,
    //     pagination: 0, // Paginate by page with 150 record limits
    //     limit: 1, // Set custom limit, default 35, max 150
    //     sortField: 'created', // Use field to sort by
    //     extra: {
    //       // Specify exact where matches on top level record fields (optional)
    //       id,
    //     },
    //   })
    // );

    // const loadTickets = async () => {
    //   setLoading(true);
    //   console.log('slug', router.query.slug);
    //   const id = Array.isArray(router.query.slug)
    //     ? router.query.slug[0]
    //     : router.query.slug;
    //   const tix = await fetchTickets(props?.apiUrl, id);
    //   setTicket(tix);
    //   setLoading(false);
    // };

    // loadTickets();
  }

  // const seoData = {
  //   title: ticket?.name,
  //   seo: {
  //     metaTitle: ticket?.name,
  //     metaDesc: ticket?.detailmeta?.description?.split('.')[0],
  //     shareTitle: ticket?.name,
  //     shareDesc: ticket?.detailmeta?.description?.split('.')[0],
  //     shareGraphic: {
  //       asset: `${props?.cdn?.static}/${
  //         ticket?.images && ticket?.images[0] && ticket?.images[0]?.name
  //       }`,
  //     },
  //     shareCanonical: `https://www.fidio.ca/events/${ticket?.id}`,
  //     shareUrl: `https://www.fidio.ca/events/${ticket?.id}`,
  //   },
  // };

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
