import{_ as d}from"./chunks/ArticleMetadata.DArXzXOG.js";import{_ as g,m as y,a as D,u as l,B as e,e as s,x as h,ai as C,o as t,p as r,q as A}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.C7H76Bwr.js";const _=JSON.parse('{"title":"前后端分离-授权确认和设备码","description":"","frontmatter":{"title":"前后端分离-授权确认和设备码","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Vue","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/04-进阶教程/08-split-consent-device-validation-page.md","filePath":"authorization-server/04-进阶教程/08-split-consent-device-validation-page.md","lastUpdated":null}'),B={name:"authorization-server/04-进阶教程/08-split-consent-device-validation-page.md"},o=s("h1",{id:"前言",tabindex:"-1"},[h("前言 "),s("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),F=s("p",null,[h("       在之前的文章("),s("a",{href:"https://juejin.cn/post/7254096495184134181",target:"_blank",rel:"noreferrer"},"实现授权码模式使用前后端分离的登录页面"),h(")中实现了前后端分离的登录页面，但这篇文章中只分离了登录页面，鉴于部分读者好奇授权确认页面分离的实现，就实现一下授权确认页面的分离，同时设备码流程的授权确认页面与授权码流程的授权确认页面是同一个，这里也需要兼容一下，还有就是设备码流程中有一个校验设备码的页面，这里也需要分离出来。")],-1),c=s("p",null,[s("strong",null,"前文中有提到，在前后端分离的模式下，在页面发起的请求需要响应json不能重定向了，所以需要修改相关接口调用成功后响应json。话不多说，直接上代码。")],-1),E=s("h1",{id:"编码",tabindex:"-1"},[h("编码 "),s("a",{class:"header-anchor",href:"#编码","aria-label":'Permalink to "编码"'},"​")],-1),u=C("",38);function m(i,v,S,q,b,R){const k=d,p=y("ClientOnly");return t(),D("div",null,[o,l(p,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(t(),r(k,{key:0,article:i.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),F,c,E,l(p,null,{default:e(()=>{var a,n;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=i.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(t(),r(k,{key:0,article:i.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),u])}const U=g(B,[["render",m]]);export{_ as __pageData,U as default};
