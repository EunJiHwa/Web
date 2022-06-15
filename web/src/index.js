//import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';

//컴포넌트를 어디다 그려줄건지,index.html 파일에서 ID가 root인 엘리먼트를 찾아 뿌려줌
const rootElement = document.getElementById("root"); 


ReactDOM.render(<App />, rootElement);

export default reportWebVitals;