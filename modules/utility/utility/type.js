"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeText = void 0;
var normalizeText = function normalizeText(s) {
  var doNormalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var temp = s;
  if (doNormalize) {
    if (typeof temp === 'string') {
      temp = temp.replace(/:nbsp;/g, ' ');
    }
  }
  return temp;
};
exports.normalizeText = normalizeText;