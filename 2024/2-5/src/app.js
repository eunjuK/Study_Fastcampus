/* @jsx createElement  */
// createElement 는 사용하고 있지 않지만 불러와줘야 정상 동작
// bundle 파일이 실행되고 jsx 가 create 함수 호출 구문으로 바껴있기 때문에 필요
import { createDOM, createElement, render } from "./react";

const vdom = <div>
  <h1>Create React</h1>
  <ul>
    <li style="color: red">첫번째 아이템</li>
    <li style="color: blue">두번째 아이템</li>
    <li style="color: green">세번째 아이템</li>
  </ul>
</div>

render(vdom, document.querySelector("#root"));
