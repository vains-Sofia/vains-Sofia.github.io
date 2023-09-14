import{d as V,c as L,h as j,o as O,a as X,b as m,w as b,e as z,u as P,f as Y,g as i,t as $,i as Z,r as ee,p as oe,j as re,_ as te}from"./index-7e8ab6fb.js";import{i as ne,u as N,a as R,b as A,f as le,c as B,g as ae,d as G,e as de,h,j as l,k as I,l as w,m as ie,n as se,o as ce,p as pe,q as ue,_ as be}from"./discrete-d1a19c66.js";function ge(e,o="default",d=[]){const s=e.$slots[o];return s===void 0?d:s()}const me={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},he=()=>me,ve={name:"Space",self:he},fe=ve;let E;const xe=()=>{if(!ne)return!0;if(E===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),E=o}return E},_e=Object.assign(Object.assign({},R.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Ce=V({name:"Space",props:_e,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:d}=N(e),r=R("Space","-space",void 0,fe,e,o),s=A("Space",d,o);return{useGap:xe(),rtlEnabled:s,mergedClsPrefix:o,margin:L(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[B("gap",t)]:a}}=r.value,{row:n,col:c}=ae(a);return{horizontal:G(c),vertical:G(n)}})}},render(){const{vertical:e,align:o,inline:d,justify:r,itemStyle:s,margin:t,wrap:a,mergedClsPrefix:n,rtlEnabled:c,useGap:p,wrapItem:u,internalUseGap:k}=this,v=le(ge(this));if(!v.length)return null;const S=`${t.horizontal}px`,f=`${t.horizontal/2}px`,T=`${t.vertical}px`,x=`${t.vertical/2}px`,_=v.length-1,y=r.startsWith("space-");return j("div",{role:"none",class:[`${n}-space`,c&&`${n}-space--rtl`],style:{display:d?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!a||e?"nowrap":"wrap",marginTop:p||e?"":`-${x}`,marginBottom:p||e?"":`-${x}`,alignItems:o,gap:p?`${t.vertical}px ${t.horizontal}px`:""}},!u&&(p||k)?v:v.map((M,g)=>j("div",{role:"none",style:[s,{maxWidth:"100%"},p?"":e?{marginBottom:g!==_?T:""}:c?{marginLeft:y?r==="space-between"&&g===_?"":f:g!==_?S:"",marginRight:y?r==="space-between"&&g===0?"":f:"",paddingTop:x,paddingBottom:x}:{marginRight:y?r==="space-between"&&g===_?"":f:g!==_?S:"",marginLeft:y?r==="space-between"&&g===0?"":f:"",paddingTop:x,paddingBottom:x}]},M)))}}),Se={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},ye=e=>{const{dividerColor:o,cardColor:d,modalColor:r,popoverColor:s,tableHeaderColor:t,tableColorStriped:a,textColor1:n,textColor2:c,borderRadius:p,fontWeightStrong:u,lineHeight:k,fontSizeSmall:v,fontSizeMedium:S,fontSizeLarge:f}=e;return Object.assign(Object.assign({},Se),{fontSizeSmall:v,fontSizeMedium:S,fontSizeLarge:f,lineHeight:k,borderRadius:p,borderColor:h(d,o),borderColorModal:h(r,o),borderColorPopover:h(s,o),tdColor:d,tdColorModal:r,tdColorPopover:s,tdColorStriped:h(d,a),tdColorStripedModal:h(r,a),tdColorStripedPopover:h(s,a),thColor:h(d,t),thColorModal:h(r,t),thColorPopover:h(s,t),thTextColor:n,tdTextColor:c,thFontWeight:u})},ze={name:"Table",common:de,self:ye},ke=ze,Pe=l([I("table",`
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
 `,[l("th",`
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
 `,[l("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),l("td",`
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
 `,[l("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),w("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[l("tr",[l("&:last-child",[l("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),w("single-line",[l("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),l("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),w("single-column",[l("tr",[l("&:not(:last-child)",[l("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),w("striped",[l("tr:nth-of-type(even)",[l("td","background-color: var(--n-td-color-striped)")])]),ie("bottom-bordered",[l("tr",[l("&:last-child",[l("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),se(I("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[l("th",`
 background-color: var(--n-th-color-modal);
 `),l("td",`
 background-color: var(--n-td-color-modal);
 `)])),ce(I("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[l("th",`
 background-color: var(--n-th-color-popover);
 `),l("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),$e=Object.assign(Object.assign({},R.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),we=V({name:"Table",props:$e,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:d,mergedRtlRef:r}=N(e),s=R("Table","-table",Pe,ke,e,o),t=A("Table",r,o),a=L(()=>{const{size:c}=e,{self:{borderColor:p,tdColor:u,tdColorModal:k,tdColorPopover:v,thColor:S,thColorModal:f,thColorPopover:T,thTextColor:x,tdTextColor:_,borderRadius:y,thFontWeight:M,lineHeight:g,borderColorModal:D,borderColorPopover:H,tdColorStriped:W,tdColorStripedModal:F,tdColorStripedPopover:K,[B("fontSize",c)]:J,[B("tdPadding",c)]:U,[B("thPadding",c)]:q},common:{cubicBezierEaseInOut:Q}}=s.value;return{"--n-bezier":Q,"--n-td-color":u,"--n-td-color-modal":k,"--n-td-color-popover":v,"--n-td-text-color":_,"--n-border-color":p,"--n-border-color-modal":D,"--n-border-color-popover":H,"--n-border-radius":y,"--n-font-size":J,"--n-th-color":S,"--n-th-color-modal":f,"--n-th-color-popover":T,"--n-th-font-weight":M,"--n-th-text-color":x,"--n-line-height":g,"--n-td-padding":U,"--n-th-padding":q,"--n-td-color-striped":W,"--n-td-color-striped-modal":F,"--n-td-color-striped-popover":K}}),n=d?pe("table",L(()=>e.size[0]),a,e):void 0;return{rtlEnabled:t,mergedClsPrefix:o,cssVars:d?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),j("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),C=e=>(oe("data-v-55f3c43f"),e=e(),re(),e),Be={class:"welcome"},Re=C(()=>i("b",null,"Spring Authorization Server 前后端分离示例项目",-1)),Te=C(()=>i("br",null,null,-1)),Me=C(()=>i("thead",null,[i("tr",null,[i("th",{style:{width:"105px"}},"Key"),i("th",null,"Value")])],-1)),Ie=C(()=>i("td",null,"Scope",-1)),Ee=C(()=>i("td",null,"TokenType",-1)),Le=C(()=>i("td",null,"ExpiresIn",-1)),je=C(()=>i("td",null,"AccessToken",-1)),Ve=V({__name:"Index",setup(e){const{message:o}=ue(["message"]),d=JSON.parse(String(localStorage.getItem("accessToken"))),r=t=>{ee.push({path:t})},s=()=>{o.info("待开发")};return(t,a)=>{const n=be,c=we,p=Ce;return O(),X("div",Be,[m(n,{class:"navbar"},{default:b(()=>[Re]),_:1}),m(p,{class:"features"},{default:b(()=>[m(n,{title:"登录页面",onClick:a[0]||(a[0]=u=>r("/login")),hoverable:""},{default:b(()=>[z(" /login ")]),_:1}),m(n,{title:"授权确认页面",onClick:a[1]||(a[1]=u=>r("/consent")),hoverable:""},{default:b(()=>[z(" /consent")]),_:1}),m(n,{title:"设备码验证页面",onClick:a[2]||(a[2]=u=>r("/activate")),hoverable:""},{default:b(()=>[z(" /activate")]),_:1}),m(n,{title:"验证成功页面",onClick:a[3]||(a[3]=u=>r("/activated")),hoverable:""},{default:b(()=>[z(" /activated ")]),_:1}),Te,m(n,{title:"授权码模式",onClick:s,hoverable:""},{default:b(()=>[z(" 发起授权码模式的授权申请 ")]),_:1}),m(n,{title:"PKCE模式",onClick:a[4]||(a[4]=u=>r("/oauth2Redirect")),hoverable:""},{default:b(()=>[z(" 发起PKCE模式的授权申请 ")]),_:1}),P(d)?(O(),Y(n,{key:0,title:"Token展示",hoverable:""},{default:b(()=>[m(c,{"single-line":!1},{default:b(()=>[Me,i("tbody",null,[i("tr",null,[Ie,i("td",null,$(P(d).scope),1)]),i("tr",null,[Ee,i("td",null,$(P(d).token_type),1)]),i("tr",null,[Le,i("td",null,$(P(d).expires_in),1)]),i("tr",null,[je,i("td",null,$(P(d).access_token),1)])])]),_:1})]),_:1})):Z("v-if",!0)]),_:1})])}}});const Ne=te(Ve,[["__scopeId","data-v-55f3c43f"],["__file","D:/OtherFiles/GitRepository/vains-Sofia-login/src/views/index/Index.vue"]]);export{Ne as default};
