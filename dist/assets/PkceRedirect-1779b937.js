import{d,j as p,_ as m}from"./index-284fdd9d.js";import{q as _,J as u,s as i,K as f,M as c}from"./Login-85e72bfe.js";import"./Card-54d7fcd9.js";const h=d({__name:"PkceRedirect",setup(k){const{message:a}=_(["message"]);let o=c(),n=u(o),s=c();const r=i("code");if(r){const t=localStorage.getItem("state");if(i("state")!==t)a.warning("state校验失败.");else{const g=localStorage.getItem("codeVerifier");f({grant_type:"authorization_code",client_id:"pkce-message-client",redirect_uri:"https://vains-sofia.gitee.io/PkceRedirect",code:r,code_verifier:g,state:t}).then(e=>{localStorage.setItem("accessToken",JSON.stringify(e)),p.push({path:"/"})}).catch(e=>{a.warning(`请求token失败：${e.data.error||e.message||e.statusText}`)})}}else localStorage.setItem("state",s),localStorage.setItem("codeVerifier",o),window.location.href=`https://cloud-forget493481889.b4a.run/oauth2/authorize?response_type=code&client_id=pkce-message-client&redirect_uri=${encodeURIComponent("https://vains-sofia.gitee.io/PkceRedirect")}&scope=message.write%20message.read&code_challenge=${n}&code_challenge_method=S256&state=${s}`;return(t,l)=>"加载中..."}}),w=m(h,[["__file","D:/OtherFiles/GitRepository/authorization-example/vue-login-page-example/src/views/login/PkceRedirect.vue"]]);export{w as default};
