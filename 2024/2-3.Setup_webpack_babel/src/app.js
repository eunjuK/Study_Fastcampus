import { createDOM, render } from "./react";

const vdom = {
  tag: "div",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {
            style: "color: red",
          },
          children: ["First Item"],
        },
        {
          tag: "li",
          props: {
            style: "color: blue",
          },
          children: ["Second Item"],
        },
        {
          tag: "li",
          props: {
            style: "color: green",
          },
          children: ["Third Item"],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
