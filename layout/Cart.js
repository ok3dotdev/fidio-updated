import React from 'react';
import {
  CartCc,
  CartDisclaimer,
  CartItems,
  CartMessages,
  CartTotal,
  ItemsRemaining,
  ItemsTotal,
  PurchaseButton,
} from '../modules/ecommerce/cart';
import Close from '@mui/icons-material/Close';
import { fireGlobalEvent } from '/modules/utility/utility'
import apiReq from '/modules/utility/api/apiReq' // Import API for making DB Requests
import { SignIn } from '../modules/onboarding/signin';

const Module = (props) => {
  const close = React.useCallback((e) => {
    props._toggleSingleOpenMenu(e, 'cart');
  });

  // Use refs to easily track value inputs
  const firstName = React.useRef()
  const lastName = React.useRef()
  const email = React.useRef()

  const intendsToSignInAsGuest = !props?._loggedIn && email?.current?.value // Guess intent based on input email

  // Attempt anonymous sign in with input info here. You can run manually or pass as f to PurchaseButton
  const doFunc = async () => {
    props.setPageError(null)
    if (!intendsToSignInAsGuest && !props._loggedIn) { // If we detect no input and user clicks purchase give next action
        props.setPageError({
            message: 'Add email to sign in Anonymously or use one-click sign in',
            placement: 'purchase'
        })
        return false
    }
    await apiReq('/onboarding/signinunregistered', { // If no logged in user this will attempt anonymous sign on. Can run this even if signed in it will not fire
            email: email?.current?.value,
            props: props,
            firstName: firstName?.current?.value, // Optional
            lastName: lastName?.current?.value // Optional
        })
    }

// This ensures that we will attempt checkout after save credit card
const saveBillingInfoFunction = React.useCallback(e => {
    fireGlobalEvent({
        event: 'checkout'
    }, props._LocalEventEmitter)
})

  return (
    <div
      className={`Ecommerce_Cart_Container ${props.className} ${
        props.open || (props?.menuOpen && !props?.closing)
          ? 'Ecommerce_Cart_Container_Visible'
          : ''
      }`}
      ref={props?.container}
      style={{
        top:
          props?.menuConfig?.height && !isNaN(Number(props.menuConfig.height))
            ? Number(props.menuConfig.height) + 'px'
            : '',
      }}
    >
      {props.open || props?.menuOpen ? (
        <React.Fragment>
          <div
            className={`${
              props?.fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'
            }`}
          ></div>
          <input id='Ecommerce_CreditCard_FullNameInput' type='text' style={{ display: 'none' }} devnote='Credit card name input' value={props?._loggedIn?.meta?.firstName ? `${props._loggedIn.meta.firstName}${props?._loggedIn?.meta?.lastName ? ` ${props?._loggedIn?.meta?.lastName}` : ''}` : firstName?.current?.value ? `${firstName.current.value}${lastName?.current?.value ? ` ${lastName.current.value}` : ''}` : null} />
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
                  <div className='mb-2'>
                    <label className='flex'>First Name</label>
                    <input type='text' placeholder='First Name' ref={firstName}></input>
                  </div>
                  <div className='mb-2'>
                    <label className='flex'>Last Name</label>
                    <input type='text' placeholder='Last Name' ref={lastName}></input>
                  </div>
                  <div className='mb-2'>
                    <label className='flex'>Email</label>
                    <input type='text' placeholder='Email' ref={email}></input>
                  </div>
                  <div
                    style={{
                        borderBottom: '2px dashed grey',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }}
                    ></div>
                    {
                        !props?._loggedIn
                            ? <SignIn { ...props } />
                            : null
                    }
                  <div className='flex gap-p5' style={{ marginTop: '1rem' }}>
                    <input type='checkbox' />
                    <div
                      className='text-dashtext'
                      style={{ fontSize: '.74rem' }}
                    >
                      Keep me updated on more events and news from this event
                      organizer.
                    </div>
                  </div>
                  <div style={{ border: '2px solid dashed' }}></div>
                </div>
                <div
                  className='Ecommerce_Layout_CreditCardContainer'
                  style={{ marginTop: '1rem' }}
                >
                  <p className='mb-2 font-semibold'>Pay With</p>
                  <div>
                    <label className='mb-2'>Credit/Debit card</label>
                  </div>
                  <CartCc {...props} saveBillingInfoText={'Purchase'} saveBillingInfoFunction={saveBillingInfoFunction} />
                  <PurchaseButton {...props} f={doFunc} text={intendsToSignInAsGuest ? 'Purchase as Guest' : null} />
                  <div className='text-dashtext' style={{ fontSize: '.74rem' }}>
                    We use industry-standard security measure to protect your
                    information.
                  </div>
                </div>
              </div>
              <div className='Ecommerce_Layout_OrderSummary'>
                <div>
                  <p className='mb-2 font-semibold'>Order Summary</p>
                  <CartItems {...props} />
                </div>
                <div
                  style={{
                    borderBottom: '2px dashed grey',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                  }}
                ></div>
                <div style={{ fontSize: '1rem', lineHeight: '1.25rem' }}>
                  <ItemsTotal {...props} />
                  <CartTotal {...props} />
                  <CartMessages {...props} />
                  <CartDisclaimer {...props} />
                  <ItemsRemaining {...props} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Module;
