import React from"react";import apiReq from"/modules/utility/api/apiReq";const Module=t=>{const[e,a]=React.useState(null),[,r]=React.useState(null),[n,l]=React.useState(null);return React.useEffect(()=>{t?._loggedIn?.identifier&&t._loggedIn.identifier!==e&&(async()=>{r((new Date).getTime()),a(t._loggedIn.identifier);var e=await apiReq("/ecommerce/getvendorlinks",{identifier:t._loggedIn.identifier,hash:t._loggedIn.hash,refreshUrl:t?.refreshUrl?t.refreshUrl:null,returnUrl:t?.returnUrl?t.returnUrl:null});e&&"success"===e.status&&e?.data?.vendor?.accountLinks?.url&&l(e.data.vendor.accountLinks.url)})()},[t?._loggedIn?.identifier,e]),React.createElement(React.Fragment,null,n?React.createElement("div",{className:"Ecommerce_RegisterVendor_Container "+t.className},React.createElement("label",{className:"Ecommerce_RegisterVendor_Label"},t?.label?t.label:"Register as a Vendor to get paid on "+t.siteTitle),React.createElement("a",{className:"Ecommerce_SetupVendor_Link",href:""+n},React.createElement("button",{className:"Ecommerce_SetupVendor_Button",style:{width:"max-content"}},t?.text?t.text:"Begin"))):null)};export default Module;