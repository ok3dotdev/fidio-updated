import{addToCartGlobal,calculateTotal,updateCart,performPurchase,getUseCartOfCurrency}from"../../utility/ecommerce";import{isObjectEmpty}from"/modules/util";import{handleEventMail}from"../mail";const handleSetLoggedIn=(e,t,a)=>{e._loggedIn?a(e._loggedIn):(e=t())&&a(e)},toggleSingleOpenMenu=(e,t,a,r,o)=>{!o&&a&&a.currentMenu&&a.currentMenu==t?r({}):r({currentMenu:t})},handleCheckUserData=async(e,a)=>{if(e&&a){var r={ip:!(!a.meta||isObjectEmpty(a.meta)||"::ffff:127.0.0.1"!=(a.meta.ip&&a.meta.ip)),location:!(!a.meta||isObjectEmpty(a.meta)||a.meta.location)};let t=!1;for(let e=0;e<Object.entries(r).length;e++)if(Object.entries(r)[e][1]){t=!0;break}if(t)return r}return!1},handleSetCart=(e,t)=>{var a=JSON.parse(localStorage.getItem("cart"));a?a.user||((a=a).user=e,localStorage.setItem("cart",JSON.stringify(a)),t(a)):e&&(a={user:e,cart:[]},localStorage.setItem("cart",JSON.stringify(a)),t(a))},forceUpdateProps=(e,t)=>{e&&"_cart"===e.dispatch&&t(JSON.parse(window.localStorage.getItem("cart")))},registerSocket=(e,t,a,r,o,l)=>{t||r||(t={reconnectAttempts:1,transports:["polling","websocket"],withCredentials:!0},o.socketpath&&(t.path=o.socketpath,t.port=o.socketPort),a(e(o.socketUrl,t)),r=setTimeout(()=>{l(null)},2e4),l(r))},handleGlobalEvent=async(e,t,a,r)=>{var o,l;e&&("buy"===e.action?(t._setPageError(null),!a&&e.item&&e.style&&e.option&&(l=JSON.parse(localStorage.getItem("cart")),o=await addToCartGlobal(t.apiUrl,t.domainKey,t._loggedIn,l,e.item,{style:e.style,option:e.option},r),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),o)&&"success"===o.status&&(updateCart(l,o.cart),l=JSON.parse(localStorage.getItem("cart")),o=calculateTotal(l,null,{object:!0}),console.log("snapshot",o),(o=await performPurchase(t.apiUrl,t.domainKey,t._loggedIn,l,r,{snapshot:o}))?"success"===o.status?(o.data&&o.data.cart&&updateCart(l,o.data.cart),o?.data?.order?.id&&(t._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:o.data.order.id}),console.log("Purchase Success",o),handleEventMail(e,t))):t._setPageError({message:"Purchase failed",placement:"purchase"}):(console.log(o),t._setPageError({message:"Purchase failed",placement:"purchase"})),r(!1))):"checkout"===e.action?(t._setPageError(null),a||(l=JSON.parse(localStorage.getItem("cart")),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),o=getUseCartOfCurrency(t,l),l=calculateTotal(o,null,{region:o?.currency??null,object:!0},t),console.log("snapshot",l),console.log(o,r,t._log),(l=await performPurchase(t.apiUrl,t.domainKey,t._loggedIn,o,r,{snapshot:l,extra:{type:t?._solution?.payment??"stripe"}}))?"success"===l.status?(l.data&&l.data.cart&&updateCart(o,l.data.cart),l?.data?.order?.id&&(t._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:l.data.order.id}),console.log("Purchase Success",l),handleEventMail(e,t))):t._setPageError({message:"Purchase failed",placement:"purchase"}):(console.log(l),t._setPageError({message:"Purchase failed",placement:"purchase"})),r(!1))):"add_to_cart"===e.action?(t._setPageError(null),!a&&e.item&&(o=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(t.apiUrl,t.domainKey,t._loggedIn,o,e.item,{style:e.style??null,option:e.option??null},r),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l?"success"===l.status&&(updateCart(o,l.cart),handleEventMail(e,t)):t._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):"add_to_cart_subscribe"===e.action?(t._setPageError(null),!a&&e.item&&e.style&&e.option&&(o=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(t.apiUrl,t.domainKey,t._loggedIn,o,e.item,{style:e.style,option:e.option},r,{subscribe:"monthly"}),t._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l?"success"===l.status&&(updateCart(o,l.cart),handleEventMail(e,t)):t._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):("logout"===e.action&&(t._setLoggedIn&&t._setLoggedIn(!1),t._setStripeSecret)&&t._setStripeSecret(!1),handleEventMail(e,t)))},registerGoogleSignIn=e=>`// Register google one tap sign in event to pass data to registration/login function
        const onOneTapSignedInGoogle = data => {
            let event = new CustomEvent("thirdparty-signin", { "detail": data });
            document.dispatchEvent(event);
        }
        const doGoogleInit = (delay = 250) => {
            try {
                if (!window || (window && !window.googleInitialized)) {
                    google.accounts.id.initialize({
                        client_id: '${e}',
                        callback: onOneTapSignedInGoogle,
                        use_fedcm_for_prompt: true
                    })
                    window.googleInitialized = true
                    console.log('Google Loaded')
                }
                return true
            } catch (err) {
                // fail silently
                setTimeout(() => {
                    doGoogleInit(delay * 2)
                }, delay)
            }
        }
        try {
            let createdScripts = document.getElementsByClassName("lazyOnload");
            if (createdScripts && createdScripts.length > 1) { // Remove duplicate scripts
                for (let i = 1; i < createdScripts.length; i++) {
                    createdScripts[i].remove();
                }
            }
            doGoogleInit()
        } catch (err) {
            // fail silently
            setTimeout(() => {
                doGoogleInit(500)
            }, 250)
        }`;export{handleSetLoggedIn,toggleSingleOpenMenu,handleCheckUserData,handleSetCart,forceUpdateProps,registerSocket,handleGlobalEvent,registerGoogleSignIn};