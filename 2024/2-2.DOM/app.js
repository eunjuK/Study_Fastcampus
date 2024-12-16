function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

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
          props: {},
          children: ["First Item"],
        },
        {
          tag: "li",
          props: {},
          children: ["Second Item"],
        },
        {
          tag: "li",
          props: {},
          children: ["Third Item"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(vdom));
