---
title: 资源服务对接认证服务
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
书接上文，本次来对接一下资源服务，在本篇文章中会带领大家去构建一个资源服务器，通过注解校验token中的权限，怎么放行一个接口，使其不需要认证也可访问。
# 流程解析
[文档](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html)<br>
![未携带token访问resource server](/8/ResourceFlow.png)
没有携带token访问认证信息会抛出`AccessDeniedException`异常，并且会调用`BearerAuthenticationEntryPoint`去处理。

![resource server解析token过程](/8/AccessDeniedFlow.png)
请求携带token到达资源服务器后会使用`BearerTokenAuthenticationFilter`去解析和校验token，成功会将认证信息存入`SecurityContextHolder`中并继续往下执行，失败则调用`AuthenticationEntryPoint`返回异常信息。<br>以上两种异常处理默认都是在响应头中添加，响应头是WWW-Authenticate，值就是具体的异常信息。

# 整合过程
 1. 创建项目
 2. 添加resource server和web依赖
 3. 添加yml配置

resource server和oauth2 client一样，是一个单独的服务，不需要跟认证服务器的版本保持一致，读者可自选springboot版本，它们之间通过oauth2的协议可以无缝对接。

## 创建项目
通过IDEA或[Spring Initializr](https://start.spring.io)创建一个项目，同时选择web和OAuth2 Resource Server依赖。

![Spring Initializr创建项目示例](/8/StartSpring.png)
pom.xml如下
```xml
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
    <artifactId>resource-server-example</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>resource-server-example</name>
    <description>resource-server-example</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
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
## 添加yml配置
[资源服务器配置文档](https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html)
```yaml
server:
  # 设置资源服务器端口
  port: 8100

spring:
  security:
    oauth2:
      # 资源服务器配置
      resourceserver:
        jwt:
          # Jwt中claims的iss属性，也就是jwt的签发地址，即认证服务器的根路径
          # 资源服务器会进一步的配置，通过该地址获取公钥以解析jwt
          issuer-uri: http://192.168.120.33:8080
```
至此，一个简易的资源服务就搭建完毕了，资源服务比客户端服务的逻辑稍微简单些，就是从认证服务获取公钥，然后解析jwt类型的token。

# 添加注解使鉴权注解生效
## 在config包下创建ResourceServerConfig类
```java
package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * OAuth2 Resource Server
 *
 * @author Yu jin xiang 2023/6/13
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(jsr250Enabled = true, securedEnabled = true)
public class ResourceServerConfig {

    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(authorize -> authorize
                        // 下边一行是放行接口的配置，被放行的接口上不能有权限注解，e.g. @PreAuthorize，否则无效
                        // .requestMatchers("/test02").permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2ResourceServer(oauth2 -> oauth2
                        // 可在此处添加自定义解析设置
                        .jwt(Customizer.withDefaults())
                        // 添加未携带token和权限不足异常处理(已在第五篇文章中说过)
//                        .accessDeniedHandler(SecurityUtils::exceptionHandler)
//                        .authenticationEntryPoint(SecurityUtils::exceptionHandler)
                );
        return http.build();
    }

    // 添加自定义解析token配置，注入一个JwtAuthenticationConverter
    // (已在第五章中说过，这里就不重复实现了)

}

```