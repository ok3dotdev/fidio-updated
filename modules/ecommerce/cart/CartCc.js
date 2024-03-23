import React from 'react';
import { CreditCard } from '../../payment';
const Module = props => {
  return <div className={`Ecommerce_Credit_Card_Module_Container ${props?.validCc ? 'slide_hide slide_hide_do_full_show' : 'slide_hide slide_hide_visible'} ${props.forceShowCc || props._isMobile ? 'slide_hide_do_force_show' : ''}`} style={{
    marginBottom: '.25rem'
  }}>
            {props?.showContent ? props?.validCc && props._loggedIn ? <div className={`hover_show ${props.forceShowCc || props._isMobile ? 'hover_show_Cc_force' : ''} Ecommerce_Credit_Card_Label`} style={{
      textAlign: 'center'
    }}>Credit Card</div> : props?.cart?.items?.length > 0 ? <div style={{
      fontSize: '.75rem'
    }}>{props?.free ? '' : 'Add a Credit Card to fulfill Purchase'}</div> : null : null}
            {!props._loggedIn ? <button onClick={props?.handleToggleSettings} style={{
      fontSize: '.75rem',
      width: '100%'
    }}>Please Sign In</button> : null}
            <CreditCard {...props} stagger={500} validCc={props?.validCc} setValidCc={props?.setValidCc} setShowContent={props?.setShowContent} setSolution={props?.setSolution} sx={{
      marginBottom: '.5rem',
      marginTop: '.25rem'
    }} children={props.ccChildren}></CreditCard>
        </div>;
};
export default Module;