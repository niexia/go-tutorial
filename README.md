# go-tutorial

## Introduction

包括 golang 的基本语法，和 web 服务开发相关知识的笔记，可以在线进行查看

并基于 golang 实现一个分布式调度系统，支持 http 请求，运行 golang、shell、bat。

## Features

- [ ] golang 学习文档
- [ ] golang web 知识
- [ ] 实现一个分布式系统（[from crocodile](https://github.com/labulaka521/crocodile)）
  - [ ] 支持通过 web 页面添加、修改、复制和执行任务
  - [ ] 查看实时的任务执行日志
  - [ ] 支持多种类型的任务
  - [ ] 支持不同调度算法
  - [ ] 自定义告警策略
  - [ ] 权限控制
## Running

```sh
git clone https://github.com/niexia/go-tutorial
cd go-tutorial
```

### 查看文档

```sh
yarn install
npm run docs:dev
```

### 启动服务

```sh
docker-compose up -d
```

这样就会在浏览器上打开地址，你需要输入管理员账号和密码，然后就可以进入了。
