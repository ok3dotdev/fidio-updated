"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyle = exports.defaultOption = exports.defaultLineup = exports.defaultDefinePriceCurrency = exports.allowedTypes = void 0;
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
var allowedTypes = exports.allowedTypes = ['image/jpeg', 'image/png'];