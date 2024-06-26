import{fetchPost}from"/modules/utility/fetch/fetch.js";import{logout}from"/modules/utility/onboarding/SignIn.js";const beginStream=async(t,e,r,i)=>{i=i();if(i&&i.identifier&&i.hash){e={cus_id:r.stripeSecret.user,dontForce:r.dontForce,streamSettings:r.streamSettings,domainKey:e,hash:i.hash,identifier:i.identifier,streamingFor:r?.streamingFor},i=await fetchPost(t+"/m/beginstream",null,null,e);if(i&&i.hasOwnProperty("status")){if("disauthenticated"==i.status)return logout(),"disauthenticated";if("failed"==i.status)return!1;if("success"==i.status)return i}}return!1},endStream=async(t,e,r,i)=>{i=i();if(i&&i.identifier&&i.hash){r={stream:r.stream,domainKey:e,hash:i.hash,identifier:i.identifier},e=await fetchPost(t+"/m/endstream",null,null,r);if(e&&e.hasOwnProperty("status")){if("disauthenticated"==e.status)return logout(),"disauthenticated";if("failed"==e.status)return!1;if("success"==e.status)return e}}return!1},doFetchAuthForStream=async(t,e,r,i)=>{i=i();if(i&&i.identifier&&i.hash){r={stream:r,domainKey:e,hash:i.hash,identifier:i.identifier},e=await fetchPost(t+"/m/getauthforstream",null,null,r);if(e&&e.hasOwnProperty("status")){if("disauthenticated"==e.status)return logout(),"disauthenticated";if("failed"==e.status)return!1;if("success"==e.status)return e}}return!1},updateStreamConfigRequest=async(t,e,r,i)=>{i=i();if(i&&i.identifier&&i.hash){r={stream:r.stream,streamData:r.streamData,streamSettings:r.streamSettings,domainKey:e,hash:i.hash,identifier:i.identifier},e=(console.log(r),await fetchPost(t+"/m/updatestreamconfig",null,null,r));if(e&&e.hasOwnProperty("status")){if("disauthenticated"==e.status)return logout(),"disauthenticated";if("failed"==e.status)return!1;if("success"==e.status)return e}}return!1},requestStreamingPermissions=async(t,e,r)=>{r=r();if(r&&r.identifier&&r.hash){e={domainKey:e,hash:r.hash,identifier:r.identifier},r=(console.log(e),await fetchPost(t+"/m/requeststreamingpermissions",null,null,e));if(r&&r.hasOwnProperty("status")){if("disauthenticated"==r.status)return logout(),"disauthenticated";if("failed"==r.status)return!1;if("success"==r.status)return r}}return!1},checkAuthorization=(t,e,r,i)=>{if(t?.meta?.streamSettings){var s=t.meta.streamSettings;if(console.log("Settings",s,e,t,r?._loggedIn?.identifier,t.author),s?.private)return r?._loggedIn?.identifier&&t?.author&&t.author==r._loggedIn.identifier?(i&&i(),!0):!!e?.allowed&&(console.log("relevant ticket",e),i&&i(),!0)}return i&&i(),!0},checkPlayerIsPlaying=t=>{try{return console.log(0<t?.current?.currentTime(),!1===t?.current?.paused(),!1===t?.current?.ended(),2<t?.current?.readyState()),0<t?.current?.currentTime()&&!1===t?.current?.paused()&&!1===t?.current?.ended()&&2<t?.current?.readyState()?!0:!1}catch(t){return console.log(t),!1}};export{beginStream,endStream,doFetchAuthForStream,updateStreamConfigRequest,requestStreamingPermissions,checkAuthorization,checkPlayerIsPlaying};