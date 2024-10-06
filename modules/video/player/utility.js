import{checkiOS}from"/modules/util";function _callback_onAutoplayBlocked(){}function isSafari(){var e=-1<window.navigator.userAgent.toLowerCase().indexOf("chrome"),r=-1<window.navigator.userAgent.toLowerCase().indexOf("safari");return!e&&r}const setAndPlay=(e,r,t)=>{t?.src&&(setSource(e,r,t),ensureAutoPlay(t.play,t))},setSource=(e,r,t)=>{t.src({src:e,type:"hls"===r?"application/x-mpegURL":"application/dash+xml"})},ensureSetSource=(e,r,t,o)=>{var n;console.log("current src",e?.currentSrc(),"intent src",r?.src),""===e?.currentSrc()&&""!==r?.src&&(n="live"==(t="Live"==(r=t)?.__typename?"live":"static")||checkiOS()?"hls":"mpd",r)&&o&&(t="static"==t?o+"/video/"+r[n]:""+r?.meta?.channel?.playbackUrl)&&e.src({src:t,type:"hls"==n?"application/x-mpegURL":"application/dash+xml"})};function ensureAutoPlay(r,t,o){try{var e=window.Promise?window.Promise.toString():"";if(-1!==e.indexOf("function Promise()")||-1!==e.indexOf("function ZoneAwarePromise()"))return console.log(r),r().catch(function(e){return"NotAllowedError"==e.name?(console.error("_checkAutoPlay: error.name:","NotAllowedError"),o&&o()):"AbortError"==e.name&&isSafari()?(console.error("_checkAutoPlay: AbortError (Safari)"),o&&o()):console.error("_checkAutoPlay: happened something else ",e),e}).then(function(e){if(console.log("_checkAutoPlay: then"),console.log(r,t,e),e&&e.toString&&/failed because the user didn\'t interact with the document first/.test(e.toString()))t.muted(!0);else if(e?.toString&&/Cannot read properties of undefined/.test(e.toString()))return setTimeout(()=>{try{t&&t.play()}catch(e){console.log("Issue autoplaying after delayed attempt")}},250),null;try{return console.log("Attempt Play",t.play,t),t.play(),setTimeout(()=>{t.hasStarted()||(t.muted(!0),t.play())}),!0}catch(e){return e}});console.error("_checkAutoplay: promise could not work in your browser ",r)}catch(e){return console.log(e),e}}export default{ensureAutoPlay:ensureAutoPlay,ensureSetSource:ensureSetSource,setAndPlay:setAndPlay,setSource:setSource};export{setAndPlay,setSource,ensureSetSource,ensureAutoPlay};