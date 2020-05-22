<template>
  <div>
    <j-button @click="$toast('点击弹出提示')">上方弹出</j-button>
    <j-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</j-button>
    <j-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</j-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../src/button.vue";
import Toast from "../../../src/toast.vue";
import Plugin from "../../../src/plugin.js";
Vue.use(Plugin);
export default {
  components: {
    "j-tabs-pane": Toast,
    "j-button": Button
  }
};
</script>