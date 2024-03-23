import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
import { isObjectEmpty } from '../../util';
const Module = props => {
  return <div className={`${props?.className ?? ''} ${WatchPageStyles.streamLeadPrompt} ${!isObjectEmpty(props?.streamLeadPrompt) ? WatchPageStyles.streamLeadPrompt_Visible : ''} WatchPage_StreamLeadPrompt`} ref={props?.authContainer}>
            {props?.streamLeadPrompt ? <div>
                        {props?.streamLeadPrompt?.lead ? <div>{props.streamLeadPrompt.lead}</div> : null}
                        {props?.streamLeadPrompt?.description ? <div>{props.streamLeadPrompt.description}</div> : null}
                        {props?.streamLeadPrompt?.password ? <div>{props.streamLeadPrompt.password}</div> : null}
                        {props?.streamLeadPrompt?.tags ? <div>{props.streamLeadPrompt.tags}</div> : null}
                        {props?.streamLeadPrompt?.tagsList ? <div>{streamLeadPrompt.tagsList}</div> : null}
                    </div> : null}
        </div>;
};
export default Module;