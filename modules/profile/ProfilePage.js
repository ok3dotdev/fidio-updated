function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import{Profile}from"/layout";import ManagerStyles from"../streaming/manager/Manager.module.scss";const OPEN_PANEL_OFFSET=1e3,Module=a=>{const e=useRouter()["query"],[t,r]=React.useState(!1),[,o]=React.useState({}),[i,,]=React.useState([]),[n,s]=React.useState([]),[c,l]=React.useState([]),[u,d]=React.useState(!1),[m,p]=React.useState(!1);var f=React.useRef(),g=(a._LocalEventEmitter.unsubscribe("profilePage"),a._LocalEventEmitter.subscribe("profilePage",e=>{e&&e.dispatch&&"openAdminPanel"===e.dispatch&&(d(!0),a._setManagerOpen(!0),"stream"===e?.menu&&a._LocalEventEmitter.dispatch("manager",{dispatch:"setMenu",menu:"stream"}),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},1500))}),React.useEffect(()=>{a.profileData||!a._loggedIn||m||(p(!0),a._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}))},[a?._loggedIn,a?.profileData,m]),React.useEffect(()=>{t||("openbeginstream"!==e?.a&&"golive"!==e?.a||setTimeout(()=>{d(!0),a._setManagerOpen(!0),a._LocalEventEmitter.dispatch("manager",{dispatch:"setMenu",menu:"stream"}),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},1500)},OPEN_PANEL_OFFSET),r(!0))},[t]),React.useEffect(()=>{var e,t;a?.profileData?.currentLive?(o(a.profileData.currentLive),s([a.profileData.currentLive].concat(i))):a?.profileData?.currentLive||(-1<(t=(e=[...i]).findIndex(e=>e?.author===a?.profileData?.user?.id&&"live"===e?.status))&&e.splice(t,1),o({}),s(e))},[a.profileData,i]),React.useEffect(()=>{a?.videoData?.videos&&l(a.videoData.videos)},[a?.videoData?.videos]),a._loggedIn&&a._loggedIn.identifier&&a.profileData&&a.profileData.user&&a.profileData.user.id&&a._loggedIn.identifier===a.profileData.user.id),v=React.useCallback(e=>{let t=u;t?t=!1:(t=!0,setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},1500)),d(t),a._setManagerOpen(t)},[u]);return React.useEffect(()=>{!1===a._managerOpen&&!0===u&&a._setManagerOpen(!0)},[u,a._managerOpen]),console.log("Profile",a),React.createElement("div",{className:""+a.className},React.createElement(Profile,_extends({},a,{adminAuth:g,combinedFeed:n,videoCombinedFeed:c,adminPanelState:u,toggleAdminPanel:v,adminPanelContainerRef:f,ManagerStyles:ManagerStyles})))};export default Module;