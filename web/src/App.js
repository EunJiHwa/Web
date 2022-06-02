import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>

}

function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1"> html </a></li>
    </ol>
  </nav>

}

function Article(){
  return <article>
      <h2>Welcome</h2>
      Hello, web
    </article>

}


function App() {
  return (
    //layout/진입점
    //header main 공통(common) =>같은 선상
    //main안에 폴더(회원가입,로그인,,,) => 페이지 그리기
    //회원가입 안에 목적단위
    //버튼도 따로=> 공통이면 공통영역으로
    <div>
    <Header></Header>
    <Nav></Nav>
    <Article></Article>
    </div>
    //layout 영역 생성 후 안에 header 등...
  );
}

export default App;
