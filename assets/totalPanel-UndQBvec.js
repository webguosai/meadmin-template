import{a as D,p as v,q as f,_ as P}from"./index-yH0Ry0aD.js";import{_ as T}from"./meNumber.vue_vue_type_script_setup_true_lang-Qr7dTsQm.js";import{s as V,E as y}from"./statistics-sRbMEf25.js";import"./mock-iVyY1y2-.js";import{E as b}from"./index-49D7_RkS.js";import{a as g,E as C}from"./index-3sLke_Wy.js";import{d as E,a6 as F,C as o,o as s,c as d,k as n,w as r,K as L,B as i,ac as O,W as R,_ as m,a as c,t as p,j as N,au as S}from"./core-ST-i4T9p.js";import"./elIcon-sXDKzXmT.js";const $={class:"total-panel"},q={class:"content"},z={class:"total"},H={class:"footer"},K=E({setup:!0,langImport:[_=>v(Object.assign({"../lang/en.json":()=>f(()=>import("./en-zQmlS3nU.js"),__vite__mapDeps([]))}),`../lang/${_}.json`),"dashboard"],getComponents:()=>[T,y,b,g,C]}),W=E({...K,__name:"totalPanel",setup(_){let{t:a}=D({},[t=>v(Object.assign({"../lang/en.json":()=>f(()=>import("./en-zQmlS3nU.js"),__vite__mapDeps([]))}),`../lang/${t}.json`),"dashboard"]);const{loading:u,runAsync:h,data:e}=V(!0),j=F([{title:o(()=>a("访问量")),icon:"mel-icon-platform",iconColor:"#409EFF",total:o(()=>{var t;return(t=e.value)==null?void 0:t.view.total}),subTitle:o(()=>a("昨日新增")+"："),subTotal:o(()=>{var t;return(t=e.value)==null?void 0:t.view.yesterdayTotal})},{title:a("用户数"),icon:"mel-icon-user-filled",iconColor:"#67C23A",total:o(()=>{var t;return(t=e.value)==null?void 0:t.user.total}),subTitle:o(()=>a("昨日新增")+"："),subTotal:o(()=>{var t;return(t=e.value)==null?void 0:t.user.yesterdayTotal})},{title:o(()=>a("订单数")),icon:"mel-icon-histogram",iconColor:"#E6A23C",total:o(()=>{var t;return(t=e.value)==null?void 0:t.order.total}),subTitle:o(()=>a("昨日新增")+"："),subTotal:o(()=>{var t;return(t=e.value)==null?void 0:t.order.yesterdayTotal})},{title:o(()=>a("成交额")),icon:"mel-icon-money",iconColor:"#F56C6C",total:o(()=>e.value?[e.value.turnover.total,"￥"]:0),subTitle:o(()=>a("昨日新增")+"："),subTotal:o(()=>{var t;return"￥"+((t=e.value)==null?void 0:t.turnover.yesterdayTotal)})}]);return h(),(t,G)=>{const k=T,w=y,x=b,A=g,I=C;return s(),d("div",$,[n(I,{gutter:20},{default:r(()=>[(s(!0),d(L,null,S(i(j),(l,B)=>(s(),m(A,{key:B,xs:24,sm:12,lg:6},{default:r(()=>[n(x,{shadow:"hover",header:i(u)?"":l.title,class:"total-item"},{default:r(()=>[n(w,{loading:i(u)},{default:r(()=>[c("div",q,[c("div",z,[n(k,{end:l.total},null,8,["end"]),(s(),m(O(l.icon),{style:R({color:l.iconColor})},null,8,["style"]))]),c("div",H,[N(p(l.subTitle),1),c("span",null,p(l.subTotal),1)])])]),_:2},1032,["loading"])]),_:2},1032,["header"])]),_:2},1024))),128))]),_:1})])}}}),ot=P(W,[["__scopeId","data-v-a93912a0"]]);export{ot as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
