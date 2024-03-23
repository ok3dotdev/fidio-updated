import React from 'react';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return <React.Fragment>
            {!props._loggedIn ? <li className={`${menuStyle.menuLink} darkMenuLink`} onClick={props?.fireShowSignIn}>
                    <span className={`${menuStyle.menuLinkText}`}>
                        <div className={`${menuStyle.menuText}`}>Login</div>
                        <div className={`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} person material-icons`}>person</div>
                    </span>
                    <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} person material-icons`}>person</div>
                </li> : null}
        </React.Fragment>;
};
export default Module;