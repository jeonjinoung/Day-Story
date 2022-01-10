package main

import "fmt"

func main() {
    const num int = 10
	const value int = 10
	// value = 20
	// 한번 초기화된 상수는 다시 값을 설정할 수 없습니다. 값을 설정하게 되면 컴파일 에러가 발생합니다.
    fmt.Println(num)
    fmt.Println(value)
}
/*
상수는 변수와 다르게 설정한 값을 변경할 수 없습니다.
Golang에서 상수를 사용하는 방법을 알아보기 위해 main.go 파일을 생성하고 다음과 같이 수정합니다.
*/