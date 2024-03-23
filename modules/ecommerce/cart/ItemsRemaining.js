var _span;
import React from 'react';
import { resolveCurrentStyle, resolveCurrentOption, resolveMoneyFormat, resolveRegionBasedPrice, resolveImg } from '/modules/utility/ecommerce/ecommerce.js';
import Inventory from '@mui/icons-material/Inventory';
const Module = props => {
  return <div className='flex gap-p3' style={{
    flexDirection: 'column',
    marginTop: '.3rem',
    marginBottom: '.3rem'
  }}>
            {props?.useCartOfCurrency?.remaining?.length > 0 ? <div style={{
      background: '#222222',
      borderRadius: '.5rem',
      fontSize: '.75rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem',
      padding: '.25rem .5rem'
    }}>The Items below will be processed after the current purchase. They are in a different currency.</div> : null}
            {props?.useCartOfCurrency?.remaining?.map ? props?.useCartOfCurrency?.remaining?.map((item, i) => {
      const current = resolveCurrentStyle(item.product, item.style);
      const currentOption = resolveCurrentOption(current, item.option);
      const priceObject = resolveRegionBasedPrice(props, current);
      const price = priceObject.price;
      const symbol = priceObject.symbol;
      const useImage = item?.product?.images && item.product.images[0] && item.product.images[0].name ? item.product.images[0].name : null;
      return <div className='gap-p2 Ecommerce_Item_Container' key={i}>
                                <div style={{
          display: 'flex',
          gap: '.5rem'
        }}>
                                    <div className={`Ecommerce_Item_Image_Container`} style={{
            backgroundImage: useImage && props?.cdn?.static ? `url(${props.cdn.static}/${useImage})` : null
          }}>
                                        <img src={resolveImg(props.editing, props.cdn)} className='Product_img' style={{
              width: '45px',
              opacity: useImage ? 0 : 1
            }} />
                                    </div>
                                    <div style={{
            width: '100%'
          }}>
                                        <div className='flex gap-p2 Ecommerce_Cart_Title_Main_Container'>
                                            <div className='Ecommerce_Title'>{item.product.name}</div>
                                            <div className='Ecommerce_Cart_Price_Container'>
                                                <div className='Ecommerce_Price'>{symbol}{resolveMoneyFormat(price)}</div>
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
                                                    <div>{current && current.style ? current.style : ''}</div>
                                                    {_span || (_span = <span>&nbsp;~&nbsp;</span>)}
                                                    <div>{currentOption && currentOption.option ? `${currentOption.option}` : ''}</div>
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
                                                    <input type='number' value={item.quantity} style={{
                    height: '1.125rem',
                    maxWidth: '3rem'
                  }} onChange={props?.handleUpdateQuantity} styleId={item.style} optionId={item.option} productId={item.product.id} quantity={item.quantity}></input>
                                                </div>
                                            </div>
                                            <div className='Ecommerce_Cart_Side_Meta_Container'>
                                                <div style={{
                  color: 'grey',
                  fontSize: '.7rem',
                  height: '17px',
                  textAlign: 'right'
                }}>Subtotal:</div>
                                                <div className='Ecommerce_Price'>{symbol}{resolveMoneyFormat(item.quantity * price)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>;
    }) : null}
        </div>;
};
export default Module;