(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{XRsP:function(t,n,e){"use strict";e.r(n),e.d(n,"startHardwareBackButton",(function(){return r}));const r=()=>{const t=document;let n=!1;t.addEventListener("backbutton",()=>{if(n)return;const e=[],r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){e.push({priority:t,handler:n})}}});if(t.dispatchEvent(r),e.length>0){let t,r=Number.MIN_SAFE_INTEGER;e.forEach(({priority:n,handler:e})=>{n>=r&&(r=n,t=e)}),n=!0,o(t).then(()=>n=!1)}})},o=async t=>{try{if(t){const n=t();null!=n&&await n}}catch(n){console.error(n)}}}}]);