import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: "hi",
  },
  methods: {
    inputChang(e) {
      console.log(e);
    },
  },
});
