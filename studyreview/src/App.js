/* eslint-disable */

import './App.css';
import { useState } from 'react';

// document.querySelector('h4').innerHTML = title;

function App() {

  let [boardTitle, setBoardTitle] = useState(['스프링부트', '리액트', '플러터']);
  let [goodNumber, setGoodNumber] = useState(0);

  // let num = [1, 2];
  // let a = num[0];
  // let c = num[1];
  // let [a, c] = [1, 2];

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'pink', fontSize: '20px'}}>리액트복습</h4>
      </div>
      <div className="list">
        <h4>{ boardTitle[0] } <span onClick={() => { setGoodNumber(goodNumber+1)}}>👌</span> {goodNumber}</h4>
        <p>6월 14일 금요일</p>
      </div>
      <div className="list">
        <h4>{ boardTitle[1]}<span onClick={() => { setGoodNumber(goodNumber+1)}}>👌</span> {goodNumber}</h4>
        <p>6월 14일 금요일</p>
      </div>
      <div className="list">
        <h4>{ boardTitle[2] }<span onClick={() => { setGoodNumber(goodNumber+1)}}>👌</span> {goodNumber}</h4>
        <p>6월 14일 금요일</p>
      </div>
    </div>
  );
}

export default App;
