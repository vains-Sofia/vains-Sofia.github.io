import{d as n,j as c,_ as g}from"./index-b63881f1.js";import{g as r,e as l,f as u}from"./Login-94ec173c.js";import{q as p}from"./discrete-1affaae5.js";const d=n({__name:"OAuthRedirect",setup(m){const{message:s}=p(["message"]);let a=u();const i=r("code");if(i){const t=localStorage.getItem("state");r("state")!==t?s.warning("state校验失败."):l({grant_type:"authorization_code",client_id:"messaging-client",client_secret:"123456",redirect_uri:"https://vains-sofia.gitee.io/OAuth2Redirect",code:i,state:t}).then(e=>{localStorage.setItem("accessToken",JSON.stringify(e,null,2)),c.push({path:"/"})}).catch(e=>{s.warning(`请求token失败：${e.data.error||e.message||e.statusText}`)})}else localStorage.setItem("state",a),window.location.href=`https://cloud-forget493481889.b4a.run/oauth2/authorize?client_id=messaging-client&response_type=code&scope=openid%20profile%20message.read%20message.write&redirect_uri=https://vains-sofia.gitee.io/OAuth2Redirect&state=${a}`;return(t,o)=>"加载中..."}}),O=g(d,[["__file","D:/OtherFiles/GitRepository/authorization-example/vue-login-page-example/src/views/login/OAuthRedirect.vue"]]);export{O as default};
