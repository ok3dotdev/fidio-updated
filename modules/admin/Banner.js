import React from 'react';
import Link from 'next/link';
import AdminStyles from './Admin.module.scss';
const Module = props => {
  return <div className={`${AdminStyles.adminBannerContainer} Admin_BannerContainer`} style={{
    fontSize: '.85rem'
  }}>
            <div className={`${AdminStyles.adminBannerInternalContainer}`}>
                <div>
                    <div style={{
          textWrap: 'nowrap'
        }}>Welcome <Link href={`/p?u=${props?._loggedIn?.username ?? props?._loggedIn?.identifier}`} style={{
            fontWeight: '600'
          }}>{props?._loggedIn?.username ?? props?._loggedIn?.identifier}</Link></div>
                </div>
                <div className='flex gap-p5' style={{
        alignItems: 'center'
      }}>
                    <Link href='/' style={{
          fontWeight: '600'
        }}>{props.domainUrl}</Link>
                    <div style={{
          textWrap: 'nowrap'
        }}>{props?._adminAuth?.adminc?.access ? `(admin access: ${props?._adminAuth?.adminc?.access})` : ''}</div>
                </div>
            </div>
        </div>;
};
export default Module;