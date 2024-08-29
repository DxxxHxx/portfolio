import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`html,
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 400;
  font-style: normal;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: "Noto Sans KR", sans-serif;
  /* height: 300vh; */
  /* background-color: #f3f3f3; */
  /* padding: 0px 10px;

  @media screen and (min-width: 768px) {
    padding: 0px 30px;
  } */
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
  outline: none;
}

.slide-in{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: tomato;
  transform-origin: bottom;
  z-index: 99999;
}

.slide-out{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: tomato;
  transform-origin: top;
  z-index: 99999;

}
`;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
