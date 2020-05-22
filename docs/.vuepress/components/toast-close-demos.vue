<template>
  <div>
    <j-button @click="onClickButton">上方弹出</j-button>
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
  },
  methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          }
        }
      });
    }
  }
};
</script>

