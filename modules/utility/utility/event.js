const emitOnAction=(t,e)=>{try{window&&window.dispatchEvent(new CustomEvent(e,{detail:Object.assign({action:e},t)}))}catch(t){}},fireGlobalEvent=(t,e)=>{var i,r,n,o;console.log(t),t&&e&&(i=t?.currentTarget?.getAttribute("action")??t.event??null)&&"string"==typeof i&&("buy"===i?(r=t?.currentTarget?.getAttribute("item"),n=t?.currentTarget?.getAttribute("selectedstyle"),o=t?.currentTarget?.getAttribute("currentoption"),e.dispatch("global_event",{action:i,e:t,item:r,style:n,option:o}),emitOnAction({action:i,e:t,item:r,style:n,option:o},i)):"add_to_cart"===i?(r=t?.currentTarget?.getAttribute("item"),n=t?.currentTarget?.getAttribute("selectedstyle"),o=t?.currentTarget?.getAttribute("currentoption"),e.dispatch("global_event",{action:i,e:t,item:r,style:n,option:o}),emitOnAction({action:i,e:t,item:r,style:n,option:o},i)):"add_to_cart_subscribe"===i?(r=t?.currentTarget?.getAttribute("item"),n=t?.currentTarget?.getAttribute("selectedstyle"),o=t?.currentTarget?.getAttribute("currentoption"),e.dispatch("global_event",{action:i,e:t,item:r,style:n,option:o}),emitOnAction({action:i,e:t,item:r,style:n,option:o},i)):(e.dispatch("global_event",{custom:!0,action:i,e:t}),emitOnAction(t,i)))},selectThisText=t=>{var e;t?.currentTarget?.getAttribute&&(e=t.currentTarget.getAttribute("selectValue"))&&navigator?.clipboard?.writeText&&(navigator.clipboard.writeText(e),window?.getSelection)&&window.getSelection().selectAllChildren(t.currentTarget)};export{emitOnAction,fireGlobalEvent,selectThisText};