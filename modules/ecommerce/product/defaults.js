import { v4 as uuidv4 } from 'uuid';
const defaultLineup = () => {
  return {
    id: uuidv4(),
    title: '',
    description: '',
    time: null,
    image: ''
  };
};
const defaultDefinePriceCurrency = {
  code: 'US',
  name: 'United States',
  payment: 'stripe',
  region: 'NORTH AMERICA',
  currency: 'USD',
  symbol: '$'
};
const defaultOption = (addOption = true) => {
  const o = {
    sid: uuidv4(),
    quantity: 100
  };
  if (addOption) {
    o.option = '';
  }
  return o;
};
const defaultStyle = () => {
  return {
    price: 10,
    currency: 'USD',
    priceTable: {},
    sid: uuidv4(),
    style: '',
    option: [defaultOption(false)]
  };
};
const defaultProduct = (shopId, useStyle) => {
  return {
    id: uuidv4(),
    shop: shopId ?? null,
    name: '',
    detailmeta: {
      productType: 'virtual',
      livestream: true,
      lineup: [],
      ticket: true // Add this to ensure Item is interpreted as ticket w date
    },
    styles: [useStyle ?? defaultStyle],
    shipping: [],
    published: false,
    images: [],
    protype: {
      type: 'virtual',
      subscription: false
    },
    infinite: false,
    meta: {},
    files: {},
    new: true
  };
};
const allowedTypes = ['image/jpeg', 'image/png'];
export { allowedTypes, defaultLineup, defaultOption, defaultProduct, defaultStyle, defaultDefinePriceCurrency };