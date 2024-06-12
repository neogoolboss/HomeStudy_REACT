import './App.css';

let title = '파이널 프로젝트 연습'
// document.querySelector('h4').innerHTML = title;

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'pink', fontSize: '20px'}}>리액트복습</h4>
      </div>
        <h4>{title}</h4>
    </div>
  );
}

export default App;
