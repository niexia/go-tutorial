package my_map

import "testing"

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

func TestTravelMap(t *testing.T) {
	m1 := map[int]int{1: 1, 2: 4, 3: 9}
	for k,v:=range m1 {
		t.Log(k, v)
	}
}