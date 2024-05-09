//src/index.js是entry point
import React from "react"; //React套件 view library
//react可以不限於使用在apps還有mobile以及vr等等 所以會需要分開載入上述兩個套件原因，而react-dom/client適用於Dom web
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";
// import App from "./App";
import "tachyons";
import { robots } from "./robots";
import reportWebVitals from "./reportWebVitals";

//ReactDOM.render(): 這是 React DOM 提供的一個方法，它用來將 React 元素渲染到 DOM 中。這個方法需要兩個參數：第一個參數是要渲染的 React 元素，第二個參數是指定渲染目標的 DOM 元素
ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <h1>HELLLLLLLO</h1>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
