"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fetch = require("/modules/utility/fetch");
var _defaults = require("/modules/ecommerce/product/defaults");
function handler(_x) {
  return _handler.apply(this, arguments);
}
function _handler() {
  _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var _body$pipelineDbItem, _body$shop$id, _body$shop, formData, product, imgNames, _loop, i, res;
    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Create Product Body', body);
          if (!(body !== null && body !== void 0 && body.apiUrl && body !== null && body !== void 0 && body.pipelineDbItem)) {
            _context2.next = 42;
            break;
          }
          formData = new FormData();
          product = (_body$pipelineDbItem = body.pipelineDbItem) !== null && _body$pipelineDbItem !== void 0 ? _body$pipelineDbItem : (0, _defaults.defaultProduct)();
          imgNames = [];
          Object.entries(body.pipelineObject).map(function (m) {
            var _product$detailmeta;
            switch (m[0]) {
              case 'name':
                product.name = m[1];
                break;
              case 'description':
                product.detailmeta.description = m[1];
                break;
              case 'eventDate':
                if (!(product !== null && product !== void 0 && product.detailmeta)) {
                  product.detailmeta = (0, _defaults.defaultProduct)().detailmeta;
                }
                if (!(product !== null && product !== void 0 && product.detailmeta.eventDateDef)) {
                  product.detailmeta.eventDateDef = {
                    dates: [],
                    input: '',
                    tags: []
                  };
                }
                product.detailmeta.eventDateDef.dates = [m[1]];
                product.detailmeta.eventDateDef.input = [m[1].toString()];
                if (!(product !== null && product !== void 0 && product.detailmeta.livestreamDef)) {
                  product.detailmeta.livestreamDef = {
                    dates: [],
                    input: '',
                    tags: []
                  };
                }
                product.detailmeta.livestreamDef.dates = [m[1]];
                product.detailmeta.livestreamDef.input = [m[1].toString()];
                break;
              case 'price':
                if (!(product !== null && product !== void 0 && product.styles) && (product === null || product === void 0 ? void 0 : product.styles.length) == 0) {
                  product.styles = [(0, _defaults.defaultStyle)()];
                }
                product.styles[0].price = m[1];
                break;
              case 'quantity':
                if (!(product !== null && product !== void 0 && product.styles) && (product === null || product === void 0 ? void 0 : product.styles.length) == 0) {
                  product.styles = [(0, _defaults.defaultStyle)()];
                }
                product.styles[0].quantity = m[1];
                break;
              case 'lineup':
                if (product !== null && product !== void 0 && (_product$detailmeta = product.detailmeta) !== null && _product$detailmeta !== void 0 && _product$detailmeta.lineup && Array.isArray(m[1])) {
                  m[1].map(function (n) {
                    if (n.image && n.name && ['lineup'].indexOf(n.modif) > -1 && n.id) {
                      formData.append('image', n.image);
                      imgNames.push({
                        name: n.name,
                        modif: n.modif,
                        id: n.id,
                        title: n.title,
                        time: n.time,
                        description: n.description
                      });
                    }
                  });
                }
                break;
              case 'images':
                if (Array.isArray(m[1])) {
                  m[1].map(function (n) {
                    if (n.image && n.name && ['leadImg', 'featureImg', 'productImg'].indexOf(n.modif) > -1) {
                      formData.append('image', n.image);
                      imgNames.push({
                        name: n.name,
                        modif: n.modif,
                        id: n.id
                      });
                    }
                  });
                }
                break;
              default:
                product.meta[m[0]] = m[1];
                break;
            }
          });
          _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop(i) {
            var values, f, _body$imgFor$i$id, _body$imgFor$i;
            return _regenerator["default"].wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  values = body.imgCache.getAll('image');
                  if (values) {
                    f = values.find(function (m) {
                      return m.name === body.imgFor[i].name;
                    });
                    if (f) {
                      formData.append('image', f); // Necessary filter through image cache user has shared. Do not send all images user has uploaded to server
                      imgNames.push({
                        name: f.name,
                        modif: body.imgFor[i].modif,
                        id: (_body$imgFor$i$id = (_body$imgFor$i = body.imgFor[i]) === null || _body$imgFor$i === void 0 ? void 0 : _body$imgFor$i.id) !== null && _body$imgFor$i$id !== void 0 ? _body$imgFor$i$id : null
                      });
                    }
                  }
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
          i = 0;
        case 8:
          if (!(i < body.imgFor.length)) {
            _context2.next = 13;
            break;
          }
          return _context2.delegateYield(_loop(i), "t0", 10);
        case 10:
          i++;
          _context2.next = 8;
          break;
        case 13:
          formData.append('imgNames', JSON.stringify(imgNames));
          formData.append('hash', body._loggedIn.hash);
          formData.append('identifier', body._loggedIn.identifier);
          formData.append('product', JSON.stringify(product));
          formData.append('shop', (_body$shop$id = body === null || body === void 0 || (_body$shop = body.shop) === null || _body$shop === void 0 ? void 0 : _body$shop.id) !== null && _body$shop$id !== void 0 ? _body$shop$id : null);
          formData.append('status', 'publish');
          formData.append('existing', body.existing);
          _context2.next = 22;
          return (0, _fetch.fetchPost)(body.apiUrl + '/m/publishproduct', null, null, formData, {
            formData: true
          });
        case 22:
          res = _context2.sent;
          if (res) {
            _context2.next = 27;
            break;
          }
          return _context2.abrupt("return", false);
        case 27:
          if (!res.hasOwnProperty('status')) {
            _context2.next = 39;
            break;
          }
          if (!(res.status == "disauthenticated")) {
            _context2.next = 33;
            break;
          }
          logout();
          return _context2.abrupt("return", "disauthenticated");
        case 33:
          if (!(res.status == "failed")) {
            _context2.next = 37;
            break;
          }
          return _context2.abrupt("return", false);
        case 37:
          if (!(res.status == "success")) {
            _context2.next = 39;
            break;
          }
          return _context2.abrupt("return", res);
        case 39:
          return _context2.abrupt("return", false);
        case 42:
          return _context2.abrupt("return", false);
        case 43:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return _handler.apply(this, arguments);
}