package main

import "fmt"
var num int = 10

func main() {
    fmt.Println(num)
}
//패키지 전역변수
/*
Golang의 모든 소스 코드는 어떤 패키지에 소속되게 된다.
이때 함수 밖에 변수를 선언하게 되면, 패키지내에서 사용할 수 있는 패키지 전역 변수를 생성할 수 있다.
*/