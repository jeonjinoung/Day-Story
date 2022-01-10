package main

import "fmt"

func main() {
	tmp := make(map[string]string)
  
	tmp["name"] = "John"
	tmp["job"] = "Programmer"
  
	fmt.Println(tmp)
  
	for k, v := range tmp {
	  fmt.Println(k, v)
	}
  
	for k := range tmp {
	  fmt.Println(k)
	}
  
	for _, v := range tmp {
	  fmt.Println(v)
	}
  }
  //빈칸 지시자
  /*
 
  Golang에서는 선언한 변수는 반드시 사용해야 한다. 
  하지만 변수를 할당은 해야 하지만 사용하지 않을 때 빈칸 지시자(Blank identifier, _)를 사용하여 에러를 피할 수 있다.

  */