function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{beginStream,endStream,updateStreamConfigRequest,requestStreamingPermissions}from"../../utility/streaming";import{checkSignedIn,logout}from"../../utility/onboarding/SignIn";import{v4 as uuidv4}from"uuid";import ManagerStyles from"./Manager.module.scss";import StreamManager from"/layout/StreamManager";const generateBackground=(e={})=>{var t=e?.palette??["#39e662","#71d1ff","#f371ff","#ee5252","#9a74ff","#4defc9"],a=Math.floor(Math.random()*t.length);let r=0;for(;a==(r=Math.floor(Math.random()*t.length)););return`linear-gradient(${Math.floor(360*Math.random())}deg, ${t[a]} 0%, ${t[r]} 100%)`},Module=s=>{let[,t]=React.useState(null);const[a,r]=React.useState(!1),[e,n]=React.useState(null),[c,u]=React.useState(!1),[i,l]=React.useState(!1),[D,o]=React.useState(null),[N,m]=React.useState(null),[d,g]=React.useState(!1),[O,S]=React.useState(!1),[p,f]=React.useState({password:null,private:!1,dates:[],tags:[],input:[]}),[h,B]=React.useState(null),[K,v]=React.useState(null),[R,q]=React.useState([]),[y,k]=React.useState(!1),[U,E]=React.useState(!1),[H,$]=React.useState(!1),[J,_]=React.useState(!1),T=React.useRef(),[b,C]=React.useState(!0),[z,G]=React.useState(Array.from(Array(100).keys()).map(e=>generateBackground(s))),[Q,M]=React.useState(0),w=React.useRef(),P=React.useRef(),F=React.useRef(),L=React.useRef(),I=React.useRef(),j=React.useRef(),A=(React.useEffect(()=>{var e;a||(e=uuidv4(),n(e),r(!0))},[a]),React.useEffect(()=>{s._loggedIn&&!c&&(u(!0),A(!0))},[s._loggedIn,c,h]),async(e=!1,t=!1)=>{try{var a,r,n;d||(g(!0),S(!0),T.current=setTimeout(()=>{g(!1),S(!1)},1e4),a={stripeSecret:s._stripeSecret,dontForce:e,streamSettings:p,streamingFor:h?.id??null},r=await beginStream(s.apiUrl,s.domainKey,a,checkSignedIn),T.current&&clearTimeout(T.current),r?"disauthenticated"==r?(s._setLoggedIn(!1),s._setStripeSecret(!1),g(!1),S(!1),logout()):"success"==r.status&&(g(!1),S(!1),$(r.canStream),r.askStream&&_(!0),r.upcomingEvents&&(q(r.upcomingEvents),G(r.upcomingEvents.map(e=>generateBackground(s)))),r?.data?.streamForProduct?v(r.data.streamForProduct):v(null),t?s._LocalEventEmitter&&s._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):r.data&&"streaming"==r.data.status&&r.data.stream&&(l(r.data.stream),s?._setCurrentlyStreaming&&s._setCurrentlyStreaming(r.data.stream),V(r.data.stream),r.data.key&&o(r.data.key),r.data.streamTo&&m(r.data.streamTo),r.data.stream.meta&&r.data.stream.meta.streamSettings&&(n=r.data.stream.meta.streamSettings,f(n)),s._LocalEventEmitter)&&s._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"})):(e?g:(s._setPageError("Failed to save begin stream"),g(!1),S))(!1))}catch(e){console.log(e),T.current&&clearTimeout(T.current),g(!1),S(!1)}}),V=e=>{try{e&&(F.current.value=e.title,L.current.value=e.description,I.current.value=e.tags)}catch(e){}};var W=React.useCallback(e=>{A()},[h]);React.useEffect(()=>{p&&X(p)},[e,s._LocalEventEmitter,s.adminPanelState,p]);const X=e=>{e=e||p;w.current&&(w.current.checked=e.private),P.current&&(P.current.value=e.password)};var Y=React.useCallback(e=>{t(null)}),Z=React.useCallback(e=>{var t={...p};t.private=e.currentTarget.checked,f(t)}),ee=React.useCallback(e=>{var t={...p};t.password=e.currentTarget.value,f(t)}),te=React.useCallback(e=>{if(e.currentTarget.getAttribute("modif"))if("yes"==e.currentTarget.getAttribute("modif"))try{(async()=>{var e;d||(g(!0),T.current=setTimeout(()=>{g(!1)},1e4),e={stream:i.id},e=await endStream(s.apiUrl,s.domainKey,e,checkSignedIn),T.current&&clearTimeout(T.current),e?"disauthenticated"==e?(k(!1),s._setLoggedIn(!1),s._setStripeSecret(!1),g(!1),logout()):"success"==e.status&&(k(!1),g(!1),l(!1),s?._setCurrentlyStreaming&&s._setCurrentlyStreaming(!1),o(null),m(null),f({password:null,private:!1,dates:[],tags:[],input:[]}),A(!0),s._LocalEventEmitter)&&s._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):(k(!1),s._setPageError("Failed to end stream"),g(!1)))})()}catch(e){k(!1),T.current&&clearTimeout(T.current),g(!1)}else k(!1);else y||k(!0)});var ae=React.useCallback(e=>{if(b)M("0px"),C(!1);else{C(!0);try{var t=j.current.children[0].clientHeight+(j.current.children[0].marginTop??0)+(j.current.children[0].marginBottom??0);M(t+"px")}catch(e){}}}),re=React.useCallback(e=>{const t=e?.currentTarget?.getAttribute("modif")??null;var a;t&&(e=R.find(e=>e.id===t))&&((a=JSON.parse(JSON.stringify(p))).private=!0,f(a),w.current.checked=!0,B(e),e={title:e?.name,description:e?.detailmeta?.description},f(Object.assign(a,e)))}),ne=React.useCallback(e=>{var t,a=e?.currentTarget?.getAttribute("modif")??"";a&&((t=p)[a]=e.currentTarget.value,f(t))});const x=e=>{F?.current&&e.title&&(F.current.value=e?.title),L?.current&&e?.description&&(L.current.value=e.description),I?.current&&(e?.input?.join&&0<e.input.length?I.current.value=e.input.join(" "):e?.tags?.join&&e.dates?.join&&(I.current.value=e.tags.join(" ")+" "+e.dates.join(" ")),e.streamForProduct)&&!I?.current?.value.match(e.streamForProduct)&&(I.current.value+=" "+e.streamForProduct),P?.current&&e.password&&(P.current.value=e.password),b&&j?.current?.children&&(e=j.current.children[0].clientHeight+(j.current.children[0].marginTop??0)+(j.current.children[0].marginBottom??0),M(e+"px"))};return React.useMemo(()=>{x(p)},[p,F?.current,L?.current,I?.current,d]),React.createElement("div",{className:ManagerStyles.container+" "+s.className},React.createElement(StreamManager,_extends({},s,{backgrounds:z,beginSreaming:W,fetchBusy:d,currentlyStreaming:i,ongoingStreamFor:K,streamChecking:O,streamingFor:h,canStream:H,titleRef:F,descriptionRef:L,myTagsRef:I,updateStreamData:ne,streamSettings:p,moreSettings:b,settingsHeight:Q,moreSettingsContainerRef:j,openMoreSettings:ae,updateTags:e=>{if(e){var t={...p},e=e.currentTarget.value.split(" ");const a=[],r=[];e.map(e=>{isNaN(new Date(e))?r.push(e):a.push(new Date(e))}),t.dates=a,t.tags=r,t.input=e,f(t)}},setPrivate:Z,privateRef:w,upcomingStreams:R,setNextStream:re,askEndStream:y,updatingStreamConfig:U,handleAskEndStream:te,streamTo:N,streamKey:D,setPassword:ee,passwordRef:P,checkStream:A,updateStreamConfigFn:async()=>{try{if(!d){g(!0),E(!0),T.current=setTimeout(()=>{g(!1),E(!1)},1e4);var e={title:F.current&&F.current.value?F.current.value:null,description:L.current&&L.current.value?L.current.value:null,tags:I.current&&I.current.value?I.current.value:null},t={stream:i.id,streamData:e,streamSettings:p},a=await updateStreamConfigRequest(s.apiUrl,s.domainKey,t,checkSignedIn);if(T.current&&clearTimeout(T.current),a){if("disauthenticated"==a)s._setLoggedIn(!1),s._setStripeSecret(!1),g(!1),E(!1),logout();else if("success"==a.status&&(g(!1),E(!1),a.data)&&"streaming"==a.data.status&&(l(a.data.stream),s?._setCurrentlyStreaming&&s._setCurrentlyStreaming(a.data.stream),a.data.key&&o(a.data.key),a.data.streamTo&&m(a.data.streamTo),a.data.stream)&&a.data.stream.meta&&a.data.stream.meta.streamSettings){const r=a.data.stream.meta.streamSettings;f(r),setTimeout(()=>{x(r)},150)}}else s._setPageError("Failed to save begin stream"),g(!1),E(!1)}}catch(e){console.log(e),T.current&&clearTimeout(T.current),g(!1),E(!1)}},handleClearError:Y,handleAskForStreamingPermissions:()=>{try{(async()=>{var e;d||(g(!0),T.current=setTimeout(()=>{g(!1)},1e4),e=await requestStreamingPermissions(s.apiUrl,s.domainKey,checkSignedIn),T.current&&clearTimeout(T.current),e?"disauthenticated"==e?(k(!1),s._setLoggedIn(!1),s._setStripeSecret(!1),g(!1),logout()):"success"==e.status&&(k(!1),g(!1),e?.data?.created&&_(!0),s._LocalEventEmitter)&&s._LocalEventEmitter.dispatch("refetchDefaults",{dispatch:"simple"}):(k(!1),g(!1)))})()}catch(e){T.current&&clearTimeout(T.current),g(!1)}},ManagerStyles:ManagerStyles,didCheckStream:c,didAskStream:J})))};export default Module;