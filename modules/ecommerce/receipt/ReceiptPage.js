import React from 'react';
import Order from './Order';
const Module = props => {
  const receiptData = props?.receiptData;
  return <div className={`${props.className}`}>
            <div style={{
      maxWidth: '680px',
      margin: '0 auto',
      padding: '0 1rem'
    }}>
                {receiptData ? <Order order={receiptData} hideView={true} expanded={true} {...props} /> : null}
            </div>
        </div>;
};
export default Module;