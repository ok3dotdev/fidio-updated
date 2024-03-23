var _div, _div2;
import React from 'react';
const Module = props => {
  return <React.Fragment>
            <li onClick={props?.fireShareBug}>
                {_div || (_div = <div className={`material-icons`}>bug_report</div>)}
                {_div2 || (_div2 = <div>Report Bug</div>)}
            </li>
        </React.Fragment>;
};
export default Module;