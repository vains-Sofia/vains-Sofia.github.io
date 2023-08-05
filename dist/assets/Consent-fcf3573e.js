import{_ as Ie,a as Be}from"./HelloWorld-0f1b1313.js";import{_ as Me}from"./logo-db47c297.js";import{P as Q,at as Ee,Y as K,au as te,a5 as ae,c as le,a8 as C,Q as p,R as d,V as f,W as z,av as je,aw as ie,ax as ce,u as Oe,Z as j,ay as Y,an as X,$ as Z,az as Ae,aA as Fe,o as He,ac as N,ah as Le,aB as Ve,ap as Ne,aq as ee,ar as Ue,as as Ke}from"./axios-a6aa4852.js";import{h as a,d as O,r as M,c as E,p as de,t as U,i as se,F as q,q as V,s as oe,u as D,x as T,E as G,y as S,B as re,A as B,G as ne,H as We,C as Ge,D as qe}from"./index-72211ef4.js";const Qe={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Ye=e=>{const{baseColor:o,inputColorDisabled:n,cardColor:c,modalColor:h,popoverColor:b,textColorDisabled:m,borderColor:i,primaryColor:r,textColor2:t,fontSizeSmall:l,fontSizeMedium:g,fontSizeLarge:u,borderRadiusSmall:x,lineHeight:k}=e;return Object.assign(Object.assign({},Qe),{labelLineHeight:k,fontSizeSmall:l,fontSizeMedium:g,fontSizeLarge:u,borderRadius:x,color:o,colorChecked:r,colorDisabled:n,colorDisabledChecked:n,colorTableHeader:c,colorTableHeaderModal:h,colorTableHeaderPopover:b,checkMarkColor:o,checkMarkColorDisabled:m,checkMarkColorDisabledChecked:m,border:`1px solid ${i}`,borderDisabled:`1px solid ${i}`,borderDisabledChecked:`1px solid ${i}`,borderChecked:`1px solid ${r}`,borderFocus:`1px solid ${r}`,boxShadowFocus:`0 0 0 2px ${Ee(r,{alpha:.3})}`,textColor:t,textColorDisabled:m})},Ze={name:"Checkbox",common:Q,self:Ye},Je=Ze,Xe=a("svg",{viewBox:"0 0 64 64",class:"check-icon"},a("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),eo=a("svg",{viewBox:"0 0 100 100",class:"line-icon"},a("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),ue=le("n-checkbox-group"),oo={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},ro=O({name:"CheckboxGroup",props:oo,setup(e){const{mergedClsPrefixRef:o}=K(e),n=te(e),{mergedSizeRef:c,mergedDisabledRef:h}=n,b=M(e.defaultValue),m=E(()=>e.value),i=ae(m,b),r=E(()=>{var g;return((g=i.value)===null||g===void 0?void 0:g.length)||0}),t=E(()=>Array.isArray(i.value)?new Set(i.value):new Set);function l(g,u){const{nTriggerFormInput:x,nTriggerFormChange:k}=n,{onChange:y,"onUpdate:value":w,onUpdateValue:_}=e;if(Array.isArray(i.value)){const v=Array.from(i.value),P=v.findIndex(A=>A===u);g?~P||(v.push(u),_&&C(_,v,{actionType:"check",value:u}),w&&C(w,v,{actionType:"check",value:u}),x(),k(),b.value=v,y&&C(y,v)):~P&&(v.splice(P,1),_&&C(_,v,{actionType:"uncheck",value:u}),w&&C(w,v,{actionType:"uncheck",value:u}),y&&C(y,v),b.value=v,x(),k())}else g?(_&&C(_,[u],{actionType:"check",value:u}),w&&C(w,[u],{actionType:"check",value:u}),y&&C(y,[u]),b.value=[u],x(),k()):(_&&C(_,[],{actionType:"uncheck",value:u}),w&&C(w,[],{actionType:"uncheck",value:u}),y&&C(y,[]),b.value=[],x(),k())}return de(ue,{checkedCountRef:r,maxRef:U(e,"max"),minRef:U(e,"min"),valueSetRef:t,disabledRef:h,mergedSizeRef:c,toggleCheckbox:l}),{mergedClsPrefix:o}},render(){return a("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),no=p([d("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[p("&:hover",[d("checkbox-box",[f("border",{border:"var(--n-border-checked)"})])]),p("&:focus:not(:active)",[d("checkbox-box",[f("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),z("inside-table",[d("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),z("checked",[d("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[d("checkbox-icon",[p(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),z("indeterminate",[d("checkbox-box",[d("checkbox-icon",[p(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),p(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),z("checked, indeterminate",[p("&:focus:not(:active)",[d("checkbox-box",[f("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[f("border",{border:"var(--n-border-checked)"})])]),z("disabled",{cursor:"not-allowed"},[z("checked",[d("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[f("border",{border:"var(--n-border-disabled-checked)"}),d("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),d("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[f("border",{border:"var(--n-border-disabled)"}),d("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),f("label",{color:"var(--n-text-color-disabled)"})]),d("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),d("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[f("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),d("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[p(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),je({left:"1px",top:"1px"})])]),f("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[p("&:empty",{display:"none"})])]),ie(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ce(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),to=Object.assign(Object.assign({},j.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),ao=O({name:"Checkbox",props:to,setup(e){const o=M(null),{mergedClsPrefixRef:n,inlineThemeDisabled:c,mergedRtlRef:h}=K(e),b=te(e,{mergedSize(s){const{size:R}=e;if(R!==void 0)return R;if(r){const{value:$}=r.mergedSizeRef;if($!==void 0)return $}if(s){const{mergedSize:$}=s;if($!==void 0)return $.value}return"medium"},mergedDisabled(s){const{disabled:R}=e;if(R!==void 0)return R;if(r){if(r.disabledRef.value)return!0;const{maxRef:{value:$},checkedCountRef:I}=r;if($!==void 0&&I.value>=$&&!u.value)return!0;const{minRef:{value:H}}=r;if(H!==void 0&&I.value<=H&&u.value)return!0}return s?s.disabled.value:!1}}),{mergedDisabledRef:m,mergedSizeRef:i}=b,r=se(ue,null),t=M(e.defaultChecked),l=U(e,"checked"),g=ae(l,t),u=Oe(()=>{if(r){const s=r.valueSetRef.value;return s&&e.value!==void 0?s.has(e.value):!1}else return g.value===e.checkedValue}),x=j("Checkbox","-checkbox",no,Je,e,n);function k(s){if(r&&e.value!==void 0)r.toggleCheckbox(!u.value,e.value);else{const{onChange:R,"onUpdate:checked":$,onUpdateChecked:I}=e,{nTriggerFormInput:H,nTriggerFormChange:W}=b,L=u.value?e.uncheckedValue:e.checkedValue;$&&C($,L,s),I&&C(I,L,s),R&&C(R,L,s),H(),W(),t.value=L}}function y(s){m.value||k(s)}function w(s){if(!m.value)switch(s.key){case" ":case"Enter":k(s)}}function _(s){switch(s.key){case" ":s.preventDefault()}}const v={focus:()=>{var s;(s=o.value)===null||s===void 0||s.focus()},blur:()=>{var s;(s=o.value)===null||s===void 0||s.blur()}},P=Y("Checkbox",h,n),A=E(()=>{const{value:s}=i,{common:{cubicBezierEaseInOut:R},self:{borderRadius:$,color:I,colorChecked:H,colorDisabled:W,colorTableHeader:L,colorTableHeaderModal:be,colorTableHeaderPopover:ve,checkMarkColor:fe,checkMarkColorDisabled:me,border:ge,borderFocus:pe,borderDisabled:xe,borderChecked:ke,boxShadowFocus:_e,textColor:Ce,textColorDisabled:ye,checkMarkColorDisabledChecked:we,colorDisabledChecked:$e,borderDisabledChecked:ze,labelPadding:Re,labelLineHeight:Se,labelFontWeight:Te,[X("fontSize",s)]:De,[X("size",s)]:Pe}}=x.value;return{"--n-label-line-height":Se,"--n-label-font-weight":Te,"--n-size":Pe,"--n-bezier":R,"--n-border-radius":$,"--n-border":ge,"--n-border-checked":ke,"--n-border-focus":pe,"--n-border-disabled":xe,"--n-border-disabled-checked":ze,"--n-box-shadow-focus":_e,"--n-color":I,"--n-color-checked":H,"--n-color-table":L,"--n-color-table-modal":be,"--n-color-table-popover":ve,"--n-color-disabled":W,"--n-color-disabled-checked":$e,"--n-text-color":Ce,"--n-text-color-disabled":ye,"--n-check-mark-color":fe,"--n-check-mark-color-disabled":me,"--n-check-mark-color-disabled-checked":we,"--n-font-size":De,"--n-label-padding":Re}}),F=c?Z("checkbox",E(()=>i.value[0]),A,e):void 0;return Object.assign(b,v,{rtlEnabled:P,selfRef:o,mergedClsPrefix:n,mergedDisabled:m,renderedChecked:u,mergedTheme:x,labelId:Ae(),handleClick:y,handleKeyUp:w,handleKeyDown:_,cssVars:c?void 0:A,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var e;const{$slots:o,renderedChecked:n,mergedDisabled:c,indeterminate:h,privateInsideTable:b,cssVars:m,labelId:i,label:r,mergedClsPrefix:t,focusable:l,handleKeyUp:g,handleKeyDown:u,handleClick:x}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{ref:"selfRef",class:[`${t}-checkbox`,this.themeClass,this.rtlEnabled&&`${t}-checkbox--rtl`,n&&`${t}-checkbox--checked`,c&&`${t}-checkbox--disabled`,h&&`${t}-checkbox--indeterminate`,b&&`${t}-checkbox--inside-table`],tabindex:c||!l?void 0:0,role:"checkbox","aria-checked":h?"mixed":n,"aria-labelledby":i,style:m,onKeyup:g,onKeydown:u,onClick:x,onMousedown:()=>{He("selectstart",window,k=>{k.preventDefault()},{once:!0})}},a("div",{class:`${t}-checkbox-box-wrapper`}," ",a("div",{class:`${t}-checkbox-box`},a(Fe,null,{default:()=>this.indeterminate?a("div",{key:"indeterminate",class:`${t}-checkbox-icon`},eo):a("div",{key:"check",class:`${t}-checkbox-icon`},Xe)}),a("div",{class:`${t}-checkbox-box__border`}))),r!==null||o.default?a("span",{class:`${t}-checkbox__label`,id:i},o.default?o.default():r):null)}}),lo=e=>{const{textColor2:o,cardColor:n,modalColor:c,popoverColor:h,dividerColor:b,borderRadius:m,fontSize:i,hoverColor:r}=e;return{textColor:o,color:n,colorHover:r,colorModal:c,colorHoverModal:N(c,r),colorPopover:h,colorHoverPopover:N(h,r),borderColor:b,borderColorModal:N(c,b),borderColorPopover:N(h,b),borderRadius:m,fontSize:i}},io={name:"List",common:Q,self:lo},co=io,so=e=>{const{textColor1:o,textColor2:n,fontWeightStrong:c,fontSize:h}=e;return{fontSize:h,titleTextColor:o,textColor:n,titleFontWeight:c}},uo={name:"Thing",common:Q,self:so},ho=uo,bo=p([d("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[z("show-divider",[d("list-item",[p("&:not(:last-child)",[f("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),z("clickable",[d("list-item",`
 cursor: pointer;
 `)]),z("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),z("hoverable",[d("list-item",`
 border-radius: var(--n-border-radius);
 `,[p("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[f("divider",`
 background-color: transparent;
 `)])])]),z("bordered, hoverable",[d("list-item",`
 padding: 12px 20px;
 `),f("header, footer",`
 padding: 12px 20px;
 `)]),f("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),d("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("prefix",`
 margin-right: 20px;
 flex: 0;
 `),f("suffix",`
 margin-left: 20px;
 flex: 0;
 `),f("main",`
 flex: 1;
 `),f("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ie(d("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ce(d("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),vo=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),he=le("n-list"),fo=O({name:"List",props:vo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:c}=K(e),h=Y("List",c,o),b=j("List","-list",bo,co,e,o);de(he,{showDividerRef:U(e,"showDivider"),mergedClsPrefixRef:o});const m=E(()=>{const{common:{cubicBezierEaseInOut:r},self:{fontSize:t,textColor:l,color:g,colorModal:u,colorPopover:x,borderColor:k,borderColorModal:y,borderColorPopover:w,borderRadius:_,colorHover:v,colorHoverModal:P,colorHoverPopover:A}}=b.value;return{"--n-font-size":t,"--n-bezier":r,"--n-text-color":l,"--n-color":g,"--n-border-radius":_,"--n-border-color":k,"--n-border-color-modal":y,"--n-border-color-popover":w,"--n-color-modal":u,"--n-color-popover":x,"--n-color-hover":v,"--n-color-hover-modal":P,"--n-color-hover-popover":A}}),i=n?Z("list",void 0,m,e):void 0;return{mergedClsPrefix:o,rtlEnabled:h,cssVars:n?void 0:m,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:n,onRender:c}=this;return c==null||c(),a("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},o.header?a("div",{class:`${n}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?a("div",{class:`${n}-list__footer`},o.footer()):null)}}),mo=O({name:"ListItem",setup(){const e=se(he,null);return e||Le("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return a("li",{class:`${o}-list-item`},e.prefix?a("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?a("div",{class:`${o}-list-item__main`},e):null,e.suffix?a("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&a("div",{class:`${o}-list-item__divider`}))}}),go=Object.assign(Object.assign({},j.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),po=O({name:"Scrollbar",props:go,setup(){const e=M(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var c;(c=e.value)===null||c===void 0||c.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var c;(c=e.value)===null||c===void 0||c.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return a(Ve,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),xo=po,ko=d("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[d("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),d("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[d("thing-header-wrapper",`
 flex: 1;
 `)]),d("thing-main",`
 flex-grow: 1;
 `,[d("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[f("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),f("description",[p("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),f("content",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),f("footer",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),f("action",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),_o=Object.assign(Object.assign({},j.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),Co=O({name:"Thing",props:_o,setup(e,{slots:o}){const{mergedClsPrefixRef:n,inlineThemeDisabled:c,mergedRtlRef:h}=K(e),b=j("Thing","-thing",ko,ho,e,n),m=Y("Thing",h,n),i=E(()=>{const{self:{titleTextColor:t,textColor:l,titleFontWeight:g,fontSize:u},common:{cubicBezierEaseInOut:x}}=b.value;return{"--n-bezier":x,"--n-font-size":u,"--n-text-color":l,"--n-title-font-weight":g,"--n-title-text-color":t}}),r=c?Z("thing",void 0,i,e):void 0;return()=>{var t;const{value:l}=n,g=m?m.value:!1;return(t=r==null?void 0:r.onRender)===null||t===void 0||t.call(r),a("div",{class:[`${l}-thing`,r==null?void 0:r.themeClass,g&&`${l}-thing--rtl`],style:c?void 0:i.value},o.avatar&&e.contentIndented?a("div",{class:`${l}-thing-avatar`},o.avatar()):null,a("div",{class:`${l}-thing-main`},!e.contentIndented&&(o.header||e.title||o["header-extra"]||e.titleExtra||o.avatar)?a("div",{class:`${l}-thing-avatar-header-wrapper`},o.avatar?a("div",{class:`${l}-thing-avatar`},o.avatar()):null,o.header||e.title||o["header-extra"]||e.titleExtra?a("div",{class:`${l}-thing-header-wrapper`},a("div",{class:`${l}-thing-header`},o.header||e.title?a("div",{class:`${l}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?a("div",{class:`${l}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null),o.description||e.description?a("div",{class:`${l}-thing-main__description`,style:e.descriptionStyle},o.description?o.description():e.description):null):null):a(q,null,o.header||e.title||o["header-extra"]||e.titleExtra?a("div",{class:`${l}-thing-header`},o.header||e.title?a("div",{class:`${l}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?a("div",{class:`${l}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null):null,o.description||e.description?a("div",{class:`${l}-thing-main__description`,style:e.descriptionStyle},o.description?o.description():e.description):null),o.default||e.content?a("div",{class:`${l}-thing-main__content`,style:e.contentStyle},o.default?o.default():e.content):null,o.footer?a("div",{class:`${l}-thing-main__footer`},o.footer()):null,o.action?a("div",{class:`${l}-thing-main__action`},o.action()):null))}}}),J=e=>(Ge("data-v-1e034c16"),e=e(),qe(),e),yo=J(()=>D("img",{alt:"Vue logo",class:"logo",src:Me,width:"125",height:"125"},null,-1)),wo={class:"wrapper"},$o=J(()=>D("br",null,null,-1)),zo=J(()=>D("br",null,null,-1)),Ro=O({__name:"Consent",setup(e){const{message:o}=Ne(["message"]),n=M(),c=M(),h=M();ee({method:"GET",url:`https://oauth.flow-cloud.love/oauth2/consent/parameters${window.location.search}`}).then(i=>{let r=i.data;r.success?(n.value=r.data,c.value=[...r.data.previouslyApprovedScopes,...r.data.scopes],h.value=r.data.previouslyApprovedScopes.map(t=>t.scope)):o.warning(r.message)}).catch(i=>o.error(i.message));const b=i=>{const r=new FormData;i||h.value!==null&&typeof h.value<"u"&&h.value.length>0&&h.value.forEach(t=>r.append("scope",t)),r.append("state",n.value.state),r.append("client_id",n.value.clientId),r.append("user_code",n.value.userCode),ee({method:"POST",data:new URLSearchParams(r),headers:{nonceId:m("nonceId"),"Content-Type":"application/x-www-form-urlencoded"},url:`https://oauth.flow-cloud.love${n.value.requestURI}`}).then(t=>{let l=t.data;l.success?window.location.href=l.data:l.message&&l.message.indexOf("access_denied")>-1?o.warning("您未选择scope或拒绝了本次授权申请."):o.warning(l.message)}).catch(t=>o.error(t.message))};function m(i){var r=new RegExp("(^|&)"+i+"=([^&]*)(&|$)","i"),t=window.location.search.substr(1).match(r);return t!=null?unescape(t[2]):null}return(i,r)=>{const t=Ie,l=Ue,g=ao,u=Co,x=mo,k=fo,y=ro,w=xo,_=Ke;return V(),oe(q,null,[D("header",null,[yo,D("div",wo,[T(t,{msg:"OAuth 授权请求"})])]),D("main",null,[n.value&&n.value.userCode?(V(),G(l,{key:0},{default:S(()=>[B(" 您已经提供了代码 "),D("b",null,ne(n.value.userCode),1),B(" ，请验证此代码是否与设备上显示的代码匹配。 ")]),_:1})):re("",!0),$o,n.value?(V(),G(l,{key:1,title:`${n.value.clientName} 客户端`},{"header-extra":S(()=>[B(" 账号： "),D("b",null,ne(n.value.principalName),1)]),default:S(()=>[B(" 此第三方应用请求获得以下权限 ")]),_:1},8,["title"])):re("",!0),T(w,{style:{"max-height":"230px"}},{default:S(()=>[T(y,{value:h.value,"onUpdate:value":r[0]||(r[0]=v=>h.value=v)},{default:S(()=>[T(k,null,{default:S(()=>[(V(!0),oe(q,null,We(c.value,v=>(V(),G(x,null,{prefix:S(()=>[T(g,{value:v.scope},null,8,["value"])]),default:S(()=>[T(u,{title:v.scope,description:v.description},null,8,["title","description"])]),_:2},1024))),256))]),_:1})]),_:1},8,["value"])]),_:1}),zo,T(_,{type:"info",onClick:r[1]||(r[1]=v=>b(!1)),strong:""},{default:S(()=>[B("     确    定     ")]),_:1}),B("      "),T(_,{type:"warning",onClick:r[2]||(r[2]=v=>b(!0))},{default:S(()=>[B("     拒    绝     ")]),_:1})])],64)}}});const Io=Be(Ro,[["__scopeId","data-v-1e034c16"]]);export{Io as default};
