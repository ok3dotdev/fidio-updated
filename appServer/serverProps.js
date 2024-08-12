/** /appServer/serverProps.js */
import resolveConfig, { resolveVariables } from '/app.config';
import { getPropDefaults, resolvePage } from '/modules/utility';
import apiReq from '/modules/utility/api/apiReq';

const getServerSidePropsFunc = async (data, context) => {
  const variables = resolveVariables();
  const config = resolveConfig(variables);
  const resolvedPage = resolvePage(config, context.req.url);

  if (resolvedPage && resolvedPage.url.includes('events')) {
    const match = resolvedPage.url.match(/\/events\/([^/]+)/);
    const id = match ? match[1] : null;

    try {
      const ticketData = await apiReq('/m/getProducts', {
        apiUrl: variables?.apiUrl,
        pagination: 0, // Paginate by page with 150 record limits
        offset: 0,
        limit: 1, // Set custom limit, default 35, max 150
        sortField: 'created', // Use field to sort by
        sort: 'asc',
        extra: {
          // Specify exact where matches on top level record fields (optional)
          id,
        },
      });
      if (ticketData?.products && ticketData?.products[0]) {
        const ticket = ticketData?.products[0];
        const seoData = {
          title: ticket?.name,
          seo: {
            metaTitle: ticket?.name,
            metaDesc: ticket?.detailmeta?.description?.split('.')[0],
            shareTitle: ticket?.name,
            shareDesc: ticket?.detailmeta?.description?.split('.')[0],
            shareGraphic: {
              asset: `${data?.props?.cdn?.static}/${
                ticket?.images && ticket?.images[0] && ticket?.images[0]?.name
              }`,
            },
            shareBot: true,
            // shareCanonical: `https://www.fidio.ca/events/${ticket?.id}`,
            shareUrl: `https://www.fidio.ca/events/${ticket?.id}`,
          },
        };
        data.props.seoData = seoData;
      }
      // console.log('ticketdata', data?.props?.cdn?.static);
    } catch (error) {
      console.log('error here >>>>>', error);
    }
  }

  if (data && data?.props?.path.includes('/a?p=')) {
    const seoData = {
      title: data.props?.articleData?.title,
      seo: {
        metaTitle: data.props?.articleData?.title,
        metaDesc: data.props?.articleData?.contents
          .split('.')[0]
          .replace('<p>', ''),
        shareTitle: data.props?.articleData?.title,
        shareDesc: data.props?.articleData?.contents
          .split('.')[0]
          .replace('<p>', ''),
        shareGraphic: {
          asset: data.props?.articleData?.meta?.featuredImg,
        },
        shareBot: true,
        shareType: 'article',
        // shareCanonical: `https://www.fidio.ca/ar?p=${data.props?.articleData?.id}`,
        shareUrl: `https://www.fidio.ca/ar?p=${data.props?.articleData?.id}`,
      },
    };
    data.props.seoData = seoData;
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

  return data;
};

export { getServerSidePropsFunc };
