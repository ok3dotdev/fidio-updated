import React from"react";const Module=t=>{const{backgrounds:n,fetchBusy:e,ManagerStyles:m,currentlyStreaming:a,upcomingStreams:r,setNextStream:c,moreSettings:i}=t;return React.createElement(React.Fragment,null,e||a?null:React.createElement("div",{className:"Manager_UpcomingStreamsExternalContainer",style:{marginBottom:".5rem"}},React.createElement("h4",{className:"Manager_UpcomingStreamsLabel",style:{fontWeight:600,margin:".5rem 0"}},"Your Upcoming Streams"),r?.map?React.createElement("div",{className:m.upcomingStreamsContainer+" Manager_UpcomingStreamsContainer "+(i?""+m.upcomingStreamsContainerForceOpen:"")},r.map((e,a)=>React.createElement("div",{className:m.upcomingStreamContainer+" Manager_UpcomingStreamContainer",key:a,onClick:c,modif:e.id},React.createElement("div",{className:m.upcomingStream+" Manager_UpcomingStream",style:{background:""+(t?.cdn?.static&&e?.images[0]&&e?.images[0].name?`url(${t.cdn.static}/${e.images[0].name})`:n[a]??""),backgroundSize:"cover"}}),React.createElement("label",{className:m.upcomingStreamLabel+" Manager_UpcomingStreamLabel"},e.name)))):null))};export default Module;