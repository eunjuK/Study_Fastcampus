/* @jsx createElement  */
// createElement 는 사용하고 있지 않지만 불러와줘야 정상 동작
// bundle 파일이 실행되고 jsx 가 create 함수 호출 구문으로 바껴있기 때문에 필요
import { createElement, render } from "./react";

function Title(props) {
  return <h1>{ props.children }</h1>;
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>
}

const vdom = <div>
  {/* <h1>Create React</h1> */}
  <Title label="React">React Test</Title>
  <ul>
    <Item color="red">첫번째 아이템</Item>
    <Item color="orange">두번째 아이템</Item>
    <Item color="green">세번째 아이템</Item>
  </ul>
</div>

render(vdom, document.querySelector("#root"));
