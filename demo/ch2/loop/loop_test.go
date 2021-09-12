package loop_test

import "testing"

func TestWhileLoop(t *testing.T) {
	n := 0
	// while (n < 5)
	for n < 5 {
		t.Log(n)
		n++
	}
}

func TestIfMultiSec(t *testing.T) {
	if a := 1 == 1; a {
		t.Log("1==1")
	}
}

// func TestIfMultiSec1(t *testing.T) {
// 	if v, err := someFunc(); err == nil {
// 		t.Log("failure")
// 	} else {
// 		t.Log("success")
// 	}
// }

func TestSwitchMultiCase(t *testing.T) {
	for i := 0; i < 5; i++ {
		switch i {
		case 0, 2:
			t.Log("Even")
		case 1, 3:
			t.Log("Odd")
		default:
			t.Log("it is not 0-3")
		}
	}
}

func TestSwitchCaseCondition(t *testing.T) {
	for i := 0; i < 5; i++ {
		switch {
		case i%2 == 0:
			t.Log("Even")
		case i%2 == 1:
			t.Log("Odd")
		default:
			t.Log("Unknow")
		}
	}
}
