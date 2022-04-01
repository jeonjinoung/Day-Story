import "./App.css";
import React, { useState } from "react";
import { createStore } from "redux";
//Provider => 어떤컴포넌트 들에게 재공할 것인가 ? 가장 바깥쪽울타리라고 생각하면된다
//useSelector
//useDispatch
//connect => 사용안할 예정
import { Provider, useSelector, useDispatch, connect } from "react-redux";

//스토어 안에있는 스테이트를ㄹ 어떻게 바꿀것인가?
//currentState : 현재의 스테이트값
//action : 바꿀것인지 => return 값이 => currentState의 값이 된다.

//각각의 스테이트 값을 불변하게 해야한다. => const newState = { ...currentState };
//> const newState = { ...currentState }; 과거의 현재 스테이트를 복제 => 복제본을 수정하면 기존의 스테이트값을 유지할수 있다/

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      //기본 스테이트값이 1이다 라는게된다.?
      number: 1,
    };
  }

  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  //내가 리턴해줄 새로운 값
  return newState;
}

const store = createStore(reducer);
function App() {
  //넘버 스테이트의 값을 제일 밑에 left3에게 전달
  return (
    <>
      <div id="contaier">
        <h1>Root : </h1>
        <div id="grid">
          <Provider store={store}>
            <Left1></Left1>
            <Right1></Right1>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;

function Left1() {
  return (
    <>
      <div id="contaier">
        <h1>Left1 :</h1>
        <Left2></Left2>
      </div>
    </>
  );
}

function Left2() {
  console.log(2);
  return (
    <>
      <div id="contaier">
        <h1>Left2:</h1>
        <Left3></Left3>
      </div>
    </>
  );
}

//함수를 선언해서 1의 값이 나오게끔 하기
// function f(state) {
//   return state.number;
// }

//컴포넌트안에 useSelector를 선언해서 바꿔줄 변수를 선언해준다.
// const number = useSelector(f) === const number = useSelector((state) => state.number);
function Left3() {
  console.log(3);
  const number = useSelector((state) => state.number);
  return (
    <>
      <div id="contaier">
        <h1>Left3:{number}</h1>
      </div>
    </>
  );
}

function Right1() {
  return (
    <>
      <div>
        Right1
        <Right2></Right2>
      </div>
    </>
  );
}

function Right2() {
  return (
    <>
      <div>
        Right2
        <Right3></Right3>
      </div>
    </>
  );
}

function Right3() {
  //디스패치 선언 변화의 값을 줄것이다.
  const dispatch = useDispatch();
  return (
    <>
      <div>Right3</div>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
    </>
  );
}

// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   //넘버 스테이트의 값을 제일 밑에 left3에게 전달
//   const [number, setNumber] = useState(1);

//   return (
//     <>
//       <div id="contaier">
//         <h1>Root : {number}</h1>
//         <div id="grid">
//           <Left1 number={number}></Left1>
//           <Right1
//             onIncrese={() => {
//               setNumber(number + 1);
//             }}
//           ></Right1>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// function Left1(props) {
//   return (
//     <>
//       <div id="contaier">
//         <h1>Left1 : {props.number}</h1>
//         <Left2 number={props.number}></Left2>
//       </div>
//     </>
//   );
// }

// function Left2(props) {
//   return (
//     <>
//       <div id="contaier">
//         <h1>Left2:{props.number}</h1>
//         <Left3 number={props.number}></Left3>
//       </div>
//     </>
//   );
// }

// function Left3(props) {
//   return (
//     <>
//       <div id="contaier">
//         <h1>Left3:{props.number}</h1>
//       </div>
//     </>
//   );
// }

// function Right1(props) {
//   return (
//     <>
//       <div>
//         Right1
//         <Right2
//           onIncrese={() => {
//             props.onIncrese();
//           }}
//         ></Right2>
//       </div>
//     </>
//   );
// }

// function Right2(props) {
//   return (
//     <>
//       <div>
//         Right2
//         <Right3
//           onIncrese={() => {
//             props.onIncrese();
//           }}
//         ></Right3>
//       </div>
//     </>
//   );
// }

// function Right3(props) {
//   return (
//     <>
//       <div>Right3</div>
//       <input
//         type="button"
//         value="+"
//         onClick={() => {
//           props.onIncrese();
//         }}
//       ></input>
//     </>
//   );
// }
