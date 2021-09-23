package encaptest

import (
	"fmt"
	"testing"
	"unsafe"
)

type Employee struct {
	Id   string
	Name string
	Age  int
}

func TestCreateEmployeeObj(t *testing.T) {
	e := Employee{"0", "Bob", 20}

	e1 := Employee{Name: "Mike", Age: 30}

	e2 := new(Employee) // 返回指针
	e2.Id = "2"
	e2.Age = 22
	e2.Name = "Rose"

	t.Log(e)     // {0 Bob 20}
	t.Log(e1)    // { Mike 30}
	t.Log(e1.Id) //

	t.Log(e2)              // &{2 Rose 22}
	t.Logf("e is %T", e)   // e is encaptest.Employee
	t.Logf("e2 is %T", e2) // e2 is *encaptest.Employee
}

func (e Employee) String() string {
	fmt.Printf("Address is %x", unsafe.Pointer(&e.Name))
	return fmt.Sprintf("ID:%s-Name:%s-Age:%d", e.Id, e.Name, e.Age)
}
// func (e *Employee) String() string {
// 	// 调用时输出
// 	fmt.Printf("Address is %x", unsafe.Pointer(&e.Name))
// 	return fmt.Sprintf("ID:%s/Name:%s/Age:%d", e.Id, e.Name, e.Age)
// }

func TestStructOperations(t *testing.T) {
	e := Employee{"0", "Bob", 20}
	// 调用前输出
	fmt.Printf("Address is %x\n", unsafe.Pointer(&e.Name))
	t.Log(e.String())
}
