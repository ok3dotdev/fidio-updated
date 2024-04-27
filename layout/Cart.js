import React from 'react'
import { CartCc, CartDisclaimer, CartItems, CartMessages, CartTotal, ItemsRemaining, ItemsTotal, PurchaseButton } from '../modules/ecommerce/cart'
import Close from '@mui/icons-material/Close'

const Module = props => {

    const close = React.useCallback(e => {
        props._toggleSingleOpenMenu(e, 'cart')
    })

    return (
        <div className={`Ecommerce_Cart_Container ${props.className} ${props.open || props?.menuOpen && !props?.closing ? 'Ecommerce_Cart_Container_Visible' : ''}`} ref={props?.container} style={{ top: props?.menuConfig?.height && !isNaN(Number(props.menuConfig.height)) ? Number(props.menuConfig.height) + 'px' : '' }}>
            {
                props.open || props?.menuOpen
                ? <React.Fragment>
                    <div className={`${props?.fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}></div>
                    <div className='Ecommerce_Cart_Internal_Container'>
                        <div className='flex justify-between'>
                            <h5 className={'Ecommerce_Label'}>Checkout</h5>
                            <div style={{ margin: '.125rem', cursor: 'pointer' }}>
                                <Close onClick={close}></Close> {/* Use your close icon here */}
                            </div>
                        </div>
                        <div className='flex Ecommerce_Layout_Data_Container'>
                            <div>
                                <div className='Ecommerce_Layout_Data_Details'>
                                    <p className='mb-2 font-semibold'>Billing Information</p>
                                    <div>
                                        <label className='mb-2 font-semibold'>First Name</label>
                                        <p>{props?._loggedIn?.meta?.firstName}</p>
                                    </div>
                                    <div>
                                        <label className='mb-2 font-semibold'>Last Name</label>
                                        <p>{props?._loggedIn?.meta?.lastName}</p>
                                    </div>
                                    <div>
                                        <label className='mb-2 font-semibold'>Email</label>
                                        <p>{props?._loggedIn?.email}</p>
                                    </div>
                                    <div className='flex gap-p5' style={{ marginTop: '1rem' }}>
                                        <input type='checkbox' />
                                        <div className='text-dashtext' style={{ fontSize: '.8rem' }}>Keep me updated on more events and news from this event organizer</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '1rem' }}>
                                    <p className='mb-2 font-semibold'>Pay With</p>
                                    <CartCc { ...props } />
                                    <PurchaseButton { ...props } />
                                </div>
                            </div>
                            <div className='Ecommerce_Layout_OrderSummary'>
                                <div>
                                    <p className='mb-2 font-semibold'>Order Summary</p>
                                    <CartItems { ...props } />
                                </div>
                                <div style={{ borderBottom: '2px dashed grey', marginTop: '1rem', marginBottom: '1rem' }}></div>
                                <div style={{ fontSize: '1rem', lineHeight: '1.25rem' }}>
                                    <ItemsTotal { ...props } />
                                    <CartTotal { ...props } />
                                    <CartMessages { ...props } />
                                    <CartDisclaimer { ...props } />
                                    <ItemsRemaining { ...props } />
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                : null
            }
        </div>
    )
}

export default Module
