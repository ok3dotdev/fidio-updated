import React from 'react';
import WatchPageStyles from './WatchPage.module.scss';
import { isObjectEmpty } from '../../util';
const Module = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${props?.className ?? ''} ${WatchPageStyles.streamLeadPrompt} ${!isObjectEmpty(props?.streamLeadPrompt) ? WatchPageStyles.streamLeadPrompt_Visible : ''} WatchPage_StreamLeadPrompt`,
    ref: props?.authContainer
  }, props?.streamLeadPrompt ? /*#__PURE__*/React.createElement("div", null, props?.streamLeadPrompt?.lead ? /*#__PURE__*/React.createElement("div", null, props.streamLeadPrompt.lead) : null, props?.streamLeadPrompt?.description ? /*#__PURE__*/React.createElement("div", null, props.streamLeadPrompt.description) : null, props?.streamLeadPrompt?.password ? /*#__PURE__*/React.createElement("div", null, props.streamLeadPrompt.password) : null, props?.streamLeadPrompt?.tags ? /*#__PURE__*/React.createElement("div", null, props.streamLeadPrompt.tags) : null, props?.streamLeadPrompt?.tagsList ? /*#__PURE__*/React.createElement("div", null, streamLeadPrompt.tagsList) : null) : null);
};
export default Module;