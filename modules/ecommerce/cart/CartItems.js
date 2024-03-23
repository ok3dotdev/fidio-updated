var _div, _span;
import React from 'react';
import { resolveCurrentStyle, resolveCurrentOption, resolveMoneyFormat, resolveRegionBasedPrice, resolveImg } from '/modules/utility/ecommerce/ecommerce.js';
import Inventory from '@mui/icons-material/Inventory';
const Module = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, !props?.cart || props?.cart && !props?.cart?.items || props?.cart?.items && props.cart.items.length === 0 ? _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "Ecommerce_Prompt"
  }, "Your cart is empty.")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p3",
    style: {
      flexDirection: 'column',
      marginTop: '.3rem',
      marginBottom: '.3rem'
    }
  }, props?.useCartOfCurrency?.items?.map ? props.useCartOfCurrency.items.map((item, i) => {
    const current = resolveCurrentStyle(item.product, item.style);
    const currentOption = resolveCurrentOption(current, item.option);
    const priceObject = resolveRegionBasedPrice(props, current);
    const price = priceObject.price;
    const symbol = priceObject.symbol;
    const useImage = item?.product?.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "gap-p2 Ecommerce_Item_Container",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: `Ecommerce_Item_Image_Container`,
      style: {
        backgroundImage: useImage && props?.cdn?.static ? `url(${props.cdn.static}/${useImage})` : null
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: resolveImg(props.editing, props.cdn),
      className: "Product_img",
      style: {
        width: '45px',
        opacity: useImage ? 0 : 1
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Ecommerce_Title"
    }, item.product.name), /*#__PURE__*/React.createElement("div", {
      className: "Ecommerce_Cart_Price_Container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, resolveMoneyFormat(price)))), /*#__PURE__*/React.createElement("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "flex",
      style: {
        fontSize: '.7rem',
        color: 'grey'
      }
    }, /*#__PURE__*/React.createElement("div", null, current && current.style ? current.style : ''), _span || (_span = /*#__PURE__*/React.createElement("span", null, "\xA0~\xA0")), /*#__PURE__*/React.createElement("div", null, currentOption && currentOption.option ? `${currentOption.option}` : '')), /*#__PURE__*/React.createElement("div", {
      className: "Ecommerce_Cart_Quantity_Container"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignSelf: 'center'
      }
    }, /*#__PURE__*/React.createElement(Inventory, {
      sx: {
        width: '.85rem',
        height: '.9rem',
        marginRight: '.25rem'
      }
    })), /*#__PURE__*/React.createElement("input", {
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
    }))), /*#__PURE__*/React.createElement("div", {
      className: "Ecommerce_Cart_Side_Meta_Container"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'grey',
        fontSize: '.7rem',
        height: '17px',
        textAlign: 'right'
      }
    }, "Subtotal:"), /*#__PURE__*/React.createElement("div", {
      className: "Ecommerce_Price"
    }, symbol, resolveMoneyFormat(item.quantity * price)))))));
  }) : null)));
};
export default Module;