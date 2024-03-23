var _li;
import React from 'react';
import Link from 'next/link';
const Module = props => {
  return <React.Fragment>
            {props?._adminAuth?.adminc?.admin && props?._adminAuth.userid && props._loggedIn.identifier && props._adminAuth.userid === props._loggedIn.identifier ? <Link href="/admin" className={`menuLinkSelector`} onClick={props?.handleToggleSettings} style={{
      position: 'relative',
      alignSelf: 'center'
    }}>
                        {_li || (_li = <li>
                            <div className={`material-icons`}>key</div>
                            <div>Admin</div>
                        </li>)}
                    </Link> : null}
        </React.Fragment>;
};
export default Module;