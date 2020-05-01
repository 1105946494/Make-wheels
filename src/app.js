import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import chai from "chai";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
});

//单元测试
const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "ishezhi",
    },
  });
  vm.$mount("#test");
  let useElement = vm.$el.querySelector("use");
  expect(useElement.getAttribute("xlink:href")).to.eq("#ishezhi");
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "ishezhi",
      loading: true,
    },
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  expect(useElement.getAttribute("xlink:href")).to.eq("#ijiazai");
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "ishezhi",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let order = window.getComputedStyle(svg).order;
  expect(order).to.eq("1");
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "ishezhi",
      iconPosition: "right",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let order = window.getComputedStyle(svg).order;
  expect(order).to.eq("2");
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "ishezhi",
    },
  });
  vm.$mount();
  vm.$on("click", function() {
    expect(1).to.eq(1);
  });
  let button = vm.$el;
  button.click();
}
