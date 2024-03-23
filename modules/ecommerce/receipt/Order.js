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
  return <div>
            {m ? (() => {
      let useSymbol;
      const card = m?.paymentmethoddetails?.card ?? null;
      const cardBilling = m?.paymentmethoddetails?.billing_details ?? null;
      return <div className='short_bottom_border' style={{
        paddingBottom: '1rem'
      }}>
                            <div>
                                <div className='flex' style={{
            justifyContent: 'space-between'
          }}>
                                    <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>Order&nbsp;
                                        <span style={{
                background: '#222222',
                borderRadius: '1rem',
                padding: '.0rem .75rem'
              }} selectValue={`${m?.id ?? ''}`} onClick={selectThisText}>#{m?.id ?? ''}</span>
                                        &nbsp;-&nbsp;
                                        <span selectValue={`${m?.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? `${new Date(Number(m.creation)).toDateString()}` : ''}`} onClick={selectThisText}>{m?.creation && !isNaN(Number(m.creation)) && new Date(Number(m.creation)) ? `${new Date(Number(m.creation)).toDateString()}` : ''}</span>
                                        {props.hideView ? null : <React.Fragment>
                                                    &nbsp;-&nbsp;
                                                    <Link href={`${props.devLocal ? `${props.devAddress}/r?o=${m?.id}` : `https://${props.domainUrl}/r?o=${m?.id}`}`} style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>View 
                                                        <div className={`material-icons`} style={{
                    fontSize: '1rem',
                    marginLeft: '.25rem'
                  }}>receipt</div>
                                                    </Link>
                                                </React.Fragment>}
                                    </div>
                                    <div style={{
              fontSize: '.7rem'
            }}>{creation}</div>
                                </div>
                                <div className='flex gap-p3' style={{
            flexDirection: 'column',
            marginTop: '.3rem',
            marginBottom: '.3rem'
          }}>
                                    {m?.cart?.map ? m.cart.map((n, j) => {
              const currentStyle = resolveCurrentStyle(n.product, n.style);
              const currentOption = resolveCurrentOption(currentStyle, n.option);
              const priceObject = resolveRegionBasedPrice(props, currentStyle);
              const symbol = priceObject?.symbol ?? '';
              useSymbol = symbol;
              return <div className='gap-p2 Ecommerce_Item_Container' key={j} i={j}>
                                                        <div style={{
                  display: 'flex',
                  gap: '.5rem'
                }}>
                                                            <div className={`Ecommerce_Item_Image_Container`} style={{
                    backgroundImage: resolveOrderImg(n) ? `url(${resolveOrderImg(n)})` : null
                  }}>
                                                                <img src={'img/default/greythumb_product.jpg'} className='Product_img' style={{
                      width: '82.5px',
                      maxHeight: '82.5px',
                      opacity: resolveOrderImg(n) ? 0 : 1
                    }} />
                                                            </div>
                                                            <div style={{
                    width: '100%'
                  }}>
                                                                <div className='flex gap-p2 Ecommerce_Cart_Title_Main_Container'>
                                                                    <div className='Ecommerce_Title'>{n?.product?.name ?? ''}</div>
                                                                    <div className={`Ecommerce_Cart_Price_Container ${props?.expanded ? 'Ecommerce_Price_Expanded_Container' : null}`}>
                                                                        <div className='Ecommerce_Price'>{symbol}{resolveMoneyFormat(n.price)} {currency.toUpperCase()}</div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex' style={{
                      justifyContent: 'space-between'
                    }}>
                                                                    <div>
                                                                        <span className='flex' style={{
                          fontSize: '.7rem',
                          color: 'grey'
                        }}>
                                                                            <div>{currentStyle?.style ?? ''}</div>
                                                                            {_span || (_span = <span>&nbsp;~&nbsp;</span>)}
                                                                            <div>{currentOption?.option ?? ''}</div>
                                                                        </span>
                                                                        <div className='Ecommerce_Cart_Quantity_Container'>
                                                                            <div style={{
                            display: 'flex',
                            alignSelf: 'center'
                          }}>
                                                                                <Inventory sx={{
                              width: '.85rem',
                              height: '.9rem',
                              marginRight: '.25rem'
                            }}></Inventory>
                                                                            </div>
                                                                            <div>{Object.prototype.hasOwnProperty.call(n, 'quantity') ? n.quantity : ''}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={`Ecommerce_Cart_Side_Meta_Container ${props?.expanded ? 'Ecommerce_Price_Expanded_Container' : null}`}>
                                                                        <div style={{
                          color: 'grey',
                          fontSize: '.7rem',
                          height: '17px',
                          textAlign: 'right'
                        }}>Subtotal:</div>
                                                                        <div className='Ecommerce_Price'>{symbol}{resolveMoneyFormat(n.quantity * n.price)} {currency.toUpperCase()}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>;
            }) : null}
                                </div>
                                <div className='flex Ecommerce_Price' style={{
            justifyContent: 'space-between'
          }}>
                                    <div style={{
              lineHeight: '1.4rem'
            }}>Total:&nbsp;</div>
                                    <div style={{
              fontSize: '1.25rem'
            }}>{useSymbol}{westernMoneyFormat.format(m?.totals?.total) ?? ''} {currency.toUpperCase()}</div>
                                </div>
                                <div>
                                    {m.paymentfulfilled ? <div>
                                                {m?.meta?.charged && m?.currency ? <div className={receiptPageStyles.pair} style={{
                fontSize: '.7rem'
              }}>
                                                            <div>Paid {useSymbol}{resolveMoneyFormat(m.amountcaptured)} {m.currency.toUpperCase()} on {new Date(m.meta.charged).toLocaleDateString()} {new Date(m.meta.charged).toTimeString()}</div>
                                                            <div>{card ? <div style={{
                    display: 'flex',
                    gap: '.25rem'
                  }}>
                                                                        <div>{card.brand ?? ''}</div>
                                                                        <div>{card.last4 ?? ''}</div>
                                                                        <div>{cardBilling?.name ? cardBilling.name : ''}</div>
                                                                    </div> : null}</div>
                                                        </div> : ''}
                                            </div> : <div>
                                                <div style={{
                fontSize: '.75rem'
              }}>Payment Unfulfilled</div>
                                            </div>}
                                </div>
                            </div>
                        </div>;
    })() : null}
        </div>;
};
export default Module;