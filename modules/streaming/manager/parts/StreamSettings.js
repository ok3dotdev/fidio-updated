import React from"react";import Tooltip from"@mui/material/Tooltip";const Module=e=>{const{fetchBusy:t,ManagerStyles:a,descriptionRef:n,myTagsRef:r,updateStreamData:l,updateTags:i,setPrivate:c,privateRef:s,streamSettings:m,setPassword:o,passwordRef:g}=e;e=React.useCallback(e=>{i(e)});return React.createElement(React.Fragment,null,t?null:React.createElement("div",{className:a.StreamSettings+" 'Manager_StreamSettings"},React.createElement("div",null,React.createElement("textarea",{modif:"description",ref:n,placeholder:"Description",style:{maxWidth:"100%",marginTop:".25rem",width:"100%",height:"90px"},onChange:l})),React.createElement("div",{className:"flex gap-p5",style:{alignContent:"center"}},React.createElement("label",{style:{fontWeight:600}},"Tags"),React.createElement("input",{type:"text",modif:"tags",ref:r,placeholder:"Tags",style:{width:"100%"},onChange:e})),React.createElement("div",{className:a.streamPrivateContainer+" Manager_StreamPrivateContainer",style:{display:"flex",alignItems:"center"}},React.createElement("div",{className:a.streamPrivateContainerCheckbox+" Manager_StreamPrivateContainerCheckbox"},React.createElement("label",{className:"Manager_StreamPrivateContainerPrivateLabel",style:{fontWeight:"600",height:"26px",placeContent:"center"}},"Private"),React.createElement("input",{className:"Manager_StreamPrivateContainerCheckboxInput",type:"checkbox",onChange:c,ref:s})),m.private?React.createElement("div",{className:a.StreamPrivateOnContainerOptions+" Manager_StreamPrivateOnContainerOptions"},React.createElement(Tooltip,{title:"You can additionally set a password when beginning a private stream"},React.createElement("label",{className:"Manager_StreamPassword"},"Password")),React.createElement("input",{className:"Manager_StreamInput",type:"text",onChange:o,style:{maxWidth:"100px",marginLeft:".25rem",borderRadius:".25rem"},ref:g})):null),React.createElement("div",{className:a.tagDateContainer+" Manager_TagDateContainer"},m?.dates&&0<m.dates.length?React.createElement("div",{className:"tagContainer",style:{marginTop:".25rem"}},m.dates.map((e,t)=>React.createElement("div",{className:"tagItem",style:{fontSize:"1rem"},key:t},e&&e.toLocaleString?e.toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit"}):""))):React.createElement("div",null),m?.tags&&0<m.tags.length?React.createElement("div",{className:"tagContainer",style:{marginTop:".25rem"}},m.tags.map((e,t)=>React.createElement("div",{className:"tagItem",style:{fontSize:"1rem"},key:t},e))):React.createElement("div",null))))};export default Module;