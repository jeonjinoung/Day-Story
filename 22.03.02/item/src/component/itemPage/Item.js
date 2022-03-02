import React, { useState } from "react";

export const Item = (data) => {
  const [item, SetItem] = useState([
    "건즈",
    "배그",
    "서든",
    "롤",
    "윷놀이",
    "덕몽",
    "어몽",
    "메이플",
    "로아",
    "마블",
  ]);

  const getRandomItem = function (length) {
    return parseInt(Math.random(item) * length);
  };

  const handleOnclick = () => {
    getRandomItem();
    console.log(item[getRandomItem(item.length)]);
  };

  return (
    <div>
      <button onClick={handleOnclick}>선택</button>
    </div>
  );
};

export default Item;

/*
22.03.02 일일업무이슈
오늘 할 일
 - 가쟈 디앱 만들기
 - 기능 1 : 10개의 아이템이 존재하고 뽑기 1회 당 정해진 가스를 소모하면서 랜덤 확률로 아이템을 획득한다.
 - 기능 2 : 뽑기 5회마다 1회의 보너스 기회를 준다.. (지금까지 뽑기 내역은 이벤트를 통해 처리한다.)
*/
