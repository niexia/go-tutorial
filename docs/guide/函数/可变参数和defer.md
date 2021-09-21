# 可变参数和defer

## 可变参数

```go
func sum(ops ...int) int {
  s := 0
  for _, op := range ops {
    s += op
  }

  return s
}
```

看起来和 js 的 rest 参数很类似，看个 🌰

```go
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
```

## defer 函数

这是一个延迟执行函数，函数返回前才执行，**一般可以用来清理资源或者某些锁**。即便在 `panic` 调用之后，依然会执行。

```go
func TestDefer(t *testing.T) {
  defer func() {
    t.Log("Clear resources")
  }()

  t.Log("Started")
  panic("fatal error") // defer 仍会执行
}
```

