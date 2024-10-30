## Approaches to use Vue 3 component in Vue 2 Application

1. Using module federation
`vue3/src/entry/federated-component.ts` shows how a Vue 3 component can be federated to be used inside a Vue 2 app. It essentially requires a Vue 3 instance in isolation using `createVNode` Vue API and renders the given component. Additional configuration for module federated components is defined in vite.config.ts. The federated component can then be consumed in Vue 2 app by defining remote in its module federation config.

2. Using custom made web component
`vue3/src/entry/custom-web-component.ts` shows this approach using custom made web component by creating a class extending `HTMLElement` and then registering it globally using `customElement.define` Web API. This component can then be used in Vue 2 app by importing the Vue 3 app build.

3. Using `defineCustomElement` Vue 3 API
`vue3/src/entry/vue-web-component.ts` shows this approach which uses Vue 3 API `defineCustomElement` which essentially does the same thing as approach 2. This component can then be used in Vue 2 app by importing the Vue 3 app build.