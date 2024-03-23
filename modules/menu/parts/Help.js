var _div, _div2;
import React from 'react';
const Module = props => {
  return <React.Fragment>
            <li onClick={props?.fireHelp}>
                {_div || (_div = <div className={`material-icons`}>help</div>)}
                {_div2 || (_div2 = <div>Help</div>)}
            </li>
        </React.Fragment>;
};
export default Module;