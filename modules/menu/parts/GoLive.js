var _li;
import React from 'react';
import Link from 'next/link';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return <React.Fragment>
            <Link href="/p?a=golive" className={`menuLinkSelector slideGradient`} onClick={props?.handleToggleSettings} style={{
      position: 'relative',
      alignSelf: 'center'
    }}>
                {_li || (_li = <li>
                    <div className={`material-icons`}>stream</div>
                    <div>Go Live</div>
                </li>)}
            </Link>
        </React.Fragment>;
};
export default Module;