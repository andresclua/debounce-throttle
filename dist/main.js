(()=>{"use strict";new class{constructor(){this.input=document.querySelector("input"),this.defaultState=document.getElementById("default"),this.debounceState=document.getElementById("debounce"),this.throttleState=document.getElementById("throttle"),this.events()}events(){this.input.addEventListener("input",(t=>{this.defaultState.innerHTML=t.target.value})),this.input.addEventListener("input",function(t,e){let n;return(...e)=>{const i=this;clearTimeout(n),n=setTimeout((()=>t.apply(i,e)),1e3)}}((t=>{this.debounceState.innerHTML=t.target.value}))),this.input.addEventListener("input",function(t,e,n=!1){let i=null,u=!0;return function(){const s=()=>{t.apply(this,arguments),i=null};n&&u&&(u=!1,s()),i||(i=setTimeout(s,e))}}((t=>{this.throttleState.innerHTML=t.target.value}),1e3))}}})();