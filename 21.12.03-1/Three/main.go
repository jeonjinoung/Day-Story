package main

import "fmt"

func main() {
	num1 := 10
  
	{
	  num2 := 20
	  fmt.Println(num2)
	}
  
	fmt.Println(num1)
	// fmt.Println(num2) // ERROR!!
  }
//변수 스코프
/*
Golang에서는 변수의 스코프(Scope)가 존재하며
변수는 해당 스코프안에서만 사용이 가능하다. 스코프는 중괄호({})를 통해 표현한다.
*/