import{fetchPost}from"../utility/fetch/fetch";import{logout}from"/modules/utility/onboarding/SignIn.js";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";const inviteFriend=async(t,i,e,n)=>{if(e.identifier&&e.hash&&n?.email){i={domainKey:i,data:n,hash:e.hash,identifier:e.identifier},n=await fetchPost(t+"/m/invitefriend",null,null,i);if(n&&n.hasOwnProperty("status")){if("disauthenticated"==n.status)return logout(),"disauthenticated";if("failed"==n.status)return!1;if("success"==n.status)return n}}return!1};export{inviteFriend};