"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[604],{30604:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});t(75751),t(67859);var n=t(52983),s=t(67182),l=t(95197),i=t(56712),o=t(6563),c=t(56403),a=t(9312),d=t(69175),u=(t(75044),t(71977));const f=()=>{const{runId:e}=(0,l.UO)(),r=(0,a.AC)(a.fS),[t]=(0,o.XN)(),n=r&&e?parseInt(e):t.focusId?parseInt(t.focusId):void 0,{data:s,isError:d}=(0,c.yN)(null!=n?n:i.skipToken);return d?(0,u.tZ)("div",{className:"grid w-full h-full place-items-center",children:(0,u.tZ)("span",{className:"text-[1.375rem] font-semibold leading-[0.75rem]",children:"Something went wrong"})}):s?(0,u.tZ)("iframe",{className:"w-full h-full border-none rounded-b-md",src:s.url,title:"log"}):null};var h=t(67912);const m=({runId:e})=>{const{data:r,isFetching:t,isError:n}=(0,c.bV)(e),s=n||r&&!r.url,l=(null==r?void 0:r.url)||"";return(0,u.tZ)(h.rU,{variant:h.CT.Primary,iconLeft:"EscapeRight20x20",to:l,isError:s,isLoading:t,isExternal:!0,children:"Source"})};var g=t(91151);const v=({runId:e})=>{const r={pathname:`/runs/${e}`};return(0,u.tZ)(h.rU,{variant:h.CT.Primary,iconLeft:"EscapeRight20x20",to:r,children:"Run"})},p=(0,n.memo)((({runId:e,focusId:r})=>(0,u.BX)("div",{className:"flex flex-col w-full h-full bg-white rounded-md",children:[(0,u.tZ)(h.Ol,{label:"Log",children:(0,u.BX)("div",{className:"flex items-center gap-2",children:[(0,u.tZ)(v,{runId:e}),(0,u.tZ)(x,{runId:e,focusId:r}),(0,u.tZ)(X,{focusId:r}),(0,u.tZ)(m,{runId:e})]})}),(0,u.tZ)("div",{className:"flex items-center justify-center flex-grow pl-4",children:(0,u.tZ)(f,{})})]})));var y=t(39636);const b=e=>{const{hasErrors:r,isNokMode:t,isShowingRunLog:n,onScrollToFocusClick:s,onRunButtonClick:l,onNokClick:i}=e;return(0,u.tZ)(h.Ol,{label:"Tree",children:(0,u.BX)("div",{className:"flex items-center gap-2",children:[(0,u.tZ)(d.u,{content:"Only NOK",delay:[500,0],children:(0,u.tZ)("button",{className:(0,d.m6)("p-1 border border-transparent rounded text-text-unexpected hover:bg-primary-wash disabled:border-border-primary disabled:text-border-primary disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors",t&&"bg-bg-error text-white hover:text-white hover:bg-bg-error"),disabled:!r,onClick:i,children:(0,u.tZ)(y.P.CircleInfo16x16,{})})}),(0,u.tZ)(d.zx,{variant:"secondary",isActive:n,onClick:l,children:"Run log"}),(0,u.tZ)(d.zx,{variant:"secondary",iconLeft:"DocumentDrawer20x20",onClick:s,children:"Scroll to focus"})]})})},w=()=>(0,u.tZ)(h.M5,{h:"full",w:"full",children:(0,u.tZ)(h.xv,{fontSize:"1.125rem",lineHeight:"0.875rem",fontWeight:"semibold",children:"Something went wrong..."})});t(14209);const k=e=>(0,u.tZ)(h.rU,Object.assign({variant:h.CT.Primary,iconLeft:"EscapeRight20x20"},e,{children:"History"})),x=({runId:e,focusId:r})=>{const{node:t}=c.Ul.endpoints.getTreeByRunId.useQueryState(e,{selectFromResult:e=>({node:e.data&&r?e.data.tree[r]:void 0})}),s="test"===(null==t?void 0:t.entity),l=null==t?void 0:t.id,{data:a,isFetching:d,isError:f}=(0,c.Gg)(l&&s?parseInt(l):i.skipToken),h=(0,n.useMemo)((()=>{if(!a)return"/history";const e=(0,g.XP)(a);return`/history${(0,o.X6)(e)}`}),[a]);return(0,u.tZ)(k,{to:h,isError:f||!a,isLoading:d})};t(66620),t(94641),t(5993);var E=t(16559),Z=t(5767),I=t(92848),S=t(35562),C=t(32642);const N=e=>{switch(e){case C.KD.Package:case C.KD.Session:return(0,u.tZ)(y.P.Folder16x16,{className:"flex-shrink-0"});case C.KD.Test:return(0,u.tZ)(y.P.Test16x16,{className:"flex-shrink-0"});case C.KD.Suite:return(0,u.tZ)(y.P.TestSet16x16,{className:"flex-shrink-0"});default:return(0,u.tZ)(y.P.Test16x16,{className:"flex-shrink-0"})}},K={backgroundColor:"#f7faff",color:"#627efb"},L={backgroundColor:"white",borderColor:"#627efb"},T=(0,n.memo)((e=>{const{entity:r,label:t,isOpen:n,isFocused:s,isScrolled:l,isShowingRunLog:i,onClick:o,hasError:c,style:a,paddingStyle:f,path:h,isRoot:m}=e,g=r===C.KD.Test,v=r===C.KD.Suite||m,p=s&&!i,b=l&&!i,w=h||"",k={opacity:m?0:1,transform:n?void 0:"rotate(-90deg)"};let x={};return p&&(x=K),b&&(x=L),p&&b&&(x=Object.assign({},K,L)),(0,u.tZ)("div",{className:"flex items-center py-0.5",style:a,children:(0,u.tZ)(d.u,{content:w,placement:"bottom",disabled:v,animation:"shift-toward",delay:[400,0],children:(0,u.tZ)("div",{className:(0,d.m6)("flex items-center justify-center w-full h-full min-w-0 mx-4 rounded cursor-pointer border border-transparent bg-[#d7dbe4c] hover:border-primary hover:bg-white active:bg-[#f8f8fa] active:text-primary",p&&"text-primary bg-primary-wash",b&&"bg-white border-primary"),style:x,onClick:o,children:(0,u.tZ)("div",{className:"w-full h-full",style:f,children:(0,u.BX)("div",{className:"flex items-center h-full min-w-0 gap-1 pr-1",children:[!g&&(0,u.tZ)(y.P.ArrowTreeDown16x16,{style:k,className:"flex-shrink-0"}),N(r),(0,u.tZ)("span",{className:"h-full font-medium text-[0.875rem] truncate",children:t}),c&&(0,u.tZ)(y.P.InfoCircle12x12,{className:"flex-shrink-0 text-text-unexpected"})]})})})})})})),O=({data:{id:e,entity:r,nestingLevel:t,name:l,hasError:i,path:c},treeData:{mainPackage:d,focusId:f,currentScrollId:h,changeCurrentScrollId:m},isOpen:g,setOpen:v,style:p})=>{const[y,b]=(0,o.XN)(),w=(0,s.I0)(),k=e===f.toString(),x=e===d,E=h.toString()===e,Z=r===C.KD.Package||C.KD.Session||r===C.KD.Suite,I=r===C.KD.Test,S=r===C.KD.Suite,N=(0,a.AC)(a.fS),K=(0,n.useMemo)((()=>({paddingLeft:20*t+(I?20:0)})),[I,t]),L=(0,n.useMemo)((()=>p),[p]),O=(0,n.useCallback)((r=>{r.preventDefault(),E||m(e),S||b({focusId:e,mode:y.mode}),!x&&Z&&v(!g),w((0,a.ab)(!1))}),[m,w,e,x,g,Z,E,S,y.mode,v,b]);return(0,u.tZ)(T,{id:e,entity:r,label:l,path:c,isOpen:g,isFocused:k,isScrolled:E,isShowingRunLog:N,isRoot:x,hasError:i,onClick:O,paddingStyle:K,style:L})},R=(e,r)=>({data:{id:e.id,start:e.start,name:e.name,entity:e.entity,errorCount:e.errorCount,children:e.children,hasError:e.hasError,parentId:e.parentId,path:e.path,nestingLevel:r,isOpenByDefault:0===r},nestingLevel:r,node:e}),D=(0,n.forwardRef)((({data:{tree:e,mainPackage:r},focusId:t,itemSize:s},l)=>{const i=(0,n.useRef)(null),[,c]=(0,o.XN)(),a=(0,n.useCallback)((function*(){for(yield R(e[r],0);;){const r=yield;for(let t=0;t<r.node.children.length;t++){const n=r.node.children[t];yield R(e[n],r.nestingLevel+1)}}}),[r,e]),d=(0,S.GG)(),{scrollableRef:f,scrollTo:h}=(0,S.Bz)(),m=(0,n.useRef)(null!=t?t:r),v=(0,n.useRef)(),p=(0,n.useCallback)((e=>{m.current=e,d()}),[d]);(0,n.useImperativeHandle)(l,(()=>v.current),[v.current]);const y=(0,n.useRef)(!0);return(0,n.useEffect)((()=>{const n=e=>{m.current=e,d()},l=async()=>{if(t){var r,n;const s=null==(r=i.current)?void 0:r.state.order,l=(e=>{const r={};return e.forEach((e=>r[e]=!0)),r})((0,g.$4)(t,e));if(await(null==(n=i.current)?void 0:n.recomputeTree(l)),!s)return;o(t,s)}},o=(e=r,t)=>(n(e),h(((e,r)=>r.indexOf(e.toString())*s-window.innerHeight/2+s/2)(e,t)));i.current&&t&&l(),i.current&&!t&&(()=>{var e,t;if(null!=(e=i.current)&&e.state.order)o(r,null==(t=i.current)?void 0:t.state.order)})();const a=n=>{var s;const c=null==(s=i.current)?void 0:s.state.order;if("KeyR"===n.code||"KeyC"===n.code||"KeyW"===n.code||"KeyS"===n.code||"KeyA"===n.code||"KeyD"===n.code||"KeyH"===n.code||"KeyJ"===n.code||"KeyK"===n.code||"KeyL"===n.code){let t;"KeyR"===n.code&&(t=((t,n)=>t===r?n.slice().reverse().find((r=>(0,g.JE)(e[r]))):n.slice(0,n.indexOf(t)+1).reverse().find(((t,n,s)=>{var l,o;const c=null==(l=i.current)||null==(o=l.state.records.get(t))?void 0:o.public.isOpen;return 0!==n&&(t===r||e[t].hasError||(0,g.JE)(e[t])&&!(0,g.JE)(e[s[n+1]])||(0,g.JE)(e[t])&&!(0,g.JE)(e[s[n-1]])||c)})))(m.current,c)),"KeyC"===n.code&&(t=((t,n)=>n.slice(n.indexOf(t)).find(((n,s,l)=>{var o,c,a,d,u,f;const h=null==(o=i.current)||null==(c=o.state.records.get(n))?void 0:c.public.isOpen;return 0!==s&&(n===r||e[n].hasError||(0,g.JE)(e[n])&&!(0,g.JE)(e[l[s-1]])||(0,g.JE)(e[n])&&!(0,g.JE)(e[l[s+1]])||h||!((null==(a=i.current)||null==(d=a.state.records.get(n))?void 0:d.public.data.nestingLevel)===(null==(u=i.current)||null==(f=u.state.records.get(t))?void 0:f.public.data.nestingLevel))&&"test"!==e[n].entity)})))(m.current,c)),"KeyW"!==n.code&&"KeyK"!==n.code||(t=((e,r)=>r.slice(0,r.indexOf(e.toString())).reverse()[0]||r[r.length-1])(m.current,c)),"KeyS"!==n.code&&"KeyJ"!==n.code||(t=((e,r)=>r.slice(r.indexOf(e.toString()))[1])(m.current,c)),"KeyA"!==n.code&&"KeyH"!==n.code||(t=((t,n)=>{if(t===r)return n.slice().reverse().find((r=>(0,g.JE)(e[r])));const s=n.slice(0,n.indexOf(t)+1).reverse().slice(0,11);return s[s.length-1]})(m.current,c)),"KeyD"!==n.code&&"KeyL"!==n.code||(t=((e,t)=>{const n=t.slice(t.indexOf(e)).slice(0,11);return n[n.length-1]===t[t.length-1]?r:n[n.length-1]})(m.current,c)),o(t,c)}"KeyT"===n.code&&o(r,c),"KeyF"===n.code&&t&&l()},u=async e=>{var t;"KeyG"===e.code&&(await(null==(t=i.current)?void 0:t.recomputeTree({[r]:{open:!0,subtreeCallback(e,r){e!==r&&(e.isOpen=!1)}}})),n(r))},f=async t=>{var n;const s=null==(n=i.current)?void 0:n.state.order,l=e[m.current].parentId;if("KeyX"===t.code){var c;if(l&&l!==r)await(null==(c=i.current)?void 0:c.recomputeTree({[l]:{open:!1,subtreeCallback(e,r){e.isOpen=!1}}}));if(!s)return;o(l&&l!==r?l:r,s)}},p=async t=>{var n;const s=null==(n=i.current)?void 0:n.state.order,l=e[m.current].parentId;if("KeyZ"===t.code){var c;if(l&&l!==r)await(null==(c=i.current)?void 0:c.recomputeTree({[l]:{open:!0,subtreeCallback(e,r){e!==r&&(e.isOpen=!1)}}}));o(l&&l!==r?l:r,s)}},b=async t=>{if("Enter"===t.code){if((0,g.JE)(e[m.current])){var n,s,l;const e=null==(n=i.current)||null==(s=n.state.records.get(m.current))?void 0:s.public.isOpen;await(null==(l=i.current)?void 0:l.recomputeTree({[m.current]:!(e&&m.current!==r)}))}"suite"!==e[m.current].entity&&c((e=>(0,E.ZP)(e,(e=>{e.focusId=m.current}))))}};return v.current=l,y&&t&&(setTimeout((()=>{e[t]&&l()}),0),y.current=!1),window.addEventListener("keypress",a),window.addEventListener("keypress",b),window.addEventListener("keypress",f),window.addEventListener("keypress",p),window.addEventListener("keypress",u),()=>{window.removeEventListener("keypress",a),window.removeEventListener("keypress",b),window.removeEventListener("keypress",f),window.removeEventListener("keypress",p),window.removeEventListener("keypress",u)}}),[t,r,e,s,h,d,c]),(0,u.tZ)(I.Z,{children:({height:e,width:n})=>(0,u.tZ)(Z.NC,{ref:i,outerRef:f,treeWalker:a,height:e,width:n,itemSize:s,className:"no-bg-scrollbar",outerElementType:"ul",itemData:{mainPackage:r,focusId:t,currentScrollId:m.current,changeCurrentScrollId:p},style:{margin:0,padding:0,listStyle:"none"},children:O})})})),P=({data:e,isError:r,focusId:t})=>{const l=(0,s.I0)(),i=(0,a.AC)(a.fS),[o,c]=(0,n.useState)(!1),d=(0,n.useMemo)((()=>{if(!e)return null;const r=(e=>{const r={};return Object.values(e.tree).some((e=>e.hasError))?(Object.values(e.tree).forEach((t=>{t.hasError&&(r[t.id]=Object.assign({},t),r[t.id].children=r[t.id].children.filter((r=>e.tree[r].hasError)))})),r):null})(e);return r?Object.assign({},e,{tree:r}):null}),[e]),f=(0,n.useRef)(),h=(0,n.useCallback)((()=>{null==f.current||f.current()}),[]),m=(0,n.useCallback)((()=>{l((0,a.ab)(!0))}),[l]),g=(0,n.useCallback)((()=>{c((e=>!e))}),[]);return r?(0,u.BX)("div",{className:"flex flex-col flex-grow bg-white rounded-md",children:[(0,u.tZ)(b,{hasErrors:null!==d,isNokMode:o,isShowingRunLog:i,onScrollToFocusClick:h,onRunButtonClick:m,onNokClick:g}),(0,u.tZ)("div",{className:"w-full h-full",children:(0,u.tZ)(w,{})})]}):(0,u.BX)("div",{className:"flex flex-col flex-grow bg-white rounded-md",children:[(0,u.tZ)(b,{hasErrors:null!==d,isNokMode:o,isShowingRunLog:i,onScrollToFocusClick:h,onRunButtonClick:m,onNokClick:g}),(0,u.BX)("div",{className:"w-full h-full",children:[e&&!o&&(0,u.tZ)(D,{data:e,itemSize:28,focusId:t||e.mainPackage,ref:f}),e&&d&&o&&(0,u.tZ)(D,{data:d,itemSize:28,focusId:t||e.mainPackage,ref:f})]})]})},X=({focusId:e})=>{var r,t,n,s;const{data:l,isFetching:o,isError:a}=(0,c.n9)(null!=e?e:i.skipToken),d=null==l||null==(r=l.result)||null==(t=r.result_id)?void 0:t.toString(),f=null==l||null==(n=l.result)?void 0:n.run_id,m=null==l||null==(s=l.result)?void 0:s.has_measurements;(0,c.yD)({resultId:d});const g=`/runs/${f}/results/${d}/measurements`;return(0,u.tZ)(h.rU,{variant:h.CT.Primary,iconLeft:"EscapeRight20x20",to:g,isError:a||!m,isLoading:o,children:"Measure"})},B=({runId:e,children:r,isTreeShown:t})=>{const f=(0,s.I0)(),h=(0,l.TH)(),[m]=(0,o.XN)();(0,n.useEffect)((()=>{f((0,a.ab)(!1))}),[f]),(0,n.useEffect)((()=>{m.focusId||f((0,a.ab)(!0))}),[f,h,m]);const{data:g,isLoading:v,isError:y}=(0,c.IQ)(null!=e?e:i.skipToken);return e?v?(0,u.tZ)(d.$j,{className:"h-screen"}):y?(0,u.tZ)("div",{children:"Error..."}):(0,u.BX)(u.HY,{children:[t&&(0,u.tZ)("div",{className:"flex min-w-[300px] flex-shrink-0 resize-x overflow-auto",children:(0,u.tZ)(P,{data:g,isError:y,focusId:m.focusId})}),(0,u.BX)("div",{className:"flex flex-col flex-grow h-full gap-1",children:[r,(0,u.tZ)("main",{className:"flex-grow",children:(0,u.tZ)(p,{runId:e,focusId:m.focusId})})]})]}):null}}}]);