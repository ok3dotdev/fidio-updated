import React from"react";import Link from"next/link";const Module=e=>React.createElement(React.Fragment,null,e._loggedIn&&e.mustBeLoggedIn||!e.mustBeLoggedIn?React.createElement(React.Fragment,null,React.createElement(Link,{href:""+e.href,className:"menuLinkSelector",onClick:e?.handleToggleSettings,style:{position:"relative",alignSelf:"center"}},React.createElement("li",null,React.createElement("div",{className:"material-icons"},e.materialIcon),React.createElement("div",null,e.text)))):null);export default Module;