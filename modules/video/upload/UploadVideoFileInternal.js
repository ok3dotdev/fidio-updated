import React from"react";import styles from"./upload.module.scss";import{logout}from"/modules/utility/onboarding/SignIn";import axios from"axios";const MAX_UPLOAD_TIME=36e5,Module=o=>{const[t,l]=React.useState(!1),[e,i]=React.useState(null),[a,s]=React.useState(!1),[c,d]=React.useState(-1),u=React.useRef(),m=React.useRef(),g=React.useRef();var n=React.useCallback(e=>{i(null)}),r=React.useCallback(e=>{m?.current&&m.current.click()}),p=React.useCallback(e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",a||s(!0)}),f=React.useCallback(e=>{e.preventDefault(),e.stopPropagation(),a&&s(!1),-1!==c||o.currentVideo||o.processing||e?.dataTransfer?.files&&e.dataTransfer.files&&(e=e.dataTransfer.files,m.current.files=e,R())}),y=React.useCallback(e=>{a&&s(!1)});const R=()=>{if(g?.current&&clearTimeout(g.current),!t){if(!o._loggedIn||o._loggedIn&&!o?._loggedIn?.username)return i({message:"Please sign in to upload videos"}),!1;if(l(!0),m?.current?.files&&m.current.files[0]){if(-1===c&&!o.currentVideo&&!o.processing){const r=m.current.files[0];var e=new FormData;let t,a,s;var n=r.name.match(/\.([a-zA-Z0-9]*)$/)[1],n=(e.append("extension",n),e.append("video",r),e.append("dborigin",o.dborigin),e.append("domainKey",o.domainKey),e.append("identifier",o._loggedIn.identifier),e.append("hash",o._loggedIn.hash),e.append("socket",o._loggedIn.identifier+"-"+o.dborigin),{onUploadProgress:e=>{console.log("Progress",e),!o?.processing&&o?.setProcessing&&o.setProcessing(!0),t=e.loaded/1e6,a=r.size/1e6,s=Math.floor(t/a*100),console.log(s,a,t),d(s),o.updateTrackFileProgress&&o.updateTrackFileProgress(s),99.9999<=s&&o?.setHandlingMeta&&o.setHandlingMeta(!0),u.current.style.width=s+"%"},headers:{"Content-Type":"multipart/form-data"},withCredentials:!0,timeout:o?.MAX_UPLOAD_TIME??MAX_UPLOAD_TIME});g.current=setTimeout(()=>{l(!1)},o?.MAX_UPLOAD_TIME??MAX_UPLOAD_TIME),axios.post(o.apiUrl+"/m/uploadvideo",e,n).then(async e=>{e&&200==response.status&&(o?.setProcessing&&o.setProcessing(!0),i(null),e.data)&&e.data.job&&o?.setVideoDocumentProxy&&o.setVideoDocumentProxy(e.data.job)}).catch((e,t)=>{u?.current&&(u.current.style.width=0),d(-1),l(!1),o?.setProcessing&&o.setProcessing(!1),m?.current&&(m.current.value=null),o?.setProcessing&&o.setProcessing(!1),e.res&&e.res.data&&e.res.data.message?(this.setState({pageError:e.res.data.message}),"disauthenticated"==e.res.data.message&&logout()):i({message:"Something went wrong during video upload"})})}}else l(!1),i({message:"Please choose a video to upload"})}};return React.useEffect(()=>{99.9999<=c&&o?.setHandlingMeta&&o.setHandlingMeta(!0)},[c]),console.log(m.current),React.createElement("div",{onDrop:f,onDragOver:p,onDragEnd:y,onDragLeave:y},o.processing||!o?._loggedIn?.username||o.currentVideo?o?.processing&&"number"==typeof c&&-1<c?React.createElement("div",null,React.createElement("div",{className:""+styles.loadingMetaContainer},React.createElement("h4",null,"Uploading Video"),React.createElement("div",{className:styles.loadingBarContainer+" Video_LoadingBarContainer"},React.createElement("div",{className:styles.loadingBar+" Video_LoadingBar",ref:u},React.createElement("div",{className:styles.loadingBarText+" Video_LoadingBarText"},c,"%"))))):null:React.createElement("div",{className:styles.fileUploadContainerExternal+" "+(a?""+styles.fileUploadContainerDragging:null),style:{minHeight:"75vh",display:"flex"}},React.createElement("div",{className:""+styles.fileUploadContainer,style:{display:"flex",flexDirection:"column",width:"100%"}},React.createElement("div",{className:t?"fetchNotBusy "+styles.fileUploadFetchBusy:"fetchNotBusy"}),React.createElement("div",{style:{margin:"auto"}},React.createElement("label",null,React.createElement("input",{style:{fontSize:"1rem",display:"none"},type:"file",name:"fileToUpload",id:"fileToUpload",ref:m,onChange:R}),React.createElement("div",{className:""+styles.uploadPrompt},React.createElement("h4",null,"Drag and drop your video to upload"),React.createElement("p",{style:{fontSize:"1rem"}},"Your video will be private until you decide to publish it"),React.createElement("button",{className:""+styles.mainInteractionPurple,style:{padding:"0.5rem 6rem",margin:"0 auto",marginTop:"2rem",marginBottom:"0rem"},onClick:r},"Upload Video"),React.createElement("div",{style:{width:"100%",paddingTop:"1rem",paddingBottom:"0.5rem"}},React.createElement("div",{className:""+styles.loadingBar,ref:u}))))),e?.message?React.createElement("div",{className:"error",style:{margin:".25rem",marginBottom:"0"},onClick:n},e.message):null)))};export default Module;