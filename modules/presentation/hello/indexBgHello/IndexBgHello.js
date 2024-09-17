function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,l=arguments[t];for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import Slider from"react-slick";import Styles from"../../Presentation.module.scss";import{v4 as uuidv4}from"uuid";import{fireGlobalEvent,getTimeRemaining}from"../../../utility/utility";import Image from"next/image";import Link from"next/link";import{FetchHandler}from"../../../utility/fetch";import{normalizeData,resolveMainLink,datePassed,resolveGoodDate,handleSliderLinkClick,handleSliderLinkClickDown,handleSliderLinkClickUp}from"../../utility";import{resolveOption,resolveRegionBasedPrice,resolveMoneyFormat}from"../../../utility/ecommerce";const moduleName="IndexBgHello",RESET_CTA_TIMER=18e4,Module=l=>{const t=useRouter(),[a,i]=React.useState(!1),[n,s]=React.useState(null),[c,m]=React.useState(null),[o,r]=React.useState(0),[,d]=React.useState(!1),[,u]=React.useState(!1),[e,S]=React.useState(!1),[N,y]=React.useState(null),p=React.useRef();React.useRef();const C=React.useMemo(()=>{return N&&e?normalizeData(N):l?.items?.map?normalizeData(l.items):[{},{},{},{}]},[N,e,l?.items]),R=(l._LocalEventEmitter.unsubscribe(n),l._LocalEventEmitter.subscribe(n,e=>{e&&e.dispatch&&"updateCountdown"===e.dispatch&&(null!=(e=C[o]?C[o].date:null)?(e="string"==typeof e?new Date(Number(e)):new Date(e),datePassed(e)?m("nodate"):isNaN(e)||(e=getTimeRemaining(e,new Date))&&(m(e),u(!0))):(m("nodate"),u(!1)))}),React.useEffect(()=>{if(!a){const e=uuidv4();s(e),l.request&&S(!0),setInterval(()=>{l._LocalEventEmitter.dispatch(e,{dispatch:"updateCountdown"})},1e3),i(!0)}},[a]),React.useCallback(async e=>{if(d(!0),e?.currentTarget?.getAttribute("ctaAfter")){e.currentTarget.innerHTML=e.currentTarget.getAttribute("ctaAfter");const t=e.currentTarget.getAttribute("cta"),a=e.currentTarget;setTimeout(()=>{try{a.innerHTML=t}catch(e){}},RESET_CTA_TIMER)}fireGlobalEvent(e,l._LocalEventEmitter)})),E=(e,t,a)=>e?.rawBg&&"bg"===a||e?.raw&&"icon"===a?t:l.cdn&&l.cdn.static&&0<l.cdn.static.length&&t?l.cdn.static+"/"+t:"img/default/greythumb.jpg";var g={infinite:1<C.length,speed:500,swipeToSlide:!0,touchThreshold:60,arrows:!1,beforeChange:(e,t)=>{t!==o&&(r(t),setTimeout(()=>{l._LocalEventEmitter.dispatch(n,{dispatch:"updateCountdown"})},1))}};const v=React.useCallback(e=>{handleSliderLinkClickUp(e,t)});return React.createElement("div",{className:`${Styles.IndexBgContainer} glide_${n} ${l.className} `+(l.medium?""+Styles.IndexBgContainerMedium:null)},React.createElement("div",{className:`${Styles.SliderBulletsContainer} ${moduleName}_SliderBulletsContainer `+l.sliderBulletsContainerClassName},React.createElement("div",{className:Styles.SliderBullets+" glide__bullets","data-glide-el":"controls[nav]"},l.items&&l.items.map&&1<l.items.length?l.items.map((e,t)=>React.createElement("button",{className:Styles.SliderBullet+" glide__bullet","data-glide-dir":"="+t,key:t})):null)),e&&l?.request?.handlerArgs?React.createElement(FetchHandler,_extends({handlerArgs:l.request.handlerArgs,receiveData:e=>{if(e?.data?.fetchedData){const t=[];var e=e.data.fetchedData.map(e=>Object.entries(e).map(e=>e[1].map(e=>Array.isArray(e)?e.map(e=>e?.id?(t.push(e),e):null):e.id?(t.push(e),e):null))).flat(3);e&&(e=e.filter(Boolean),y(e))}}},l)):null,React.createElement("div",{className:"swipe slick-full slider_"+n},React.createElement(Slider,_extends({},g,{className:Styles.sliderContainer+" swiper-wrapper slider_slides",style:{height:"inherit"}}),C?.map?C.map((t,e)=>{return React.createElement("div",{className:`${Styles.BgUpperContainer} ${moduleName}_Container`,key:e},React.createElement("div",{className:`${Styles.BgContainer} ${moduleName}_BgContainer `+l.bgClassName,style:{backgroundImage:`url(${E(t,t?.leadBg??null,"bg")})`}},l.children,React.createElement("div",{className:`${Styles.FillPageContainer} ${moduleName}_FillPageContainer`},React.createElement("div",{className:`${Styles.TimeContainer} ${moduleName}_TimeContainer `+l.timeContainerClassName},React.createElement("div",{className:`${Styles.TimeCountdown} ${moduleName}_TimeCountdown ${l.timeCountdownClassName} `+(c?""+Styles.TimeCountdownVisible:null)},c&&u?"nodate"===c?React.createElement("div",null):React.createElement(React.Fragment,null,0<c.days?React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection ${Styles.TimeSectionDay} `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},c.days),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Days")):null,0<c.days?React.createElement("div",{className:`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon `+l.timeSectionColonClassName},":"):null,0===c.hours&&0===c.minutes&&0===c.seconds?React.createElement("div",null):React.createElement(React.Fragment,null,React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},c.hours),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Hours")),React.createElement("div",{className:`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon `+l.timeSectionColonClassName},":"),React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},c.minutes),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Minutes")),React.createElement("div",{className:`${Styles.TimeSectionColon} ${moduleName}_TimeSectionColon `+l.timeSectionColonClassName},":"),React.createElement("div",{className:`${Styles.TimeSection} ${moduleName}_TimeSection `+l.timeSectionClassName},React.createElement("div",{className:`${Styles.TimeSectionValue} ${moduleName}_TimeSectionValue `+l.timeSectionValueClassName},c.seconds),React.createElement("div",{className:`${Styles.TimeSectionLabel} ${moduleName}_TimeSectionLabel `+l.TimeSectionLabelClassName},"Seconds")))):null),t.showSimpleDate&&c?React.createElement("div",{className:`${Styles.TimeSimple} ${moduleName}_TimeSimple `+l.timeSimpleClassName},React.createElement("div",null,t?.date?resolveGoodDate(t.date):"")):null),React.createElement("div",{className:`${Styles.DataContainer} ${moduleName}_DataContainer `+l.DataContainerClassName},React.createElement("div",{className:`${Styles.AuthorContainer} ${moduleName}_AuthorContainer `+l.authorContainerClassName},""!==t?.icon?React.createElement("div",{className:`${Styles.IconContainer} ${moduleName}_IconContainer `+l.iconContainerClassName},React.createElement(Link,{href:"/p?u="+(t?.author??""),onClick:handleSliderLinkClick,onMouseDown:handleSliderLinkClickDown,onMouseUp:v,draggable:!1,style:{alignSelf:"center"}},React.createElement(Image,{loader:()=>E(t,t?.icon??null,"icon"),src:E(t,t?.icon??null,"icon"),style:{maxWidth:"50px",borderRadius:"4rem"},alt:t?.author??"",width:t.iconWidth??"50",height:t.iconHeight??"50",layout:"responsive"}))):null,React.createElement(Link,{href:"/p?u="+(t?.author??""),onClick:handleSliderLinkClick,onMouseDown:handleSliderLinkClickDown,onMouseUp:v,draggable:!1,style:{alignSelf:"center"}},React.createElement("div",{className:`${Styles.Author} ${moduleName}_Author `+l.authorClassName},t?.author??""))),React.createElement(Link,{href:resolveMainLink(t),onClick:handleSliderLinkClick,onMouseDown:handleSliderLinkClickDown,onMouseUp:v,draggable:!1,style:{alignSelf:"center",position:"relative"}},React.createElement("div",{className:`${Styles.Lead} ${moduleName}_Lead `+l.leadClassName},t?.title??""),t.created&&!isNaN(new Date(t.created))&&new Date(t.created).getTime()>(new Date).getTime()-1296e6?React.createElement("div",{className:"newItem",style:{position:"absolute",top:"-25px",right:"100px",fontSize:".7rem"}},React.createElement("span",null,"New"),React.createElement("span",{style:{fontSize:".7rem"},className:"star material-icons"},"star")):null),t.description&&""!==t.description?React.createElement("div",{className:`${Styles.Description} ${moduleName}_Description `+l.descriptionClassName},t?.description??""):null,t?.item?.id&&t?.item?.style&&t?.item?.option?React.createElement("div",{style:{display:"flex",columnGap:"1rem",rowGap:".25rem",flexWrap:"wrap"}},React.createElement("button",{className:`${Styles.CtaButton} ${moduleName}_Cta `+l.ctaClassName,onClick:R,action:-1<["add_to_cart","buy"].indexOf(t?.action)?t.action:"add_to_cart",item:t?.item?.id,selectedstyle:t?.item?.style,currentoption:t?.item?.option,ref:p,ctaAfter:t.ctaAfter,cta:t.cta},t.cta),(e=t?.styles?.find?t.styles.find(e=>e.sid===t.item.style):null,0==(e=resolveRegionBasedPrice(l,e,t?.item?.useCustom??null))?.price?React.createElement("div",{className:"flex",style:{fontSize:"1.5rem",fontWeight:"600"}},React.createElement("div",null,"Free")):e?.currency&&e?.symbol&&Object.prototype.hasOwnProperty.call(e,"price")?React.createElement("div",{className:"flex",style:{fontSize:"1.25rem",fontWeight:"600"}},React.createElement("div",null,e.symbol),React.createElement("div",{style:{marginRight:".25rem"}},resolveMoneyFormat(e.price)),React.createElement("div",null,e.currency)):React.createElement("div",null)),(e=!((e=resolveOption(t,t.item.style,t.item.option,!0))?.quantity&&300<e.quantity)&&e?.quantity&&e.quantity<=300?"Not much left in stock":"")?React.createElement("div",{style:{alignItems:"center",display:"flex",fontSize:".75rem",fontWeight:"700",gap:".25rem",color:"#ff8686"}},React.createElement("span",null,e),React.createElement("span",{style:{fontSize:"1.15rem"},className:"inventory material-icons"},"inventory")):null):null))))}):null)))};export default Module;