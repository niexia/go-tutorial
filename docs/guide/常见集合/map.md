# map

## map 声明

```go
m := map[string]int{"one": 1, "two": 2, "three" : 3}

m1 := map[string]int{}
m1["one"] = 1

m2 := make(map[string]int, 10 /* Initial Capacity*/)
// 为什么不初始化 len？
// 在切片中设置 len 的话就初始化默认值为 0，
// 但是在 map 中这是做不到的，所以没有这个 len
```

接下来看一个🌰
```go
func TestInitMap(t *testing.T) {
	m1 := map[int]int{1: 1, 2: 4, 3: 9}
	t.Log((m1[2]))
	t.Logf("len m1=%d", len(m1)) // 3

	m2 := map[int]int{}
	m2[4] = 16
	t.Logf("len m2=%d", len(m2)) // 1

	m3 := make(map[int]int, 10)
	t.Logf("len m3=%d", len(m3)) // 0
	// t.Logf("len m3=%d", cap(m3)) // 不能求 cap，invalid argument m3 (type map[int]int) for cap
}
```

注意 map 访问一个不存在的 key，它的值默认返回 0，那怎么区分不存在还是本来就是 0？

```go
func TestAccessNotExistingKey(t *testing.T) {
	m1:=map[int]int{}
	t.Log((m1[1])) // 0: 访问不存在的输出 0

	m1[2] = 0
	t.Log(m1[2]) // 0，也是 0 那怎么区分？

	// 需要主动判断
	if v,ok:=m1[3]; ok {
		t.Log("key 3 is existing",v)
		} else {
			t.Log("key 3 is not existing.")
		}
}
```

## Map 遍历

和数组类似，通过 `range`:

```go
func TestTravelMap(t *testing.T) {
	m1 := map[int]int{1: 1, 2: 4, 3: 9}
	for k,v:=range m1 {
		t.Log(k, v)
	}
}
```