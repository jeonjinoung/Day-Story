package main

import "fmt"

func main() {

	type myInt int

	var myNum myInt = 10;
	var num int =10;
	
	fmt.Printf("%T\n", myNum)
	fmt.Printf("%T\n", num)
}
//타입정의
