import createProduct from"./product/createProduct";import getProducts from"./product/getProducts";import sendEmail from"./email/sendEmail";import fetchHandler from"./fetch/fetchHandler";export default async function api(e,t){switch(e?.toLowerCase?e.toLowerCase():e){case"/product/createproduct":return createProduct(t);case"/product/getproducts":return getProducts(t);case"/email/sendemail":return sendEmail(t);case"/fetch/fetchhandler":return fetchHandler(t);default:return"No Request Called"}}