import{addToCartGlobal,calculateTotal,updateCart,performPurchase}from"../../utility/ecommerce";import{isObjectEmpty}from"/modules/util";const handleSetLoggedIn=(t,e,a)=>{t._loggedIn?a(t._loggedIn):(t=e())&&a(t)},toggleSingleOpenMenu=(t,e,a,o,r)=>{!r&&a&&a.currentMenu&&a.currentMenu==e?o({}):o({currentMenu:e})},handleCheckUserData=async(t,a)=>{if(t&&a){var o={ip:!(!a.meta||isObjectEmpty(a.meta)||"::ffff:127.0.0.1"!=(a.meta.ip&&a.meta.ip)),location:!(!a.meta||isObjectEmpty(a.meta)||a.meta.location)};console.log("Must Check",o);let e=!1;for(let t=0;t<Object.entries(o).length;t++)if(Object.entries(o)[t][1]){e=!0;break}if(e)return o}return!1},handleSetCart=(t,e)=>{var a=JSON.parse(localStorage.getItem("cart"));a?a.user||((a=a).user=t,localStorage.setItem("cart",JSON.stringify(a)),e(a)):t&&(a={user:t,cart:[]},localStorage.setItem("cart",JSON.stringify(a)),e(a))},forceUpdateProps=(t,e)=>{t&&"_cart"===t.dispatch&&e(JSON.parse(window.localStorage.getItem("cart")))},registerSocket=(t,e,a,o,r,l)=>{e||o||(e={reconnectAttempts:1},r.socketpath&&(e.path=r.socketpath,e.port=r.socketPort),a(t(r.socketUrl,e)),o=setTimeout(()=>{l(null)},2e4),l(o))},handleGlobalEvent=async(t,e,a,o)=>{var r,l;t&&("buy"===t.action?(e._setPageError(null),!a&&t.item&&t.style&&t.option&&(r=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(e.apiUrl,e.domainKey,e._loggedIn,r,t.item,{style:t.style,option:t.option},o),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l)&&"success"===l.status&&(updateCart(r,l.cart),r=JSON.parse(localStorage.getItem("cart")),l=calculateTotal(r,null,{object:!0}),console.log("snapshot",l),(l=await performPurchase(e.apiUrl,e.domainKey,e._loggedIn,r,o,{snapshot:l}))?"success"===l.status?(l.data&&l.data.cart&&updateCart(r,l.data.cart),l?.data?.order?.id&&(e._LocalEventEmitter.dispatch("cart_update",{dispatch:"purchase",id:l.data.order.id}),console.log("Purchase Success",l))):e._setPageError({message:"Purchase failed",placement:"purchase"}):(console.log(l),e._setPageError({message:"Purchase failed",placement:"purchase"})),o(!1))):"add_to_cart"===t.action?(e._setPageError(null),!a&&t.item&&t.style&&t.option&&(r=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(e.apiUrl,e.domainKey,e._loggedIn,r,t.item,{style:t.style,option:t.option},o),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l?"success"===l.status&&updateCart(r,l.cart):e._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):"add_to_cart_subscribe"===t.action?(e._setPageError(null),!a&&t.item&&t.style&&t.option&&(r=JSON.parse(localStorage.getItem("cart")),l=await addToCartGlobal(e.apiUrl,e.domainKey,e._loggedIn,r,t.item,{style:t.style,option:t.option},o,{subscribe:"monthly"}),e._LocalEventEmitter.dispatch("cart_update",{dispatch:"flashCart"}),l?"success"===l.status&&updateCart(r,l.cart):e._setPageError({message:"Add to cart failed",placement:"add_to_cart"}))):"logout"===t.action&&e._setLoggedIn&&e._setLoggedIn(!1))},registerGoogleSignIn=`// Register google one tap sign in event to pass data to registration/login function
    const onOneTapSignedInGoogle = data => {
        let event = new CustomEvent("thirdparty-signin", { "detail": data });
        document.dispatchEvent(event);
    }
    const doGoogleInit = (delay = 250) => {
        try {
            google.accounts.id.initialize({
                client_id: '169701902623-9a74mqcbqr38uj87qm8tm3190cicaa7m.apps.googleusercontent.com',
                callback: onOneTapSignedInGoogle
            })
            console.log('Google Loaded')
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