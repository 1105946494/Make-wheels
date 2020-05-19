import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import Footer from "./footer";
import Toast from "./toast";
import Plugin from "./plugin";
import createElement from "vue";
import TabsPane from "./tabs-pane";
import TabsItem from "./tabs-item";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import Tabs from "./tabs";
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";

const h = createElement;

Vue.component("j-button", Button);
Vue.component("j-icon", Icon);
Vue.component("j-button-group", ButtonGroup);
Vue.component("j-input", Input);
Vue.component("j-row", Row);
Vue.component("j-col", Col);
Vue.component("j-layout", Layout);
Vue.component("j-header", Header);
Vue.component("j-content", Content);
Vue.component("j-footer", Footer);
Vue.component("j-sider", Sider);
Vue.component("j-toast", Toast);
Vue.use(Plugin);
Vue.component("j-tabs", Tabs);
Vue.component("j-tabs-body", TabsBody);
Vue.component("j-tabs-head", TabsHead);
Vue.component("j-tabs-item", TabsItem);
Vue.component("j-tabs-pane", TabsPane);
Vue.component("j-popover", Popover);
Vue.component("j-collapse", Collapse);
Vue.component("j-collapse-item", CollapseItem);

new Vue({
  el: "#app",
  data: {
    selectedTab: ["2", "1"],
  },
  methods: {
    yyy() {
      console.log("yyy");
    },
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast(
        `你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`,
        {
          position: position,
          enableHtml: false,
          closeButton: {
            text: "啥？",
            callback() {
              console.log("哦");
            },
          },
          autoClose: 3,
        }
      );
    },
  },
});
