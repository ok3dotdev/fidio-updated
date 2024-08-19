function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,o=arguments[t];for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}import React from"react";import{v4 as uuidv4}from"uuid";import apiReq from"/modules/utility/api/apiReq";import WatchPageStyles from"/modules/streaming/watch/WatchPage.module.scss";import{ReadComment}from".";import{submitPost}from"/modules/utility/utility/comment";const Module=l=>{const[e,a]=React.useState(!1),[,t]=React.useState(!1),[o,c]=React.useState(null),[i,r]=React.useState(!1),[,m]=React.useState(-1),[s,n]=React.useState(null),[d,u]=React.useState([]),[p,w]=React.useState(0),[h,R]=React.useState(null),[f,g]=React.useState(null),v=(l?.pipe&&(l._LocalEventEmitter.unsubscribe(l.pipe),l._LocalEventEmitter.subscribe(l.pipe,e=>{if(e&&"comment_published"===e.dispatch&&e?.comment){var t,a,o,s=[...d];const n=e?.comment?.meta?.opId;n?-1<(t=d.findIndex(e=>e.id===n))&&(s[t].replies||(s[t].replies=[]),(a=[...s[t].replies]).push(e.comment),(o={...s[t]}).replies=a,s[t]=o):s.unshift(e.comment),e.comment?.meta?.opId&&l._LocalEventEmitter.dispatch(e.comment.meta.opId,{dispatch:"comment_published",comment:e.comment}),u(s)}})),l._LocalEventEmitter.unsubscribe(s),l._LocalEventEmitter.subscribe(s,e=>{var t,a,o,s,n;e&&"scroll_window"===e.dispatch&&(e=document.body,o=document.documentElement,n=e?.scrollHeight??0,e=e?.offsetHeight??0,t=o?.clientHeight??0,a=o?.scrollHeight??0,o=o?.offsetHeight??0,s=window?.scrollY+window?.innerHeight,n=Math.max(n,e,t,a,o),i||n-(window?.innerHeight<450?window.innerHeight/2:600)<s&&(console.log(f,window?.scrollY),null===f||f?.scrollY>window?.scrollY+50||f?.scrollY<window?.scrollY-50)&&(g({scrollX:window?.scrollX,scrollY:window?.scrollY}),e=p+25,w(e),r(!0),v(l.watchData.id,e)))}),React.useEffect(()=>{if(!e){const t=uuidv4();window.addEventListener("scroll_window",function(e){l._LocalEventEmitter.dispatch(t,{dispatch:"scroll_window"})}),g({scrollX:window?.scrollX,scrollY:window?.scrollY}),n(t),a(!0)}},[e]),React.useEffect(()=>{i||l?.watchData?.id&&l.watchData.id!==o&&(r(!0),t(!0),v(l.watchData.id,p))},[l?.watchData?.id,i,o]),async(e,t,a,o)=>{try{c(e);var s,n=await apiReq("/p/getposts",{apiUrl:l?.apiUrl,id:e,offset:t,par:a,parentOffset:o});n?.data?(m((new Date).getTime()),r(!1),0<t&&!a&&!o?(s=[...d].concat(n.data),u(s)):u(n.data)):(r(!1),R({dispatch:"error",message:n?.message??"Failed to get posts"}))}catch(e){r(!1)}});var E=React.useCallback(e=>{R(null)});const b=React.useCallback((e,t,a,o,s,n)=>{console.log("Handle Post",e,t);var c=l?.commentUseParent??"",i=l?.commentUseParentType??"";submitPost(e,l,t,a,c,i,o,s,n)});var y=React.useMemo(()=>d.map((e,t)=>React.createElement("div",{key:t},React.createElement(ReadComment,_extends({},l,{commentData:e,i:t,handlePost:b,sub:e})))),[d]);return React.createElement("div",{className:l.className+" AddComment_Container"},d?.map?React.createElement("div",{className:`${WatchPageStyles.readCommentsListContainer} ${WatchPageStyles.readCommentsListContainerOp} Post_ReadCommentsListContainer`},y):null,React.createElement("div",{className:"spinner spinnerBig "+(i?"opacity1 spinnerRelative":"opacity0 spinnerHide"),style:{marginTop:i?"1rem":0}}),h?React.createElement("div",{className:"error CommentForceNoBlur",style:{margin:".25rem",marginBottom:"0"},onClick:E},h.message):null)};export default Module;