function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,r=arguments[t];for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}import React from"react";import{fireGlobalEvent}from"../../utility/utility/event.js";import{CreditCard}from"../../payment/index.js";import{logout}from"/modules/utility/onboarding/SignIn.js";import{Cart}from"/layout/index.js";import{addToCart,calculateTotal,performPurchase,resolveCurrentStyle,resolveCurrentOption,resolveMoneyFormat,resolveRegionBasedPrice,updateCart,resolveImg}from"/modules/utility/ecommerce/ecommerce.js";import Inventory from"@mui/icons-material/Inventory";import{v4 as uuidv4}from"uuid";const Module=i=>{const[e,t]=React.useState(!1),[p,d]=React.useState(!1),[a,n]=React.useState(null),[o,u]=React.useState([]),[r,s]=React.useState(!1);var[c,l]=React.useState(!0);const[m,g]=React.useState(!1),[y,h]=React.useState(!1),f=React.useRef(),v=React.useRef(),C=(React.useEffect(()=>{e||(f.current.addEventListener("mouseover",C),t(!0))},[e]),()=>{i._LocalEventEmitter.dispatch("cart_update",{dispatch:"mouseOver"})});var _=React.useCallback(e=>{e&&i&&i._toggleSingleOpenMenu&&i._toggleSingleOpenMenu(e,"main_settings")},[i._openMenu]),R=(i._LocalEventEmitter.unsubscribe("cart_update"),i._LocalEventEmitter.subscribe("cart_update",t=>{let e=[...o];var a;t&&(console.log("Cart Update",t),"purchase"===t.dispatch?(e=e.filter(e=>e&&"purchase"!==e.type),a=i.devLocal?i.devAddress:"https://"+i.domainUrl,e.push({message:"Purchase success",href:a+"/r?o="+t.id,hrefCta:"View your Receipt Here",type:"purchase"}),u(e)):"flashCart"===t.dispatch?(s(!0),i.passOveride&&i.passOveride("cart"),setTimeout(()=>{s(!1)},1500)):"purchaseComplete"===t.dispatch?"paystack"===t.type&&(console.log("paystack purchase",t),a=setTimeout(()=>{d(!1)},2e4),E(t.data.snapshot,t.data.cart,a,t.data)):"mouseOver"===t.dispatch?(console.log("Did mouse over",i,y),"cart"===i?._openMenu?.currentMenu&&!y&&i._toggleSingleOpenMenu&&i._toggleSingleOpenMenu(null,"cart",!0)):"cartMessage"===t.dispatch&&t?.type&&(-1<(a=e.findIndex(e=>e.type===t.type))&&e.splice(a,1),e.push({message:t?.message,href:t?.href,hrefCta:t?.hrefCta,type:t?.type}),u(e)))}),React.useCallback(e=>{n(null)})),b=React.useCallback(async t=>{try{if(console.log(t.currentTarget.getAttribute,p),!p&&t&&t.currentTarget&&t.currentTarget.getAttribute){d(!0);var a=t.currentTarget.getAttribute("styleId"),r=t.currentTarget.getAttribute("optionId"),s=t.currentTarget.getAttribute("quantity");const l=t.currentTarget.getAttribute("productId");var c={};Number(t.currentTarget.value)<Number(s)&&(c.decrement=!0);let e;var n,o,u=JSON.parse(localStorage.getItem("cart"));(e=l&&u&&u.items?u.items.find(e=>e.product.id===l):e)&&(n=await addToCart(i.apiUrl,i.domainKey,i._loggedIn,u,e.product,{style:a,option:r},d,c))&&"success"===n.status&&(updateCart(u,n.cart),n.cart)&&n.cart.items&&(o=n.cart.items.find(e=>e.product.id===l))&&(t.target.value=o.quantity),d(!1)}}catch(e){console.log(e),d(!1)}});const P="undefined"!=typeof window?JSON.parse(localStorage.getItem("cart")):null,E=async(t,a,e,r={})=>{if(i._loggedIn)if(0===i?._stripeSecret?.card?.data.length)n({message:"You must add a Credit Card to Purchase",placement:"purchase"}),d(!1);else{var s=await performPurchase(i.apiUrl,i.domainKey,i._loggedIn,a,d,{snapshot:t,extra:r});if(console.log(s),s)if(e&&clearTimeout(e),d(!1),console.log(s),"success"===s.status){s.data&&s.data.cart&&updateCart(i._cart,s.data.cart);let e=[...o];e=e.filter(e=>e&&"purchase"!==e.type);var c=i.devLocal?i.devAddress:"https://"+i.domainUrl;e.push({message:"Purchase success",href:c+"/r?o="+s.data.order.id,hrefCta:"View your Receipt Here",type:"purchase"}),u(e),fireGlobalEvent({event:"product_purchase",status:"success",prePurchaseCart:a,cart:s.data.cart,snapshot:t,extra:r,receipt:s.data.order.id,receiptUrl:c+"/r?o="+s.data.order.id},i._LocalEventEmitter),console.log("Purchase Success",s)}else n({message:"Purchase failed",placement:"purchase"}),fireGlobalEvent({event:"product_purchase",status:"failed",prePurchaseCart:a,snapshot:t,extra:r},i._LocalEventEmitter);else e&&clearTimeout(e),d(!1),n({message:"Purchase failed",placement:"purchase"})}else n({message:"You must sign in to purchase",placement:"purchase"}),d(!1)},S=React.useMemo(()=>{const t=P?.items&&P.items[0];if(t?.product?.styles){var e=t.product.styles.find(e=>e.sid===t.style);if(e){const a=resolveRegionBasedPrice(i,e);if(console.log(a),a){const r=[];e={items:P.items.filter(t=>{var e=t.product.styles.find(e=>e.sid===t.style);if(e){e=resolveRegionBasedPrice(i,e);if(e&&e.currency===a.currency)return!0}return r.push(t),!1}),currency:a,user:P.user};return e.remaining=r,e}}}},[i,P]);var T=React.useCallback(async e=>{try{if(!p){d(!0);var t=setTimeout(()=>{d(!1)},2e4);n(null),console.log(S);const a=calculateTotal(S,null,{region:S?.currency??null,object:!0},i);if(console.log("snapshot",a,i._solution),i._solution){if("stripe"===i._solution.payment)E(a,S,t,{type:"stripe"});else if("paystack"===i._solution.payment&&PaystackPop&&i?.paymentConfig?.keys?.paystack&&i?._loggedIn?.email){const r=uuidv4();clearTimeout(t),S?.currency?.currency&&(await PaystackPop.setup({key:i.paymentConfig.keys.paystack,email:i._loggedIn.email,amount:100*a.total,currency:S.currency.currency,ref:r,callback:function(e){i._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchaseComplete",type:"paystack",data:{cart:S,paystackResponse:e,snapshot:a,status:"payment_complete",transactionRef:r,type:"paystack"}})},onClose:function(){d(!1),n({message:"Purchase failed",placement:"purchase"})}})).openIframe()}}else d(!1),n({message:"Purchase currently not supported in your Country",placement:"purchase"})}}catch(e){d(!1)}}),M=(React.useEffect(()=>{var e;"cart"!==i?._openMenu?.currentMenu&&!r||m?"cart"!==i?._openMenu?.currentMenu&&!r&&m&&(h(!0),e=setTimeout(()=>{h(!1),g(!1),v.current=null},500),v.current=e):(g(!0),h(!1),v?.current&&clearTimeout(v.current))},[i?._openMenu?.currentMenu,y,m,v?.current]),calculateTotal(S,null,{region:S?.currency??null,object:!0},i)),M=M&&Object.prototype.hasOwnProperty.call(M,"total")&&0===M.total&&0<P?.items?.length;return React.createElement(React.Fragment,null,React.createElement(Cart,_extends({},i,{fetchBusy:p,menuOpen:m,closing:y,cart:P,useCartOfCurrency:S,handleUpdateQuantity:b,handlePerformPurchase:T,handleClearError:R,pageError:a,free:M,cartMessages:o,setCartMessages:u,handleToggleSettings:_,showContent:c,setShowContent:l,ccChildren:i?.ccChildren,container:f,setPageError:n})))};export default Module;