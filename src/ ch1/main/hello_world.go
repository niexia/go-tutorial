// 包，表明代码所在的模块（包）
package main

// 依赖
import "fmt"
import "os"

// 功能实现
func main()  {
	fmt.Println(os.Args)
	if len(os.Args) > 1 {
		fmt.Println("hello world", os.Args[1])
	}
}