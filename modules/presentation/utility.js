import React from"react";const normalizeData=e=>e.map(e=>{e.name&&(e.title=e.name),"Video"===e?.__typename?e?.thumbtrack&&e.thumbtrack[0]&&(e.leadBg="thumbtrack/"+e.thumbtrack[0]):e.leadBg||e.images&&0<e.images.length&&((a=e.images.find(e=>e.bgImg))?e.leadBg=a.name:e.images[0]&&(e.leadBg=e.images[0].name));var t,a=e?.author_data??e?.authorData;return e.icon||a?.icon&&(e.icon=a?.icon,e.raw=!0),a?.username&&(e.author=a.username),e?.item||(t=(a=e?.styles&&e.styles[0]?.sid?e.styles[0]:null)?.option&&a.option[0]?.sid?a.option[0]:null,e.item={type:e?.detailmeta?.ticket?"ticket":e?.__typename?.toLowerCase?e.__typename.toLowerCase():null,id:e.id,style:a?.sid,option:t?.sid},e.cta=e?.detailmeta?.ticket?"Get Tickets":"Add To Cart",e.ctaAfter=e?.detailmeta?.ticket?"Tickets Secured":"Added"),e?.date||e?.detailmeta?.eventDateDef?.dates&&0<e.detailmeta.eventDateDef.dates.length&&(e.showSimpleDate=!0,e.date=new Date(e.detailmeta.eventDateDef.dates[0]).getTime()),e?.description||e?.detailmeta?.description&&(e.description=e.detailmeta.description),e}),resolveMainLink=t=>{if(console.log(t),"video"===t?.item?.type)return"w?v="+t.id;if("ticket"===t?.item?.type){if(t?.streamid)return"w?v="+t?.streamId;if(t?.item?.id)return"/e?p="+t.item.id}else{if(t?.item)return"/i?p="+t.item.id;if(t?.meta&&t?.meta?.forType){let e="video"===t.meta.forType||"live"===t.meta.forType?"w?v="+t.meta.record:"";return t?.meta?.comment&&(e+="&c="+t.meta.comment),e}}return t?.author?"w?u="+t.author:t?.detailmeta?.ticket&&t?.id?"/e?p="+t.id:""},datePassed=e=>{try{var t=Number(e);return new Date(t).getTime()<(new Date).getTime()}catch(e){return!1}},resolveGoodDate=e=>{try{var t=Number(e);return new Date(t).toLocaleDateString()+" "+new Date(t).toLocaleTimeString()}catch(e){return""}},handleSliderLinkClick=e=>{e.preventDefault()},handleSliderLinkClickDown=e=>{e?.currentTarget?.getAttribute&&e.currentTarget.getAttribute("href")&&Object.prototype.hasOwnProperty.call(e,"screenX")&&Object.prototype.hasOwnProperty.call(e,"screenY")&&localStorage.setItem("last_click_location",JSON.stringify({x:e.screenX,y:e.screenY}))},handleSliderLinkClickUp=(e,t)=>{var a,r,i;("which"in e?3==e.which:"button"in e&&2==e.button)?e.preventDefault():Object.prototype.hasOwnProperty.call(e,"screenX")&&Object.prototype.hasOwnProperty.call(e,"screenY")&&(r=e.screenX,i=e.screenY,a=localStorage.getItem("last_click_location"))&&(a=JSON.parse(a))&&e?.currentTarget?.getAttribute&&(e=e.currentTarget.getAttribute("href"))&&(r=r-a.x,i=i-a.y,Math.sqrt(r*r+i*i)<12.5)&&t.push(e)};export{datePassed,normalizeData,resolveMainLink,resolveGoodDate,handleSliderLinkClick,handleSliderLinkClickDown,handleSliderLinkClickUp};