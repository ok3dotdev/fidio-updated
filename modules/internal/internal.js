function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}import React from"react";import io from"socket.io-client";import{SocketContainer}from"/modules/socket";import{resolveVariables}from"/app.config";import{checkSignedIn,checkUserData,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{handleRouteChange,registerCheckLocalStorageSize,registerCheckMobile,registerProxyConsoleLog}from"/modules/util";import{useRouter}from"next/router";import{forceUpdateProps,handleCheckUserData,handleGlobalEvent,handleSetCart,handleSetLoggedIn,registerSocket,toggleSingleOpenMenu}from"/modules/utility/_app";import{UseMiddleware}from"../../customModules/middleware";import{DeveloperHelp}from".";import{GoogleGsiClient,GoogleSignInRegister}from"/modules/internal/localImports";const CHECK_HANDLE_USER_DATA_THRESHOLD=18e5,Internal=e=>{const[t,o]=React.useState(!1),[n,i]=React.useState(!1);var[a,r]=React.useState(!1);const[l,s]=React.useState(!1);var[c,g]=React.useState(null);const[d,u]=React.useState({}),[m,_]=React.useState({}),[p,f]=React.useState(!1);var[E,S]=React.useState({});const[h,R]=React.useState(!1),[v,b]=React.useState(null);var[I,C]=React.useState(!1),[L,y]=React.useState(!1);const[w,k]=React.useState(-1);let M=Object.assign({},e);const O=useRouter();try{registerCheckLocalStorageSize(window),registerCheckMobile(window),registerProxyConsoleLog(window)}catch(e){}React.useEffect(()=>{var e;t?(e=window.mobileCheck(),R(e)):o(!0)},[t]),React.useEffect(()=>{document.addEventListener("mute-login-error",()=>{s(null)},{once:!0})},[]);const D=async()=>{handleSetLoggedIn(M,checkSignedIn,i);var e=await handleCheckUserData(M,n);M&&n&&w<(new Date).getTime()-CHECK_HANDLE_USER_DATA_THRESHOLD&&e&&(k((new Date).getTime()),(async(e,t)=>{e=await checkUserData(e,t);if(e){t=Object.assign({},n);if(console.log(e,t),e.identifier&&e.username&&e.hash)return t.username=e.username,t.hash=e.hash,t.identifier=e.identifier,t.ip=e.ip,t.meta||(t.meta={}),e.ip&&(t.meta.ip=e.ip),e.location&&(t.meta.location=e.location),e.locationMeta&&(t.meta.locationMeta=e.locationMeta),console.log(t),updateLocalLoginSession(t),!i(t)}})(M,e))};React.useEffect(()=>{D()},[n,M._loggedIn]);React.useEffect(()=>{handleSetCart(n,_)},[n]),M._LocalEventEmitter=_LocalEventEmitter,M._loggedIn=n,M._setLoggedIn=i,M._stripeSecret=a,M._setStripeSecret=r,M._loginError=l,M._setLoginError=s,M._pageError=c,M._setPageError=g,M._toggleSingleOpenMenu=(e,t,o)=>{toggleSingleOpenMenu(e,t,d,u,o)},M._openMenu=d,M._setOpenMenu=u,M._cart=m,M._rooms=E,M._isMobile=h,M._adminAuth=v,M._setAdminAuth=b,M._managerOpen=I,M._setManagerOpen=C,M._currentlyStreaming=L,M._setCurrentlyStreaming=y,M.fetchBusy=p,M.setFetchBusy=f;e=resolveVariables();M._configVariables=e,M=Object.assign(resolveVariables(),M),_LocalEventEmitter.unsubscribe("forceUpdateProps"),_LocalEventEmitter.subscribe("forceUpdateProps",e=>{forceUpdateProps(e,_)}),_LocalEventEmitter.unsubscribe("global_event"),_LocalEventEmitter.subscribe("global_event",async e=>{handleGlobalEvent(e,M,p,f)}),_LocalEventEmitter.unsubscribe("attemptInitializeGoogle"),_LocalEventEmitter.subscribe("attemptInitializeGoogle",async e=>{A()});const U=e=>{e=new CustomEvent("thirdparty-signin",{detail:e});document.dispatchEvent(e)},A=(t=250)=>{try{return(!window||window&&!window.googleInitialized)&&M.googleClientId&&(google.accounts.id.initialize({client_id:M.googleClientId,callback:U,use_fedcm_for_prompt:!0}),window.googleInitialized=!0,console.log("Google Loaded")),!0}catch(e){setTimeout(()=>{A(2*t)},t)}},[G,x]=(React.useEffect(()=>{console.log,M?._loggedIn?.admin&&!v&&M?.dborigin&&M?._loggedIn?.admin.origin&&M.dborigin===M._loggedIn.admin.origin&&M._loggedIn.admin?.userid&&M?._loggedIn?.identifier&&M._loggedIn.admin.userid===M._loggedIn.identifier?b(M._loggedIn.admin):(!v?.userid||!M?._loggedIn||M?._loggedIn&&!M._loggedIn.identifier||v?.userid&&M?._loggedIn?.identifier&&v.userid!==M._loggedIn.identifier||!M?._adminAuth?.origin||!M?.dborigin||M?._adminAuth?.origin&&M.dborigin&&M._adminAuth.origin!==M.dborigin)&&b(null)},[M._loggedIn,v]),React.useState(null)),[H,P]=React.useState(null);return React.useEffect(()=>{registerSocket(io,G,x,H,M,P)},[G,H]),React.useEffect(()=>{const e=(e,t)=>{handleRouteChange(M,e,t)};return O.events.on("routeChangeComplete",e),()=>{O.events.off("routeChangeComplete",e)}},[O.events,M._loggedIn,M.apiUrl,M.domainKey]),M._socket=G,console.log("Socket",G,M),React.createElement("div",null,React.createElement("div",{version:"0.5.64",system:"Tycoon Systems Corp.",style:{display:"none"}}),M?.googleClientId?React.createElement("div",null,GoogleGsiClient,GoogleSignInRegister(M.googleClientId)):null,React.createElement(SocketContainer,_extends({_socket:G,setRooms:S},M)),React.createElement("div",{className:p?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement(UseMiddleware,_extends({},M,{_socket:G})),M?.dev?React.createElement(DeveloperHelp,M):null)};export default Internal;