const tryInstantiateCachedState=(t,e,a,r)=>{try{a&&!r&&a(!0);var n=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):null;return n&&e&&e(n),n}catch(t){return null}};export{tryInstantiateCachedState};