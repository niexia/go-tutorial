# Web Admin

使用 Golang 开发的一个简单后台管理系统

## introduce

### Overview
- golang web framework：[gin](https://github.com/gin-gonic/gin)
- web：[react](https://github.com/facebook/react) + [Ant Design](https://github.com/ant-design/ant-design)
- api：[Swagger](https://swagger.io/)

### features
- 基于角色进行进行权限管理
- 用户管理

## layout

参考了 [Standard Go Project Layout](https://github.com/golang-standards/project-layout/blob/master/README_zh.md)

```
|----cmd                        // 本项目的主干
|----internal                   // 私有应用程序和库代码
|----pkg                        // 外部应用程序可以使用的库代码
|----vendor                     // 应用程序依赖项
|----api                        // OpenAPI/Swagger 规范，JSON 模式文件，协议定义文件
|----web                        // 特定于 Web 应用程序的组件
|----configs                    // 配置文件模板或默认配置
|----init                       // System init和 process manager/supervisor 配置
|----scripts                    // 执行各种构建、安装、分析等操作的脚本
|----build                      // 打包和持续集成
|----deployments                // IaaS、PaaS、系统和容器编排部署配置和模板
|----test                       // 额外的外部测试应用程序和测试数据
```

## Start

```
```