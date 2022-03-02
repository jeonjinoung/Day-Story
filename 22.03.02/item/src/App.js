import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Item } from "./component/itemPage/Item";
import { Select } from "./component/selectPage/Select";
import { MainLayOut } from "./component/mainPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainLayOut />}></Route>
          <Route path="item" element={<Item />}></Route>
          <Route path="select" element={<Select />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

/*
22.03.02 일일업무이슈
오늘 할 일
 - 가쟈 디앱 만들기
 - 기능 1 : 10개의 아이템이 존재하고 뽑기 1회 당 정해진 가스를 소모하면서 랜덤 확률로 아이템을 획득한다.
 - 기능 2 : 뽑기 5회마다 1회의 보너스 기회를 준다.. (지금까지 뽑기 내역은 이벤트를 통해 처리한다.)
*/
