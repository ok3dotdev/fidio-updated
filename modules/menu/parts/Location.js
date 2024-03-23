var _div;
import React from 'react';
import Link from 'next/link';
const Module = props => {
  return <React.Fragment>
            {props._loggedIn?.meta?.locationMeta?.city && props._loggedIn?.meta?.locationMeta?.country ? <React.Fragment>
                        <Link href="/settings?t=location" className={`menuLinkSelector`} onClick={props?.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            <li>
                                {_div || (_div = <div className={`material-icons`}>flag</div>)}
                                <div>Location:&nbsp;
                                    {/* <span>{props?._loggedIn?.meta?.locationMeta?.city ?? null}</span><span>, </span> */}
                                    <span>{props?.resolvedCountry}</span>
                                </div>
                            </li>
                        </Link>
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;