(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{7144:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/postman/campaign",function(){return e(9265)}])},1420:function(n,t,e){"use strict";var i=e(7297),a=e(5893);e(7294);var s=e(2121),r=e(5405),l=e(2220),c=e(733);function o(){let n=(0,i.Z)(["\n  width: auto;\n"]);return o=function(){return n},n}function u(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n"]);return u=function(){return n},n}function d(){let n=(0,i.Z)(["\n  display: flex;\n  margin: auto;\n  svg {\n    margin-right: 4px;\n  }\n"]);return d=function(){return n},n}function h(){let n=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  .LoaderBalls {\n    width: 90px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &__item {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n\n      &:nth-child(1) {\n        animation: bouncing 0.4s alternate infinite\n          cubic-bezier(0.6, 0.05, 0.15, 0.95);\n        background: ",";\n      }\n\n      &:nth-child(2) {\n        animation: bouncing 0.4s 0.1s alternate infinite\n          cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;\n        background: ",";\n      }\n\n      &:nth-child(3) {\n        animation: bouncing 0.4s 0.2s alternate infinite\n          cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;\n        background: ",";\n      }\n    }\n  }\n\n  @keyframes bouncing {\n    0% {\n      transform: translate3d(0, 10px, 0) scale(1.2, 0.85);\n    }\n\n    100% {\n      transform: translate3d(0, -20px, 0) scale(0.9, 1.1);\n    }\n  }\n"]);return h=function(){return n},n}let{Text:m}=c.Z,p=(0,l.Z)(s.u)(o()),x=l.Z.div(u()),f=l.Z.div(d()),g=l.Z.div(h(),n=>{let{theme:t}=n;return t.components.secondary},n=>{let{theme:t}=n;return t.components.chatbot},n=>{let{theme:t}=n;return t.components.liveChat}),w=n=>{let{loading:t}=n;return(0,a.jsx)(p,{isVisible:t,width:"auto",children:(0,a.jsxs)(x,{children:[(0,a.jsxs)(f,{children:[(0,a.jsx)(r.T,{size:3}),(0,a.jsx)(m,{weight:"semiBold",size:"6xl",children:"Platfo"})]}),(0,a.jsx)(g,{children:(0,a.jsxs)("div",{className:"LoaderBalls",children:[(0,a.jsx)("div",{className:"LoaderBalls__item"}),(0,a.jsx)("div",{className:"LoaderBalls__item"}),(0,a.jsx)("div",{className:"LoaderBalls__item"})]})})]})})};t.Z=w},9265:function(n,t,e){"use strict";e.r(t);var i=e(5893),a=e(4894),s=e(9294),r=e(9228),l=e(5900),c=e(7294),o=e(733),u=e(1420),d=e(6337),h=e(8742),m=e(7573);let{Text:p}=o.Z,x=()=>{let[n,t]=(0,c.useState)(!1),[e,a]=(0,c.useState)([]),[s,o]=(0,c.useState)([]),[x,f]=(0,c.useState)(),g=async()=>{try{t(!0);let n=await d.Z.getAccounts();if(a(n.data),n.data.length>0)return t(!1),n.data[0];return t(!1),null}catch(e){return t(!1),null}},w=async n=>{try{t(!0);let e=await m.Z.getCampaigns(n);o(e.data.items),t(!1)}catch(i){t(!1)}},j=async n=>{await w(n.page_id),f(n)};return(0,c.useEffect)(()=>{(async()=>{let n=await g();n?(f(n),await w(n.page_id)):o([])})()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{loading:n}),e.length>0&&(0,i.jsx)(r.n,{className:"m-3",width:"auto",children:(0,i.jsx)("div",{className:"flex w-full space-x-4 justify-start overflow-x-auto",children:e.map(n=>(0,i.jsx)(l.q,{url:n.profile_image,type:"image",click:j,data:n,isActive:n.id===(null==x?void 0:x.id),color:"postman",icon:h.t4[n.platform],title:n.username},n.id))})}),(0,i.jsxs)("div",{className:"flex flex-wrap",children:[x&&(0,i.jsx)("div",{className:"basis-1/6 m-3 "}),null==s?void 0:s.map(n=>(0,i.jsx)("div",{className:"basis-1/6 m-3",children:(0,i.jsx)(r.n,{data:n,width:"255px",height:"255px",children:(0,i.jsxs)("div",{className:"flex flex-col text-center w-full",children:[(0,i.jsxs)(p,{weight:"semiBold",children:[" ",n.name," "]}),(0,i.jsx)(p,{weight:"light",color:"nonActive",children:n.description})]})})},n.id))]})]})};t.default=x,x.getLayout=n=>(0,i.jsx)(a.c,{topMenu:s.fF,meta:{title:"Campaigns"},color:"postman",children:n})},7573:function(n,t,e){"use strict";var i=e(4029);class a extends i.Z{constructor(){super({suffix:"api/v1/postman"}),this.getGroups=(n,t)=>this.$axios.get("group/".concat(n),{params:t}),this.postGroup=n=>this.$axios.post("group",n),this.deleteGroup=n=>this.$axios.delete("group/".concat(n)),this.getCampaigns=(n,t)=>this.$axios.get("campaign/".concat(n),{params:t})}}let s=new a;t.Z=s}},function(n){n.O(0,[32,876,380,774,888,179],function(){return n(n.s=7144)}),_N_E=n.O()}]);