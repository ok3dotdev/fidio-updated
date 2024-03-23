var _span;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
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
  return /*#__PURE__*/_jsx("div", {}, void 0, m ? (() => {
    let useSymbol;
    const card = m?.paymentmethoddetails?.card ?? null;
    const cardBilling = m?.paymentmethoddetails?.billing_details ?? null;
    return /*#__PURE__*/_jsx("div", {
      className: "short_bottom_border",
      style: {
        paddingBottom: '1rem'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
      className: "flex",
      style: {
        justifyContent: 'space-between'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, void 0, "Order\xA0", /*#__PURE__*/_jsx("span", {
      style: {
        background: '#222222',
        borderRadius: '1rem',
        padding: '.0rem .75rem'
      },
      selectValue: `${m?.id ?? ''}`,
      onClick: selectThisText
    }, void 0, "#", m?.id ?? ''), "\xA0-\xA0", /*#__PURE__*/_jsx("span", {
      selectValue: `${m?.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? `${new Date(Number(m.creation)).toDateString()}` : ''}`,
      onClick: selectThisText
    }, void 0, m?.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? `${new Date(Number(m.creation)).toDateString()}` : ''), props.hideView ? null : /*#__PURE__*/_jsx(React.Fragment, {}, void 0, "\xA0-\xA0", /*#__PURE__*/_jsx(Link, {
      href: `${props.devLocal ? `${props.devAddress}/r?o=${m?.id}` : `https://${props.domainUrl}/r?o=${m?.id}`}`,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, void 0, "View", /*#__PURE__*/_jsx("div", {
      className: `material-icons`,
      style: {
        fontSize: '1rem',
        marginLeft: '.25rem'
      }
    }, void 0, "receipt")))), /*#__PURE__*/_jsx("div", {
      style: {
        fontSize: '.7rem'
      }
    }, void 0, creation)), /*#__PURE__*/_jsx("div", {
      className: "flex gap-p3",
      style: {
        flexDirection: 'column',
        marginTop: '.3rem',
        marginBottom: '.3rem'
      }
    }, void 0, m?.cart?.map ? m.cart.map((n, j) => {
      const currentStyle = resolveCurrentStyle(n.product, n.style);
      const currentOption = resolveCurrentOption(currentStyle, n.option);
      const priceObject = resolveRegionBasedPrice(props, currentStyle);
      const symbol = priceObject?.symbol ?? '';
      useSymbol = symbol;
      return /*#__PURE__*/_jsx("div", {
        className: "gap-p2 Ecommerce_Item_Container",
        i: j
      }, j, /*#__PURE__*/_jsx("div", {
        style: {
          display: 'flex',
          gap: '.5rem'
        }
      }, void 0, /*#__PURE__*/_jsx("div", {
        className: `Ecommerce_Item_Image_Container`,
        style: {
          backgroundImage: resolveOrderImg(n) ? `url(${resolveOrderImg(n)})` : null
        }
      }, void 0, /*#__PURE__*/_jsx("img", {
        src: 'img/default/greythumb_product.jpg',
        className: "Product_img",
        style: {
          width: '82.5px',
          maxHeight: '82.5px',
          opacity: resolveOrderImg(n) ? 0 : 1
        }
      })), /*#__PURE__*/_jsx("div", {
        style: {
          width: '100%'
        }
      }, void 0, /*#__PURE__*/_jsx("div", {
        className: "flex gap-p2 Ecommerce_Cart_Title_Main_Container"
      }, void 0, /*#__PURE__*/_jsx("div", {
        className: "Ecommerce_Title"
      }, void 0, n?.product?.name ?? ''), /*#__PURE__*/_jsx("div", {
        className: `Ecommerce_Cart_Price_Container ${props?.expanded ? 'Ecommerce_Price_Expanded_Container' : null}`
      }, void 0, /*#__PURE__*/_jsx("div", {
        className: "Ecommerce_Price"
      }, void 0, symbol, resolveMoneyFormat(n.price), " ", currency.toUpperCase()))), /*#__PURE__*/_jsx("div", {
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
      }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, currentStyle?.style ?? ''), _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, "\xA0~\xA0")), /*#__PURE__*/_jsx("div", {}, void 0, currentOption?.option ?? '')), /*#__PURE__*/_jsx("div", {
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
      })), /*#__PURE__*/_jsx("div", {}, void 0, Object.prototype.hasOwnProperty.call(n, 'quantity') ? n.quantity : ''))), /*#__PURE__*/_jsx("div", {
        className: `Ecommerce_Cart_Side_Meta_Container ${props?.expanded ? 'Ecommerce_Price_Expanded_Container' : null}`
      }, void 0, /*#__PURE__*/_jsx("div", {
        style: {
          color: 'grey',
          fontSize: '.7rem',
          height: '17px',
          textAlign: 'right'
        }
      }, void 0, "Subtotal:"), /*#__PURE__*/_jsx("div", {
        className: "Ecommerce_Price"
      }, void 0, symbol, resolveMoneyFormat(n.quantity * n.price), " ", currency.toUpperCase()))))));
    }) : null), /*#__PURE__*/_jsx("div", {
      className: "flex Ecommerce_Price",
      style: {
        justifyContent: 'space-between'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {
      style: {
        lineHeight: '1.4rem'
      }
    }, void 0, "Total:\xA0"), /*#__PURE__*/_jsx("div", {
      style: {
        fontSize: '1.25rem'
      }
    }, void 0, useSymbol, westernMoneyFormat.format(m?.totals?.total) ?? '', " ", currency.toUpperCase())), /*#__PURE__*/_jsx("div", {}, void 0, m.paymentfulfilled ? /*#__PURE__*/_jsx("div", {}, void 0, m?.meta?.charged && m?.currency ? /*#__PURE__*/_jsx("div", {
      className: receiptPageStyles.pair,
      style: {
        fontSize: '.7rem'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, "Paid ", useSymbol, resolveMoneyFormat(m.amountcaptured), " ", m.currency.toUpperCase(), " on ", new Date(m.meta.charged).toLocaleDateString(), " ", new Date(m.meta.charged).toTimeString()), /*#__PURE__*/_jsx("div", {}, void 0, card ? /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        gap: '.25rem'
      }
    }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, card.brand ?? ''), /*#__PURE__*/_jsx("div", {}, void 0, card.last4 ?? ''), /*#__PURE__*/_jsx("div", {}, void 0, cardBilling?.name ? cardBilling.name : '')) : null)) : '') : /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
      style: {
        fontSize: '.75rem'
      }
    }, void 0, "Payment Unfulfilled")))));
  })() : null);
};
export default Module;