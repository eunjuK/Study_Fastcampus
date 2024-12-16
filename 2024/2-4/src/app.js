import { createDOM, createElement, render } from "./react";

const vdom = createElement("div", {}, 
  createElement("h1", {}, "Create React"), 
  createElement("ul", {}, 
    createElement("li", { style: "color: red" }, "첫번째 아이템"),
    createElement("li", { style: "color: blue" }, "두번째 아이템"),
    createElement("li", { style: "color: green" }, "세번째 아이템")
  )
);

render(vdom, document.querySelector("#root"));
