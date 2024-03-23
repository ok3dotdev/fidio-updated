import React from 'react';
import { calculateTotal, resolveMoneyFormat } from '/modules/utility/ecommerce/ecommerce.js';
const Module = props => {
  return <div className='flex Ecommerce_Price'>
            {props?.free ? <div className='Ecommerce_FreeBanner' style={{
      fontSize: '1.25rem'
    }}>Free</div> : <React.Fragment>
                    <div style={{
        lineHeight: '1.4rem'
      }}>Cart Total:&nbsp;</div>
                    <div style={{
        fontSize: '1.25rem'
      }}>{props?.useCartOfCurrency?.currency?.symbol ?? null}{resolveMoneyFormat(calculateTotal(props?.useCartOfCurrency, null, {
          region: props?.useCartOfCurrency?.currency ?? null
        }, props))}</div>
                </React.Fragment>}
        </div>;
};
export default Module;