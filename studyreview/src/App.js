/* eslint-disable */

import "./App.css";
import { useState } from "react";

// document.querySelector('h4').innerHTML = title;

function App() {
  let [boardTitle, setBoardTitle] = useState([
    "변경 전 스프링부트",
    "리액트",
    "플러터",
  ]);
  let [goodNumber, setGoodNumber] = useState(0);
  let [modal, setModal] = useState("false");
  let [title, setTitle] = useState(0);
  let [inputText, setInputText] = useState("");

  function ChangeHandler() {
    let copy = [...boardTitle];
    copy[0] = "변경 후 스프링부트";
    setBoardTitle(copy);
  }

  function SortTitle() {
    let copy = [...boardTitle];
    copy.sort();
    setBoardTitle(copy);
  }

  // let num = [1, 2];
  // let a = num[0];
  // let c = num[1];
  // let [a, c] = [1, 2];

  [1, 2, 3].map(function (a) {
    return "abc";
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "pink", fontSize: "20px" }}>리액트복습</h4>
      </div>
      <button
        onClick={() => {
          ChangeHandler();
        }}
      >
        글 수정
      </button>
      <button
        onClick={() => {
          SortTitle();
        }}
      >
        글 정렬
      </button>
      {/* <div className="list">
        <h4 onClick={() => {setModal(!modal)}}>{ boardTitle[0] } <span onClick={() => { setGoodNumber(goodNumber+1)}}>👌</span> {goodNumber}</h4>
        <p>6월 14일 금요일</p>
      </div>
      <div className="list">
        <h4>{ boardTitle[1]}<span onClick={() => { setGoodNumber(goodNumber+1)}}>👌</span> {goodNumber}</h4>
        <p>6월 14일 금요일</p>
      </div>
      <div className="list">
        <h4>{ boardTitle[2] }<span onClick={() => { setGoodNumber(goodNumber+1)}}>👌</span> {goodNumber}</h4>
        <p>6월 14일 금요일</p>
      </div> */}

      {boardTitle.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal), setTitle(i);
              }}
            >
              {boardTitle[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setGoodNumber(goodNumber + 1);
                }}
              >
                👍
              </span>{" "}
              {goodNumber}
            </h4>

            <p>6월 15일 토요일</p>

            <button
              onClick={() => {
                let copy = [...boardTitle]
                copy.splice(i, 1);
                setBoardTitle(copy);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputText(e.target.value);
          console.log(inputText);
        }}
      />
      <button
        onClick={() => {
          let copy = [...boardTitle]
          copy.unshift(inputText);
          setBoardTitle(copy);
        }}
      >
        글 작성
      </button>

      {
        // 조건식 ? 참일 때 실행할 코드 : 거짓일 떄 실행할 코드
        modal == true ? (
          <Modal
            title={title}
            boardTitle={boardTitle}
            setBoardTitle={setBoardTitle}
          />
        ) : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4> {props.boardTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.boardTitle];
          copy[0] = "변경하기 완료";
          props.setBoardTitle(copy);
        }}
      >
        글 제목 수정
      </button>
    </div>
  );
}

export default App;
