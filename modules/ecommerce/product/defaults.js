"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyle = exports.defaultProduct = exports.defaultOption = exports.defaultLineup = exports.defaultDefinePriceCurrency = exports.allowedTypes = void 0;
var _uuid = require("uuid");
var defaultLineup = exports.defaultLineup = function defaultLineup() {
  return {
    id: (0, _uuid.v4)(),
    title: '',
    description: '',
    time: null,
    image: ''
  };
};
var defaultDefinePriceCurrency = exports.defaultDefinePriceCurrency = {
  code: 'US',
  name: 'United States',
  payment: 'stripe',
  region: 'NORTH AMERICA',
  currency: 'USD',
  symbol: '$'
};
var defaultOption = exports.defaultOption = function defaultOption() {
  var addOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var o = {
    sid: (0, _uuid.v4)(),
    quantity: 100
  };
  if (addOption) {
    o.option = '';
  }
  return o;
};
var defaultStyle = exports.defaultStyle = function defaultStyle() {
  return {
    price: 10,
    currency: 'USD',
    priceTable: {},
    sid: (0, _uuid.v4)(),
    style: '',
    option: [defaultOption(false)]
  };
};
var defaultProduct = exports.defaultProduct = function defaultProduct(shopId, useStyle) {
  return {
    id: (0, _uuid.v4)(),
    shop: shopId !== null && shopId !== void 0 ? shopId : null,
    name: '',
    detailmeta: {
      productType: 'virtual',
      livestream: true,
      lineup: [],
      ticket: true // Add this to ensure Item is interpreted as ticket w date
    },
    styles: [useStyle !== null && useStyle !== void 0 ? useStyle : defaultStyle],
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
    "new": true
  };
};
var allowedTypes = exports.allowedTypes = ['image/jpeg', 'image/png'];