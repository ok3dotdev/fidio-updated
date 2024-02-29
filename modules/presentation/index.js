"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _indexBgHello = require("./hello/indexBgHello");
var _indexHello = require("./hello/indexHello");
var _bannerHello = require("./hello/bannerHello");
var _marketingSlider = require("./marketingSlider");
var Modules = {
  BannerHello: _bannerHello.BannerHello,
  IndexBgHello: _indexBgHello.IndexBgHello,
  IndexHello: _indexHello.IndexHello,
  MarketingSlider: _marketingSlider.MarketingSlider
};
var _default = exports["default"] = Modules;