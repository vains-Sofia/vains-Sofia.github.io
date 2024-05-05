import{_ as A}from"./chunks/ArticleMetadata.Dug3bdYN.js";import{_ as c,m as g,a as y,u as l,B as k,e as t,x as o,ai as d,o as n,p,q as r}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.7Kxlk3Kc.js";const z=JSON.parse('{"title":"扩展grant type(短信登录)","description":"","frontmatter":{"title":"扩展grant type(短信登录)","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/04-进阶教程/01-custom-token-payload.md","filePath":"authorization-server/04-进阶教程/01-custom-token-payload.md","lastUpdated":1714905506000}'),D={name:"authorization-server/04-进阶教程/01-custom-token-payload.md"},C=t("h1",{id:"前言",tabindex:"-1"},[o("前言 "),t("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),u=t("p",null,"在之前的文章中有提到过资源服务器解析access token时会将用户通过客户端请求的scope当做权限放入authorities属性中，当使用注解@PreAuthorize的hasAuthority校验用户权限时，实际上校验的是access token中拥有的scope权限；框架也提供了对应的定制内容，可以使开发者自定jwt(access token)中的claims，同时对应的resource server也提供了对应的自定义解析配置。",-1),B=t("h1",{id:"oauth2tokencustomizer",tabindex:"-1"},[o("OAuth2TokenCustomizer "),t("a",{class:"header-anchor",href:"#oauth2tokencustomizer","aria-label":'Permalink to "OAuth2TokenCustomizer"'},"​")],-1),m=d(`<p><a href="https://docs.spring.io/spring-authorization-server/docs/current/reference/html/core-model-components.html#oauth2-token-customizer" target="_blank" rel="noreferrer">文档地址</a> 文档中对于OAuth2TokenCustomizer有这样一段描述: <br><em>An <code>OAuth2TokenCustomizer&lt;JwtEncodingContext&gt;</code> declared with a generic type of <code>JwtEncodingContext </code>(<code>implements OAuth2TokenContext</code>) provides the ability to customize the headers and claims of a <code>Jwt</code>. <code>JwtEncodingContext.getHeaders()</code> provides access to the <code>JwsHeader.Builder</code>, allowing the ability to add, replace, and remove headers. <code>JwtEncodingContext.getClaims()</code> provides access to the <code>JwtClaimsSet.Builder</code>, allowing the ability to add, replace, and remove claims.</em> <br> 大概意思就是可以通过OAuth2TokenContext的实现类对jwt的header和claims部分进行修改。 所以在认证服务器中实现<code>OAuth2TokenCustomizer</code>并将用户的权限信息放入jwt的claims中，并将实例注入IOC中。代码如下</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 自定义jwt，将权限信息放至jwt中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> OAuth2TokenCustomizer的实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> OAuth2TokenCustomizer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">JwtEncodingContext</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> oAuth2TokenCustomizer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 检查登录用户信息是不是UserDetails，排除掉没有用户参与的流程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getPrincipal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getPrincipal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">instanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> UserDetails user) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 获取申请的scopes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            Set</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">scopes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getAuthorizedScopes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 获取用户的权限</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            Collection</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> GrantedAuthority</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">authorities</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getAuthorities</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 提取权限并转为字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            Set</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">authoritySet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Optional.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">ofNullable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(authorities).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">orElse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Collections.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">emptyList</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                    // 获取权限字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(GrantedAuthority</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">getAuthority)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                    // 去重</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Collectors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toSet</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 合并scope与用户信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            authoritySet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addAll</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(scopes);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            JwtClaimsSet</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> claims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> context.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getClaims</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 将权限信息放入jwt的claims中（也可以生成一个以指定字符分割的字符串放入）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            claims.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">claim</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;authorities&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, authoritySet);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 放入其它自定内容</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            // 角色、头像...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>这段代码将申请的scope与用户本身自带的权限合并后放入jwt中。</p><h1 id="jwtauthenticationconverter" tabindex="-1">JwtAuthenticationConverter <a class="header-anchor" href="#jwtauthenticationconverter" aria-label="Permalink to &quot;JwtAuthenticationConverter&quot;">​</a></h1>`,4),F=d(`<p>自定义token部分就完成了，那么接下来就到resource server部分，早在最开始就添加了resource server的配置，将认证服务器也当做一个资源服务器，所以接下就在资源服务器文档中找到关于 <code>JwtAuthenticationConverter</code>的<a href="https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html#oauth2resourceserver-jwt-authorization-extraction" target="_blank" rel="noreferrer">说明文档</a>。文档中有如下一段说明： <em>However, there are a number of circumstances where this default is insufficient. For example, some authorization servers don’t use the scope attribute, but instead have their own custom attribute. Or, at other times, the resource server may need to adapt the attribute or a composition of attributes into internalized authorities.</em> 正好对应了上文说的自定义token，所以按照示例添加自己的jwt解析器</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * 自定义jwt解析器，设置解析出来的权限信息的前缀与在jwt中的key</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> jwt解析器 JwtAuthenticationConverter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> JwtAuthenticationConverter </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">jwtAuthenticationConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    JwtGrantedAuthoritiesConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> grantedAuthoritiesConverter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> JwtGrantedAuthoritiesConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // 设置解析权限信息的前缀，设置为空是去掉前缀</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    grantedAuthoritiesConverter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setAuthorityPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // 设置权限信息在jwt claims中的key</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    grantedAuthoritiesConverter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setAuthoritiesClaimName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;authorities&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    JwtAuthenticationConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> jwtAuthenticationConverter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> JwtAuthenticationConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    jwtAuthenticationConverter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setJwtGrantedAuthoritiesConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(grantedAuthoritiesConverter);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> jwtAuthenticationConverter;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>这里设置解析jwt时将权限key设置为上文中存入时的key，去除<strong>SCOPE_</strong> 前缀。</p>`,3);function E(s,v,w,_,f,b){const e=A,h=g("ClientOnly");return n(),y("div",null,[C,l(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),p(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),u,B,l(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),p(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),m,l(h,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),p(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),F])}const J=c(D,[["render",E]]);export{z as __pageData,J as default};
