var _li;
import React from 'react';
import Link from 'next/link';
const Module = props => {
  return <React.Fragment>
            {props._loggedIn ? <React.Fragment>
                        <Link href="/settings?t=payment" className={`menuLinkSelector`} onClick={props?.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            {_li || (_li = <li>
                                <div className={`material-icons`}>payment</div>
                                <div>Payment Methods</div>
                            </li>)}
                        </Link>
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;