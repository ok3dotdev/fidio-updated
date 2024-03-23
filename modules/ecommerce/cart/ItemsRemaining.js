var _span;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import { resolveCurrentStyle, resolveCurrentOption, resolveMoneyFormat, resolveRegionBasedPrice, resolveImg } from '/modules/utility/ecommerce/ecommerce.js';
import Inventory from '@mui/icons-material/Inventory';
const Module = props => {
  return /*#__PURE__*/_jsx("div", {
    className: "flex gap-p3",
    style: {
      flexDirection: 'column',
      marginTop: '.3rem',
      marginBottom: '.3rem'
    }
  }, void 0, props?.useCartOfCurrency?.remaining?.length > 0 ? /*#__PURE__*/_jsx("div", {
    style: {
      background: '#222222',
      borderRadius: '.5rem',
      fontSize: '.75rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem',
      padding: '.25rem .5rem'
    }
  }, void 0, "The Items below will be processed after the current purchase. They are in a different currency.") : null, props?.useCartOfCurrency?.remaining?.map ? props?.useCartOfCurrency?.remaining?.map((item, i) => {
    const current = resolveCurrentStyle(item.product, item.style);
    const currentOption = resolveCurrentOption(current, item.option);
    const priceObject = resolveRegionBasedPrice(props, current);
    const price = priceObject.price;
    const symbol = priceObject.symbol;
    const useImage = item?.product?.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
    return /*#__PURE__*/_jsx("div", {
      className: "gap-p2 Ecommerce_Item_Container"
    }, i, /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: `Ecommerce_Item_Image_Container`,
      style: {
        backgroundImage: useImage && props?.cdn?.static ? `url(${props.cdn.static}/${useImage})` : null
      }
    }, void 0, /*#__PURE__*/_jsx("img", {
      src: resolveImg(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    })), /*#__PURE__*/_jsx("div", {
      style: {
        width: '100%'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: "Ecommerce_Title"
    }, void 0, item.product.name), /*#__PURE__*/_jsx("div", {
      className: "Ecommerce_Cart_Price_Container"
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: "Ecommerce_Price"
    }, void 0, symbol, resolveMoneyFormat(price)))), /*#__PURE__*/_jsx("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("span", {
      className: "flex",
      style: {
        fontSize: '.7rem',
        color: 'grey'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, current && current.style ? current.style : ''), _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, "\xA0~\xA0")), /*#__PURE__*/_jsx("div", {}, void 0, currentOption && currentOption.option ? `${currentOption.option}` : '')), /*#__PURE__*/_jsx("div", {
      className: "Ecommerce_Cart_Quantity_Container"
    }, void 0, /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        alignSelf: 'center'
      }
    }, void 0, /*#__PURE__*/_jsx(Inventory, {
      sx: {
        width: '.85rem',
        height: '.9rem',
        marginRight: '.25rem'
      }
    })), /*#__PURE__*/_jsx("input", {
      type: "number",
      value: item.quantity,
      style: {
        height: '1.125rem',
        maxWidth: '3rem'
      },
      onChange: props?.handleUpdateQuantity,
      styleId: item.style,
      optionId: item.option,
      productId: item.product.id,
      quantity: item.quantity
    }))), /*#__PURE__*/_jsx("div", {
      className: "Ecommerce_Cart_Side_Meta_Container"
    }, void 0, /*#__PURE__*/_jsx("div", {
      style: {
        color: 'grey',
        fontSize: '.7rem',
        height: '17px',
        textAlign: 'right'
      }
    }, void 0, "Subtotal:"), /*#__PURE__*/_jsx("div", {
      className: "Ecommerce_Price"
    }, void 0, symbol, resolveMoneyFormat(item.quantity * price)))))));
  }) : null);
};
export default Module;