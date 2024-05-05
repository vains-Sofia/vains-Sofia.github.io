import{_ as c}from"./chunks/ArticleMetadata.DArXzXOG.js";import{_ as g,m as A,a as y,u as h,B as k,e as n,x as t,ai as d,o as e,p as r,q as o}from"./chunks/framework.DGhdORX1.js";import"./chunks/theme.C7H76Bwr.js";const R=JSON.parse('{"title":"添加Jackson Mixin解决redis序列化失败问题","description":"","frontmatter":{"title":"添加Jackson Mixin解决redis序列化失败问题","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Redis","Spring Boot","Spring Security","Spring Data Redis","Spring OAuth2 Authorization Server"],"showComment":false},"headers":[],"relativePath":"authorization-server/02-优化篇/03-add-Jackson-Mixin.md","filePath":"authorization-server/02-优化篇/03-add-Jackson-Mixin.md","lastUpdated":null}'),D={name:"authorization-server/02-优化篇/03-add-Jackson-Mixin.md"},u=n("h1",{id:"前言",tabindex:"-1"},[t("前言 "),n("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),C=n("p",null,[t("    在"),n("a",{href:"https://juejin.cn/post/7254096495184134181",target:"_blank",rel:"noreferrer"},"授权码模式的前后端分离"),t("的那篇文章中使用了Redis来保存用户的认证信息，在Redis的配置文件中配置的值序列化器是默认的Jdk序列化器，虽然这样也可以使用，但是在Redis客户端中查看时是乱码的(看起来是)，如果切换为Jackson提供的值序列化器时又会在反序列化时失败，这样是不符合实际的，在项目框架搭建完毕或在已有项目中这些配置实际上应该都已经配置好了的，不能说为了这么一个功能去改原有配置，"),n("strong",null,"所以这里要跟大家说一声对不起，因为在下学艺不精而导致这么一个大缺陷一直留到了现在"),t("。")],-1),m=n("h1",{id:"问题分析",tabindex:"-1"},[t("问题分析 "),n("a",{class:"header-anchor",href:"#问题分析","aria-label":'Permalink to "问题分析"'},"​")],-1),B=d(`<p>    当时用到的地方就是在登录成功和初始化<code>SecurityContextHolderFilter</code>中初始化认证信息的地方存、取<code>SecurityContext</code>(认证信息)，存的时候倒是没有问题，但是取的时候就会因为框架内的类不提供默认的构造器从而造成反序列化失败的问题，或者是类型转换异常</p><p>    Jackson 只能识别java基本类型，遇到复杂类型时，Jackson 就会先序列化成 LinkedHashMap，然后再尝试强转为所需类别，这样大部分情况下会强转失败，异常信息如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>java.lang.ClassCastException: class java.util.LinkedHashMap cannot be cast to class org.springframework.security.core.context.SecurityContext</span></span></code></pre></div><p>这种情况需要添加一个配置，如下</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">activateDefaultTyping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getPolymorphicTypeValidator</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(),  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ObjectMapper.DefaultTyping.NON_FINAL,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    JsonTypeInfo.As.PROPERTY);</span></span></code></pre></div><p>但是当添加了这个配置后重启后再次尝试发现还是有异常，不过这时就是因为框架中的类没有提供默认构造器造成的，异常如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>org.springframework.data.redis.serializer.SerializationException: Could not read JSON: Cannot construct instance of \`org.springframework.security.authentication.UsernamePasswordAuthenticationToken\` (no Creators, like default constructor, exist): cannot deserialize from Object value (no delegate- or property-based Creator)</span></span>
<span class="line"><span> at [Source: (byte[])&quot;{&quot;@class&quot;:&quot;org.springframework.security.core.context.SecurityContextImpl&quot;,&quot;authentication&quot;:{&quot;@class&quot;:&quot;org.springframework.security.authentication.UsernamePasswordAuthenticationToken&quot;,&quot;authorities&quot;:[&quot;java.util.Collections$UnmodifiableRandomAccessList&quot;,[{&quot;@class&quot;:&quot;com.example.model.security.CustomGrantedAuthority&quot;,&quot;authority&quot;:&quot;system&quot;},{&quot;@class&quot;:&quot;com.example.model.security.CustomGrantedAuthority&quot;,&quot;authority&quot;:&quot;app&quot;},{&quot;@class&quot;:&quot;com.example.model.security.CustomGrantedAuthority&quot;,&quot;authority&quot;:&quot;web&quot;}]],&quot;[truncated 893 bytes]; line: 1, column: 184] (through reference chain: org.springframework.security.core.context.SecurityContextImpl[&quot;authentication&quot;])</span></span></code></pre></div><p>异常提示问题在<code>SecurityContextImpl</code>的<code>authentication</code>属性上，因为该属性的实例是<code>UsernamePasswordAuthenticationToken</code>，这个类并没有一个默认的构造器，所以在反序列化时直接报错了，最开始时我的想法是写一个实现类，然后存取的时候用自定义的类中转一下，但是后来又发现了<code>Json Mixin</code>这个东西，发现这个玩意儿更方便，于是就实现了一下，写了一个<code>UsernamePasswordAuthenticationMixin</code>类来实现自定义反序列化逻辑，<strong>但是昨天突然发现这东西其实框架已经实现了，就很尴尬，要将这些东西加进来添加一下框架提供的<code>CoreJackson2Module</code>就行</strong>，配置如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 添加Security提供的Jackson Mixin  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">registerModule</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> CoreJackson2Module</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span></code></pre></div><h1 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h1>`,10),F=d(`<p>Redis配置文件中配置的<code>RedisTemplate</code>添加值序列化器，值序列化器使用的<code>ObjectMapper</code>添加以上提到的那些配置，包括复杂类型映射、Security提供的<code>Json Mixin</code>，完整的Redis配置类如下</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> com.example.config;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> com.fasterxml.jackson.annotation.JsonAutoDetect;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> com.fasterxml.jackson.annotation.JsonTypeInfo;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> com.fasterxml.jackson.annotation.PropertyAccessor;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> com.fasterxml.jackson.databind.ObjectMapper;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> lombok.RequiredArgsConstructor;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.data.redis.connection.RedisConnectionFactory;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.data.redis.core.RedisTemplate;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.data.redis.serializer.StringRedisSerializer;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> org.springframework.security.jackson2.CoreJackson2Module;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * Redis的key序列化配置类</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> vains</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequiredArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> RedisConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Jackson2ObjectMapperBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> builder;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * 默认情况下使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> connectionFactory</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> redis链接工厂</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> RedisTemplate</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> RedisTemplate&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">redisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(RedisConnectionFactory </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">connectionFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 字符串序列化器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        StringRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stringRedisSerializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> StringRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 创建ObjectMapper并添加默认配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        ObjectMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> objectMapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">createXmlMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 序列化所有字段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setVisibility</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 此项必须配置，否则如果序列化的对象里边还有对象，会报如下错误：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        //     java.lang.ClassCastException: java.util.LinkedHashMap cannot be cast to XXX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">activateDefaultTyping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getPolymorphicTypeValidator</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                ObjectMapper.DefaultTyping.NON_FINAL,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                JsonTypeInfo.As.PROPERTY);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 添加Security提供的Jackson Mixin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        objectMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">registerModule</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> CoreJackson2Module</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 存入redis时序列化值的序列化器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Jackson2JsonRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">valueSerializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Jackson2JsonRedisSerializer&lt;&gt;(objectMapper, Object.class);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        RedisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">redisTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> RedisTemplate&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 设置值序列化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        redisTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setValueSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(valueSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 设置hash格式数据值的序列化器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        redisTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setHashValueSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(valueSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 默认的Key序列化器为：JdkSerializationRedisSerializer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        redisTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setKeySerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 设置字符串序列化器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        redisTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setStringSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 设置hash结构的key的序列化器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        redisTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setHashKeySerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(stringRedisSerializer);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 设置连接工厂</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        redisTemplate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setConnectionFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(connectionFactory);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> redisTemplate;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * 操作hash的情况下使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> connectionFactory</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> redis链接工厂</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> RedisTemplate</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> RedisTemplate&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">redisHashTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(RedisConnectionFactory </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">connectionFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> redisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(connectionFactory);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h1 id="扩展说明" tabindex="-1">扩展说明 <a class="header-anchor" href="#扩展说明" aria-label="Permalink to &quot;扩展说明&quot;">​</a></h1>`,3),E=d("<p>从上边的配置可以看出<code>Spring</code>对于三方框架内部没有默认构造器的类的反序列化支持还是挺好的，如果集成其它框架时遇到这种情况时就可以仿照<code>Security</code>框架提供的<code>Mixin</code>类实现一个自己的<code>Mixin</code>类以支持反序列化，当然也可以找找在框架中是否有类似的<code>Jackson2Module</code>类；当自己封装一个<code>starter</code>时也可以提供<code>Jackson2Module</code>类来映射类，不过这个就按照个人的喜好来了，自己封装自由度很高的。</p><p>当然在使用<code>Security</code>时如果遇到其它反序列化失败的类，都可以在框架中找找有没有其它的<code>Jackson2Module</code>类，如果提供的有那就不用自己封装了，直接往<code>ObjectMapper</code>添加一个<code>Module</code>就行。</p>",2);function b(s,f,_,S,v,T){const l=c,p=A("ClientOnly");return e(),y("div",null,[u,h(p,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(e(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):o("",!0)]}),_:1}),C,m,h(p,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(e(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):o("",!0)]}),_:1}),B,h(p,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(e(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):o("",!0)]}),_:1}),F,h(p,null,{default:k(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(e(),r(l,{key:0,article:s.$frontmatter},null,8,["article"])):o("",!0)]}),_:1}),E])}const J=g(D,[["render",b]]);export{R as __pageData,J as default};
