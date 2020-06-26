# 编写第一个 Go 程序

## 开发环境变量设置

## 应用程序的入口

1. 必须是 `main` 包： `package main`
2. 必须是 `main` 方法：`func main()`
3. 文件名不一定是 `main.go`

## 退出返回值

与其他程序的不同

- Go 中 `main` 不支持任何返回值
- 通过 `os.Exit` 来返回状态

```go
func main()  {
	fmt.Println("hello world")
	os.Exit(-1)
}
```

## 获取命令行参数

与其他语言的差异

- `main` 不支持传入参数

```go
func main(arg []string)
```

- 在程序中通过 `os.Args` 获取命令行参数

```go
package main

import "fmt"
import "os"

func main()  {
	fmt.Println(os.Args)
	if len(os.Args) > 1 {
		fmt.Println("hello world", os.Args[1])
	}
}
```