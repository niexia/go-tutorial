package operate_test

import "testing"

func TestCompareArray(t *testing.T) {
	a := [...]int{1, 2, 3, 4}
	b := [...]int{1, 3, 4, 5}
	// c := [...]int{1, 2, 3, 4, 5}
	d := [...]int{1, 2, 3, 4}
	t.Log(a == b)
	// t.Log(a == c) // invalid operation: a == c (mismatched types [4]int and [5]int)
	t.Log(a == d)
}


const (
	Readable = 1 << iota
	Writable
	Executable
)

func TestBitClear(t *testing.T) {
	a := 7
	a = a &^ Readable
	t.Log(a == Readable, a&Writable == Writable, a&Executable == Executable)
}