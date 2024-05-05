---
title: OAuth2客户端对接认证服务
author: vains
date: 2024-05-05 13:00
isTop: fasle
categories:
 - 认证服务集成
tags:
 - Spring Boot
 - Spring Security
 - Spring Security OAuth2 Client
 - Spring OAuth2 Authorization Server
showComment: false
---

# 前言

在之前的文章中实现了一个认证服务，并且添加了一些自定义的内容，现在暂时没想到认证服务的新内容，本篇文章就先写一下客户端对接的吧，水一篇。

# 流程说明

![客户端获取认证过程](/7/OAuth2ClientFlow.png)

当用户通过客户端去访问一个受限的资源时，客户端会检测是否有登录信息，没有登录信息会重定向至认证服务器去请求授权，认证服务器会检测是否有登录信息(检查session)，检测到没有登录则重定向至登录页面返回给用户，用户输入账号密码后提交，认证服务器认证以后会重定向至授权接口，授权接口生成一个code之后携带code重定向至客户端配置的redirect\_uri，Security OAuth2 Client默认实现了一个处理回调的接口，会自动使用code获取token，地址为：/login/oauth2/code/\*，最后的\*要填配置客户端的registrationId，后边会提到；然后该接口请求认证服务去获取一个access\_token，用access\_token换取用户信息，框架会将token的信息存入session中，以后再发起请求时会从session中获取token。

# 使用SpringBoot创建一个oauth2客户端

## 环境介绍

客户端这里就是一个独立的项目了，跟之前的认证服务没有什么关联，读者可自选自己使用的Spring Boot版本，各版本的oauth2 client版本的对接大差不差，基本上差不多，可能实现会有所不同，但基本都一样的。在对接过程中我会放一些文档，读者可以去文档中找对应版本的文档去编写代码。

## 创建项目

使用idea或者在[Spring Initializr](https://start.spring.io/)创建一个SpringBoot项目；创建时引用oauth2-client和web依赖。

![image.png](/7/StartSpring.png)

### pom.xml示例

```java
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>authorization-client-example</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>authorization-client-example</name>
    <description>authorization-client-example</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-oauth2-client</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

## 配置application.yml，添加认证服务器信息和客户端信息

```yaml
server:
  # 修改端口
  port: 8000

spring:
  security:
    oauth2:
      client:
        provider:
          # 认证提供者,自定义名称
          custom-issuer:
            # Token签发地址(认证服务地址)
            issuer-uri: http://192.168.120.33:8080
            # 获取用户信息的地址，默认的/userinfo端点需要IdToken获取，为避免麻烦自定一个用户信息接口
            user-info-uri: ${spring.security.oauth2.client.provider.custom-issuer.issuer-uri}/user
        registration:
          messaging-client-oidc:
            # oauth认证提供者配置，和上边配置的认证提供者关联起来
            provider: custom-issuer
            # 客户端名称，自定义
            client-name: message-client
            # 客户端id，从认证服务申请的客户端id
            client-id: messaging-client
            # 客户端秘钥
            client-secret: 123456
            # 客户端认证方式
            client-authentication-method: client_secret_basic
            # 获取Token使用的授权流程
            authorization-grant-type: authorization_code
            # 回调地址，这里设置为Spring Security Client默认实现使用code换取token的接口
            redirect-uri: http://127.0.0.1:8000/login/oauth2/code/messaging-client-oidc
            scope:
              - message.read
              - message.write
```

更多详细的客户端配置信息移步[官网文档](https://docs.spring.io/spring-security/reference/servlet/oauth2/client/core.html) <br> **文档中配置权限范围的字段是`scopes`，但是在代码中是`scope`，这里可能是文档中没更新吧，大家在参阅文档时需要注意一下代码中具体的属性名是什么。**

**注意：认证服务器和客户端在同一个机器上时不能使用同一个ip，例如127.0.0.1，在存储cookie时不会区分端口的，比如127.0.0.1:8000和127.0.0.1:8080这两个，他们的cookie是同一个的，后者会覆盖前者；如果配置认证服务的地址是127.0.0.1:8080然后通过127.0.0.1:8000去访问客户端则会在登录后出现`[authorization_request_not_found]`异常，详见[spring-security issues 5946](https://github.com/spring-projects/spring-security/issues/5946)**

## 给认证服务添加一个用户接口

在AuthorizationController中添加/user接口

```java
@ResponseBody
@GetMapping("/user")
public Map<String,Object> user(Principal principal) {
    if (!(principal instanceof JwtAuthenticationToken token)) {
        return Collections.emptyMap();
    }
    return token.getToken().getClaims();
}
```
# 客户端解释

客户端在oauth2角色解释中是第三方的一个应用，一般会配合资源服务一起使用

1.  在单体项目中：<br> 会同时添加资源服务依赖，客户端负责调用认证服务登录，资源服务器负责解析获取到的token，然后获取token中的权限，目前token中的权限只有scope的权限，并且不太好自定义，所以就需要通过资源服务器配置去更好的解析token。
2.  在分布式项目中：

*   在网关中添加客户端依赖，检查用户认证信息，由网关代理的微服务添加资源服务依赖，解析网关通过令牌中继的方式携带的access\_token；各个微服务添加自己的授权校验。
*   在网关中集成客户端依赖，同时集成资源服务依赖，由网关检查用户的认证和授权信息；各个微服务不用添加任何的认证与授权相关的处理，可以直接访问；这种方式需要屏蔽各微服务其它ip的访问，只能由网关代理访问。

# 总结

本篇文章以较少的代码集成了Security OAuth2 Client，体验到了springboot最开始说的`约定大于配置`的好处，框架添加了大量的默认配置，只需更改必须修改的自定义部分即可，本次的代码部分只有更改yml和编写一个测试接口，其它的重定向至认证服务和获取token的配置都已经默认实现了。