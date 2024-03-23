var _div, _div2;
import React from 'react';
const Module = props => {
  return <React.Fragment>
            {props._loggedIn ? <React.Fragment>
                        <li onClick={props?.handleLogout}>
                            {_div || (_div = <div className={`material-icons`}>logout</div>)}
                            {_div2 || (_div2 = <div>Sign Out</div>)}
                        </li>
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;