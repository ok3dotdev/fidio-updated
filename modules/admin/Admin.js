import React from"react";import Script from"next/script";import Link from"next/link";import{v4 as uuidv4}from"uuid";import AdminStyles from"./Admin.module.scss";import BuildAdmin from"./BuildAdmin";import StreamAdmin from"./StreamAdmin";import PostAdmin from"./PostAdmin";import BillingAdmin from"./BillingAdmin";import StorageAdmin from"./StorageAdmin";import InvoiceAdmin from"./InvoiceAdmin";import{SignIn,Username}from"/modules/onboarding/signin/index.js";import{isObjectEmpty}from"/modules/util";import{Banner}from".";import customAdmin from"/customModules/admin";const Module=e=>{const[t,n]=React.useState(!1),[,i]=React.useState(null);var[,,]=React.useState(!1);const[l,a]=React.useState(null),m={BuildAdmin:["full"],StreamAdmin:["full","administrative"],PostAdmin:["full","administrative","marketing","writer"],BillingAdmin:["full","administrative"],StorageAdmin:["full","administrative","marketing","writer"],InvoiceAdmin:["full","administrative"]};var c=(e,t)=>!!(t?.adminc?.access&&-1<m[e].indexOf(t.adminc.access));React.useEffect(()=>{var e;t||(e=uuidv4(),i(e),n(!0))},[t]);const r=React.useCallback(async e=>{let t=e?.target?.getAttribute("modif");(t=!t&&e?.children&&e?.children[0]?e?.children[0]?.getAttribute("modif"):t)&&a(t)});console.log(l,e);var o=!e||!e._loggedIn||isObjectEmpty(e?._loggedIn)||!e?._loggedIn.identifier,d=e?._adminAuth?.adminc?.admin&&e?._loggedIn;console.log(d);return React.createElement("div",{className:`${e.className} ${AdminStyles.container} Admin_Container`},React.createElement(Script,{src:"https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.min.js"}),React.createElement("link",{href:"https://d2zsu4v7czjhvo.cloudfront.net/all/quill/1.3.6/quill.snow.css",rel:"stylesheet"}),e?._LocalEventEmitter?React.createElement("div",{className:o&&!d?"simpleCenter":""},React.createElement(SignIn,e),React.createElement(Username,e)):null,d?React.createElement("div",{className:AdminStyles.internalContainer+" Admin_InternalContainer"},React.createElement(Banner,e),React.createElement("div",{className:AdminStyles.bodyContainer+" Admin_BodyContainer"},React.createElement("div",null,React.createElement("ul",{className:AdminStyles.adminMenuContainer+" Admin_MenuContainer"},c("StreamAdmin",e._adminAuth)?React.createElement("li",null,React.createElement("button",{onClick:r,modif:"stream"},"Stream")):null,c("PostAdmin",e._adminAuth)?React.createElement("li",null,React.createElement("button",{onClick:r,modif:"post"},"Post")):null,c("StorageAdmin",e._adminAuth)?React.createElement("li",null,React.createElement("button",{onClick:r,modif:"storage"},"Storage")):null,c("BuildAdmin",e._adminAuth)?React.createElement("li",null,React.createElement("button",{onClick:r,modif:"build"},"Build")):null,c("BillingAdmin",e._adminAuth)?React.createElement("li",null,React.createElement("button",{onClick:r,modif:"billing"},"Billing")):null,c("InvoiceAdmin",e._adminAuth)?React.createElement("li",null,React.createElement("button",{onClick:r,modif:"invoice"},"Invoicing")):null,React.createElement("li",null,React.createElement("button",null,React.createElement(Link,{href:"https://tv.tycoon.systems/documentation"},"Documentation")))),0<Object.entries(customAdmin).length?React.createElement("ul",{className:`${AdminStyles.adminMenuContainer} ${AdminStyles.adminMenuContainerCustom} Admin_MenuContainerCustom`},Object.entries(customAdmin).map((e,t)=>React.createElement("li",null,React.createElement("button",{onClick:r,modif:e[0]},e[0]?.slice(1,e[0].length)&&1<e[0]?.length?e[0].charAt(0).toUpperCase()+e[0].slice(1,e[0].length):e[0])))):null),React.createElement("div",{className:AdminStyles.contentBodyContainer+" Admin_ContentBodyContainer"},l?"build"===l&&c("BuildAdmin",e._adminAuth)?React.createElement("div",null,React.createElement(BuildAdmin,e)):"stream"===l&&c("StreamAdmin",e._adminAuth)?React.createElement("div",null,React.createElement(StreamAdmin,e)):"post"===l&&c("PostAdmin",e._adminAuth)?React.createElement("div",null,React.createElement(PostAdmin,e)):"billing"===l&&c("BillingAdmin",e._adminAuth)?React.createElement("div",null,React.createElement(BillingAdmin,e)):"storage"===l&&c("StorageAdmin",e._adminAuth)?React.createElement("div",null,React.createElement(StorageAdmin,e)):"invoice"===l&&c("InvoiceAdmin",e._adminAuth)?React.createElement("div",null,React.createElement(InvoiceAdmin,e)):-1<Object.entries(customAdmin).findIndex(e=>e[0]===l)?(o=Object.entries(customAdmin).find(e=>e[0]===l))&&o[1]&&"function"==typeof o[1]?(o=o[1],React.createElement(o,e)):React.createElement("div",null):null:null))):null)};export default Module;