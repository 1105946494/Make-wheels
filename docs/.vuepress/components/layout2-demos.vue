<template>
  <div>
    <j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <j-header style="height: 50px; background:lightskyblue;">header</j-header>
      <j-layout>
        <j-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</j-sider>
        <j-content style="height: 100px; background:deepskyblue;">content</j-content>
      </j-layout>
      <j-footer style="height: 50px; background:lightskyblue;">footer</j-footer>
    </j-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
export default {
  components: {
    "j-layout": Layout,
    "j-header": Header,
    "j-content": Content,
    "j-footer": Footer,
    "j-sider": Sider
  }
};
</script>

