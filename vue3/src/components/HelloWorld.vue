<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
const count = ref(0);

const emit = defineEmits<{
  myEvent: [];
}>();

function handleClick() {
  emit("myEvent");
  count.value++;
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="handleClick">count is {{ count }}</button>
    <p><code>HelloWorld.vue</code> Component from vue3 app.</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.some-unused-class {
  text-align: center;
}
</style>
