import React from"react";import{createMarkup}from"./utility";const Module=e=>React.createElement(React.Fragment,null,e?.articleData&&e?.articleData?.approved?React.createElement("div",null,React.createElement("div",{dangerouslySetInnerHTML:{__html:createMarkup(e.articleData)},ref:e?.htmlRef??null})):null);export default Module;