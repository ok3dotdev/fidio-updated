import React from"react";const Module=e=>React.createElement(React.Fragment,null,0<e?.cartMessages?.length?React.createElement("div",{className:"flex gap-p3 Ecommerce_CartMessagesContainer",style:{paddingBottom:".25rem"}},e.cartMessages.map(e=>React.createElement("div",{className:"Ecommerce_CartMessage"},React.createElement("div",{className:"Ecommerce_CartMessage_Message"},e.message),e.href?React.createElement("span",null," ",React.createElement("span",null,React.createElement("a",{href:e.href},React.createElement("button",{style:{padding:".25rem 1rem",margin:".25rem 0"}},e.hrefCta)))):null))):null);export default Module;