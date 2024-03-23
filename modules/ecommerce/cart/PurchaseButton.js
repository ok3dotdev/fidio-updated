import React from 'react';
const Module = props => {
  return <React.Fragment>
            {(props?.validCc || props?.free) && props?.cart?.items?.length > 0 ? <React.Fragment>
                        <button style={{
        width: '100%',
        marginBottom: '.25rem'
      }} onClick={props?.handlePerformPurchase}>{props?.free ? 'Get Now' : 'Purchase'}</button>
                        {props?.pageError?.message && props?.pageError?.placement == 'purchase' ? <div className='error' style={{
        marginBottom: '.125rem'
      }} onClick={props?.handleClearError}>{props?.pageError?.message ?? ''}</div> : null}
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;