(function(){"use strict";const r={WIDGET_URL:"https://sarthiai-widget.vercel.app ",DEFAULT_POSITION:"bottom-right"},p=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>`,x=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`;(function(){let o=null,t=null,e=null,d=!1,a=null,s=r.DEFAULT_POSITION;const c=document.currentScript;if(c)a=c.getAttribute("data-organization-id"),s=c.getAttribute("data-position")||r.DEFAULT_POSITION;else{const i=document.querySelectorAll('script[src*="embed"]'),n=Array.from(i).find(l=>l.hasAttribute("data-organization-id"));n&&(a=n.getAttribute("data-organization-id"),s=n.getAttribute("data-position")||r.DEFAULT_POSITION)}if(!a){console.error("Echo Widget: data-organization-id attribute is required");return}function u(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m()}function m(){e=document.createElement("button"),e.id="echo-widget-button",e.innerHTML=p,e.style.cssText=`
      position: fixed;
      ${s==="bottom-right"?"right: 20px;":"left: 20px;"}
      bottom: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #3b82f6;
      color: white;
      border: none;
      cursor: pointer;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(59, 130, 246, 0.35);
      transition: all 0.2s ease;
    `,e.addEventListener("click",y),e.addEventListener("mouseenter",()=>{e&&(e.style.transform="scale(1.05)")}),e.addEventListener("mouseleave",()=>{e&&(e.style.transform="scale(1)")}),document.body.appendChild(e),t=document.createElement("div"),t.id="echo-widget-container",t.style.cssText=`
      position: fixed;
      ${s==="bottom-right"?"right: 20px;":"left: 20px;"}
      bottom: 90px;
      width: 400px;
      height: 600px;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 110px);
      z-index: 999998;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
      display: none;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
    `,o=document.createElement("iframe"),o.src=w(),o.style.cssText=`
      width: 100%;
      height: 100%;
      border: none;
    `,o.allow="microphone; clipboard-read; clipboard-write",t.appendChild(o),document.body.appendChild(t);const i="echo-widget-styles";if(!document.getElementById(i)){const n=document.createElement("style");n.id=i,n.textContent=`
        @media (max-width: 768px) {
          #echo-widget-container {
            width: 100% !important;
            height: 100% !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            border-radius: 0 !important;
          }
          #echo-widget-button {
            bottom: 20px !important;
            /* Ensure the button is still clickable if needed, but mostly rely on the close button inside the chat */
          }
        }
      `,document.head.appendChild(n)}window.addEventListener("message",g)}function w(){const i=new URLSearchParams;return i.append("organizationId",a),`${r.WIDGET_URL}?${i.toString()}`}function g(i){if(i.origin!==new URL(r.WIDGET_URL).origin)return;const{type:n,payload:l}=i.data;switch(n){case"close":h();break;case"resize":l.height&&t&&(t.style.height=`${l.height}px`);break}}function y(){d?h():f()}function f(){t&&e&&(d=!0,t.style.display="block",setTimeout(()=>{t&&(t.style.opacity="1",t.style.transform="translateY(0)")},10),e.innerHTML=x)}function h(){t&&e&&(d=!1,t.style.opacity="0",t.style.transform="translateY(10px)",setTimeout(()=>{t&&(t.style.display="none")},300),e.innerHTML=p,e.style.background="#3b82f6")}function b(){window.removeEventListener("message",g),t&&(t.remove(),t=null,o=null),e&&(e.remove(),e=null),d=!1}function v(i){b(),i.organizationId&&(a=i.organizationId),i.position&&(s=i.position),u()}window.EchoWidget={init:v,show:f,hide:h,destroy:b},u()})()})();
