var _h, _div, _div2, _tr, _span, _div3, _div4, _div5, _div6, _div7, _div8, _div9, _tr2, _div10, _div11, _div12, _div13;
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
  return <div className={`${props.className} ${moduleName}_Container`}>
            {_h || (_h = <h3>Billing</h3>)}
            <div className={`Billing_Container`}>
                <div className={`${AdminStyles.MonthsContainer} tagContainer tinyBar`} style={{
        paddingBottom: '.25rem'
      }}>
                    {displayMonths.map((m, i) => <button className={`tagItem ${currentMonth === m.m && currentYear === m.y ? 'tagItemSelected' : ''}`} style={{
          whiteSpace: 'nowrap'
        }} key={i} m={m.m} y={m.y} onClick={handleUpdateDate}>{MONTHS[m.m]} {m.y}</button>)}
                </div>
                {loadEcommerce ? <div style={{
        marginBottom: '.5rem'
      }}>
                            <CreditCard {...props} useAdmin={adminStripeSecretKey} hide={loadEcommerce} />
                        </div> : null}
                {outstanding ? <div style={{
        marginBottom: '.5rem'
      }}>
                            <div style={{
          fontSize: '1rem',
          fontWeight: '600'
        }}>Currently Outstanding</div>
                            <div>$ {outstanding.total ? westernMoneyFormat.format(outstanding.total) : '0'}</div>
                        </div> : null}
                {invoiceData?.simpleData?.total === 0 && invoiceData?.status !== 'not due' ? <div style={{
        marginBottom: '.5rem'
      }}>
                            <div style={{
          fontSize: '1rem',
          fontWeight: '600'
        }}>No bill this month</div>
                            {_div || (_div = <div>Thankyou for your Business</div>)}
                        </div> : invoiceData?.status === 'paid' ? <div style={{
        marginBottom: '.5rem'
      }}>
                                <div style={{
          fontSize: '1rem',
          fontWeight: '600'
        }}>Paid</div>
                                {_div2 || (_div2 = <div>Thankyou for your Business</div>)}
                            </div> : null}
                <div>
                    {invoiceData ? <div className={`${AdminStyles.ChargesExternalContainer}`} style={{
          marginTop: '.5rem'
        }}>
                                <div style={{
            fontWeight: '600',
            fontSize: '1.5rem',
            marginBottom: '2rem',
            marginTop: '1rem'
          }}>Tycoon Systems Corp. charges by service</div>
                                <div className={`${AdminStyles.ChargesContainer}`} style={{
            marginBottom: '2rem'
          }}>
                                    <div className={`${AdminStyles.ChargesInternalContainer}`}>
                                        <div className={`${AdminStyles.DetailTableContainer}`}>
                                            <table className={`${AdminStyles.DetailTable} ${AdminStyles.DetailTableCheckered}`} style={{
                  width: '100%'
                }}>
                                                {_tr || (_tr = <tr>
                                                    <th>Details</th>
                                                    <th>Rate</th>
                                                    <th>Qty</th>
                                                    <th>Line Total</th>
                                                </tr>)}
                                                {invoiceData?.simpleData?.table ? invoiceData.simpleData.table.map((m, i) => <tr key={i}>
                                                                <td className={`${AdminStyles.DescriptionContainer}`}>{m.description}
                                                                {m.customerCharged ? <React.Fragment>
                                                                            {_span || (_span = <span> | </span>)}
                                                                            <span><span style={{
                            color: '#27ff27',
                            fontWeight: '600'
                          }}>${westernMoneyFormat.format(m.customerCharged)}</span> USD was processed this period {['due', 'sent'].indexOf(invoiceData?.status) > -1 ? '' : 'so far'}</span>
                                                                        </React.Fragment> : null}</td>
                                                                <td className={`${AdminStyles.TableNumber}`}>{m.rate}/{m.measureBy}</td>
                                                                <td className={`${AdminStyles.TableNumber}`}>{m.qty.toFixed ? new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }).format(m.qty) : m.qty}</td>
                                                                <td className={`${AdminStyles.TableNumber}`}>{m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }).format(m.lineTotal) : m.lineTotal}</td>
                                                            </tr>) : null}
                                            </table>
                                        </div>
                                        <div className='flex gap-p20' style={{
                justifyContent: 'right',
                marginTop: '1rem'
              }}>
                                            <div style={{
                  maxWidth: '300px',
                  width: '100%'
                }}>
                                                <div className='flex' style={{
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                                                    {_div3 || (_div3 = <div>Subtotal</div>)}
                                                    <div className='w600'>$ {invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.subTotal) : '0'}</div>
                                                </div>
                                                <div className='flex' style={{
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                                                    {_div4 || (_div4 = <div>Tax</div>)}
                                                    <div className='w600'>$ {invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.tax) : '0'}</div>
                                                </div>
                                                {_div5 || (_div5 = <div>&nbsp;</div>)}
                                                <div className='flex' style={{
                    borderTop: '1px solid black',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                                                    {_div6 || (_div6 = <div>Current Bill Total</div>)}
                                                    <div className='w600'>$ {invoiceData?.simpleData?.total ? westernMoneyFormat.format(invoiceData.simpleData.total) : '0'}</div>
                                                </div>
                                                <div style={{
                    fontSize: '.7rem'
                  }}>({invoiceData?.simpleData?.currency ?? '\u00A0'})</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{
                  marginTop: '1rem'
                }}>{invoiceData?.status === 'not due' ? 'This Bill is not due yet' : ['due', 'sent'].indexOf(invoiceData?.status) > -1 ? 'This Bill is due, please see Invoice' : invoiceData?.simpleData?.total === 0 ? 'No Bill this month' : ['paid'].indexOf(invoiceData?.status) > -1 ? 'This Bill has been paid' : '\u00A0'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> : _div7 || (_div7 = <div>No Billing Info for this period</div>)}
                    {['due', 'sent', 'paid'].indexOf(invoiceData?.status) > -1 && currentMonth !== void 0 && invoiceData !== null && invoiceData?.simpleData?.total !== 0 ? <div>
                                <div style={{
            fontWeight: '600',
            fontSize: '1.5rem',
            marginBottom: '2rem',
            marginTop: '1rem'
          }}>Please see your Invoice for the month of {invoiceData?.simpleData?.period ?? `${MONTHS[currentMonth]}${currentYear}` ?? '\u00A0'} below</div>
                                <div className={`${AdminStyles.InvoiceContainer}`} style={{
            marginBottom: '2rem',
            position: 'relative'
          }}>
                                    <div className={`${AdminStyles.InvoiceInternalContainer}`}>
                                        {['paid'].indexOf(invoiceData?.status) > -1 ? <div className={`${AdminStyles.PaidStamp}`}>Paid</div> : null}
                                        <div>
                                            <div className={`${AdminStyles.Entity}`} style={{
                  marginBottom: '.5rem'
                }}>{invoiceData?.data?.payeeEntity ?? '\u00A0'}</div>
                                            <div>{invoiceData?.data?.address ?? '\u00A0'}</div>
                                            <div className='flex gap-p2'>
                                                <div>{invoiceData?.data?.payeeCity ? invoiceData.data.payeeCity + ', ' : '\u00A0'}</div>
                                                <div>{invoiceData?.data?.payeeState ?? '\u00A0'}</div>
                                                <div>{invoiceData?.data?.payeePostalCode ?? '\u00A0'}</div>
                                            </div>
                                            <div>{invoiceData?.data?.payeeCountry ?? '\u00A0'}</div>
                                            <div className='flex gap-p2'>
                                                <div>{invoiceData?.data?.payeeNumber ?? '\u00A0'}</div>
                                                <div>{invoiceData?.data?.payeeNumber && invoiceData?.data?.payeeWebsite ? '|' : '\u00A0'}</div>
                                                <div>{invoiceData?.data?.payeeWebsite ?? '\u00A0'}</div>
                                            </div>
                                        </div>
                                        <div className={`${AdminStyles.QuoteContainer}`}>
                                            <div className={`${AdminStyles.InvoiceLabel}`}>INVOICE</div>
                                            <div>
                                                <div className='flex' style={{
                    justifyContent: 'right',
                    justifyContent: 'space-between',
                    marginLeft: '25%'
                  }}>
                                                    {_div8 || (_div8 = <div>Invoice #</div>)}
                                                    <div>{invoiceData?.id ?? '\u00A0'}</div>
                                                </div>
                                                <div className='flex' style={{
                    justifyContent: 'right',
                    justifyContent: 'space-between',
                    marginLeft: '25%'
                  }}>
                                                    {_div9 || (_div9 = <div>Date</div>)}
                                                    <div>{invoiceData?.simpleData?.dateIssued ? `${new Date(invoiceData.simpleData.dateIssued).toLocaleDateString()} ${new Date(invoiceData.simpleData.dateIssued).toTimeString()}` : '\u00A0'}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-p2' style={{
                justifyContent: 'space-between'
              }}>
                                            <div>
                                                <div style={{
                    fontWeight: '600'
                  }}>Bill To</div>
                                                <div>{invoiceData?.data?.payerEntity ? invoiceData.data.payerEntity.toUpperCase() : ''}</div>
                                                <div className='flex gap-p2'>
                                                    <div>{invoiceData?.data?.payerCity ? invoiceData.data.payerCity + ', ' : ''}</div>
                                                    <div>{invoiceData?.data?.payerState ?? ''}</div>
                                                    <div>{invoiceData?.data?.payerPostalCode ?? ''}</div>
                                                </div>
                                                <div>{invoiceData?.data?.payerCountry ?? ''}</div>
                                                <div className='flex gap-p2'>
                                                    {invoiceData?.data?.payerNumber ? <div>{invoiceData?.data?.payerNumber}</div> : null}
                                                    {invoiceData?.data?.payerNumber && invoiceData?.data?.payerWebsite ? <div>{invoiceData?.data?.payerNumber && invoiceData?.data?.payerWebsite ? '|' : ''}</div> : null}
                                                    <div>{invoiceData?.data?.payerWebsite ?? '\u00A0'}</div>
                                                </div>
                                            </div>
                                            {invoiceData?.simpleData?.total && invoiceData?.data?.currency ? <div>
                                                        <div style={{
                    marginBottom: '.25rem'
                  }}>TOTAL AMOUNT DUE IN {invoiceData.data.currency}</div>
                                                        <div style={{
                    fontSize: '2rem',
                    textAlign: 'right',
                    fontWeight: '600',
                    background: 'blue',
                    color: 'white'
                  }}>$ {westernMoneyFormat.format(invoiceData.simpleData.total)}</div>
                                                    </div> : null}
                                        </div>
                                        <div className={`${AdminStyles.DetailTableContainer}`}>
                                            <table className={`${AdminStyles.DetailTable}`}>
                                                {_tr2 || (_tr2 = <tr>
                                                    <th>Details</th>
                                                    <th>Rate</th>
                                                    <th>Qty</th>
                                                    <th>Line Total</th>
                                                </tr>)}
                                                {invoiceData?.simpleData?.table ? invoiceData.simpleData.table.map((m, i) => <tr key={i}>
                                                                <td className={`${AdminStyles.DescriptionContainer}`}>{m.description} {m.customerCharged ? `| $${westernMoneyFormat.format(m.customerCharged)} USD was processed this period` : ''}</td>
                                                                <td className={`${AdminStyles.TableNumber}`}>{m.rate}/{m.measureBy}</td>
                                                                <td className={`${AdminStyles.TableNumber}`}>{m.qty.toFixed ? new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }).format(m.qty) : m.qty}</td>
                                                                <td className={`${AdminStyles.TableNumber}`}>{m.lineTotal.toFixed ? new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }).format(m.lineTotal) : m.lineTotal}</td>
                                                            </tr>) : null}
                                            </table>
                                        </div>
                                        <div className='flex gap-p20' style={{
                justifyContent: 'space-between',
                marginTop: '1rem'
              }}>
                                            <div style={{
                  width: '100%'
                }}>
                                                <div className='w600' style={{
                    fontSize: '.8rem'
                  }}>Payment Method</div>
                                                <div style={{
                    fontSize: '.75rem'
                  }}>{invoiceData?.data?.paymentMethod ?? '\u00A0'}</div>
                                                <div style={{
                    fontSize: '.75rem',
                    marginTop: '1rem'
                  }}>{invoiceData?.data?.payeeNote ?? '\u00A0'}</div>
                                                
                                            </div>
                                            <div style={{
                  width: '100%'
                }}>
                                                <div className='flex' style={{
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                                                    {_div10 || (_div10 = <div>Subtotal</div>)}
                                                    <div className='w600'>$ {invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.subTotal) : '\u00A0'}</div>
                                                </div>
                                                <div className='flex' style={{
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                                                    {_div11 || (_div11 = <div>Tax</div>)}
                                                    <div className='w600'>$ {invoiceData?.simpleData?.subTotal ? westernMoneyFormat.format(invoiceData.simpleData.tax) : '\u00A0'}</div>
                                                </div>
                                                {_div12 || (_div12 = <div>&nbsp;</div>)}
                                                <div className='flex' style={{
                    borderTop: '1px solid black',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                                                    {_div13 || (_div13 = <div>Total Due</div>)}
                                                    <div className='w600'>$ {invoiceData?.simpleData?.total ? westernMoneyFormat.format(invoiceData.simpleData.total) : '\u00A0'}</div>
                                                </div>
                                                <div style={{
                    fontSize: '.7rem'
                  }}>({invoiceData?.simpleData?.currency ?? '\u00A0'})</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={`${AdminStyles.millerText}`} style={{
                  textAlign: 'right',
                  fontStyle: 'italic'
                }}>{invoiceData?.data?.paymentThankyou ?? '\u00A0'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}
                </div>
            </div>
        </div>;
};
export default Module;