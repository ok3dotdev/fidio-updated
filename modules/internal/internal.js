function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}import React from"react";import io from"socket.io-client";import{SocketContainer}from"/modules/socket";import{resolveVariables}from"/app.config";import{checkSignedIn,checkUserData,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{handleRouteChange,registerCheckLocalStorageSize,registerCheckMobile,registerProxyConsoleLog}from"/modules/util";import{useRouter}from"next/router";import{forceUpdateProps,handleCheckUserData,handleGlobalEvent,handleSetCart,handleSetLoggedIn,registerSocket,toggleSingleOpenMenu}from"/modules/utility/_app";import{UseMiddleware}from"../../customModules/middleware";import{DeveloperHelp}from".";import{GoogleGsiClient,GoogleSignInRegister}from"/modules/internal/localImports";const CHECK_HANDLE_USER_DATA_THRESHOLD=18e5,Internal=e=>{const[t,o]=React.useState(!1),[n,i]=React.useState(!1);var[a,r]=React.useState(!1);const[l,s]=React.useState(!1);var[c,g]=React.useState(null);const[d,u]=React.useState({}),[m,_]=React.useState({}),[p,f]=React.useState(!1);var[E,h]=React.useState({});const[S,v]=React.useState(!1),[R,b]=React.useState(null);var[I,C]=React.useState(!1),[w,y]=React.useState(!1);const[L,k]=React.useState(-1);let O=Object.assign({},e);const M=useRouter();try{registerCheckLocalStorageSize(window),registerCheckMobile(window),registerProxyConsoleLog(window)}catch(e){}React.useEffect(()=>{var e;t?(e=window.mobileCheck(),v(e)):o(!0)},[t]),React.useEffect(()=>{document.addEventListener("mute-login-error",()=>{s(null)},{once:!0})},[]);const D=async()=>{handleSetLoggedIn(O,checkSignedIn,i);var e=await handleCheckUserData(O,n);O&&n&&L<(new Date).getTime()-CHECK_HANDLE_USER_DATA_THRESHOLD&&e&&(k((new Date).getTime()),(async(e,t)=>{e=await checkUserData(e,t);if(e){t=Object.assign({},n);if(console.log(e,t),e.identifier&&e.username&&e.hash)return t.username=e.username,t.hash=e.hash,t.identifier=e.identifier,t.ip=e.ip,t.meta||(t.meta={}),e.ip&&(t.meta.ip=e.ip),e.location&&(t.meta.location=e.location),e.locationMeta&&(t.meta.locationMeta=e.locationMeta),console.log(t),updateLocalLoginSession(t),!i(t)}})(O,e))};React.useEffect(()=>{D()},[n,O._loggedIn]);React.useEffect(()=>{handleSetCart(n,_)},[n]),O._LocalEventEmitter=_LocalEventEmitter,O._loggedIn=n,O._setLoggedIn=i,O._stripeSecret=a,O._setStripeSecret=r,O._loginError=l,O._setLoginError=s,O._pageError=c,O._setPageError=g,O._toggleSingleOpenMenu=(e,t,o)=>{toggleSingleOpenMenu(e,t,d,u,o)},O._openMenu=d,O._setOpenMenu=u,O._cart=m,O._rooms=E,O._isMobile=S,O._adminAuth=R,O._setAdminAuth=b,O._managerOpen=I,O._setManagerOpen=C,O._currentlyStreaming=w,O._setCurrentlyStreaming=y,O.fetchBusy=p,O.setFetchBusy=f;e=resolveVariables();O._configVariables=e,O=Object.assign(resolveVariables(),O),_LocalEventEmitter.unsubscribe("forceUpdateProps"),_LocalEventEmitter.subscribe("forceUpdateProps",e=>{forceUpdateProps(e,_)}),_LocalEventEmitter.unsubscribe("global_event"),_LocalEventEmitter.subscribe("global_event",async e=>{handleGlobalEvent(e,O,p,f);try{window&&window.dispatchEvent(new CustomEvent("global_event",{detail:Object.assign({},e)}))}catch(e){}}),_LocalEventEmitter.unsubscribe("attemptInitializeGoogle"),_LocalEventEmitter.subscribe("attemptInitializeGoogle",async e=>{A()});const U=e=>{e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)},A=(t=250)=>{try{return(!window||window&&!window.googleInitialized)&&O.googleClientId&&(google.accounts.id.initialize({client_id:O.googleClientId,callback:U,use_fedcm_for_prompt:!0}),window.googleInitialized=!0,console.log("Google Loaded")),!0}catch(e){setTimeout(()=>{A(2*t)},t)}},[G,x]=(React.useEffect(()=>{console.log,O?._loggedIn?.admin&&!R&&O?.dborigin&&O?._loggedIn?.admin.origin&&O.dborigin===O._loggedIn.admin.origin&&O._loggedIn.admin?.userid&&O?._loggedIn?.identifier&&O._loggedIn.admin.userid===O._loggedIn.identifier?b(O._loggedIn.admin):(!R?.userid||!O?._loggedIn||O?._loggedIn&&!O._loggedIn.identifier||R?.userid&&O?._loggedIn?.identifier&&R.userid!==O._loggedIn.identifier||!O?._adminAuth?.origin||!O?.dborigin||O?._adminAuth?.origin&&O.dborigin&&O._adminAuth.origin!==O.dborigin)&&b(null)},[O._loggedIn,R]),React.useState(null)),[H,P]=React.useState(null);return React.useEffect(()=>{registerSocket(io,G,x,H,O,P)},[G,H]),React.useEffect(()=>{const e=(e,t)=>{handleRouteChange(O,e,t)};return M.events.on("routeChangeComplete",e),()=>{M.events.off("routeChangeComplete",e)}},[M.events,O._loggedIn,O.apiUrl,O.domainKey]),O._socket=G,console.log("Socket",G,O),React.createElement("div",null,React.createElement("div",{version:"0.5.91",system:"Tycoon Systems Corp.",style:{display:"none"}}),O?.googleClientId?React.createElement("div",null,GoogleGsiClient,GoogleSignInRegister(O.googleClientId)):null,React.createElement(SocketContainer,_extends({_socket:G,setRooms:h},O)),React.createElement("div",{className:p?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement(UseMiddleware,_extends({},O,{_socket:G})),O?.dev?React.createElement(DeveloperHelp,O):null)};export default Internal;