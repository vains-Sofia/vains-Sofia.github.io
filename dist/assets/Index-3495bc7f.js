import{d as j,c as L,h as E,o as P,a as M,b,w as p,e as y,u as V,f as Y,g as m,F as Z,r as ee,i as oe,j as re,t as G,p as te,k as ne,_ as le}from"./index-b63881f1.js";import{i as ae,u as N,a as w,b as A,f as de,c as $,g as ie,d as F,e as se,h as g,j as n,k as T,l as k,m as ce,n as pe,o as ue,p as be,q as ge,_ as me}from"./discrete-1affaae5.js";function he(e,r="default",a=[]){const t=e.$slots[r];return t===void 0?a:t()}const ve={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},fe=()=>ve,xe={name:"Space",self:fe},Ce=xe;let I;const _e=()=>{if(!ae)return!0;if(I===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const r=e.scrollHeight===1;return document.body.removeChild(e),I=r}return I},ye=Object.assign(Object.assign({},w.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Se=j({name:"Space",props:ye,setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:a}=N(e),l=w("Space","-space",void 0,Ce,e,r),t=A("Space",a,r);return{useGap:_e(),rtlEnabled:t,mergedClsPrefix:r,margin:L(()=>{const{size:o}=e;if(Array.isArray(o))return{horizontal:o[0],vertical:o[1]};if(typeof o=="number")return{horizontal:o,vertical:o};const{self:{[$("gap",o)]:s}}=l.value,{row:i,col:d}=ie(s);return{horizontal:F(d),vertical:F(i)}})}},render(){const{vertical:e,align:r,inline:a,justify:l,itemStyle:t,margin:o,wrap:s,mergedClsPrefix:i,rtlEnabled:d,useGap:c,wrapItem:S,internalUseGap:z}=this,h=de(he(this));if(!h.length)return null;const C=`${o.horizontal}px`,v=`${o.horizontal/2}px`,B=`${o.vertical}px`,f=`${o.vertical/2}px`,x=h.length-1,_=l.startsWith("space-");return E("div",{role:"none",class:[`${i}-space`,d&&`${i}-space--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(l)?"flex-"+l:l,flexWrap:!s||e?"nowrap":"wrap",marginTop:c||e?"":`-${f}`,marginBottom:c||e?"":`-${f}`,alignItems:r,gap:c?`${o.vertical}px ${o.horizontal}px`:""}},!S&&(c||z)?h:h.map((R,u)=>E("div",{role:"none",style:[t,{maxWidth:"100%"},c?"":e?{marginBottom:u!==x?B:""}:d?{marginLeft:_?l==="space-between"&&u===x?"":v:u!==x?C:"",marginRight:_?l==="space-between"&&u===0?"":v:"",paddingTop:f,paddingBottom:f}:{marginRight:_?l==="space-between"&&u===x?"":v:u!==x?C:"",marginLeft:_?l==="space-between"&&u===0?"":v:"",paddingTop:f,paddingBottom:f}]},R)))}}),ze={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},Pe=e=>{const{dividerColor:r,cardColor:a,modalColor:l,popoverColor:t,tableHeaderColor:o,tableColorStriped:s,textColor1:i,textColor2:d,borderRadius:c,fontWeightStrong:S,lineHeight:z,fontSizeSmall:h,fontSizeMedium:C,fontSizeLarge:v}=e;return Object.assign(Object.assign({},ze),{fontSizeSmall:h,fontSizeMedium:C,fontSizeLarge:v,lineHeight:z,borderRadius:c,borderColor:g(a,r),borderColorModal:g(l,r),borderColorPopover:g(t,r),tdColor:a,tdColorModal:l,tdColorPopover:t,tdColorStriped:g(a,s),tdColorStripedModal:g(l,s),tdColorStripedPopover:g(t,s),thColor:g(a,o),thColorModal:g(l,o),thColorPopover:g(t,o),thTextColor:i,tdTextColor:d,thFontWeight:S})},ke={name:"Table",common:se,self:Pe},$e=ke,we=n([T("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[n("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[n("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[n("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),k("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[n("tr",[n("&:last-child",[n("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),k("single-line",[n("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),n("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),k("single-column",[n("tr",[n("&:not(:last-child)",[n("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),k("striped",[n("tr:nth-of-type(even)",[n("td","background-color: var(--n-td-color-striped)")])]),ce("bottom-bordered",[n("tr",[n("&:last-child",[n("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),pe(T("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[n("th",`
 background-color: var(--n-th-color-modal);
 `),n("td",`
 background-color: var(--n-td-color-modal);
 `)])),ue(T("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[n("th",`
 background-color: var(--n-th-color-popover);
 `),n("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Be=Object.assign(Object.assign({},w.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Re=j({name:"Table",props:Be,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:l}=N(e),t=w("Table","-table",we,$e,e,r),o=A("Table",l,r),s=L(()=>{const{size:d}=e,{self:{borderColor:c,tdColor:S,tdColorModal:z,tdColorPopover:h,thColor:C,thColorModal:v,thColorPopover:B,thTextColor:f,tdTextColor:x,borderRadius:_,thFontWeight:R,lineHeight:u,borderColorModal:D,borderColorPopover:H,tdColorStriped:W,tdColorStripedModal:K,tdColorStripedPopover:J,[$("fontSize",d)]:U,[$("tdPadding",d)]:q,[$("thPadding",d)]:Q},common:{cubicBezierEaseInOut:X}}=t.value;return{"--n-bezier":X,"--n-td-color":S,"--n-td-color-modal":z,"--n-td-color-popover":h,"--n-td-text-color":x,"--n-border-color":c,"--n-border-color-modal":D,"--n-border-color-popover":H,"--n-border-radius":_,"--n-font-size":U,"--n-th-color":C,"--n-th-color-modal":v,"--n-th-color-popover":B,"--n-th-font-weight":R,"--n-th-text-color":f,"--n-line-height":u,"--n-td-padding":q,"--n-th-padding":Q,"--n-td-color-striped":W,"--n-td-color-striped-modal":K,"--n-td-color-striped-popover":J}}),i=a?be("table",L(()=>e.size[0]),s,e):void 0;return{rtlEnabled:o,mergedClsPrefix:r,cssVars:a?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),E("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),O=e=>(te("data-v-55f3c43f"),e=e(),ne(),e),Me={class:"welcome"},Te=O(()=>m("b",null,"Spring Authorization Server 前后端分离示例项目",-1)),Ie=O(()=>m("br",null,null,-1)),Le=O(()=>m("thead",null,[m("tr",null,[m("th",{style:{width:"105px"}},"Key"),m("th",null,"Value")])],-1)),Ee=j({__name:"Index",setup(e){ge(["message"]);const r=JSON.parse(String(localStorage.getItem("accessToken"))),a=l=>{re.push({path:l})};return(l,t)=>{const o=me,s=Re,i=Se;return P(),M("div",Me,[b(o,{class:"navbar"},{default:p(()=>[Te]),_:1}),b(i,{class:"features"},{default:p(()=>[b(o,{title:"登录页面",onClick:t[0]||(t[0]=d=>a("/login")),hoverable:""},{default:p(()=>[y(" /login ")]),_:1}),b(o,{title:"授权确认页面",onClick:t[1]||(t[1]=d=>a("/consent")),hoverable:""},{default:p(()=>[y(" /consent")]),_:1}),b(o,{title:"设备码验证页面",onClick:t[2]||(t[2]=d=>a("/activate")),hoverable:""},{default:p(()=>[y(" /activate")]),_:1}),b(o,{title:"验证成功页面",onClick:t[3]||(t[3]=d=>a("/activated")),hoverable:""},{default:p(()=>[y(" /activated ")]),_:1}),Ie,b(o,{title:"授权码模式",onClick:t[4]||(t[4]=d=>a("/OAuth2Redirect")),hoverable:""},{default:p(()=>[y(" 发起授权码模式的授权申请 ")]),_:1}),b(o,{title:"PKCE模式",onClick:t[5]||(t[5]=d=>a("/PkceRedirect")),hoverable:""},{default:p(()=>[y(" 发起PKCE模式的授权申请 ")]),_:1}),V(r)?(P(),Y(o,{key:0,title:"Token展示",hoverable:""},{default:p(()=>[b(s,{"single-line":!1},{default:p(()=>[Le,m("tbody",null,[(P(!0),M(Z,null,ee(V(r),(d,c)=>(P(),M("tr",{key:c},[m("td",null,G(c),1),m("td",null,G(d),1)]))),128))])]),_:1})]),_:1})):oe("v-if",!0)]),_:1})])}}});const Ve=le(Ee,[["__scopeId","data-v-55f3c43f"],["__file","D:/OtherFiles/GitRepository/authorization-example/vue-login-page-example/src/views/index/Index.vue"]]);export{Ve as default};
