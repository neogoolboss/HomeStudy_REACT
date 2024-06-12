
function Modal(props){



    return (
     
          <div className='modal' style={{backgroundColor: props.color}}>
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
          <button onClick={()=>{ 
            const copy = [...props.title];
            copy[0] = '자바하고싶다';
            props.setTitle(copy)
          }}>글 내용 수정</button>
          </div>
    );
}

export default Modal;
  