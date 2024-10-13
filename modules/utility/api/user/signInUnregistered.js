import{fetchPost}from"/modules/utility/fetch";import{resolveVariables}from"../../../../app.config";import{updateCart}from"/modules/utility/ecommerce/ecommerce.js";import{_LocalEventEmitter}from"/modules/events/LocalEventEmitter";import{checkSignedIn,updateLocalLoginSession}from"/modules/utility/onboarding/SignIn";import{setStripeSecretData}from"../../payment";export default async function handler(e){if(!e||checkSignedIn())return!1;var t=e.props;t.setFetchBusy(!0);try{var a={email:e.email,password:e?.password??null,username:e?.username??null,firstName:e.firstName,lastName:e.lastName,unregistered:!0,signIn:e?.signIn??null,register:e?.register??null},r=await fetchPost(resolveVariables()?.apiUrl+"/m/authenticate",null,null,a);if("success"===r?.status&&r?.data){if(t.setFetchBusy(!1),_LocalEventEmitter&&_LocalEventEmitter.dispatch("completeSignIn",{data:r.data}),_LocalEventEmitter&&r?.newUser){var n={event:"newUser",data:r.data};_LocalEventEmitter.dispatch("scheduleMail",n);try{window.dispatchEvent(new CustomEvent("global_event",{detail:Object.assign({},n)}))}catch(e){}}var i={identifier:r.data.identifier,username:r.data.username,email:r.data.email,icon:r.data.icon,hash:r.data.hash,vendor:r.data.vendor??null,icon:r.data.icon,meta:r.data.meta},s=(r.data.plan&&(i.plan=r.data.plan),i.admin=null,updateLocalLoginSession(i),new CustomEvent("mute-login-error",{detail:!0}));document.dispatchEvent(s);let e;return t&&(e=await setStripeSecretData(t.apiUrl,t.domainKey,i,t._setStripeSecret),t._setLoggedIn(i)),{user:i,stripeSecret:e,stripeSecret:e}}return t.setFetchBusy(!1),e?.setPageError&&e.setPageError(r?.error?.message??"Something went wrong"),!1}catch(e){return t.setFetchBusy(!1),!1}}