import{d as N,M as L,r as h,C as R,Q as ge,a0 as X,o as C,_ as M,w,B as v,V as W,W as ne,a as j,a1 as pe,X as fe,a2 as eo,c as J,k as O,K as ae,x as le,s as me,S as q,a6 as oo,q as ke,ar as to,T as D,ac as Ne,$ as re,F as no,A as lo,i as E,aM as ro,aN as so,av as ao,U as oe,n as Fe,ad as ve,aE as io,au as ze,t as Le,j as Pe}from"./core-pFF3Oy_E.js";import{aq as co,w as Q,e as K,B as te,Y as uo,aw as se,k as po,A as H,y as ee,C as _e,$ as fo,D as Me,E as $,aJ as G,j as Be,Q as mo,R as Se,z as vo,N as _o,aK as go,g as De,I as bo,aL as $e,ay as ho,F as Ke,s as Ae,aM as wo,_ as be,t as yo,aN as Eo}from"./index-9aGlfxYy.js";import"./mock-XM2hXCKV.js";import{E as He,a as Io}from"./index-ILmOtctZ.js";import{e as Co}from"./elIcon-Slqp96jp.js";import{c as Ge}from"./refs-hYk7MJLb.js";function So(){if(!arguments.length)return[];var e=arguments[0];return co(e)?e:[e]}const x=4,$o={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},To=({move:e,size:o,bar:s})=>({[s.size]:o,transform:`translate${s.axis}(${e}%)`}),Ye=Symbol("scrollbarContextKey"),Oo=Q({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Ro="Thumb",ko=N({__name:"thumb",props:Oo,setup(e){const o=e,s=L(Ye),t=te("scrollbar");s||uo(Ro,"can not inject scrollbar context");const u=h(),d=h(),n=h({}),a=h(!1);let l=!1,g=!1,b=po?document.onselectstart:null;const c=R(()=>$o[o.vertical?"vertical":"horizontal"]),S=R(()=>To({size:o.size,move:o.move,bar:c.value})),i=R(()=>u.value[c.value.offset]**2/s.wrapElement[c.value.scrollSize]/o.ratio/d.value[c.value.offset]),_=p=>{var r;if(p.stopPropagation(),p.ctrlKey||[1,2].includes(p.button))return;(r=window.getSelection())==null||r.removeAllRanges(),I(p);const y=p.currentTarget;y&&(n.value[c.value.axis]=y[c.value.offset]-(p[c.value.client]-y.getBoundingClientRect()[c.value.direction]))},m=p=>{if(!d.value||!u.value||!s.wrapElement)return;const r=Math.abs(p.target.getBoundingClientRect()[c.value.direction]-p[c.value.client]),y=d.value[c.value.offset]/2,T=(r-y)*100*i.value/u.value[c.value.offset];s.wrapElement[c.value.scroll]=T*s.wrapElement[c.value.scrollSize]/100},I=p=>{p.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",P),document.addEventListener("mouseup",F),b=document.onselectstart,document.onselectstart=()=>!1},P=p=>{if(!u.value||!d.value||l===!1)return;const r=n.value[c.value.axis];if(!r)return;const y=(u.value.getBoundingClientRect()[c.value.direction]-p[c.value.client])*-1,T=d.value[c.value.offset]-r,V=(y-T)*100*i.value/u.value[c.value.offset];s.wrapElement[c.value.scroll]=V*s.wrapElement[c.value.scrollSize]/100},F=()=>{l=!1,n.value[c.value.axis]=0,document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",F),z(),g&&(a.value=!1)},B=()=>{g=!1,a.value=!!o.size},k=()=>{g=!0,a.value=l};ge(()=>{z(),document.removeEventListener("mouseup",F)});const z=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return se(X(s,"scrollbarElement"),"mousemove",B),se(X(s,"scrollbarElement"),"mouseleave",k),(p,r)=>(C(),M(eo,{name:v(t).b("fade"),persisted:""},{default:w(()=>[fe(j("div",{ref_key:"instance",ref:u,class:W([v(t).e("bar"),v(t).is(v(c).key)]),onMousedown:m},[j("div",{ref_key:"thumb",ref:d,class:W(v(t).e("thumb")),style:ne(v(S)),onMousedown:_},null,38)],34),[[pe,p.always||a.value]])]),_:1},8,["name"]))}});var Te=K(ko,[["__file","thumb.vue"]]);const No=Q({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Fo=N({__name:"bar",props:No,setup(e,{expose:o}){const s=e,t=h(0),u=h(0);return o({handleScroll:n=>{if(n){const a=n.offsetHeight-x,l=n.offsetWidth-x;u.value=n.scrollTop*100/a*s.ratioY,t.value=n.scrollLeft*100/l*s.ratioX}}}),(n,a)=>(C(),J(ae,null,[O(Te,{move:t.value,ratio:n.ratioX,size:n.width,always:n.always},null,8,["move","ratio","size","always"]),O(Te,{move:u.value,ratio:n.ratioY,size:n.height,vertical:"",always:n.always},null,8,["move","ratio","size","always"])],64))}});var zo=K(Fo,[["__file","bar.vue"]]);const Lo=Q({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:H([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Po={scroll:({scrollTop:e,scrollLeft:o})=>[e,o].every(ee)},Mo="ElScrollbar",Bo=N({name:Mo}),Do=N({...Bo,props:Lo,emits:Po,setup(e,{expose:o,emit:s}){const t=e,u=te("scrollbar");let d,n;const a=h(),l=h(),g=h(),b=h("0"),c=h("0"),S=h(),i=h(1),_=h(1),m=R(()=>{const r={};return t.height&&(r.height=_e(t.height)),t.maxHeight&&(r.maxHeight=_e(t.maxHeight)),[t.wrapStyle,r]}),I=R(()=>[t.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!t.native}]),P=R(()=>[u.e("view"),t.viewClass]),F=()=>{var r;l.value&&((r=S.value)==null||r.handleScroll(l.value),s("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function B(r,y){no(r)?l.value.scrollTo(r):ee(r)&&ee(y)&&l.value.scrollTo(r,y)}const k=r=>{ee(r)&&(l.value.scrollTop=r)},z=r=>{ee(r)&&(l.value.scrollLeft=r)},p=()=>{if(!l.value)return;const r=l.value.offsetHeight-x,y=l.value.offsetWidth-x,T=r**2/l.value.scrollHeight,V=y**2/l.value.scrollWidth,U=Math.max(T,t.minSize),Y=Math.max(V,t.minSize);i.value=T/(r-T)/(U/(r-U)),_.value=V/(y-V)/(Y/(y-Y)),c.value=U+x<r?`${U}px`:"",b.value=Y+x<y?`${Y}px`:""};return le(()=>t.noresize,r=>{r?(d==null||d(),n==null||n()):({stop:d}=fo(g,p),n=se("resize",p))},{immediate:!0}),le(()=>[t.maxHeight,t.height],()=>{t.native||me(()=>{var r;p(),l.value&&((r=S.value)==null||r.handleScroll(l.value))})}),q(Ye,oo({scrollbarElement:a,wrapElement:l})),ke(()=>{t.native||me(()=>{p()})}),to(()=>p()),o({wrapRef:l,update:p,scrollTo:B,setScrollTop:k,setScrollLeft:z,handleScroll:F}),(r,y)=>(C(),J("div",{ref_key:"scrollbarRef",ref:a,class:W(v(u).b())},[j("div",{ref_key:"wrapRef",ref:l,class:W(v(I)),style:ne(v(m)),onScroll:F},[(C(),M(Ne(r.tag),{id:r.id,ref_key:"resizeRef",ref:g,class:W(v(P)),style:ne(r.viewStyle),role:r.role,"aria-label":r.ariaLabel,"aria-orientation":r.ariaOrientation},{default:w(()=>[D(r.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),r.native?re("v-if",!0):(C(),M(zo,{key:0,ref_key:"barRef",ref:S,height:c.value,width:b.value,always:r.always,"ratio-x":_.value,"ratio-y":i.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Ko=K(Do,[["__file","scrollbar.vue"]]);const Ao=Me(Ko),Ho=N({inheritAttrs:!1});function Go(e,o,s,t,u,d){return D(e.$slots,"default")}var Yo=K(Ho,[["render",Go],["__file","collection.vue"]]);const Uo=N({name:"ElCollectionItem",inheritAttrs:!1});function Wo(e,o,s,t,u,d){return D(e.$slots,"default")}var Jo=K(Uo,[["render",Wo],["__file","collection-item.vue"]]);const Ue="data-el-collection-item",We=e=>{const o=`El${e}Collection`,s=`${o}Item`,t=Symbol(o),u=Symbol(s),d={...Yo,name:o,setup(){const a=h(null),l=new Map;q(t,{itemMap:l,getItems:()=>{const b=v(a);if(!b)return[];const c=Array.from(b.querySelectorAll(`[${Ue}]`));return[...l.values()].sort((i,_)=>c.indexOf(i.ref)-c.indexOf(_.ref))},collectionRef:a})}},n={...Jo,name:s,setup(a,{attrs:l}){const g=h(null),b=L(t,void 0);q(u,{collectionItemRef:g}),ke(()=>{const c=v(g);c&&b.itemMap.set(c,{ref:c,...l})}),ge(()=>{const c=v(g);b.itemMap.delete(c)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:d,ElCollectionItem:n}},Vo=Q({style:{type:H([String,Array,Object])},currentTabId:{type:H(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:H(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:jo,ElCollectionItem:Xo,COLLECTION_INJECTION_KEY:he,COLLECTION_ITEM_INJECTION_KEY:qo}=We("RovingFocusGroup"),we=Symbol("elRovingFocusGroup"),Je=Symbol("elRovingFocusGroupItem"),Qo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Zo=(e,o)=>{if(o!=="rtl")return e;switch(e){case $.right:return $.left;case $.left:return $.right;default:return e}},xo=(e,o,s)=>{const t=Zo(e.key,s);if(!(o==="vertical"&&[$.left,$.right].includes(t))&&!(o==="horizontal"&&[$.up,$.down].includes(t)))return Qo[t]},et=(e,o)=>e.map((s,t)=>e[(t+o)%e.length]),ye=e=>{const{activeElement:o}=document;for(const s of e)if(s===o||(s.focus(),o!==document.activeElement))return},Oe="currentTabIdChange",Re="rovingFocusGroup.entryFocus",ot={bubbles:!1,cancelable:!0},tt=N({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Vo,emits:[Oe,"entryFocus"],setup(e,{emit:o}){var s;const t=h((s=e.currentTabId||e.defaultCurrentTabId)!=null?s:null),u=h(!1),d=h(!1),n=h(null),{getItems:a}=L(he,void 0),l=R(()=>[{outline:"none"},e.style]),g=m=>{o(Oe,m)},b=()=>{u.value=!0},c=G(m=>{var I;(I=e.onMousedown)==null||I.call(e,m)},()=>{d.value=!0}),S=G(m=>{var I;(I=e.onFocus)==null||I.call(e,m)},m=>{const I=!v(d),{target:P,currentTarget:F}=m;if(P===F&&I&&!v(u)){const B=new Event(Re,ot);if(F==null||F.dispatchEvent(B),!B.defaultPrevented){const k=a().filter(T=>T.focusable),z=k.find(T=>T.active),p=k.find(T=>T.id===v(t)),y=[z,p,...k].filter(Boolean).map(T=>T.ref);ye(y)}}d.value=!1}),i=G(m=>{var I;(I=e.onBlur)==null||I.call(e,m)},()=>{u.value=!1}),_=(...m)=>{o("entryFocus",...m)};q(we,{currentTabbedId:lo(t),loop:X(e,"loop"),tabIndex:R(()=>v(u)?-1:0),rovingFocusGroupRef:n,rovingFocusGroupRootStyle:l,orientation:X(e,"orientation"),dir:X(e,"dir"),onItemFocus:g,onItemShiftTab:b,onBlur:i,onFocus:S,onMousedown:c}),le(()=>e.currentTabId,m=>{t.value=m??null}),se(n,Re,_)}});function nt(e,o,s,t,u,d){return D(e.$slots,"default")}var lt=K(tt,[["render",nt],["__file","roving-focus-group-impl.vue"]]);const rt=N({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:jo,ElRovingFocusGroupImpl:lt}});function st(e,o,s,t,u,d){const n=E("el-roving-focus-group-impl"),a=E("el-focus-group-collection");return C(),M(a,null,{default:w(()=>[O(n,so(ro(e.$attrs)),{default:w(()=>[D(e.$slots,"default")]),_:3},16)]),_:3})}var at=K(rt,[["render",st],["__file","roving-focus-group.vue"]]);const it=N({components:{ElRovingFocusCollectionItem:Xo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:s,loop:t,onItemFocus:u,onItemShiftTab:d}=L(we,void 0),{getItems:n}=L(he,void 0),a=Be(),l=h(null),g=G(i=>{o("mousedown",i)},i=>{e.focusable?u(v(a)):i.preventDefault()}),b=G(i=>{o("focus",i)},()=>{u(v(a))}),c=G(i=>{o("keydown",i)},i=>{const{key:_,shiftKey:m,target:I,currentTarget:P}=i;if(_===$.tab&&m){d();return}if(I!==P)return;const F=xo(i);if(F){i.preventDefault();let k=n().filter(z=>z.focusable).map(z=>z.ref);switch(F){case"last":{k.reverse();break}case"prev":case"next":{F==="prev"&&k.reverse();const z=k.indexOf(P);k=t.value?et(k,z+1):k.slice(z+1);break}}me(()=>{ye(k)})}}),S=R(()=>s.value===v(a));return q(Je,{rovingFocusGroupItemRef:l,tabIndex:R(()=>v(S)?0:-1),handleMousedown:g,handleFocus:b,handleKeydown:c}),{id:a,handleKeydown:c,handleFocus:b,handleMousedown:g}}});function ct(e,o,s,t,u,d){const n=E("el-roving-focus-collection-item");return C(),M(n,{id:e.id,focusable:e.focusable,active:e.active},{default:w(()=>[D(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var ut=K(it,[["render",ct],["__file","roving-focus-item.vue"]]);const dt=Q({trigger:mo.trigger,effect:{...Se.effect,default:"light"},type:{type:H(String)},placement:{type:H(String),default:"bottom"},popperOptions:{type:H(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:H([Number,String]),default:0},maxHeight:{type:H([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:H(Object)},teleported:Se.teleported}),Ve=Q({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:vo}}),pt=Q({onKeydown:{type:H(Function)}}),ft=[$.down,$.pageDown,$.home],je=[$.up,$.pageUp,$.end],mt=[...ft,...je],{ElCollection:vt,ElCollectionItem:_t,COLLECTION_INJECTION_KEY:gt,COLLECTION_ITEM_INJECTION_KEY:bt}=We("Dropdown"),ie=Symbol("elDropdown"),{ButtonGroup:ht}=He,wt=N({name:"ElDropdown",components:{ElButton:He,ElButtonGroup:ht,ElScrollbar:Ao,ElDropdownCollection:vt,ElTooltip:_o,ElRovingFocusGroup:at,ElOnlyChild:go,ElIcon:De,ArrowDown:Co},props:dt,emits:["visible-change","click","command"],setup(e,{emit:o}){const s=Fe(),t=te("dropdown"),{t:u}=bo(),d=h(),n=h(),a=h(null),l=h(null),g=h(null),b=h(null),c=h(!1),S=[$.enter,$.space,$.down],i=R(()=>({maxHeight:_e(e.maxHeight)})),_=R(()=>[t.m(z.value)]),m=R(()=>So(e.trigger)),I=Be().value,P=R(()=>e.id||I);le([d,m],([f,A],[Z])=>{var Ee,Ie,Ce;(Ee=Z==null?void 0:Z.$el)!=null&&Ee.removeEventListener&&Z.$el.removeEventListener("pointerenter",r),(Ie=f==null?void 0:f.$el)!=null&&Ie.removeEventListener&&f.$el.removeEventListener("pointerenter",r),(Ce=f==null?void 0:f.$el)!=null&&Ce.addEventListener&&A.includes("hover")&&f.$el.addEventListener("pointerenter",r)},{immediate:!0}),ge(()=>{var f,A;(A=(f=d.value)==null?void 0:f.$el)!=null&&A.removeEventListener&&d.value.$el.removeEventListener("pointerenter",r)});function F(){B()}function B(){var f;(f=a.value)==null||f.onClose()}function k(){var f;(f=a.value)==null||f.onOpen()}const z=Io();function p(...f){o("command",...f)}function r(){var f,A;(A=(f=d.value)==null?void 0:f.$el)==null||A.focus()}function y(){}function T(){const f=v(l);m.value.includes("hover")&&(f==null||f.focus()),b.value=null}function V(f){b.value=f}function U(f){c.value||(f.preventDefault(),f.stopImmediatePropagation())}function Y(){o("visible-change",!0)}function Ze(f){(f==null?void 0:f.type)==="keydown"&&l.value.focus()}function xe(){o("visible-change",!1)}return q(ie,{contentRef:l,role:R(()=>e.role),triggerId:P,isUsingKeyboard:c,onItemEnter:y,onItemLeave:T}),q("elDropdown",{instance:s,dropdownSize:z,handleClick:F,commandHandler:p,trigger:X(e,"trigger"),hideOnClick:X(e,"hideOnClick")}),{t:u,ns:t,scrollbar:g,wrapStyle:i,dropdownTriggerKls:_,dropdownSize:z,triggerId:P,triggerKeys:S,currentTabId:b,handleCurrentTabIdChange:V,handlerMainButtonClick:f=>{o("click",f)},handleEntryFocus:U,handleClose:B,handleOpen:k,handleBeforeShowTooltip:Y,handleShowTooltip:Ze,handleBeforeHideTooltip:xe,onFocusAfterTrapped:f=>{var A,Z;f.preventDefault(),(Z=(A=l.value)==null?void 0:A.focus)==null||Z.call(A,{preventScroll:!0})},popperRef:a,contentRef:l,triggeringElementRef:d,referenceElementRef:n}}});function yt(e,o,s,t,u,d){var n;const a=E("el-dropdown-collection"),l=E("el-roving-focus-group"),g=E("el-scrollbar"),b=E("el-only-child"),c=E("el-tooltip"),S=E("el-button"),i=E("arrow-down"),_=E("el-icon"),m=E("el-button-group");return C(),J("div",{class:W([e.ns.b(),e.ns.is("disabled",e.disabled)])},[O(c,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(n=e.referenceElementRef)==null?void 0:n.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},ao({content:w(()=>[O(g,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:w(()=>[O(l,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:w(()=>[O(a,null,{default:w(()=>[D(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:w(()=>[O(b,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:w(()=>[D(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(C(),M(m,{key:0},{default:w(()=>[O(S,oe({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:w(()=>[D(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),O(S,oe({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:w(()=>[O(_,{class:W(e.ns.e("icon"))},{default:w(()=>[O(i)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):re("v-if",!0)],2)}var Et=K(wt,[["render",yt],["__file","dropdown.vue"]]);const It=N({name:"DropdownItemImpl",components:{ElIcon:De},props:Ve,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const s=te("dropdown"),{role:t}=L(ie,void 0),{collectionItemRef:u}=L(bt,void 0),{collectionItemRef:d}=L(qo,void 0),{rovingFocusGroupItemRef:n,tabIndex:a,handleFocus:l,handleKeydown:g,handleMousedown:b}=L(Je,void 0),c=Ge(u,d,n),S=R(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),i=G(_=>{const{code:m}=_;if(m===$.enter||m===$.space)return _.preventDefault(),_.stopImmediatePropagation(),o("clickimpl",_),!0},g);return{ns:s,itemRef:c,dataset:{[Ue]:""},role:S,tabIndex:a,handleFocus:l,handleKeydown:i,handleMousedown:b}}}),Ct=["aria-disabled","tabindex","role"];function St(e,o,s,t,u,d){const n=E("el-icon");return C(),J(ae,null,[e.divided?(C(),J("li",oe({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):re("v-if",!0),j("li",oe({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=a=>e.$emit("clickimpl",a)),onFocus:o[1]||(o[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onKeydown:o[2]||(o[2]=ve((...a)=>e.handleKeydown&&e.handleKeydown(...a),["self"])),onMousedown:o[3]||(o[3]=(...a)=>e.handleMousedown&&e.handleMousedown(...a)),onPointermove:o[4]||(o[4]=a=>e.$emit("pointermove",a)),onPointerleave:o[5]||(o[5]=a=>e.$emit("pointerleave",a))}),[e.icon?(C(),M(n,{key:0},{default:w(()=>[(C(),M(Ne(e.icon)))]),_:1})):re("v-if",!0),D(e.$slots,"default")],16,Ct)],64)}var $t=K(It,[["render",St],["__file","dropdown-item-impl.vue"]]);const Xe=()=>{const e=L("elDropdown",{}),o=R(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Tt=N({name:"ElDropdownItem",components:{ElDropdownCollectionItem:_t,ElRovingFocusItem:ut,ElDropdownItemImpl:$t},inheritAttrs:!1,props:Ve,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:s}){const{elDropdown:t}=Xe(),u=Fe(),d=h(null),n=R(()=>{var i,_;return(_=(i=v(d))==null?void 0:i.textContent)!=null?_:""}),{onItemEnter:a,onItemLeave:l}=L(ie,void 0),g=G(i=>(o("pointermove",i),i.defaultPrevented),$e(i=>{if(e.disabled){l(i);return}const _=i.currentTarget;_===document.activeElement||_.contains(document.activeElement)||(a(i),i.defaultPrevented||_==null||_.focus())})),b=G(i=>(o("pointerleave",i),i.defaultPrevented),$e(i=>{l(i)})),c=G(i=>{if(!e.disabled)return o("click",i),i.type!=="keydown"&&i.defaultPrevented},i=>{var _,m,I;if(e.disabled){i.stopImmediatePropagation();return}(_=t==null?void 0:t.hideOnClick)!=null&&_.value&&((m=t.handleClick)==null||m.call(t)),(I=t.commandHandler)==null||I.call(t,e.command,u,i)}),S=R(()=>({...e,...s}));return{handleClick:c,handlePointerMove:g,handlePointerLeave:b,textContent:n,propsAndAttrs:S}}});function Ot(e,o,s,t,u,d){var n;const a=E("el-dropdown-item-impl"),l=E("el-roving-focus-item"),g=E("el-dropdown-collection-item");return C(),M(g,{disabled:e.disabled,"text-value":(n=e.textValue)!=null?n:e.textContent},{default:w(()=>[O(l,{focusable:!e.disabled},{default:w(()=>[O(a,oe(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:w(()=>[D(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var qe=K(Tt,[["render",Ot],["__file","dropdown-item.vue"]]);const Rt=N({name:"ElDropdownMenu",props:pt,setup(e){const o=te("dropdown"),{_elDropdownSize:s}=Xe(),t=s.value,{focusTrapRef:u,onKeydown:d}=L(ho,void 0),{contentRef:n,role:a,triggerId:l}=L(ie,void 0),{collectionRef:g,getItems:b}=L(gt,void 0),{rovingFocusGroupRef:c,rovingFocusGroupRootStyle:S,tabIndex:i,onBlur:_,onFocus:m,onMousedown:I}=L(we,void 0),{collectionRef:P}=L(he,void 0),F=R(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),B=Ge(n,g,u,c,P),k=G(p=>{var r;(r=e.onKeydown)==null||r.call(e,p)},p=>{const{currentTarget:r,code:y,target:T}=p;if(r.contains(T),$.tab===y&&p.stopImmediatePropagation(),p.preventDefault(),T!==v(n)||!mt.includes(y))return;const U=b().filter(Y=>!Y.disabled).map(Y=>Y.ref);je.includes(y)&&U.reverse(),ye(U)});return{size:t,rovingFocusGroupRootStyle:S,tabIndex:i,dropdownKls:F,role:a,triggerId:l,dropdownListWrapperRef:B,handleKeydown:p=>{k(p),d(p)},onBlur:_,onFocus:m,onMousedown:I}}}),kt=["role","aria-labelledby"];function Nt(e,o,s,t,u,d){return C(),J("ul",{ref:e.dropdownListWrapperRef,class:W(e.dropdownKls),style:ne(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...n)=>e.onBlur&&e.onBlur(...n)),onFocus:o[1]||(o[1]=(...n)=>e.onFocus&&e.onFocus(...n)),onKeydown:o[2]||(o[2]=ve((...n)=>e.handleKeydown&&e.handleKeydown(...n),["self"])),onMousedown:o[3]||(o[3]=ve((...n)=>e.onMousedown&&e.onMousedown(...n),["self"]))},[D(e.$slots,"default")],46,kt)}var Qe=K(Rt,[["render",Nt],["__file","dropdown-menu.vue"]]);const ce=Me(Et,{DropdownItem:qe,DropdownMenu:Qe}),ue=Ke(qe),de=Ke(Qe),Ft={class:"flex-center pointer"},zt=N({setup:!0,name:"MeSizeSelect",getComponents:()=>[E("me-icon-size"),ue,de,ce]}),Lt=N({...zt,__name:"meSizeSelect",setup(e){const{themeConfig:o}=io(Ae());return(s,t)=>{const u=E("me-icon-size"),d=ue,n=de,a=ce;return C(),M(a,{class:"me-size-select",trigger:"click","max-height":"500px"},{dropdown:w(()=>[O(n,null,{default:w(()=>[(C(!0),J(ae,null,ze(v(wo),l=>(C(),M(d,{key:l,disabled:v(o).size===l,onClick:g=>v(o).size=l},{default:w(()=>[Pe(Le(s.$t(l)),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:w(()=>[j("div",Ft,[O(u,{class:"icon"})])]),_:1})}}}),qt=be(Lt,[["__scopeId","data-v-baf8b96a"]]),Pt={class:"flex-center pointer"},Mt=N({setup:!0,name:"MeTranslation",getComponents:()=>[E("me-icon-translation"),ue,de,ce]}),Bt=N({...Mt,__name:"meLocaleSelect",setup(e){const o=s=>{Eo(s)};return(s,t)=>{const u=E("me-icon-translation"),d=ue,n=de,a=ce;return C(),M(a,{class:"me-locale-select",trigger:"click","max-height":"500px"},{dropdown:w(()=>[O(n,null,{default:w(()=>[(C(!0),J(ae,null,ze(v(yo).localeList,(l,g)=>(C(),M(d,{key:g,disabled:s.$i18n.locale===l.locale,onClick:b=>o(l.locale)},{default:w(()=>[Pe(Le(s.$t(l.text)),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:w(()=>[j("div",Pt,[O(u,{class:"icon"})])]),_:1})}}}),Qt=be(Bt,[["__scopeId","data-v-1e69f779"]]),Dt={class:"el-switch__core"},Kt={class:"el-switch__action"},At=N({setup:!0,name:"MeDarkSwitch",getComponents:()=>[E("me-icon-sunny"),E("me-icon-moon")]}),Ht=N({...At,__name:"meDarkSwitch",setup(e){const o=Ae();return(s,t)=>{const u=E("me-icon-sunny"),d=E("me-icon-moon");return C(),J("div",{class:W({"el-switch":!0,"is-checked":v(o).isDark}),onClick:t[0]||(t[0]=n=>v(o).isDark=!v(o).isDark)},[j("span",Dt,[j("div",Kt,[fe(O(u,{class:"icon"},null,512),[[pe,!v(o).isDark]]),fe(O(d,{class:"icon"},null,512),[[pe,v(o).isDark]])])])],2)}}}),Zt=be(Ht,[["__scopeId","data-v-ff57c998"]]);export{Ao as E,Zt as _,qt as a,Qt as b,ce as c,dt as d,ue as e,de as f,So as g};
