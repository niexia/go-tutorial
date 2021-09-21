# Map 和工厂模式

首先
- Map 的 value 可以是一个方法
- 与 Go 的 Dock type 接口方式一起，可以方便的实现单一方法对象的工厂模式

```go
func TestMapWithFunValue(t *testing.T) {
	m := map[int]func(op int) int{}
	m[1] = func(op int) int {return op}
	m[2] = func(op int) int {return op*op}
	m[3] = func(op int) int {return op*op*op}

	t.Log(m[1](2), m[2](2), m[3](2))
}
```

## 实现 Set

Go 的内置集合中没有 Set 实现，可以 map[type]bool 来实现
- 元素的唯一性
- 基本操作
  - 添加元素
  - 判断元素是否存在
  - 删除元素
  - 元素个数

```go
func TestMapForSet(t *testing.T) {
	mySet := map[int]bool{}

	mySet[1] = true
	n:=1
	if mySet[n] {
		t.Logf("%d is existing", n)
	} else {
		t.Logf("%d is not existing", n)
	}

	mySet[3] = true
	t.Log(len(mySet))

	delete(mySet, 1)
	n = 1
	if mySet[n] {
		t.Logf("%d is existing", n)
	} else {
		t.Logf("%d is not existing", n)
	}
}
```
