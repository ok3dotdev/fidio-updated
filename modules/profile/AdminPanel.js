import React from 'react';
import { Manager } from '../streaming/manager';
const Module = props => {
  return <div className={`${props?.className ?? ''}`}>
            {props?.adminAuth ? <div>
                        <div className={`AdminPanel_Container ${props?.adminPanelState ? 'AdminPanel_ContainerOpen' : ''}`} ref={props?.adminPanelContainerRef}>
                            <Manager {...props} adminPanelState={props?.adminPanelState}></Manager>
                        </div>
                        <div style={{
        position: 'absolute',
        right: '.5rem'
      }}>
                            <button onClick={props?.toggleAdminPanel}>{props?.adminPanelState ? 'Close' : 'Open'} {props?.managerName ?? 'Manager'}</button>
                        </div>
                    </div> : null}
        </div>;
};
export default Module;