package string_fn_test

import (
	"strconv"
	"testing"
)

func TestString(t *testing.T) {
	var s string
	t.Log(s) // 初始化默认值为 ""
	s = "hello"
	t.Log(len(s)) // 5：是英文字母的长度

	// string 是不可变的 byte slice
	// s[1] = "3" // cannot assign to s[1] (value of type byte)

	// 可以存储任何二进制数据
	// 长度为 3，由 3 个 byte 组成
	// 实际一个中文字，所以 len 不一定是字符长度
	s = "\xE4\xB8\xA5"
	t.Log(s)      // 严
	t.Log(len(s)) // 3
}

func TestUnicode(t *testing.T) {
	var s string
	s = "中"
	t.Log(len(s)) // 3：byte 数

	c := []rune(s) // rune 返回 unicode
	t.Log(len(c))  // 1：unicode 只有一个

	t.Logf("中 unicode %x", c[0]) // 4e2d
	t.Logf("中 UTF8 %x", s)       // e4b8ad
}

func TestStringRoRune(t *testing.T) {
	s := "后端开发"
	for _, c := range s {
		t.Logf("%[1]c %[1]x", c)
		// 后 540e
		// 端 7aef
		// 开 5f00
		// 发 53d1
		// 可以看到会默认帮我们转成 rune
	}
}

func TestStringConvert(t *testing.T) {
	s := strconv.Itoa(10)
	t.Log("str" + s)
}
