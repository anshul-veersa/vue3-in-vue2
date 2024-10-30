import HelloWorld from "../components/HelloWorld.vue";
import { Component, createVNode, render } from "vue";

function wrapper(component: Component) {
  const el = document.createElement("div");
  let vNode = createVNode(component);
  render(vNode, el);

  return { vNode, el };
}

export default wrapper(HelloWorld);
