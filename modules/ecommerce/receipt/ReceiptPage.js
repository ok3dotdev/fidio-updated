"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ReceiptPageModule = _interopRequireDefault(require("./ReceiptPage.module.scss"));
var _ecommerce = require("../../utility/ecommerce");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Module = function Module(props) {
  var _receiptData$totals, _receiptData$paymentm, _receiptData$paymentm2, _receiptData$meta, _card$brand, _card$last;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    fetchBusy = _React$useState2[0],
    setFetchBusy = _React$useState2[1];
  var resolveStyle = function resolveStyle(p, s) {
    if (p && p.styles && s) {
      var f = p.styles.find(function (m) {
        return m.sid === s;
      });
      if (f && f.style) {
        return f.style;
      }
    }
    return '';
  };
  var receiptData = props === null || props === void 0 ? void 0 : props.receiptData;
  var currency = receiptData === null || receiptData === void 0 ? void 0 : receiptData.currency;
  var cartTotal = receiptData === null || receiptData === void 0 || (_receiptData$totals = receiptData.totals) === null || _receiptData$totals === void 0 ? void 0 : _receiptData$totals.total;
  var creation = receiptData !== null && receiptData !== void 0 && receiptData.creation && !isNaN(new Date(Number(receiptData.creation))) ? new Date(Number(receiptData.creation)).toString() : '';
  var card = receiptData !== null && receiptData !== void 0 && (_receiptData$paymentm = receiptData.paymentmethoddetails) !== null && _receiptData$paymentm !== void 0 && _receiptData$paymentm.card ? receiptData.paymentmethoddetails.card : null;
  var cardBilling = receiptData !== null && receiptData !== void 0 && (_receiptData$paymentm2 = receiptData.paymentmethoddetails) !== null && _receiptData$paymentm2 !== void 0 && _receiptData$paymentm2.billing_details ? receiptData.paymentmethoddetails.billing_details : null;
  console.log(receiptData);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className)
  }, receiptData ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _ReceiptPageModule["default"].pair
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      marginTop: '0',
      marginBottom: '.25rem'
    }
  }, "Order ", receiptData.id), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.7rem'
    }
  }, creation)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ReceiptPageModule["default"].container, " ReceiptPage_container")
  }, /*#__PURE__*/_react["default"].createElement("div", null, receiptData !== null && receiptData !== void 0 && receiptData.cart && Array.isArray(receiptData.cart) ? receiptData.cart.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "".concat(i !== 0 ? 'separator_top_dashed' : '', " ReceiptPage_product"),
      style: {
        fontSize: '.8rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _ReceiptPageModule["default"].pair
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ReceiptPage_product_name"
    }, m.product.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "ReceiptPage_product_cost"
    }, "$", (0, _ecommerce.resolveMoneyFormat)(m.total), " ", currency.toUpperCase())), /*#__PURE__*/_react["default"].createElement("div", {
      className: _ReceiptPageModule["default"].pair,
      style: {
        fontSize: '.7rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", null, resolveStyle(m.product, m.style)), /*#__PURE__*/_react["default"].createElement("div", null, (0, _ecommerce.resolveOption)(m.product, m.style, m.option))));
  }) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ReceiptPageModule["default"].pair, " separator_top")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600,
      lineHeight: '1.25rem'
    }
  }, "Total"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600,
      lineHeight: '1.25rem'
    }
  }, "$", cartTotal ? (0, _ecommerce.resolveMoneyFormat)(cartTotal) : '', " ", currency.toUpperCase()))), /*#__PURE__*/_react["default"].createElement("div", null, receiptData.paymentfulfilled ? /*#__PURE__*/_react["default"].createElement("div", null, receiptData !== null && receiptData !== void 0 && (_receiptData$meta = receiptData.meta) !== null && _receiptData$meta !== void 0 && _receiptData$meta.charged && currency ? /*#__PURE__*/_react["default"].createElement("div", {
    className: _ReceiptPageModule["default"].pair,
    style: {
      fontSize: '.7rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Paid $", (0, _ecommerce.resolveMoneyFormat)(receiptData.amountcaptured), " ", currency.toUpperCase(), " on ", new Date(receiptData.meta.charged).toLocaleDateString()), /*#__PURE__*/_react["default"].createElement("div", null, card ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, (_card$brand = card.brand) !== null && _card$brand !== void 0 ? _card$brand : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_card$last = card.last4) !== null && _card$last !== void 0 ? _card$last : ''), /*#__PURE__*/_react["default"].createElement("div", null, cardBilling !== null && cardBilling !== void 0 && cardBilling.name ? cardBilling.name : '')) : null)) : '') : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem'
    }
  }, "Payment Unfulfilled"))))) : null);
};
var _default = exports["default"] = Module;