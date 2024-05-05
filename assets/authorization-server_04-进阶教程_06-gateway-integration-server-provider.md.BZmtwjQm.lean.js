import{_ as d}from"./chunks/ArticleMetadata.DArXzXOG.js";import{_ as D,m as y,a as c,u as p,B as k,e as n,x as g,ai as A,o as t,p as e,q as r,a_ as o,a$ as C,b0 as B,b1 as E,b2 as u,b3 as F,b4 as m}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.C7H76Bwr.js";const z=JSON.parse('{"title":"网关对接认证服务","description":"","frontmatter":{"title":"网关对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Cloud","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/04-进阶教程/06-gateway-integration-server-provider.md","filePath":"authorization-server/04-进阶教程/06-gateway-integration-server-provider.md","lastUpdated":null}'),v={name:"authorization-server/04-进阶教程/06-gateway-integration-server-provider.md"},b=n("h1",{id:"前言",tabindex:"-1"},[g("前言 "),n("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),f=n("p",null,"        之前虽然单独讲过Security Client和Resource Server的对接，但是都是基于Spring webmvc的，Gateway这种非阻塞式的网关是基于webflux的，对于集成Security相关内容略有不同，且涉及到代理其它微服务，所以会稍微比较麻烦些，今天就带大家来实现Gateway网关对接OAuth2认证服务。",-1),w=n("h1",{id:"gateway对接说明",tabindex:"-1"},[g("Gateway对接说明 "),n("a",{class:"header-anchor",href:"#gateway对接说明","aria-label":'Permalink to "Gateway对接说明"'},"​")],-1),x=A("",13),S=A("",54),I=n("p",null,"本文带大家简单实现了Spring Cloud Gateway对接认证服务，Gateway中添加客户端主要是为了如果代理服务有静态资源(html、css、image)时可以直接发起OAuth2授权流程，在浏览器登录后直接访问，同时也是开启令牌中继的必要依赖；引入Resource Server依赖是当需要对网关的接口鉴权时可以直接使用，如果网关只负责转发应该是可以去掉资源服务相关依赖和配置的，由各个被代理的微服务对自己的接口进行鉴权。这些东西在之前基本都是讲过的内容，所以本文很多地方都是一笔带过的，如果某些地方不清楚可以针对性的翻翻之前的文章。**",-1),q=n("h1",{id:"附录",tabindex:"-1"},[g("附录 "),n("a",{class:"header-anchor",href:"#附录","aria-label":'Permalink to "附录"'},"​")],-1),_=A("",1);function j(s,P,T,J,M,O){const l=d,h=y("ClientOnly");return t(),c("div",null,[b,p(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),e(l,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),f,w,p(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),e(l,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),x,p(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),e(l,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),S,p(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),e(l,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),I,q,p(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),e(l,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),_])}const V=D(v,[["render",j]]);export{z as __pageData,V as default};
