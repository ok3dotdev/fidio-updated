var _span;
import React from "react";
import Link from "next/link";
import Inventory from '@mui/icons-material/Inventory';
import receiptPageStyles from './ReceiptPage.module.scss';
import { resolveCurrentStyle, resolveCurrentOption, resolveRegionBasedPrice, resolveMoneyFormat, westernMoneyFormat } from "../../utility/ecommerce";
import { selectThisText } from "../../utility/utility/event";
const Module = props => {
  const resolveOrderImg = m => {
    if (m && props?.cdn?.static) {
      if (m?.product?.images?.length > 0) {
        const useImg = m.product.images.find(n => n.leadImg ?? false);
        if (useImg) {
          return `${props.cdn.static}/${useImg.name}`;
        }
        return `${props.cdn.static}/${m.product.images[0].name}`;
      }
    }
    return '';
  };
  const m = props?.order ?? null;
  const creation = m?.creation && !isNaN(new Date(Number(m.creation))) ? new Date(Number(m.creation)).toString() : '';
  const currency = m?.currency;
  return /*#__PURE__*/React.createElement("div", null, m ? (() => {
    let useSymbol;
    const card = m?.paymentmethoddetails?.card ?? null;
    const cardBilling = m?.paymentmethoddetails?.billing_details ?? null;
    return /*#__PURE__*/React.createElement("div", {
      className: "short_bottom_border",
      style: {
        paddingBottom: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, "Order\xA0", /*#__PURE__*/React.createElement("span", {
      style: {
        background: '#222222',
        borderRadius: '1rem',
        padding: '.0rem .75rem'
      },
      selectValue: `${m?.id ?? ''}`,
      onClick: selectThisText
    }, "#", m?.id ?? ''), "\xA0-\xA0", /*#__PURE__*/React.createElement("span", {
      selectValue: `${m?.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? `${new Date(Number(m.creation)).toDateString()}` : ''}`,
      onClick: selectThisText
    }, m?.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? `${new Date(Number(m.creation)).toDateString()}` : ''), props.hideView ? null : /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0-\xA0", /*#__PURE__*/React.createElement(Link, {
      href: `${props.devLocal ? `${props.devAddress}/r?o=${m?.id}` : `https://${props.domainUrl}/r?o=${m?.id}`}`,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, "View", /*#__PURE__*/React.createElement("div", {
      className: `material-icons`,
      style: {
        fontSize: '1rem',
        marginLeft: '.25rem'
      }
    }, "receipt")))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem'
      }
    }, creation)), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-p3",
      style: {
        flexDirection: 'column',
        marginTop: '.3rem',
        marginBottom: '.3rem'
      }
    }, m?.cart?.map ? m.cart.map((n, j) => {
      const currentStyle = resolveCurrentStyle(n.product, n.style);
      const currentOption = resolveCurrentOption(currentStyle, n.option);
      const priceObject = resolveRegionBasedPrice(props, currentStyle);
      const symbol = priceObject?.symbol ?? '';
      useSymbol = symbol;
      return /*#__PURE__*/React.createElement("div", {
        className: "gap-p2 Ecommerce_Item_Container",
        key: j,
        i: j
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '.5rem'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: `Ecommerce_Item_Image_Container`,
        style: {
          backgroundImage: resolveOrderImg(n) ? `url(${resolveOrderImg(n)})` : null
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: 'img/default/greythumb_product.jpg',
        className: "Product_img",
        style: {
          width: '82.5px',
          maxHeight: '82.5px',
          opacity: resolveOrderImg(n) ? 0 : 1
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "Ecommerce_Title"
      }, n?.product?.name ?? ''), /*#__PURE__*/React.createElement("div", {
        className: `Ecommerce_Cart_Price_Container ${props?.expanded ? 'Ecommerce_Price_Expanded_Container' : null}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "Ecommerce_Price"
      }, symbol, resolveMoneyFormat(n.price), " ", currency.toUpperCase()))), /*#__PURE__*/React.createElement("div", {
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
      }, /*#__PURE__*/React.createElement("div", null, currentStyle?.style ?? ''), _span || (_span = /*#__PURE__*/React.createElement("span", null, "\xA0~\xA0")), /*#__PURE__*/React.createElement("div", null, currentOption?.option ?? '')), /*#__PURE__*/React.createElement("div", {
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
      })), /*#__PURE__*/React.createElement("div", null, Object.prototype.hasOwnProperty.call(n, 'quantity') ? n.quantity : ''))), /*#__PURE__*/React.createElement("div", {
        className: `Ecommerce_Cart_Side_Meta_Container ${props?.expanded ? 'Ecommerce_Price_Expanded_Container' : null}`
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'grey',
          fontSize: '.7rem',
          height: '17px',
          textAlign: 'right'
        }
      }, "Subtotal:"), /*#__PURE__*/React.createElement("div", {
        className: "Ecommerce_Price"
      }, symbol, resolveMoneyFormat(n.quantity * n.price), " ", currency.toUpperCase()))))));
    }) : null), /*#__PURE__*/React.createElement("div", {
      className: "flex Ecommerce_Price",
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: '1.4rem'
      }
    }, "Total:\xA0"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.25rem'
      }
    }, useSymbol, westernMoneyFormat.format(m?.totals?.total) ?? '', " ", currency.toUpperCase())), /*#__PURE__*/React.createElement("div", null, m.paymentfulfilled ? /*#__PURE__*/React.createElement("div", null, m?.meta?.charged && m?.currency ? /*#__PURE__*/React.createElement("div", {
      className: receiptPageStyles.pair,
      style: {
        fontSize: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, "Paid ", useSymbol, resolveMoneyFormat(m.amountcaptured), " ", m.currency.toUpperCase(), " on ", new Date(m.meta.charged).toLocaleDateString(), " ", new Date(m.meta.charged).toTimeString()), /*#__PURE__*/React.createElement("div", null, card ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.25rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, card.brand ?? ''), /*#__PURE__*/React.createElement("div", null, card.last4 ?? ''), /*#__PURE__*/React.createElement("div", null, cardBilling?.name ? cardBilling.name : '')) : null)) : '') : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.75rem'
      }
    }, "Payment Unfulfilled")))));
  })() : null);
};
export default Module;