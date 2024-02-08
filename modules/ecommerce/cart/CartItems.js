"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ecommerce = require("/modules/utility/ecommerce/ecommerce.js");
var _Inventory = _interopRequireDefault(require("@mui/icons-material/Inventory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Module = function Module(props) {
  var _props$cart, _props$cart2, _props$useCartOfCurre;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !(props !== null && props !== void 0 && props.cart) || props !== null && props !== void 0 && props.cart && !(props !== null && props !== void 0 && (_props$cart = props.cart) !== null && _props$cart !== void 0 && _props$cart.items) || props !== null && props !== void 0 && (_props$cart2 = props.cart) !== null && _props$cart2 !== void 0 && _props$cart2.items && props.cart.items.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Ecommerce_Prompt"
  }, "Your cart is empty.") : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p3",
    style: {
      flexDirection: 'column',
      marginTop: '.3rem',
      marginBottom: '.3rem'
    }
  }, props !== null && props !== void 0 && (_props$useCartOfCurre = props.useCartOfCurrency) !== null && _props$useCartOfCurre !== void 0 && (_props$useCartOfCurre = _props$useCartOfCurre.items) !== null && _props$useCartOfCurre !== void 0 && _props$useCartOfCurre.map ? props.useCartOfCurrency.items.map(function (item, i) {
    var _item$product, _props$cdn;
    var current = (0, _ecommerce.resolveCurrentStyle)(item.product, item.style);
    var currentOption = (0, _ecommerce.resolveCurrentOption)(current, item.option);
    var priceObject = (0, _ecommerce.resolveRegionBasedPrice)(props, current);
    var price = priceObject.price;
    var symbol = priceObject.symbol;
    var useImage = item !== null && item !== void 0 && (_item$product = item.product) !== null && _item$product !== void 0 && _item$product.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "gap-p2 Ecommerce_Item_Container",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Item_Image_Container",
      style: {
        backgroundImage: useImage && props !== null && props !== void 0 && (_props$cdn = props.cdn) !== null && _props$cdn !== void 0 && _props$cdn["static"] ? "url(".concat(props.cdn["static"], "/").concat(useImage, ")") : null
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: (0, _ecommerce.resolveImg)(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Title"
    }, item.product.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Price_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, (0, _ecommerce.resolveMoneyFormat)(price)))), /*#__PURE__*/_react["default"].createElement("div", {
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
    }, /*#__PURE__*/_react["default"].createElement("div", null, current && current.style ? current.style : ''), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0~\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, currentOption && currentOption.option ? "".concat(currentOption.option) : '')), /*#__PURE__*/_react["default"].createElement("div", {
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
    })), /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      value: item.quantity,
      style: {
        height: '1.125rem',
        maxWidth: '3rem'
      },
      onChange: props === null || props === void 0 ? void 0 : props.handleUpdateQuantity,
      styleId: item.style,
      optionId: item.option,
      productId: item.product.id,
      quantity: item.quantity
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Cart_Side_Meta_Container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        color: 'grey',
        fontSize: '.7rem',
        height: '17px',
        textAlign: 'right'
      }
    }, "Subtotal:"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, (0, _ecommerce.resolveMoneyFormat)(item.quantity * price)))))));
  }) : null)));
};
var _default = exports["default"] = Module;