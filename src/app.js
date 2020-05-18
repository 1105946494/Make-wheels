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

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-sider", Sider);
Vue.component("g-toast", Toast);
Vue.use(Plugin);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-popover", Popover);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);

new Vue({
  el: "#app",
  data: {
    selectedTab: "finance",
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
