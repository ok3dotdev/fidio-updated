var _div, _div2;
import React from 'react';
const Module = props => {
  return <React.Fragment>
            <li onClick={props?.fireShareFeedback}>
                {_div || (_div = <div className={`material-icons`}>feedback</div>)}
                {_div2 || (_div2 = <div>Share Feedback</div>)}
            </li>
        </React.Fragment>;
};
export default Module;