import{_ as w}from"./HelloWorld-b73e6003.js";import{d as C,q as u,o as x,a as X,g as n,b as o,w as s,F as y,e as d,p as A,k,_ as I}from"./index-6f04ae4c.js";import{_ as V}from"./devices-61f79cc3.js";import{g as p,d as S}from"./Login-94ec173c.js";import{q as B,_ as F,ax as N}from"./discrete-372b5bea.js";import{_ as q,h as D}from"./FormItemRow-8b4be8fc.js";import"./use-merged-state-39594149.js";const m=a=>(A("data-v-b19df0b2"),a=a(),k(),a),T=m(()=>n("img",{alt:"Vue logo",class:"logo",src:V,width:"125",height:"125"},null,-1)),U={class:"wrapper"},z=m(()=>n("br",null,null,-1)),E=C({__name:"Activate",setup(a){const{message:_}=B(["message"]),l=u(!1),t=u({userCode:p("userCode")}),c=()=>{if(!t.value.userCode){_.warning("请输入设备码");return}l.value=!0;const i={user_code:t.value.userCode};S(i,p("nonceId")).then(e=>{e.success?window.location.href=e.data:_.warning(e.message)}).catch(e=>{_.warning(`提交设备码失败：${e.message||e.statusText}`)}).finally(()=>l.value=!1)};return t.value.userCode&&c(),(i,e)=>{const g=w,r=F,f=q,v=D,h=N;return x(),X(y,null,[n("header",null,[T,n("div",U,[o(g,{msg:"设备激活"})])]),n("main",null,[o(r,null,{default:s(()=>[d(" 输入激活码对设备进行授权。 ")]),_:1}),z,o(r,null,{default:s(()=>[o(v,{label:"Activation Code"},{default:s(()=>[o(f,{value:t.value.userCode,"onUpdate:value":e[0]||(e[0]=b=>t.value.userCode=b),placeholder:"User Code，格式：XXXX-XXXX，错误的格式后端会报错",maxlength:"9","show-count":"",clearable:""},null,8,["value"])]),_:1}),o(h,{type:"info",loading:l.value,onClick:c,block:"",strong:""},{default:s(()=>[d(" 提交 ")]),_:1},8,["loading"])]),_:1})])],64)}}});const j=I(E,[["__scopeId","data-v-b19df0b2"],["__file","D:/OtherFiles/GitRepository/authorization-example/vue-login-page-example/src/views/device/Activate.vue"]]);export{j as default};
