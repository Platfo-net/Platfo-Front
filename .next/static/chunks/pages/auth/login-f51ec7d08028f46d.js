(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{163:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return t(2491)}])},9228:function(n,e,t){"use strict";t.d(e,{n:function(){return b}});var r=t(7297),i=t(5893),l=t(339),o=t(2220),s=t(7294),a=t(8217),c=t(733),u=t(2121),d=t(538);function m(){let n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ","\n  padding: 1rem;\n  background: ",";\n  color: ",";\n  ",";\n  header {\n    display: flex;\n    flex-direction: column;\n\n    .title {\n      display: flex;\n      flex-direction: row;\n      justify-content: ",";\n      position: relative;\n      .actions {\n        position: absolute;\n        right: ",";\n        left: ",";\n      }\n    }\n  }\n"]);return m=function(){return n},n}function f(){let n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n"]);return f=function(){return n},n}function x(){let n=(0,r.Z)([""]);return x=function(){return n},n}let h=(0,l.$0)(),p=o.Z.section(m(),n=>{let{width:e,height:t}=n;return(0,l.V_)(e,t)},n=>{let{theme:e}=n;return e.background},n=>{let{theme:e}=n;return e.font.regular},n=>{let{theme:e}=n;return(0,l.Ke)(e.components.shadow1,e.components.shadow2)},h?"flex-end":"flex-start",h?"auto":0,h?0:"auto"),g=o.Z.main(f()),j=o.Z.footer(x()),b=n=>{let{data:e,title:t,width:r="100%",height:l="auto",avatar:o,children:m,remove:f,click:x,clickLabel:h="",clickColor:b="primary",className:v="",isClickDisable:y=!1}=n,{t:w}=(0,d.$G)("common"),[Z,k]=(0,s.useState)(!1);return(0,i.jsxs)(p,{height:l,width:r,className:v,children:[(t||f||o)&&(0,i.jsxs)("header",{children:[(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("div",{className:"actions",children:f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.z,{icon:"Cross",isIconOnly:!0,onClick:()=>k(!0),size:"sm",title:"Button",variant:"text"}),(0,i.jsx)(u.u,{isVisible:Z,cancel:()=>k(!1),width:"40%",submitKey:"yes",cancelKey:"no",submit:()=>f(e),children:(0,i.jsx)("div",{className:"py-4",children:(0,i.jsx)(c.Z.Text,{children:w("are-you-sure-to-delete")})})})]})}),t&&(0,i.jsx)(c.Z.Title,{level:"h2",size:"2xl",weight:"medium",children:t})]}),(0,i.jsx)("div",{className:"flex flex-row justify-center",children:o})]}),(0,i.jsx)(g,{children:m}),x&&(0,i.jsx)(j,{children:(0,i.jsx)(a.z,{color:b,title:h,onClick:()=>x(e),width:"100%",isDisable:y})})]})}},1077:function(n,e,t){"use strict";t.d(e,{I:function(){return v}});var r=t(7297),i=t(5893),l=t(8909),o=t(339),s=t(2220),a=t(7294),c=t(2073),u=t(733);function d(){let n=(0,r.Z)(["\n  all: unset;\n  transition: ",";\n  padding-left: ","rem;\n  ","\n  ","\n  ",";\n  color: ",";\n  &::placeholder {\n    color: ",";\n  }\n  ~ svg {\n    padding-left: ","rem;\n    color: ",";\n  }\n  &:focus,\n  &:hover {\n    ","\n    ~ svg {\n      color: ",";\n    }\n  }\n"]);return d=function(){return n},n}function m(){let n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  transition: ",";\n  width: ",";\n  span {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n"]);return m=function(){return n},n}function f(){let n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n"]);return f=function(){return n},n}function x(){let n=(0,r.Z)(["\n  position: absolute;\n  bottom: -20px;\n"]);return x=function(){return n},n}let h={sm:1,md:1.5,lg:2},p=s.Z.input(d(),c.X.transition,n=>{let{icon:e,inputSize:t}=n;return e&&t?h[t]+.2:1},n=>{let{inputSize:e,width:t}=n;return(0,o.ap)(e,t)},n=>{let{variant:e,theme:t,status:r}=n;return(0,o.EC)(r,e,t)},n=>{let{theme:e}=n;return(0,o.Ke)(e.components.shadow1,e.components.shadow2)},n=>{let{theme:e}=n;return e.font.regular},n=>{let{theme:e}=n;return e.font.placeholder},n=>{let{icon:e,inputSize:t}=n;return e&&t?.4:1},n=>{let{theme:e}=n;return e.font.placeholder},n=>{let{variant:e,theme:t,color:r}=n;return(0,o.EC)(r,e,t)},n=>{let{theme:e}=n;return e.components.primary}),g=s.Z.div(m(),c.X.transition,n=>{let{width:e}=n;return e||"100%"}),j=(0,s.Z)(l.J)(f()),b=(0,s.Z)(u.Z.Text)(x()),v=(0,a.forwardRef)((n,e)=>{let{label:t,value:r,type:l,width:o="100%",placeholder:s,feedback:a,icon:c,variant:d="outlined",status:m="default",color:f="primary",size:x="md",className:h="",...v}=n;return(0,i.jsxs)(g,{className:h,children:[(0,i.jsx)(u.Z.Text,{size:x,children:t}),(0,i.jsxs)("div",{className:"flex relative",children:[(0,i.jsx)(p,{ref:e,value:r,placeholder:s,type:l,width:o,variant:d,color:f,status:m,icon:c,inputSize:x,...v}),c&&(0,i.jsx)(j,{name:c,size:"sm"===x?"lg":"2xl"})]}),(0,i.jsx)(b,{size:"sm",color:"default"===m?"regular":m,children:a})]})});v.displayName="Input"},2121:function(n,e,t){"use strict";t.d(e,{u:function(){return N}});var r=t(7297),i=t(5893),l=t(339),o=t(2220),s=t(2073),a=t(8217),c=t(917),u=t(733),d=t(538);function m(){let n=(0,r.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: ",";\n"]);return m=function(){return n},n}function f(){let n=(0,r.Z)(["\n  display: ",";\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: 0 !important;\n"]);return f=function(){return n},n}function x(){let n=(0,r.Z)(["\n  z-index: 10;\n  position: relative;\n  padding: 1rem;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  ",";\n  background: ",";\n  color: ",";\n  ",";\n  header {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 8px;\n    border-bottom: ",";\n    padding-bottom: 4px;\n    .title {\n      display: flex;\n      flex-direction: row;\n      justify-content: ",";\n      position: relative;\n      .actions {\n        position: absolute;\n        right: ",";\n        left: ",";\n      }\n    }\n  }\n"]);return x=function(){return n},n}function h(){let n=(0,r.Z)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: ",";\n  opacity: 0.75;\n  ","\n"]);return h=function(){return n},n}function p(){let n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n  button {\n    margin-right: 4px;\n    margin-left: 4px;\n  }\n"]);return p=function(){return n},n}function g(){let n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n"]);return g=function(){return n},n}let j=(0,l.$0)(),b=(n,e)=>(0,c.iv)(m(),n,e,s.X.borderRadius_lg),v=o.Z.div(f(),n=>{let{isVisible:e}=n;return e?"flex":"none"}),y=o.Z.section(x(),n=>{let{width:e,height:t}=n;return b(e,t)},n=>{let{theme:e}=n;return e.background},n=>{let{theme:e}=n;return e.font.regular},n=>{let{theme:e}=n;return(0,l.Ke)(e.components.shadow1,e.components.shadow2)},n=>{let{theme:e}=n;return"1px solid ".concat(e.components.border)},j?"flex-end":"flex-start",j?"auto":0,j?0:"auto"),w=o.Z.div(h(),n=>{let{theme:e}=n;return e.components.backDrop},s.X.transition),Z=o.Z.footer(p()),k=o.Z.main(g()),N=n=>{let{isVisible:e=!1,isLoading:t=!1,title:r,width:l="100%",height:o="auto",submitKey:s="save",cancelKey:c="cancel",submitType:m="button",children:f,cancel:x,submit:h}=n,{t:p}=(0,d.$G)("common");return(0,i.jsxs)(v,{role:"dialog","aria-modal":"true","aria-labelledby":r,isVisible:e,children:[(0,i.jsx)(w,{onClick:x}),(0,i.jsxs)(y,{height:o,width:l,children:[r&&(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("div",{className:"actions",children:x&&(0,i.jsx)(a.z,{icon:"Cross",isIconOnly:!0,onClick:()=>x(),size:"md",title:"Button",variant:"text"})}),r&&(0,i.jsx)(u.Z.Title,{level:"h2",size:"2xl",weight:"medium",children:r})]})}),(0,i.jsx)(k,{children:f}),(h&&m||"submit"===m)&&(0,i.jsxs)(Z,{children:[(0,i.jsx)(a.z,{size:"sm",title:p(s),onClick:h,color:"secondary",type:m,isLoading:t}),(0,i.jsx)(a.z,{size:"sm",title:p(c),onClick:x})]})]})]})}},485:function(n,e,t){"use strict";t.d(e,{g:function(){return j}});var r=t(5893),i=t(7294),l=t(1664),o=t.n(l),s=t(5405),a=t(1683),c=t(3907),u=t(5449),d=t(339),m=t(9228),f=t(8217),x=t(9008),h=t.n(x),p=t(7627),g=t(4082);let j=n=>{let{children:e,meta:t}=n,{isDark:l}=(0,p.C)(n=>({isDark:n.user.isDark})),x=(0,p.T)(),j=()=>{x((0,g.L)(!l)),(0,u.h)("theme",l?"light":"dark")},b=(0,i.useCallback)(()=>{let n=(0,d.uQ)();x((0,g.L)(n)),(0,d.E4)()},[x]);(0,i.useEffect)(()=>{void 0!==window&&b()},[b,l]);let v=c.b[l?"dark":"light"];return(0,r.jsxs)(a.a,{theme:v,children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("meta",{name:"description",content:t.description})]}),(0,r.jsxs)("div",{className:"flex w-screen h-screen  bg-[#70d3ba] dark:bg-[#131517]",children:[(0,r.jsx)(m.n,{className:"m-auto max-w-md",children:(0,r.jsxs)("div",{className:"flex flex-col w-full",children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("span",{className:"block mx-auto my-8 w-fit",children:(0,r.jsx)(s.T,{size:9})})}),e]})}),(0,r.jsx)("div",{children:(0,r.jsx)(f.z,{color:"primary",icon:l?"Sun":"Moon",isIconOnly:!0,onClick:j,size:"lg",title:"Button",type:"button",variant:"text"})})]})]})}},2491:function(n,e,t){"use strict";t.r(e);var r=t(5893),i=t(538),l=t(1077),o=t(8217),s=t(733),a=t(7536),c=t(1163),u=t(7627),d=t(1405),m=t(8742),f=t(485);let x=()=>{var n,e,t,f;let{register:x,handleSubmit:h,formState:{errors:p}}=(0,a.cI)(),{t:g}=(0,i.$G)("common"),j=(0,c.useRouter)(),b=(0,u.T)(),{requestState:v,token:y,error:w}=(0,u.C)(n=>{let{auth:e}=n;return{requestState:e.requestState,token:e.token,error:e.error}});Boolean(y)&&!w&&j.push(m.y$.Accounts);let Z=n=>{b((0,d.x4)(n))};return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z.Title,{level:"h3",size:"2xl",weight:"bold",className:"flex justify-center mb-4",children:g("login")}),(0,r.jsxs)("form",{className:"px-16 pb-0 my-8",onSubmit:h(Z),children:[(0,r.jsxs)("div",{className:"mb-10",children:[(0,r.jsx)(l.I,{placeholder:"example@gmail.com",feedback:null===(n=p.email)||void 0===n?void 0:n.message,color:(null===(e=p.email)||void 0===e?void 0:e.message)?"danger":"default",...x("email",{required:g("error-required-field"),pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:g("error-invalid-email")}})}),(0,r.jsx)(l.I,{type:"password",className:"mt-8",placeholder:"password",color:(null===(t=p.password)||void 0===t?void 0:t.message)?"danger":"default",feedback:null===(f=p.password)||void 0===f?void 0:f.message,...x("password",{required:g("error-required-field"),minLength:{value:3,message:g("error-min-length")}})})]}),(0,r.jsx)("div",{className:"flex flex-col items-center justify-between mt-10",children:(0,r.jsx)(o.z,{type:"submit",title:g("login"),color:"secondary",width:"100%",className:"mb-4",isLoading:"pending"===v})})]})]})};e.default=x,x.getLayout=n=>(0,r.jsx)(f.g,{meta:{title:"Login",description:"Login Platfo"},children:n})}},function(n){n.O(0,[32,536,876,774,888,179],function(){return n(n.s=163)}),_N_E=n.O()}]);