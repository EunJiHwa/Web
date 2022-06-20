// components : HTML에 엘레멘트를 오직 VIEW를 해주기 위한 컴포넌트 단위로 구성한 폴더
import Layout from "./containers/Layout"

// export : 내보내기 < -> import : 불러오기
// export default : 하나의 모듈 당 한개를 정의한 함수를 사용한다.
// export names : 하나의 모듈 당 여려개를 정의한 함수를 사용한다.

const App = () => {
  return ( 
    <Layout />
  )
}

export default App