import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

/*
22.03.02 일일업무이슈
오늘 할 일
 - 가쟈 디앱 만들기
 - 기능 1 : 10개의 아이템이 존재하고 뽑기 1회 당 정해진 가스를 소모하면서 랜덤 확률로 아이템을 획득한다.
 - 기능 2 : 뽑기 5회마다 1회의 보너스 기회를 준다.. (지금까지 뽑기 내역은 이벤트를 통해 처리한다.)
*/
