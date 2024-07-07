import { fetchPost } from '/modules/utility/fetch';
import { resolveVariables } from '../../../app.config';
import createProduct from './product/createProduct';
import getProducts from './product/getProducts';
import sendEmail from './email/sendEmail';
import fetchHandler from './fetch/fetchHandler';
import signInUnregistered from './user/signInUnregistered';
import getVendorLinks from './ecommerce/getVendorLinks';
import checkUserStreamingStatus from './stream/checkuserStreamingStatus';
import startStream from './stream/startStream';
import endStream from './stream/endStream';
import donate from './ecommerce/donate';
export default async function api(e, r) {
  var t = e?.toLowerCase ? e.toLowerCase() : e;
  switch (t) {
    case '/product/createproduct':
      return createProduct(r);
    case '/product/getproducts':
      return getProducts(r);
    case '/email/sendemail':
      return sendEmail(r);
    case '/fetch/fetchhandler':
      return fetchHandler(r);
    case '/onboarding/signinunregistered':
      return signInUnregistered(r);
    case '/ecommerce/getvendorlinks':
      return getVendorLinks(r);
    case '/ecommerce/donate':
      return donate(r);
    case '/stream/checkuserstreamingstatus':
      return checkUserStreamingStatus(r);
    case '/stream/startstream':
      return startStream(r);
    case '/stream/endstream':
      return endStream(r);
    default:
      if ('' !== t) {
        var s = Object.assign(r ?? {}, {
            hash: r?.hash ?? r?.user?.hash ?? r?.props?._loggedIn?.hash ?? null,
            identifier:
              r?.identifier ??
              r?.user?.identifier ??
              r?.props?._loggedIn?.identifier ??
              null,
          }),
          s = await fetchPost(resolveVariables()?.apiUrl + t, null, null, s);
        if (!s) return !1;
        if (s.hasOwnProperty('status')) {
          if ('disauthenticated' == s.status)
            return logout(), 'disauthenticated';
          if ('failed' == s.status) return !1;
          if ('success' == s.status) return s;
        }
      }
      return 'No Request Called';
  }
}
