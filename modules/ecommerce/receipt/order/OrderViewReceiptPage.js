import React from"react";import Link from"next/link";const Module=e=>{var t=e["m"];return React.createElement(React.Fragment,null,e.receiptPage&&t?null:React.createElement(React.Fragment,null," - ",React.createElement(Link,{href:`https://${e.domainUrl}/r?o=`+t?.id,style:{display:"flex",alignItems:"center"}},"View",React.createElement("div",{className:"material-icons",style:{fontSize:"1rem",marginLeft:".25rem"}},"receipt"))))};export default Module;