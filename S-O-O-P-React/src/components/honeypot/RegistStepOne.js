
function RegistStepOne({allCultureList, posterClick, selectedIndex}) {

    return (
        <div className='select-event'>
            <div className='select-container'>
                <select className='select-interest'>
                    <option>카테고리</option>
                    <option>전시</option>
                    <option>공연</option>
                    <option>팝업</option>
                    <option>어쩌구</option>
                    <option>저쩌구</option>
                </select>
                <select className='select-region'>
                    <option>지역</option>
                    <option>서울</option>
                    <option>경기도</option>
                    <option>경상도</option>
                    <option>전라도</option>
                    <option>강원도</option>
                </select>
            </div>
            {allCultureList.length > 0 ? (
                <div className='select-api-container'>
                    {allCultureList.map((performance, index) => (
                        <div
                        className={`one-culture ${selectedIndex === index ? 'selected' : ''}`}
                        key={index}
                        onClick={() => posterClick(index)}
                    >
                        <img className={`poster ${selectedIndex === index ? 'selected' : ''} ${selectedIndex !== null && selectedIndex !== index ? 'grayscale' : ''}`} src={performance.thumbnail} alt={performance.title} />
                        {selectedIndex === index && (
                            <img className="confirm-icon" src={`${process.env.PUBLIC_URL}/images/commons/icon_confirm.png`} alt="선택됨" />
                        )}
                    </div>
                    ))}
                </div>
            ) : (
                <p>데이터를 불러오는 중입니다...</p>
            )}
            {selectedIndex !== null ? (
                <div>
                    <div className='culture-info-title'>
                        <div className='index'>제목</div>
                        <div className='content'>{allCultureList[selectedIndex].title}</div>
                    </div>
                    <div className='culture-info-title'>
                        <div className='index'>기간</div>
                        <div className='content'>{`${allCultureList[selectedIndex].startDate} ~ ${allCultureList[selectedIndex].endDate}`}</div>
                    </div>
                    <div className='culture-info-title'>
                        <div className='index'>지역</div>
                        <div className='content'>{allCultureList[selectedIndex].area}</div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='culture-info-title'>
                        <div className='index'>제목</div>
                    </div>
                    <div className='culture-info-title'>
                        <div className='index'>기간</div>
                    </div>
                    <div className='culture-info-title'>
                        <div className='index'>지역</div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default RegistStepOne;