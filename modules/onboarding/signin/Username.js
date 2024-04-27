import React from"react";import{useRouter}from"next/router.js";import{checkSignedIn,grabUsername}from"../../utility/onboarding/SignIn.js";const registerUsername=t=>{const a=useRouter(),n=a["asPath"];let r=React.useRef(),[e,s]=React.useState(null),[m,o]=React.useState(!0);return React.useEffect(()=>{t._loggedIn?t._loggedIn.username||m?t._loggedIn.username&&m&&o(!1):o(!0):m&&o(!1)},[t._loggedIn,m]),React.createElement("div",{className:""+t.className},t._loggedIn&&!t._loggedIn.username&&m?React.createElement("div",{className:"Username_Container Username_ContainerBg"},React.createElement("div",{className:"Username_ItemsContainer"},React.createElement("div",{className:"Username_PromptContainer"},React.createElement("h4",{style:{margin:0}},t.prompt??"What username do you want?"),React.createElement("span",{style:{margin:"0 auto"}},React.createElement("input",{ref:r,type:"text",placeholder:"Username",className:"simpleTextInput"}),React.createElement("button",{onClick:e=>{(async()=>{var e;r&&r.current&&r.current.value&&(e={proposedUsername:r.current.value},(e=await grabUsername(t.apiUrl,t.domainKey,e,checkSignedIn,t._setLoggedIn))?"disauthenticated"==e?(setLoggedIn(!1),o(!1),s(null)):"username taken"==e?s("Sorry, that username is already taken. Please try another one or contact admin@minipost.app"):(o(!1),s(null),t.redirectOnAuth&&n!==t.redirectOnAuth&&a.push(t.redirectOnAuth),t.setRegistered&&t.setRegistered(!0)):s("Sorry, that username is already taken. Please try another one or contact admin@minipost.app"))})()},style:{borderRadius:"0"}},t.confirm??"Give me that one!"))),e?React.createElement("p",{style:{marginTop:".5rem"}},e):null)):null)};export default registerUsername;