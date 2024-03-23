var _div;
import React from 'react';
import { calculateTotal, resolveMoneyFormat } from '/modules/utility/ecommerce/ecommerce.js';
const Module = props => {
  return <div className='flex Ecommerce_Price'>
            {_div || (_div = <div>Items:&nbsp;</div>)}
            <div>{props?.useCartOfCurrency?.currency?.symbol ?? null}{resolveMoneyFormat(calculateTotal(props?.useCartOfCurrency, null, {
        region: props?.useCartOfCurrency?.currency ?? null
      }, props))}</div>
        </div>;
};
export default Module;