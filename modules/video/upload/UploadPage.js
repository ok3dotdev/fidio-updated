function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import apiReq from"/modules/utility/api/apiReq";import{v4 as uuidv4}from"uuid";import{ensureAutoPlay}from"/modules/video/player/utility";import{initializePlayer}from"/modules/streaming/watch/runtime/initialize";import{checkiOS,debounce,resolveNestedProperty}from"/modules/util";import Upload from"/modules/video/upload/class/Upload";import{fetchVideos}from"/modules/video/upload/tools";import UploadVideo from"/layout/upload/UploadVideo";const ASSOCIATE_RECORDS=["product","video","article"],ASSOCIATION_METHODS=["authorize","related"],Module=c=>{const[e,t]=React.useState(null),[a,r]=React.useState(!1),[o,i]=React.useState(null),[s,n]=React.useState(null),[l,d]=React.useState(null),[u,p]=React.useState(!1),[m,R]=React.useState(!1),[f,S]=React.useState(!1),[g,h]=React.useState(!1),[v,y]=React.useState(null),[A,E]=React.useState(20),[O,z]=React.useState(!1);var[L,k]=React.useState(ASSOCIATE_RECORDS[0]);const[b,N]=React.useState(10);var[q,F]=React.useState(ASSOCIATION_METHODS[0]);const[C,_]=React.useState([]),[H,j]=React.useState({message:""}),[I,$]=React.useState({action:"page_loaded",trying:"play_video",src:""}),D=React.useRef(),P=React.useRef();var B=React.useRef(),W=React.useRef();React.useEffect(()=>{var e;a||(e=uuidv4(),i(e),r(!0))},[a,o,f]),c._LocalEventEmitter.unsubscribe(o),c._LocalEventEmitter.subscribe(o,e=>{var t;e&&("fetchVideos"===e.dispatch?A<100&&(t=A+20,E(t),T(0,t)):"initializeVideosHandler"===e.dispatch&&G())});const Y=React.useCallback(debounce(e=>{e?.target&&e.target.scrollLeft+e.target.offsetWidth>e.target.scrollWidth-300&&!g&&c._LocalEventEmitter.dispatch(o,{dispatch:"fetchVideos"})},500),[A,g,v]),G=()=>{P?.current&&!O&&(z(!0),P.current.addEventListener("scroll",Y))},T=(React.useEffect(()=>{!c._loggedIn||g||v||(T(0,A),M(ASSOCIATE_RECORDS[0],b))},[c?._loggedIn,g,A]),async(e,t)=>{e=await fetchVideos(c,e,t,h,g,o);e&&y(e)});var J=React.useCallback(e=>{t(null)});const w=(e,t)=>{var a=t??s;const r=checkiOS()?"hls":"mpd";if(t&&t[r]){const i=c.cdn.static+"/video/"+a[r];D.current?V(i,r,D.current):setTimeout(()=>{V(i,r,D.current)},5e3)}},V=(e,t,a)=>{D.current&&(D.current.src({src:e,type:"hls"===t?"application/x-mpegURL":"application/dash+xml"}),ensureAutoPlay(D.current.play,D.current))},U=s=>{let e=s;s instanceof Upload?n(s):(e=new Upload(c._loggedIn.identifier,s),n(e)),e.player||(e.player=D),d(e.getInstance()),setTimeout(()=>{e?.usePayload&&Object.entries(e.usePayload).map(t=>{var a,r,i=document.querySelector(`[selectelement="${o}-${t[0]}"]`);if(i){let e=resolveNestedProperty(s,t[1].path);"date"===t[1].type&&(t=new Date(Number(e)))&&(a=(t.getMonth()+1).toString(),r=t.getDate().toString(),e=`${t.getFullYear()}-${a.padStart(2,"0")}-`+r.padStart(2,"0")),i.value=e}})},150)},x=e=>{var t,a,r;U(e),s?.updatedFields&&(s.updatedFields={}),o&&(f?w(D.current,e):(t=w,e=e,r=checkiOS()?"hls":"mpd",e&&e[r]&&(r=c.cdn.static+"/video/"+e[r],(a={...I}).src=r,$(a),D.current=initializePlayer(c,e,I,"player-"+o,{},D,[],null,null,S,t))))};c._LocalEventEmitter.unsubscribe("uploadUpdate"),c._LocalEventEmitter.subscribe("uploadUpdate",e=>{e?.message&&(-1<["Ready to watch","Began processing video"].indexOf(e.message)&&T(0,A),j({message:e.message})),(e?.record?.id&&s?.getInstance()?.id&&e.record.id===s.getInstance().id||-1<["Video queued for processing","Began processing video"].indexOf(e.message))&&x(e.record)});var K=React.useCallback(e=>{if(e?.currentTarget?.getAttribute("item")){const t=e.currentTarget.getAttribute("item");if(t){const a=v.find(e=>e.id===t);a&&new Promise((e,t)=>{e(R(!0))}).then(()=>{x(a)})}}}),Q=React.useCallback(e=>{R(!1),U(null),s?.updatedFields&&(s.updatedFields={}),p(!1)},[s]);React.useEffect(()=>{!m&&D?.current&&D.current.pause()},[m,D?.current]);var X=React.useCallback(e=>{(async e=>{let t;var a;e&&("publish"===e?t=await s.setPublish(c,!0):"unpublish"===e?t=await s.setPublish(c,!1):"private"===e?t=await s.setPrivate(c,!0):"unprivate"===e?t=await s.setPrivate(c,!1):"update"===e&&(t=await s.setUpdate(c))),t?.id&&(U(t),-1<(a=(e=[...v]).findIndex(e=>e.id===t.id))&&(e[a]=t),y(e))})(e?.currentTarget?.getAttribute("modif"))},[s]);const M=async(e,t)=>{var a=e+"Req",e=(N(t),"product"===e||"article"===e?"created":"creation"),t=await apiReq("/fetch/fetchhandler",{handlerArgs:[{[a]:[{author:c?._loggedIn.identifier,limit:t,offset:0,sortField:e,sort:"desc"}]}]});"success"===t?.status&&t?.data?.fetchedData&&t.data.fetchedData[0]&&t.data.fetchedData[0][a]&&t.data.fetchedData[0][a][0]&&(e=t.data.fetchedData[0][a][0],_(e))};console.log(c,s,f,I,v,C);var Z=0<v?.length?v:Array(20).fill().map(()=>{});return React.createElement("div",null,React.createElement(UploadVideo,_extends({},c,{ASSOCIATE_RECORDS:ASSOCIATE_RECORDS,ASSOCIATION_METHODS:ASSOCIATION_METHODS,handleClearError:J,setPageError:t,pageError:e,setProcessing:p,processing:u,handlingMeta:m,setHandlingMetaProxy:e=>{R(e),f||setTimeout(()=>{D.current=initializePlayer(c,null,I,"player-"+o,{},D,[],null,null,S,null)},250)},setVideoDocumentProxy:U,fetchBusy:g,useVideos:Z,videosContainerRef:P,loadVideo:K,status:H,componentId:o,initialized:f,videoDocumentRasterized:l,clipStartRef:B,clipDescriptionRef:W,currentAssociation:L,currentAssociationMethod:q,associateRecords:C,videoDocument:s,handlePublish:X,handleStartUpload:Q,setVideoDocumentRasterized:d,setCurrentAssociation:k,setCurrentAssociationMethod:F,getAssociateAttributes:M,currentAssociationLimit:b,setAssociateRecords:_})))};export default Module;