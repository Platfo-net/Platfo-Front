"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{7536:function(e,t,r){r.d(t,{Qr:function(){return E},cI:function(){return eb}});var a=r(7294),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let n=e=>"object"==typeof e;var u=e=>!l(e)&&!Array.isArray(e)&&n(e)&&!i(e),o=e=>u(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,f=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,d=(e,t)=>e.has(f(t)),c=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;let a=c(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return y(a)||a===e?y(e[t])?r:e[t]:a};let h={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},g={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},p={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},v=a.createContext(null),_=()=>a.useContext(v);var b=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>{let s=i;return t._proxyFormState[s]!==g.all&&(t._proxyFormState[s]=!a||g.all),r&&(r[s]=!0),e[s]}});return s},V=e=>u(e)&&!Object.keys(e).length,w=(e,t,r)=>{let{name:a,...s}=e;return V(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(e=>t[e]===(!r||g.all))},A=e=>Array.isArray(e)?e:[e],F=(e,t,r)=>r&&t?e===t:!e||!t||e===t||A(e).some(e=>e&&(e.startsWith(t)||t.startsWith(e)));function S(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var x=e=>"string"==typeof e,k=(e,t,r,a,s)=>x(e)?(a&&t.watch.add(e),m(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),m(r,e))):(a&&(t.watchAll=!0),r),D=e=>{let t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},C="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function O(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(C&&(e instanceof Blob||e instanceof FileList))&&(r||u(e))))return e;else if(t=r?[]:{},Array.isArray(e)||D(e))for(let a in e)t[a]=O(e[a]);else t=e;return t}let E=e=>e.render(function(e){let t=_(),{name:r,control:s=t.control,shouldUnregister:i}=e,l=d(s._names.array,r),n=function(e){let t=_(),{control:r=t.control,name:s,defaultValue:i,disabled:l,exact:n}=e||{},u=a.useRef(s);u.current=s,S({disabled:l,subject:r._subjects.watch,next:e=>{F(u.current,e.name,n)&&f(O(k(u.current,r._names,e.values||r._formValues,!1,i)))}});let[o,f]=a.useState(r._getWatch(s,i));return a.useEffect(()=>r._removeUnmounted()),o}({control:s,name:r,defaultValue:m(s._formValues,r,m(s._defaultValues,r,e.defaultValue)),exact:!0}),u=function(e){let t=_(),{control:r=t.control,disabled:s,name:i,exact:l}=e||{},[n,u]=a.useState(r._formState),o=a.useRef(!0),f=a.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=a.useRef(i);return d.current=i,S({disabled:s,next:e=>o.current&&F(d.current,e.name,l)&&w(e,f.current)&&u({...r._formState,...e}),subject:r._subjects.state}),a.useEffect(()=>{o.current=!0;let e=r._proxyFormState.isDirty&&r._getDirty();return e!==r._formState.isDirty&&r._subjects.state.next({isDirty:e}),r._updateValid(),()=>{o.current=!1}},[r]),b(n,r,f.current,!1)}({control:s,name:r}),f=a.useRef(s.register(r,{...e.rules,value:n}));return a.useEffect(()=>{let e=(e,t)=>{let r=m(s._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{let t=s._options.shouldUnregister||i;(l?t&&!s._stateFlags.action:t)?s.unregister(r):e(r,!1)}},[r,s,l,i]),{field:{name:r,value:n,onChange:a.useCallback(e=>f.current.onChange({target:{value:o(e),name:r},type:h.CHANGE}),[r]),onBlur:a.useCallback(()=>f.current.onBlur({target:{value:m(s._formValues,r),name:r},type:h.BLUR}),[r,s]),ref:e=>{let t=m(s._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:u,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(u.errors,r)},isDirty:{enumerable:!0,get:()=>!!m(u.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!m(u.touchedFields,r)},error:{enumerable:!0,get:()=>m(u.errors,r)}})}}(e));var L=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},T=e=>/^\w*$/.test(e),U=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/));function j(e,t,r){let a=-1,s=T(t)?[t]:U(t),i=s.length,l=i-1;for(;++a<i;){let n=s[a],o=r;if(a!==l){let f=e[n];o=u(f)||Array.isArray(f)?f:isNaN(+s[a+1])?{}:[]}e[n]=o,e=e[n]}return e}let B=(e,t,r)=>{for(let a of r||Object.keys(e)){let s=m(e,a);if(s){let{_f:i,...l}=s;if(i&&t(i.name)){if(i.ref.focus){i.ref.focus();break}if(i.refs&&i.refs[0].focus){i.refs[0].focus();break}}else u(l)&&B(l,t)}}};var N=e=>({isOnSubmit:!e||e===g.onSubmit,isOnBlur:e===g.onBlur,isOnChange:e===g.onChange,isOnAll:e===g.all,isOnTouch:e===g.onTouched}),M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),R=(e,t,r)=>{let a=c(m(e,r));return j(a,"root",t[r]),j(e,r,a),e},q=e=>"boolean"==typeof e,H=e=>"file"===e.type,P=e=>"function"==typeof e,I=e=>{if(!C)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},W=e=>x(e)||a.isValidElement(e),$=e=>"radio"===e.type,G=e=>e instanceof RegExp;let Q={value:!1,isValid:!1},z={value:!0,isValid:!0};var J=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?z:{value:e[0].value,isValid:!0}:z:Q}return Q};let K={isValid:!1,value:null};var X=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,K):K;function Y(e,t,r="validate"){if(W(e)||Array.isArray(e)&&e.every(W)||q(e)&&!e)return{type:r,message:W(e)?e:"",ref:t}}var Z=e=>u(e)&&!G(e)?e:{value:e,message:""},ee=async(e,t,r,a,i)=>{let{ref:n,refs:o,required:f,maxLength:d,minLength:c,min:m,max:h,pattern:g,validate:v,name:_,valueAsNumber:b,mount:w,disabled:A}=e._f;if(!w||A)return{};let F=o?o[0]:n,S=e=>{a&&F.reportValidity&&(F.setCustomValidity(q(e)?"":e||""),F.reportValidity())},k={},D=$(n),C=s(n),O=(b||H(n))&&y(n.value)&&y(t)||I(n)&&""===n.value||""===t||Array.isArray(t)&&!t.length,E=L.bind(null,_,r,k),T=(e,t,r,a=p.maxLength,s=p.minLength)=>{let i=e?t:r;k[_]={type:e?a:s,message:i,ref:n,...E(e?a:s,i)}};if(i?!Array.isArray(t)||!t.length:f&&(!(D||C)&&(O||l(t))||q(t)&&!t||C&&!J(o).isValid||D&&!X(o).isValid)){let{value:U,message:j}=W(f)?{value:!!f,message:f}:Z(f);if(U&&(k[_]={type:p.required,message:j,ref:F,...E(p.required,j)},!r))return S(j),k}if(!O&&(!l(m)||!l(h))){let B,N;let M=Z(h),R=Z(m);if(l(t)||isNaN(t)){let Q=n.valueAsDate||new Date(t),z=e=>new Date(new Date().toDateString()+" "+e),K="time"==n.type,ee="week"==n.type;x(M.value)&&t&&(B=K?z(t)>z(M.value):ee?t>M.value:Q>new Date(M.value)),x(R.value)&&t&&(N=K?z(t)<z(R.value):ee?t<R.value:Q<new Date(R.value))}else{let et=n.valueAsNumber||(t?+t:t);l(M.value)||(B=et>M.value),l(R.value)||(N=et<R.value)}if((B||N)&&(T(!!B,M.message,R.message,p.max,p.min),!r))return S(k[_].message),k}if((d||c)&&!O&&(x(t)||i&&Array.isArray(t))){let er=Z(d),ea=Z(c),es=!l(er.value)&&t.length>er.value,ei=!l(ea.value)&&t.length<ea.value;if((es||ei)&&(T(es,er.message,ea.message),!r))return S(k[_].message),k}if(g&&!O&&x(t)){let{value:el,message:en}=Z(g);if(G(el)&&!t.match(el)&&(k[_]={type:p.pattern,message:en,ref:n,...E(p.pattern,en)},!r))return S(en),k}if(v){if(P(v)){let eu=await v(t),eo=Y(eu,F);if(eo&&(k[_]={...eo,...E(p.validate,eo.message)},!r))return S(eo.message),k}else if(u(v)){let ef={};for(let ed in v){if(!V(ef)&&!r)break;let ec=Y(await v[ed](t),F,ed);ec&&(ef={...ec,...E(ed,ec.message)},S(ec.message),r&&(k[_]=ef))}if(!V(ef)&&(k[_]={ref:F,...ef},!r))return k}}return S(!0),k};function et(e,t){let r;let a=T(t)?[t]:U(t),s=1==a.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=y(e)?a++:e[t[a++]];return e}(e,a),i=a[a.length-1];s&&delete s[i];for(let l=0;l<a.slice(0,-1).length;l++){let n,o=-1,f=a.slice(0,-(l+1)),d=f.length-1;for(l>0&&(r=e);++o<f.length;){let c=f[o];n=n?n[c]:e[c],d===o&&(u(n)&&V(n)||Array.isArray(n)&&function(e){for(let t in e)if(!y(e[t]))return!1;return!0}(n))&&(r?delete r[c]:delete e[c]),r=n}}return e}function er(){let e=[],t=t=>{for(let r of e)r.next(t)},r=t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),a=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:a}}var ea=e=>l(e)||!n(e);function es(e,t){if(ea(e)||ea(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let l=e[s];if(!a.includes(s))return!1;if("ref"!==s){let n=t[s];if(i(l)&&i(n)||u(l)&&u(n)||Array.isArray(l)&&Array.isArray(n)?!es(l,n):l!==n)return!1}}return!0}var ei=e=>"select-multiple"===e.type,el=e=>$(e)||s(e),en=e=>I(e)&&e.isConnected,eu=e=>{for(let t in e)if(P(e[t]))return!0;return!1};function eo(e,t={}){let r=Array.isArray(e);if(u(e)||r)for(let a in e)Array.isArray(e[a])||u(e[a])&&!eu(e[a])?(t[a]=Array.isArray(e[a])?[]:{},eo(e[a],t[a])):l(e[a])||(t[a]=!0);return t}var ef=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(u(t)||s)for(let i in t)Array.isArray(t[i])||u(t[i])&&!eu(t[i])?y(r)||ea(a[i])?a[i]=Array.isArray(t[i])?eo(t[i],[]):{...eo(t[i])}:e(t[i],l(r)?{}:r[i],a[i]):es(t[i],r[i])?delete a[i]:a[i]=!0;return a})(e,t,eo(t)),ed=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&x(e)?new Date(e):a?a(e):e;function ec(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:H(t)?t.files:$(t)?X(e.refs).value:ei(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?J(e.refs).value:ed(y(t.value)?e.ref.value:t.value,e)}var ey=(e,t,r,a)=>{let s={};for(let i of e){let l=m(t,i);l&&j(s,i,l._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},em=e=>y(e)?e:G(e)?e.source:u(e)?G(e.value)?e.value.source:e.value:e,eh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eg(e,t,r){let a=m(e,r);if(a||T(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let i=s.join("."),l=m(t,i),n=m(e,i);if(l&&!Array.isArray(l)&&r!==i)break;if(n&&n.type)return{name:i,error:n};s.pop()}return{name:r}}var ep=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),ev=(e,t)=>!c(m(e,t)).length&&et(e,t);let e_={mode:g.onSubmit,reValidateMode:g.onChange,shouldFocusError:!0};function eb(e={}){let t=a.useRef(),[r,n]=a.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:P(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,a={...e_,...e},n=e.resetOptions&&e.resetOptions.keepDirtyValues,f={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},p={},v=u(a.defaultValues)&&O(a.defaultValues)||{},_=a.shouldUnregister?{}:O(v),b={action:!1,mount:!1,watch:!1},w={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F=0,S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={watch:er(),array:er(),state:er()},E=N(a.mode),L=N(a.reValidateMode),T=a.criteriaMode===g.all,U=e=>t=>{clearTimeout(F),F=window.setTimeout(e,t)},W=async()=>{if(S.isValid){let e=a.resolver?V((await X()).errors):await Z(p,!0);e!==f.isValid&&(f.isValid=e,D.state.next({isValid:e}))}},$=e=>S.isValidating&&D.state.next({isValidating:e}),G=(e,t=[],r,a,s=!0,i=!0)=>{if(a&&r){if(b.action=!0,i&&Array.isArray(m(p,e))){let l=r(m(p,e),a.argA,a.argB);s&&j(p,e,l)}if(i&&Array.isArray(m(f.errors,e))){let n=r(m(f.errors,e),a.argA,a.argB);s&&j(f.errors,e,n),ev(f.errors,e)}if(S.touchedFields&&i&&Array.isArray(m(f.touchedFields,e))){let u=r(m(f.touchedFields,e),a.argA,a.argB);s&&j(f.touchedFields,e,u)}S.dirtyFields&&(f.dirtyFields=ef(v,_)),D.state.next({name:e,isDirty:eo(e,t),dirtyFields:f.dirtyFields,errors:f.errors,isValid:f.isValid})}else j(_,e,t)},Q=(e,t)=>{j(f.errors,e,t),D.state.next({errors:f.errors})},z=(e,t,r,a)=>{let s=m(p,e);if(s){let i=m(_,e,y(r)?m(v,e):r);y(i)||a&&a.defaultChecked||t?j(_,e,t?i:ec(s._f)):ew(e,i),b.mount&&W()}},J=(e,t,r,a,s)=>{let i=!1,l=!1,n={name:e};if(!r||a){S.isDirty&&(l=f.isDirty,f.isDirty=n.isDirty=eo(),i=l!==n.isDirty);let u=es(m(v,e),t);l=m(f.dirtyFields,e),u?et(f.dirtyFields,e):j(f.dirtyFields,e,!0),n.dirtyFields=f.dirtyFields,i=i||S.dirtyFields&&!u!==l}if(r){let o=m(f.touchedFields,e);o||(j(f.touchedFields,e,r),n.touchedFields=f.touchedFields,i=i||S.touchedFields&&o!==r)}return i&&s&&D.state.next(n),i?n:{}},K=(t,a,s,i)=>{let l=m(f.errors,t),n=S.isValid&&q(a)&&f.isValid!==a;if(e.delayError&&s?(r=U(()=>Q(t,s)))(e.delayError):(clearTimeout(F),r=null,s?j(f.errors,t,s):et(f.errors,t)),(s?!es(l,s):l)||!V(i)||n){let u={...i,...n&&q(a)?{isValid:a}:{},errors:f.errors,name:t};f={...f,...u},D.state.next(u)}$(!1)},X=async e=>await a.resolver(_,a.context,ey(e||w.mount,p,a.criteriaMode,a.shouldUseNativeValidation)),Y=async e=>{let{errors:t}=await X();if(e)for(let r of e){let a=m(t,r);a?j(f.errors,r,a):et(f.errors,r)}else f.errors=t;return t},Z=async(e,t,r={valid:!0})=>{for(let s in e){let i=e[s];if(i){let{_f:l,...n}=i;if(l){let u=w.array.has(l.name),o=await ee(i,m(_,l.name),T,a.shouldUseNativeValidation,u);if(o[l.name]&&(r.valid=!1,t))break;t||(m(o,l.name)?u?R(f.errors,o,l.name):j(f.errors,l.name,o[l.name]):et(f.errors,l.name))}n&&await Z(n,t,r)}}return r.valid},eu=()=>{for(let e of w.unMount){let t=m(p,e);t&&(t._f.refs?t._f.refs.every(e=>!en(e)):!en(t._f.ref))&&eL(e)}w.unMount=new Set},eo=(e,t)=>(e&&t&&j(_,e,t),!es(ek(),v)),eb=(e,t,r)=>k(e,w,{...b.mount?_:y(t)?v:x(e)?{[e]:t}:t},r,t),eV=t=>c(m(b.mount?_:v,t,e.shouldUnregister?m(v,t,[]):[])),ew=(e,t,r={})=>{let a=m(p,e),i=t;if(a){let n=a._f;n&&(n.disabled||j(_,e,ed(t,n)),i=I(n.ref)&&l(t)?"":t,ei(n.ref)?[...n.ref.options].forEach(e=>e.selected=i.includes(e.value)):n.refs?s(n.ref)?n.refs.length>1?n.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):n.refs[0]&&(n.refs[0].checked=!!i):n.refs.forEach(e=>e.checked=e.value===i):H(n.ref)?n.ref.value="":(n.ref.value=i,n.ref.type||D.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&J(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ex(e)},eA=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,n=m(p,l);!w.array.has(e)&&ea(s)&&(!n||n._f)||i(s)?ew(l,s,r):eA(l,s,r)}},eF=(e,r,a={})=>{let s=m(p,e),i=w.array.has(e),n=O(r);j(_,e,n),i?(D.array.next({name:e,values:_}),(S.isDirty||S.dirtyFields)&&a.shouldDirty&&(f.dirtyFields=ef(v,_),D.state.next({name:e,dirtyFields:f.dirtyFields,isDirty:eo(e,n)}))):!s||s._f||l(n)?ew(e,n,a):eA(e,n,a),M(e,w)&&D.state.next({}),D.watch.next({name:e}),b.mount||t()},eS=async e=>{let t=e.target,s=t.name,i=m(p,s);if(i){let l,n;let u=t.type?ec(i._f):o(e),d=e.type===h.BLUR||e.type===h.FOCUS_OUT,c=!eh(i._f)&&!a.resolver&&!m(f.errors,s)&&!i._f.deps||ep(d,m(f.touchedFields,s),f.isSubmitted,L,E),y=M(s,w,d);j(_,s,u),d?(i._f.onBlur&&i._f.onBlur(e),r&&r(0)):i._f.onChange&&i._f.onChange(e);let g=J(s,u,d,!1),v=!V(g)||y;if(d||D.watch.next({name:s,type:e.type}),c)return S.isValid&&W(),v&&D.state.next({name:s,...y?{}:g});if(!d&&y&&D.state.next({}),$(!0),a.resolver){let{errors:b}=await X([s]),A=eg(f.errors,p,s),F=eg(b,p,A.name||s);l=F.error,s=F.name,n=V(b)}else(l=(await ee(i,m(_,s),T,a.shouldUseNativeValidation))[s])?n=!1:S.isValid&&(n=await Z(p,!0));i._f.deps&&ex(i._f.deps),K(s,n,l,g)}},ex=async(e,t={})=>{let r,s;let i=A(e);if($(!0),a.resolver){let l=await Y(y(e)?e:i);r=V(l),s=e?!i.some(e=>m(l,e)):r}else e?((s=(await Promise.all(i.map(async e=>{let t=m(p,e);return await Z(t&&t._f?{[e]:t}:t)}))).every(Boolean))||f.isValid)&&W():s=r=await Z(p);return D.state.next({...!x(e)||S.isValid&&r!==f.isValid?{}:{name:e},...a.resolver||!e?{isValid:r}:{},errors:f.errors,isValidating:!1}),t.shouldFocus&&!s&&B(p,e=>e&&m(f.errors,e),e?i:w.mount),s},ek=e=>{let t={...v,...b.mount?_:{}};return y(e)?t:x(e)?m(t,e):e.map(e=>m(t,e))},eD=(e,t)=>({invalid:!!m((t||f).errors,e),isDirty:!!m((t||f).dirtyFields,e),isTouched:!!m((t||f).touchedFields,e),error:m((t||f).errors,e)}),eC=e=>{e?A(e).forEach(e=>et(f.errors,e)):f.errors={},D.state.next({errors:f.errors})},eO=(e,t,r)=>{let a=(m(p,e,{_f:{}})._f||{}).ref;j(f.errors,e,{...t,ref:a}),D.state.next({name:e,errors:f.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},eE=(e,t)=>P(e)?D.watch.subscribe({next:r=>e(eb(void 0,t),r)}):eb(e,t,!0),eL=(e,t={})=>{for(let r of e?A(e):w.mount)w.mount.delete(r),w.array.delete(r),m(p,r)&&(t.keepValue||(et(p,r),et(_,r)),t.keepError||et(f.errors,r),t.keepDirty||et(f.dirtyFields,r),t.keepTouched||et(f.touchedFields,r),a.shouldUnregister||t.keepDefaultValue||et(v,r));D.watch.next({}),D.state.next({...f,...t.keepDirty?{isDirty:eo()}:{}}),t.keepIsValid||W()},eT=(e,t={})=>{let r=m(p,e),s=q(t.disabled);return j(p,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),w.mount.add(e),r?s&&j(_,e,t.disabled?void 0:m(_,e,ec(r._f))):z(e,!0,t.value),{...s?{disabled:t.disabled}:{},...a.shouldUseNativeValidation?{required:!!t.required,min:em(t.min),max:em(t.max),minLength:em(t.minLength),maxLength:em(t.maxLength),pattern:em(t.pattern)}:{},name:e,onChange:eS,onBlur:eS,ref:s=>{if(s){eT(e,t),r=m(p,e);let i=y(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,l=el(i),n=r._f.refs||[];(l?n.find(e=>e===i):i===r._f.ref)||(j(p,e,{_f:{...r._f,...l?{refs:[...n.filter(en),i,...Array.isArray(m(v,e))?[{}]:[]],ref:{type:i.type,name:e}}:{ref:i}}}),z(e,!1,void 0,i))}else(r=m(p,e,{}))._f&&(r._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&!(d(w.array,e)&&b.action)&&w.unMount.add(e)}}},eU=()=>a.shouldFocusError&&B(p,e=>e&&m(f.errors,e),w.mount),ej=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=!0,i=O(_);D.state.next({isSubmitting:!0});try{if(a.resolver){let{errors:l,values:n}=await X();f.errors=l,i=n}else await Z(p);V(f.errors)?(D.state.next({errors:{},isSubmitting:!0}),await e(i,r)):(t&&await t({...f.errors},r),eU())}catch(u){throw s=!1,u}finally{f.isSubmitted=!0,D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:V(f.errors)&&s,submitCount:f.submitCount+1,errors:f.errors})}},eB=(e,t={})=>{m(p,e)&&(y(t.defaultValue)?eF(e,m(v,e)):(eF(e,t.defaultValue),j(v,e,t.defaultValue)),t.keepTouched||et(f.touchedFields,e),t.keepDirty||(et(f.dirtyFields,e),f.isDirty=t.defaultValue?eo(e,m(v,e)):eo()),!t.keepError&&(et(f.errors,e),S.isValid&&W()),D.state.next({...f}))},eN=(r,a={})=>{let s=r||v,i=O(s),l=r&&!V(r)?i:v;if(a.keepDefaultValues||(v=s),!a.keepValues){if(a.keepDirtyValues||n)for(let u of w.mount)m(f.dirtyFields,u)?j(l,u,m(_,u)):eF(u,m(l,u));else{if(C&&y(r))for(let o of w.mount){let d=m(p,o);if(d&&d._f){let c=Array.isArray(d._f.refs)?d._f.refs[0]:d._f.ref;if(I(c)){let h=c.closest("form");if(h){h.reset();break}}}}p={}}_=e.shouldUnregister?a.keepDefaultValues?O(v):{}:i,D.array.next({values:l}),D.watch.next({values:l})}w={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},b.mount||t(),b.mount=!S.isValid||!!a.keepIsValid,b.watch=!!e.shouldUnregister,D.state.next({submitCount:a.keepSubmitCount?f.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?f.isDirty:!!(a.keepDefaultValues&&!es(r,v)),isSubmitted:!!a.keepIsSubmitted&&f.isSubmitted,dirtyFields:a.keepDirty||a.keepDirtyValues?f.dirtyFields:a.keepDefaultValues&&r?ef(v,r):{},touchedFields:a.keepTouched?f.touchedFields:{},errors:a.keepErrors?f.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eM=(e,t)=>eN(P(e)?e(_):e,t),eR=(e,t={})=>{let r=m(p,e),a=r&&r._f;if(a){let s=a.refs?a.refs[0]:a.ref;s.focus&&(s.focus(),t.shouldSelect&&s.select())}};return P(a.defaultValues)&&a.defaultValues().then(e=>{eM(e,a.resetOptions),D.state.next({isLoading:!1})}),{control:{register:eT,unregister:eL,getFieldState:eD,_executeSchema:X,_focusError:eU,_getWatch:eb,_getDirty:eo,_updateValid:W,_removeUnmounted:eu,_updateFieldArray:G,_getFieldArray:eV,_reset:eN,_subjects:D,_proxyFormState:S,get _fields(){return p},get _formValues(){return _},get _stateFlags(){return b},set _stateFlags(value){b=value},get _defaultValues(){return v},get _names(){return w},set _names(value){w=value},get _formState(){return f},set _formState(value){f=value},get _options(){return a},set _options(value){a={...a,...value}}},trigger:ex,register:eT,handleSubmit:ej,watch:eE,setValue:eF,getValues:ek,reset:eM,resetField:eB,clearErrors:eC,unregister:eL,setError:eO,setFocus:eR,getFieldState:eD}}(e,()=>n(e=>({...e}))),formState:r});let f=t.current.control;return f._options=e,S({subject:f._subjects.state,next:e=>{w(e,f._proxyFormState,!0)&&(f._formState={...f._formState,...e},n({...f._formState}))}}),a.useEffect(()=>{f._stateFlags.mount||(f._proxyFormState.isValid&&f._updateValid(),f._stateFlags.mount=!0),f._stateFlags.watch&&(f._stateFlags.watch=!1,f._subjects.state.next({})),f._removeUnmounted()}),a.useEffect(()=>{e.values&&!es(e.values,f._defaultValues)&&f._reset(e.values,f._options.resetOptions)},[e.values,f]),a.useEffect(()=>{r.submitCount&&f._focusError()},[f,r.submitCount]),t.current.formState=b(r,f),t.current}}}]);