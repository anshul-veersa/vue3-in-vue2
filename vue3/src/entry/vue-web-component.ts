import HelloWorld from "../components/HelloWorld.vue";
import { defineCustomElement } from "vue";

const wc = defineCustomElement(HelloWorld);

customElements.define("some-component-ce", wc);
