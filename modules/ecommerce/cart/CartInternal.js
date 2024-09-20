function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{fireGlobalEvent}from"../../utility/utility/event.js";import{Cart}from"/layout/index.js";import{addToCart,calculateTotal,performPurchase,resolveRegionBasedPrice,updateCart}from"/modules/utility/ecommerce/ecommerce.js";import{v4 as uuidv4}from"uuid";const Module=i=>{const[e,t]=React.useState(!1),[p,d]=React.useState(!1),[a,n]=React.useState(null),[u,o]=React.useState([]),[r,s]=React.useState(!1);var[c,l]=React.useState(!0);const[m,g]=React.useState(!1),[h,y]=React.useState(!1),f=React.useRef(),v=React.useRef(),_=(React.useEffect(()=>{e||(f.current.addEventListener("mouseover",_),t(!0))},[e]),()=>{i._LocalEventEmitter.dispatch("cart_update",{dispatch:"mouseOver"})});var C=React.useCallback(e=>{e&&i&&i._toggleSingleOpenMenu&&i._toggleSingleOpenMenu(e,"main_settings")},[i._openMenu]),R=(i._LocalEventEmitter.unsubscribe("cart_update"),i._LocalEventEmitter.subscribe("cart_update",t=>{let e=[...u];var a;t&&(console.log("Cart Update",t),"purchase"===t.dispatch?(e=e.filter(e=>e&&"purchase"!==e.type),a=i.devLocal?i.devAddress:"https://"+i.domainUrl,e.push({message:"Purchase success",href:a+"/r?o="+t.id,hrefCta:"View your Receipt Here",type:"purchase"}),o(e)):"flashCart"===t.dispatch?(s(!0),i.passOveride&&i.passOveride("cart"),setTimeout(()=>{s(!1)},1500)):"purchaseComplete"===t.dispatch?"paystack"===t.type&&(console.log("paystack purchase",t),a=setTimeout(()=>{d(!1)},2e4),E(t.data.snapshot,t.data.cart,a,t.data)):"mouseOver"===t.dispatch?"cart"===i?._openMenu?.currentMenu&&!h&&i._toggleSingleOpenMenu&&i._toggleSingleOpenMenu(null,"cart",!0):"cartMessage"===t.dispatch&&t?.type&&(-1<(a=e.findIndex(e=>e.type===t.type))&&e.splice(a,1),e.push({message:t?.message,href:t?.href,hrefCta:t?.hrefCta,type:t?.type}),o(e)))}),React.useCallback(e=>{n(null)})),b=React.useCallback(async t=>{try{if(!p&&t&&t.currentTarget&&t.currentTarget.getAttribute){d(!0);var a=t.currentTarget.getAttribute("styleId"),r=t.currentTarget.getAttribute("optionId"),s=t.currentTarget.getAttribute("quantity");const l=t.currentTarget.getAttribute("productId");var c={};Number(t.currentTarget.value)<Number(s)&&(c.decrement=!0);let e;var n,u,o=JSON.parse(localStorage.getItem("cart"));(e=l&&o&&o.items?o.items.find(e=>e.product.id===l):e)&&(n=await addToCart(i.apiUrl,i.domainKey,i._loggedIn,o,e.product,{style:a,option:r},d,c))&&"success"===n.status&&(updateCart(o,n.cart),n.cart)&&n.cart.items&&(u=n.cart.items.find(e=>e.product.id===l))&&(t.target.value=u.quantity),d(!1)}}catch(e){console.log(e),d(!1)}});const P="undefined"!=typeof window?JSON.parse(localStorage.getItem("cart")):null,E=async(t,a,e,r={})=>{if(i._loggedIn){var s=(a?.items&&a?.items?.reduce((e,t)=>e+(t?.price??0),0))??0;if(0===i?._stripeSecret?.card?.data.length&&0<a?.items?.length&&0<s)n({message:"You must add a Credit Card to Purchase",placement:"purchase"}),d(!1);else{s=await performPurchase(i.apiUrl,i.domainKey,i._loggedIn,a,d,{snapshot:t,extra:r});if(console.log(s),s)if(e&&clearTimeout(e),d(!1),console.log(s),"success"===s.status){s.data&&s.data.cart&&updateCart(i._cart,s.data.cart);let e=[...u];e=e.filter(e=>e&&"purchase"!==e.type);var c=i.devLocal?i.devAddress:"https://"+i.domainUrl;e.push({message:"Purchase success",href:c+"/r?o="+s.data.order.id,hrefCta:"View your Receipt Here",type:"purchase"}),o(e),fireGlobalEvent({event:"product_purchase",status:"success",prePurchaseCart:a,cart:s.data.cart,snapshot:t,extra:r,receipt:s.data.order.id,receiptUrl:c+"/r?o="+s.data.order.id},i._LocalEventEmitter),console.log("Purchase Success",s)}else n({message:"Purchase failed",placement:"purchase"}),fireGlobalEvent({event:"product_purchase",status:"failed",prePurchaseCart:a,snapshot:t,extra:r},i._LocalEventEmitter);else e&&clearTimeout(e),d(!1),n({message:"Purchase failed",placement:"purchase"})}}else n({message:"You must sign in to purchase",placement:"purchase"}),d(!1)},T=React.useMemo(()=>{const t=P?.items&&P.items[0];if(t?.product?.styles){var e=t.product.styles.find(e=>e.sid===t.style);if(e){const a=resolveRegionBasedPrice(i,e);if(a){const r=[];e={items:P.items.filter(t=>{var e=t.product.styles.find(e=>e.sid===t.style);if(e){e=resolveRegionBasedPrice(i,e);if(e&&e.currency===a.currency)return!0}return r.push(t),!1}),currency:a,user:P.user};return e.remaining=r,e}}}},[i,P]);var M=React.useCallback(async e=>{try{if(!p){d(!0);var t=setTimeout(()=>{d(!1)},2e4);n(null);const a=calculateTotal(T,null,{region:T?.currency??null,object:!0},i);if(console.log("snapshot",a,i._solution),i._solution){if("stripe"===i._solution.payment)E(a,T,t,{type:"stripe"});else if("paystack"===i._solution.payment&&PaystackPop&&i?.paymentConfig?.keys?.paystack&&i?._loggedIn?.email){const r=uuidv4();clearTimeout(t),T?.currency?.currency&&(await PaystackPop.setup({key:i.paymentConfig.keys.paystack,email:i._loggedIn.email,amount:100*a.total,currency:T.currency.currency,ref:r,callback:function(e){i._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchaseComplete",type:"paystack",data:{cart:T,paystackResponse:e,snapshot:a,status:"payment_complete",transactionRef:r,type:"paystack"}})},onClose:function(){d(!1),n({message:"Purchase failed",placement:"purchase"})}})).openIframe()}}else d(!1),n({message:"Purchase currently not supported in your Country",placement:"purchase"})}}catch(e){d(!1)}}),S=(React.useEffect(()=>{var e;"cart"!==i?._openMenu?.currentMenu&&!r||m?"cart"!==i?._openMenu?.currentMenu&&!r&&m&&(y(!0),e=setTimeout(()=>{y(!1),g(!1),v.current=null},500),v.current=e):(g(!0),y(!1),v?.current&&clearTimeout(v.current))},[i?._openMenu?.currentMenu,h,m,v?.current]),calculateTotal(T,null,{region:T?.currency??null,object:!0},i)),O=S&&Object.prototype.hasOwnProperty.call(S,"total")&&0===S.total&&0<P?.items?.length,S=Object.assign({total:S?.total},T);return React.createElement(React.Fragment,null,React.createElement(Cart,_extends({},i,{cartMeta:S,fetchBusy:p,menuOpen:m,closing:h,cart:P,useCartOfCurrency:T,handleUpdateQuantity:b,handlePerformPurchase:M,handleClearError:R,pageError:a,free:O,cartMessages:u,setCartMessages:o,handleToggleSettings:C,showContent:c,setShowContent:l,ccChildren:i?.ccChildren,container:f,setPageError:n})))};export default Module;