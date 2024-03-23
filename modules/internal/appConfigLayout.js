import React from 'react';
const Module = props => {
  return <div>
            {props.useAppConfigLayout && props.appConfigLayout ? <React.Fragment>{props.appConfigLayout}</React.Fragment> : null}
		</div>;
};
export default Module;