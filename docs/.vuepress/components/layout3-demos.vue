<template>
  <div>
    <j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <j-sider style=" background:#ddd; width:200px; color: black;">sider</j-sider>
      <j-layout>
        <j-header style="height: 50px; background:lightskyblue;">header</j-header>
        <j-content style="height: 100px; background:deepskyblue;">content</j-content>
        <j-footer style="height: 50px; background:lightskyblue;">footer</j-footer>
      </j-layout>
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

