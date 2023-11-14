import{_ as Pe}from"./HelloWorld-8b7913f8.js";import{_ as Ie}from"./logo-67932c20.js";import{x as ne,y as Be,u as Me,A as je,N as Ee,o as Ae,B as Fe,q as Oe,C as He,D as Le,s as Ne,_ as Ue}from"./Login-dfc7f148.js";import{e as Q,a8 as Ve,u as K,q as te,$ as C,j as p,k as d,W as g,l as z,n as ae,o as le,a as E,b as Y,c as Z,p as J,h as U,a5 as Ke,_ as We}from"./Card-09e91a9d.js";import{h as l,d as A,q as P,c as j,s as ie,z as V,n as ce,F as G,o as N,a as ee,g as D,b as T,f as q,w as R,i as oe,e as M,t as re,r as qe,p as Ge,k as Qe}from"./index-6033af98.js";import{u as de}from"./use-merged-state-ea7a8607.js";import{_ as Ye}from"./_plugin-vue_export-helper-c27b6911.js";const Je={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Xe=e=>{const{baseColor:o,inputColorDisabled:r,cardColor:i,modalColor:b,popoverColor:h,textColorDisabled:f,borderColor:t,primaryColor:n,textColor2:a,fontSizeSmall:c,fontSizeMedium:m,fontSizeLarge:u,borderRadiusSmall:x,lineHeight:k}=e;return Object.assign(Object.assign({},Je),{labelLineHeight:k,fontSizeSmall:c,fontSizeMedium:m,fontSizeLarge:u,borderRadius:x,color:o,colorChecked:n,colorDisabled:r,colorDisabledChecked:r,colorTableHeader:i,colorTableHeaderModal:b,colorTableHeaderPopover:h,checkMarkColor:o,checkMarkColorDisabled:f,checkMarkColorDisabledChecked:f,border:`1px solid ${t}`,borderDisabled:`1px solid ${t}`,borderDisabledChecked:`1px solid ${t}`,borderChecked:`1px solid ${n}`,borderFocus:`1px solid ${n}`,boxShadowFocus:`0 0 0 2px ${Ve(n,{alpha:.3})}`,textColor:a,textColorDisabled:f})},Ze={name:"Checkbox",common:Q,self:Xe},eo=Ze,oo=l("svg",{viewBox:"0 0 64 64",class:"check-icon"},l("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ro=l("svg",{viewBox:"0 0 100 100",class:"line-icon"},l("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),se=te("n-checkbox-group"),no={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},to=A({name:"CheckboxGroup",props:no,setup(e){const{mergedClsPrefixRef:o}=K(e),r=ne(e),{mergedSizeRef:i,mergedDisabledRef:b}=r,h=P(e.defaultValue),f=j(()=>e.value),t=de(f,h),n=j(()=>{var m;return((m=t.value)===null||m===void 0?void 0:m.length)||0}),a=j(()=>Array.isArray(t.value)?new Set(t.value):new Set);function c(m,u){const{nTriggerFormInput:x,nTriggerFormChange:k}=r,{onChange:y,"onUpdate:value":w,onUpdateValue:_}=e;if(Array.isArray(t.value)){const v=Array.from(t.value),I=v.findIndex(F=>F===u);m?~I||(v.push(u),_&&C(_,v,{actionType:"check",value:u}),w&&C(w,v,{actionType:"check",value:u}),x(),k(),h.value=v,y&&C(y,v)):~I&&(v.splice(I,1),_&&C(_,v,{actionType:"uncheck",value:u}),w&&C(w,v,{actionType:"uncheck",value:u}),y&&C(y,v),h.value=v,x(),k())}else m?(_&&C(_,[u],{actionType:"check",value:u}),w&&C(w,[u],{actionType:"check",value:u}),y&&C(y,[u]),h.value=[u],x(),k()):(_&&C(_,[],{actionType:"uncheck",value:u}),w&&C(w,[],{actionType:"uncheck",value:u}),y&&C(y,[]),h.value=[],x(),k())}return ie(se,{checkedCountRef:n,maxRef:V(e,"max"),minRef:V(e,"min"),valueSetRef:a,disabledRef:b,mergedSizeRef:i,toggleCheckbox:c}),{mergedClsPrefix:o}},render(){return l("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),ao=p([d("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[p("&:hover",[d("checkbox-box",[g("border",{border:"var(--n-border-checked)"})])]),p("&:focus:not(:active)",[d("checkbox-box",[g("border",`
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
 `)])])]),z("checked, indeterminate",[p("&:focus:not(:active)",[d("checkbox-box",[g("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),d("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[g("border",{border:"var(--n-border-checked)"})])]),z("disabled",{cursor:"not-allowed"},[z("checked",[d("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[g("border",{border:"var(--n-border-disabled-checked)"}),d("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),d("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[g("border",{border:"var(--n-border-disabled)"}),d("checkbox-icon",[p(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),g("label",{color:"var(--n-text-color-disabled)"})]),d("checkbox-box-wrapper",`
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
 `,[g("border",`
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
 `),Be({left:"1px",top:"1px"})])]),g("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[p("&:empty",{display:"none"})])]),ae(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),le(d("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),lo=Object.assign(Object.assign({},E.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),io=A({name:"Checkbox",props:lo,setup(e){const o=P(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:b}=K(e),h=ne(e,{mergedSize(s){const{size:S}=e;if(S!==void 0)return S;if(n){const{value:$}=n.mergedSizeRef;if($!==void 0)return $}if(s){const{mergedSize:$}=s;if($!==void 0)return $.value}return"medium"},mergedDisabled(s){const{disabled:S}=e;if(S!==void 0)return S;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:$},checkedCountRef:B}=n;if($!==void 0&&B.value>=$&&!u.value)return!0;const{minRef:{value:H}}=n;if(H!==void 0&&B.value<=H&&u.value)return!0}return s?s.disabled.value:!1}}),{mergedDisabledRef:f,mergedSizeRef:t}=h,n=ce(se,null),a=P(e.defaultChecked),c=V(e,"checked"),m=de(c,a),u=Me(()=>{if(n){const s=n.valueSetRef.value;return s&&e.value!==void 0?s.has(e.value):!1}else return m.value===e.checkedValue}),x=E("Checkbox","-checkbox",ao,eo,e,r);function k(s){if(n&&e.value!==void 0)n.toggleCheckbox(!u.value,e.value);else{const{onChange:S,"onUpdate:checked":$,onUpdateChecked:B}=e,{nTriggerFormInput:H,nTriggerFormChange:W}=h,L=u.value?e.uncheckedValue:e.checkedValue;$&&C($,L,s),B&&C(B,L,s),S&&C(S,L,s),H(),W(),a.value=L}}function y(s){f.value||k(s)}function w(s){if(!f.value)switch(s.key){case" ":case"Enter":k(s)}}function _(s){switch(s.key){case" ":s.preventDefault()}}const v={focus:()=>{var s;(s=o.value)===null||s===void 0||s.focus()},blur:()=>{var s;(s=o.value)===null||s===void 0||s.blur()}},I=Y("Checkbox",b,r),F=j(()=>{const{value:s}=t,{common:{cubicBezierEaseInOut:S},self:{borderRadius:$,color:B,colorChecked:H,colorDisabled:W,colorTableHeader:L,colorTableHeaderModal:be,colorTableHeaderPopover:he,checkMarkColor:ve,checkMarkColorDisabled:fe,border:ge,borderFocus:me,borderDisabled:pe,borderChecked:xe,boxShadowFocus:ke,textColor:_e,textColorDisabled:Ce,checkMarkColorDisabledChecked:ye,colorDisabledChecked:we,borderDisabledChecked:$e,labelPadding:ze,labelLineHeight:Se,labelFontWeight:Re,[Z("fontSize",s)]:Te,[Z("size",s)]:De}}=x.value;return{"--n-label-line-height":Se,"--n-label-font-weight":Re,"--n-size":De,"--n-bezier":S,"--n-border-radius":$,"--n-border":ge,"--n-border-checked":xe,"--n-border-focus":me,"--n-border-disabled":pe,"--n-border-disabled-checked":$e,"--n-box-shadow-focus":ke,"--n-color":B,"--n-color-checked":H,"--n-color-table":L,"--n-color-table-modal":be,"--n-color-table-popover":he,"--n-color-disabled":W,"--n-color-disabled-checked":we,"--n-text-color":_e,"--n-text-color-disabled":Ce,"--n-check-mark-color":ve,"--n-check-mark-color-disabled":fe,"--n-check-mark-color-disabled-checked":ye,"--n-font-size":Te,"--n-label-padding":ze}}),O=i?J("checkbox",j(()=>t.value[0]),F,e):void 0;return Object.assign(h,v,{rtlEnabled:I,selfRef:o,mergedClsPrefix:r,mergedDisabled:f,renderedChecked:u,mergedTheme:x,labelId:je(),handleClick:y,handleKeyUp:w,handleKeyDown:_,cssVars:i?void 0:F,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender})},render(){var e;const{$slots:o,renderedChecked:r,mergedDisabled:i,indeterminate:b,privateInsideTable:h,cssVars:f,labelId:t,label:n,mergedClsPrefix:a,focusable:c,handleKeyUp:m,handleKeyDown:u,handleClick:x}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,r&&`${a}-checkbox--checked`,i&&`${a}-checkbox--disabled`,b&&`${a}-checkbox--indeterminate`,h&&`${a}-checkbox--inside-table`],tabindex:i||!c?void 0:0,role:"checkbox","aria-checked":b?"mixed":r,"aria-labelledby":t,style:f,onKeyup:m,onKeydown:u,onClick:x,onMousedown:()=>{Ae("selectstart",window,k=>{k.preventDefault()},{once:!0})}},l("div",{class:`${a}-checkbox-box-wrapper`}," ",l("div",{class:`${a}-checkbox-box`},l(Ee,null,{default:()=>this.indeterminate?l("div",{key:"indeterminate",class:`${a}-checkbox-icon`},ro):l("div",{key:"check",class:`${a}-checkbox-icon`},oo)}),l("div",{class:`${a}-checkbox-box__border`}))),n!==null||o.default?l("span",{class:`${a}-checkbox__label`,id:t},o.default?o.default():n):null)}}),co=e=>{const{textColor2:o,cardColor:r,modalColor:i,popoverColor:b,dividerColor:h,borderRadius:f,fontSize:t,hoverColor:n}=e;return{textColor:o,color:r,colorHover:n,colorModal:i,colorHoverModal:U(i,n),colorPopover:b,colorHoverPopover:U(b,n),borderColor:h,borderColorModal:U(i,h),borderColorPopover:U(b,h),borderRadius:f,fontSize:t}},so={name:"List",common:Q,self:co},uo=so,bo=e=>{const{textColor1:o,textColor2:r,fontWeightStrong:i,fontSize:b}=e;return{fontSize:b,titleTextColor:o,textColor:r,titleFontWeight:i}},ho={name:"Thing",common:Q,self:bo},vo=ho,fo=p([d("list",`
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
 `,[z("show-divider",[d("list-item",[p("&:not(:last-child)",[g("divider",`
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
 `,[g("divider",`
 background-color: transparent;
 `)])])]),z("bordered, hoverable",[d("list-item",`
 padding: 12px 20px;
 `),g("header, footer",`
 padding: 12px 20px;
 `)]),g("header, footer",`
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
 `,[g("prefix",`
 margin-right: 20px;
 flex: 0;
 `),g("suffix",`
 margin-left: 20px;
 flex: 0;
 `),g("main",`
 flex: 1;
 `),g("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ae(d("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),le(d("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),go=Object.assign(Object.assign({},E.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),ue=te("n-list"),mo=A({name:"List",props:go,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:i}=K(e),b=Y("List",i,o),h=E("List","-list",fo,uo,e,o);ie(ue,{showDividerRef:V(e,"showDivider"),mergedClsPrefixRef:o});const f=j(()=>{const{common:{cubicBezierEaseInOut:n},self:{fontSize:a,textColor:c,color:m,colorModal:u,colorPopover:x,borderColor:k,borderColorModal:y,borderColorPopover:w,borderRadius:_,colorHover:v,colorHoverModal:I,colorHoverPopover:F}}=h.value;return{"--n-font-size":a,"--n-bezier":n,"--n-text-color":c,"--n-color":m,"--n-border-radius":_,"--n-border-color":k,"--n-border-color-modal":y,"--n-border-color-popover":w,"--n-color-modal":u,"--n-color-popover":x,"--n-color-hover":v,"--n-color-hover-modal":I,"--n-color-hover-popover":F}}),t=r?J("list",void 0,f,e):void 0;return{mergedClsPrefix:o,rtlEnabled:b,cssVars:r?void 0:f,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:r,onRender:i}=this;return i==null||i(),l("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},o.header?l("div",{class:`${r}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?l("div",{class:`${r}-list__footer`},o.footer()):null)}}),po=A({name:"ListItem",setup(){const e=ce(ue,null);return e||Ke("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return l("li",{class:`${o}-list-item`},e.prefix?l("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?l("div",{class:`${o}-list-item__main`},e):null,e.suffix?l("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&l("div",{class:`${o}-list-item__divider`}))}}),xo=Object.assign(Object.assign({},E.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),ko=A({name:"Scrollbar",props:xo,setup(){const e=P(null);return Object.assign(Object.assign({},{scrollTo:(...r)=>{var i;(i=e.value)===null||i===void 0||i.scrollTo(r[0],r[1])},scrollBy:(...r)=>{var i;(i=e.value)===null||i===void 0||i.scrollBy(r[0],r[1])}}),{scrollbarInstRef:e})},render(){return l(Fe,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),_o=ko,Co=d("thing",`
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
 `,[g("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),g("description",[p("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),g("content",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),g("footer",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)]),g("action",[p("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),yo=Object.assign(Object.assign({},E.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),wo=A({name:"Thing",props:yo,setup(e,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:b}=K(e),h=E("Thing","-thing",Co,vo,e,r),f=Y("Thing",b,r),t=j(()=>{const{self:{titleTextColor:a,textColor:c,titleFontWeight:m,fontSize:u},common:{cubicBezierEaseInOut:x}}=h.value;return{"--n-bezier":x,"--n-font-size":u,"--n-text-color":c,"--n-title-font-weight":m,"--n-title-text-color":a}}),n=i?J("thing",void 0,t,e):void 0;return()=>{var a;const{value:c}=r,m=f?f.value:!1;return(a=n==null?void 0:n.onRender)===null||a===void 0||a.call(n),l("div",{class:[`${c}-thing`,n==null?void 0:n.themeClass,m&&`${c}-thing--rtl`],style:i?void 0:t.value},o.avatar&&e.contentIndented?l("div",{class:`${c}-thing-avatar`},o.avatar()):null,l("div",{class:`${c}-thing-main`},!e.contentIndented&&(o.header||e.title||o["header-extra"]||e.titleExtra||o.avatar)?l("div",{class:`${c}-thing-avatar-header-wrapper`},o.avatar?l("div",{class:`${c}-thing-avatar`},o.avatar()):null,o.header||e.title||o["header-extra"]||e.titleExtra?l("div",{class:`${c}-thing-header-wrapper`},l("div",{class:`${c}-thing-header`},o.header||e.title?l("div",{class:`${c}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?l("div",{class:`${c}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null),o.description||e.description?l("div",{class:`${c}-thing-main__description`,style:e.descriptionStyle},o.description?o.description():e.description):null):null):l(G,null,o.header||e.title||o["header-extra"]||e.titleExtra?l("div",{class:`${c}-thing-header`},o.header||e.title?l("div",{class:`${c}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?l("div",{class:`${c}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null):null,o.description||e.description?l("div",{class:`${c}-thing-main__description`,style:e.descriptionStyle},o.description?o.description():e.description):null),o.default||e.content?l("div",{class:`${c}-thing-main__content`,style:e.contentStyle},o.default?o.default():e.content):null,o.footer?l("div",{class:`${c}-thing-main__footer`},o.footer()):null,o.action?l("div",{class:`${c}-thing-main__action`},o.action()):null))}}}),X=e=>(Ge("data-v-08d22f30"),e=e(),Qe(),e),$o=X(()=>D("img",{alt:"Vue logo",class:"logo",src:Ie,width:"125",height:"125"},null,-1)),zo={class:"wrapper"},So=X(()=>D("br",null,null,-1)),Ro=X(()=>D("br",null,null,-1)),To=A({__name:"Consent",setup(e){const{message:o}=Oe(["message"]),r=P(),i=P(),b=P(),h=P(!1);He(window.location.search).then(t=>{t.success?(r.value=t.data,i.value=[...t.data.previouslyApprovedScopes,...t.data.scopes],b.value=t.data.previouslyApprovedScopes.map(n=>n.scope)):o.warning(t.message)}).catch(t=>{o.warning(`获取客户端与scope信息失败：${t.message||t.statusText}`)});const f=t=>{if(!r.value){o.warning("初始化未完成，无法提交");return}h.value=!0;const n=new FormData;t||b.value!==null&&typeof b.value<"u"&&b.value.length>0&&b.value.forEach(a=>n.append("scope",a)),n.append("state",r.value.state),n.append("client_id",r.value.clientId),n.append("user_code",r.value.userCode),Le(new URLSearchParams(n),r.value.requestURI,Ne("nonceId")).then(a=>{a.success?window.location.href=a.data:a.message&&a.message.indexOf("access_denied")>-1?o.warning("您未选择scope或拒绝了本次授权申请."):o.warning(a.message)}).catch(a=>{o.warning(`提交授权确认失败：${a.message||a.statusText}`)}).finally(()=>h.value=!1)};return(t,n)=>{const a=Pe,c=We,m=io,u=wo,x=po,k=mo,y=to,w=_o,_=Ue;return N(),ee(G,null,[D("header",null,[$o,D("div",zo,[T(a,{msg:"OAuth 授权请求"})])]),D("main",null,[r.value&&r.value.userCode?(N(),q(c,{key:0},{default:R(()=>[M(" 您已经提供了代码 "),D("b",null,re(r.value.userCode),1),M(" ，请验证此代码是否与设备上显示的代码匹配。 ")]),_:1})):oe("",!0),So,r.value?(N(),q(c,{key:1,title:`${r.value.clientName} 客户端`},{"header-extra":R(()=>[M(" 账号： "),D("b",null,re(r.value.principalName),1)]),default:R(()=>[M(" 此第三方应用请求获得以下权限 ")]),_:1},8,["title"])):oe("",!0),T(w,{style:{"max-height":"230px"}},{default:R(()=>[T(y,{value:b.value,"onUpdate:value":n[0]||(n[0]=v=>b.value=v)},{default:R(()=>[T(k,null,{default:R(()=>[(N(!0),ee(G,null,qe(i.value,v=>(N(),q(x,{key:v},{prefix:R(()=>[T(m,{value:v.scope},null,8,["value"])]),default:R(()=>[T(u,{title:v.scope,description:v.description},null,8,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),_:1}),Ro,T(_,{type:"info",loading:h.value,onClick:n[1]||(n[1]=v=>f(!1)),strong:""},{default:R(()=>[M("     确    定     ")]),_:1},8,["loading"]),M("      "),T(_,{type:"warning",loading:h.value,onClick:n[2]||(n[2]=v=>f(!0))},{default:R(()=>[M("     拒    绝     ")]),_:1},8,["loading"])])],64)}}});const Ao=Ye(To,[["__scopeId","data-v-08d22f30"]]);export{Ao as default};
