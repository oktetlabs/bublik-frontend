"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{88071:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ut});r(75751),r(67859);var a=r(52983),o=r(67182),n=r(56167),s=r(83885),l=r(19587),i=r(36162),d=r(32642),c=r(56403),u=r(35562),h=r(6563),m=r(69175),g=r(80146),p=r(91151);const b={type:c.o_.DashboardData,id:"today"},y=e=>({type:c.o_.DashboardData,id:e}),f=e=>e.map(p.wy),v=()=>{const e=(0,o.I0)(),t=(0,c.F7)("getDashboardByDate"),r=(0,a.useCallback)((t=>{e(c.Ul.util.invalidateTags(t))}),[e]),n=(0,a.useCallback)((e=>{const t=(e=>e.map(y))(f(e)).concat(b);r(t)}),[r]),s=(0,a.useCallback)((e=>f(e).forEach((e=>t({date:e})))),[t]),l=(0,a.useCallback)((e=>{const t=(0,g.Z)(e,{days:1}),r=(0,g.Z)(e,{days:-1});s([r,t])}),[s]);return{prefetchDates:s,invalidateDates:n,prefetchForDate:l}};r(90142);var x=r(28535);const w=e=>(0,o.v9)((({dashboardPage:t})=>e(t))),Z=e=>e.dates,k=(0,x.createSelector)([Z],(e=>{const t=(e,[t,r])=>(e[t]=r,e),r=[],a=[];Object.entries(e).forEach((([e,t],o)=>{o%2?a.push([e,t]):r.push([e,t])}));return[r.reduce(t,{}),a.reduce(t,{})]})),C=(0,x.createSelector)([Z],(e=>Object.values(e))),S=e=>e.searchTerm,D=e=>e.mode,R=e=>e.columnOneSorting,M=e=>e.columnTwoSorting,j=e=>e.isPollingEnabled,B=e=>e.invalidationTime;var P=r(78445);const T={mode:null,dates:{},columnOneSorting:[],columnTwoSorting:[],searchTerm:"",startDate:"",endDate:"",isPollingEnabled:!1,invalidationTime:(new Date).toISOString()},O=(0,P.createSlice)({name:"dashboardPage",initialState:T,reducers:{batchUpdate:(e,{payload:t})=>{t.mode&&(e.mode=t.mode),t.columnOneSorting&&(e.columnOneSorting=t.columnOneSorting),t.columnTwoSorting&&(e.columnTwoSorting=t.columnTwoSorting),t.dates&&(e.dates=t.dates),t.endDate&&(e.endDate=t.endDate),t.startDate&&(e.startDate=t.startDate),e.searchTerm=t.searchTerm||""},setColumnSort:(e,t)=>{const{columnId:r,sortBy:a}=t.payload;"column-1"===r&&(e.columnOneSorting=a),"column-2"===r&&(e.columnTwoSorting=a)},setTableDate:(e,t)=>{e.dates[t.payload.id]=t.payload.date},toggleIsPollingEnabled:(e,{payload:t})=>{e.isPollingEnabled=t},updateInvalidationTime:(e,{payload:t})=>{e.invalidationTime=t.toISOString()},setDates:(e,{payload:t})=>{e.dates=t},updateDashboardMode:(e,{payload:t})=>{e.mode=t}}}),{setDates:N,updateInvalidationTime:E,batchUpdate:I,setTableDate:_,setColumnSort:X,toggleIsPollingEnabled:H,updateDashboardMode:F}=(O.reducer,O.actions);var L=r(16559),A=r(71977);const U=(0,a.createContext)(void 0),z=e=>{const{columnId:t,mode:r,dates:o,sortBy:n,children:s}=e,[,l]=(0,h.XN)(),i=(0,a.useCallback)((e=>{l((r=>(0,L.ZP)(r,(r=>{"column-1"===t&&(r.columnOneSorting=e.sortBy),"column-2"===t&&(r.columnTwoSorting=e.sortBy)}))))}),[t,l]);return(0,A.tZ)(U.Provider,{value:{mode:r,dates:o,sortBy:n,onColumnSortChange:i},children:s})},$=()=>{const e=(0,a.useContext)(U);if(!e)throw new Error("useColumn must be used inside ColumnProvider");return e},W=(0,a.createContext)(void 0),Y=e=>{const{header:t,children:r}=e;return(0,A.tZ)(W.Provider,{value:{header:t},children:r})};r(94641);var Q=r(45502),G=r(75592);const q=(e,t)=>{switch(e){case"tree":return`/log/${t}?mode=treeAndinfoAndlog`;case"runs":return`/runs/${t}`;default:return`/${e}/${t}`}},J=({value:e=0,to:t="",params:r,hasAbsoluteURL:a,backgroundColor:o,children:n})=>{const s=(0,G.dQ)("colors",o);return a?(0,A.tZ)(m.u,{content:e,delay:[400,0],children:(0,A.tZ)("a",{className:"py-0.5 px-2 truncate rounded bg-badge-0",target:"__blank",href:t,children:n})}):(0,A.tZ)(m.u,{content:e.toString(),delay:[400,0],children:(0,A.tZ)(Q.rU,{className:"py-0.5 px-2 truncate rounded",to:q(t,r),style:{backgroundColor:s},children:n})})};r(14209);const K=e=>(0,A.tZ)("div",Object.assign({className:"flex flex-col px-6 py-4 mb-1 bg-white rounded-t-xl"},e,{children:(0,A.BX)("div",{className:"flex flex-wrap justify-between gap-2",children:[(0,A.BX)("div",{className:"flex flex-wrap items-stretch justify-center gap-6",children:[(0,A.tZ)(Fe,{}),(0,A.tZ)(Qe,{}),(0,A.tZ)(Ye,{})]}),(0,A.BX)("div",{className:"flex flex-wrap items-stretch justify-center gap-6",children:[(0,A.tZ)(Ie,{}),(0,A.tZ)(He,{})]})]})}));var V=r(67912);const ee=e=>{const{searchTerm:t,onTermChange:r}=e,[o,n]=(0,a.useState)(t),s=(0,u.Nr)(o,500);return(0,a.useEffect)((()=>{r(s)}),[s]),(0,A.tZ)(V.E1,{value:o,autoComplete:"off",placeholder:"Search...",onChange:e=>n(e.target.value)})};var te=r(11095),re=r(46050);const ae=["label"],oe=(0,a.forwardRef)(((e,t)=>{let{label:r="Placeholder"}=e,a=(0,te.Z)(e,ae);return(0,A.BX)("label",{htmlFor:"toggle-switch",className:"flex items-center justify-center gap-3 cursor-pointer rounded-lg px-3 text-[0.875rem] leading-[1.5rem] font-medium border border-border-primary",ref:t,children:[(0,A.tZ)(re.fC,Object.assign({className:"w-[26px] h-4 bg-border-primary rounded-full relative rdx-state-checked:bg-primary"},a,{id:"toggle-switch",children:(0,A.tZ)(re.bU,{className:"block w-3 h-3 bg-primary rounded-full transition-all translate-x-0.5 will-change-transform rdx-state-checked:translate-x-3 rdx-state-checked:bg-white"})})),r]})})),ne=()=>(0,A.tZ)(m.uv,{offset:60}),se=(0,a.memo)((({time:e})=>(0,A.tZ)(V.SU,{time:e}))),le=e=>(0,A.tZ)("button",Object.assign({className:"relative inline-flex items-center justify-center transition-all appearance-none select-none whitespace-nowrap py-[7px] px-3 text-[0.875rem] font-medium leading-[1.5rem] rounded-lg border border-border-primary"},e,{children:"Today"})),ie=(0,a.memo)((({onCheckChange:e})=>(0,A.tZ)(m.u,{content:"Reload page every 30 seconds",placement:"bottom",offset:[0,15],animation:"shift-toward",children:(0,A.tZ)(oe,{label:"Auto reload",onCheckedChange:e})}))),de=({value:e})=>e?(0,A.tZ)(m.u,{content:e,delay:[400,0],children:(0,A.tZ)("span",{className:"truncate",children:e})}):null;r(3107);const ce=e=>{const t={};let r=0;for(const[a,o]of Object.entries(e.rowCells))Array.isArray(o)||(ue(o)||he(o))&&r<=9&&(t[a]=`badges.badge${r}`,r++);return t},ue=e=>{var t;return!(null==(t=e.payload)||!t.url)},he=e=>{var t;return!(null==(t=e.payload)||!t.params)},me=e=>{var t,r,a,o;const n=(null==(t=e.payload)||null==(r=t.url)?void 0:r.startsWith("https://"))||!1,s=(null==(a=e.payload)||null==(o=a.url)?void 0:o.startsWith("http://"))||!1;return n||s},ge=e=>{switch(e){case d.vZ.Success:return"var(--chakra-colors-badges-badge3)";case d.vZ.Warning:return"var(--chakra-colors-badges-badge14)";case d.vZ.Error:return"var(--chakra-colors-badges-badge15)";default:return"var(--chakra-colors-badges-badge0)"}},pe=({cell:e,headerKey:t,colorMap:r})=>{var a,o;const n=e.row.original.rowCells[t];if(Array.isArray(n))return(0,A.tZ)(de,{value:e.value});const s=((e,t,r)=>e.context?ge(e.context):r.column.key&&r.column.key in t?t[r.column.key]:"badges.badge0")(n,r,e),l=ue(n),i=me(n);return l?(0,A.tZ)(J,{value:n.value,to:null==(a=n.payload)?void 0:a.url,params:null==(o=n.payload)?void 0:o.params,hasAbsoluteURL:i,backgroundColor:s,children:n.value}):(0,A.tZ)(de,{value:n.value})};var be=r(73235);const ye=e=>e?"nok":"ok",fe=e=>{const t=e.map(ye).reduce(((e=0)=>(t,r,a,o)=>{const n=0===a,s=a+1===o.length,l=o[a-1];let i;if(n)return t;if(s)return l!==r?(i=[o.slice(e,a),o.slice(-1)],[...t,...i]):[...t,o.slice(e,a+1)];if(l!==r){const r=[...t,o.slice(e,a)];return e=a,r}return t})(),[]);const r=t.reduce(((e,t)=>e+t.length),0);return t.map((e=>t=>({status:t[0],basis:Math.ceil(t.length/e*100)}))(r))};const ve={name:"ydhn17",styles:"&:before{content:'';display:block;position:absolute;left:0px;top:0;height:8px;width:150px;background:linear-gradient(\n      to right,\n      transparent 0%,\n      #ffffff 50%,\n      transparent 100%\n    );animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;@keyframes load{from{left:-250px;}to{left:100%;}}}"},xe=(0,be.Z)("div",{target:"e1852ajj0"})("position:relative;border-radius:10px;opacity:0.7;height:8px;overflow:hidden;background-color:",(({status:e,isFetching:t})=>((e,t)=>e?"var(--chakra-colors-bg-compromised)":t?"ok"===t?"var(--chakra-colors-bg-ok)":"var(--chakra-colors-bg-error)":"var(--chakra-colors-bg-compromised)")(t,e)),";flex-basis:",(({flexBasis:e})=>e&&e),"%;",(({isFetching:e})=>e&&ve),";"),we=({runId:e})=>{const{data:t,isFetching:r,isError:a}=(0,c.Pm)(e);return(0,A.BX)(A.HY,{children:[r&&(0,A.tZ)(V.M5,{position:"relative",gap:1,children:(0,A.tZ)(xe,{flexBasis:100,isFetching:r})}),t&&(0,A.tZ)(V.M5,{position:"relative",gap:1,children:fe(t).map(((e,t)=>(0,A.tZ)(xe,{flexBasis:e.basis,status:e.status,isFetching:r},t)))}),a&&(0,A.tZ)(V.M5,{children:(0,A.tZ)(V.xv,{lineHeight:"1.5rem",fontSize:"0.875rem",children:"Something went wrong..."})})]})},Ze=e=>{const{runId:t,colorMap:r,descriptionMap:a,rowCells:o,runStatus:n}=e,s=(0,V.e2)(n);return(0,A.BX)(V.xu,{className:"py-2.5 pr-2.5 pl-7",_before:(l=s,{content:"''",bgColor:l,width:6,height:"calc(100% + 7px)",position:"absolute",top:0,left:0,transform:"translate(-1px, -6px)",borderBottomLeftRadius:"6px"}),children:[(0,A.tZ)("div",{className:"flex flex-wrap gap-2 mb-4",children:Object.entries(o).map((([e,t])=>{var o,n;if(Array.isArray(t))return null;if(!ue(t))return null;const s=me(t),l=((e,t)=>e in t?t[e]:"")(e,a);return(0,A.BX)(J,{value:t.value,to:null==(o=t.payload)?void 0:o.url,params:null==(n=t.payload)?void 0:n.params,hasAbsoluteURL:s,backgroundColor:r[e],children:[t.value," - ",l]},e)}))}),t&&n!==d.RG.Running&&(0,A.tZ)(we,{runId:t})]});var l},ke=({runStatus:e})=>{const{icon:t,color:r,bg:a,label:o}=(0,V.Vj)(e);return(0,A.tZ)(m.u,{content:`Conclusion: ${o}`,placement:"top",delay:[400,0],children:(0,A.tZ)(V.M5,{width:"full",height:"full",borderLeftRadius:"0.375rem",color:r,bg:a,children:t})})};var Ce=r(13819),Se=r(39636);const De=(e,t,r)=>{const a=Re(e,t),o=Math.max(a,r.length);return Math.min(400,14*o+128)},Re=(e,t)=>e.reduce(((e,r)=>{var a,o,n;const s=r.rowCells[t];if(Array.isArray(s))return Math.max(e,Me(s).length);const l=null!=(a=null==(o=s.value)||null==(n=o.toString())?void 0:n.length)?a:0;return Math.max(e,l)}),0),Me=e=>e.map((e=>e.value)).filter((e=>e)).join(", "),je=e=>t=>{const r=t.rowCells[e];return Array.isArray(r)?Me(r):r.value||""},Be={id:"test-status",minWidth:24,width:24,maxWidth:24,Header:()=>null,accessor:e=>e.context.conclusion,Cell:e=>(0,A.tZ)(ke,{runStatus:e.value}),columnCSS:{marginRight:"4px",transform:"translate(-1px, -1px)",height:"calc(100% + 1px)",marginLeft:"0px"},disableSortBy:!0},Pe={Header:()=>null,id:"expander",Cell:({row:e})=>(0,A.tZ)("button",Object.assign({className:(0,m.m6)("text-primary hover:bg-primary-wash rounded",e.isExpanded&&"bg-primary text-white hover:bg-primary hover:text-white")},e.getToggleRowExpandedProps(),{children:(0,A.tZ)(Se.P.ShowMore24x24,{})})),width:24,minWidth:24,columnCSS:{justifyContent:"flex-end",marginRight:"4px"}},Te=e=>{const t=((e,t,r)=>{const a=ce((0,p.I2)(t));return e.map((e=>{const o=(0,Ce.camelize)(e.key),n=o in r?r[o]:"";return{key:o,Header:e.name,id:o,accessor:je(o),Cell:e=>(0,A.tZ)(pe,{cell:e,headerKey:o,colorMap:a}),cellTagColor:a[o],cellMetaDescription:n,width:De(t,o,e.name),sortDescFirst:!0}}))})(e.header,e.rows,e.payload);return[Be,...t,Pe]},Oe=(e,{row:t})=>[e,{style:{backgroundColor:t.original.context.conclusion===d.RG.Error?"var(--chakra-colors-bg-fillError)":"var(--chakra-colors-bg-primary)"}}],Ne=({row:e})=>{const t=ce(e.original),r=(e=>{const t={};return e.allCells.forEach((e=>{e.column.cellMetaDescription&&e.column.key&&(t[e.column.key]=e.column.cellMetaDescription)})),t})(e);return(0,A.tZ)(Ze,{runId:e.original.context.runId,colorMap:t,descriptionMap:r,rowCells:e.original.rowCells,runStatus:e.original.context.conclusion})},Ee=(0,a.memo)((e=>{const{data:t,todayData:r,date:o,mode:n,isFetching:s,isError:l,sortBy:i,shouldOverrideSort:d,onStateChange:c,onTableDateChange:u,shouldShowHeader:h,headerRef:g,doubleHeader:b,splitBody:y,globalSearch:f,errorStatus:v}=e,x=(0,a.useMemo)((()=>({sortBy:i})),[i]),w=(0,a.useMemo)((()=>t?Te(t):r?Te(r):[]),[t,r]),Z=(0,a.useMemo)((()=>(e=>({header:{position:"sticky",top:0,flexGrow:1,zIndex:10},headerRow:{height:"34px"},headerCell:{display:"flex",alignItems:"center",justifyContent:"flex-start",margin:"0 1px",overflow:"hidden"},headerCustomRow:{top:"columns"===e?"34px":"116px",position:"sticky",zIndex:10,display:"grid",placeItems:"center",borderBottomLeftRadius:"6px",borderBottomRightRadius:"6px",paddingTop:"4px",backgroundColor:"var(--chakra-colors-bg-primary)","&::before":{position:"absolute",content:'""',top:0,width:"100%",height:"4px",backgroundColor:"var(--chakra-colors-bg-body)"}},bodyRow:{height:"34px",backgroundColor:"var(--chakra-colors-bg-primary)",borderTop:"1px solid transparent",borderLeft:"1px solid transparent",borderRight:"1px solid transparent"},bodyCell:{display:"flex",alignItems:"center",justifyContent:"flex-start",margin:"0 1px"}}))(n)),[n]),k=(0,a.useMemo)((()=>t?t.rows:[]),[t]),C=(0,a.useMemo)((()=>o?new Date(o):null!=t&&t.date?new Date(t.date):new Date),[t,o]),S=(0,a.useCallback)(((e,t)=>d?Object.assign({},e,{globalFilter:f,sortBy:i}):Object.assign({},e,{globalFilter:f})),[d,f,i]),D=(0,a.useMemo)((()=>(0,A.tZ)(m.$j,{className:"h-screen"})),[]),R=(0,a.useMemo)((()=>(0,A.tZ)(V.Gc,{date:C,onChange:u})),[C,u]),M=(0,a.useMemo)((()=>{const e=(0,p.e$)(v);return(0,A.tZ)(m.rJ,{header:`${v}`||"Something went wrong",message:e})}),[v]);return(0,A.tZ)(m.iA,{columns:w,data:k,emotionBaseTableCSS:Z,isFetching:s,isError:l,spinner:D,onStateChange:c,renderRowSubComponent:Ne,getRowProps:Oe,customHeaderRow:R,errorComponent:M,initialState:x,multiSortEnabled:!0,autoResetSortBy:!1,useControlledState:S,showHeader:h,headerPortalRef:g,doubleHeader:b,splitBody:y,topBorder:!0})})),Ie=()=>{const e=(0,o.I0)(),t=w(C),{invalidateDates:r}=v(),n=(0,a.useCallback)((a=>{if(e(H(a)),a){e(E(new Date));const a=t.map((e=>new Date(e)));r(a)}}),[e,t,r]);return(0,A.tZ)(ie,{onCheckChange:n})};r(41874);var _e=r(87517),Xe=r(20609);const He=()=>{const e=(0,o.I0)(),t=w(C),r=w(j),n=w(B),{invalidateDates:s}=v(),l=(0,a.useMemo)((()=>new Date(n)),[n]);return(0,u.Yz)((()=>{if(!r)return;const a=t.map((e=>new Date(e))).filter(_e.Z);e(E(new Date)),s(a)}),Xe.vc.dashboardPollingTimer),(0,A.tZ)(se,{time:l})},Fe=()=>{const[e,t]=(0,h.XN)({type:"replace"}),r=(0,a.useRef)(!0);(0,a.useEffect)((()=>{r.current=!1}),[]);const o=(0,a.useCallback)((e=>{r.current||t((t=>Object.assign({},t,{searchTerm:e})))}),[t]);return(0,A.tZ)(ee,{searchTerm:e.searchTerm||"",onTermChange:o})};var Le=r(54546),Ae=r(31434),Ue=r(23920);const ze=Ue.fC,$e=Ue.ck,We=(0,a.memo)((e=>(0,A.BX)(ze,Object.assign({className:"flex","aria-label":"Dashboard mode"},e,{children:[(0,A.tZ)($e,{className:"px-[0.625rem] border-y border-y-border-primary rounded-l-lg border-l border-l-border-primary text-border-primary flex items-center justify-center cursor-pointer hover:text-primary rdx-state-on:text-primary focus-visible:shadow-[0_0_0_2px_rgba(98_126_251_0.75)]",value:d.Pk.Rows,"aria-label":"Mode rows",children:(0,A.tZ)(Se.P.ModeRows24x24,{})}),(0,A.tZ)($e,{className:"px-[0.625rem] border-y border-y-border-primary text-border-primary flex items-center justify-center cursor-pointer hover:text-primary rdx-state-on:text-primary focus-visible:shadow-[0_0_0_2px_rgba(98_126_251_0.75)]",value:d.Pk.RowsLine,"aria-label":"Mode rows line",children:(0,A.tZ)(Se.P.ModeRowsLine24x24,{})}),(0,A.tZ)($e,{className:"px-[0.625rem] border-y border-y-border-primary rounded-r-lg border-r border-r-border-primary text-border-primary flex items-center justify-center cursor-pointer hover:text-primary rdx-state-on:text-primary focus-visible:shadow-[0_0_0_2px_rgba(98_126_251_0.75)]",value:d.Pk.Columns,"aria-label":"Mode columns",children:(0,A.tZ)(Se.P.ModeColumns24x24,{})})]})))),Ye=()=>{const e=(0,o.I0)(),[,t]=(0,h.XN)(),[r,{data:n}]=(0,c.mL)(),s=w(D);(0,a.useEffect)((()=>{if(n||r(void 0,!0),n&&!s){const{days:t,columns:r}=n,a=((e,t)=>{let r;return r=1===e&&1===t?d.Pk.Rows:1===e&&2===t?d.Pk.RowsLine:2===e&&2===t?d.Pk.Columns:d.Pk.RowsLine,r})(t,r);e(F(a))}}),[n,e,s,r]);const l=(0,a.useCallback)((e=>{t((t=>(0,L.ZP)(t,(r=>{const a=Object.entries(t.dates||{}).length>1,o="rows"===e||"rows-line"===e;if(a&&o){const e=Object.entries(t.dates||{}).map((([,e])=>new Date(e))),a=(0,Le.Z)(e);if(!(0,_e.Z)(a))return;r.dates={[(0,P.nanoid)(4)]:(0,p.wy)(a)}}if(Object.entries(t.dates||{}).length&&!o){const e=Object.entries(t.dates||{}).map((([,e])=>new Date(e))),a=(0,Le.Z)(e);if(!(0,_e.Z)(a))return;r.dates={[(0,P.nanoid)(4)]:(0,p.wy)((0,Ae.Z)(a,-1)),[(0,P.nanoid)(4)]:(0,p.wy)(a)}}r.mode=e}))))}),[t]);return(0,A.tZ)(We,{type:"single",onValueChange:l,value:s||void 0})},Qe=()=>{const[,e]=(0,h.XN)(),t=w(D),{todayDate:r}=c.Ul.endpoints.getDashboard.useQueryState(void 0,{selectFromResult:({data:e})=>({todayDate:(null==e?void 0:e.date)||(0,p.wy)(new Date)})}),o=(0,a.useCallback)((()=>{if(t===d.Pk.Columns){const t={},a=(0,Ae.Z)(new Date(r),-1);t[(0,P.nanoid)(4)]=(0,p.wy)(a),t[(0,P.nanoid)(4)]=r,e((e=>(0,L.ZP)(e,(e=>{e.dates=t}))))}else e((e=>(0,L.ZP)(e,(e=>{e.dates={}}))))}),[t,e,r]);return(0,A.tZ)(le,{onClick:o})};var Ge=r(56712);const qe=(0,a.memo)((({id:e,date:t,shouldOverrideSort:r,shouldShowHeader:n,headerRef:s,onColumnSortChange:l})=>{const i=(0,o.I0)(),[,u]=(0,h.XN)(),g=w(S),{mode:b,sortBy:y}=$(),{prefetchForDate:f}=v(),{data:x,isFetching:Z,isError:k,error:C}=(0,c.k3)(t?{date:t}:Ge.skipToken),{data:D,isFetching:R,isError:M,error:j}=(0,c.oj)();(0,a.useEffect)((()=>{t&&f(new Date(t)),null!=D&&D.date&&f(new Date(D.date))}),[t,f,D]);const B=t?x:D,T=t?Z:R,O=t?k:M,N=t||(null==B?void 0:B.date)||(null==D?void 0:D.date),E=(null==C?void 0:C.status)||(null==j?void 0:j.status),I=C||j?(0,p.e$)(E):"",X=(0,a.useCallback)((t=>{const r=e||(0,P.nanoid)(4),a=(0,p.wy)(t);e?(i(_({id:r,date:a})),u((e=>(0,L.ZP)(e,(e=>{e.dates&&e.dates[r]&&(e.dates[r]=a)}))))):(i(_({id:r,date:a})),u((e=>(0,L.ZP)(e,(e=>Object.assign({},e,{dates:Object.assign({},e.dates,{[r]:a})}))))))}),[i,e,u]);return x||D||!T?!O||x||D?(0,A.tZ)(Ee,{data:B,todayData:D,date:N,mode:b,isFetching:T,isError:O,sortBy:y,onStateChange:l,onTableDateChange:X,shouldOverrideSort:r,shouldShowHeader:n,headerRef:s,doubleHeader:b===d.Pk.RowsLine,splitBody:b===d.Pk.RowsLine,globalSearch:g,errorStatus:E}):(0,A.tZ)(m.rJ,{header:"Something went wrong",message:I}):(0,A.tZ)(m.$j,{className:"h-screen"})}));const Je=(0,be.Z)("div",{target:"ez15t851"})({name:"1iiuvx1",styles:"position:sticky;top:0;z-index:50;padding-right:12px"}),Ke=(0,be.Z)("div",{target:"ez15t850"})((({isModeColumns:e})=>({paddingRight:e?"12px":0})),""),Ve=()=>{const e=(0,a.useRef)(null),t=(()=>{const e=(0,a.useContext)(W);if(!e)throw new Error("Use Page Header should be used inside header provider");return e.header})(),{dates:r,mode:o,onColumnSortChange:n}=$(),s=o===d.Pk.Columns,l=(0,a.useMemo)((()=>Object.keys(r).length),[r]),i=(0,a.useMemo)((()=>s?e:t),[t,s]);return l?(0,A.BX)(A.HY,{children:[s&&(0,A.tZ)(Je,{ref:e}),(0,A.tZ)(Ke,{isModeColumns:s,children:Object.entries(r).map((([e,t],r)=>{const a=0===r;return(0,A.tZ)(qe,{id:e,date:t,shouldOverrideSort:!a,shouldShowHeader:a,headerRef:i,onColumnSortChange:a?n:void 0},e)}))})]}):(0,A.tZ)(Ke,{isModeColumns:s,children:(0,A.tZ)(qe,{shouldOverrideSort:!1,shouldShowHeader:!0,headerRef:i,onColumnSortChange:n})})};var et=r(62477);const tt=(0,be.Z)(et.fC,{target:"e1kiky4o4"})({name:"147vaqs",styles:"overflow:hidden;height:calc(100vh - 110px)"}),rt=(0,be.Z)(et.l_,{target:"e1kiky4o3"})({name:"1nxlove",styles:"width:100%;height:100%;border-radius:inherit"}),at=(0,be.Z)(et.LW,{target:"e1kiky4o2"})({display:"flex",userSelect:"none",touchAction:"none",backgroundColor:"rgb(228, 228, 228)",borderRadius:"100px",transition:"background 160ms ease-out",'&[data-orientation="vertical"]':{width:8},'&[data-orientation="horizontal"]':{flexDirection:"column",height:8}},""),ot=(0,be.Z)(et.bU,{target:"e1kiky4o1"})({name:"rz45j",styles:'flex:1;background-color:rgb(193, 196, 203);border-radius:100px;position:relative;&::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;height:100%;min-width:44px;min-height:44px;}'}),nt=(0,be.Z)(et.Ns,{target:"e1kiky4o0"})({name:"1qsuvl4",styles:"background:transparent"}),st=({children:e})=>(0,A.BX)(tt,{children:[(0,A.tZ)(rt,{children:e}),(0,A.tZ)(at,{forceMount:!0,orientation:"vertical",children:(0,A.tZ)(ot,{})}),(0,A.tZ)(at,{orientation:"horizontal",children:(0,A.tZ)(ot,{})}),(0,A.tZ)(nt,{})]}),lt=()=>{const[e,t]=w(k),r=w(R),o=w(M),[,n]=(0,h.XN)(),{todayDate:s}=c.Ul.endpoints.getDashboard.useQueryState(void 0,{selectFromResult:({data:e})=>({todayDate:null==e?void 0:e.date})});return(0,a.useEffect)((()=>{const r=!!Object.keys(e).length,a=!!Object.keys(t).length;if(r&&a)return;if(!s)return;const o={},l=(0,Ae.Z)(new Date(s),-1);o[(0,P.nanoid)(4)]=(0,p.wy)(l),o[(0,P.nanoid)(4)]=s,n((e=>(0,L.ZP)(e,(e=>{e.dates=o}))))}),[]),(0,A.BX)(A.HY,{children:[(0,A.tZ)(z,{mode:"columns",columnId:"column-1",dates:e,sortBy:r,children:(0,A.tZ)(st,{children:(0,A.tZ)(Ve,{})})}),(0,A.tZ)(z,{mode:"columns",columnId:"column-2",dates:t,sortBy:o,children:(0,A.tZ)(st,{children:(0,A.tZ)(Ve,{})})})]})},it=()=>{const e=w(R),t=w(Z);return(0,A.tZ)(z,{mode:"rows",columnId:"column-1",dates:t,sortBy:e,children:(0,A.tZ)(Ve,{})})},dt=()=>{const e=w(R),t=w(Z);return(0,A.tZ)(z,{mode:"rows-line",columnId:"column-1",dates:t,sortBy:e,children:(0,A.tZ)(Ve,{})})},ct=()=>{const e=w(D),t=e===d.Pk.Rows,r=e===d.Pk.RowsLine,a=e===d.Pk.Columns;return(0,A.BX)(A.HY,{children:[t&&(0,A.tZ)(it,{}),r&&(0,A.tZ)(dt,{}),a&&(0,A.tZ)(lt,{})]})},ut=()=>{(0,u.jr)("Dashboard - Bublik");const e=(0,o.I0)(),t=w(D),[r]=(0,h.XN)(),{scrollY:g}=(0,n.M)(),p=(0,s.H)(g,[0,88],["0px","-84px"]),b=(0,a.useRef)(null),y=t===d.Pk.Columns;(0,a.useEffect)((()=>{var t;e(I({mode:(t=r).mode,searchTerm:t.searchTerm,dates:t.dates,columnOneSorting:t.columnOneSorting,columnTwoSorting:t.columnTwoSorting,startDate:t.startDate,endDate:t.endDate}))}),[e,r]);const{isLoading:f}=c.Ul.endpoints.getDashboard.useQueryState(),{isLoading:v}=c.Ul.endpoints.getDashboardMode.useQueryState(),x=f||v;return(0,A.BX)("div",{className:"px-2 pb-4",children:[(0,A.BX)(l.E.div,{className:"sticky top-0 z-50 flex flex-col pt-2 bg-bg-body",style:{y:p},children:[(0,A.tZ)(K,{}),(0,A.tZ)("div",{className:"flex gap-1 overflow-auto",ref:b})]}),(0,A.tZ)(Y,{header:b,children:x?(0,A.tZ)(m.$j,{className:"h-screen"}):(0,A.tZ)(l.E.main,{className:(0,i.Z)("grid w-full h-full gap-x-1",y?"grid-cols-2":"grid-cols-1"),style:{y:p},children:(0,A.tZ)(ct,{})})}),!y&&(0,A.tZ)(ne,{})]})}}}]);