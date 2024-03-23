import React from 'react';
import Link from 'next/link';
const Module = props => {
  return <React.Fragment>
            {props._loggedIn && props.mustBeLoggedIn || !props.mustBeLoggedIn ? <React.Fragment>
                        <Link href={`${props.href}`} className={`menuLinkSelector`} onClick={props?.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            <li>
                                <div className={`material-icons`}>{props.materialIcon}</div>
                                <div>{props.text}</div>
                            </li>
                        </Link>
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;