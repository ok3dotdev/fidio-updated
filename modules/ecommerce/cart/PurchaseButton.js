import React from"react";const Module=e=>React.createElement(React.Fragment,null,(e?.validCc||e?.free)&&0<e?.cart?.items?.length?React.createElement(React.Fragment,null,React.createElement("button",{style:{width:"100%",marginBottom:".25rem"},onClick:e?.handlePerformPurchase},e?.free?"Get Now":"Purchase"),e?.pageError?.message&&"purchase"==e?.pageError?.placement?React.createElement("div",{className:"error",style:{marginBottom:".125rem"},onClick:e?.handleClearError},e?.pageError?.message??""):null):null);export default Module;