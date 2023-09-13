import{d as w,c as G,h as b,o as k,a as j,b as i,w as c,e as f,r as P,p as A,f as L,g as C,_ as M}from"./index-6c22e30d.js";import{i as T,u as V,a as $,b as D,f as N,c as O,g as F,d as S,e as K,_ as W}from"./discrete-054cf790.js";function H(e,a="default",s=[]){const r=e.$slots[a];return r===void 0?s:r()}const U={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},J=()=>U,q={name:"Space",self:J},Q=q;let x;const X=()=>{if(!T)return!0;if(x===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),x=a}return x},Y=Object.assign(Object.assign({},$.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Z=w({name:"Space",props:Y,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=V(e),n=$("Space","-space",void 0,Q,e,a),r=D("Space",s,a);return{useGap:X(),rtlEnabled:r,mergedClsPrefix:a,margin:G(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[O("gap",t)]:o}}=n.value,{row:d,col:l}=F(o);return{horizontal:S(l),vertical:S(d)}})}},render(){const{vertical:e,align:a,inline:s,justify:n,itemStyle:r,margin:t,wrap:o,mergedClsPrefix:d,rtlEnabled:l,useGap:m,wrapItem:z,internalUseGap:I}=this,_=N(H(this));if(!_.length)return null;const y=`${t.horizontal}px`,v=`${t.horizontal/2}px`,R=`${t.vertical}px`,u=`${t.vertical/2}px`,g=_.length-1,h=n.startsWith("space-");return b("div",{role:"none",class:[`${d}-space`,l&&`${d}-space--rtl`],style:{display:s?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!o||e?"nowrap":"wrap",marginTop:m||e?"":`-${u}`,marginBottom:m||e?"":`-${u}`,alignItems:a,gap:m?`${t.vertical}px ${t.horizontal}px`:""}},!z&&(m||I)?_:_.map((E,p)=>b("div",{role:"none",style:[r,{maxWidth:"100%"},m?"":e?{marginBottom:p!==g?R:""}:l?{marginLeft:h?n==="space-between"&&p===g?"":v:p!==g?y:"",marginRight:h?n==="space-between"&&p===0?"":v:"",paddingTop:u,paddingBottom:u}:{marginRight:h?n==="space-between"&&p===g?"":v:p!==g?y:"",marginLeft:h?n==="space-between"&&p===0?"":v:"",paddingTop:u,paddingBottom:u}]},E)))}}),B=e=>(A("data-v-55f3c43f"),e=e(),L(),e),ee={class:"welcome"},te=B(()=>C("b",null,"Spring Authorization Server 前后端分离示例项目",-1)),ne=B(()=>C("br",null,null,-1)),ae=w({__name:"Index",setup(e){const{message:a}=K(["message"]),s=r=>{P.push({path:r})},n=()=>{a.info("待开发")};return(r,t)=>{const o=W,d=Z;return k(),j("div",ee,[i(o,{class:"navbar"},{default:c(()=>[te]),_:1}),i(d,{class:"features"},{default:c(()=>[i(o,{title:"登录页面",onClick:t[0]||(t[0]=l=>s("/login")),hoverable:""},{default:c(()=>[f(" /login ")]),_:1}),i(o,{title:"授权确认页面",onClick:t[1]||(t[1]=l=>s("/consent")),hoverable:""},{default:c(()=>[f(" /consent")]),_:1}),i(o,{title:"设备码验证页面",onClick:t[2]||(t[2]=l=>s("/activate")),hoverable:""},{default:c(()=>[f(" /activate")]),_:1}),i(o,{title:"验证成功页面",onClick:t[3]||(t[3]=l=>s("/activated")),hoverable:""},{default:c(()=>[f(" /activated ")]),_:1}),ne,i(o,{title:"授权码模式",onClick:n,hoverable:""},{default:c(()=>[f(" 发起授权码模式的授权申请 ")]),_:1}),i(o,{title:"PKCE模式",onClick:n,hoverable:""},{default:c(()=>[f(" 发起PKCE模式的授权申请 ")]),_:1})]),_:1})])}}});const re=M(ae,[["__scopeId","data-v-55f3c43f"],["__file","D:/OtherFiles/GitRepository/authorization-example/vue-login-page-example/src/views/index/Index.vue"]]);export{re as default};
