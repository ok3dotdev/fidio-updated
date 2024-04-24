import React from"react";import Script from"next/script";import{v4 as uuidv4}from"uuid";import{useRouter}from"next/router";import{Banner}from"../admin";import lunr from"../utility/utility/elasticlunr";import styles from"./documentation.module.scss";import{fetchPost}from"../utility/fetch";import DOMPurify from"dompurify";import{isObjectEmpty}from"../util";import{CompanyLink}from".";const Module=t=>{const a=useRouter();var{}=a;const[l,s]=React.useState(!1),[,r]=React.useState(null);var[,,]=React.useState(!1);const[n,c]=React.useState(null),[i,m]=React.useState([]),[u,o]=React.useState([]),[,d]=React.useState(-1),[e,y]=React.useState({}),[p,R]=React.useState(0),[f,g]=React.useState([]),[E,v]=React.useState(null),[h,S]=React.useState(null);var[,,]=React.useState([]);const[N,C]=React.useState(!1),b=React.useRef(),A=React.useRef(),x=e=>{y({}),setTimeout(()=>{y(e),setTimeout(()=>{window?.Prism?.highlightAll&&window.Prism.highlightAll()},1)},1)},k=(React.useEffect(()=>{var e;l||(e=uuidv4(),r(e),(async e=>{if(t?.apiUrl){if(e){o(e);const a=e.map(e=>e.menu);e=a.filter((e,t)=>a.indexOf(e)===t);return!g(e)}e=await fetchPost(t.apiUrl+"/m/getdocumentation",null,null,{spec:"all"});if(e.hasOwnProperty("status")&&"success"==e.status&&e.data){o(e.data);const l=e.data.map(e=>e.menu);e=l.filter((e,t)=>l.indexOf(e)===t);g(e)}}})(t?.documentationData),s(!0))},[l]),(e,t)=>{if(n||t){t=(t||n).search(e,{expand:!0});const a=u.map((e,t)=>(e.id=t,e));e=t.map(t=>a.find(e=>e.id==t.ref));m(e),e&&e[0]&&(e[0].menu&&R(f.indexOf(e[0].menu)),x(e[0]))}});React.useEffect(()=>{var e;l&&0<u?.length&&lunr&&u&&!n&&(e=lunr(function(){this.ref("id"),this.field("lead"),this.field("html"),this.field("code"),this.field("response"),this.field("meta"),Array.isArray(u)&&u.forEach((e,t)=>{e.id=t,this.add(e)})}),c(e),a?.query?.q)&&(b.current.value=a.query.q,k(a.query.q,e))},[u,l]),React.useEffect(()=>{if(l&&0<u?.length&&lunr&&u){var t=u.filter(e=>e.menu===f[p]),a=(console.log(t),v(t),[]);for(let e=0;e<t.length;e++)t[e]&&t[e].subMenu&&-1===a.indexOf(t[e].subMenu)&&a.push(t[e].subMenu);S(a)}},[p,f,u,l]);var M=React.useCallback(e=>{d((new Date).getTime());e=e?.currentTarget?.value;null!==e&&""!==e&&n&&u?k(e):T()});React.useEffect(()=>{T()},[n]);const T=()=>{var e;b?.current&&u?.filter&&((e=b.current.value)&&""!==e||0<(e=u?.filter(e=>e.pinned)).length&&m(e))};const w=React.useCallback(e=>{e?.currentTarget?.getAttribute("modif")&&(e=e.currentTarget.getAttribute("modif"))&&-1<(e=f.indexOf(e))&&(x({}),R(e))}),O=React.useCallback(e=>{var t;e?.currentTarget?.getAttribute&&-1<(t=e.currentTarget.getAttribute("modif"))&&(console.log(E,t),e?.currentTarget?.getAttribute("currentresults")?x(i[t]):x(E[t]))});var _=React.useCallback(e=>{A?.current&&clearTimeout(A.current),C(!0)}),z=React.useCallback(e=>{try{A.current=setTimeout(()=>{C(!1)},500)}catch(e){}});const P=t=>{const a={};return console.log(u,t,typeof t),"string"==typeof t&&(t=u.find(e=>e.lead===t)),["manual","simple","easy"].map(e=>{a[e]=-1<t?.meta.indexOf(e)}),a};return console.log("Menu Items",f,e,h,E),React.createElement("div",{className:`${t.className} ${styles.container} Documentation_Container`},React.createElement(Script,{src:"https://d2zsu4v7czjhvo.cloudfront.net/all/prism/1.29.0/prism.js"}),React.createElement("link",{href:"https://d2zsu4v7czjhvo.cloudfront.net/all/prism/1.29.0/prism.css",rel:"stylesheet"}),React.createElement("div",{className:"flex",style:{justifyContent:"space-between",alignContent:"center",margin:".5rem 1.5rem"}},React.createElement("h5",{className:"Misc_Label",style:{fontSize:"1.5rem"}},"Tycoon Documentation"),React.createElement(CompanyLink,t)),React.createElement("div",{style:{position:"sticky",top:".5rem",margin:".5rem 0",marginTop:"0"}},React.createElement("input",{onChange:M,onFocus:_,onBlur:z,className:""+styles.activeSearch,ref:b,style:{border:"0px",borderRadius:".5rem",width:"calc(100% - 1rem)",fontSize:"1.25rem",padding:"0 .5rem",margin:"0 .5rem"},placeholder:"How do I?"}),N?React.createElement("div",{className:""+styles.activeSearchResults},React.createElement("div",{style:{padding:".25rem 0rem",paddingTop:".5rem",display:"grid",gap:".5rem"}},Array.isArray(i)&&0<i.length?i.map((e,t)=>React.createElement("div",{className:"flex gap-p5",style:{marginLeft:".5rem",cursor:"pointer"},key:t},React.createElement("div",{className:"Misc_Item_Container Misc_Item_DarkContainerHover",style:{padding:".5rem"}},React.createElement("div",{className:""+styles.lead,onClick:O,modif:t,currentresults:"true"},e.lead)))):""!==b?.current?.value?React.createElement("div",null):React.createElement("div",{style:{textAlign:"center",fontSize:".95rem"}},"Try Searching for something"))):null),React.createElement("ul",{className:"flex gap-p5 "+styles.menuContainer},Array.isArray(f)&&0<f.length?f.map((e,t)=>React.createElement("li",{key:t,style:{listStyle:"none"},onClick:w,modif:e},React.createElement("div",null,e?.charAt?""+e.charAt(0).toUpperCase()+e.slice(1,e.length):e))):null),React.createElement("div",{className:""+styles.mainContainer},React.createElement("ul",{className:""+styles.menuList},Array.isArray(E)&&0<E.length?E.map((e,t)=>e.subMenu?null:React.createElement("li",{className:"flex gap-p2",onClick:O,modif:t},React.createElement("div",null,e?.lead),P(e)?.manual?React.createElement("div",{className:styles.tagUnmanaged+" "+styles.tagSmall},"m"):null,P(e)?.simple?React.createElement("div",{className:styles.tagSimple+" "+styles.tagSmall},"s"):null,P(e)?.easy?React.createElement("div",{className:styles.tagEasy+" "+styles.tagSmall},"e"):null)):null,h&&Array.isArray(h)?h.map(a=>React.createElement(React.Fragment,null,React.createElement("div",{className:""+styles.subMenuLabel},React.createElement("h4",null,a.toUpperCase&&"string"==typeof a?a.charAt(0).toUpperCase()+(1<a.length?a.substring(1,a.length):""):a)),Array.isArray(E)&&0<E.length?E.map((e,t)=>e.subMenu&&e.subMenu===a?React.createElement("li",{className:"flex gap-p2",onClick:O,modif:t},React.createElement("div",null,e?.lead),P(e)?.manual?React.createElement("div",{className:styles.tagUnmanaged+" "+styles.tagSmall},"m"):null,P(e)?.simple?React.createElement("div",{className:styles.tagSimple+" "+styles.tagSmall},"s"):null,P(e)?.easy?React.createElement("div",{className:styles.tagEasy+" "+styles.tagSmall},"e"):null):null):null)):null),React.createElement("div",{className:""+styles.contentContainer},e&&!isObjectEmpty(e)?React.createElement("div",{className:"flex "+styles.quadrant},React.createElement("div",{className:"Misc_Item_Container Misc_Item_DarkContainerHover",style:{padding:".5rem",width:"100%"}},React.createElement("div",{className:""+styles.lead},e.lead),React.createElement("div",{className:"flex gap-p5"},React.createElement("div",null,P(e)?.manual?React.createElement("div",{className:styles.tagUnmanaged+" "+styles.tag},"manual"):null),React.createElement("div",null,P(e)?.simple?React.createElement("div",{className:styles.tagSimple+" "+styles.tag},"simple"):null),React.createElement("div",null,P(e)?.easy?React.createElement("div",{className:styles.tagEasy+" "+styles.tag},"easy"):null)),React.createElement("pre",{style:{marginTop:"1rem"}},React.createElement("code",null,React.createElement("div",{className:""+styles.htmlParseContainer,dangerouslySetInnerHTML:((e,t)=>{try{return e&&e[t]?{__html:DOMPurify.sanitize(e[t]??"")}:""}catch(e){return""}})(e,"html"),style:{fontSize:".85rem",lineHeight:"normal",lineBreak:"auto",whiteSpace:"pre-wrap"}}))))):null),React.createElement("div",null,e&&!isObjectEmpty(e)?React.createElement("div",{className:"flex "+styles.codeContainer},React.createElement("div",{className:""+styles.quadrant2},React.createElement("pre",null,React.createElement("code",{class:"language-js"},React.createElement("div",{className:""+styles.codePre},e?.code))),React.createElement("div",null,e.response))):null)))};export default Module;