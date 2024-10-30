// Based on https://stackoverflow.com/a/70673060/5691091

import SomeComponent from "../components/HelloWorld.vue";
import { reactive, createApp, h } from "vue";

const createCustomEvent = (name: string, args: any = []) => {
  return new CustomEvent(name, {
    bubbles: false,
    composed: true,
    cancelable: false,
    detail: !args.length ? self : args.length === 1 ? args[0] : args,
  });
};

class VueCustomComponent extends HTMLElement {
  private _def: any;
  private _props = reactive<Record<string, any>>({});
  private _numberProps: string[];

  constructor() {
    super();

    this._numberProps = [];
    this._def = SomeComponent;
  }

  // Helper function to set the props based on the element's attributes (for primitive values) or properties (for arrays & objects)
  private setAttr(attrName: string) {
    let val: string | number | null =
      // @ts-ignore
      this[attrName] || this.getAttribute(attrName);

    if (val !== undefined && this._numberProps.includes(attrName)) {
      val = Number(val);
    }

    this._props[attrName] = val;
  }

  // Mutation observer to handle attribute changes, basically two-way binding
  private connectObserver() {
    return new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const attrName = mutation.attributeName as string;

          this.setAttr(attrName);
        }
      });
    });
  }

  // Make emits available at the parent element
  private createEventProxies() {
    const eventNames = this._def.emits as string[];

    if (eventNames) {
      eventNames.forEach((evName) => {
        const handlerName = `on${evName[0].toUpperCase()}${evName.substring(
          1
        )}`;

        this._props[handlerName] = (...args: any[]) => {
          this.dispatchEvent(createCustomEvent(evName, args));
        };
      });
    }
  }

  // Create the application instance and render the component
  private createApp() {
    const self = this;

    const app = createApp({
      render() {
        return h(self._def, self._props);
      },
    });

    app.mount(this);
  }

  // Handle element being inserted into DOM
  connectedCallback() {
    const componentProps = Object.entries(SomeComponent.props);
    componentProps.forEach(([propName, propDetail]) => {
      // @ts-ignore
      if (propDetail.type === Number) {
        this._numberProps.push(propName);
      }

      this.setAttr(propName);
    });

    this.createEventProxies();
    this.createApp();
    this.connectObserver().observe(this, { attributes: true });
  }
}

// Register as custom element
customElements.define("some-component-ce", VueCustomComponent);
