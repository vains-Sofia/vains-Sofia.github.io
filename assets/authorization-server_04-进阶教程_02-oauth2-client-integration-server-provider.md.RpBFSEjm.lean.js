import{_ as g}from"./chunks/ArticleMetadata.Dug3bdYN.js";import{_ as A,m as y,a as o,u as p,B as e,e as s,x as t,aU as D,ai as c,o as h,p as r,q as d,aV as F}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.7Kxlk3Kc.js";const N=JSON.parse('{"title":"OAuth2客户端对接认证服务","description":"","frontmatter":{"title":"OAuth2客户端对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring Security OAuth2 Client","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/04-进阶教程/02-oauth2-client-integration-server-provider.md","filePath":"authorization-server/04-进阶教程/02-oauth2-client-integration-server-provider.md","lastUpdated":1714905506000}'),C={name:"authorization-server/04-进阶教程/02-oauth2-client-integration-server-provider.md"},B=s("h1",{id:"前言",tabindex:"-1"},[t("前言 "),s("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),u=s("p",null,"在之前的文章中实现了一个认证服务，并且添加了一些自定义的内容，现在暂时没想到认证服务的新内容，本篇文章就先写一下客户端对接的吧，水一篇。",-1),E=s("h1",{id:"流程说明",tabindex:"-1"},[t("流程说明 "),s("a",{class:"header-anchor",href:"#流程说明","aria-label":'Permalink to "流程说明"'},"​")],-1),m=s("p",null,[s("img",{src:D,alt:"客户端获取认证过程"})],-1),f=s("p",null,"当用户通过客户端去访问一个受限的资源时，客户端会检测是否有登录信息，没有登录信息会重定向至认证服务器去请求授权，认证服务器会检测是否有登录信息(检查session)，检测到没有登录则重定向至登录页面返回给用户，用户输入账号密码后提交，认证服务器认证以后会重定向至授权接口，授权接口生成一个code之后携带code重定向至客户端配置的redirect_uri，Security OAuth2 Client默认实现了一个处理回调的接口，会自动使用code获取token，地址为：/login/oauth2/code/*，最后的*要填配置客户端的registrationId，后边会提到；然后该接口请求认证服务去获取一个access_token，用access_token换取用户信息，框架会将token的信息存入session中，以后再发起请求时会从session中获取token。",-1),_=s("h1",{id:"使用springboot创建一个oauth2客户端",tabindex:"-1"},[t("使用SpringBoot创建一个oauth2客户端 "),s("a",{class:"header-anchor",href:"#使用springboot创建一个oauth2客户端","aria-label":'Permalink to "使用SpringBoot创建一个oauth2客户端"'},"​")],-1),b=c("",15),v=s("p",null,"客户端在oauth2角色解释中是第三方的一个应用，一般会配合资源服务一起使用",-1),I=s("ol",null,[s("li",null,[t("在单体项目中："),s("br"),t(" 会同时添加资源服务依赖，客户端负责调用认证服务登录，资源服务器负责解析获取到的token，然后获取token中的权限，目前token中的权限只有scope的权限，并且不太好自定义，所以就需要通过资源服务器配置去更好的解析token。")]),s("li",null,"在分布式项目中：")],-1),q=s("ul",null,[s("li",null,"在网关中添加客户端依赖，检查用户认证信息，由网关代理的微服务添加资源服务依赖，解析网关通过令牌中继的方式携带的access_token；各个微服务添加自己的授权校验。"),s("li",null,"在网关中集成客户端依赖，同时集成资源服务依赖，由网关检查用户的认证和授权信息；各个微服务不用添加任何的认证与授权相关的处理，可以直接访问；这种方式需要屏蔽各微服务其它ip的访问，只能由网关代理访问。")],-1),S=s("h1",{id:"总结",tabindex:"-1"},[t("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),w=s("p",null,[t("本篇文章以较少的代码集成了Security OAuth2 Client，体验到了springboot最开始说的"),s("code",null,"约定大于配置"),t("的好处，框架添加了大量的默认配置，只需更改必须修改的自定义部分即可，本次的代码部分只有更改yml和编写一个测试接口，其它的重定向至认证服务和获取token的配置都已经默认实现了。")],-1);function P(i,$,x,T,O,z){const l=g,k=y("ClientOnly");return h(),o("div",null,[B,p(k,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:i.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),u,E,p(k,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:i.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),m,f,_,p(k,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:i.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),b,p(k,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:i.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),v,I,q,S,p(k,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:i.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),w])}const U=A(C,[["render",P]]);export{N as __pageData,U as default};
