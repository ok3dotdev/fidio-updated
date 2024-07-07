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
const Module = (props) => {
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
      <div
        style={{ display: props.open || props?.menuOpen ? 'block' : 'none' }}
      >
        <React.Fragment>
          <div
            className={`${
              props?.fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'
            }`}
          ></div>
          <div className='Ecommerce_Cart_Internal_Container'>
            <h5 className={'Ecommerce_Label'}>Cart</h5>
            <CartItems {...props} />
            <div style={{ fontSize: '1rem', lineHeight: '1.25rem' }}>
              <ItemsTotal {...props} />
              <CartTotal {...props} />
              <PurchaseButton {...props} />
              <CartMessages {...props} />
              <CartCc {...props} />
              <CartDisclaimer {...props} />
              <ItemsRemaining {...props} />
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};
export default Module;
