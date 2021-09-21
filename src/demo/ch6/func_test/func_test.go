package functest

import (
	"fmt"
	"math/rand"
	"testing"
	"time"
)

func returnMultiValues() (int, int) {
	return rand.Intn(10), rand.Intn(20)
}

func TestFn(t *testing.T) {
	// 一般第二个参数用于表示错误，这里先忽略
	a, _ := returnMultiValues()
	t.Log(a)
}

/* 函数式编程 */
func timeSpent(inner func(op int) int) func(op int) int {
	return func(n int) int {
		start := time.Now()
		ret := inner(n)
		fmt.Println("time spent: ", time.Since(start).Seconds())
		return ret
	}
}

func slowFun(op int) int {
	time.Sleep(time.Second * 1)
	return op
}

func TestTemeFn(t *testing.T) {
	ts := timeSpent(slowFun)
	t.Log(ts(10))
}

/* 可变参数 */
func Sum(ops ...int) int {
	s := 0
	for _, op := range ops {
		s += op
	}
	return s
}
func TestVarParam(t *testing.T) {
	t.Log(Sum(1, 2, 3, 4))
	t.Log(Sum(1, 2, 3, 4, 5))
}


/* defer */
func Clear() {
	fmt.Println("Clear resources")
}

func TestDefer(t *testing.T) {
	defer Clear()
	fmt.Println("Start")
}