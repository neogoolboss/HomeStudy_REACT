/* eslint-disable */

import { useState } from 'react';
import './App.css';
import Modal from './page/Modal';

{/*변수를 넣을 땐 중괄호 사용 -> 데이터 바인딩 */}
{/*style을 넣을땐 style={{스타일명: '값'}} */}
{/* font-size가 아닌 fontSize로 표현 */}
{/*useState 사용 시 [a, b]
  a는 state에 보관한 자료, b는 state변경을 도와주는 함수 */}
{/* 일반 변수는 갑자기 변경되면 html에 자동으로 반영 안됨 */}
{/* state는 갑자기 변경되면 state 쓰던 html은 자동으로 재렌더링 됨 */}
{/* state가 array/object면
    독립적인 카피본을 만들어서 수정해야함.
    state 카피할 땐 [...기존state]으로 만들어서 수정하자.*/}
{/*
    [1, 2, 3].map(function(){
       1. array 자료 갯수만큼 함수안의 코드 실행해줌
       2. 함수의 파라미터는 array안에 있던 자료
    })    
*/}
function App() {

  const [title, setTitle] = useState(['자바스크립트', 'HTML', '리액트']);
  const [goodNumber, setGoodNumber] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [inputText, setInputText] = useState('');


  
  function onClickHandler() {
    const copyNumber = [...goodNumber];
    copyNumber[i] = copyNumber[i] + 1
    setGoodNumber(copyNumber);
  }

  function onClickHandler2() {
    const copy = [...title];
    copy[0] = 'CSS';
    setTitle(copy);
  }

  function onClickHandler3() {
    const copy2 = [...title];
    setTitle(copy2.toSorted());
  }

  function onClickHandler4() {
    setModal(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>리액트연습</h4>
      </div>
      <button onClick={onClickHandler2}>글 내용 수정</button>
      <button onClick={onClickHandler3}>가나다 순 정렬</button>
      {/* <div className='list'>
        <h4>{ title[0] } <span onClick={onClickHandler}>👍</span> {goodNumber} </h4> 
        <p>3월 19일 화요일</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4> 
        <p>3월 19일 화요일</p>
      </div>
      <div className='list'>
        <h4 onClick={onClickHandler4}>{ title[2] }</h4> 
        <p>3월 19일 화요일</p>
      </div> */}


      {
        title.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {setModal(!modal), setModalTitle(i)}}>{ title[i] }
              <span onClick={(e)=>{ e.stopPropagation(); const copyNumber = [...goodNumber];
                                  copyNumber[i] = copyNumber[i] + 1
                                  setGoodNumber(copyNumber);}}
              >👍</span>{goodNumber[i]}</h4> 
              <p>3월 19일 화요일</p>
              <button onClick={() => {
                const deleteTitle = [...title];
                deleteTitle.splice(i, 1);
                setTitle(deleteTitle);
              }}>글 삭 제</button>

            </div>
            )
          })
        }

        <input onChange={(e)=>{setInputText(e.target.value);}}/>
        <button onClick={() => {
          const addTitle = [...title];
          addTitle.unshift(inputText);
          setTitle(addTitle);
        }}>글 발행</button>
      
        {
          modal == true ? <Modal modalTitle={modalTitle} color={'orange'} setTitle={setTitle} title={title}/> : null
        }


    </div>
  );
}

export default App;
