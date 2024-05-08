//src/index.js是entry point
import React from "react"; //React相關的套件
import ReactDOM from "react-dom/client"; //react可以不限於使用在apps還有mobile以及vr等等 所以會需要分開載入兩個套件原因
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>HELLLLLLLO</h1>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
