import React from 'react';
const Module = props => {
  return <React.Fragment>
            {props?.validCc && props?.cart?.items?.length > 0 && props?._loggedIn || props?.free ? <div style={{
      background: '#222222',
      borderRadius: '.5rem',
      fontSize: '.75rem',
      lineHeight: '.7rem',
      marginBottom: '.25rem',
      padding: '.25rem .5rem'
    }}>Placing your order above will fulfill payment to the shop vendors and confirms your agreement with {props.siteTitle} terms and conditions</div> : null}
        </React.Fragment>;
};
export default Module;