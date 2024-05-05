import{_ as g}from"./chunks/ArticleMetadata.DArXzXOG.js";import{_ as y,m as D,a as C,u as p,B as e,e as n,x as k,ai as d,o as h,p as r,q as A,aM as F}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.C7H76Bwr.js";const I=JSON.parse('{"title":"自定义UserDetails实现从数据库获取用户信息","description":"","frontmatter":{"title":"自定义UserDetails实现从数据库获取用户信息","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["MySQL","Spring Boot","Mybatis Plus","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/02-优化篇/02-custom-UserDetailsService.md","filePath":"authorization-server/02-优化篇/02-custom-UserDetailsService.md","lastUpdated":null}'),B={name:"authorization-server/02-优化篇/02-custom-UserDetailsService.md"},c=n("h1",{id:"前言",tabindex:"-1"},[k("前言 "),n("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),o=n("p",null,"本篇文章会带大家实现自定义的UserDetailsService，从数据库获取用户及权限信息；也会带大家了解一下框架是怎么获取用户信息的。",-1),E=n("h1",{id:"实现步骤",tabindex:"-1"},[k("实现步骤 "),n("a",{class:"header-anchor",href:"#实现步骤","aria-label":'Permalink to "实现步骤"'},"​")],-1),u=n("ol",null,[n("li",null,"初始化数据库表结构"),n("li",null,"编写相关表的实体、mapper接口和mapper文件"),n("li",null,[k("实现"),n("code",null,"UserDetailsService"),k("接口，实现"),n("code",null,"loadUserByUsername"),k("抽象方法。")])],-1),m=n("h1",{id:"初始化数据库表结构",tabindex:"-1"},[k("初始化数据库表结构 "),n("a",{class:"header-anchor",href:"#初始化数据库表结构","aria-label":'Permalink to "初始化数据库表结构"'},"​")],-1),b=d("",3),T=d("",9),S=d("",13);function v(s,f,L,N,U,O){const l=g,t=D("ClientOnly");return h(),C("div",null,[c,p(t,null,{default:e(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),o,E,p(t,null,{default:e(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),u,m,p(t,null,{default:e(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),b,p(t,null,{default:e(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),T,p(t,null,{default:e(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),S])}const w=y(B,[["render",v]]);export{I as __pageData,w as default};
