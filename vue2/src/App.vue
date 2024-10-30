<template>
  <div>
    <h1>Hello There!</h1>
    <some-component-ce
      msg="Prop text passed to component — Vue 3"
      @myEvent="handler"
    />
  </div>
</template>

<script>
import "./components-lib.es.js";

export default {
  name: "App",
  components: {},
  methods: {
    handler(a) {
      console.log("a", a);
    },
  },
};
</script>
