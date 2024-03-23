import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import menuStyle from '../Menu.module.scss';
const Module = props => {
  return <React.Fragment>
            {props._loggedIn ? <Tooltip title='Profile' placement='bottom'>
                        <li className={`${menuStyle.menuLink} darkMenuLink`} onClick={props?.handleToggleSettings}>
                            <span className={`${menuStyle.menuLinkText}`}>
                                <div className={`${menuStyle.menuText}`}>{props._loggedIn && props._loggedIn.username ? props._loggedIn.username : 'Dashboard'}</div>
                                <div className={`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} person material-icons`}>person</div>
                            </span>
                            <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} person material-icons`}>person</div>
                        </li>
                    </Tooltip> : null}
        </React.Fragment>;
};
export default Module;