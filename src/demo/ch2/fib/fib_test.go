package fib

import (
	"fmt"
	"testing"
)

func TestFibList(t *testing.T) {
	// var a int = 1
	// var b int = 2
	// var (
	// 	a int = 1
	// 	b = 1
	// )
	// 类型推断
	a := 1
	b := 2
	fmt.Print(a)
	for i := 0; i < 5; i++ {
		fmt.Print(" ", b)
		tmp := a
		a = b
		b = tmp + a
	}
	fmt.Println()
}

func TestExchange(t *testing.T) {
	a := 1
	b := 2
	// tmp := a
	// a = b
	// b = tmp
	a, b = b, a
	t.Log(a, b)
}

func TestFib(t *testing.T) {
	var a int = 1
	var b int = 2
	fmt.Print(a)
	for i := 0; i < 5; i++ {
		fmt.Print(" ", b)
		tmp := a
		a = b
		b = tmp + a
	}
	fmt.Println()
}