pragma solidity ^0.5.0;


contract Game {
    //첫째로 계정의 사과보유량을 기록하는 mapping 선언
    // mapping (address=>uint16) myApple;

    //  uint dnaDigits = 16;
     uint gameAddress = 16;

    //  uint gameModulus = 10 ** dnaDigits;
    //우리의 주소를 DNA가 16자리 숫자가 되도록 하기 위해 
     uint gameModulus = 10 ** gameAddress;

    struct GameItem {
      string name;
      uint itemAddress;
    }

  GameItem[] public items;
  //아이템 선택할때 사용되는 함수
  function itemSeclect(string name, uint itemAddress) private {
    //함수를 추가해준다.
      items.push(GameItem(name, itemAddress));
  }
  //아이템 랜덤으로 선택될수 있도록 도와주는함수
  function _generateRandomItem(string _str) private view returns (uint) {
        //uint 랜덤변수선언 그안에 값으로 변수로 선언
        uint rand = uint(keccak256(_str));
        return rand % gameModulus;
        
  }

  
}


/*
22.03.02 일일업무이슈
오늘 할 일
 - 가쟈 디앱 만들기
 - 기능 1 : 10개의 아이템이 존재하고 뽑기 1회 당 정해진 가스를 소모하면서 랜덤 확률로 아이템을 획득한다.
 - 기능 2 : 뽑기 5회마다 1회의 보너스 기회를 준다.. (지금까지 뽑기 내역은 이벤트를 통해 처리한다.)
 */