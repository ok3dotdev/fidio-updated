import React from"react";const Module=e=>{const{fetchBusy:t,ManagerStyles:a,currentlyStreaming:n,checkStream:r,streamingFor:l}=e;e=React.useCallback(e=>{r()});return React.createElement(React.Fragment,null,t?null:React.createElement(React.Fragment,null,n?null:React.createElement("button",{className:a.streamingButton+" Manager_StreamingButton",onClick:e,style:{padding:".125rem 2rem",fontSize:"1.5rem",paddingTop:".125rem",width:"-webkit-fill-available",height:"75px",marginBottom:".5rem"}},"Begin Stream",l?.name?React.createElement("span",{className:a.forLabel+" Manager_forLabel"},React.createElement("br",null),'for "',l.name,'"'):"")))};export default Module;