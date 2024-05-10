import React from"react";import resolveConfig,{resolveVariables}from"/app.config";import{WatchPage}from"./streaming/watch";import{SignIn,SignInPage,Username}from"./onboarding/signin/index";import{ProfilePage}from"./profile/index";import{ReceiptPage}from"./ecommerce/receipt";import{CreditCard}from"./payment/index";import{Manager}from"./streaming/manager";import{Feature}from"./search/feature";import{WideFeature}from"./search/wideFeature";import{SliderBasic}from"./indexing";import{useRouter}from"next/router";import{fetchPost,FetchHandler}from"./utility/fetch";import{checkSignedIn}from"./utility/onboarding";import{isObjectEmpty}from"./util";import{Settings}from"./settings";import{Survey}from"./survey";import CustomModules from"/customModules";import PresentationModules from"./presentation";import{EventPage}from"./presentation/events.js/eventPage";import{ArticlePage}from"./article";import{ProductPage}from"./ecommerce/product";const resolveComponent=e=>{let r;if(e.type)switch(e.type){case"WatchPage":return React.createElement(WatchPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SignIn":return React.createElement(SignIn,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SignInPage":return React.createElement(SignInPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ProfilePage":return React.createElement(ProfilePage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ProductPage":return React.createElement(ProductPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"EventPage":return React.createElement(EventPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ReceiptPage":return React.createElement(ReceiptPage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"ArticlePage":return React.createElement(ArticlePage,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"CreditCard":return React.createElement(CreditCard,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Streaming_Manager":return React.createElement(Manager,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Onboarding_SignIn_Username":return React.createElement(Username,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Feature":return React.createElement(Feature,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"WideFeature":return React.createElement(WideFeature,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"SliderBasic":return React.createElement(SliderBasic,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"FetchHandler":return React.createElement(FetchHandler,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Survey":return React.createElement(Survey,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"Settings":return React.createElement(Settings,e.props,e.children&&e.children.map?e.children.map(generateComponent):null);case"CustomModule":if(r="customModule",e?.props&&e.props[r]&&CustomModules&&Object.prototype.hasOwnProperty.call(CustomModules,e.props[r])){var t=CustomModules[e.props[r]];if(t)return React.createElement(t,e.props,e.children&&e.children.map?e.children.map(generateComponent):null)}case"Presentation":if(r="module",e?.props&&e.props[r]&&PresentationModules&&Object.prototype.hasOwnProperty.call(PresentationModules,e.props[r])){t=PresentationModules[e.props[r]];if(t)return React.createElement(t,e.props,e.children&&e.children.map?e.children.map(generateComponent):null)}default:return null}return null},resolvePage=(e,t)=>{return e&&e.temporaryComponents&&e.temporaryComponents.pages?e.temporaryComponents.pages.find(e=>{var r=e.url,r=new RegExp(`^\\${r}(?:\\?.*)?$`);return!!(t&&t==e.url||r.test(t))||!!(global&&global.location&&global.location.pathname&&e.url===global.location.pathname||global&&global.location&&global.location.pathname&&r.test(global.location.pathname))})||{url:t}:null},resolvePageName=e=>"/"!==e?e?.replace?e.replace("/",""):"":"index";function generateComponent(e){if(e){var{type:r,props:t,children:a}=e;if(t?.childrenBefore&&(n=t.childrenBefore&&t.childrenBefore.map(generateComponent),e.props.childrenBefore=[React.createElement(r,t,...n)]),t?.childrenAfter&&(n=t.childrenAfter&&t.childrenAfter.map(generateComponent),e.props.childrenAfter=[React.createElement(r,t,...n)]),"string"==typeof r){var n=resolveComponent(e);if(n)return n;if(a&&a.map)return n=a&&a.map(generateComponent),React.createElement(r,t,...n)}if(r)return r}return e}const resolveDefaults=async(e,r,t,a,n,o,l)=>{o(!0);let i=!1,p={},c={};(c=a&&!isObjectEmpty(a)?a:c).u||(o=null!==r?._loggedIn?.username?r?._loggedIn.username:r?._loggedIn?.identifier??null,c.u=o);a={url:n,params:c,domainKey:t.domainKey};if("/p"!==e||r.profileData&&!l?"/w"!=e||r.watchData&&!l?"/r"==e?(i=!0,a.profileReq=!0,a.receiptReq=!0,(o=checkSignedIn())&&o.identifier&&o.hash&&(a.identifier=o.identifier,a.hash=o.hash)):"/e"===e?(i=!0,a.profileReq=!0,a.eventReq=!0):"/ar"===e?(i=!0,a.profileReq=!0,a.articleReq=!0):"/pr"===e?(i=!0,a.productReq=!0):"/admin"===e&&(i=!0):(i=!0,a.watchReq=!0,a.shopProfileReq=!0):(i=!0,a.profileReq=!0,a.shopProfileReq=!0),r.regionsData||(i=!0,a.regionsReq=!0),!0===i){t.domainKey&&(a.domainKey=t.domainKey),a.from="resolveDefaults";const m=await fetchPost(t.apiUrl+"/m/pagedefaults",null,null,a);m&&m.data&&(p=Object.keys(m.data).reduce((e,r)=>(e[r]=m.data[r],e),p))}return p._loggedIn=checkSignedIn(),p},handlePropsPriority=(e,r)=>{var t,a=isObjectEmpty(e)?r:e;for(const n in a)n.startsWith("_")&&(t=Object.getOwnPropertyDescriptor(a,n))&&t.writable&&(a[n]=r[n]);return a},basicError={error:"failed",code:404},getServerSidePropsDefault=async(e,r,t={},a)=>{var n={props:{data:{},profileData:null,params:{},resolvedDefinition:null,path:null,log:"",error:""}},o=resolveVariables(),l=resolveConfig(o),l=resolvePage(l,e.req.url);n.props.path=e.req.url;const i={url:e.req.url,params:e.query,domainKey:o.domainKey,serverReq:!0};let p=!1;if(l&&"/p"===l.url?(p=!0,i.profileReq=!0,i.shopProfileReq=!0):l&&"/w"===l.url?(p=!0,i.watchReq=!0,i.shopProfileReq=!0):l&&"/e"===l.url?(p=!0,i.profileReq=!0,i.eventReq=!0):l&&"/ar"===l.url?(p=!0,i.profileReq=!0,i.articleReq=!0):l&&"/pr"===l.url?(p=!0,i.productReq=!0):l&&"/admin"===l.url?p=!0:l&&l.url.match("/documentation")&&(p=!0,i.documentationReq=!0),l&&l.data&&(n.props.resolvedDefinition=l.data),r)for(let e=0;e<r.length;e++)p=!0,i[r[e]+"Req"]=!0;a&&(p=!0);let c;return Object.entries(t).map(e=>{i.params[e[0]]=e[1]}),p&&(o.domainKey&&(i.domainKey=o.domainKey),i.from="getServerSidePropsDefault",c=await fetchPost(o.apiUrl+"/m/pagedefaults",null,null,i))&&c.data&&(n.props=Object.keys(c.data).reduce((e,r)=>(e[r]=c.data[r],e),n.props)),e&&e.query&&(n.props.params=e.query),p&&(!c||c&&"failed"===c.status)&&(n.props.error=basicError),n},getPropDefaults=async(e,r,t,a={})=>{var n=resolveVariables();resolveConfig(n);if(Array.isArray(t)&&0<t.length){var o={url:r.req.url,params:Object.assign(r.query,a),domainKey:n.domainKey,serverReq:!0};for(let e=0;e<t.length;e++)o[t[e]+"Req"]=!0;o.from="getPropDefaults";const l=await fetchPost(n.apiUrl+"/m/pagedefaults",null,null,o);return l&&l.data&&(e.props=Object.keys(l.data).reduce((e,r)=>(e[r]=l.data[r],e),e.props)),e}return{}},extractAccurateQueryParams=e=>{var r,t,e=e.split("?")[1],a={};for([r,t]of new URLSearchParams(e))a[r]=t;return a};export{basicError,extractAccurateQueryParams,generateComponent,getServerSidePropsDefault,getPropDefaults,handlePropsPriority,resolveComponent,resolveDefaults,resolvePage,resolvePageName};