"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _uuid = require("uuid");
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
var _date = require("../utility/utility/date");
var _ecommerce = require("../utility/ecommerce");
var _util = require("../util");
var _payment = require("../payment");
var moduleName = 'BillingAdmin';
var Module = function Module(props) {
  var _invoiceData$simpleDa, _invoiceData$simpleDa2, _invoiceData$simpleDa3, _invoiceData$simpleDa4, _invoiceData$simpleDa5, _invoiceData$simpleDa6, _invoiceData$simpleDa7, _invoiceData$simpleDa8, _invoiceData$simpleDa9, _ref3, _invoiceData$simpleDa10, _invoiceData$simpleDa11, _invoiceData$data$pay, _invoiceData$data, _invoiceData$data$add, _invoiceData$data2, _invoiceData$data3, _invoiceData$data$pay2, _invoiceData$data4, _invoiceData$data$pay3, _invoiceData$data5, _invoiceData$data$pay4, _invoiceData$data6, _invoiceData$data$pay5, _invoiceData$data7, _invoiceData$data8, _invoiceData$data9, _invoiceData$data$pay6, _invoiceData$data10, _invoiceData$id, _invoiceData$simpleDa12, _invoiceData$data11, _invoiceData$data12, _invoiceData$data$pay7, _invoiceData$data13, _invoiceData$data$pay8, _invoiceData$data14, _invoiceData$data$pay9, _invoiceData$data15, _invoiceData$data16, _invoiceData$data17, _invoiceData$data18, _invoiceData$data19, _invoiceData$data20, _invoiceData$data21, _invoiceData$data$pay10, _invoiceData$data22, _invoiceData$simpleDa13, _invoiceData$data23, _invoiceData$simpleDa14, _invoiceData$data$pay11, _invoiceData$data24, _invoiceData$data$pay12, _invoiceData$data25, _invoiceData$simpleDa15, _invoiceData$simpleDa16, _invoiceData$simpleDa17, _invoiceData$simpleDa18, _invoiceData$simpleDa19, _invoiceData$data$pay13, _invoiceData$data26;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(new Date().getMonth()),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    currentMonth = _React$useState6[0],
    setCurrentMonth = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(new Date().getFullYear()),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentYear = _React$useState8[0],
    setCurrentYear = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(null),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    invoiceData = _React$useState10[0],
    setInvoiceData = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    outstanding = _React$useState12[0],
    setOutstanding = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(false),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    loadEcommerce = _React$useState14[0],
    setLoadEcommerce = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    adminStripeSecretKey = _React$useState16[0],
    setAdminStripeSecretKey = _React$useState16[1];
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault() 
      }
    }
  });
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);

  /**
   * Should load initial recently created Platform Posts
   * @returns
   */
  var loadDefault = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(month, year) {
      var body, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              month: month !== void 0 ? month : currentMonth,
              year: year !== void 0 ? year : currentYear,
              adminStripeSecretKey: true // DPT
            };
            _context.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/getplatformbillinginvoices', null, null, body);
          case 3:
            res = _context.sent;
            if (res) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context.next = 25;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 14;
              break;
            }
            (0, _SignIn.logout)();
            return _context.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context.next = 19;
              break;
            }
            setInvoiceData(null);
            return _context.abrupt("return", false);
          case 19:
            if (!(res.status == "success")) {
              _context.next = 25;
              break;
            }
            console.log(res);
            if (res !== null && res !== void 0 && res.data) {
              setInvoiceData(res.data);
            }
            if (res !== null && res !== void 0 && res.adminStripeSecretKey) {
              setAdminStripeSecretKey(res.adminStripeSecretKey);
              setLoadEcommerce(true);
            }
            if (res.outstanding) {
              setOutstanding(res.outstanding);
            }
            return _context.abrupt("return", res);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleUpdateDate = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      var _e$currentTarget;
      var m, y;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute)) {
              _context2.next = 8;
              break;
            }
            m = e.currentTarget.getAttribute('m');
            y = e.currentTarget.getAttribute('y');
            if (!(m !== void 0 && y !== void 0)) {
              _context2.next = 8;
              break;
            }
            setCurrentMonth(Number(m));
            setCurrentYear(Number(y));
            _context2.next = 8;
            return loadDefault(Number(m), Number(y));
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  var displayMonths = _react["default"].useMemo(function () {
    var useMonths = [];
    var m = new Date().getMonth();
    var y = new Date().getFullYear();
    for (var i = 0; i < 24; i++) {
      useMonths.push({
        m: m,
        y: y
      });
      if (m === 0) {
        y -= 1;
        m = 11;
      } else {
        m -= 1;
      }
    }
    return useMonths;
  }, [currentMonth, currentYear]);
  console.log(currentMonth, currentYear, invoiceData, props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Billing"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Billing_Container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].MonthsContainer, " tagContainer tinyBar"),
    style: {
      paddingBottom: '.25rem'
    }
  }, displayMonths.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "tagItem ".concat(currentMonth === m.m && currentYear === m.y ? 'tagItemSelected' : ''),
      style: {
        whiteSpace: 'nowrap'
      },
      key: i,
      m: m.m,
      y: m.y,
      onClick: handleUpdateDate
    }, _date.MONTHS[m.m], " ", m.y);
  })), loadEcommerce ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_payment.CreditCard, (0, _extends2["default"])({}, props, {
    useAdmin: adminStripeSecretKey,
    hide: loadEcommerce
  }))) : null, outstanding ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600'
    }
  }, "Currently Outstanding"), /*#__PURE__*/_react["default"].createElement("div", null, "$ ", outstanding.total ? _ecommerce.westernMoneyFormat.format(outstanding.total) : '0')) : null, (invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa = invoiceData.simpleData) === null || _invoiceData$simpleDa === void 0 ? void 0 : _invoiceData$simpleDa.total) === 0 && (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) !== 'not due' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600'
    }
  }, "No bill this month"), /*#__PURE__*/_react["default"].createElement("div", null, "Thankyou for your Business")) : (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) === 'paid' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600'
    }
  }, "Paid"), /*#__PURE__*/_react["default"].createElement("div", null, "Thankyou for your Business")) : null, /*#__PURE__*/_react["default"].createElement("div", null, invoiceData ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].ChargesExternalContainer),
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    }
  }, "Tycoon Systems Corp. charges by service"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].ChargesContainer),
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].ChargesInternalContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].DetailTableContainer)
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "".concat(_AdminModule["default"].DetailTable, " ").concat(_AdminModule["default"].DetailTableCheckered),
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Details"), /*#__PURE__*/_react["default"].createElement("th", null, "Rate"), /*#__PURE__*/_react["default"].createElement("th", null, "Qty"), /*#__PURE__*/_react["default"].createElement("th", null, "Line Total")), invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa2 = invoiceData.simpleData) !== null && _invoiceData$simpleDa2 !== void 0 && _invoiceData$simpleDa2.table ? invoiceData.simpleData.table.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].DescriptionContainer)
    }, m.description, m.customerCharged ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, " | "), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: '#27ff27',
        fontWeight: '600'
      }
    }, "$", _ecommerce.westernMoneyFormat.format(m.customerCharged)), " USD was processed this period ", ['due', 'sent'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 ? '' : 'so far')) : null), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.rate, "/", m.measureBy), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.qty.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.qty) : m.qty), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.lineTotal) : m.lineTotal));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p20",
    style: {
      justifyContent: 'right',
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: '300px',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Subtotal"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa3 = invoiceData.simpleData) !== null && _invoiceData$simpleDa3 !== void 0 && _invoiceData$simpleDa3.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.subTotal) : '0')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Tax"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa4 = invoiceData.simpleData) !== null && _invoiceData$simpleDa4 !== void 0 && _invoiceData$simpleDa4.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.tax) : '0')), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      borderTop: '1px solid black',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Current Bill Total"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa5 = invoiceData.simpleData) !== null && _invoiceData$simpleDa5 !== void 0 && _invoiceData$simpleDa5.total ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.total) : '0')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.7rem'
    }
  }, "(", (_invoiceData$simpleDa6 = invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa7 = invoiceData.simpleData) === null || _invoiceData$simpleDa7 === void 0 ? void 0 : _invoiceData$simpleDa7.currency) !== null && _invoiceData$simpleDa6 !== void 0 ? _invoiceData$simpleDa6 : "\xA0", ")"))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) === 'not due' ? 'This Bill is not due yet' : ['due', 'sent'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 ? 'This Bill is due, please see Invoice' : (invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa8 = invoiceData.simpleData) === null || _invoiceData$simpleDa8 === void 0 ? void 0 : _invoiceData$simpleDa8.total) === 0 ? 'No Bill this month' : ['paid'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 ? 'This Bill has been paid' : "\xA0"))))) : /*#__PURE__*/_react["default"].createElement("div", null, "No Billing Info for this period"), ['due', 'sent', 'paid'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 && currentMonth !== void 0 && invoiceData !== null && (invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa9 = invoiceData.simpleData) === null || _invoiceData$simpleDa9 === void 0 ? void 0 : _invoiceData$simpleDa9.total) !== 0 ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    }
  }, "Please see your Invoice for the month of ", (_ref3 = (_invoiceData$simpleDa10 = invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa11 = invoiceData.simpleData) === null || _invoiceData$simpleDa11 === void 0 ? void 0 : _invoiceData$simpleDa11.period) !== null && _invoiceData$simpleDa10 !== void 0 ? _invoiceData$simpleDa10 : "".concat(_date.MONTHS[currentMonth]).concat(currentYear)) !== null && _ref3 !== void 0 ? _ref3 : "\xA0", " below"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].InvoiceContainer),
    style: {
      marginBottom: '2rem',
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].InvoiceInternalContainer)
  }, ['paid'].indexOf(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.status) > -1 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].PaidStamp)
  }, "Paid") : null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].Entity),
    style: {
      marginBottom: '.5rem'
    }
  }, (_invoiceData$data$pay = invoiceData === null || invoiceData === void 0 || (_invoiceData$data = invoiceData.data) === null || _invoiceData$data === void 0 ? void 0 : _invoiceData$data.payeeEntity) !== null && _invoiceData$data$pay !== void 0 ? _invoiceData$data$pay : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$add = invoiceData === null || invoiceData === void 0 || (_invoiceData$data2 = invoiceData.data) === null || _invoiceData$data2 === void 0 ? void 0 : _invoiceData$data2.address) !== null && _invoiceData$data$add !== void 0 ? _invoiceData$data$add : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data3 = invoiceData.data) !== null && _invoiceData$data3 !== void 0 && _invoiceData$data3.payeeCity ? invoiceData.data.payeeCity + ', ' : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay2 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data4 = invoiceData.data) === null || _invoiceData$data4 === void 0 ? void 0 : _invoiceData$data4.payeeState) !== null && _invoiceData$data$pay2 !== void 0 ? _invoiceData$data$pay2 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay3 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data5 = invoiceData.data) === null || _invoiceData$data5 === void 0 ? void 0 : _invoiceData$data5.payeePostalCode) !== null && _invoiceData$data$pay3 !== void 0 ? _invoiceData$data$pay3 : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay4 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data6 = invoiceData.data) === null || _invoiceData$data6 === void 0 ? void 0 : _invoiceData$data6.payeeCountry) !== null && _invoiceData$data$pay4 !== void 0 ? _invoiceData$data$pay4 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay5 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data7 = invoiceData.data) === null || _invoiceData$data7 === void 0 ? void 0 : _invoiceData$data7.payeeNumber) !== null && _invoiceData$data$pay5 !== void 0 ? _invoiceData$data$pay5 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data8 = invoiceData.data) !== null && _invoiceData$data8 !== void 0 && _invoiceData$data8.payeeNumber && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data9 = invoiceData.data) !== null && _invoiceData$data9 !== void 0 && _invoiceData$data9.payeeWebsite ? '|' : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay6 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data10 = invoiceData.data) === null || _invoiceData$data10 === void 0 ? void 0 : _invoiceData$data10.payeeWebsite) !== null && _invoiceData$data$pay6 !== void 0 ? _invoiceData$data$pay6 : "\xA0"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].QuoteContainer)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].InvoiceLabel)
  }, "INVOICE"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
      justifyContent: 'right'
    }, "justifyContent", 'space-between'), "marginLeft", '25%')
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Invoice #"), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$id = invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.id) !== null && _invoiceData$id !== void 0 ? _invoiceData$id : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
      justifyContent: 'right'
    }, "justifyContent", 'space-between'), "marginLeft", '25%')
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Date"), /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa12 = invoiceData.simpleData) !== null && _invoiceData$simpleDa12 !== void 0 && _invoiceData$simpleDa12.dateIssued ? "".concat(new Date(invoiceData.simpleData.dateIssued).toLocaleDateString(), " ").concat(new Date(invoiceData.simpleData.dateIssued).toTimeString()) : "\xA0")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: '600'
    }
  }, "Bill To"), /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data11 = invoiceData.data) !== null && _invoiceData$data11 !== void 0 && _invoiceData$data11.payerEntity ? invoiceData.data.payerEntity.toUpperCase() : ''), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data12 = invoiceData.data) !== null && _invoiceData$data12 !== void 0 && _invoiceData$data12.payerCity ? invoiceData.data.payerCity + ', ' : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay7 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data13 = invoiceData.data) === null || _invoiceData$data13 === void 0 ? void 0 : _invoiceData$data13.payerState) !== null && _invoiceData$data$pay7 !== void 0 ? _invoiceData$data$pay7 : ''), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay8 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data14 = invoiceData.data) === null || _invoiceData$data14 === void 0 ? void 0 : _invoiceData$data14.payerPostalCode) !== null && _invoiceData$data$pay8 !== void 0 ? _invoiceData$data$pay8 : '')), /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay9 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data15 = invoiceData.data) === null || _invoiceData$data15 === void 0 ? void 0 : _invoiceData$data15.payerCountry) !== null && _invoiceData$data$pay9 !== void 0 ? _invoiceData$data$pay9 : ''), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data16 = invoiceData.data) !== null && _invoiceData$data16 !== void 0 && _invoiceData$data16.payerNumber ? /*#__PURE__*/_react["default"].createElement("div", null, invoiceData === null || invoiceData === void 0 || (_invoiceData$data17 = invoiceData.data) === null || _invoiceData$data17 === void 0 ? void 0 : _invoiceData$data17.payerNumber) : null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data18 = invoiceData.data) !== null && _invoiceData$data18 !== void 0 && _invoiceData$data18.payerNumber && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data19 = invoiceData.data) !== null && _invoiceData$data19 !== void 0 && _invoiceData$data19.payerWebsite ? /*#__PURE__*/_react["default"].createElement("div", null, invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data20 = invoiceData.data) !== null && _invoiceData$data20 !== void 0 && _invoiceData$data20.payerNumber && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data21 = invoiceData.data) !== null && _invoiceData$data21 !== void 0 && _invoiceData$data21.payerWebsite ? '|' : '') : null, /*#__PURE__*/_react["default"].createElement("div", null, (_invoiceData$data$pay10 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data22 = invoiceData.data) === null || _invoiceData$data22 === void 0 ? void 0 : _invoiceData$data22.payerWebsite) !== null && _invoiceData$data$pay10 !== void 0 ? _invoiceData$data$pay10 : "\xA0"))), invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa13 = invoiceData.simpleData) !== null && _invoiceData$simpleDa13 !== void 0 && _invoiceData$simpleDa13.total && invoiceData !== null && invoiceData !== void 0 && (_invoiceData$data23 = invoiceData.data) !== null && _invoiceData$data23 !== void 0 && _invoiceData$data23.currency ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.25rem'
    }
  }, "TOTAL AMOUNT DUE IN ", invoiceData.data.currency), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '2rem',
      textAlign: 'right',
      fontWeight: '600',
      background: 'blue',
      color: 'white'
    }
  }, "$ ", _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.total))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].DetailTableContainer)
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "".concat(_AdminModule["default"].DetailTable)
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Details"), /*#__PURE__*/_react["default"].createElement("th", null, "Rate"), /*#__PURE__*/_react["default"].createElement("th", null, "Qty"), /*#__PURE__*/_react["default"].createElement("th", null, "Line Total")), invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa14 = invoiceData.simpleData) !== null && _invoiceData$simpleDa14 !== void 0 && _invoiceData$simpleDa14.table ? invoiceData.simpleData.table.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].DescriptionContainer)
    }, m.description, " ", m.customerCharged ? "| $".concat(_ecommerce.westernMoneyFormat.format(m.customerCharged), " USD was processed this period") : ''), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.rate, "/", m.measureBy), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.qty.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.qty) : m.qty), /*#__PURE__*/_react["default"].createElement("td", {
      className: "".concat(_AdminModule["default"].TableNumber)
    }, m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(m.lineTotal) : m.lineTotal));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p20",
    style: {
      justifyContent: 'space-between',
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600",
    style: {
      fontSize: '.8rem'
    }
  }, "Payment Method"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem'
    }
  }, (_invoiceData$data$pay11 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data24 = invoiceData.data) === null || _invoiceData$data24 === void 0 ? void 0 : _invoiceData$data24.paymentMethod) !== null && _invoiceData$data$pay11 !== void 0 ? _invoiceData$data$pay11 : "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.75rem',
      marginTop: '1rem'
    }
  }, (_invoiceData$data$pay12 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data25 = invoiceData.data) === null || _invoiceData$data25 === void 0 ? void 0 : _invoiceData$data25.payeeNote) !== null && _invoiceData$data$pay12 !== void 0 ? _invoiceData$data$pay12 : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Subtotal"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa15 = invoiceData.simpleData) !== null && _invoiceData$simpleDa15 !== void 0 && _invoiceData$simpleDa15.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.subTotal) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Tax"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa16 = invoiceData.simpleData) !== null && _invoiceData$simpleDa16 !== void 0 && _invoiceData$simpleDa16.subTotal ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.tax) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex",
    style: {
      borderTop: '1px solid black',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Total Due"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w600"
  }, "$ ", invoiceData !== null && invoiceData !== void 0 && (_invoiceData$simpleDa17 = invoiceData.simpleData) !== null && _invoiceData$simpleDa17 !== void 0 && _invoiceData$simpleDa17.total ? _ecommerce.westernMoneyFormat.format(invoiceData.simpleData.total) : "\xA0")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '.7rem'
    }
  }, "(", (_invoiceData$simpleDa18 = invoiceData === null || invoiceData === void 0 || (_invoiceData$simpleDa19 = invoiceData.simpleData) === null || _invoiceData$simpleDa19 === void 0 ? void 0 : _invoiceData$simpleDa19.currency) !== null && _invoiceData$simpleDa18 !== void 0 ? _invoiceData$simpleDa18 : "\xA0", ")"))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].millerText),
    style: {
      textAlign: 'right',
      fontStyle: 'italic'
    }
  }, (_invoiceData$data$pay13 = invoiceData === null || invoiceData === void 0 || (_invoiceData$data26 = invoiceData.data) === null || _invoiceData$data26 === void 0 ? void 0 : _invoiceData$data26.paymentThankyou) !== null && _invoiceData$data$pay13 !== void 0 ? _invoiceData$data$pay13 : "\xA0"))))) : null)));
};
var _default = exports["default"] = Module;