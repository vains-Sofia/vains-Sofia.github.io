import{_ as w}from"./HelloWorld-c87f1aa7.js";import{_ as b}from"./devices-61f79cc3.js";import{q as x,s as i,E as X,_ as k}from"./Login-7507502d.js";import{d as y,q as p,o as A,a as I,g as n,b as o,w as s,F as V,e as d,p as S,k as B}from"./index-a60ca8f5.js";import{_ as N}from"./Card-8eb476cf.js";import{_ as q,h as E}from"./FormItemRow-ba972710.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-925b5a83.js";const m=a=>(S("data-v-7e2ab9e5"),a=a(),B(),a),T=m(()=>n("img",{alt:"Vue logo",class:"logo",src:b,width:"125",height:"125"},null,-1)),U={class:"wrapper"},D=m(()=>n("br",null,null,-1)),H=y({__name:"Activate",setup(a){const{message:_}=x(["message"]),l=p(!1),t=p({userCode:i("userCode")}),c=()=>{if(!t.value.userCode){_.warning("请输入设备码");return}l.value=!0;const r={user_code:t.value.userCode};X(r,i("nonceId")).then(e=>{e.success?window.location.href=e.data:_.warning(e.message)}).catch(e=>{_.warning(`提交设备码失败：${e.message||e.statusText}`)}).finally(()=>l.value=!1)};return t.value.userCode&&c(),(r,e)=>{const g=w,u=N,f=q,v=E,h=k;return A(),I(V,null,[n("header",null,[T,n("div",U,[o(g,{msg:"设备激活"})])]),n("main",null,[o(u,null,{default:s(()=>[d(" 输入激活码对设备进行授权。 ")]),_:1}),D,o(u,null,{default:s(()=>[o(v,{label:"Activation Code"},{default:s(()=>[o(f,{value:t.value.userCode,"onUpdate:value":e[0]||(e[0]=C=>t.value.userCode=C),placeholder:"User Code，格式：XXXX-XXXX，错误的格式后端会报错",maxlength:"9","show-count":"",clearable:""},null,8,["value"])]),_:1}),o(h,{type:"info",loading:l.value,onClick:c,block:"",strong:""},{default:s(()=>[d(" 提交 ")]),_:1},8,["loading"])]),_:1})])],64)}}});const L=F(H,[["__scopeId","data-v-7e2ab9e5"]]);export{L as default};
