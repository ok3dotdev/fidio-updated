"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
var _ReceiptPageModule = _interopRequireDefault(require("./ReceiptPage.module.scss"));
var _ecommerce = require("../../utility/ecommerce");
var _event = require("../../utility/utility/event");
var _span;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$order;
  var resolveOrderImg = function resolveOrderImg(m) {
    var _props$cdn;
    if (m && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"]) {
      var _m$product;
      if ((m === null || m === void 0 || (_m$product = m.product) === null || _m$product === void 0 || (_m$product = _m$product.images) === null || _m$product === void 0 ? void 0 : _m$product.length) > 0) {
        var useImg = m.product.images.find(function (n) {
          var _n$leadImg;
          return (_n$leadImg = n.leadImg) !== null && _n$leadImg !== void 0 ? _n$leadImg : false;
        });
        if (useImg) {
          return "".concat(props.cdn["static"], "/").concat(useImg.name);
        }
        return "".concat(props.cdn["static"], "/").concat(m.product.images[0].name);
      }
    }
    return '';
  };
  var m = (_props$order = props === null || props === void 0 ? void 0 : props.order) !== null && _props$order !== void 0 ? _props$order : null;
  var creation = m !== null && m !== void 0 && m.creation && !isNaN(new Date(Number(m.creation))) ? new Date(Number(m.creation)).toString() : '';
  var currency = m === null || m === void 0 ? void 0 : m.currency;
  return /*#__PURE__*/_react["default"].createElement("div", null, m ? function (_m$paymentmethoddetai, _m$paymentmethoddetai2, _m$paymentmethoddetai3, _m$paymentmethoddetai4, _m$id, _m$id2, _m$cart, _westernMoneyFormat$f, _m$totals, _m$meta, _card$brand, _card$last) {
    var useSymbol;
    var card = (_m$paymentmethoddetai = m === null || m === void 0 || (_m$paymentmethoddetai2 = m.paymentmethoddetails) === null || _m$paymentmethoddetai2 === void 0 ? void 0 : _m$paymentmethoddetai2.card) !== null && _m$paymentmethoddetai !== void 0 ? _m$paymentmethoddetai : null;
    var cardBilling = (_m$paymentmethoddetai3 = m === null || m === void 0 || (_m$paymentmethoddetai4 = m.paymentmethoddetails) === null || _m$paymentmethoddetai4 === void 0 ? void 0 : _m$paymentmethoddetai4.billing_details) !== null && _m$paymentmethoddetai3 !== void 0 ? _m$paymentmethoddetai3 : null;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "short_bottom_border",
      style: {
        paddingBottom: '1rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, "Order\xA0", /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        background: '#222222',
        borderRadius: '1rem',
        padding: '.0rem .75rem'
      },
      selectValue: "".concat((_m$id = m === null || m === void 0 ? void 0 : m.id) !== null && _m$id !== void 0 ? _m$id : ''),
      onClick: _event.selectThisText
    }, "#", (_m$id2 = m === null || m === void 0 ? void 0 : m.id) !== null && _m$id2 !== void 0 ? _m$id2 : ''), "\xA0-\xA0", /*#__PURE__*/_react["default"].createElement("span", {
      selectValue: "".concat(m !== null && m !== void 0 && m.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? "".concat(new Date(Number(m.creation)).toDateString()) : ''),
      onClick: _event.selectThisText
    }, m !== null && m !== void 0 && m.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? "".concat(new Date(Number(m.creation)).toDateString()) : ''), props.hideView ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0-\xA0", /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "".concat(props.devLocal ? "".concat(props.devAddress, "/r?o=").concat(m === null || m === void 0 ? void 0 : m.id) : "https://".concat(props.domainUrl, "/r?o=").concat(m === null || m === void 0 ? void 0 : m.id)),
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, "View", /*#__PURE__*/_react["default"].createElement("div", {
      className: "material-icons",
      style: {
        fontSize: '1rem',
        marginLeft: '.25rem'
      }
    }, "receipt")))), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '.7rem'
      }
    }, creation)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p3",
      style: {
        flexDirection: 'column',
        marginTop: '.3rem',
        marginBottom: '.3rem'
      }
    }, m !== null && m !== void 0 && (_m$cart = m.cart) !== null && _m$cart !== void 0 && _m$cart.map ? m.cart.map(function (n, j) {
      var _priceObject$symbol, _n$product$name, _n$product, _currentStyle$style, _currentOption$option;
      var currentStyle = (0, _ecommerce.resolveCurrentStyle)(n.product, n.style);
      var currentOption = (0, _ecommerce.resolveCurrentOption)(currentStyle, n.option);
      var priceObject = (0, _ecommerce.resolveRegionBasedPrice)(props, currentStyle);
      var symbol = (_priceObject$symbol = priceObject === null || priceObject === void 0 ? void 0 : priceObject.symbol) !== null && _priceObject$symbol !== void 0 ? _priceObject$symbol : '';
      useSymbol = symbol;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "gap-p2 Ecommerce_Item_Container",
        key: j,
        i: j
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          gap: '.5rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Item_Image_Container",
        style: {
          backgroundImage: resolveOrderImg(n) ? "url(".concat(resolveOrderImg(n), ")") : null
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: 'img/default/greythumb_product.jpg',
        className: "Product_img",
        style: {
          width: '82.5px',
          maxHeight: '82.5px',
          opacity: resolveOrderImg(n) ? 0 : 1
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Title"
      }, (_n$product$name = n === null || n === void 0 || (_n$product = n.product) === null || _n$product === void 0 ? void 0 : _n$product.name) !== null && _n$product$name !== void 0 ? _n$product$name : ''), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Cart_Price_Container ".concat(props !== null && props !== void 0 && props.expanded ? 'Ecommerce_Price_Expanded_Container' : null)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Price"
      }, symbol, (0, _ecommerce.resolveMoneyFormat)(n.price), " ", currency.toUpperCase()))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex",
        style: {
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "flex",
        style: {
          fontSize: '.7rem',
          color: 'grey'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, (_currentStyle$style = currentStyle === null || currentStyle === void 0 ? void 0 : currentStyle.style) !== null && _currentStyle$style !== void 0 ? _currentStyle$style : ''), _span || (_span = /*#__PURE__*/_react["default"].createElement("span", null, "\xA0~\xA0")), /*#__PURE__*/_react["default"].createElement("div", null, (_currentOption$option = currentOption === null || currentOption === void 0 ? void 0 : currentOption.option) !== null && _currentOption$option !== void 0 ? _currentOption$option : '')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Cart_Quantity_Container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignSelf: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Inventory["default"], {
        sx: {
          width: '.85rem',
          height: '.9rem',
          marginRight: '.25rem'
        }
      })), /*#__PURE__*/_react["default"].createElement("div", null, Object.prototype.hasOwnProperty.call(n, 'quantity') ? n.quantity : ''))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Cart_Side_Meta_Container ".concat(props !== null && props !== void 0 && props.expanded ? 'Ecommerce_Price_Expanded_Container' : null)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: 'grey',
          fontSize: '.7rem',
          height: '17px',
          textAlign: 'right'
        }
      }, "Subtotal:"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Ecommerce_Price"
      }, symbol, (0, _ecommerce.resolveMoneyFormat)(n.quantity * n.price), " ", currency.toUpperCase()))))));
    }) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex Ecommerce_Price",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        lineHeight: '1.4rem'
      }
    }, "Total:\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '1.25rem'
      }
    }, useSymbol, (_westernMoneyFormat$f = _ecommerce.westernMoneyFormat.format(m === null || m === void 0 || (_m$totals = m.totals) === null || _m$totals === void 0 ? void 0 : _m$totals.total)) !== null && _westernMoneyFormat$f !== void 0 ? _westernMoneyFormat$f : '', " ", currency.toUpperCase())), /*#__PURE__*/_react["default"].createElement("div", null, m.paymentfulfilled ? /*#__PURE__*/_react["default"].createElement("div", null, m !== null && m !== void 0 && (_m$meta = m.meta) !== null && _m$meta !== void 0 && _m$meta.charged && m !== null && m !== void 0 && m.currency ? /*#__PURE__*/_react["default"].createElement("div", {
      className: _ReceiptPageModule["default"].pair,
      style: {
        fontSize: '.7rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, "Paid ", useSymbol, (0, _ecommerce.resolveMoneyFormat)(m.amountcaptured), " ", m.currency.toUpperCase(), " on ", new Date(m.meta.charged).toLocaleDateString(), " ", new Date(m.meta.charged).toTimeString()), /*#__PURE__*/_react["default"].createElement("div", null, card ? /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: '.25rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, (_card$brand = card.brand) !== null && _card$brand !== void 0 ? _card$brand : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_card$last = card.last4) !== null && _card$last !== void 0 ? _card$last : ''), /*#__PURE__*/_react["default"].createElement("div", null, cardBilling !== null && cardBilling !== void 0 && cardBilling.name ? cardBilling.name : '')) : null)) : '') : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '.75rem'
      }
    }, "Payment Unfulfilled")))));
  }() : null);
};
var _default = exports["default"] = Module;