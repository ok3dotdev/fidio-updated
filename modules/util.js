import{sendUserAnalytics}from"./analytics";import{resolveVariables}from"/app.config";const isObjectEmpty=e=>e&&0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype;let debounce=function(r,o,i){var n,a;return function(){var e=this,t=arguments;return clearTimeout(n),n=setTimeout(function(){n=null,i||(a=r.apply(e,t))},o),a=i&&!n?r.apply(e,t):a}};const detectAllowEditingFlag=(e,t)=>!!(e&&e.author&&t&&t.identifier&&e.author===t.identifier),getFormattedTime=(t,e={})=>{try{var r,o,i,n;return e.simple?([r,o]=t.split(":").map(Number),i=r<12?"AM":"PM",(r%12||12)+":"+o.toString().padStart(2,"0")+i):(n={hour:"2-digit",minute:"2-digit",hour12:!0},new Intl.DateTimeFormat("en-US",n).format(t))}catch(e){return console.log(e),t}},getFormattedDate=(t,r={})=>{if(r.pretty)try{var o={day:"2-digit",month:"short",year:"numeric"},i=new Intl.DateTimeFormat("en-US",o).format(new Date(t)),n=getFormattedTime(new Date(t));if(console.log("Formatted Time Date",i,n),!r.date&&!r.time||r.date&&r.time)return i+"-"+n;let e="";return r.date&&(e+=i),r.time&&(0!==e.length&&(e+="-"),e+=n),e}catch(e){return console.log(e),t}o=t.getFullYear();return(1+t.getMonth()).toString().padStart(2,"0")+"/"+t.getDate().toString().padStart(2,"0")+"/"+o};function compareObjects(t,r){if(t===r)return!0;if("object"!=typeof t||"object"!=typeof r||null==t||null==r)return!1;var e=Object.keys(t);const o=Object.keys(r);if(e.length!==o.length)return!1;let i=!0;return e.forEach(e=>{o.includes(e)||(i=!1),"function"!=typeof t[e]&&"function"!=typeof r[e]||t[e].toString()!==r[e].toString()&&(i=!1),compareObjects(t[e],r[e])||(i=!1)}),i}function registerCheckLocalStorageSize(e){return!(!e?.Storage||!e.Storage.prototype||e.Storage.prototype.size||(e.Storage.prototype.size=function(e){"use strict";e=e?e.toUpperCase():"MB";var t=unescape(encodeURIComponent(JSON.stringify(this))).length;switch(e){case"B":return[t,"B"].join(" ");case"KB":return[+(t/1024).toFixed(3),"KB"].join(" ");default:return[+(t/1024/1024).toFixed(3),"MB"].join(" ")}},0))}function registerProxyConsoleLog(e){if(e?.console){e.console.override=!0,console.override=!0;const a=resolveVariables();if(!a.dev||!a.doShowLogs){const l=console.log.bind({});function t(...t){if(a.doShowLogs){const n=t;if(0<n?.length)for(let t=0;t<n.length;t++)Object.entries(a).map(e=>{n[t]&&n[t][e[0]]&&(n[t]="--- REDACTED_SYS_INFO ---")});let e="";try{var r=(new Error).stack.split("\n")[2].trim().match(/(?:\()(.+?)(?::(\d+))?(?:\))/),o=r?r[1]:"",i=r?r[2]:"";e=`[${o}:${i}]`}catch(e){}return l(...n,e)}return""}e.console.log=t,console.log=t}}return e.console}function registerCheckMobile(r){return r&&(r.mobileCheck=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||r.opera,e=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))?!0:e}),!1}const defaultLedger=e=>({owner:e,action:"user_ledger",ledgertype:"user_ledger",meta:{},ledger:[]}),handleRouteChange=(t,e,r)=>{try{var o=t?._loggedIn?.identifier??null;if(o){var i={action:"navigate",to:e,time:new Date,meta:{context:r}};if(localStorage){let e=localStorage.getItem("user_ledger")?JSON.parse(localStorage.getItem("user_ledger")):defaultLedger(o);0<e.ledger.length?(i.timeSinceAction=(new Date).getTime()-new Date(e.ledger[0].time).getTime(),i.timeSinceActionSec=i.timeSinceAction/1e3,i.from=e.ledger[0].to,i.i=Object.prototype.hasOwnProperty.call(e.ledger[0],"i")&&!isNaN(Number(e.ledger[0].i))?Number(e.ledger[0].i)+1:0):i.i=0,500<(e=e.owner!==o?defaultLedger(o):e).ledger.length&&e.ledger.slice(0,500);var n=localStorage.size();n&&n.match("MB")&&2.5<Number(n.split(" ")[0])&&e.ledger.slice(0,100),e.ledger.unshift(i),localStorage.setItem("user_ledger",JSON.stringify(e)),t.apiUrl&&t.domainKey&&t._LocalEventEmitter&&throttleFunctionCallQueue(t._LocalEventEmitter,"_senduseranalyticsrequest",1500,sendUserAnalytics,[t.apiUrl,t.domainKey,t._loggedIn,e])}}t._setManagerOpen&&t._setManagerOpen(!1)}catch(e){console.log(e)}},handleInteractMedia=(t,e,r,o={})=>{try{console.log("Route Change",t);var i=t?._loggedIn?.identifier??null;if(i){var n={action:r,media:e.id,time:new Date,meta:o};if(localStorage){let e=localStorage.getItem("user_ledger")?JSON.parse(localStorage.getItem("user_ledger")):defaultLedger(i);0<e.ledger.length?(n.timeSinceAction=(new Date).getTime()-new Date(e.ledger[0].time).getTime(),n.timeSinceActionSec=n.timeSinceAction/1e3,n.i=Object.prototype.hasOwnProperty.call(e.ledger[0],"i")&&!isNaN(Number(e.ledger[0].i))?Number(e.ledger[0].i)+1:0):n.i=0,500<(e=e.owner!==i?defaultLedger(i):e).ledger.length&&e.ledger.slice(0,500);var a=localStorage.size();a&&a.match("MB")&&2.5<Number(a.split(" ")[0])&&e.ledger.slice(0,100),e.ledger.unshift(n),localStorage.setItem("user_ledger",JSON.stringify(e)),console.log(e),t.apiUrl&&t.domainKey&&t._LocalEventEmitter&&throttleFunctionCallQueue(t._LocalEventEmitter,"_senduseranalyticsrequest",1500,sendUserAnalytics,[t.apiUrl,t.domainKey,t._loggedIn,e])}}}catch(e){console.log(e)}},throttleFunctionCall=async function(e,t,r,o,i){return!e[t]||e[t]&&e[t]<(new Date).getTime()-r?(e[t]=(new Date).getTime(),o(...i)):null},throttleFunctionCallQueue=async function(e,t,r,o,i){if(e[t+"_payload"]=JSON.stringify(i),!e[t]||e[t]&&e[t]<(new Date).getTime()-r)return e[t]=(new Date).getTime(),o(...JSON.parse(e[t+"_payload"]));e[t+"_running"]||(e[t+"_running"]=setTimeout(()=>{e[t]=(new Date).getTime(),o(...JSON.parse(e[t+"_payload"])),e[t+"_running"]=null},r))},checkiOS=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document,resolveNestedProperty=(e,t)=>{try{return t.split(".").reduce((e,t)=>e&&e[t],e)}catch(e){return null}},setNestedProperty=(e,t,r)=>{try{var o=t.split("."),i=o.pop(),n=o.reduce((e,t)=>(e[t]||(e[t]={}),e[t]),e);return n[i]=r,n}catch(e){return null}};export{isObjectEmpty,debounce,detectAllowEditingFlag,getFormattedTime,getFormattedDate,compareObjects,registerCheckLocalStorageSize,registerProxyConsoleLog,registerCheckMobile,handleRouteChange,handleInteractMedia,throttleFunctionCall,throttleFunctionCallQueue,checkiOS,resolveNestedProperty,setNestedProperty};