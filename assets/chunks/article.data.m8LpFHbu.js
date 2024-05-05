const t=JSON.parse('[{"title":"什么是Spring OAuth2 Authorization Server","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["OAuth 2.1","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/01-基础集成/01-what-is-Spring-OAuth2-Authorization-Server"},{"title":"简单集成","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"outline":[1,6],"path":"authorization-server/01-基础集成/02-Spring-Boot-sample-integration"},{"title":"自定义异常响应处理","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"outline":[1,6],"path":"authorization-server/01-基础集成/03-custom-exception-catch"},{"title":"登录页面添加图片验证码","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/01-基础集成/04-login-add-captcha"},{"title":"扩展登录-添加短信登录","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/01-基础集成/05-login-add-sms-login-type"},{"title":"常见问题解答(FAQ)","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/01-基础集成/06-FAQ"},{"title":"添加redis支持和统一响应处理","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Redis","Spring Boot","Spring Security","Spring Data Redis","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/02-优化篇/01-add-redis-support-common-result"},{"title":"自定义UserDetails实现从数据库获取用户信息","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["MySQL","Spring Boot","Mybatis Plus","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/02-优化篇/02-custom-UserDetailsService"},{"title":"添加Jackson Mixin解决redis序列化失败问题","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Redis","Spring Boot","Spring Security","Spring Data Redis","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/02-优化篇/03-add-Jackson-Mixin"},{"title":"集成设备码授权","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/03-自定义grant type/01-device-code-flow"},{"title":"扩展grant type(短信登录)","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/03-自定义grant type/02-custom-grant-type-sms-captcha-get-access-token"},{"title":"扩展grant type(短信登录)","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/01-custom-token-payload"},{"title":"OAuth2客户端对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring Security OAuth2 Client","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/02-oauth2-client-integration-server-provider"},{"title":"资源服务对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Resource Server","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/03-resource-server-integration-server-provider"},{"title":"Vue通过授权码对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Vue","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/04-vue-integration-server-provider-with-authorization-code"},{"title":"Vue通过PKCE对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Vue","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/05-vue-integration-server-provider-with-pkce"},{"title":"网关对接认证服务","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Cloud","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/06-gateway-integration-server-provider"},{"title":"前后端分离-登录页面","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Vue","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/07-split-login-page"},{"title":"前后端分离-授权确认和设备码","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Vue","Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/08-split-consent-device-validation-page"},{"title":"基于redis的核心服务实现","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring Data Redis","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/09-implement-core-services-with-redis"},{"title":"扫码登录实现","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/04-进阶教程/10-qr-code-login"},{"title":"联合身份认证-gitee、github","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring Security OAuth2 Client","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/05-联合身份认证/01-github-gitee-federation"},{"title":"联合身份认证-微信登录","author":"vains","date":"2024-05-05 13:00","isTop":"fasle","categories":["认证服务集成"],"tags":["Spring Boot","Spring Security","Spring Security OAuth2 Client","Spring OAuth2 Authorization Server"],"showComment":false,"path":"authorization-server/05-联合身份认证/02-wechat-federation"}]');export{t as d};