(self.webpackChunk=self.webpackChunk||[]).push([[586],{5586:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Me});var s=r(52983),a=r(68109),n=r(56712),l=r(32131),i=r(13657),o=r(25673),d=r(8333),c=(r(90142),r(95197));let u;!function(e){e.Tree="TREE",e.Total="TOTAL",e.Run="RUN",e.PassedExpected="PASSED_EXPECTED",e.FailedExpected="FAILED_EXPECTED",e.PassedUnexpected="PASSED_UNEXPECTED",e.FailedUnexpected="FAILED_UNEXPECTED",e.Aborted="ABORTED",e.NotRun="NOT_RUN",e.SkippedExpected="SKIPPED_EXPECTED",e.SkippedUnexpected="SKIPPED_UNEXPECTED"}(u||(u={}));r(75751),r(67859);var p=r(40817);r(3107);const m=(e,t,r)=>!r.length||(e=>t=>{var r;return!e.some((r=t.id,e=>r.startsWith(e.rowId)))||e.map((e=>e.columnId)).some((e=>!!t.getValue(e)))})(r)(e);r(14209);var h=r(38125);const x=e=>{var t;return!!e.subRows.length||(null==(t=e.original)?void 0:t.type)===h.KD.Test},b=(e,t)=>t.startsWith(e),g=e=>e!==h.KD.Test,Z=(e,t)=>r=>r.columnId===t&&r.rowId===e,f=(e,t)=>r=>[...r,{rowId:e,columnId:t}],y=(e,t)=>r=>{const s={};return t.forEach((t=>s[t]=e)),!e&&"0"in s&&delete s[0],Object.assign({},r,s)},v=(e,t)=>r=>Object.assign({},r,{[e]:t});r(12459),r(51811);const w=[u.PassedUnexpected,u.FailedUnexpected,u.SkippedUnexpected],F=(I=w,e=>I.includes(e));var I;const C=e=>({id:e.columnId,desc:!0}),Q=(e,t)=>{const r={};e.forEach((e=>{const s=t[e],a={rowId:e,requests:{}};Object.entries(s).forEach((([e,t])=>{F(e)&&t&&(a.requests[e]=(e=>{switch(e){case u.PassedUnexpected:return{results:[h.Xm.Passed],resultProperties:[h.Zu.Unexpected]};case u.FailedUnexpected:return{results:[h.Xm.Failed,h.Xm.Killed,h.Xm.Cored],resultProperties:[h.Zu.Unexpected]};case u.SkippedUnexpected:return{results:[h.Xm.Skipped],resultProperties:[h.Zu.Unexpected]};default:return{results:[],resultProperties:[]}}})(e))})),r[e]=a})),Object.values(r).forEach((e=>{0===Object.keys(e.requests||{}).length&&delete r[e.rowId]}));const s=Object.keys(r);return[r,s]},N=e=>{const t={};return e.getAllCells().forEach((r=>{t[r.column.id]=e.getValue(r.column.id)})),t},B=e=>t=>{var r,s;return b(e.id,t.id)&&(s=null==(r=t.original)?void 0:r.type,!g(s))},U=e=>{const t={};return e.forEach((r=>{const s=e.filter((a=r,e=>{var t;return b(a.id,e.id)&&g(null==(t=e.original)?void 0:t.type)})).map((e=>e.id));var a;const n=e.filter(B(r)).map((e=>e.id)),l=[...s,...n];t[r.id]={allIds:l,packageIds:s,testIds:n}})),t};var E=r(50358),k=r(18294),S=r(98926);const X=["nodeName","nodeType","isExpanded","depth"],R=e=>({display:"flex",maxWidth:"100%",paddingLeft:1*e+"rem"}),D=(0,s.forwardRef)(((e,t)=>{let{nodeName:r,nodeType:s,isExpanded:a,depth:n}=e,l=(0,E.Z)(e,X);const o=(e=>{switch(e){case h.KD.Package:case h.KD.Session:case h.KD.Suite:return k.P.Folder16x16;case h.KD.Test:default:return k.P.Test16x16}})(s);return(0,S.BX)("button",Object.assign({className:"flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap hover:text-primary",style:R(n)},l,{ref:t,children:[(0,S.tZ)(k.P.ArrowTreeDown16x16,{className:(0,i.m6)("grid place-items-center",a&&"text-primary",a?"rotate-360":"-rotate-90")}),(0,S.tZ)(o,{className:"grid place-items-center"}),(0,S.tZ)("span",{className:"truncate",children:r})]}))})),j=(0,s.createContext)(null),L=({value:e,children:t})=>(0,S.tZ)(j.Provider,{value:e,children:t}),V=()=>{const e=(0,s.useContext)(j);if(!e)throw new Error("No rows context ;(");return e};var P=r(36644);const M=["children"];const O=(0,P.Z)(i.am,{target:"e1ppv1kk0"})({name:"xs9f9w",styles:"& .tippy-arrow{width:10px;height:6px;background-color:#ffffff;clip-path:polygon(0 0, 50% 80%, 100% 0);box-shadow:var(--shadow-popover);}"}),T=e=>{let{children:t}=e,r=(0,E.Z)(e,M);return(0,S.tZ)(O,{content:(0,S.BX)("button",Object.assign({className:"flex items-center gap-[22px] py-1.5 px-2.5 bg-white rounded shadow-popover hover:text-primary"},r,{children:[(0,S.tZ)("span",{className:"text-[0.625rem] font-semibold leading-[0.875rem]",children:"Open"}),(0,S.tZ)("span",{className:"text-[0.625rem] font-semibold leading-[0.875rem]",children:"Ctrl+click"})]})),animation:"shift-toward",interactive:!0,offset:[-25,9],arrow:!0,children:t})},W=({variant:e,columnId:t,results:r,resultProperties:s=[],row:n,table:l,value:o})=>{var c,u;const p=(0,a.I0)(),m=(0,d.D1)(d.HC),{rowsIds:x,rowsValues:b}=V(),{id:g}=n,{getState:w,setGlobalFilter:F,setExpanded:I}=l,C=(null==(c=n.original)?void 0:c.type)===h.KD.Test,{allIds:Q,packageIds:N,testIds:B}=x[g],U=w().globalFilter,E=U.some(Z(g,t)),X=(e=>t=>t.filter((t=>t.rowId===e)).length>1)(g)(U),R=t in((null==(u=m[g])?void 0:u.requests)||{}),D=R||E,j=(e=>(t={})=>{const r=Object.assign({},t);return delete r[e],r})(t),L=((e,t)=>(r={})=>Object.assign({},r,{[e]:t}))(t,{results:r,resultProperties:s}),P=()=>{var e;R?(()=>{var e,t;const r=Object.keys((null==(e=m[g])?void 0:e.requests)||{}).length;R&&1===r&&I(v(g,!1)),p((0,d.Z6)({rowId:g,requests:j(null==(t=m[g])?void 0:t.requests)}))})():(I(v(g,!0)),p((0,d.Z6)({rowId:g,requests:L(null==(e=m[g])?void 0:e.requests)})))},M=()=>{if(!E)return I(y(!0,N)),void F(f(g,t)(U));X||(p((0,d.M5)(B)),I(y(!1,Q))),F(((e,t)=>r=>r.filter((r=>!Z(e,t)(r))))(g,t)(U))},O=(e=!1)=>r=>{if(!r.ctrlKey&&!e)return M();const s=B.filter((e=>b[e][t])),a=s.every((e=>{var r;return t in((null==(r=m[e])?void 0:r.requests)||{})}));if(a)return(e=>{const t=e.map((e=>{var t;const r=(null==(t=m[e])?void 0:t.requests)||{};return{rowId:e,requests:j(r)}})),r=t.filter((e=>0===Object.keys(e.requests||{}).length)).map((e=>e.rowId));p((0,d.ab)(t)),I(y(!1,r))})(s);(()=>{E||F(f(g,t)(U));const e=B.filter((e=>b[e][t])),r=e.map((e=>{var t;const r=(null==(t=m[e])?void 0:t.requests)||{};return{rowId:e,requests:L(r)}})),s=[...N,...e];p((0,d.ab)(r)),I(y(!0,s))})()},W=e=>{e.preventDefault(),C?P():O(!1)(e)};return"0"===g&&o?(0,S.BX)("div",{className:"flex items-center gap-1",children:[(0,S.tZ)(i.Ct,{variant:e,isSelected:D,onClick:W,onContextMenu:W,children:o}),(0,S.tZ)(T,{onClick:O(!0),children:(0,S.tZ)(k.P.InfoCircleQuestionMark16x16,{className:"text-primary","aria-label":"Expand results"})})]}):o?(0,S.tZ)(i.Ct,{variant:e,isSelected:D,onClick:W,onContextMenu:W,children:o}):(0,S.tZ)(S.HY,{children:0})},G=["label"],H=e=>{let{label:t}=e,r=(0,E.Z)(e,G);return(0,S.tZ)("button",Object.assign({className:"text-[0.6875rem] font-semibold leading-[0.875rem] bg-primary-wash p-[0.375rem] rounded hover:text-primary"},r,{children:t}))},Y=({table:e})=>{const t=(0,a.I0)(),{rowsIds:r,rowsValues:s}=V(),n=r[0].packageIds,l=r[0].testIds,i=e.getPreFilteredRowModel(),o=N(i.rowsById[0]),c=(u=o,Object.entries(u).filter((([e,t])=>w.includes(e)&&t)).map((([e])=>({columnId:e,rowId:"0"}))));var u;const p=c.map(C);return(0,S.BX)("div",{className:"flex items-center justify-between flex-grow",children:["Tree",(0,S.BX)("div",{className:"flex gap-4 pr-4",children:[(0,S.tZ)(H,{label:"Preview NOK",onClick:()=>{e.setGlobalFilter(c),e.setExpanded(y(!0,n)),e.setExpanded(y(!1,l)),t((0,d.VG)()),e.setSorting(p)}}),(0,S.tZ)(H,{label:"Open NOK",onClick:()=>{const[r,a]=Q(l,s);e.setGlobalFilter(c),e.setExpanded(y(!0,n)),e.setExpanded(y(!0,a)),t((0,d.T$)(r))}}),(0,S.tZ)(H,{label:"Reset",onClick:()=>{e.setGlobalFilter([]),e.setExpanded({0:!0}),e.setSorting([]),t((0,d.VG)())}})]})]})},_=(0,S.tZ)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,S.tZ)("path",{d:"M3 0L5.59808 3H0.401924L3 0Z",fill:"#454c58"})}),A=(0,S.tZ)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,S.tZ)("path",{d:"M3 8L5.59808 5H0.401924L3 8Z",fill:"#454c58"})}),J=({sortDescription:e})=>"asc"===e?_:"desc"===e?A:(0,S.tZ)("div",{style:{opacity:e?1:0},children:_}),z=({instance:e})=>{const t=(0,s.useRef)(null),{isSticky:r}=(0,l._z)(t);return(0,S.tZ)("thead",{ref:t,className:(0,i.m6)("row-border",r&&"row-border-visible"),children:e.getHeaderGroups().map((e=>(0,S.tZ)("tr",{children:e.headers.map((e=>(0,S.tZ)("th",{colSpan:e.colSpan,children:e.isPlaceholder?null:(0,S.BX)("div",Object.assign({},e.column.getCanSort()?{onClick:e.column.getToggleSortingHandler(),className:"flex gap-1 items-center cursor-pointer select-none"}:{},{children:[(0,p.flexRender)(e.column.columnDef.header,e.getContext()),e.column.getCanSort()&&(0,S.tZ)(J,{sortDescription:e.column.getIsSorted()})]}))},e.id)))},e.id)))})},K=e=>e.original?(0,S.tZ)(Ve,{row:e}):null,q=({row:e})=>{var t,r;const a=(null==(t=e.original)?void 0:t.type)===h.KD.Test&&e.getIsExpanded(),n=(0,s.useRef)(null),{isSticky:o}=(0,l._z)(n,{offset:-34});return(0,S.BX)(s.Fragment,{children:[(0,S.tZ)("tr",{className:(0,i.m6)(a&&"row-test-expanded",o&&"row-border-visible"),ref:n,children:e.getVisibleCells().map((e=>(0,S.tZ)("td",{children:(0,p.flexRender)(e.column.columnDef.cell,e.getContext())},e.id)))}),e.getIsExpanded()&&(null==(r=e.original)?void 0:r.type)===h.KD.Test?(0,S.tZ)("tr",{role:"row",children:(0,S.tZ)("td",{colSpan:11,children:K(e)})}):null]})},$={expected:"#579d80",unexpected:"#f55353",gray:"#919cad"},ee=({header:e,iconName:t,iconColor:r})=>{if(t&&r){const s=$[r],a=k.P[t];return(0,S.BX)("div",{className:"flex items-center gap-2",children:[e,(0,S.tZ)(a,{className:"grid place-items-center",style:{color:s}})]})}return(0,S.tZ)(S.HY,{children:e})},te=[{id:u.Total,accessor:e=>e.tests_run.total+e.tests_not_run.total,header:"Total",variant:i.FS.PrimaryActive,resultProperties:[h.Zu.Expected,h.Zu.Unexpected],results:[h.Xm.Passed,h.Xm.Failed,h.Xm.Killed,h.Xm.Cored,h.Xm.Incomplete,h.Xm.Skipped,h.Xm.Faked]},{id:u.Run,accessor:e=>e.tests_run.total,header:"Run",variant:i.FS.PrimaryActive,resultProperties:[h.Zu.Expected,h.Zu.Unexpected],results:[h.Xm.Passed,h.Xm.Failed,h.Xm.Killed,h.Xm.Cored,h.Xm.Incomplete]},{id:u.PassedExpected,accessor:e=>e.tests_run.passed,header:"Passed",variant:i.FS.ExpectedActive,resultProperties:[h.Zu.Expected],results:[h.Xm.Passed],iconName:"CircleOk16x16",iconColor:"expected"},{id:u.FailedExpected,accessor:e=>e.tests_run.failed,header:"Failed",variant:i.FS.ExpectedActive,resultProperties:[h.Zu.Expected],results:[h.Xm.Failed,h.Xm.Killed,h.Xm.Cored],iconName:"CircleOk16x16",iconColor:"expected"},{id:u.PassedUnexpected,accessor:e=>e.tests_run.passed_unexpected,header:"Passed",variant:i.FS.UnexpectedActive,resultProperties:[h.Zu.Unexpected],results:[h.Xm.Passed],iconName:"CircleInfo16x16",iconColor:"unexpected"},{id:u.FailedUnexpected,accessor:e=>e.tests_run.failed_unexpected,header:"Failed",variant:i.FS.UnexpectedActive,resultProperties:[h.Zu.Unexpected],results:[h.Xm.Failed,h.Xm.Killed,h.Xm.Cored],iconName:"CircleInfo16x16",iconColor:"unexpected"},{id:u.Aborted,accessor:e=>e.tests_run.aborted,header:"Aborted",variant:i.FS.UnexpectedActive,results:[h.Xm.Incomplete],iconName:"TriangleWarning16x16",iconColor:"gray"},{id:u.NotRun,accessor:e=>e.tests_not_run.total,header:"Not run",variant:i.FS.PrimaryActive,results:[h.Xm.Skipped,h.Xm.Faked]},{id:u.SkippedExpected,accessor:e=>e.tests_not_run.skipped,header:"Skipped",variant:i.FS.ExpectedActive,results:[h.Xm.Skipped],resultProperties:[h.Zu.Expected],iconName:"CircleOk16x16",iconColor:"expected"},{id:u.SkippedUnexpected,accessor:e=>e.tests_not_run.skipped_unexpected,header:"Skipped",variant:i.FS.UnexpectedActive,results:[h.Xm.Skipped],resultProperties:[h.Zu.Unexpected],iconName:"CircleInfo16x16",iconColor:"unexpected"}].map((e=>({accessorFn:e.accessor,id:e.id,header:()=>(0,S.tZ)(ee,{header:e.header,iconName:e.iconName,iconColor:e.iconColor}),cell:({getValue:t,row:r,table:s})=>(0,S.tZ)(W,{variant:e.variant,columnId:e.id,results:e.results,resultProperties:e.resultProperties,table:s,row:r,value:t()})}))),re={id:u.Tree,accessorFn:e=>({name:e.name,type:e.type}),header:({table:e})=>(0,S.tZ)(Y,{table:e}),cell:({getValue:e,row:t})=>{const{name:r,type:s}=e();return(0,S.tZ)(D,{nodeName:r,nodeType:s,onClick:()=>t.toggleExpanded(),isExpanded:t.getIsExpanded(),depth:t.depth})},enableSorting:!1};var se=r(91451),ae=r.n(se),ne=r(2755),le=r.n(ne),ie=r(52747),oe=r.n(ie),de=r(36053),ce=r.n(de),ue=r(54445),pe=r.n(ue),me=r(65237),he=r.n(me),xe=r(85125),be=r.n(xe),ge={};ge.styleTagTransform=he(),ge.setAttributes=ce(),ge.insert=oe().bind(null,"head"),ge.domAPI=le(),ge.insertStyleElement=pe();ae()(be(),ge);be()&&be().locals&&be().locals;const Ze=(0,s.memo)((({data:e})=>{const[t,r]=(0,s.useState)({0:!0}),[a,n]=(0,s.useState)([]),[l,i]=(0,s.useState)([]),o=(0,s.useMemo)((()=>[re,...te]),[]),d=(0,p.useReactTable)({data:e,columns:o,state:{expanded:t,globalFilter:a,sorting:l},getCoreRowModel:(0,p.getCoreRowModel)(),getExpandedRowModel:(0,p.getExpandedRowModel)(),getSubRows:e=>e.children,onExpandedChange:r,autoResetExpanded:!1,getRowCanExpand:x,getFilteredRowModel:(0,p.getFilteredRowModel)(),getColumnCanGlobalFilter:()=>!0,onGlobalFilterChange:n,globalFilterFn:m,filterFromLeafRows:!0,getSortedRowModel:(0,p.getSortedRowModel)(),onSortingChange:i,debugTable:!0}),c=(0,s.useMemo)((()=>{const e=d.getPreFilteredRowModel().rowsById,t=d.getPreFilteredRowModel().flatRows;var r;return{rowsValues:(r=e,Object.entries(r).reduce(((e,[t,r])=>Object.assign({},e,{[t]:N(r)})),{})),rowsIds:U(t)}}),[d]);return(0,S.tZ)(L,{value:c,children:(0,S.tZ)("div",{className:"bg-white rounded run-table","data-testid":"run-table",children:(0,S.BX)("table",{children:[(0,S.tZ)(z,{instance:d}),(0,S.tZ)("tbody",{children:d.getRowModel().rows.map((e=>(0,S.tZ)(q,{row:e},e.id)))})]})})})}));r(30910),r(84002);var fe=r(45502),ye=r(36193);const ve=e=>{const{runId:t,resultId:r}=e,s=(0,o.F7)("getLogUrlByResultId"),a=(0,o.F7)("getHistoryLinkDetauls");return(0,S.BX)(fe.rU,{className:"flex items-center w-full gap-1",onMouseEnter:()=>{s(r),a(r)},to:ye._j.log({runId:t,focusId:r}),children:[(0,S.tZ)(k.P.EscapeRight20x20,{className:"grid place-items-center"}),"Log"]})};var we=r(2524),Fe=r(24008),Ie=r(54231);const Ce=(0,Ie.wy)((0,we.Z)(new Date,-1)),Qe=(0,Ie.wy)((0,we.Z)(new Date,-3)),Ne=(0,Ie.wy)(new Date),Be={mode:"linear",page:"1",results:Fe.CH.join(";"),verdictLookup:Fe.MM};r(81929);const Ue=({label:e,search:t,openForm:r})=>{const s={pathname:"/history",search:r?`${t}&fromRun=true`:t};return(0,S.BX)(fe.rU,{className:"flex items-center justify-between gap-4 px-4 py-2 transition-all rounded text-text-secondary hover:text-primary hover:bg-primary-wash focus:bg-primary-wash focus:text-primary group",to:s,target:"_blank",children:[(0,S.tZ)("span",{className:"text-[0.75rem] font-semibold",children:e}),(0,S.tZ)(k.P.ArrowShortRight24x24,{className:"text-text-menu group-hover:text-primary group-focus:text-primary"})]})},Ee=({prefilled:e,byTestName:t,byIteration:r,byIterationWithImportant:s,byIterationWithAllTags:a})=>(0,S.BX)("div",{className:"flex flex-col gap-2 p-3 bg-white rounded-xl shadow-popover",children:[(0,S.tZ)("div",{className:"px-4 py-1 text-text-menu",children:"Prefilled"}),(0,S.tZ)(Ue,{label:"By all possible parameters",search:e,openForm:!0}),(0,S.tZ)("div",{className:"px-4 py-1 text-text-menu",children:"Direct"}),(0,S.tZ)(Ue,{label:"By test name",search:t}),(0,S.tZ)(Ue,{label:"By iteration",search:r}),(0,S.tZ)(Ue,{label:"By iteration and important tags",search:s}),(0,S.tZ)(Ue,{label:"By iteration and all tags",search:a})]}),ke=({data:e})=>{const{runId:t}=(0,c.UO)(),{data:r}=o.Ul.endpoints.getRunDetails.useQueryState(null!=t?t:n.skipToken),a=(0,s.useMemo)((()=>{if(!r)return;const{relevant_tags:t,important_tags:s}=r,a=s,n=t,l=[...a,...n],i=((e,t)=>{const r=(0,Ie.eM)(e.has_error);return Object.assign({},Be,{testName:e.name,parameters:e.parameters.join(";"),startDate:Qe,finishDate:Ne,runProperties:Fe.hf.join(";"),resultProperties:r,verdict:e.obtained_result.verdict.join(";"),runData:t.join(";")})})(e,l),o=(e=>Object.assign({},Be,{testName:e.name,startDate:Ce,finishDate:Ne,runProperties:h.i4.NotCompromised}))(e),d=(e=>Object.assign({},Be,{testName:e.name,startDate:Ce,finishDate:Ne,runProperties:h.i4.NotCompromised,parameters:e.parameters.join(";")}))(e),c=((e,t)=>Object.assign({},Be,{testName:e.name,parameters:e.parameters.join(";"),startDate:Ce,finishDate:Ne,runProperties:h.i4.NotCompromised,runData:t.join(";")}))(e,a),u=((e,t)=>{var r;return Object.assign({},Be,{testName:e.name,parameters:null==(r=e.parameters)?void 0:r.join(";"),startDate:Ce,finishDate:Ne,runProperties:h.i4.NotCompromised,runData:t.join(";")})})(e,l);return{prefilled:(0,ye.X6)(i),byTestName:(0,ye.X6)(o),byIteration:(0,ye.X6)(d),byIterationWithImportant:(0,ye.X6)(c),byIterationWithAllTags:(0,ye.X6)(u)}}),[e,r]);if(!a)return null;const l={pathname:"/history",search:a.prefilled};return(0,S.tZ)(i.am,{content:(0,S.tZ)(Ee,{prefilled:a.prefilled,byTestName:a.byTestName,byIteration:a.byIteration,byIterationWithImportant:a.byIterationWithImportant,byIterationWithAllTags:a.byIterationWithAllTags}),placement:"bottom-start",animation:"shift-toward",interactive:!0,children:(0,S.BX)(fe.rU,{className:"flex items-center w-full gap-1",to:l,state:{fromRun:!0},children:[(0,S.tZ)(k.P.EscapeRight20x20,{className:"grid place-items-center"}),"History"]})})};r(94641);const Se=({runId:e,resultId:t})=>{const r=(0,o.F7)("getCharts"),s=(0,o.F7)("getResultInfo");return(0,S.BX)(fe.rU,{className:"flex items-center gap-1",to:ye._j.measurements({runId:e,resultId:t}),onMouseEnter:()=>{r(t.toString()),s(t.toString())},children:[(0,S.tZ)(k.P.EscapeRight20x20,{className:"grid place-items-center"}),"Measure"]})},Xe=({runId:e,resultId:t,data:r})=>{const{has_measurements:s}=r;return(0,S.tZ)("div",{className:"flex flex-col justify-start gap-3 text-primary text-[0.6875rem] font-semibold leading-[0.875rem]",children:(0,S.BX)("ul",{className:"flex flex-col items-start gap-3",children:[(0,S.tZ)("li",{className:"pl-2",children:(0,S.tZ)(ve,{runId:e,resultId:t})}),(0,S.tZ)("li",{className:"pl-2",children:(0,S.tZ)(ke,{data:r})}),s&&(0,S.tZ)("li",{className:"pl-2",children:(0,S.tZ)(Se,{runId:e,resultId:t})})]})})},Re=({rowCount:e=1})=>(0,S.tZ)("div",{className:"flex flex-col gap-1 mt-1 mb-1",children:Array(e).fill(1).map(((e,t)=>(0,S.tZ)("div",{className:"h-[110px] rounded bg-gray-100 animate-pulse"},t)))}),De={header:{position:"sticky",top:"66px"},headerRow:{height:"38px",borderRadius:"2px",backgroundColor:"#f7faff",padding:"0 12px"},bodyRow:{padding:"12px 0",backgroundColor:"#f7faff",borderRadius:"2px"}},je=(0,s.memo)((({runId:e,depth:t,skeletonCount:r,isError:a,isFetching:n,data:l=[]})=>{const o=(0,s.useMemo)((()=>((e,t)=>[{Header:"Actions",id:"links",accessor:e=>e,Cell:({value:t})=>(0,S.tZ)(Xe,{runId:e,resultId:t.result_id,data:t}),maxWidth:100,columnCSS:{display:"flex",paddingLeft:"16px",justifyContent:"flex-start"},disableSortBy:!0},{Header:"Expected Results",accessor:e=>e.expected_result,Cell:({value:e})=>(0,S.tZ)(i.pH,{variant:"expected",verdicts:e.verdict,result:e.result_type}),disableSortBy:!0,columnCSS:{paddingLeft:.8*t+"rem",paddingRight:"16px",maxWidth:400}},{Header:"Obtained Result",accessor:e=>({isNotExpected:e.has_error,verdicts:e.obtained_result.verdict,result:e.obtained_result.result_type}),Cell:({value:e})=>(0,S.tZ)(i.pH,{variant:"obtained",verdicts:e.verdicts,result:e.result,isNotExpected:e.isNotExpected}),sortType:(e,t)=>"PASSED"===e.original.obtained_result.result_type?1:-1,sortInverted:!0,sortDescFirst:!0,maxWidth:400,columnCSS:{paddingRight:"16px"}},{Header:"Parameters",accessor:e=>e.parameters,Cell:({value:e})=>{const t=e.filter((e=>!e.startsWith("env="))),r=e.find((e=>e.startsWith("env=")));return(0,S.BX)("div",{className:"flex flex-col gap-1",children:[r&&(0,S.tZ)("div",{children:(0,S.tZ)(i.lA,{value:r.split("=")[1],isSelected:!1},r)}),(0,S.tZ)("div",{className:"flex flex-wrap gap-1",children:t.map((e=>(0,S.tZ)(i.Ct,{className:"bg-badge-1",children:e},e)))})]})},disableSortBy:!0}])(e,t)),[t,e]),d=(0,s.useMemo)((()=>(0,S.tZ)(Re,{rowCount:r})),[r]),c=(0,s.useMemo)((()=>(0,S.tZ)("h1",{children:"Something went wrong..."})),[]);return(0,S.tZ)("div",{className:"px-4 py-2",children:(0,S.tZ)(i.iA,{columns:o,data:l,emotionBaseTableCSS:De,spinner:d,isFetching:n,isError:a,errorComponent:c,headerShadow:!0,stickyOffset:-67})})})),Le={[u.Total]:{results:[],resultProperties:[]}},Ve=({row:e})=>{const{id:t,depth:r}=e,{runId:a}=(0,c.UO)(),n=(0,d.D1)(d.HC)[t],l=null!=n&&n.requests&&Object.keys(n.requests).length?n.requests:Le,{parent_id:i,result_id:u,name:p}=e.original,m=(0,s.useMemo)((()=>N(e)),[e]),{data:h,isFetching:x,isError:b}=(0,o.c2)({parentId:i||u,testName:p,requests:l}),g=(0,s.useMemo)((()=>Math.max(Object.keys(l).map((e=>m[e])).reduce(((e,t)=>e+t),0))),[l,m]);return a?(0,S.tZ)(je,{data:h,runId:a,depth:r,skeletonCount:g,isFetching:x,isError:b}):null},Pe=({runId:e})=>{const{data:t,isFetching:r,isError:s}=(0,o.Ek)(e);return r?(0,S.tZ)(i.$j,{className:"h-screen"}):s?(0,S.tZ)("span",{children:"Error"}):t?(0,S.tZ)(Ze,{data:t}):null},Me=({runId:e})=>{const t=(0,a.I0)();(0,s.useEffect)((()=>{t((0,d.VG)())}),[t]);const r=(0,l.XY)({seconds:10}),{isLoading:c}=(0,o.Ek)(null!=e?e:n.skipToken),{isLoading:u}=(0,o.qL)(null!=e?e:n.skipToken);return(u||c)&&!r?(0,S.tZ)(i.$j,{className:"h-screen"}):e?(0,S.BX)(S.HY,{children:[(0,S.tZ)(Pe,{runId:e}),(0,S.tZ)(i.uv,{offset:158})]}):null}},85125:e=>{e.exports=[[e.id,'.run-table .row-border ::after{background-color:transparent;content:"";width:100%;height:1px;position:absolute;bottom:0;left:0}.run-table .row-border-visible::after{background-color:#dde3eb;content:"";width:100%;height:1px;position:absolute;bottom:0;left:0}.run-table .row-test-expanded{position:-webkit-sticky;position:sticky;background-color:#fff;top:33px;z-index:1}.run-table table{width:100%;border-collapse:collapse;background-color:"#ffffff";border-radius:4px;border-spacing:0}.run-table table tbody{font-size:.75rem;line-height:1.125rem;font-weight:500}.run-table table thead{height:34px;position:-webkit-sticky;position:sticky;top:0;z-index:10;background-color:#fff;text-align:left;font-size:.6875rem;font-weight:600;line-height:.875rem}.run-table table thead tr{border-bottom:1px solid #dde3eb}.run-table table tr{height:34px}.run-table table tbody tr:not(tr:last-child){border-bottom:1px solid #dde3eb}.run-table table td:first-of-type,.run-table table th:first-of-type{padding-left:16px;width:25vw}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bi10YWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQiw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHNDQUFzQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLDhCQUE4Qix1QkFBZSxDQUFmLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixVQUFVLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsV0FBVyxDQUFDLHVCQUFlLENBQWYsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQywwQkFBMEIsK0JBQStCLENBQUMsb0JBQW9CLFdBQVcsQ0FBQyw2Q0FBNkMsK0JBQStCLENBQUMsb0VBQW9FLGlCQUFpQixDQUFDLFVBQVUiLCJmaWxlIjoicnVuLXRhYmxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucnVuLXRhYmxlIC5yb3ctYm9yZGVyIDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb250ZW50OlwiXCI7d2lkdGg6MTAwJTtoZWlnaHQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MH0ucnVuLXRhYmxlIC5yb3ctYm9yZGVyLXZpc2libGU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2RkZTNlYjtjb250ZW50OlwiXCI7d2lkdGg6MTAwJTtoZWlnaHQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MH0ucnVuLXRhYmxlIC5yb3ctdGVzdC1leHBhbmRlZHtwb3NpdGlvbjpzdGlja3k7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RvcDozM3B4O3otaW5kZXg6MX0ucnVuLXRhYmxlIHRhYmxle3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JhY2tncm91bmQtY29sb3I6XCIjZmZmZmZmXCI7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyLXNwYWNpbmc6MH0ucnVuLXRhYmxlIHRhYmxlIHRib2R5e2ZvbnQtc2l6ZTouNzVyZW07bGluZS1oZWlnaHQ6MS4xMjVyZW07Zm9udC13ZWlnaHQ6NTAwfS5ydW4tdGFibGUgdGFibGUgdGhlYWR7aGVpZ2h0OjM0cHg7cG9zaXRpb246c3RpY2t5O3RvcDowO3otaW5kZXg6MTA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RleHQtYWxpZ246bGVmdDtmb250LXNpemU6LjY4NzVyZW07Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0Oi44NzVyZW19LnJ1bi10YWJsZSB0YWJsZSB0aGVhZCB0cntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRlM2VifS5ydW4tdGFibGUgdGFibGUgdHJ7aGVpZ2h0OjM0cHh9LnJ1bi10YWJsZSB0YWJsZSB0Ym9keSB0cjpub3QodHI6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZTNlYn0ucnVuLXRhYmxlIHRhYmxlIHRkOmZpcnN0LW9mLXR5cGUsLnJ1bi10YWJsZSB0YWJsZSB0aDpmaXJzdC1vZi10eXBle3BhZGRpbmctbGVmdDoxNnB4O3dpZHRoOjI1dnd9Il19 */',"",""]]}}]);