import{d as n,j as c}from"./index-a60ca8f5.js";import{q as g,s as i,K as p,M as u}from"./Login-7507502d.js";import"./Card-8eb476cf.js";const _=n({__name:"OAuthRedirect",setup(d){const{message:s}=g(["message"]);let a=u();const r=i("code");if(r){const t=localStorage.getItem("state");i("state")!==t?s.warning("state校验失败."):p({grant_type:"authorization_code",client_id:"messaging-client",client_secret:"123456",redirect_uri:"https://vains-sofia.gitee.io/OAuth2Redirect",code:r,state:t}).then(e=>{localStorage.setItem("accessToken",JSON.stringify(e)),c.push({path:"/"})}).catch(e=>{s.warning(`请求token失败：${e.data.error||e.message||e.statusText}`)})}else localStorage.setItem("state",a),window.location.href=`https://oauth1-m38kr34s.b4a.run/oauth2/authorize?client_id=messaging-client&response_type=code&scope=openid%20profile%20message.read%20message.write&redirect_uri=https://vains-sofia.gitee.io/OAuth2Redirect&state=${a}`;return(t,o)=>"加载中..."}});export{_ as default};
