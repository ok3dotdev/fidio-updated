import createProduct from './product/createProduct';
import getProducts from './product/getProducts';
import sendEmail from './email/sendEmail';
export default async function api(url, args) {
  const u = url?.toLowerCase ? url.toLowerCase() : url;
  switch (u) {
    case '/product/createproduct':
      return await createProduct(args);
    case '/product/getproducts':
      return await getProducts(args);
    case '/email/sendemail':
      return await sendEmail(args);
    default:
      return 'No Request Called';
  }
}