import{_ as d}from"./chunks/ArticleMetadata.DArXzXOG.js";import{_ as p,m as f,a as _,u as h,B as s,e as a,x as i,ai as m,o,p as c,q as u,aj as k,ak as g,al as b,am as A}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.C7H76Bwr.js";const R=JSON.parse('{"title":"什么是Spring OAuth2 Authorization Server","description":"","frontmatter":{"title":"什么是Spring OAuth2 Authorization Server","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["OAuth 2.1","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/01-基础集成/01-what-is-Spring-OAuth2-Authorization-Server.md","filePath":"authorization-server/01-基础集成/01-what-is-Spring-OAuth2-Authorization-Server.md","lastUpdated":1714899778000}'),S={name:"authorization-server/01-基础集成/01-what-is-Spring-OAuth2-Authorization-Server.md"},v=a("h1",{id:"什么是oauth2-1",tabindex:"-1"},[i("什么是OAuth2.1？ "),a("a",{class:"header-anchor",href:"#什么是oauth2-1","aria-label":'Permalink to "什么是OAuth2.1？"'},"​")],-1),q=a("p",null,"经过近些年网络和设备的不断发展，之前的oauth2.0发布的授权协议标准已经远远不能满足现在的场景和需求，根据其安全最佳实践，在oauth2.0的基础上移除了一些不安全的授权方式，并且对扩展协议进行整合。该协议定义了一系列关于授权的开放网络标准，允许用户授权第三方应用访问他们存储在另外的服务提供者上的信息。现在各三方平台提供的授权登录基本都是基于oauth协议的，例如微信、QQ、GitHub和Gitee等平台提供的授权登录。而Spring Security的团队也在社区的推动下推出了基于oauth2.1协议的授权框架：Spring Authorization Server。",-1),C=a("h1",{id:"什么是spring-oauth2-authorization-server",tabindex:"-1"},[i("什么是Spring OAuth2 Authorization Server？ "),a("a",{class:"header-anchor",href:"#什么是spring-oauth2-authorization-server","aria-label":'Permalink to "什么是Spring OAuth2 Authorization Server？"'},"​")],-1),O=a("p",null,[i("Spring OAuth2 Authorization Server是由社区推动的一个项目，在Spring security团队的领导下基于"),a("a",{href:"https://connect2id.com/products/nimbus-oauth-openid-connect-sdk",target:"_blank",rel:"noreferrer"},"Nimbus"),i("库重头编写，其目的主要是为 Spring 社区提供 OAuth 2.0 授权服务器支持，替代已被废弃的Spring Security OAuth框架。Spring authorization server提供了OAuth 2.1和OpenID Connect 1.0规范以及其他相关规范的实现。")],-1),P=a("h1",{id:"spring-oauth2-authorization-server根据oauth2-1规范实现的特性列表",tabindex:"-1"},[i("Spring OAuth2 Authorization Server根据oauth2.1规范实现的特性列表 "),a("a",{class:"header-anchor",href:"#spring-oauth2-authorization-server根据oauth2-1规范实现的特性列表","aria-label":'Permalink to "Spring OAuth2 Authorization Server根据oauth2.1规范实现的特性列表"'},"​")],-1),z=m("",25),T=a("p",null,"本篇文章只是一个引子，很多地方说的很简单，大概了解了一些关于spring Authorization Server和oauth协议的相关内容，如果对某个点感兴趣可以针对性的去读一些相关的文章。",-1);function w(e,y,x,$,J,W){const n=d,l=f("ClientOnly");return o(),_("div",null,[v,h(l,null,{default:s(()=>{var t,r;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((r=e.$frontmatter)==null?void 0:r.showArticleMetadata)??!0)?(o(),c(n,{key:0,article:e.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),q,C,h(l,null,{default:s(()=>{var t,r;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((r=e.$frontmatter)==null?void 0:r.showArticleMetadata)??!0)?(o(),c(n,{key:0,article:e.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),O,P,h(l,null,{default:s(()=>{var t,r;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((r=e.$frontmatter)==null?void 0:r.showArticleMetadata)??!0)?(o(),c(n,{key:0,article:e.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),z,h(l,null,{default:s(()=>{var t,r;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((r=e.$frontmatter)==null?void 0:r.showArticleMetadata)??!0)?(o(),c(n,{key:0,article:e.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),T])}const I=p(S,[["render",w]]);export{R as __pageData,I as default};
