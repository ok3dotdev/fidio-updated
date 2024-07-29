import React from 'react'
import Link from 'next/link'
import { selectThisText } from '/modules/utility/utility/event'
import { resolveCurrentStyle, resolveCurrentOption, resolveRegionBasedPrice, resolveMoneyFormat, westernMoneyFormat } from '/modules/utility/ecommerce'
import Inventory from '@mui/icons-material/Inventory'
import { OrderTitle, OrderItemPrice, OrderImage, OrderCard, OrderViewReceiptPage } from '/modules/ecommerce/receipt/order'

const Module = props => {
    
    let useSymbol
    const { m, selectDate, creation, currency, card, cardBilling } = props
    return (
        <div>
            <div className={`Ecommerce_SingleOrderContainer`}>
                <div className='short_bottom_border' style={{ paddingBottom: '1rem' }}>
                    <div className='Ecommerce_SingleOrderInternalContainer'>
                        <div className='Ecommerce_SingleOrderMetaContainer'>
                            <div className='Ecommerce_SingleOrderMeta'>
                                <h5 className='Ecommerce_OrderLabel'>Order</h5>
                                &nbsp;
                                <span className='Ecommerce_OrderId' selectValue={`${m?.id ?? ''}`} onClick={selectThisText}>#{m?.id ?? ''}</span>
                                &nbsp;-&nbsp;
                                <span className='Ecommerce_Order_SelectDate' selectValue={`${selectDate ?? ''}`} onClick={selectThisText}>{`${selectDate ?? ''}`}</span>
                                <OrderViewReceiptPage { ...props } m={m} />
                            </div>
                            <div className='Ecommerce_SingleOrderMetaCreation'>{creation ?? ''}</div>
                        </div>
                        <div className='Ecommerce_OrderSingleItemContainer'>
                            {
                                m?.cart?.map && resolveCurrentStyle && resolveCurrentOption && resolveRegionBasedPrice
                                    ? props.m.cart.map((n, j) => {
                                        const currentStyle = resolveCurrentStyle(n.product, n.style)
                                        const currentOption = resolveCurrentOption(currentStyle, n.option)
                                        const priceObject = resolveRegionBasedPrice(props, currentStyle)
                                        const symbol = priceObject?.symbol ?? ''
                                        useSymbol = symbol
                                        return (
                                            <div className='Ecommerce_Item_Container' key={j} i={j}>
                                                <div className='Ecommerce_Item_ContainerInternal'>
                                                    <OrderImage n={n} resolveOrderImg={props?.resolveOrderImg} />
                                                    <div className='Ecommerce_ItemContainerWidth'>
                                                        <div className='Ecommerce_Cart_Title_Main_Container Ecommerce_Cart_Title_Main_ContainerOrder'>
                                                            <OrderTitle { ...props } n={n} />
                                                            <OrderItemPrice { ...props } n={n} symbol={symbol} />
                                                        </div>
                                                        <div className='flex Ecommerce_Order_StyleOrderContainer'>
                                                            <div>
                                                                <span className='flex' style={{ fontSize: '.7rem', color: 'grey' }}>
                                                                    <div>{currentStyle?.style ?? ''}</div>
                                                                    <span>&nbsp;~&nbsp;</span>
                                                                    <div>{currentOption?.option ?? ''}</div>
                                                                </span>
                                                                <div className='Ecommerce_Cart_Quantity_Container'>
                                                                    <div style={{ display: 'flex', alignSelf: 'center' }}>
                                                                        <Inventory sx={{ width: '.85rem', height: '.9rem', marginRight: '.25rem' }}></Inventory>
                                                                    </div>
                                                                    <div>{Object.prototype.hasOwnProperty.call(n, 'quantity') ? n.quantity : ''}</div>
                                                                </div>
                                                            </div>
                                                            <div className={`Ecommerce_Cart_Side_Meta_Container Ecommerce_Price_Expanded_Container`}>
                                                                <div className={`Ecommerce_Order_SubtotalLabel`}>Subtotal:</div>
                                                                <div className='Ecommerce_Price'>{symbol}{resolveMoneyFormat(n.quantity * n.price)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    : null
                            }
                        </div>
                        <div className='flex Ecommerce_Price' style={{ justifyContent: 'space-between' }}>
                            <div style={{ lineHeight: '1.4rem' }}>Total:&nbsp;</div>
                            <div style={{ fontSize: '1.25rem' }}>{useSymbol}{westernMoneyFormat.format(m?.totals?.total) ?? ''} {currency.toUpperCase()}</div>
                        </div>
                        <div>
                            {
                                m.paymentfulfilled
                                    ? <div>
                                        {
                                            m?.meta?.charged && m?.currency
                                                ? <OrderCard card={card} cardBilling={cardBilling} useSymbol={useSymbol} m={m} />
                                                : ''
                                        }
                                    </div>
                                    : <div>
                                        <div style={{ fontSize: '.75rem' }}>Payment Unfulfilled</div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
