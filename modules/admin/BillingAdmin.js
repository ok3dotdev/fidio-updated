var _h, _div, _div2, _tr, _span, _div3, _div4, _div5, _div6, _div7, _div8, _div9, _tr2, _div10, _div11, _div12, _div13;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Tooltip from '@mui/material/Tooltip';
import AdminStyles from './Admin.module.scss';
import { logout } from '../utility/onboarding/SignIn';
import { fetchPost } from '../utility/fetch';
import { MONTHS } from '../utility/utility/date';
import { westernMoneyFormat } from '../utility/ecommerce';
import { throttleFunctionCall } from '../util';
import { CreditCard } from '../payment';
const moduleName = 'BillingAdmin';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
  const [invoiceData, setInvoiceData] = React.useState(null);
  const [outstanding, setOutstanding] = React.useState(null);
  const [loadEcommerce, setLoadEcommerce] = React.useState(false);
  const [adminStripeSecretKey, setAdminStripeSecretKey] = React.useState(null);
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, e => {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault() 
      }
    }
  });
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);

  /**
   * Should load initial recently created Platform Posts
   * @returns
   */
  const loadDefault = async (month, year) => {
    const body = {
      domainKey: props.domainKey,
      hash: props._loggedIn.hash,
      identifier: props._loggedIn.identifier,
      month: month !== void 0 ? month : currentMonth,
      year: year !== void 0 ? year : currentYear,
      adminStripeSecretKey: true // DPT
    };
    let res = await fetchPost(props.apiUrl + '/a/getplatformbillinginvoices', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        setInvoiceData(null);
        return false;
      } else if (res.status == "success") {
        console.log(res);
        if (res?.data) {
          setInvoiceData(res.data);
        }
        if (res?.adminStripeSecretKey) {
          setAdminStripeSecretKey(res.adminStripeSecretKey);
          setLoadEcommerce(true);
        }
        if (res.outstanding) {
          setOutstanding(res.outstanding);
        }
        return res;
      }
    }
  };
  const handleUpdateDate = React.useCallback(async e => {
    if (e?.currentTarget?.getAttribute) {
      const m = e.currentTarget.getAttribute('m');
      const y = e.currentTarget.getAttribute('y');
      if (m !== void 0 && y !== void 0) {
        setCurrentMonth(Number(m));
        setCurrentYear(Number(y));
        await loadDefault(Number(m), Number(y));
      }
    }
  });
  const displayMonths = React.useMemo(() => {
    const useMonths = [];
    let m = new Date().getMonth();
    let y = new Date().getFullYear();
    for (let i = 0; i < 24; i++) {
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
  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${moduleName}_Container`
  }, void 0, _h || (_h = /*#__PURE__*/_jsx("h3", {}, void 0, "Billing")), /*#__PURE__*/_jsx("div", {
    className: `Billing_Container`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.MonthsContainer} tagContainer tinyBar`,
    style: {
      paddingBottom: '.25rem'
    }
  }, void 0, displayMonths.map((m, i) => /*#__PURE__*/_jsx("button", {
    className: `tagItem ${currentMonth === m.m && currentYear === m.y ? 'tagItemSelected' : ''}`,
    style: {
      whiteSpace: 'nowrap'
    },
    m: m.m,
    y: m.y,
    onClick: handleUpdateDate
  }, i, MONTHS[m.m], " ", m.y))), loadEcommerce ? /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, <CreditCard {...props} useAdmin={adminStripeSecretKey} hide={loadEcommerce} />) : null, outstanding ? /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600'
    }
  }, void 0, "Currently Outstanding"), /*#__PURE__*/_jsx("div", {}, void 0, "$ ", outstanding.total ? westernMoneyFormat.format(outstanding.total) : '0')) : null, invoiceData?.simpleData?.total === 0 && invoiceData?.status !== 'not due' ? /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600'
    }
  }, void 0, "No bill this month"), _div || (_div = /*#__PURE__*/_jsx("div", {}, void 0, "Thankyou for your Business"))) : invoiceData?.status === 'paid' ? /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '1rem',
      fontWeight: '600'
    }
  }, void 0, "Paid"), _div2 || (_div2 = /*#__PURE__*/_jsx("div", {}, void 0, "Thankyou for your Business"))) : null, /*#__PURE__*/_jsx("div", {}, void 0, invoiceData ? /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.ChargesExternalContainer}`,
    style: {
      marginTop: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '600',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    }
  }, void 0, "Tycoon Systems Corp. charges by service"), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.ChargesContainer}`,
    style: {
      marginBottom: '2rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.ChargesInternalContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.DetailTableContainer}`
  }, void 0, /*#__PURE__*/_jsx("table", {
    className: `${AdminStyles.DetailTable} ${AdminStyles.DetailTableCheckered}`,
    style: {
      width: '100%'
    }
  }, void 0, _tr || (_tr = /*#__PURE__*/_jsx("tr", {}, void 0, /*#__PURE__*/_jsx("th", {}, void 0, "Details"), /*#__PURE__*/_jsx("th", {}, void 0, "Rate"), /*#__PURE__*/_jsx("th", {}, void 0, "Qty"), /*#__PURE__*/_jsx("th", {}, void 0, "Line Total"))), invoiceData?.simpleData?.table ? invoiceData.simpleData.table.map((m, i) => /*#__PURE__*/_jsx("tr", {}, i, /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.DescriptionContainer}`
  }, void 0, m.description, m.customerCharged ? /*#__PURE__*/_jsx(React.Fragment, {}, void 0, _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, " | ")), /*#__PURE__*/_jsx("span", {}, void 0, /*#__PURE__*/_jsx("span", {
    style: {
      color: '#27ff27',
      fontWeight: '600'
    }
  }, void 0, "$", westernMoneyFormat.format(m.customerCharged)), " USD was processed this period ", ['due', 'sent'].indexOf(invoiceData?.status) > -1 ? '' : 'so far')) : null), /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.TableNumber}`
  }, void 0, m.rate, "/", m.measureBy), /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.TableNumber}`
  }, void 0, m.qty.toFixed ? new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(m.qty) : m.qty), /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.TableNumber}`
  }, void 0, m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(m.lineTotal) : m.lineTotal))) : null)), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p20",
    style: {
      justifyContent: 'right',
      marginTop: '1rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '300px',
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, void 0, _div3 || (_div3 = /*#__PURE__*/_jsx("div", {}, void 0, "Subtotal")), /*#__PURE__*/_jsx("div", {
    className: "w600"
  }, void 0, "$ ", invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.subTotal) : '0')), /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, void 0, _div4 || (_div4 = /*#__PURE__*/_jsx("div", {}, void 0, "Tax")), /*#__PURE__*/_jsx("div", {
    className: "w600"
  }, void 0, "$ ", invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.tax) : '0')), _div5 || (_div5 = /*#__PURE__*/_jsx("div", {}, void 0, "\xA0")), /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      borderTop: '1px solid black',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, void 0, _div6 || (_div6 = /*#__PURE__*/_jsx("div", {}, void 0, "Current Bill Total")), /*#__PURE__*/_jsx("div", {
    className: "w600"
  }, void 0, "$ ", invoiceData?.simpleData?.total ? westernMoneyFormat.format(invoiceData.simpleData.total) : '0')), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.7rem'
    }
  }, void 0, "(", invoiceData?.simpleData?.currency ?? '\u00A0', ")"))), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      marginTop: '1rem'
    }
  }, void 0, invoiceData?.status === 'not due' ? 'This Bill is not due yet' : ['due', 'sent'].indexOf(invoiceData?.status) > -1 ? 'This Bill is due, please see Invoice' : invoiceData?.simpleData?.total === 0 ? 'No Bill this month' : ['paid'].indexOf(invoiceData?.status) > -1 ? 'This Bill has been paid' : '\u00A0'))))) : _div7 || (_div7 = /*#__PURE__*/_jsx("div", {}, void 0, "No Billing Info for this period")), ['due', 'sent', 'paid'].indexOf(invoiceData?.status) > -1 && currentMonth !== void 0 && invoiceData !== null && invoiceData?.simpleData?.total !== 0 ? /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '600',
      fontSize: '1.5rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    }
  }, void 0, "Please see your Invoice for the month of ", invoiceData?.simpleData?.period ?? `${MONTHS[currentMonth]}${currentYear}` ?? '\u00A0', " below"), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.InvoiceContainer}`,
    style: {
      marginBottom: '2rem',
      position: 'relative'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.InvoiceInternalContainer}`
  }, void 0, ['paid'].indexOf(invoiceData?.status) > -1 ? /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.PaidStamp}`
  }, void 0, "Paid") : null, /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.Entity}`,
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, invoiceData?.data?.payeeEntity ?? '\u00A0'), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.address ?? '\u00A0'), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeeCity ? invoiceData.data.payeeCity + ', ' : '\u00A0'), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeeState ?? '\u00A0'), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeePostalCode ?? '\u00A0')), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeeCountry ?? '\u00A0'), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeeNumber ?? '\u00A0'), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeeNumber && invoiceData?.data?.payeeWebsite ? '|' : '\u00A0'), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payeeWebsite ?? '\u00A0'))), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.QuoteContainer}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.InvoiceLabel}`
  }, void 0, "INVOICE"), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'right',
      justifyContent: 'space-between',
      marginLeft: '25%'
    }
  }, void 0, _div8 || (_div8 = /*#__PURE__*/_jsx("div", {}, void 0, "Invoice #")), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.id ?? '\u00A0')), /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'right',
      justifyContent: 'space-between',
      marginLeft: '25%'
    }
  }, void 0, _div9 || (_div9 = /*#__PURE__*/_jsx("div", {}, void 0, "Date")), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.simpleData?.dateIssued ? `${new Date(invoiceData.simpleData.dateIssued).toLocaleDateString()} ${new Date(invoiceData.simpleData.dateIssued).toTimeString()}` : '\u00A0')))), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2",
    style: {
      justifyContent: 'space-between'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      fontWeight: '600'
    }
  }, void 0, "Bill To"), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerEntity ? invoiceData.data.payerEntity.toUpperCase() : ''), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerCity ? invoiceData.data.payerCity + ', ' : ''), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerState ?? ''), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerPostalCode ?? '')), /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerCountry ?? ''), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, invoiceData?.data?.payerNumber ? /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerNumber) : null, invoiceData?.data?.payerNumber && invoiceData?.data?.payerWebsite ? /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerNumber && invoiceData?.data?.payerWebsite ? '|' : '') : null, /*#__PURE__*/_jsx("div", {}, void 0, invoiceData?.data?.payerWebsite ?? '\u00A0'))), invoiceData?.simpleData?.total && invoiceData?.data?.currency ? /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.25rem'
    }
  }, void 0, "TOTAL AMOUNT DUE IN ", invoiceData.data.currency), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '2rem',
      textAlign: 'right',
      fontWeight: '600',
      background: 'blue',
      color: 'white'
    }
  }, void 0, "$ ", westernMoneyFormat.format(invoiceData.simpleData.total))) : null), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.DetailTableContainer}`
  }, void 0, /*#__PURE__*/_jsx("table", {
    className: `${AdminStyles.DetailTable}`
  }, void 0, _tr2 || (_tr2 = /*#__PURE__*/_jsx("tr", {}, void 0, /*#__PURE__*/_jsx("th", {}, void 0, "Details"), /*#__PURE__*/_jsx("th", {}, void 0, "Rate"), /*#__PURE__*/_jsx("th", {}, void 0, "Qty"), /*#__PURE__*/_jsx("th", {}, void 0, "Line Total"))), invoiceData?.simpleData?.table ? invoiceData.simpleData.table.map((m, i) => /*#__PURE__*/_jsx("tr", {}, i, /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.DescriptionContainer}`
  }, void 0, m.description, " ", m.customerCharged ? `| $${westernMoneyFormat.format(m.customerCharged)} USD was processed this period` : ''), /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.TableNumber}`
  }, void 0, m.rate, "/", m.measureBy), /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.TableNumber}`
  }, void 0, m.qty.toFixed ? new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(m.qty) : m.qty), /*#__PURE__*/_jsx("td", {
    className: `${AdminStyles.TableNumber}`
  }, void 0, m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(m.lineTotal) : m.lineTotal))) : null)), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p20",
    style: {
      justifyContent: 'space-between',
      marginTop: '1rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "w600",
    style: {
      fontSize: '.8rem'
    }
  }, void 0, "Payment Method"), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.75rem'
    }
  }, void 0, invoiceData?.data?.paymentMethod ?? '\u00A0'), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.75rem',
      marginTop: '1rem'
    }
  }, void 0, invoiceData?.data?.payeeNote ?? '\u00A0')), /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, void 0, _div10 || (_div10 = /*#__PURE__*/_jsx("div", {}, void 0, "Subtotal")), /*#__PURE__*/_jsx("div", {
    className: "w600"
  }, void 0, "$ ", invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.subTotal) : '\u00A0')), /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, void 0, _div11 || (_div11 = /*#__PURE__*/_jsx("div", {}, void 0, "Tax")), /*#__PURE__*/_jsx("div", {
    className: "w600"
  }, void 0, "$ ", invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.tax) : '\u00A0')), _div12 || (_div12 = /*#__PURE__*/_jsx("div", {}, void 0, "\xA0")), /*#__PURE__*/_jsx("div", {
    className: "flex",
    style: {
      borderTop: '1px solid black',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, void 0, _div13 || (_div13 = /*#__PURE__*/_jsx("div", {}, void 0, "Total Due")), /*#__PURE__*/_jsx("div", {
    className: "w600"
  }, void 0, "$ ", invoiceData?.simpleData?.total ? westernMoneyFormat.format(invoiceData.simpleData.total) : '\u00A0')), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '.7rem'
    }
  }, void 0, "(", invoiceData?.simpleData?.currency ?? '\u00A0', ")"))), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.millerText}`,
    style: {
      textAlign: 'right',
      fontStyle: 'italic'
    }
  }, void 0, invoiceData?.data?.paymentThankyou ?? '\u00A0'))))) : null)));
};
export default Module;