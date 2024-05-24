import React from"react";import{Elements,CardElement,ElementsConsumer}from"@stripe/react-stripe-js";import{loadStripe}from"@stripe/stripe-js";import{getStripeSecretData,saveCreditCardInfo}from"../utility/payment/index";import{checkSignedIn,checkSignedInAndPrompt,logout}from"../utility/onboarding/SignIn";import{fireGlobalEvent}from"/modules/utility/utility";const DEFAULT_SOLUTION={payment:"stripe"},Module=l=>{const r=React.useRef(),[e,t]=React.useState(!1),[a,n]=React.useState(!1),[c,i]=React.useState(!1),[s,o]=React.useState(!1),[m,d]=React.useState(null),[u,p]=React.useState(!1),[g,_]=React.useState(!1),[y,S]=React.useState(DEFAULT_SOLUTION),f=React.useRef(),E=(React.useEffect(()=>{e||(l._setSolution&&l._setSolution(y),l.stagger&&(f.current=setTimeout(()=>{n(!0)},l.stagger)),t(!0))},[e,l.stagger,y]),React.useCallback(e=>{var t;return"incomplete"===l?._loggedIn?.meta?.account?(t=l._loggedIn.meta).firstName+" "+t.lastName:""})),C=(React.useEffect(()=>{var e;l?._loggedIn?.meta?.location&&l?.regionsData&&l.regionsData[l._loggedIn.meta.location]&&((e=l.regionsData[l._loggedIn.meta.location]).payment!==y.payment||!y||y&&!y.payment)&&(S(e),l.setSolution&&l.setSolution(e),l.setShowContent)&&l.setShowContent(-1<["stripe"].indexOf(e.payment))},[l._loggedIn,l.regionsData,y,l.setSolution]),React.useEffect(()=>{var e;console.log(l.useAdmin,l.paymentConfig),l?.useAdmin?(e=loadStripe(l.useAdmin))&&d(e):l?.paymentConfig?.keys?.stripe&&!m&&(e=loadStripe(l.paymentConfig.keys.stripe))&&d(e)},[l?.paymentConfig?.keys?.stripe,l.useAdmin]),React.useEffect(()=>{!async function(){if("stripe"===y.payment&&!c&&l._loggedIn&&!s&&!l._stripeSecret)try{o(!0);var e=await getStripeSecretData(l.apiUrl,l.domainKey,l._loggedIn,{useAdmin:l?.useAdmin});if(!(e&&e.client_secret&&e.card))throw new Error;l._setStripeSecret(e),o(!1)}catch(e){console.log(e),o(!1)}}()},[l._loggedIn,l._stripeSecret,y,l.useAdmin]),React.useEffect(()=>{C(l._stripeSecret)},[l._stripeSecret]),console.log(l),e=>{e?.card?.data&&e.card.data[0]&&e.card.data[0]?.card&&e.card.data[0]?.billing_details&&e.card.data[0].card?.last4&&e.card.data[0].card?.exp_month&&e.card.data[0].card?.exp_year&&i({name:e.card.data[0].billing_details.name||null,last4:e.card.data[0].card.last4,exp_month:e.card.data[0].card.exp_month,exp_year:(t=>{try{var e=t.toString();if(4===e.length)return e.substring(2,4);throw new Error}catch(e){return t}})(e.card.data[0].card.exp_year)})});React.useEffect(()=>{(!l._setValidCc||l._validCc===c||!c)&&c||l._setValidCc(c)},[l?._validCc,c]),React.useEffect(()=>{(l?._stripeSecret.adminSecret&&l.validCc&&!l.useAdmin||l.useAdmin&&l?._stripeSecret&&!l._stripeSecret.adminSecret)&&(i(!1),l._setStripeSecret(!1))},[l?._stripeSecret,l?.useAdmin,l?._validCc]);var R=React.useCallback(e=>{if(u)return p(!1),1;p(!0)});console.log("CC",y,l._stripeSecret,c,u);const h="full"===l._loggedIn?.meta?.account;return React.createElement("div",{className:""+l.className,style:l.sx},React.createElement("div",{className:g?"fetchNotBusy fetchBusy":"fetchNotBusy"}),l.useAdmin?React.createElement("div",{style:{background:"#353535"}},"Payments to Tycoon Systems Corp."):null,!l.stagger||l.stagger&&a?React.createElement(React.Fragment,null,"stripe"===y?.payment?c&&!u?React.createElement("div",null,React.createElement("div",{className:"Ecommerce_CreditCard_Container",style:{padding:".125rem"}},l.purchaseDescription?React.createElement("span",null,l.purchaseDescription):null,React.createElement("div",{className:"Ecommerce_CreditCard_Container_Meta"},React.createElement("div",null,React.createElement("p",{style:{marginBottom:"0.1rem",paddingBottom:"0rem",margin:0}},"Ending in ",React.createElement("span",null,c.last4)),React.createElement("p",{style:{marginBottom:"0.1rem",paddingBottom:"0rem",margin:0}},"Expiry ",React.createElement("span",null,c.exp_month," / ",c.exp_year))),c.name?React.createElement("p",{style:{marginTop:0,margin:0}},c.name):null))):l._stripeSecret&&l._stripeSecret.client_secret?React.createElement(Elements,{stripe:m,options:{clientSecret:l._stripeSecret.client_secret}},React.createElement(ElementsConsumer,null,({elements:t,stripe:a})=>React.createElement("form",{onSubmit:e=>{(async(e,t,a,r)=>{try{e.preventDefault();var n,c,i=document.getElementById("Ecommerce_CreditCard_FullNameInput")??r?.current;console.log(e,t,a,i),g||(_(!0),setTimeout(()=>{_(!1)},15e3),checkSignedInAndPrompt()&&(i.value?((n={fullName:"",result:null,stripeSecret:l._stripeSecret}).fullName=i.value,n.result=await a.confirmCardSetup(l._stripeSecret.client_secret,{payment_method:{card:t.getElement(CardElement),billing_details:{name:n.fullName}}}),console.log("Stripe Payment",n,l),(c=await saveCreditCardInfo(l.apiUrl,l.domainKey,n,checkSignedIn,{useAdmin:l?.useAdmin}))?"disauthenticated"==c?(l._setLoggedIn(!1),l._setStripeSecret(!1),logout(),_(!1)):"success"==c.status&&c.newSecret&&(p(!1),l._setStripeSecret(c.newSecret),_(!1),l.expressCheckout&&(l.setFetchBusy(!0),setTimeout(()=>{l.setFetchBusy(!1),setTimeout(()=>{fireGlobalEvent({event:"checkout"},l._LocalEventEmitter)},1)},500)),l.saveBillingInfoFunction)&&(l.setFetchBusy(!0),setTimeout(()=>{l.setFetchBusy(!1),setTimeout(()=>{l.saveBillingInfoFunction()},1)},Object.prototype.hasOwnProperty.call(l,"saveBillingInfoFunctionDelay")?l.saveBillingInfoFunctionDelay:150)):(l._setPageError("Failed to save Credit Card"),_(!1))):(l._setPageError("Please type in your Full Name as it appears on your Credit Card"),_(!1))))}catch(e){console.log(e),_(!1)}})(e,t,a,r)},style:{display:"grid",gap:".125rem"}},React.createElement("input",{className:"Ecommerce_CreditCard_FullNameInput_Default",type:"text",placeholder:"Full Name on Card",ref:r,defaultValue:E()}),React.createElement(CardElement,{options:{iconStyle:"solid",style:{base:{fontSize:"16px",color:"black",fontWeight:500,"::placeholder":{color:"grey"},fontSmoothing:"antialiased",width:"100%",backgroundColor:"white"},invalid:{color:"#9e2146"}}}}),h?React.createElement("button",{type:"submit"},l.saveBillingInfoText??"Save Billing Info"):!h&&l?._stripeSecret?.client_secret?React.createElement("button",{type:"submit",modif:"hidden_initiate_save_billing_info"},l.saveBillingInfoText??l?.expressCheckout?"Purchase":"Save Billing Info"):null))):null:null,"stripe"===y?.payment&&c?React.createElement("div",{style:{display:"grid",gap:".125rem",marginTop:".125rem"}},React.createElement("button",{type:"submit",onClick:R},u?"Use Current Card":"Register New Card")):null):null,l.children)};export default Module;