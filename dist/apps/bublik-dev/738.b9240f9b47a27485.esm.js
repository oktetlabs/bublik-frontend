(self.webpackChunk=self.webpackChunk||[]).push([[738],{76306:(e,t,n)=>{var r=n(72313),o=n(44400),i=n(23551);e.exports=function(e,t,n){var l,u;return i&&r(l=t.constructor)&&l!==n&&o(u=l.prototype)&&u!==n.prototype&&i(e,u),e}},25812:(e,t,n)=>{var r=n(86061).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},40697:(e,t,n)=>{var r=n(73738),o=n(89567),i=n(90056),l=n(8135),u=n(76306),a=n(23644),s=n(72203).f,c=n(70893),d=n(29113),f=n(52761),p=n(63507),v=n(49441),m=n(25812),h=n(27402),E=n(27937),g=n(17402),w=n(4236).enforce,b=n(82797),y=n(78950),T=n(38316),P=n(92857),F=y("match"),C=o.RegExp,S=C.prototype,R=o.SyntaxError,A=i(S.exec),x=i("".charAt),D=i("".replace),O=i("".indexOf),L=i("".slice),k=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,N=/a/g,H=new C(M)!==M,I=v.MISSED_STICKY,Y=v.UNSUPPORTED_Y,j=r&&(!H||I||T||P||E((function(){return N[F]=!1,C(M)!=M||C(N)==N||"/a/i"!=C(M,"i")})));if(l("RegExp",j)){for(var V=function(e,t){var n,r,o,i,l,s,v=c(S,this),m=d(e),h=void 0===t,E=[],b=e;if(!v&&m&&h&&e.constructor===V)return e;if((m||c(S,e))&&(e=e.source,h&&(t=p(b))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),b=e,T&&"dotAll"in M&&(r=!!t&&O(t,"s")>-1)&&(t=D(t,/s/g,"")),n=t,I&&"sticky"in M&&(o=!!t&&O(t,"y")>-1)&&Y&&(t=D(t,/y/g,"")),P&&(i=function(e){for(var t,n=e.length,r=0,o="",i=[],l={},u=!1,a=!1,s=0,c="";r<=n;r++){if("\\"===(t=x(e,r)))t+=x(e,++r);else if("]"===t)u=!1;else if(!u)switch(!0){case"["===t:u=!0;break;case"("===t:A(k,L(e,r+1))&&(r+=2,a=!0),o+=t,s++;continue;case">"===t&&a:if(""===c||g(l,c))throw new R("Invalid capture group name");l[c]=!0,i[i.length]=[c,s],a=!1,c="";continue}a?c+=t:o+=t}return[o,i]}(e),e=i[0],E=i[1]),l=u(C(e,t),v?this:S,V),(r||o||E.length)&&(s=w(l),r&&(s.dotAll=!0,s.raw=V(function(e){for(var t,n=e.length,r=0,o="",i=!1;r<=n;r++)"\\"!==(t=x(e,r))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+x(e,++r);return o}(e),n)),o&&(s.sticky=!0),E.length&&(s.groups=E)),e!==b)try{a(l,"source",""===b?"(?:)":b)}catch(y){}return l},z=s(C),B=0;z.length>B;)m(V,C,z[B++]);S.constructor=V,V.prototype=S,h(o,"RegExp",V,{constructor:!0})}b("RegExp")},49171:(e,t,n)=>{"use strict";n.d(t,{V:()=>we});var r=n(52983),o=n(49693),i=n(43817),l=n(61391),u=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(u||{});function a(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}var s=n(20285),c=n(30435);var d=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(d||{});let f=(0,i.yV)((function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,i.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function p(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let v=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var m,h,E=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(E||{}),g=((h=g||{})[h.Error=0]="Error",h[h.Overflow=1]="Overflow",h[h.Success=2]="Success",h[h.Underflow=3]="Underflow",h),w=((m=w||{})[m.Previous=-1]="Previous",m[m.Next=1]="Next",m);var b=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(b||{});function y(e,t=0){var n;return e!==(null==(n=p(e))?void 0:n.body)&&(0,o.E)(t,{0:()=>e.matches(v),1(){let t=e;for(;null!==t;){if(t.matches(v))return!0;t=t.parentElement}return!1}})}function T(e){null==e||e.focus({preventScroll:!0})}let P=["textarea","input"].join(",");function F(e,t,n=!0){let r,o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(v))}(e),l=o.activeElement,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,i.indexOf(l))-1;if(4&t)return Math.max(0,i.indexOf(l))+1;if(8&t)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=32&t?{preventScroll:!0}:{},c=0,d=i.length;do{if(c>=d||c+d<=0)return 0;let e=a+c;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}r=i[e],null==r||r.focus(s),c+=u}while(r!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,P))&&n}(r)&&r.select(),r.hasAttribute("tabindex")||r.setAttribute("tabindex","0"),2}var C=n(35924),S=n(11438);function R(e,t,n){let o=(0,S.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}var A=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(A||{});function x(){let e=(0,r.useRef)(0);return R("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}var D=n(89951);function O(...e){return(0,r.useMemo)((()=>p(...e)),[...e])}function L(e,t,n,o){let i=(0,S.E)(n);(0,r.useEffect)((()=>{function n(e){i.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var k=n(52441);function M(e,t){let n=(0,r.useRef)([]),o=(0,C.z)(e);(0,r.useEffect)((()=>{for(let[e,r]of t.entries())if(n.current[e]!==r){let e=o(t);return n.current=t,e}}),[o,...t])}var N=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(N||{});let H=Object.assign((0,i.yV)((function(e,t){let n=(0,r.useRef)(null),u=(0,l.T)(n,t),{initialFocus:a,containers:s,features:p=30,...v}=e;(0,c.H)()||(p=1);let m=O(n);!function({ownerDocument:e},t){let n=(0,r.useRef)(null);L(null==e?void 0:e.defaultView,"focusout",(e=>{!t||n.current||(n.current=e.target)}),!0),M((()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&T(n.current),n.current=null)}),[t]);let o=(0,r.useRef)(!1);(0,r.useEffect)((()=>(o.current=!1,()=>{o.current=!0,(0,k.Y)((()=>{!o.current||(T(n.current),n.current=null)}))})),[])}({ownerDocument:m},Boolean(16&p));let h=function({ownerDocument:e,container:t,initialFocus:n},o){let i=(0,r.useRef)(null);return M((()=>{if(!o)return;let r=t.current;if(!r)return;let l=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===l)return void(i.current=l)}else if(r.contains(l))return void(i.current=l);null!=n&&n.current?T(n.current):F(r,E.First)===g.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=null==e?void 0:e.activeElement}),[o]),i}({ownerDocument:m,container:n,initialFocus:a},Boolean(2&p));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=(0,D.t)();L(null==e?void 0:e.defaultView,"focus",(e=>{if(!o||!i.current)return;let l=new Set(null==n?void 0:n.current);l.add(t);let u=r.current;if(!u)return;let a=e.target;a&&a instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(l,a)?(r.current=a,T(a)):(e.preventDefault(),e.stopPropagation(),T(u)):T(r.current)}),!0)}({ownerDocument:m,container:n,containers:s,previousActiveElement:h},Boolean(8&p));let w=x(),b=(0,C.z)((()=>{let e=n.current;!e||(0,o.E)(w.current,{[A.Forwards]:()=>F(e,E.First),[A.Backwards]:()=>F(e,E.Last)})})),y={ref:u};return r.createElement(r.Fragment,null,Boolean(4&p)&&r.createElement(f,{as:"button",type:"button",onFocus:b,features:d.Focusable}),(0,i.sY)({ourProps:y,theirProps:v,defaultTag:"div",name:"FocusTrap"}),Boolean(4&p)&&r.createElement(f,{as:"button",type:"button",onFocus:b,features:d.Focusable}))})),{features:N});var I=n(58258);let Y=new Set,j=new Map;function V(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function z(e){let t=j.get(e);!t||(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var B=n(63730);let U=(0,r.createContext)(!1);function $(){return(0,r.useContext)(U)}function q(e){return r.createElement(U.Provider,{value:e.force},e.children)}let _=r.Fragment,W=(0,i.yV)((function(e,t){let n=e,o=(0,r.useRef)(null),u=(0,l.T)((0,l.h)((e=>{o.current=e})),t),a=O(o),s=function(e){let t=$(),n=(0,r.useContext)(G),o=O(e),[i,l]=(0,r.useState)((()=>{if(!t&&null!==n||"undefined"==typeof window)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==i&&(null!=o&&o.body.contains(i)||null==o||o.body.appendChild(i))}),[i,o]),(0,r.useEffect)((()=>{t||null!==n&&l(n.current)}),[n,l,t]),i}(o),[d]=(0,r.useState)((()=>{var e;return"undefined"==typeof window?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),f=(0,c.H)(),p=(0,r.useRef)(!1);return(0,I.e)((()=>{if(p.current=!1,s&&d)return s.contains(d)||(d.setAttribute("data-headlessui-portal",""),s.appendChild(d)),()=>{p.current=!0,(0,k.Y)((()=>{var e;!p.current||!s||!d||(s.removeChild(d),s.childNodes.length<=0&&(null==(e=s.parentElement)||e.removeChild(s)))}))}}),[s,d]),f&&s&&d?(0,B.createPortal)((0,i.sY)({ourProps:{ref:u},theirProps:n,defaultTag:_,name:"Portal"}),d):null})),Z=r.Fragment,G=(0,r.createContext)(null),J=(0,i.yV)((function(e,t){let{target:n,...o}=e,u={ref:(0,l.T)(t)};return r.createElement(G.Provider,{value:n},(0,i.sY)({ourProps:u,theirProps:o,defaultTag:Z,name:"Popover.Group"}))})),K=Object.assign(W,{Group:J}),Q=(0,r.createContext)(null);function X(){let e=(0,r.useContext)(Q);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,X),e}return e}function ee(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,C.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(Q.Provider,{value:o},e.children)}),[t])]}let te=(0,i.yV)((function(e,t){let n=X(),r=`headlessui-description-${(0,s.M)()}`,o=(0,l.T)(t);(0,I.e)((()=>n.register(r)),[r,n.register]);let u=e,a={ref:o,...n.props,id:r};return(0,i.sY)({ourProps:a,theirProps:u,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}));var ne=n(71249);let re=(0,r.createContext)((()=>{}));re.displayName="StackContext";var oe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(oe||{});function ie({children:e,onUpdate:t,type:n,element:o}){let i=(0,r.useContext)(re),l=(0,C.z)(((...e)=>{null==t||t(...e),i(...e)}));return(0,I.e)((()=>(l(0,n,o),()=>l(1,n,o))),[l,n,o]),r.createElement(re.Provider,{value:l},e)}function le(e,t,n=!0){let o=(0,r.useRef)(!1);function i(n,r){if(!o.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=r(n);if(null!==l&&l.ownerDocument.documentElement.contains(l)){for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l))return}return!y(l,b.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]),R("click",(e=>i(e,(e=>e.target))),!0),R("blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}var ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ue||{}),ae=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(ae||{});let se={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},ce=(0,r.createContext)(null);function de(e){let t=(0,r.useContext)(ce);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,de),t}return t}function fe(e,t){return(0,o.E)(t.type,se,e,t)}ce.displayName="DialogContext";let pe=i.AN.RenderStrategy|i.AN.Static,ve=(0,i.yV)((function(e,t){let{open:n,onClose:a,initialFocus:v,__demoMode:m=!1,...h}=e,[E,g]=(0,r.useState)(0),w=(0,ne.oJ)();void 0===n&&null!==w&&(n=(0,o.E)(w,{[ne.ZM.Open]:!0,[ne.ZM.Closed]:!1}));let b=(0,r.useRef)(new Set),y=(0,r.useRef)(null),T=(0,l.T)(y,t),P=(0,r.useRef)(null),F=O(y),S=e.hasOwnProperty("open")||null!==w,R=e.hasOwnProperty("onClose");if(!S&&!R)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!R)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof n)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if("function"!=typeof a)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let A=n?0:1,[x,D]=(0,r.useReducer)(fe,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),k=(0,C.z)((()=>a(!1))),M=(0,C.z)((e=>D({type:0,id:e}))),N=!!(0,c.H)()&&(!m&&0===A),B=E>1,U=null!==(0,r.useContext)(ce),$=B?"parent":"leaf";(function(e,t=!0){(0,I.e)((()=>{if(!t||!e.current)return;let n=e.current,r=p(n);if(r){Y.add(n);for(let e of j.keys())e.contains(n)&&(z(e),j.delete(e));return r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement){for(let t of Y)if(e.contains(t))return;1===Y.size&&(j.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),V(e))}})),()=>{if(Y.delete(n),Y.size>0)r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement&&!j.has(e)){for(let t of Y)if(e.contains(t))return;j.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),V(e)}}));else for(let e of j.keys())z(e),j.delete(e)}}}),[t])})(y,!!B&&N),le((()=>{var e,t;return[...Array.from(null!=(e=null==F?void 0:F.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(!(e instanceof HTMLElement)||e.contains(P.current)||x.panelRef.current&&e.contains(x.panelRef.current)))),null!=(t=x.panelRef.current)?t:y.current]}),k,N&&!B),L(null==F?void 0:F.defaultView,"keydown",(e=>{e.defaultPrevented||e.key===u.Escape&&0===A&&(B||(e.preventDefault(),e.stopPropagation(),k()))})),(0,r.useEffect)((()=>{var e;if(0!==A||U)return;let t=p(y);if(!t)return;let n=t.documentElement,r=null!=(e=t.defaultView)?e:window,o=n.style.overflow,i=n.style.paddingRight,l=r.innerWidth-n.clientWidth;if(n.style.overflow="hidden",l>0){let e=l-(n.clientWidth-n.offsetWidth);n.style.paddingRight=`${e}px`}return()=>{n.style.overflow=o,n.style.paddingRight=i}}),[A,U]),(0,r.useEffect)((()=>{if(0!==A||!y.current)return;let e=new IntersectionObserver((e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&k()}));return e.observe(y.current),()=>e.disconnect()}),[A,y,k]);let[_,W]=ee(),Z=`headlessui-dialog-${(0,s.M)()}`,G=(0,r.useMemo)((()=>[{dialogState:A,close:k,setTitleId:M},x]),[A,x,k,M]),J=(0,r.useMemo)((()=>({open:0===A})),[A]),Q={ref:T,id:Z,role:"dialog","aria-modal":0===A||void 0,"aria-labelledby":x.titleId,"aria-describedby":_};return r.createElement(ie,{type:"Dialog",element:y,onUpdate:(0,C.z)(((e,t,n)=>{"Dialog"===t&&(0,o.E)(e,{[oe.Add](){b.current.add(n),g((e=>e+1))},[oe.Remove](){b.current.add(n),g((e=>e-1))}})}))},r.createElement(q,{force:!0},r.createElement(K,null,r.createElement(ce.Provider,{value:G},r.createElement(K.Group,{target:y},r.createElement(q,{force:!1},r.createElement(W,{slot:J,name:"Dialog.Description"},r.createElement(H,{initialFocus:v,containers:b,features:N?(0,o.E)($,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},(0,i.sY)({ourProps:Q,theirProps:h,slot:J,defaultTag:"div",features:pe,visible:0===A,name:"Dialog"})))))))),r.createElement(f,{features:d.Hidden,ref:P}))})),me=(0,i.yV)((function(e,t){let[{dialogState:n,close:o}]=de("Dialog.Overlay"),u=(0,l.T)(t),c=`headlessui-dialog-overlay-${(0,s.M)()}`,d=(0,C.z)((e=>{if(e.target===e.currentTarget){if(a(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),o()}})),f=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,i.sY)({ourProps:{ref:u,id:c,"aria-hidden":!0,onClick:d},theirProps:e,slot:f,defaultTag:"div",name:"Dialog.Overlay"})})),he=(0,i.yV)((function(e,t){let[{dialogState:n},o]=de("Dialog.Backdrop"),u=(0,l.T)(t),a=`headlessui-dialog-backdrop-${(0,s.M)()}`;(0,r.useEffect)((()=>{if(null===o.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[o.panelRef]);let c=(0,r.useMemo)((()=>({open:0===n})),[n]);return r.createElement(q,{force:!0},r.createElement(K,null,(0,i.sY)({ourProps:{ref:u,id:a,"aria-hidden":!0},theirProps:e,slot:c,defaultTag:"div",name:"Dialog.Backdrop"})))})),Ee=(0,i.yV)((function(e,t){let[{dialogState:n},o]=de("Dialog.Panel"),u=(0,l.T)(t,o.panelRef),a=`headlessui-dialog-panel-${(0,s.M)()}`,c=(0,r.useMemo)((()=>({open:0===n})),[n]),d=(0,C.z)((e=>{e.stopPropagation()}));return(0,i.sY)({ourProps:{ref:u,id:a,onClick:d},theirProps:e,slot:c,defaultTag:"div",name:"Dialog.Panel"})})),ge=(0,i.yV)((function(e,t){let[{dialogState:n,setTitleId:o}]=de("Dialog.Title"),u=`headlessui-dialog-title-${(0,s.M)()}`,a=(0,l.T)(t);(0,r.useEffect)((()=>(o(u),()=>o(null))),[u,o]);let c=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,i.sY)({ourProps:{ref:a,id:u},theirProps:e,slot:c,defaultTag:"h2",name:"Dialog.Title"})})),we=Object.assign(ve,{Backdrop:he,Panel:Ee,Overlay:me,Title:ge,Description:te})},2830:(e,t,n)=>{"use strict";n.d(t,{u:()=>H});var r=n(52983),o=n(43817),i=n(71249),l=n(49693),u=n(52441),a=n(20285),s=n(89951),c=n(58258),d=n(11438),f=n(30435),p=n(61391);function v(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add((()=>e.removeEventListener(t,r,o)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var E,g=((E=g||{}).Ended="ended",E.Cancelled="cancelled",E);function w(e,t,n,r){let o=n?"enter":"leave",i=v(),u=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{},a=(0,l.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,l.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,l.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return h(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...a,...c),i.nextFrame((()=>{h(e,...c),m(e,...s),function(e,t){let n=v();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(i+l!==0){let r=[];r.push(n.addEventListener(e,"transitionrun",(o=>{o.target===o.currentTarget&&(r.splice(0).forEach((e=>e())),r.push(n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t("ended"),r.splice(0).forEach((e=>e())))})),n.addEventListener(e,"transitioncancel",(e=>{e.target===e.currentTarget&&(t("cancelled"),r.splice(0).forEach((e=>e())))}))))})))}else t("ended");n.add((()=>t("cancelled"))),n.dispose}(e,(n=>("ended"===n&&(h(e,...a),m(e,...t.entered)),u(n))))})),i.dispose}var b=n(35924);function y({container:e,direction:t,classes:n,events:o,onStart:i,onStop:u}){let a=(0,s.t)(),f=function(){let[e]=(0,r.useState)(v);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}(),p=(0,d.E)(t),m=(0,b.z)((()=>(0,l.E)(p.current,{enter:()=>o.current.beforeEnter(),leave:()=>o.current.beforeLeave(),idle:()=>{}}))),h=(0,b.z)((()=>(0,l.E)(p.current,{enter:()=>o.current.afterEnter(),leave:()=>o.current.afterLeave(),idle:()=>{}})));(0,c.e)((()=>{let t=v();f.add(t.dispose);let r=e.current;if(r&&"idle"!==p.current&&a.current)return t.dispose(),m(),i.current(p.current),t.add(w(r,n.current,"enter"===p.current,(e=>{t.dispose(),(0,l.E)(e,{[g.Ended](){h(),u.current(p.current)},[g.Cancelled]:()=>{}})}))),t.dispose}),[t])}function T(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let P=(0,r.createContext)(null);P.displayName="TransitionContext";var F,C=((F=C||{}).Visible="visible",F.Hidden="hidden",F);let S=(0,r.createContext)(null);function R(e){return"children"in e?R(e.children):e.current.filter((({state:e})=>"visible"===e)).length>0}function A(e){let t=(0,d.E)(e),n=(0,r.useRef)([]),i=(0,s.t)(),a=(0,b.z)(((e,r=o.l4.Hidden)=>{let a=n.current.findIndex((({id:t})=>t===e));-1!==a&&((0,l.E)(r,{[o.l4.Unmount](){n.current.splice(a,1)},[o.l4.Hidden](){n.current[a].state="hidden"}}),(0,u.Y)((()=>{var e;!R(n)&&i.current&&(null==(e=t.current)||e.call(t))})))})),c=(0,b.z)((e=>{let t=n.current.find((({id:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):n.current.push({id:e,state:"visible"}),()=>a(e,o.l4.Unmount)}));return(0,r.useMemo)((()=>({children:n,register:c,unregister:a})),[c,a,n])}function x(){}S.displayName="NestingContext";let D=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function O(e){var t;let n={};for(let r of D)n[r]=null!=(t=e[r])?t:x;return n}let L=o.AN.RenderStrategy,k=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:u,beforeLeave:s,afterLeave:c,enter:v,enterFrom:m,enterTo:h,entered:E,leave:g,leaveFrom:w,leaveTo:b,...F}=e,C=(0,r.useRef)(null),x=(0,p.T)(C,t),[D,k]=(0,r.useState)("visible"),M=F.unmount?o.l4.Unmount:o.l4.Hidden,{show:N,appear:H,initial:I}=function(){let e=(0,r.useContext)(P);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Y,unregister:j}=function(){let e=(0,r.useContext)(S);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),V=(0,r.useRef)(null),z=(0,a.M)();(0,r.useEffect)((()=>{if(z)return Y(z)}),[Y,z]),(0,r.useEffect)((()=>{if(M===o.l4.Hidden&&z){if(N&&"visible"!==D)return void k("visible");(0,l.E)(D,{hidden:()=>j(z),visible:()=>Y(z)})}}),[D,z,Y,j,N,M]);let B=(0,d.E)({enter:T(v),enterFrom:T(m),enterTo:T(h),entered:T(E),leave:T(g),leaveFrom:T(w),leaveTo:T(b)}),U=function(e){let t=(0,r.useRef)(O(e));return(0,r.useEffect)((()=>{t.current=O(e)}),[e]),t}({beforeEnter:n,afterEnter:u,beforeLeave:s,afterLeave:c}),$=(0,f.H)();(0,r.useEffect)((()=>{if($&&"visible"===D&&null===C.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[C,D,$]);let q=I&&!H,_=!$||q||V.current===N?"idle":N?"enter":"leave",W=(0,r.useRef)(!1),Z=A((()=>{W.current||(k("hidden"),j(z))}));y({container:C,classes:B,events:U,direction:_,onStart:(0,d.E)((()=>{W.current=!0})),onStop:(0,d.E)((e=>{W.current=!1,"leave"===e&&!R(Z)&&(k("hidden"),j(z))}))}),(0,r.useEffect)((()=>{!q||(M===o.l4.Hidden?V.current=null:V.current=N)}),[N,q,D]);let G=F,J={ref:x};return r.createElement(S.Provider,{value:Z},r.createElement(i.up,{value:(0,l.E)(D,{visible:i.ZM.Open,hidden:i.ZM.Closed})},(0,o.sY)({ourProps:J,theirProps:G,defaultTag:"div",features:L,visible:"visible"===D,name:"Transition.Child"})))})),M=(0,o.yV)((function(e,t){let{show:n,appear:u=!1,unmount:a,...s}=e,d=(0,r.useRef)(null),v=(0,p.T)(d,t);(0,f.H)();let m=(0,i.oJ)();if(void 0===n&&null!==m&&(n=(0,l.E)(m,{[i.ZM.Open]:!0,[i.ZM.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,E]=(0,r.useState)(n?"visible":"hidden"),g=A((()=>{E("hidden")})),[w,b]=(0,r.useState)(!0),y=(0,r.useRef)([n]);(0,c.e)((()=>{!1!==w&&y.current[y.current.length-1]!==n&&(y.current.push(n),b(!1))}),[y,n]);let T=(0,r.useMemo)((()=>({show:n,appear:u,initial:w})),[n,u,w]);(0,r.useEffect)((()=>{if(n)E("visible");else if(R(g)){let e=d.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&E("hidden")}else E("hidden")}),[n,g]);let F={unmount:a};return r.createElement(S.Provider,{value:g},r.createElement(P.Provider,{value:T},(0,o.sY)({ourProps:{...F,as:r.Fragment,children:r.createElement(k,{ref:v,...F,...s})},theirProps:{},defaultTag:r.Fragment,features:L,visible:"visible"===h,name:"Transition"})))})),N=(0,o.yV)((function(e,t){let n=null!==(0,r.useContext)(P),o=null!==(0,i.oJ)();return r.createElement(r.Fragment,null,!n&&o?r.createElement(M,{ref:t,...e}):r.createElement(k,{ref:t,...e}))})),H=Object.assign(M,{Child:N,Root:M})},35924:(e,t,n)=>{"use strict";n.d(t,{z:()=>i});var r=n(52983),o=n(11438);let i=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},20285:(e,t,n)=>{"use strict";n.d(t,{M:()=>s});var r,o=n(52983),i=n(58258),l=n(30435);let u=0;function a(){return++u}let s=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?a:null);return(0,i.e)((()=>{null===t&&n(a())}),[t]),null!=t?""+t:void 0}},89951:(e,t,n)=>{"use strict";n.d(t,{t:()=>i});var r=n(52983),o=n(58258);function i(){let e=(0,r.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},58258:(e,t,n)=>{"use strict";n.d(t,{e:()=>o});var r=n(52983);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},11438:(e,t,n)=>{"use strict";n.d(t,{E:()=>i});var r=n(52983),o=n(58258);function i(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},30435:(e,t,n)=>{"use strict";n.d(t,{H:()=>i});var r=n(52983);let o={serverHandoffComplete:!1};function i(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},61391:(e,t,n)=>{"use strict";n.d(t,{T:()=>u,h:()=>l});var r=n(52983),o=n(35924);let i=Symbol();function l(e,t=!0){return Object.assign(e,{[i]:t})}function u(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[i])))?void 0:n}},71249:(e,t,n)=>{"use strict";n.d(t,{ZM:()=>l,oJ:()=>u,up:()=>a});var r=n(52983);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var i,l=((i=l||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i);function u(){return(0,r.useContext)(o)}function a({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},49693:(e,t,n)=>{"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:()=>r})},52441:(e,t,n)=>{"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:()=>r})},43817:(e,t,n)=>{"use strict";n.d(t,{AN:()=>u,l4:()=>a,sY:()=>s,yV:()=>f});var r,o,i=n(52983),l=n(49693),u=((o=u||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),a=((r=a||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:u}){let a=d(t,e);if(i)return c(a,n,r,u);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return c(t,n,r,u)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return c(a,n,r,u)}function c(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...a}=v(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},c="function"==typeof l?l(t):l;a.className&&"function"==typeof a.className&&(a.className=a.className(t));let f={};if(o===i.Fragment&&Object.keys(p(a)).length>0){if(!(0,i.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,i.cloneElement)(c,Object.assign({},d(c.props,p(v(a,["ref"]))),f,s))}return(0,i.createElement)(o,Object.assign({},v(a,["ref"]),o!==i.Fragment&&s,o!==i.Fragment&&f),c)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if(e.defaultPrevented)return;n(e,...t)}}});return t}function f(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},25819:(e,t,n)=>{"use strict";n.d(t,{_:()=>c});var r=n(64062),o=n(60694),i=n(85350),l=n(99263);function u(){var e=!1,t=[],n=new Set,u={subscribe:function(e){return n.add(e),function(){n.delete(e)}},start:function(r,o){if(e){var l=[];return n.forEach((function(e){l.push((0,i.d5)(e,r,{transitionOverride:o}))})),Promise.all(l)}return new Promise((function(e){t.push({animation:[r,o],resolve:e})}))},set:function(t){return(0,o.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((function(e){(0,l.gg)(e,t)}))},stop:function(){n.forEach((function(e){(0,i.p_)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,n=e.resolve;u.start.apply(u,(0,r.ev)([],(0,r.CR)(t),!1)).then(n)})),function(){e=!1,u.stop()}}};return u}var a=n(52983),s=n(86611);var c=function(){var e=(0,s.h)(u);return(0,a.useEffect)(e.mount,[]),e}}}]);