import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    // federation({
    //   name: "vue3App",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./WrappedComponent": {
    //       name: "WrappedComponent",
    //       import: "./src/components/Wrapper.js",
    //     },
    //     "./Component": {
    //       name: "Component",
    //       import: "./src/components/HelloWorld.vue",
    //     },
    //   },
    //   shared: require("./package.json").dependencies,
    // }),
  ],
  build: {
    lib: {
      entry: "./src/components/custom-element.js",
      name: "ComponentsLib",
      fileName: (format) => `components-lib.${format}.js`,
    },
  },
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
});
