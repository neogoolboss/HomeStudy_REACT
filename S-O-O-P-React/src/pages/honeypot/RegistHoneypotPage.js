import './RegistHoneypotPage.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import RegistStepOne from '../../components/honeypot/RegistStepOne';
import RegistStepTwo from '../../components/honeypot/RegistStepTwo';


function RegistHoneypotPage({cultureList}) {

    const parsedData = JSON.parse(cultureList);
    const allCultureList = parsedData.perforList || [];
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const [registStep, setRegistStep] = useState(1); // 등록 순서


    const posterClick = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    const nextBtnClick = () => {
        if (registStep === 1) {
            setRegistStep(2);
        }
    }

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    

    /* 확인버튼 */
    const okBtn = () => {
        setShowConfirmModal(false);
    }

    const registBtn = () => {
        setShowConfirmModal(true);
    }

    return (
        <div className='honeypot-regist-main-content'>
            <div className='honeypto-regist-container'>
                <div className="honeypotpage-title">
                    <p>허니팟 등록</p>
                </div>
                <div className='regist-procedure'>
                    <button className={`step ${registStep === 1 ? 'active' : ''}`}><span>1</span>공연/전시</button>
                    <button className={`step ${registStep === 2 ? 'active' : ''}`}><span>2</span>모집 정보 입력</button>
                </div>
                
                    {registStep === 1 && (
                        <RegistStepOne
                            allCultureList={allCultureList}
                            posterClick={posterClick}
                            selectedIndex={selectedIndex}
                        />
                    )}
                    {registStep === 2 && (
                        <RegistStepTwo
                            selectedIndex={selectedIndex}
                            allCultureList={allCultureList}
                        />
                    )}
                
                    {registStep === 1 && (
                        <div className='regist-btn-container'>
                        <button className='regist-cancle-btn' onClick={() => navigate('/honeypot')}>취소</button>
                        <button className='regist-next-btn' onClick={ nextBtnClick }>다음</button>
                    </div>    
                    )}
                    {registStep === 2 && (
                        <div className='regist-btn-container'>
                        <button className='regist-cancle-btn' onClick={() => navigate('/honeypot/regist', setRegistStep(1))}>이전</button>
                        <button className='regist-next-btn' onClick={registBtn}>생성</button>
                    </div>    
                    )}
                
            </div>
            {/* 제출확인 Modal */}
            {showConfirmModal && (
                <div className="regist-confirm-modal-container">
                <div className="regist-confirm-modal-content">
                <img src={`${process.env.PUBLIC_URL}/images/commons/icon_confirm.png`}/>
                    <p className="regist-confirm-modal-semibold">허니팟 등록이 완료되었습니다.</p>
                    <p className="regist-confirm-modal-regular">함께 즐거운 문화 생활을 즐겨보세요.</p>
                    <div className="regist-confirm-modal-buttons">
                    <button className="regist-confirm-modal-button yes" onClick={okBtn}>
                        확인
                    </button>
                    </div>
                </div>
                </div>
            )}    
            
        </div>
    )
}

export default RegistHoneypotPage;