---
title: 扩展grant type(短信登录)
author: vains
date: 2024-05-05 13:00
isTop: fasle
categories:
 - 认证服务集成
tags:
 - Spring Boot
 - Spring Security
 - Spring OAuth2 Authorization Server
showComment: false
---

# 前言
在之前的文章中有提到过资源服务器解析access token时会将用户通过客户端请求的scope当做权限放入authorities属性中，当使用注解@PreAuthorize的hasAuthority校验用户权限时，实际上校验的是access token中拥有的scope权限；框架也提供了对应的定制内容，可以使开发者自定jwt(access token)中的claims，同时对应的resource server也提供了对应的自定义解析配置。
# OAuth2TokenCustomizer
[文档地址](https://docs.spring.io/spring-authorization-server/docs/current/reference/html/core-model-components.html#oauth2-token-customizer)
文档中对于OAuth2TokenCustomizer有这样一段描述: <br>
*An `OAuth2TokenCustomizer<JwtEncodingContext>` declared with a generic type of `JwtEncodingContext `(`implements OAuth2TokenContext`) provides the ability to customize the headers and claims of a `Jwt`. `JwtEncodingContext.getHeaders()` provides access to the `JwsHeader.Builder`, allowing the ability to add, replace, and remove headers. `JwtEncodingContext.getClaims()` provides access to the `JwtClaimsSet.Builder`, allowing the ability to add, replace, and remove claims.* <br>
大概意思就是可以通过OAuth2TokenContext的实现类对jwt的header和claims部分进行修改。
所以在认证服务器中实现`OAuth2TokenCustomizer`并将用户的权限信息放入jwt的claims中，并将实例注入IOC中。代码如下

```java
/**
 * 自定义jwt，将权限信息放至jwt中
 *
 * @return OAuth2TokenCustomizer的实例
 */
@Bean
public OAuth2TokenCustomizer<JwtEncodingContext> oAuth2TokenCustomizer() {
    return context -> {
        // 检查登录用户信息是不是UserDetails，排除掉没有用户参与的流程
        if (context.getPrincipal().getPrincipal() instanceof UserDetails user) {
            // 获取申请的scopes
            Set<String> scopes = context.getAuthorizedScopes();
            // 获取用户的权限
            Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
            // 提取权限并转为字符串
            Set<String> authoritySet = Optional.ofNullable(authorities).orElse(Collections.emptyList()).stream()
                    // 获取权限字符串
                    .map(GrantedAuthority::getAuthority)
                    // 去重
                    .collect(Collectors.toSet());

            // 合并scope与用户信息
            authoritySet.addAll(scopes);

            JwtClaimsSet.Builder claims = context.getClaims();
            // 将权限信息放入jwt的claims中（也可以生成一个以指定字符分割的字符串放入）
            claims.claim("authorities", authoritySet);
            // 放入其它自定内容
            // 角色、头像...
        }
    };
}
```
这段代码将申请的scope与用户本身自带的权限合并后放入jwt中。
# JwtAuthenticationConverter
自定义token部分就完成了，那么接下来就到resource server部分，早在最开始就添加了resource server的配置，将认证服务器也当做一个资源服务器，所以接下就在资源服务器文档中找到关于
`JwtAuthenticationConverter`的[说明文档](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html#oauth2resourceserver-jwt-authorization-extraction)。文档中有如下一段说明：
*However, there are a number of circumstances where this default is insufficient. For example, some authorization servers don’t use the scope attribute, but instead have their own custom attribute. Or, at other times, the resource server may need to adapt the attribute or a composition of attributes into internalized authorities.*
正好对应了上文说的自定义token，所以按照示例添加自己的jwt解析器

```java
/**
 * 自定义jwt解析器，设置解析出来的权限信息的前缀与在jwt中的key
 *
 * @return jwt解析器 JwtAuthenticationConverter
 */
@Bean
public JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
    // 设置解析权限信息的前缀，设置为空是去掉前缀
    grantedAuthoritiesConverter.setAuthorityPrefix("");
    // 设置权限信息在jwt claims中的key
    grantedAuthoritiesConverter.setAuthoritiesClaimName("authorities");

    JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
    jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter);
    return jwtAuthenticationConverter;
}
```
这里设置解析jwt时将权限key设置为上文中存入时的key，去除**SCOPE_** 前缀。