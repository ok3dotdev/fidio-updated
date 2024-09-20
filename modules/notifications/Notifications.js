import React from"react";import Link from"next/link";import apiReq from"/modules/utility/api/apiReq";import Styles from"./Notifications.module.scss";import PresentationStyles from"../presentation/Presentation.module.scss";import{fireGlobalEvent}from"../utility/utility";import{resolveMainLink}from"../presentation/utility";import{resolveSimpleTimeAgo}from"/modules/utility/utility/date";import{createMarkup}from"/modules/article/utility";const Module=a=>{const[e,t]=React.useState(!1),[i,n]=React.useState(!1),[,c]=React.useState(null),[o,l]=React.useState(null),[r,,]=React.useState([]),[s,m]=React.useState(!1),[u,d]=React.useState(!1),[f,p]=React.useState(!1),[g,R]=React.useState(0),[v,E]=React.useState(-1),y=React.useRef(),N=React.useRef(),h=(React.useEffect(()=>{e||(y.current.addEventListener("mouseover",h),t(!0))},[e]),()=>{a._LocalEventEmitter.dispatch("notification",{dispatch:"mouseOver"})}),S=(a._LocalEventEmitter.unsubscribe("notification"),a._LocalEventEmitter.subscribe("notification",e=>{[...r];e&&(console.log("Notification Update",e),"notification"===e.dispatch?(m(!0),a.passOveride&&a.passOveride("notifications"),setTimeout(()=>{m(!1)},1500)):"mouseOver"===e.dispatch&&(console.log("Did mouse over",a,f),"notifications"===a?._openMenu?.currentMenu)&&!f&&a._toggleSingleOpenMenu&&a._toggleSingleOpenMenu(null,"notifications",!0))}),React.useEffect(()=>{var e;"notifications"!==a?._openMenu?.currentMenu&&!s||u?"notifications"!==a?._openMenu?.currentMenu&&!s&&u&&(p(!0),e=setTimeout(()=>{p(!1),d(!1),N.current=null},500),N.current=e):(d(!0),p(!1),N?.current&&clearTimeout(N.current))},[a?._openMenu?.currentMenu,f,u,N?.current]),React.useEffect(()=>{var e;a?.notificationsData&&-1===v&&(E((new Date).getTime()),(e={...a.notificationsData}).notifications&&Array.isArray(e.notifications)&&(e.notifications=C(e.notifications)),l(e))},[a?.notificationsData]),React.useCallback(e=>{p(!0),a._toggleSingleOpenMenu(null,"notifications",!1)})),_=React.useCallback(async e=>{e?.currentTarget?.getAttribute("ctaAfter")&&(e.currentTarget.innerHTML=e.currentTarget.getAttribute("ctaAfter")),fireGlobalEvent(e,a._LocalEventEmitter)}),M=e=>{var t;if(e&&a?.cdn?.static&&0<e?.product?.images?.length)return(t=e.product.images.find(e=>e.leadImg??!1))?a.cdn.static+"/"+t.name:a.cdn.static+"/"+e.product.images[0].name;return""};var b=React.useCallback(e=>{i||(n(!0),k(a,g,n,E))});const k=async(e,t)=>{var a,i,t=t+5,e=await apiReq("/p/getnotifications",{apiUrl:e?.apiUrl,identifier:e._loggedIn.identifier,hash:e._loggedIn.hash,offset:t});e?.data?(E((new Date).getTime()),n(!1),e?.data?.notifications&&(a={},i=[...o?.notifications??[]].concat([...e.data.notifications]),a.notifications=C(i),a.lastCheck=e?.data?.lastCheck,l(a),R(t))):(n(!1),c({dispatch:"error",message:e?.message??"Failed to get posts"}))},C=e=>e.map(e=>{e={...e};return e?.id?(console.log(e),e.timeAgo=resolveSimpleTimeAgo(e?.creation)??null,e):null}).filter(Boolean);return React.createElement(React.Fragment,null,React.createElement("div",{className:`Misc_Container Misc_Container_Bigger ${a.className} `+(a.open||u&&!f?"Misc_Container_Visible":""),ref:y,style:{top:a?.menuConfig?.height&&!isNaN(Number(a.menuConfig.height))?Number(a.menuConfig.height)+"px":""}},a.open||u?React.createElement(React.Fragment,null,React.createElement("div",{className:i?"fetchNotBusy fetchBusy":"fetchNotBusy"}),React.createElement("div",{className:"Misc_Internal_Container",style:{paddingTop:".5rem",paddingBottom:".5rem"}},React.createElement("h5",{className:"Misc_Label",style:{marginTop:0}},"Notifications"),React.createElement("div",{className:"flex gap-p5",style:{flexDirection:"column"}},o?.notifications?.map?o.notifications.map((e,t)=>React.createElement("div",{className:""+Styles.notifContainer,key:t},React.createElement("div",{className:""+Styles.notifInternalContainer},React.createElement("div",{className:""+Styles.detailContainer},React.createElement("div",{className:Styles.author+" Misc_P"},e?.meta?.fromAdmin&&a?.siteTitle?a.siteTitle:null),e?.meta?.verb?React.createElement("span",{className:"Misc_P"},e.meta.verb):null,React.createElement(Link,{href:resolveMainLink(e),onClick:S},React.createElement("div",null,React.createElement("div",{className:"Misc_P"},e?.meta?.quotes?'"':"",e?.meta?.message??null,e?.meta?.quotes?'"':""),e?.meta?.content?React.createElement("h5",{className:Styles.simpleClip+" Notification_Content",style:{color:"#e3e3e3",fontSize:".85rem",margin:0,fontWeight:400},dangerouslySetInnerHTML:{__html:createMarkup(e.meta.content)}}):null))),React.createElement("div",null,e?.meta?.image&&a?.cdn?.static?React.createElement("div",{className:""+Styles.icon,style:{background:`url(${a.cdn.static}/${e.meta.image})`,backgroundSize:"contain"}}):e?.meta?.icon?React.createElement("div",{className:""+Styles.icon,style:{background:`url(${a.cdn.static}/${e.meta.icon})`,backgroundSize:"contain"}}):null)),e?.product?.id?React.createElement("div",{className:`${Styles.notifBox} ${Styles.notifProduct} flex gap-p5`},React.createElement("h5",{className:"Notifcation_Tag",style:{borderRadius:"1rem",fontSize:".75rem",fontWeight:400,margin:0,position:"absolute",right:".5rem",top:".5rem",padding:".025rem .5rem"}},"Product"),React.createElement(Link,{href:resolveMainLink(e?.product),onClick:S},React.createElement("div",null,React.createElement("div",{className:Styles.notifImageContainer+" Notification_ProductImageBackground",style:{backgroundImage:M(e)?`url(${M(e)})`:null}},React.createElement("img",{src:"img/default/greythumb_product.jpg",className:"Product_img Notification_ProductImageFallback",style:{borderRadius:".5rem",width:"75px",maxHeight:"60px",opacity:M(e)?0:1}})))),React.createElement("div",null,React.createElement(Link,{href:resolveMainLink(e?.product),onClick:S},React.createElement("div",{className:Styles.productName+" "+(a?.classes?.productName??""),style:{fontSize:".9rem",fontWeight:"600"}},e?.product?.name)),React.createElement("button",{className:PresentationStyles.CtaButton+" "+a.ctaClassName,onClick:_,action:"add_to_cart",item:e?.product?.id,selectedstyle:e?.meta?.productStyle,currentoption:e?.meta?.productOption,ctaAfter:"Added To Cart"},"Add To Cart"))):null,React.createElement("div",{className:"flex gap-p10",style:{justifyContent:"space-between"}},e?.timeAgo?React.createElement("div",null,React.createElement("h5",{className:Styles.notifTimeAgo+" Notification_NotifTimeAgo"},e.timeAgo)):null))):React.createElement("div",null,React.createElement("div",{className:"Misc_P"},"All Caught Up"))),0<o?.notifications?.length?i?React.createElement("div",{className:"spinner spinnerBig opacity1 spinnerRelative"}):React.createElement("button",{className:"Post_SimpleButton simpleButton simpleButtonBright Notification_LoadMore",onClick:b,style:{marginTop:".25rem"}},"Load More"):React.createElement("div",null))):null))};export default Module;