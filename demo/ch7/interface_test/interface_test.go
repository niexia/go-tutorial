 package interfacetest

 type Programmer interface {
	 WriteHelloWorld() string
 }

 type GoProgrammer struct {

 }

 func (go *GoGoProgrammer) WriteHelloWorld() string {
	 return "fmt.Println(\"hello world\")"
 }


 func TestClient(t *testing.T) {
	 var p Programmer
	 p = new()
 }