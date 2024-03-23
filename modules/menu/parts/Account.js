var _div, _div2;
import React from 'react';
import Link from 'next/link';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return <React.Fragment>
            {props._loggedIn ? <React.Fragment>
                        <Link href="/p" className={`menuLinkSelector`} onClick={props?.handleToggleSettings} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                            <li style={{
          padding: '.75rem'
        }}>
                                <img className={`${menuStyle.profileIcon}`} src={props?._loggedIn?.icon ?? ''} />
                                <div className={`${menuStyle.profileItemDataContainer}`}>
                                    <div style={{
              fontWeight: '700'
            }}>@{props._loggedIn.username}</div>
                                    <a href='/p' className='a' style={{
              alignItems: 'center',
              display: 'flex',
              gap: '.25rem'
            }}>
                                        {_div || (_div = <div className={`material-icons`}>account_box</div>)}
                                        {_div2 || (_div2 = <div>View Your Profile</div>)}
                                    </a>
                                </div>
                            </li>
                        </Link>
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;