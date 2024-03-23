import Link from 'next/link';
import React from 'react';
import styles from './documentation.module.scss';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className} CompanyLink_Container`,
    style: {
      alignSelf: 'center'
    }
  }, props?._adminAuth?.adminc?.admin && props?._loggedIn ? /*#__PURE__*/React.createElement("div", {
    className: `${styles.companyLink}`,
    style: {
      background: 'grey',
      borderRadius: '1rem',
      padding: '.25rem 2rem'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    href: `${props.devLocal ? `${props.devAddress}/admin` : `https://${props.domainUrl}/admin`}`
  }, props?.dborigin && props?.dborigin?.charAt ? `${props.dborigin.charAt(0).toUpperCase()}${props.dborigin.slice(1, props.dborigin.length)}` : null)) : null);
};
export default Module;